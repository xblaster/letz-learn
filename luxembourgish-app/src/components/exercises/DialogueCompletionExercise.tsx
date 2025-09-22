import { useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  Typography
} from '@mui/material'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import { Exercise } from '../../types/LearningTypes'

interface DialogueCompletionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

type ButtonVariant = 'text' | 'outlined' | 'contained'
type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

const DialogueCompletionExercise = ({ exercise, onComplete }: DialogueCompletionExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const dialogueParts = useMemo(() => {
    if (!exercise.context) return []
    return exercise.context.split('\n').filter(Boolean)
  }, [exercise.context])

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return

    setSelectedAnswer(answer)
    setHasAnswered(true)

    const isCorrect = answer === exercise.correctAnswer
    const timeSpent = Date.now() - startTime

    setTimeout(() => {
      onComplete(isCorrect, timeSpent)
    }, 2000)
  }

  const getOptionStyles = (option: string): { variant: ButtonVariant; color: ButtonColor } => {
    if (!hasAnswered) {
      return {
        variant: selectedAnswer === option ? 'contained' : 'outlined',
        color: selectedAnswer === option ? 'primary' : 'inherit'
      }
    }

    if (option === exercise.correctAnswer) {
      return { variant: 'contained', color: 'success' }
    }

    if (option === selectedAnswer) {
      return { variant: 'contained', color: 'error' }
    }

    return { variant: 'outlined', color: 'inherit' }
  }

  const getDialogueContext = () => {
    const contexts: Record<string, string> = {
      moien: 'Deux amis se rencontrent dans la rue le matin.',
      addi: 'Un client quitte un magasin après ses achats.',
      merci: "Quelqu'un offre un café à son collègue."
    }
    return contexts[exercise.vocabularyItem.id] || 'Conversation quotidienne'
  }

  const playCompleteDialogue = () => {
    if (!exercise.context || !('speechSynthesis' in window)) return

    const utterance = new SpeechSynthesisUtterance(
      exercise.context.replace('___', exercise.correctAnswer)
    )
    utterance.lang = 'de-DE'
    utterance.rate = 0.65
    speechSynthesis.speak(utterance)
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={1.5}>
        <Typography variant="h5">Complétez le dialogue</Typography>
        <Alert icon={<ChatBubbleRoundedIcon />} severity="info" sx={{ alignItems: 'center' }}>
          {getDialogueContext()}
        </Alert>

        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 2, md: 3 },
            backgroundColor: 'rgba(25,118,210,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
          }}
        >
          {dialogueParts.map((line, index) => {
            if (line.includes('___')) {
              const [before, after] = line.split('___')
              return (
                <Typography key={index} variant="body1">
                  <strong>{before}</strong>
                  <Chip label={hasAnswered ? selectedAnswer : '___'} color={hasAnswered ? 'primary' : 'default'} sx={{ mx: 1 }} />
                  <strong>{after}</strong>
                </Typography>
              )
            }

            const [speaker, text] = line.split(': ')
            return (
              <Typography key={index} variant="body1">
                <strong>{speaker}:</strong> {text}
              </Typography>
            )
          })}
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        {exercise.options?.map(option => {
          const optionStyles = getOptionStyles(option)

          return (
            <Button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              disabled={hasAnswered}
              variant={optionStyles.variant}
              color={optionStyles.color}
              fullWidth
              sx={{
                borderRadius: 3,
                px: 3,
                py: 2,
                textTransform: 'none',
                justifyContent: 'space-between',
                fontWeight: 600
              }}
            >
              <span>{option}</span>
              {hasAnswered && option === exercise.correctAnswer && (
                <Chip label={`/${exercise.vocabularyItem.pronunciation}/`} color="success" variant="outlined" />
              )}
            </Button>
          )
        })}
      </Stack>

      {hasAnswered && (
        <Alert severity={selectedAnswer === exercise.correctAnswer ? 'success' : 'error'} icon={<TipsAndUpdatesRoundedIcon />}>
          {selectedAnswer === exercise.correctAnswer
            ? 'Excellent ! Le dialogue est naturel.'
            : `La bonne réponse était : ${exercise.correctAnswer}`}
        </Alert>
      )}

      {hasAnswered && (
        <Stack spacing={2}>
          <Button startIcon={<VolumeUpRoundedIcon />} variant="contained" onClick={playCompleteDialogue}>
            Écouter le dialogue complet
          </Button>
          <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
            {exercise.vocabularyItem.usage}
          </Alert>
        </Stack>
      )}
    </Stack>
  )
}

export default DialogueCompletionExercise
