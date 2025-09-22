import { useState } from 'react'
import { Exercise } from '../../types/LearningTypes'
import { AudioService } from '../../services/AudioService'

interface AudioRecognitionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

const AudioRecognitionExercise: React.FC<AudioRecognitionExerciseProps> = ({
  exercise,
  onComplete
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const playAudio = async () => {
    // Jouer le son de clic d'abord
    AudioService.playClickSound()

    // Puis prononcer le mot
    try {
      await AudioService.speakLuxembourgish(exercise.vocabularyItem.luxembourgish)
    } catch (error) {
      console.warn('Pronunciation failed:', error)
    }
  }

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return

    setSelectedAnswer(answer)
    setHasAnswered(true)

    const isCorrect = answer === exercise.correctAnswer
    const timeSpent = Date.now() - startTime

    // Attendre un moment pour montrer le feedback avant de continuer
    setTimeout(() => {
      onComplete(isCorrect, timeSpent)
    }, 1500)
  }

  const getButtonClass = (option: string) => {
    if (!hasAnswered) return 'option-button'

    if (option === exercise.correctAnswer) {
      return 'option-button correct'
    } else if (option === selectedAnswer) {
      return 'option-button incorrect'
    }
    return 'option-button disabled'
  }

  const getFeedbackMessage = () => {
    if (!hasAnswered) return null

    if (selectedAnswer === exercise.correctAnswer) {
      return (
        <div className="feedback-message success">
          <span className="feedback-icon">✅</span>
          <span>Excellent !</span>
        </div>
      )
    } else {
      return (
        <div className="feedback-message error">
          <span className="feedback-icon">❌</span>
          <span>La bonne réponse était : {exercise.correctAnswer}</span>
        </div>
      )
    }
  }

  return (
    <div className="audio-recognition-exercise">
      <div className="exercise-question">
        <h3>🎧 {exercise.question}</h3>

        {/* Bouton pour jouer l'audio */}
        <div className="audio-section">
          <button
            className="audio-play-button"
            onClick={playAudio}
            disabled={hasAnswered}
          >
            <span className="audio-icon">🔊</span>
            <span>Écouter</span>
          </button>
          <p className="audio-hint">Cliquez pour entendre le mot en luxembourgeois</p>
        </div>

        {/* Affichage de la prononciation après réponse */}
        {hasAnswered && (
          <div className="pronunciation-display">
            <div className="word-display">
              <span className="luxembourgish-word">{exercise.vocabularyItem.luxembourgish}</span>
              <span className="pronunciation">/{exercise.vocabularyItem.pronunciation}/</span>
            </div>
          </div>
        )}
      </div>

      {/* Options de réponse */}
      <div className="exercise-options">
        {exercise.options?.map((option, index) => (
          <button
            key={index}
            className={getButtonClass(option)}
            onClick={() => handleAnswerSelect(option)}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Message de feedback */}
      {getFeedbackMessage()}

      {/* Explication de l'usage après réponse correcte */}
      {hasAnswered && selectedAnswer === exercise.correctAnswer && (
        <div className="usage-explanation">
          <p><strong>Usage :</strong> {exercise.vocabularyItem.usage}</p>
        </div>
      )}
    </div>
  )
}

export default AudioRecognitionExercise