import { useState } from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'
import { Exercise } from '../../types/LearningTypes'
import LuxembourgishChip from '../LuxembourgishChip'

interface WordOrderingExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const WordOrderingExercise = ({ exercise, onComplete }: WordOrderingExerciseProps) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [availableWords, setAvailableWords] = useState<string[]>(exercise.wordBank || [])
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())

  const handleWordClick = (word: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedWords(prev => prev.filter(w => w !== word))
      setAvailableWords(prev => [...prev, word])
    } else {
      setSelectedWords(prev => [...prev, word])
      setAvailableWords(prev => prev.filter(w => w !== word))
    }
  }

  const handleSubmit = () => {
    const timeSpent = Date.now() - startTime
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    const userAnswer = selectedWords.join(' ')
    const isCorrect = userAnswer.trim() === exercise.correctAnswer.trim()

    onComplete(isCorrect, timeSpent, newAttempts)
  }

  const canSubmit = selectedWords.length > 0

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {exercise.question}
      </Typography>

      {exercise.hint && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          💡 {exercise.hint}
        </Typography>
      )}

      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Phrase construite:
          </Typography>
          <Box
            sx={{
              minHeight: 60,
              p: 2,
              border: '2px dashed',
              borderColor: 'primary.main',
              borderRadius: 1,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              alignItems: 'center'
            }}
          >
            {selectedWords.length === 0 ? (
              <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Cliquez sur les mots pour construire la phrase
              </Typography>
            ) : (
              selectedWords.map((word, index) => (
                <LuxembourgishChip
                  key={`${word}-${index}`}
                  label={word}
                  luxembourgishText={word}
                  onClick={() => handleWordClick(word, true)}
                  sx={{ cursor: 'pointer' }}
                />
              ))
            )}
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Mots disponibles:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {availableWords.map((word, index) => (
              <LuxembourgishChip
                key={`${word}-${index}`}
                label={word}
                luxembourgishText={word}
                variant="outlined"
                onClick={() => handleWordClick(word, false)}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!canSubmit}
          sx={{ alignSelf: 'flex-start' }}
        >
          Vérifier
        </Button>
      </Stack>
    </Box>
  )
}

export default WordOrderingExercise