import { useState, useEffect } from 'react'

interface VocabularyItem {
  luxembourgish: string
  french: string
  category: string
}

const vocabularyData: VocabularyItem[] = [
  { luxembourgish: "Moien", french: "Bonjour", category: "salutations" },
  { luxembourgish: "Äddi", french: "Au revoir", category: "salutations" },
  { luxembourgish: "Merci", french: "Merci", category: "politesse" },
  { luxembourgish: "Pardon", french: "Excusez-moi", category: "politesse" },
  { luxembourgish: "Wéi geet et?", french: "Comment allez-vous?", category: "conversation" },
  { luxembourgish: "Ech verstinn net", french: "Je ne comprends pas", category: "conversation" },
  { luxembourgish: "Wou ass...?", french: "Où est...?", category: "questions" },
  { luxembourgish: "Wéivill kascht dat?", french: "Combien ça coûte?", category: "questions" },
  { luxembourgish: "Waasser", french: "Eau", category: "nourriture" },
  { luxembourgish: "Kaffi", french: "Café", category: "nourriture" }
]

const VocabularyQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<VocabularyItem[]>([])
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    generateOptions(shuffled[0])
  }, [])

  const generateOptions = (correct: VocabularyItem) => {
    const incorrectOptions = vocabularyData
      .filter(item => item.french !== correct.french)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(item => item.french)

    const allOptions = [...incorrectOptions, correct.french]
      .sort(() => Math.random() - 0.5)

    setOptions(allOptions)
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === shuffledQuestions[currentQuestion].french) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer('')
      generateOptions(shuffledQuestions[nextQuestion])
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer('')
    setShowResult(false)
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    generateOptions(shuffled[0])
  }

  if (showResult) {
    return (
      <div className="quiz-result">
        <h2>Résultat du Quiz</h2>
        <p>Votre score: {score} / {shuffledQuestions.length}</p>
        <p>
          {score === shuffledQuestions.length ? 'Parfait! 🎉' :
           score >= shuffledQuestions.length * 0.7 ? 'Très bien! 👏' :
           'Continuez à pratiquer! 💪'}
        </p>
        <button onClick={resetQuiz} className="restart-btn">
          Recommencer
        </button>
      </div>
    )
  }

  if (shuffledQuestions.length === 0) {
    return <div>Chargement...</div>
  }

  const currentWord = shuffledQuestions[currentQuestion]

  return (
    <div className="vocabulary-quiz">
      <div className="quiz-header">
        <h2>Quiz Vocabulaire</h2>
        <p>Question {currentQuestion + 1} / {shuffledQuestions.length}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="question-section">
        <div className="question">
          <h3>Que signifie en français :</h3>
          <div className="luxembourgish-word">"{currentWord.luxembourgish}"</div>
          <small className="category">Catégorie: {currentWord.category}</small>
        </div>

        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="quiz-actions">
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="next-btn"
          >
            {currentQuestion === shuffledQuestions.length - 1 ? 'Terminer' : 'Suivant'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VocabularyQuiz