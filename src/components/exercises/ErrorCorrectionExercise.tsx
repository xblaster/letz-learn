import { useState } from 'react'
import { Box, Button, Typography, Stack, Chip } from '@mui/material'
import { Exercise } from '../../types/LearningTypes'

interface ErrorCorrectionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const ErrorCorrectionExercise = ({ exercise, onComplete }: ErrorCorrectionExerciseProps) => {
  const [selectedCorrections, setSelectedCorrections] = useState<string[]>([])
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())

  // Simuler des erreurs dans le texte et des corrections possibles
  const textWithErrors = exercise.context || "Ech goen op de Maart gëschter."
  const errorOptions = exercise.options || [
    "Ech sinn op de Maart gaangen gëschter.",
    "Ech war gëschter op de Maart.",
    "Ech hunn gëschter op de Maart gaang.",
    "Gëschter sinn ech op de Maart gaangen."
  ]

  const handleSubmit = () => {
    const timeSpent = Date.now() - startTime
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    const isCorrect = selectedCorrections.some(correction =>
      correction.toLowerCase() === exercise.correctAnswer.toLowerCase()
    )
    onComplete(isCorrect, timeSpent, newAttempts)
  }

  const toggleCorrection = (correction: string) => {
    setSelectedCorrections(prev =>
      prev.includes(correction)
        ? prev.filter(c => c !== correction)
        : [...prev, correction]
    )
  }

  const canSubmit = selectedCorrections.length > 0

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

      <Box sx={{
        mb: 3,
        p: 2,
        backgroundColor: 'rgba(255, 152, 0, 0.1)',
        borderRadius: 1,
        border: '1px solid rgba(255, 152, 0, 0.3)'
      }}>
        <Typography variant="subtitle2" gutterBottom>
          Texte avec erreurs:
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          "{textWithErrors}"
        </Typography>
      </Box>

      <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
        Choisissez la/les correction(s) appropriée(s) :
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        {errorOptions.map((option, index) => (
          <Chip
            key={index}
            label={option}
            onClick={() => toggleCorrection(option)}
            color={selectedCorrections.includes(option) ? 'primary' : 'default'}
            variant={selectedCorrections.includes(option) ? 'filled' : 'outlined'}
            sx={{
              fontSize: '0.95rem',
              py: 2,
              height: 'auto',
              cursor: 'pointer',
              textAlign: 'left',
              justifyContent: 'flex-start',
              '& .MuiChip-label': {
                whiteSpace: 'normal',
                textAlign: 'left'
              },
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.1)'
              }
            }}
          />
        ))}
      </Stack>

      {selectedCorrections.length > 0 && (
        <Box sx={{
          mb: 2,
          p: 2,
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          borderRadius: 1
        }}>
          <Typography variant="body2" color="text.secondary">
            Correction(s) sélectionnée(s): {selectedCorrections.length}
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!canSubmit}
      >
        Vérifier la correction
      </Button>
    </Box>
  )
}

export default ErrorCorrectionExercise