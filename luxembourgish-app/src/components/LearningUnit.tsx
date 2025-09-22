import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded'
import ProgressBar from './ProgressBar'
import UnitCompletion from './UnitCompletion'
import {
  Exercise,
  ExerciseResult,
  LearningUnit as LearningUnitType,
  UnitProgress
} from '../types/LearningTypes'
import AudioRecognitionExercise from './exercises/AudioRecognitionExercise'
import ImageAssociationExercise from './exercises/ImageAssociationExercise'
import TranslationExercise from './exercises/TranslationExercise'
import DialogueCompletionExercise from './exercises/DialogueCompletionExercise'
import PronunciationExercise from './exercises/PronunciationExercise'
import { keyframes } from '@mui/system'
import { AudioService } from '../services/AudioService'

interface LearningUnitProps {
  unit: LearningUnitType
  onUnitComplete: (progress: UnitProgress) => void
  onExit: () => void
}

const containerAnimation = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`

const heartBeat = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.15); }
  60% { transform: scale(0.95); }
  100% { transform: scale(1); }
`

const LearningUnit = ({ unit, onUnitComplete, onExit }: LearningUnitProps) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [exerciseResults, setExerciseResults] = useState<ExerciseResult[]>([])
  const [hearts, setHearts] = useState(5)
  const [showResult, setShowResult] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [startTime] = useState(new Date())

  const currentExercise = unit.exercises[currentExerciseIndex]
  const progress = Math.round(((currentExerciseIndex + 1) / unit.exercises.length) * 100)

  useEffect(() => {
    if (currentExerciseIndex >= unit.exercises.length) {
      void completeUnit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentExerciseIndex])

  const handleExerciseComplete = async (isCorrect: boolean, timeSpent: number, attempts: number = 1) => {
    const result: ExerciseResult = {
      exerciseId: currentExercise.id,
      isCorrect,
      timeSpent,
      attempts,
      timestamp: new Date()
    }

    const updatedResults = [...exerciseResults, result]
    setExerciseResults(updatedResults)

    await AudioService.enableAudio()
    const correctAnswers = updatedResults.filter(r => r.isCorrect).length
    const accuracy = Math.round((correctAnswers / updatedResults.length) * 100)
    AudioService.playFeedbackSound(isCorrect, accuracy)

    if (!isCorrect) {
      setHearts(prev => Math.max(0, prev - 1))

      if (hearts <= 1) {
        setShowResult(true)
        return
      }
    }

    setTimeout(() => {
      AudioService.playTransitionSound()
      setCurrentExerciseIndex(prev => prev + 1)
    }, 1200)
  }

  const completeUnit = async () => {
    const endTime = new Date()
    const correctAnswers = exerciseResults.filter(r => r.isCorrect).length
    const accuracy = exerciseResults.length > 0
      ? Math.round((correctAnswers / exerciseResults.length) * 100)
      : 0

    const progress: UnitProgress = {
      unitId: unit.id,
      currentExerciseIndex: unit.exercises.length,
      completedExercises: exerciseResults,
      score: accuracy,
      isCompleted: accuracy >= unit.targetScore,
      startedAt: startTime,
      completedAt: endTime
    }

    await AudioService.enableAudio()
    AudioService.playCompletionSound()

    setIsCompleted(true)
    onUnitComplete(progress)
  }

  const restartUnit = () => {
    setCurrentExerciseIndex(0)
    setExerciseResults([])
    setHearts(5)
    setShowResult(false)
    setIsCompleted(false)
  }

  const renderExercise = () => {
    if (!currentExercise) return null

    const exerciseProps = {
      exercise: currentExercise,
      onComplete: handleExerciseComplete
    }

    switch (currentExercise.type) {
      case 'audio_recognition':
        return <AudioRecognitionExercise key={currentExercise.id} {...exerciseProps} />
      case 'image_association':
        return <ImageAssociationExercise key={currentExercise.id} {...exerciseProps} />
      case 'translation':
        return <TranslationExercise key={currentExercise.id} {...exerciseProps} />
      case 'dialogue_completion':
        return <DialogueCompletionExercise key={currentExercise.id} {...exerciseProps} />
      case 'pronunciation':
        return <PronunciationExercise key={currentExercise.id} {...exerciseProps} />
      default:
        return <Typography variant="body1">Type d'exercice non supporté</Typography>
    }
  }

  if (showResult || isCompleted) {
    const correctAnswers = exerciseResults.filter(r => r.isCorrect).length
    const accuracy = Math.round((correctAnswers / (exerciseResults.length || 1)) * 100)

    return (
      <UnitCompletion
        unit={unit}
        accuracy={accuracy}
        isSuccess={isCompleted && accuracy >= unit.targetScore}
        totalTime={Math.max(1, Math.round((new Date().getTime() - startTime.getTime()) / 1000 / 60))}
        onRestart={restartUnit}
        onExit={onExit}
      />
    )
  }

  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,249,255,0.9) 100%)',
        backdropFilter: 'blur(14px)',
        animation: `${containerAnimation} 0.4s ease`
      }}
    >
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Tooltip title="Quitter l'unité">
                <IconButton onClick={onExit} color="primary" size="small">
                  <CloseRoundedIcon />
                </IconButton>
              </Tooltip>
              <Typography variant="h4">{unit.title}</Typography>
            </Stack>
            <Typography variant="body1" color="text.secondary">
              {unit.description}
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Stack direction="row" spacing={0.5} alignItems="center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FavoriteRoundedIcon
                    key={index}
                    color={index < hearts ? 'error' : 'disabled'}
                    sx={{
                      fontSize: 22,
                      animation: index < hearts ? `${heartBeat} 2.8s ease ${index * 0.12}s infinite` : 'none'
                    }}
                  />
                ))}
              </Stack>
              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <AccessTimeRoundedIcon color="primary" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    ~{unit.estimatedTime} min
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CategoryRoundedIcon color="secondary" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    Niveau {unit.level}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ opacity: 0.3 }} />

        <ProgressBar progress={progress} currentStep={currentExerciseIndex + 1} totalSteps={unit.exercises.length} />

        <Box
          sx={{
            borderRadius: 4,
            border: '1px solid rgba(25,118,210,0.08)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            p: { xs: 2.5, md: 3 },
            boxShadow: '0 20px 50px rgba(25, 118, 210, 0.08)'
          }}
        >
          {renderExercise()}
        </Box>

        <Box
          sx={{
            borderRadius: 3,
            background: 'rgba(25,118,210,0.08)',
            px: { xs: 2, md: 3 },
            py: { xs: 1.5, md: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1.5
          }}
        >
          <Typography variant="body2">
            Exercice {currentExerciseIndex + 1} sur {unit.exercises.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {getExerciseTypeName(currentExercise?.type)}
          </Typography>
          <Button variant="outlined" size="small" onClick={onExit}>
            Mettre en pause
          </Button>
        </Box>
      </Stack>
    </Card>
  )
}

const getExerciseTypeName = (type?: Exercise['type']): string => {
  const mapping: Record<Exercise['type'], string> = {
    audio_recognition: 'Reconnaissance audio',
    image_association: 'Association situation',
    translation: 'Traduction',
    dialogue_completion: 'Dialogue',
    pronunciation: 'Prononciation'
  }

  if (!type) {
    return 'Exercice'
  }

  return mapping[type]
}

export default LearningUnit
