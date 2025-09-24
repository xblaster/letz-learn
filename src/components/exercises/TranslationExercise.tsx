import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import { Exercise } from '../../types/LearningTypes'

interface TranslationExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

type ButtonVariant = 'text' | 'outlined' | 'contained'
type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

const TranslationExercise = ({ exercise, onComplete }: TranslationExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const playCorrectAnswer = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(exercise.correctAnswer)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
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
    }, 1600)
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
      <Stack spacing={1.5}>
        <Typography variant="h5">Traduction</Typography>
        <Typography variant="body2" color="text.secondary">
          {exercise.question}
        </Typography>
        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 2, md: 3 },
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            background: 'linear-gradient(135deg, rgba(25,118,210,0.08) 0%, rgba(20,184,166,0.08) 100%)'
          }}
        >
          <Stack spacing={0.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Français
            </Typography>
            <Typography variant="h5">{exercise.vocabularyItem.french}</Typography>
          </Stack>
          <Divider flexItem orientation="vertical" sx={{ opacity: 0.2 }} />
          <Stack spacing={0.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Luxembourgeois
            </Typography>
            <Typography variant="h5" color="text.secondary">
              ?
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        {exercise.options?.map(option => {
          const optionStyles = getOptionStyles(option)
          const isCorrectOption = option === exercise.correctAnswer
          const isSelectedOption = option === selectedAnswer

          return (
            <Button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              disabled={hasAnswered}
              fullWidth
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
              {hasAnswered && isCorrectOption && (
                <Chip
                  icon={<CheckCircleRoundedIcon />}
                  label={`/${exercise.vocabularyItem.pronunciation}/`}
                  color="success"
                  variant="outlined"
                />
              )}
              {hasAnswered && !isCorrectOption && isSelectedOption && (
                <Chip icon={<CancelRoundedIcon />} label="Réponse choisie" color="error" variant="outlined" />
              )}
            </Button>
          )
        })}
      </Stack>

      {hasAnswered && (
        <Alert severity={selectedAnswer === exercise.correctAnswer ? 'success' : 'error'} icon={<TipsAndUpdatesRoundedIcon />}>
          {selectedAnswer === exercise.correctAnswer ? 'Très bien !' : `La bonne réponse était : ${exercise.correctAnswer}`}
        </Alert>
      )}

      {hasAnswered && (
        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 2, md: 3 },
            backgroundColor: 'rgba(25,118,210,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
            <Stack>
              <Typography variant="subtitle1">Traduction complète</Typography>
              <Typography variant="body1">
                {exercise.vocabularyItem.french}{' '}
                <strong>= {exercise.vocabularyItem.luxembourgish}</strong>
              </Typography>
            </Stack>
            <Button startIcon={<VolumeUpRoundedIcon />} onClick={playCorrectAnswer} variant="contained" color="secondary">
              Écouter
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {exercise.vocabularyItem.usage}
          </Typography>

          {(exercise.vocabularyItem.id === 'merci' || exercise.vocabularyItem.id === 'pardon') && (
            <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
              Ce mot est identique en français ! Facile à retenir.
            </Alert>
          )}

          {exercise.vocabularyItem.id === 'jo' && (
            <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
              Pensez au "Yo!" anglais familier pour retenir « Jo » = Oui.
            </Alert>
          )}

          {exercise.vocabularyItem.id === 'nee' && (
            <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
              Prononcez "NAY" comme en anglais pour dire non.
            </Alert>
          )}
        </Box>
      )}
    </Stack>
  )
}

export default TranslationExercise
