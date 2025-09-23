import { useMemo, useState } from 'react'
import {
  Box,
  Button,
  Chip,
  LinearProgress,
  Stack,
  Typography
} from '@mui/material'
import type { ChipProps } from '@mui/material/Chip'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import SentenceConstructionExercise from './exercises/SentenceConstructionExercise'
import { sentenceBuilderExercises } from '../data/SentenceBuilderData'

interface ScenarioResult {
  exerciseId: string
  expectedSentence: string
  isCorrect: boolean
  attempts: number
  timeSpent: number
}

const formatDuration = (durationMs: number): string => {
  if (durationMs <= 0) {
    return '0,0 s'
  }

  const seconds = durationMs / 1000
  return `${seconds.toFixed(1).replace('.', ',')} s`
}

const SentenceBuilderWorkshop = () => {
  const totalScenarios = sentenceBuilderExercises.length
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [scenarioResults, setScenarioResults] = useState<(ScenarioResult | undefined)[]>([])
  const [latestResult, setLatestResult] = useState<ScenarioResult | null>(null)
  const [isWorkshopCompleted, setIsWorkshopCompleted] = useState(false)

  const completedCount = useMemo(
    () => scenarioResults.filter(Boolean).length,
    [scenarioResults]
  )
  const successCount = useMemo(
    () => scenarioResults.filter(result => result?.isCorrect).length,
    [scenarioResults]
  )

  const progressValue = totalScenarios === 0 ? 0 : (completedCount / totalScenarios) * 100
  const displayProgress = isWorkshopCompleted ? 100 : progressValue

  if (totalScenarios === 0) {
    return (
      <Stack spacing={3}>
        <Typography variant="h3" component="h1">
          Atelier de construction de phrases
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Les scénarios de construction de phrases seront bientôt disponibles.
        </Typography>
      </Stack>
    )
  }

  const currentExercise = sentenceBuilderExercises[currentScenarioIndex]

  const handleExerciseComplete = (isCorrect: boolean, timeSpent: number, attempts = 1) => {
    const summary: ScenarioResult = {
      exerciseId: currentExercise.id,
      expectedSentence: currentExercise.expectedSentence ?? currentExercise.correctAnswer,
      isCorrect,
      attempts,
      timeSpent
    }

    setLatestResult(summary)
    setScenarioResults(prev => {
      const updated = [...prev]
      updated[currentScenarioIndex] = summary
      return updated
    })
  }

  const handleNextScenario = () => {
    if (currentScenarioIndex >= totalScenarios - 1) {
      setIsWorkshopCompleted(true)
    } else {
      setCurrentScenarioIndex(index => Math.min(index + 1, totalScenarios - 1))
    }

    setLatestResult(null)
  }

  const handleRestart = () => {
    setCurrentScenarioIndex(0)
    setScenarioResults([])
    setLatestResult(null)
    setIsWorkshopCompleted(false)
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={1.5}>
        <Typography variant="h3" component="h1">
          Atelier de construction de phrases
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Assemblez les mots proposés pour former des phrases luxembourgeoises correctes et suivez vos progrès scénario après scénario.
        </Typography>
      </Stack>

      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(25,118,210,0.12) 0%, rgba(20,184,166,0.08) 100%)'
        }}
      >
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {isWorkshopCompleted
                ? 'Atelier terminé'
                : `Scénario ${currentScenarioIndex + 1} sur ${totalScenarios}`}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={displayProgress}
              sx={{
                mt: 1,
                height: 10,
                borderRadius: 999,
                backgroundColor: 'rgba(255,255,255,0.4)',
                '& .MuiLinearProgress-bar': { borderRadius: 999 }
              }}
            />
          </Box>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {sentenceBuilderExercises.map((exercise, index) => {
              const result = scenarioResults[index]
              const isCurrent = index === currentScenarioIndex && !isWorkshopCompleted
              const color: ChipProps['color'] = result
                ? result.isCorrect
                  ? 'success'
                  : 'warning'
                : isCurrent
                ? 'primary'
                : 'default'
              const variant: ChipProps['variant'] = result || isCurrent ? 'filled' : 'outlined'

              return (
                <Chip
                  key={exercise.id}
                  label={`Scénario ${index + 1}`}
                  color={color}
                  variant={variant}
                  size="small"
                  sx={{ fontWeight: result ? 600 : 500 }}
                />
              )
            })}
          </Stack>
        </Stack>
      </Box>

      {isWorkshopCompleted ? (
        <Stack spacing={3}>
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(20,184,166,0.12) 0%, rgba(25,118,210,0.05) 100%)'
            }}
          >
            <Stack spacing={1.5}>
              <Typography variant="h5">Récapitulatif de l'atelier</Typography>
              <Typography variant="body1">
                Vous avez correctement reconstitué {successCount} phrase{successCount > 1 ? 's' : ''} sur {totalScenarios}.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Analysez vos tentatives ci-dessous puis relancez l'atelier pour consolider vos acquis.
              </Typography>
            </Stack>
          </Box>

          <Stack spacing={2}>
            {sentenceBuilderExercises.map((exercise, index) => {
              const result = scenarioResults[index]
              if (!result) {
                return null
              }

              return (
                <Box
                  key={exercise.id}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: result.isCorrect ? 'success.light' : 'warning.light',
                    backgroundColor: result.isCorrect
                      ? 'rgba(46,125,50,0.08)'
                      : 'rgba(255,179,0,0.12)'
                  }}
                >
                  <Stack spacing={1}>
                    <Typography variant="subtitle1">
                      Scénario {index + 1} · {result.isCorrect ? 'Réussi' : 'À retravailler'}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {result.expectedSentence}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tentatives : {result.attempts} · Temps : {formatDuration(result.timeSpent)}
                    </Typography>
                  </Stack>
                </Box>
              )
            })}
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ReplayRoundedIcon />}
              onClick={handleRestart}
            >
              Recommencer l'atelier
            </Button>
          </Stack>
        </Stack>
      ) : (
        <>
          <SentenceConstructionExercise
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />

          {latestResult && (
            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                backgroundColor: latestResult.isCorrect
                  ? 'rgba(46,125,50,0.08)'
                  : 'rgba(239,68,68,0.08)'
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                justifyContent="space-between"
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    {latestResult.isCorrect
                      ? 'Bravo ! La phrase est correctement assemblée.'
                      : 'Observation : analysez la phrase attendue et retentez votre chance.'}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {latestResult.expectedSentence}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tentatives : {latestResult.attempts} · Temps : {formatDuration(latestResult.timeSpent)}
                  </Typography>
                </Stack>

                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={handleNextScenario}
                >
                  {currentScenarioIndex === totalScenarios - 1
                    ? "Voir le récapitulatif"
                    : 'Scénario suivant'}
                </Button>
              </Stack>
            </Box>
          )}
        </>
      )}
    </Stack>
  )
}

export default SentenceBuilderWorkshop
