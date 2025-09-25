import { useMemo, useState } from 'react'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import LuxembourgishButton from '../LuxembourgishButton'
import { Exercise } from '../../types/LearningTypes'

interface WordPairingExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const shuffleArray = <T,>(values: T[]): T[] => {
  const array = [...values]
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const WordPairingExercise = ({ exercise, onComplete }: WordPairingExerciseProps) => {
  const pairs = exercise.wordPairs ?? []
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({})
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const columnLabels = exercise.columnLabels ?? {
    left: 'Luxembourgeois',
    right: 'Français'
  }

  const correctMap = useMemo(() => {
    return pairs.reduce<Record<string, string>>((acc, pair) => {
      acc[pair.left] = pair.right
      return acc
    }, {})
  }, [pairs])

  const leftColumn = useMemo(
    () => shuffleArray(pairs.map(pair => pair.left)),
    // Re-shuffle when exercise changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id]
  )

  const rightColumn = useMemo(
    () => shuffleArray(pairs.map(pair => pair.right)),
    // Re-shuffle when exercise changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id]
  )

  const isRightMatched = (value: string) => Object.values(matchedPairs).includes(value)

  const resetSelection = () => {
    setSelectedLeft(null)
    setSelectedRight(null)
  }

  const handleMatchAttempt = (leftValue: string, rightValue: string) => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (correctMap[leftValue] === rightValue) {
      const updatedPairs = { ...matchedPairs, [leftValue]: rightValue }
      setMatchedPairs(updatedPairs)
      setErrorMessage(null)
      setSuccessMessage('Parfait ! Continuez avec les autres mots.')
      resetSelection()

      if (Object.keys(updatedPairs).length === pairs.length) {
        const timeSpent = Date.now() - startTime
        onComplete(true, timeSpent, newAttempts)
      }
    } else {
      setErrorMessage(`« ${leftValue} » ne correspond pas à « ${rightValue} ». Réessayez !`)
      setSuccessMessage(null)
      resetSelection()
    }
  }

  const handleLeftClick = (value: string) => {
    if (matchedPairs[value]) {
      return
    }

    if (selectedLeft === value) {
      setSelectedLeft(null)
      return
    }

    if (selectedRight) {
      handleMatchAttempt(value, selectedRight)
    } else {
      setSelectedLeft(value)
      setErrorMessage(null)
      setSuccessMessage(null)
    }
  }

  const handleRightClick = (value: string) => {
    if (isRightMatched(value)) {
      return
    }

    if (selectedRight === value) {
      setSelectedRight(null)
      return
    }

    if (selectedLeft) {
      handleMatchAttempt(selectedLeft, value)
    } else {
      setSelectedRight(value)
      setErrorMessage(null)
      setSuccessMessage(null)
    }
  }

  if (pairs.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary">
        Aucun mot à associer n'est configuré pour cet exercice.
      </Typography>
    )
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {exercise.question}
      </Typography>

      {exercise.context && (
        <Typography variant="body1" sx={{ mb: 2 }} color="text.secondary">
          {exercise.context}
        </Typography>
      )}

      {exercise.hint && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          💡 {exercise.hint}
        </Typography>
      )}

      <Stack spacing={2} sx={{ mb: 2 }}>
        {errorMessage && (
          <Alert severity="error" onClose={() => setErrorMessage(null)}>
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" onClose={() => setSuccessMessage(null)}>
            {successMessage}
          </Alert>
        )}
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 1 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            {columnLabels.left}
          </Typography>
          <Stack spacing={1.5}>
            {leftColumn.map(value => {
              const isMatched = Boolean(matchedPairs[value])
              const isSelected = selectedLeft === value

              return (
                <LuxembourgishButton
                  key={value}
                  variant={isMatched ? 'contained' : 'outlined'}
                  color={isMatched ? 'success' : isSelected ? 'primary' : 'secondary'}
                  onClick={() => handleLeftClick(value)}
                  disabled={isMatched}
                  luxembourgishText={value}
                  playOnClick={!isMatched}
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    fontSize: '1rem',
                    py: 1.5,
                    borderWidth: isSelected ? 2 : 1
                  }}
                >
                  {value}
                </LuxembourgishButton>
              )
            })}
          </Stack>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            {columnLabels.right}
          </Typography>
          <Stack spacing={1.5}>
            {rightColumn.map(value => {
              const isMatched = isRightMatched(value)
              const isSelected = selectedRight === value

              return (
                <Button
                  key={value}
                  variant={isMatched ? 'contained' : 'outlined'}
                  color={isMatched ? 'success' : isSelected ? 'primary' : 'secondary'}
                  onClick={() => handleRightClick(value)}
                  disabled={isMatched}
                  sx={{
                    justifyContent: 'flex-end',
                    textTransform: 'none',
                    fontSize: '1rem',
                    py: 1.5,
                    borderWidth: isSelected ? 2 : 1
                  }}
                >
                  {value}
                </Button>
              )
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default WordPairingExercise
