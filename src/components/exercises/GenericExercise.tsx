import { useState } from 'react'
import { Box, Button, Typography, Stack, Chip } from '@mui/material'
import { Exercise } from '../../types/LearningTypes'

interface GenericExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const GenericExercise = ({ exercise, onComplete }: GenericExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())

  // Utiliser les options de l'exercice ou créer des options par défaut
  const options = exercise.options || [
    exercise.correctAnswer,
    ...(exercise.distractors || ['Choix A', 'Choix B', 'Choix C'])
  ].filter(Boolean).sort(() => Math.random() - 0.5)

  const handleSubmit = () => {
    const timeSpent = Date.now() - startTime
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    const isCorrect = selectedAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase()
    onComplete(isCorrect, timeSpent, newAttempts)
  }

  const canSubmit = selectedAnswer.length > 0

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

      <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
        Choisissez votre réponse :
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option}
            onClick={() => setSelectedAnswer(option)}
            color={selectedAnswer === option ? 'primary' : 'default'}
            variant={selectedAnswer === option ? 'filled' : 'outlined'}
            sx={{
              fontSize: '1rem',
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

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!canSubmit}
      >
        Vérifier
      </Button>
    </Box>
  )
}

export default GenericExercise