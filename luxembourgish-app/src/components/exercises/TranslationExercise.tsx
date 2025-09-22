import { useState } from 'react'
import { Exercise } from '../../types/LearningTypes'
import { AudioService } from '../../services/AudioService'

interface TranslationExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

const TranslationExercise: React.FC<TranslationExerciseProps> = ({
  exercise,
  onComplete
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [startTime] = useState(Date.now())

  const playCorrectAnswer = async () => {
    AudioService.playClickSound()
    try {
      await AudioService.speakLuxembourgish(exercise.correctAnswer)
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
          <span>Très bien !</span>
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
    <div className="translation-exercise">
      <div className="exercise-question">
        <h3>🔄 Traduction</h3>

        {/* Mot à traduire mis en évidence */}
        <div className="word-to-translate">
          <div className="french-word">
            <span className="word-label">Français</span>
            <span className="word-text">{exercise.vocabularyItem.french}</span>
          </div>
          <div className="translation-arrow">→</div>
          <div className="target-language">
            <span className="word-label">Luxembourgeois</span>
            <span className="word-placeholder">?</span>
          </div>
        </div>

        <p className="translation-instruction">{exercise.question}</p>
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

      {/* Affichage de la traduction complète après réponse */}
      {hasAnswered && (
        <div className="translation-result">
          <div className="complete-translation">
            <span className="french-part">{exercise.vocabularyItem.french}</span>
            <span className="equals">=</span>
            <span className="luxembourgish-part">
              {exercise.vocabularyItem.luxembourgish}
            </span>
            <button
              className="pronunciation-button"
              onClick={playCorrectAnswer}
              title="Écouter la prononciation"
            >
              🔊
            </button>
          </div>

          {/* Aide mémoire pour les mots similaires */}
          {(exercise.vocabularyItem.id === 'merci' || exercise.vocabularyItem.id === 'pardon') && (
            <div className="memory-aid">
              <div className="aid-header">
                <span className="aid-icon">🧠</span>
                <span>Aide-mémoire</span>
              </div>
              <p>Ce mot est identique en français ! Facile à retenir.</p>
            </div>
          )}

          {exercise.vocabularyItem.id === 'jo' && (
            <div className="memory-aid">
              <div className="aid-header">
                <span className="aid-icon">🧠</span>
                <span>Aide-mémoire</span>
              </div>
              <p>Pensez au "Yo!" anglais familier pour retenir "Jo" = Oui</p>
            </div>
          )}

          {exercise.vocabularyItem.id === 'nee' && (
            <div className="memory-aid">
              <div className="aid-header">
                <span className="aid-icon">🧠</span>
                <span>Aide-mémoire</span>
              </div>
              <p>Prononcez "NAY" comme en anglais pour dire non</p>
            </div>
          )}

          {/* Bouton pour entendre la prononciation */}
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
              🔊 Écouter "{exercise.vocabularyItem.luxembourgish}"
            </button>
          </div>

          {/* Usage et contexte */}
          <div className="usage-context">
            <p><strong>Usage :</strong> {exercise.vocabularyItem.usage}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default TranslationExercise