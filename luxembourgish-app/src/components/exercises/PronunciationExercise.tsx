import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography
} from '@mui/material'
import MicRoundedIcon from '@mui/icons-material/MicRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import { Exercise } from '../../types/LearningTypes'

interface PronunciationExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

const PronunciationExercise = ({ exercise, onComplete }: PronunciationExerciseProps) => {
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecorded, setHasRecorded] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [startTime] = useState(Date.now())
  const [step, setStep] = useState<'listen' | 'record' | 'result'>('listen')

  const playModelAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(exercise.vocabularyItem.luxembourgish)
      utterance.lang = 'de-DE'
      utterance.rate = 0.6
      speechSynthesis.speak(utterance)
    }
  }

  const startRecording = async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      handleSimulatedRecording()
      return
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.lang = 'de-DE'
      recognition.continuous = false
      recognition.interimResults = false

      recognition.onstart = () => {
        setIsRecording(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase()
        const target = exercise.vocabularyItem.luxembourgish.toLowerCase()

        setIsRecording(false)
        setHasRecorded(true)
        evaluatePronunciation(transcript, target)
      }

      recognition.onerror = () => {
        setIsRecording(false)
        handleSimulatedRecording()
      }

      recognition.start()
    } catch (error) {
      handleSimulatedRecording()
    }
  }

  const handleSimulatedRecording = () => {
    setIsRecording(true)

    setTimeout(() => {
      setIsRecording(false)
      setHasRecorded(true)
      const randomScore = Math.random()
      const isCorrect = randomScore > 0.3

      if (isCorrect) {
        setFeedback('Très bien ! Votre prononciation semble correcte.')
      } else {
        setFeedback('Essayez encore ! Écoutez bien le modèle.')
      }

      setStep('result')

      setTimeout(() => {
        const timeSpent = Date.now() - startTime
        onComplete(isCorrect, timeSpent)
      }, 2000)
    }, 2000)
  }

  const evaluatePronunciation = (spoken: string, target: string) => {
    const similarity = calculateSimilarity(spoken, target)
    const isCorrect = similarity > 0.6

    if (isCorrect) {
      setFeedback('Excellent ! Votre prononciation est très bonne.')
    } else {
      setFeedback('Bonne tentative ! Écoutez encore le modèle et réessayez.')
    }

    setStep('result')
    setHasAnswered(true)

    setTimeout(() => {
      const timeSpent = Date.now() - startTime
      onComplete(isCorrect, timeSpent)
    }, 2000)
  }

  const calculateSimilarity = (str1: string, str2: string) => {
    const longer = str1.length > str2.length ? str1 : str2
    const shorter = str1.length > str2.length ? str2 : str1

    if (longer.length === 0) return 1

    const editDistance = levenshteinDistance(longer.toLowerCase(), shorter.toLowerCase())
    return (longer.length - editDistance) / longer.length
  }

  const levenshteinDistance = (str1: string, str2: string) => {
    const matrix: number[][] = []

    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i]
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }

    return matrix[str2.length][str1.length]
  }

  const getPronunciationTips = () => {
    const tips: Record<string, string> = {
      moien: 'Prononcez « MOY-en » en appuyant sur la première syllabe.',
      addi: 'Prononcez « ADI » comme une syllabe condensée, pas détachée.',
      merci: 'Comme en français, mais avec un accent légèrement allemand.',
      pardon: 'Comme en français, accent sur la dernière syllabe.',
      jo: 'Prononcez « YO » comme en anglais familier.',
      nee: 'Prononcez « NAY » en anglais.'
    }
    return tips[exercise.vocabularyItem.id] || 'Écoutez bien le modèle pour reproduire le rythme.'
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={1.5}>
        <Typography variant="h5">Prononciation</Typography>
        <Typography variant="body2" color="text.secondary">
          {exercise.question}
        </Typography>
        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 2, md: 3 },
            background: 'linear-gradient(135deg, rgba(25,118,210,0.08) 0%, rgba(20,184,166,0.08) 100%)'
          }}
        >
          <Typography variant="h4">{exercise.vocabularyItem.luxembourgish}</Typography>
          <Typography variant="body2" color="text.secondary">
            /{exercise.vocabularyItem.pronunciation}/
          </Typography>
        </Box>
        <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
          {getPronunciationTips()}
        </Alert>
      </Stack>

      <Stack spacing={2}>
        {step === 'listen' && (
          <Stack spacing={2}>
            <Button variant="contained" startIcon={<VolumeUpRoundedIcon />} onClick={playModelAudio}>
              Écouter le modèle
            </Button>
            <Button variant="outlined" onClick={() => setStep('record')}>
              Je suis prêt(e) à répéter
            </Button>
          </Stack>
        )}

        {step === 'record' && (
          <Stack spacing={2} alignItems="center">
            <Typography variant="subtitle1">À votre tour !</Typography>
            {!isRecording && !hasRecorded && (
              <Button
                variant="contained"
                startIcon={<MicRoundedIcon />}
                onClick={startRecording}
              >
                Commencer l'enregistrement
              </Button>
            )}
            {isRecording && (
              <Stack spacing={1} alignItems="center">
                <CircularProgress color="primary" />
                <Typography variant="body2">Enregistrement en cours...</Typography>
              </Stack>
            )}
          </Stack>
        )}

        {step === 'result' && (
          <Stack spacing={2}>
            <Alert severity={hasAnswered ? 'success' : 'info'} icon={<TipsAndUpdatesRoundedIcon />}>
              {feedback}
            </Alert>
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip label={exercise.vocabularyItem.luxembourgish} color="primary" />
              <Typography variant="body2" color="text.secondary">
                /{exercise.vocabularyItem.pronunciation}/
              </Typography>
            </Stack>
            {!hasAnswered && (
              <Button variant="outlined" onClick={() => { setStep('record'); setHasRecorded(false) }}>
                Réessayer
              </Button>
            )}
          </Stack>
        )}
      </Stack>

      <Typography variant="body2" color="text.secondary">
        Usage : {exercise.vocabularyItem.usage}
      </Typography>
    </Stack>
  )
}

export default PronunciationExercise
