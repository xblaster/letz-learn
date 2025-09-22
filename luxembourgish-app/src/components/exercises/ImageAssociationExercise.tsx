import { useState } from 'react'
import { Exercise } from '../../types/LearningTypes'

interface ImageAssociationExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

const ImageAssociationExercise: React.FC<ImageAssociationExerciseProps> = ({
  exercise,
  onComplete
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return

    setSelectedAnswer(answer)
    setHasAnswered(true)

    const isCorrect = answer === exercise.correctAnswer
    const timeSpent = Date.now() - startTime

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
          <span>Parfait !</span>
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

  const getSituationEmoji = (vocabId: string) => {
    const emojis = {
      'moien': '👋',
      'addi': '🚪',
      'merci': '🙏',
      'pardon': '😅',
      'jo': '✅',
      'nee': '❌'
    }
    return emojis[vocabId as keyof typeof emojis] || '💬'
  }

  return (
    <div className="image-association-exercise">
      <div className="exercise-question">
        <h3>🖼️ Situation</h3>

        {/* Illustration de la situation */}
        <div className="situation-display">
          <div className="situation-emoji">
            {getSituationEmoji(exercise.vocabularyItem.id)}
          </div>
          <div className="situation-description">
            <p>{exercise.question}</p>
          </div>
        </div>

        {/* Contexte additionnel si disponible */}
        {exercise.context && (
          <div className="context-info">
            <p><em>{exercise.context}</em></p>
          </div>
        )}
      </div>

      {/* Options de réponse */}
      <div className="exercise-options">
        <p className="options-instruction">Choisissez l'expression appropriée :</p>
        {exercise.options?.map((option, index) => (
          <button
            key={index}
            className={getButtonClass(option)}
            onClick={() => handleAnswerSelect(option)}
            disabled={hasAnswered}
          >
            <span className="option-text">{option}</span>
            {hasAnswered && option === exercise.correctAnswer && (
              <span className="pronunciation-hint">
                /{exercise.vocabularyItem.pronunciation}/
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Message de feedback */}
      {getFeedbackMessage()}

      {/* Explication culturelle après réponse */}
      {hasAnswered && selectedAnswer === exercise.correctAnswer && (
        <div className="cultural-note">
          <div className="note-header">
            <span className="note-icon">💡</span>
            <span>Bon à savoir</span>
          </div>
          <p>{exercise.vocabularyItem.usage}</p>

          {/* Note spéciale pour certains mots */}
          {exercise.vocabularyItem.id === 'moien' && (
            <p><em>"Moien" est unique au luxembourgeois et peut être utilisé à tout moment de la journée, contrairement au français où on distingue "bonjour" et "bonsoir".</em></p>
          )}

          {exercise.vocabularyItem.id === 'merci' && (
            <p><em>Le mot "Merci" est identique en français et en luxembourgeois, ce qui facilite l'apprentissage !</em></p>
          )}
        </div>
      )}

      {/* Bouton pour entendre la prononciation */}
      {hasAnswered && (
        <div className="pronunciation-section">
          <button
            className="listen-button"
            onClick={() => {
              if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(exercise.vocabularyItem.luxembourgish)
                utterance.lang = 'de-DE'
                utterance.rate = 0.7
                speechSynthesis.speak(utterance)
              }
            }}
          >
            🔊 Écouter la prononciation
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageAssociationExercise