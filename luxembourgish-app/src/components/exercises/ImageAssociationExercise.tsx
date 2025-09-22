import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  Typography
} from '@mui/material'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded'
import { Exercise } from '../../types/LearningTypes'

interface ImageAssociationExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

type ButtonVariant = 'text' | 'outlined' | 'contained'
type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

const ImageAssociationExercise = ({ exercise, onComplete }: ImageAssociationExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return

    setSelectedAnswer(answer)
    setHasAnswered(true)

    const isCorrect = answer === exercise.correctAnswer
    const timeSpent = Date.now() - startTime

    setTimeout(() => {
      onComplete(isCorrect, timeSpent)
    }, 1500)
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

  const getSituationEmoji = (vocabId: string) => {
    const emojis: Record<string, string> = {
      moien: '👋',
      addi: '🚪',
      merci: '🙏',
      pardon: '😅',
      jo: '✅',
      nee: '❌'
    }
    return emojis[vocabId] || '💬'
  }

  return (
    <Stack spacing={3}>
      <Box
        sx={{
          borderRadius: 3,
          p: { xs: 2, md: 3 },
          background: 'linear-gradient(135deg, rgba(25,118,210,0.08) 0%, rgba(20,184,166,0.08) 100%)',
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Box sx={{ fontSize: '2.5rem' }}>{getSituationEmoji(exercise.vocabularyItem.id)}</Box>
        <Box>
          <Typography variant="subtitle1">Situation</Typography>
          <Typography variant="body1" color="text.secondary">
            {exercise.question}
          </Typography>
          {exercise.context && (
            <Typography variant="caption" color="text.secondary">
              {exercise.context}
            </Typography>
          )}
        </Box>
      </Box>

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
            ? 'Parfait !'
            : `La bonne réponse était : ${exercise.correctAnswer}`}
        </Alert>
      )}

      {hasAnswered && selectedAnswer === exercise.correctAnswer && (
        <Alert severity="info" icon={<EmojiObjectsRoundedIcon />}>
          {exercise.vocabularyItem.usage}
        </Alert>
      )}
    </Stack>
  )
}

export default ImageAssociationExercise
