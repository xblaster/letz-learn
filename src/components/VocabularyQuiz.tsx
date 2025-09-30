import { useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Card,
  Chip,
  LinearProgress,
  Stack,
  Typography
} from '@mui/material'
import QuizRoundedIcon from '@mui/icons-material/QuizRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'

import { vocabularyQuizItems, VocabularyQuizItem } from '../data/VocabularyQuizData'

const VocabularyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<VocabularyQuizItem[]>([])
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const shuffled = [...vocabularyQuizItems].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    generateOptions(shuffled[0])
  }, [])

  const generateOptions = (correct: VocabularyQuizItem) => {
    const incorrectOptions = vocabularyQuizItems
      .filter(item => item.french !== correct.french)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(item => item.french)

    const allOptions = [...incorrectOptions, correct.french].sort(() => Math.random() - 0.5)
    setOptions(allOptions)
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === shuffledQuestions[currentQuestion].french) {
      setScore(prev => prev + 1)
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
    const shuffled = [...vocabularyQuizItems].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    generateOptions(shuffled[0])
  }

  const progressValue = useMemo(() => {
    if (shuffledQuestions.length === 0) return 0
    return ((currentQuestion + 1) / shuffledQuestions.length) * 100
  }, [currentQuestion, shuffledQuestions])

  if (shuffledQuestions.length === 0) {
    return null
  }

  if (showResult) {
    const successRate = Math.round((score / shuffledQuestions.length) * 100)
    const success = score === shuffledQuestions.length
    const great = score >= shuffledQuestions.length * 0.7

    return (
      <Card
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          background: 'linear-gradient(160deg, rgba(25,118,210,0.12) 0%, rgba(20,184,166,0.08) 100%)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <Stack spacing={3} alignItems="center" textAlign="center">
          <AvatarHero success={success} great={great} />
          <Typography variant="h3">Résultat du quiz</Typography>
          <Typography variant="body1" color="text.secondary">
            Vous avez obtenu {score} réponse{score > 1 ? 's' : ''} sur {shuffledQuestions.length}.
          </Typography>
          <Chip
            icon={<AutoAwesomeRoundedIcon />}
            color={success ? 'success' : great ? 'primary' : 'warning'}
            label={`${successRate}% de réussite`}
            sx={{ fontWeight: 600 }}
          />
          <Button variant="contained" onClick={resetQuiz} startIcon={<QuizRoundedIcon />}>
            Recommencer
          </Button>
        </Stack>
      </Card>
    )
  }

  const currentWord = shuffledQuestions[currentQuestion]

  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 1,
        boxShadow: '0 24px 70px rgba(25,118,210,0.08)'
      }}
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between" spacing={2}>
            <Stack spacing={0.5}>
              <Typography variant="overline" color="primary">Quiz vocabulaire</Typography>
              <Typography variant="h4">Question {currentQuestion + 1}</Typography>
              <Typography variant="body2" color="text.secondary">
                Traduisez le mot luxembourgeois en français.
              </Typography>
            </Stack>
            <Chip
              label={`Catégorie : ${currentWord.category}`}
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: 999, fontWeight: 600 }}
            />
          </Stack>

          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 10,
              borderRadius: 999,
              backgroundColor: 'rgba(25,118,210,0.1)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 999,
                background: 'linear-gradient(90deg, #1976d2 0%, #14b8a6 100%)'
              }
            }}
          />
        </Stack>

        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 2.5, md: 3 },
            background: 'linear-gradient(140deg, rgba(25,118,210,0.08) 0%, rgba(20,184,166,0.05) 100%)'
          }}
        >
          <Typography variant="subtitle1" color="text.secondary">
            Que signifie :
          </Typography>
          <Typography variant="h3" sx={{ mt: 1 }}>
            « {currentWord.luxembourgish} »
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
            Prononciation : {currentWord.pronunciation}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            {currentWord.usage}
          </Typography>
        </Box>

        <Stack spacing={1.5}>
          {options.map(option => {
            const isSelected = selectedAnswer === option
            const isCorrect = showResult && option === currentWord.french

            return (
              <Button
                key={`${currentWord.id}-${option}`}
                onClick={() => handleAnswerSelect(option)}
                variant={isSelected ? 'contained' : 'outlined'}
                color={isSelected ? 'primary' : 'inherit'}
                sx={{
                  justifyContent: 'space-between',
                  borderRadius: 3,
                  px: 3,
                  py: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'rgba(25,118,210,0.12)' : 'transparent',
                  borderColor: isSelected ? 'primary.main' : 'divider'
                }}
              >
                <span>{option}</span>
                {isCorrect && <Chip color="success" size="small" label="Correct" />}
              </Button>
            )
          })}
        </Stack>

        {selectedAnswer && selectedAnswer !== currentWord.french && (
          <Alert severity="info" icon={<AutoAwesomeRoundedIcon />}>
            Astuce : écoutez bien les sons proches du français pour repérer la bonne réponse.
          </Alert>
        )}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'stretch', sm: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Score actuel : {score} / {shuffledQuestions.length}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestion === shuffledQuestions.length - 1 ? 'Terminer' : 'Question suivante'}
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}

const AvatarHero = ({ success, great }: { success: boolean; great: boolean }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: success
        ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
        : great
        ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
        : 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      boxShadow: success
        ? '0 18px 40px rgba(34,197,94,0.35)'
        : great
        ? '0 18px 40px rgba(59,130,246,0.35)'
        : '0 18px 40px rgba(249,115,22,0.35)',
      color: 'common.white',
      fontSize: '2.5rem'
    }}
  >
    {success ? '🎉' : great ? '👏' : '💪'}
  </Box>
)

export default VocabularyQuiz
