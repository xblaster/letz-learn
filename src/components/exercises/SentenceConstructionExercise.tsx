import { useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  Typography
} from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import { Exercise } from '../../types/LearningTypes'
import { SpeechRecognitionService } from '../../services/SpeechRecognitionService'
import LuxembourgishButton from '../LuxembourgishButton'
import LuxembourgishChip from '../LuxembourgishChip'
import { useLuxembourgishSpeech } from '../../hooks/useLuxembourgishSpeech'

interface SentenceConstructionExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean, timeSpent: number, attempts?: number) => void
}

interface WordToken {
  id: string
  label: string
}

const SentenceConstructionExercise = ({ exercise, onComplete }: SentenceConstructionExerciseProps) => {
  const [selectedTokenIds, setSelectedTokenIds] = useState<string[]>([])
  const [hasAnswered, setHasAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [startTime] = useState(() => Date.now())
  const { speakText } = useLuxembourgishSpeech()

  const wordTokens = useMemo<WordToken[]>(() => {
    const bank = exercise.wordBank?.length
      ? exercise.wordBank
      : exercise.options?.length
      ? exercise.options
      : exercise.correctAnswer.split(' ')

    return bank.map((word, index) => ({ id: `${word}-${index}`, label: word }))
  }, [exercise.correctAnswer, exercise.options, exercise.wordBank])

  const expectedSentence = useMemo(() => {
    return exercise.expectedSentence ?? exercise.correctAnswer
  }, [exercise.correctAnswer, exercise.expectedSentence])

  const selectedTokens = selectedTokenIds
    .map(tokenId => wordTokens.find(token => token.id === tokenId))
    .filter((token): token is WordToken => Boolean(token))

  const availableTokens = wordTokens.filter(token => !selectedTokenIds.includes(token.id))

  const handleWordSelect = (tokenId: string) => {
    if (hasAnswered) return
    if (selectedTokenIds.includes(tokenId)) return

    setSelectedTokenIds(prev => [...prev, tokenId])
  }

  const handleRemoveToken = (tokenId: string) => {
    if (hasAnswered) return

    setSelectedTokenIds(prev => prev.filter(id => id !== tokenId))
  }

  const resetSelection = () => {
    if (hasAnswered) return

    setSelectedTokenIds([])
  }

  const speakSentence = async () => {
    await speakText(expectedSentence)
  }

  const handleValidate = () => {
    if (hasAnswered || selectedTokens.length === 0) return

    const userSentence = selectedTokens.map(token => token.label).join(' ')
    const { isCorrect: resultIsCorrect } = SpeechRecognitionService.scoreTranscript(expectedSentence, userSentence)

    const attemptCount = attempts + 1
    setAttempts(attemptCount)
    setHasAnswered(true)
    setIsCorrect(resultIsCorrect)

    const timeSpent = Date.now() - startTime

    setTimeout(() => {
      onComplete(resultIsCorrect, timeSpent, attemptCount)
    }, 1500)
  }

  const showHint = !hasAnswered && (exercise.hint || exercise.context)

  return (
    <Stack spacing={3}>
      <Stack spacing={1.5}>
        <Typography variant="h5">Construction de phrase</Typography>
        <Typography variant="body2" color="text.secondary">
          {exercise.question}
        </Typography>
        {showHint && (
          <Alert severity="info" icon={<TipsAndUpdatesRoundedIcon />}>
            {exercise.hint || exercise.context}
          </Alert>
        )}
      </Stack>

      <Stack spacing={2}>
        <Box
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgba(25,118,210,0.06)',
            p: { xs: 2, md: 3 },
            minHeight: 96,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1.5
          }}
        >
          {selectedTokens.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Sélectionnez les mots dans l'ordre pour construire la phrase.
            </Typography>
          ) : (
            selectedTokens.map(token => (
              <LuxembourgishChip
                key={token.id}
                label={token.label}
                luxembourgishText={token.label}
                color="primary"
                variant="filled"
                onClick={() => handleRemoveToken(token.id)}
                disabled={hasAnswered}
                sx={{
                  fontSize: '1rem',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  cursor: hasAnswered ? 'default' : 'pointer'
                }}
              />
            ))
          )}
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {availableTokens.map(token => (
            <LuxembourgishButton
              key={token.id}
              variant="outlined"
              color="primary"
              luxembourgishText={token.label}
              onClick={() => handleWordSelect(token.id)}
              disabled={hasAnswered}
              sx={{
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              {token.label}
            </LuxembourgishButton>
          ))}
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleValidate}
          disabled={hasAnswered || selectedTokens.length === 0}
          endIcon={hasAnswered ? (isCorrect ? <CheckCircleRoundedIcon /> : <CancelRoundedIcon />) : undefined}
        >
          Valider la phrase
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={resetSelection}
          disabled={hasAnswered || selectedTokens.length === 0}
          startIcon={<ReplayRoundedIcon />}
        >
          Effacer
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={speakSentence}
          startIcon={<VolumeUpRoundedIcon />}
        >
          Écouter la phrase
        </Button>
      </Stack>

      {hasAnswered && (
        <Alert severity={isCorrect ? 'success' : 'error'} icon={isCorrect ? <CheckCircleRoundedIcon /> : <CancelRoundedIcon />}>
          {isCorrect
            ? 'Bravo ! La phrase est correcte.'
            : 'Presque ! Voici la phrase correcte :'}
        </Alert>
      )}

      {hasAnswered && !isCorrect && (
        <Box
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgba(239,68,68,0.08)',
            p: { xs: 2, md: 3 }
          }}
        >
          <Typography variant="subtitle1">Phrase attendue</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {expectedSentence}
          </Typography>
        </Box>
      )}
    </Stack>
  )
}

export default SentenceConstructionExercise
