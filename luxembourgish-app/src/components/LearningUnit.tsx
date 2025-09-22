import { useState, useEffect } from 'react'
import {
  LearningUnit as LearningUnitType,
  Exercise,
  ExerciseResult,
  UnitProgress
} from '../types/LearningTypes'
import { AudioService } from '../services/AudioService'
import AudioRecognitionExercise from './exercises/AudioRecognitionExercise'
import ImageAssociationExercise from './exercises/ImageAssociationExercise'
import TranslationExercise from './exercises/TranslationExercise'
import DialogueCompletionExercise from './exercises/DialogueCompletionExercise'
import PronunciationExercise from './exercises/PronunciationExercise'
import ProgressBar from './ProgressBar'
import UnitCompletion from './UnitCompletion'

interface LearningUnitProps {
  unit: LearningUnitType
  onUnitComplete: (progress: UnitProgress) => void
  onExit: () => void
}

const LearningUnit: React.FC<LearningUnitProps> = ({ unit, onUnitComplete, onExit }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [exerciseResults, setExerciseResults] = useState<ExerciseResult[]>([])
  const [hearts, setHearts] = useState(5) // Système de cœurs comme Duolingo
  const [showResult, setShowResult] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [startTime] = useState(new Date())

  const currentExercise = unit.exercises[currentExerciseIndex]
  const progress = Math.round(((currentExerciseIndex + 1) / unit.exercises.length) * 100)

  useEffect(() => {
    // Vérifier si l'unité est terminée
    if (currentExerciseIndex >= unit.exercises.length) {
      completeUnit()
    }
  }, [currentExerciseIndex])

  const handleExerciseComplete = async (isCorrect: boolean, timeSpent: number, attempts: number = 1) => {
    const result: ExerciseResult = {
      exerciseId: currentExercise.id,
      isCorrect,
      timeSpent,
      attempts,
      timestamp: new Date()
    }

    setExerciseResults(prev => [...prev, result])

    // Activer l'audio si nécessaire
    await AudioService.enableAudio()

    // Jouer le son de feedback
    const correctAnswers = exerciseResults.filter(r => r.isCorrect).length + (isCorrect ? 1 : 0)
    const accuracy = Math.round((correctAnswers / (exerciseResults.length + 1)) * 100)
    AudioService.playFeedbackSound(isCorrect, accuracy)

    if (!isCorrect) {
      setHearts(prev => Math.max(0, prev - 1))

      // Game Over si plus de cœurs
      if (hearts <= 1) {
        setShowResult(true)
        return
      }
    }

    // Passer à l'exercice suivant après un court délai avec son de transition
    setTimeout(() => {
      AudioService.playTransitionSound()
      setCurrentExerciseIndex(prev => prev + 1)
    }, 1500)
  }

  const completeUnit = async () => {
    const endTime = new Date()
    const correctAnswers = exerciseResults.filter(r => r.isCorrect).length
    const accuracy = Math.round((correctAnswers / exerciseResults.length) * 100)

    const progress: UnitProgress = {
      unitId: unit.id,
      currentExerciseIndex: unit.exercises.length,
      completedExercises: exerciseResults,
      score: accuracy,
      isCompleted: accuracy >= unit.targetScore,
      startedAt: startTime,
      completedAt: endTime
    }

    // Jouer le son de completion d'unité
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
      onComplete: handleExerciseComplete,
      key: currentExercise.id // Force re-render pour chaque exercice
    }

    switch (currentExercise.type) {
      case 'audio_recognition':
        return <AudioRecognitionExercise {...exerciseProps} />
      case 'image_association':
        return <ImageAssociationExercise {...exerciseProps} />
      case 'translation':
        return <TranslationExercise {...exerciseProps} />
      case 'dialogue_completion':
        return <DialogueCompletionExercise {...exerciseProps} />
      case 'pronunciation':
        return <PronunciationExercise {...exerciseProps} />
      default:
        return <div>Type d'exercice non supporté</div>
    }
  }

  // Écran de fin d'unité ou game over
  if (showResult || isCompleted) {
    const correctAnswers = exerciseResults.filter(r => r.isCorrect).length
    const accuracy = Math.round((correctAnswers / exerciseResults.length) * 100)

    return (
      <UnitCompletion
        unit={unit}
        accuracy={accuracy}
        isSuccess={isCompleted && accuracy >= unit.targetScore}
        totalTime={Math.round((new Date().getTime() - startTime.getTime()) / 1000 / 60)}
        onRestart={restartUnit}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="learning-unit">
      {/* Header avec progression */}
      <div className="unit-header">
        <div className="unit-info">
          <button onClick={onExit} className="exit-btn">✕</button>
          <h2>{unit.title}</h2>
          <div className="hearts">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`heart ${i < hearts ? 'active' : 'inactive'}`}>
                ❤️
              </span>
            ))}
          </div>
        </div>

        <ProgressBar
          progress={progress}
          currentStep={currentExerciseIndex + 1}
          totalSteps={unit.exercises.length}
        />
      </div>

      {/* Exercice actuel */}
      <div className="exercise-container">
        {renderExercise()}
      </div>

      {/* Footer avec informations */}
      <div className="unit-footer">
        <div className="exercise-info">
          <span>Exercice {currentExerciseIndex + 1} sur {unit.exercises.length}</span>
          <span className="exercise-type">{getExerciseTypeName(currentExercise?.type)}</span>
        </div>
      </div>
    </div>
  )
}

function getExerciseTypeName(type?: string): string {
  const names = {
    'audio_recognition': 'Reconnaissance audio',
    'image_association': 'Association situation',
    'translation': 'Traduction',
    'dialogue_completion': 'Dialogue',
    'pronunciation': 'Prononciation'
  }
  return names[type as keyof typeof names] || 'Exercice'
}

export default LearningUnit