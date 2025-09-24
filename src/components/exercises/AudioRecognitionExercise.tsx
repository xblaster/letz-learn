import { useState } from 'react'
import {
  Alert,
  Button,
  Chip,
  Stack,
  Typography
} from '@mui/material'
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import { Exercise } from '../../types/LearningTypes'
import { AudioService } from '../../services/AudioService'

interface AudioRecognitionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

type ButtonVariant = 'text' | 'outlined' | 'contained'
type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

const AudioRecognitionExercise = ({ exercise, onComplete }: AudioRecognitionExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const playAudio = async () => {
    AudioService.playClickSound()
    try {
      await AudioService.speakLuxembourgish(exercise.vocabularyItem.luxembourgish)
    } catch (error) {
      console.warn('Pronunciation failed:', error)
    }
  }

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

  return (
    <Stack spacing={3}>
      <Stack spacing={2}>
        <Typography variant="h5">Reconnaissance audio</Typography>
        <Typography variant="body2" color="text.secondary">
          {exercise.question}
        </Typography>
        <Button
          variant="contained"
          startIcon={<HeadphonesRoundedIcon />}
          onClick={playAudio}
          sx={{ alignSelf: 'flex-start' }}
        >
          {hasAnswered ? 'Réécouter le mot' : 'Écouter le mot'}
        </Button>
        {hasAnswered && (
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={exercise.vocabularyItem.luxembourgish} color="primary" />
            <Typography variant="body2" color="text.secondary">
              /{exercise.vocabularyItem.pronunciation}/
            </Typography>
          </Stack>
        )}
      </Stack>

      <Stack spacing={1.5}>
        {exercise.options?.map(option => {
          const optionStyles = getOptionStyles(option)
          const isCorrectOption = option === exercise.correctAnswer
          const isSelectedOption = option === selectedAnswer

          return (
            <Button
              key={option}
              fullWidth
              onClick={() => handleAnswerSelect(option)}
              disabled={hasAnswered}
              variant={optionStyles.variant}
              color={optionStyles.color}
              sx={{
                justifyContent: 'space-between',
                borderRadius: 3,
                px: 3,
                py: 2,
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              <span>{option}</span>
              {hasAnswered && isCorrectOption && <CheckCircleRoundedIcon />}
              {hasAnswered && !isCorrectOption && isSelectedOption && <CancelRoundedIcon />}
            </Button>
          )
        })}
      </Stack>

      {hasAnswered && (
        <Alert severity={selectedAnswer === exercise.correctAnswer ? 'success' : 'error'} icon={<TipsAndUpdatesRoundedIcon />}>
          {selectedAnswer === exercise.correctAnswer
            ? 'Excellent ! Vous avez reconnu le mot.'
            : `La bonne réponse était : ${exercise.correctAnswer}`}
        </Alert>
      )}

      {hasAnswered && selectedAnswer === exercise.correctAnswer && (
        <Alert severity="info" icon={<VolumeUpRoundedIcon />}>
          {exercise.vocabularyItem.usage}
        </Alert>
      )}
    </Stack>
  )
}

export default AudioRecognitionExercise
