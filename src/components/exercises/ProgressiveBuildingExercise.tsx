import { useState } from 'react'
import { Box, Button, Typography, Stack, Stepper, Step, StepLabel, Chip, Card, LinearProgress } from '@mui/material'
import { Exercise } from '../../types/LearningTypes'

interface ProgressiveBuildingExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts: number) => void
}

const ProgressiveBuildingExercise = ({ exercise, onComplete }: ProgressiveBuildingExerciseProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(Date.now())

  // Configuration d'un exemple concret basé sur l'exercice
  const buildingConfig = {
    goal: exercise.vocabularyItem.french || "Je vais bien", // Objectif en français
    context: exercise.context || "Vous voulez répondre quand quelqu'un vous demande comment ça va",
    steps: [
      {
        label: "Qui parle ?",
        hint: "Qui dit cette phrase ?",
        options: ['Ech', 'Du', 'Hien', 'Si']
      },
      {
        label: "Comment ?",
        hint: "Comment vous sentez-vous ?",
        options: ['goen', 'sinn', 'hunn', 'maachen']
      },
      {
        label: "État/Feeling",
        hint: "Dans quel état êtes-vous ?",
        options: ['gutt', 'schlecht', 'midden', 'super']
      }
    ]
  }

  const currentStepConfig = buildingConfig.steps[currentStep]
  const currentOptions = currentStepConfig?.options || exercise.options || ['Option A', 'Option B', 'Option C']

  const handleStepSubmit = () => {
    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)
    setSelectedOption('')

    if (currentStep < buildingConfig.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      const timeSpent = Date.now() - startTime
      const newAttempts = attempts + 1
      setAttempts(newAttempts)

      const finalAnswer = newAnswers.join(' ')
      const isCorrect = finalAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase()
      onComplete(isCorrect, timeSpent, newAttempts)
    }
  }

  const canSubmit = selectedOption.length > 0
  const progressPercentage = ((currentStep + 1) / buildingConfig.steps.length) * 100

  return (
    <Stack spacing={4}>
      {/* Objectif et contexte */}
      <Card sx={{ p: 3, backgroundColor: 'rgba(25, 118, 210, 0.05)' }}>
        <Typography variant="h6" gutterBottom color="primary">
          🎯 Objectif : Dire "{buildingConfig.goal}"
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {buildingConfig.context}
        </Typography>
      </Card>

      {/* Progression */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Construction en cours...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentStep + 1}/{buildingConfig.steps.length}
          </Typography>
        </Box>
        <LinearProgress variant="determinate" value={progressPercentage} sx={{ mb: 2 }} />
      </Box>

      {/* Phrase en construction */}
      <Box
        sx={{
          p: 3,
          border: '2px dashed',
          borderColor: 'primary.main',
          borderRadius: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          minHeight: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {answers.length === 0 ? (
          <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
            Votre phrase apparaîtra ici...
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {answers.join(' ')} <span style={{ color: '#1976d2' }}>_</span>
          </Typography>
        )}
      </Box>

      {/* Étape actuelle */}
      <Box>
        <Typography variant="h6" gutterBottom>
          {currentStepConfig?.label}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          💡 {currentStepConfig?.hint}
        </Typography>

        <Stack spacing={2} sx={{ mb: 3 }}>
          {currentOptions.map((option, index) => (
            <Chip
              key={index}
              label={option}
              onClick={() => setSelectedOption(option)}
              color={selectedOption === option ? 'primary' : 'default'}
              variant={selectedOption === option ? 'filled' : 'outlined'}
              sx={{
                fontSize: '1.1rem',
                py: 2.5,
                height: 'auto',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.1)'
                }
              }}
            />
          ))}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={handleStepSubmit}
          disabled={!canSubmit}
          fullWidth
        >
          {currentStep < buildingConfig.steps.length - 1 ?
            `Continuer → ${buildingConfig.steps[currentStep + 1]?.label}` :
            'Terminer ma phrase'}
        </Button>
      </Box>
    </Stack>
  )
}

export default ProgressiveBuildingExercise