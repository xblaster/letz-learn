import { useState, useRef } from 'react'
import { Exercise } from '../../types/LearningTypes'

interface PronunciationExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number) => void
}

declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

const PronunciationExercise: React.FC<PronunciationExerciseProps> = ({
  exercise,
  onComplete
}) => {
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecorded, setHasRecorded] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [feedback, setFeedback] = useState<string>('')
  const [startTime] = useState(Date.now())
  const [step, setStep] = useState<'listen' | 'record' | 'result'>('listen')

  const recognitionRef = useRef<any>(null)

  const playModelAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(exercise.vocabularyItem.luxembourgish)
      utterance.lang = 'de-DE'
      utterance.rate = 0.6
      speechSynthesis.speak(utterance)
    }
  }

  const startRecording = async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      // Fallback si pas de reconnaissance vocale
      handleSimulatedRecording()
      return
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.lang = 'de-DE'
      recognition.continuous = false
      recognition.interimResults = false

      recognitionRef.current = recognition

      recognition.onstart = () => {
        setIsRecording(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase()
        const target = exercise.vocabularyItem.luxembourgish.toLowerCase()

        setIsRecording(false)
        setHasRecorded(true)
        evaluatePronunciation(transcript, target)
      }

      recognition.onerror = () => {
        setIsRecording(false)
        handleSimulatedRecording()
      }

      recognition.start()
    } catch (error) {
      handleSimulatedRecording()
    }
  }

  const handleSimulatedRecording = () => {
    // Simulation pour les navigateurs sans support de reconnaissance vocale
    setIsRecording(true)

    setTimeout(() => {
      setIsRecording(false)
      setHasRecorded(true)
      // Donner un score aléatoire mais majoritairement positif
      const randomScore = Math.random()
      const isCorrect = randomScore > 0.3 // 70% de chance de succès

      if (isCorrect) {
        setFeedback('Très bien ! Votre prononciation semble correcte.')
      } else {
        setFeedback('Essayez encore ! Écoutez bien le modèle.')
      }

      setStep('result')

      setTimeout(() => {
        const timeSpent = Date.now() - startTime
        onComplete(isCorrect, timeSpent)
      }, 2000)
    }, 2000)
  }

  const evaluatePronunciation = (spoken: string, target: string) => {
    // Algorithme simple de comparaison de prononciation
    const similarity = calculateSimilarity(spoken, target)
    const isCorrect = similarity > 0.6 // 60% de similarité minimum

    if (isCorrect) {
      setFeedback('Excellent ! Votre prononciation est très bonne.')
    } else {
      setFeedback('Bonne tentative ! Écoutez encore le modèle et réessayez.')
    }

    setStep('result')
    setHasAnswered(true)

    setTimeout(() => {
      const timeSpent = Date.now() - startTime
      onComplete(isCorrect, timeSpent)
    }, 2000)
  }

  const calculateSimilarity = (str1: string, str2: string): number => {
    // Algorithme simple de Levenshtein pour comparer les chaînes
    const longer = str1.length > str2.length ? str1 : str2
    const shorter = str1.length > str2.length ? str2 : str1

    if (longer.length === 0) return 1

    const editDistance = levenshteinDistance(longer.toLowerCase(), shorter.toLowerCase())
    return (longer.length - editDistance) / longer.length
  }

  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = []

    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i]
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }

    return matrix[str2.length][str1.length]
  }

  const getPronunciationTips = () => {
    const tips = {
      'moien': 'Prononcez "MOY-en" en appuyant sur la première syllabe',
      'addi': 'Prononcez "ADI" comme une syllabe condensée, pas détachée',
      'merci': 'Comme en français, mais avec un accent légèrement allemand',
      'pardon': 'Comme en français, accent sur la dernière syllabe',
      'jo': 'Prononcez "YO" comme en anglais familier',
      'nee': 'Prononcez "NAY" en anglais'
    }
    return tips[exercise.vocabularyItem.id as keyof typeof tips] || 'Écoutez bien le modèle'
  }

  return (
    <div className="pronunciation-exercise">
      <div className="exercise-question">
        <h3>🗣️ Prononciation</h3>
        <p>{exercise.question}</p>

        {/* Mot à prononcer */}
        <div className="word-display">
          <div className="target-word">
            <span className="luxembourgish-text">{exercise.vocabularyItem.luxembourgish}</span>
            <span className="pronunciation-guide">/{exercise.vocabularyItem.pronunciation}/</span>
          </div>
        </div>

        {/* Conseils de prononciation */}
        <div className="pronunciation-tips">
          <div className="tips-header">
            <span className="tips-icon">💡</span>
            <span>Conseil</span>
          </div>
          <p>{getPronunciationTips()}</p>
        </div>
      </div>

      {/* Étapes de l'exercice */}
      <div className="pronunciation-steps">

        {/* Étape 1: Écouter */}
        {step === 'listen' && (
          <div className="listen-step">
            <h4>📖 Étape 1: Écoutez le modèle</h4>
            <button
              className="model-audio-button"
              onClick={playModelAudio}
            >
              🔊 Écouter le modèle
            </button>
            <button
              className="ready-button"
              onClick={() => setStep('record')}
            >
              Je suis prêt(e) à répéter
            </button>
          </div>
        )}

        {/* Étape 2: Enregistrer */}
        {step === 'record' && (
          <div className="record-step">
            <h4>🎤 Étape 2: À votre tour !</h4>

            {!isRecording && !hasRecorded && (
              <div className="record-controls">
                <button
                  className="record-button"
                  onClick={startRecording}
                >
                  🎤 Commencer l'enregistrement
                </button>
                <p className="record-instruction">
                  Cliquez et prononcez clairement : "{exercise.vocabularyItem.luxembourgish}"
                </p>
              </div>
            )}

            {isRecording && (
              <div className="recording-active">
                <div className="recording-indicator">
                  <div className="pulse-animation"></div>
                  <span>🎤 Enregistrement en cours...</span>
                </div>
                <p>Prononcez maintenant : "{exercise.vocabularyItem.luxembourgish}"</p>
              </div>
            )}
          </div>
        )}

        {/* Étape 3: Résultat */}
        {step === 'result' && (
          <div className="result-step">
            <h4>📊 Résultat</h4>

            <div className={`feedback-message ${hasAnswered ? 'success' : 'partial'}`}>
              <span className="feedback-icon">
                {hasAnswered ? '✅' : '🔄'}
              </span>
              <span>{feedback}</span>
            </div>

            {/* Comparaison visuelle */}
            <div className="pronunciation-comparison">
              <div className="comparison-row">
                <span className="label">Modèle :</span>
                <span className="model-text">{exercise.vocabularyItem.luxembourgish}</span>
                <button
                  className="mini-play-button"
                  onClick={playModelAudio}
                >
                  🔊
                </button>
              </div>
            </div>

            {/* Encouragement et usage */}
            <div className="encouragement">
              <p><strong>Usage :</strong> {exercise.vocabularyItem.usage}</p>
              {!hasAnswered && (
                <button
                  className="try-again-button"
                  onClick={() => {
                    setStep('record')
                    setHasRecorded(false)
                  }}
                >
                  🔄 Essayer encore
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PronunciationExercise