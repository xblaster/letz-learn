import { useState } from 'react'
import { Box, Button, Typography, Stack, Chip, Divider } from '@mui/material'
import { Exercise } from '../../types/LearningTypes'

interface CreativeExpressionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const CreativeExpressionExercise = ({ exercise, onComplete }: CreativeExpressionExerciseProps) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())

  // Mots et expressions disponibles pour la construction créative
  const availableWords = exercise.wordBank || [
    'Ech', 'Du', 'Hien', 'Si', 'Mir', 'Dir', 'Si',
    'sinn', 'bass', 'hunn', 'ginn', 'maachen', 'kommen', 'goen',
    'frou', 'glécklech', 'traureg', 'roueg', 'opgeregt',
    'haut', 'gëschter', 'muer', 'elo', 'spéit', 'fréi',
    'héi', 'do', 'doheem', 'op der Aarbecht', 'an der Schoul',
    'a', 'mam', 'mat', 'op', 'an', 'vu', 'no', 'fir',
    'wann', 'well', 'mee', 'awer', 'oder', 'an'
  ]

  const handleWordClick = (word: string) => {
    setSelectedWords(prev => [...prev, word])
  }

  const handleRemoveWord = (index: number) => {
    setSelectedWords(prev => prev.filter((_, i) => i !== index))
  }

  const handleClear = () => {
    setSelectedWords([])
  }

  const handleSubmit = () => {
    const timeSpent = Date.now() - startTime
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    // Pour les exercices créatifs, on considère qu'une phrase de 3+ mots est correcte
    const isCorrect = selectedWords.length >= 3
    onComplete(isCorrect, timeSpent, newAttempts)
  }

  const canSubmit = selectedWords.length >= 3

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {exercise.question}
      </Typography>

      {exercise.context && (
        <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
          {exercise.context}
        </Typography>
      )}

      {exercise.hint && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          💡 {exercise.hint}
        </Typography>
      )}

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Votre phrase:
        </Typography>
        <Box
          sx={{
            minHeight: 80,
            p: 2,
            border: '2px dashed',
            borderColor: 'primary.main',
            borderRadius: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(25, 118, 210, 0.05)'
          }}
        >
          {selectedWords.length === 0 ? (
            <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
              Cliquez sur les mots pour construire votre phrase créative
            </Typography>
          ) : (
            selectedWords.map((word, index) => (
              <Chip
                key={index}
                label={word}
                onDelete={() => handleRemoveWord(index)}
                color="primary"
                sx={{ cursor: 'pointer' }}
              />
            ))
          )}
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Minimum 3 mots ({selectedWords.length}/3)
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Button size="small" variant="outlined" onClick={handleClear} disabled={selectedWords.length === 0}>
          Effacer tout
        </Button>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="subtitle2" gutterBottom>
        Mots disponibles:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {availableWords.map((word, index) => (
          <Chip
            key={index}
            label={word}
            variant="outlined"
            onClick={() => handleWordClick(word)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.1)'
              }
            }}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!canSubmit}
      >
        Valider ma création
      </Button>
    </Box>
  )
}

export default CreativeExpressionExercise