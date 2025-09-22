import { useState } from 'react'
import { Exercise } from '../../types/LearningTypes'

interface DialogueCompletionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

const DialogueCompletionExercise: React.FC<DialogueCompletionExerciseProps> = ({
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
    }, 2000) // Plus de temps pour lire le dialogue complet
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
          <span>Excellent ! Le dialogue est naturel.</span>
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

  const renderDialogue = () => {
    if (!exercise.context) return null

    const dialogueParts = exercise.context.split('\n')

    return (
      <div className="dialogue-display">
        {dialogueParts.map((line, index) => {
          if (line.trim() === '') return null

          const isBlank = line.includes('___')

          if (isBlank) {
            const parts = line.split('___')
            return (
              <div key={index} className="dialogue-line highlight">
                <span className="dialogue-text">{parts[0]}</span>
                <span className="dialogue-blank">
                  {hasAnswered ? selectedAnswer : '___'}
                </span>
                <span className="dialogue-text">{parts[1]}</span>
              </div>
            )
          } else {
            const [speaker, text] = line.split(': ')
            return (
              <div key={index} className="dialogue-line">
                <span className="speaker">{speaker}:</span>
                <span className="dialogue-text">{text}</span>
              </div>
            )
          }
        })}
      </div>
    )
  }

  const getDialogueContext = () => {
    const contexts = {
      'moien': 'Deux amis se rencontrent dans la rue le matin',
      'addi': 'Un client quitte un magasin après ses achats',
      'merci': 'Quelqu\'un offre un café à son collègue'
    }
    return contexts[exercise.vocabularyItem.id as keyof typeof contexts] || 'Conversation quotidienne'
  }

  const playCompleteDialogue = () => {
    if (!exercise.context || !('speechSynthesis' in window)) return

    const completeDialogue = exercise.context.replace('___', exercise.correctAnswer)
    const utterance = new SpeechSynthesisUtterance(completeDialogue)
    utterance.lang = 'de-DE'
    utterance.rate = 0.6
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="dialogue-completion-exercise">
      <div className="exercise-question">
        <h3>💬 Dialogue</h3>

        {/* Contexte de la situation */}
        <div className="dialogue-context">
          <div className="context-header">
            <span className="context-icon">🎭</span>
            <span>Situation</span>
          </div>
          <p>{getDialogueContext()}</p>
        </div>

        {/* Dialogue avec espace à compléter */}
        {renderDialogue()}

        <p className="completion-instruction">Complétez le dialogue :</p>
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

      {/* Dialogue complet après réponse */}
      {hasAnswered && (
        <div className="complete-dialogue-section">
          <div className="section-header">
            <span className="section-icon">📝</span>
            <span>Dialogue complet</span>
          </div>

          <div className="complete-dialogue">
            {exercise.context?.split('\n').map((line, index) => {
              if (line.trim() === '') return null

              const completeLine = line.replace('___', exercise.correctAnswer)
              const [speaker, text] = completeLine.split(': ')

              return (
                <div key={index} className="final-dialogue-line">
                  <span className="final-speaker">{speaker}:</span>
                  <span className="final-text">{text}</span>
                </div>
              )
            })}
          </div>

          {/* Bouton pour entendre le dialogue complet */}
          <div className="audio-section">
            <button
              className="play-dialogue-button"
              onClick={playCompleteDialogue}
            >
              🔊 Écouter le dialogue complet
            </button>
          </div>

          {/* Explication culturelle */}
          <div className="cultural-explanation">
            <div className="explanation-header">
              <span className="explanation-icon">🌍</span>
              <span>À retenir</span>
            </div>
            <p>{exercise.vocabularyItem.usage}</p>

            {exercise.vocabularyItem.id === 'moien' && (
              <p><em>Au Luxembourg, "Moien" est utilisé dans toutes les situations formelles et informelles.</em></p>
            )}

            {exercise.vocabularyItem.id === 'merci' && (
              <p><em>La politesse est très importante dans la culture luxembourgeoise.</em></p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default DialogueCompletionExercise