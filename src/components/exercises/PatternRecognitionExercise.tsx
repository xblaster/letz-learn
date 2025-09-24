import { useState } from 'react'
import { Box, Button, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Exercise } from '../../types/LearningTypes'

interface PatternRecognitionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const PatternRecognitionExercise = ({ exercise, onComplete }: PatternRecognitionExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())

  const handleSubmit = () => {
    const timeSpent = Date.now() - startTime
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    const isCorrect = selectedAnswer === exercise.correctAnswer
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

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
        >
          {exercise.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              sx={{ mb: 1 }}
            />
          ))}
        </RadioGroup>
      </FormControl>

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

export default PatternRecognitionExercise