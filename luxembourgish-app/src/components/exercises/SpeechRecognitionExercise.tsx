import { useMemo, useState } from 'react'
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
import StopRoundedIcon from '@mui/icons-material/StopRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import { Exercise } from '../../types/LearningTypes'
import { AudioService } from '../../services/AudioService'
import { SpeechRecognitionService } from '../../services/SpeechRecognitionService'

interface SpeechRecognitionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts?: number) => void
}

const SpeechRecognitionExercise = ({ exercise, onComplete }: SpeechRecognitionExerciseProps) => {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [result, setResult] = useState<{ isCorrect: boolean; similarity: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(() => Date.now())

  const speechSupported = useMemo(() => SpeechRecognitionService.isSupported(), [])
  const expectedSentence = useMemo(() => exercise.expectedSentence ?? exercise.correctAnswer, [exercise.correctAnswer, exercise.expectedSentence])

  const handlePlayModel = async () => {
    AudioService.playClickSound()

    try {
      await AudioService.speakLuxembourgish(expectedSentence, 0.75)
    } catch (err) {
      console.warn('Pronunciation failed:', err)
    }
  }

  const finalizeAttempt = (finalTranscript: string) => {
    const scoring = SpeechRecognitionService.scoreTranscript(expectedSentence, finalTranscript)
    const attemptNumber = attempts + 1

    setTranscript(finalTranscript)
    setResult(scoring)
    setAttempts(attemptNumber)
    setIsRecording(false)

    const timeSpent = Date.now() - startTime

    setTimeout(() => {
      onComplete(scoring.isCorrect, timeSpent, attemptNumber)
    }, 1800)
  }

  const startRecognition = () => {
    setError(null)
    setResult(null)

    if (speechSupported) {
      try {
        SpeechRecognitionService.startRecognition({
          language: 'lb-LU',
          interimResults: false,
          continuous: false,
          onStart: () => {
            setIsRecording(true)
          },
          onResult: (capturedTranscript) => {
            finalizeAttempt(capturedTranscript)
          },
          onEnd: () => {
            setIsRecording(false)
          },
          onError: (err) => {
            console.warn('Speech recognition error:', err)
            setError("Une erreur est survenue. Mode simulation activé.")
            runSimulation()
          }
        })
      } catch (err) {
        console.warn('Speech recognition start failed:', err)
        setError("Reconnaissance vocale indisponible. Mode simulation activé.")
        runSimulation()
      }
    } else {
      runSimulation()
    }
  }

  const stopRecognition = () => {
    if (!speechSupported) return

    SpeechRecognitionService.stopRecognition()
    setIsRecording(false)
  }

  const runSimulation = () => {
    setIsRecording(true)

    SpeechRecognitionService.simulateRecognition(expectedSentence, (simulatedTranscript) => {
      finalizeAttempt(simulatedTranscript)
    })
  }

  const handleMicrophoneClick = () => {
    if (isRecording && speechSupported) {
      stopRecognition()
      return
    }

    if (isRecording) {
      // Simulation en cours, on ignore les clics
      return
    }

    startRecognition()
  }

  const similarityPercentage = result ? Math.round(result.similarity * 100) : null

  return (
    <Stack spacing={3}>
      <Stack spacing={1.5}>
        <Typography variant="h5">Speech recognition</Typography>
        <Typography variant="body2" color="text.secondary">
          {exercise.question}
        </Typography>
        {(exercise.hint || exercise.context) && (
          <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
            {exercise.hint || exercise.context}
          </Alert>
        )}
        {!speechSupported && (
          <Alert severity="warning" icon={<GraphicEqRoundedIcon />}>
            Votre navigateur ne supporte pas la reconnaissance vocale. Nous allons simuler le résultat pour que vous puissiez continuer.
          </Alert>
        )}
      </Stack>

      <Box
        sx={{
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(25,118,210,0.08) 0%, rgba(20,184,166,0.08) 100%)',
          p: { xs: 2, md: 3 }
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          Phrase cible
        </Typography>
        <Typography variant="h5">{expectedSentence}</Typography>
        <Chip label={exercise.vocabularyItem.luxembourgish} color="primary" sx={{ mt: 1 }} />
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
        <Button
          variant="contained"
          color={isRecording && speechSupported ? 'error' : 'primary'}
          onClick={handleMicrophoneClick}
          startIcon={isRecording && speechSupported ? <StopRoundedIcon /> : <MicRoundedIcon />}
          disabled={isRecording && !speechSupported}
        >
          {isRecording && speechSupported ? 'Arrêter' : 'Prononcer la phrase'}
        </Button>
        <Button variant="outlined" color="secondary" onClick={handlePlayModel} startIcon={<VolumeUpRoundedIcon />}>
          Écouter le modèle
        </Button>
      </Stack>

      {isRecording && (
        <Stack spacing={1} alignItems="center">
          <CircularProgress color="primary" />
          <Typography variant="body2" color="text.secondary">
            {speechSupported ? 'Parlez clairement près du micro...' : 'Analyse de votre tentative...'}
          </Typography>
        </Stack>
      )}

      {error && (
        <Alert severity="warning" icon={<GraphicEqRoundedIcon />}>
          {error}
        </Alert>
      )}

      {result && (
        <Alert severity={result.isCorrect ? 'success' : 'info'} icon={<GraphicEqRoundedIcon />}>
          <Stack spacing={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Transcription détectée
            </Typography>
            <Typography variant="body1">{transcript || 'Transcription indisponible'}</Typography>
            {similarityPercentage !== null && (
              <Typography variant="body2" color="text.secondary">
                Similarité : {similarityPercentage}%
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              {result.isCorrect
                ? 'Super ! Votre prononciation correspond à la phrase.'
                : "Bonne tentative ! Continuez à vous entraîner sur l'accent."}
            </Typography>
          </Stack>
        </Alert>
      )}
    </Stack>
  )
}

export default SpeechRecognitionExercise
