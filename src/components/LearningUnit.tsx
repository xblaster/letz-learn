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
import SentenceConstructionExercise from './exercises/SentenceConstructionExercise'
import SpeechRecognitionExercise from './exercises/SpeechRecognitionExercise'
import WordOrderingExercise from './exercises/WordOrderingExercise'
import PhraseCompletionExercise from './exercises/PhraseCompletionExercise'
import ProgressiveBuildingExercise from './exercises/ProgressiveBuildingExercise'
import PatternRecognitionExercise from './exercises/PatternRecognitionExercise'
import CreativeExpressionExercise from './exercises/CreativeExpressionExercise'
import ErrorCorrectionExercise from './exercises/ErrorCorrectionExercise'
import WordPairingExercise from './exercises/WordPairingExercise'
import GenericExercise from './exercises/GenericExercise'
import { keyframes } from '@mui/system'
import { useSoundEffects } from '../hooks/useSoundEffects'

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
  const [showErrorFeedback, setShowErrorFeedback] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { playSuccessSound, playErrorSound, playTransitionSound, playCompletionSound } = useSoundEffects()

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

    const correctAnswers = updatedResults.filter(r => r.isCorrect).length
    const accuracy = Math.round((correctAnswers / updatedResults.length) * 100)

    if (isCorrect) {
      void playSuccessSound()
    } else {
      void playErrorSound()
    }

    if (!isCorrect) {
      setHearts(prev => Math.max(0, prev - 1))

      // Créer un message d'explication pédagogique
      const correctAnswer = currentExercise.correctAnswer
      const vocabulary = currentExercise.vocabularyItem

      let explanationMessage = `❌ **La bonne réponse était :** "${correctAnswer}"\n\n`

      // Ajouter la traduction si disponible
      if (vocabulary.french && vocabulary.french !== correctAnswer) {
        explanationMessage += `🇫🇷 **En français :** ${vocabulary.french}\n\n`
      }

      // Ajouter la prononciation
      if (vocabulary.pronunciation) {
        explanationMessage += `🔊 **Prononciation :** /${vocabulary.pronunciation}/\n\n`
      }

      // Ajouter le contexte d'usage
      if (vocabulary.usage) {
        explanationMessage += `💡 **À retenir :** ${vocabulary.usage}`
      } else if (currentExercise.context) {
        explanationMessage += `💡 **Contexte :** ${currentExercise.context}`
      } else {
        explanationMessage += `💡 **Conseil :** Révisez cette expression pour mieux la retenir !`
      }

      setErrorMessage(explanationMessage)
      setShowErrorFeedback(true)

      if (hearts <= 1) {
        // Pas de timeout automatique, l'utilisateur clique pour voir les résultats
        return
      }
    } else {
      // Réponse correcte - passage rapide à l'exercice suivant
      setTimeout(() => {
        void playTransitionSound()
        setCurrentExerciseIndex(prev => prev + 1)
      }, 1200)
    }
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

    void playCompletionSound()

    setIsCompleted(true)
    onUnitComplete(progress)
  }

  const restartUnit = () => {
    setCurrentExerciseIndex(0)
    setExerciseResults([])
    setHearts(5)
    setShowResult(false)
    setIsCompleted(false)
    setShowErrorFeedback(false)
  }

  const continueToNextExercise = () => {
    setShowErrorFeedback(false)
    if (hearts <= 1) {
      setShowResult(true)
    } else {
      void playTransitionSound()
      setCurrentExerciseIndex(prev => prev + 1)
    }
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
      case 'sentence_construction':
        return <SentenceConstructionExercise key={currentExercise.id} {...exerciseProps} />
      case 'speech_recognition':
        return <SpeechRecognitionExercise key={currentExercise.id} {...exerciseProps} />
      case 'word_ordering':
        return <WordOrderingExercise key={currentExercise.id} {...exerciseProps} />
      case 'phrase_completion':
        return <PhraseCompletionExercise key={currentExercise.id} {...exerciseProps} />
      case 'progressive_building':
        return <ProgressiveBuildingExercise key={currentExercise.id} {...exerciseProps} />
      case 'pattern_recognition':
        return <PatternRecognitionExercise key={currentExercise.id} {...exerciseProps} />
      case 'creative_expression':
        return <CreativeExpressionExercise key={currentExercise.id} {...exerciseProps} />
      case 'error_correction':
        return <ErrorCorrectionExercise key={currentExercise.id} {...exerciseProps} />
      case 'word_pairing':
        return <WordPairingExercise key={currentExercise.id} {...exerciseProps} />
      case 'register_adaptation':
      case 'argumentation_building':
      case 'cultural_context':
      case 'text_comprehension':
      case 'opinion_expression':
        return <GenericExercise key={currentExercise.id} {...exerciseProps} />
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
        background: 'linear-gradient(180deg, rgba(10,10,20,0.05) 0%, rgba(15,25,35,0.05) 100%)',
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
            borderRadius: 1,
            border: '1px solid rgba(25,118,210,0.08)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            p: { xs: 2.5, md: 3 },
            boxShadow: '0 20px 50px rgba(25, 118, 210, 0.08)'
          }}
        >
          {showErrorFeedback ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 4,
                px: 2
              }}
            >
              <Typography variant="h6" color="error" gutterBottom>
                Pas tout à fait !
              </Typography>
              <Box sx={{
                mb: 3,
                textAlign: 'left',
                backgroundColor: 'rgba(255, 243, 224, 0.8)',
                p: 2,
                borderRadius: 1,
                border: '1px solid rgba(255, 152, 0, 0.2)'
              }}>
                {errorMessage.split('\n').map((line, index) => {
                  if (line.trim() === '') return <br key={index} />

                  // Traiter les lignes avec **bold**
                  if (line.includes('**')) {
                    const parts = line.split('**')
                    return (
                      <Typography key={index} variant="body1" sx={{ mb: 0.5 }}>
                        {parts.map((part, i) =>
                          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                        )}
                      </Typography>
                    )
                  }

                  return (
                    <Typography key={index} variant="body1" sx={{ mb: 0.5 }}>
                      {line}
                    </Typography>
                  )
                })}
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={continueToNextExercise}
                sx={{ mt: 2 }}
              >
                {hearts <= 1 ? 'Voir mes résultats' : 'Continuer'}
              </Button>
            </Box>
          ) : (
            renderExercise()
          )}
        </Box>

        <Box
          sx={{
            borderRadius: 1,
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
    pronunciation: 'Prononciation',
    sentence_construction: 'Construction de phrase',
    speech_recognition: 'Reconnaissance vocale',
    word_ordering: 'Remise en ordre',
    phrase_completion: 'Complétion de phrase',
    progressive_building: 'Construction progressive',
    pattern_recognition: 'Reconnaissance de motifs',
    creative_expression: 'Expression créative',
    error_correction: "Correction d'erreurs",
    word_pairing: 'Association de mots',
    register_adaptation: 'Adaptation de registre',
    argumentation_building: "Construction d'arguments",
    cultural_context: 'Contexte culturel',
    text_comprehension: 'Compréhension de texte',
    opinion_expression: "Expression d'opinion"
  }

  if (!type) {
    return 'Exercice'
  }

  return mapping[type]
}

export default LearningUnit
