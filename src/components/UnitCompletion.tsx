import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import type { ReactNode } from 'react'
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import { keyframes } from '@mui/system'
import { LearningUnit } from '../types/LearningTypes'

interface UnitCompletionProps {
  unit: LearningUnit
  accuracy: number
  isSuccess: boolean
  totalTime: number
  onRestart: () => void
  onExit: () => void
}

const celebration = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px) scale(1.02); }
  100% { transform: translateY(0); }
`

const UnitCompletion = ({ unit, accuracy, isSuccess, totalTime, onRestart, onExit }: UnitCompletionProps) => {
  const getResultMessage = () => {
    if (accuracy >= 90) {
      return {
        title: 'Exceptionnel !',
        message: 'Vous maîtrisez parfaitement ces expressions !',
        icon: '🌟'
      }
    }
    if (accuracy >= unit.targetScore) {
      return {
        title: 'Très bien !',
        message: "Vous avez atteint l'objectif de l'unité !",
        icon: '✅'
      }
    }
    if (accuracy >= 60) {
      return {
        title: 'Bon travail !',
        message: 'Vous progressez bien, continuez vos efforts !',
        icon: '📈'
      }
    }
    return {
      title: 'Continuez à pratiquer !',
      message: 'Réessayez pour mieux retenir le vocabulaire.',
      icon: '🔄'
    }
  }

  const getXpEarned = () => {
    const baseXp = 50
    const accuracyBonus = Math.round(accuracy * 0.5)
    const timeBonus = totalTime <= unit.estimatedTime ? 20 : 0
    return baseXp + accuracyBonus + timeBonus
  }

  const getStarsEarned = () => {
    if (accuracy >= 90) return 3
    if (accuracy >= unit.targetScore) return 2
    if (accuracy >= 60) return 1
    return 0
  }

  const result = getResultMessage()
  const xpEarned = getXpEarned()
  const starsEarned = getStarsEarned()

  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        background: 'linear-gradient(160deg, rgba(25,118,210,0.12) 0%, rgba(20,184,166,0.08) 100%)',
        backdropFilter: 'blur(16px)'
      }}
    >
      <Stack spacing={4}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between">
          <Stack spacing={1.5}>
            <Chip
              icon={<CelebrationRoundedIcon />}
              color={isSuccess ? 'success' : 'warning'}
              label={isSuccess ? 'Unité réussie' : 'Objectif à atteindre'}
              sx={{ alignSelf: 'flex-start', borderRadius: 999, fontWeight: 600 }}
            />
            <Typography variant="h3">{result.title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {result.message}
            </Typography>
          </Stack>

          <Avatar
            sx={{
              width: 96,
              height: 96,
              fontSize: '2.5rem',
              background: 'linear-gradient(135deg, #1976d2 0%, #14b8a6 100%)',
              color: 'common.white',
              animation: `${celebration} 3s ease-in-out infinite`
            }}
          >
            {result.icon}
          </Avatar>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <InfoStat
              icon={<EmojiEventsRoundedIcon />}
              label="Précision"
              value={`${accuracy}%`}
              description={`Objectif : ${unit.targetScore}%`}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoStat
              icon={<AccessTimeRoundedIcon />}
              label="Temps"
              value={`${totalTime} min`}
              description={`Estimation ${unit.estimatedTime} min`}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoStat
              icon={<StarsRoundedIcon />}
              label="XP gagnés"
              value={`+${xpEarned}`}
              description="Bonus de performance inclus"
              color="warning"
            />
          </Grid>
        </Grid>

        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Étoiles obtenues
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {Array.from({ length: 3 }).map((_, index) => (
              <Avatar
                key={index}
                variant="rounded"
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: index < starsEarned ? 'warning.main' : 'rgba(255,255,255,0.5)',
                  color: index < starsEarned ? 'common.white' : 'text.secondary',
                  fontSize: '1.8rem',
                  boxShadow: index < starsEarned ? '0 12px 24px rgba(255,193,7,0.35)' : 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-6px)' }
                }}
              >
                ⭐
              </Avatar>
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            {starsEarned === 3 && 'Performance parfaite !'}
            {starsEarned === 2 && 'Objectif atteint, bravo !'}
            {starsEarned === 1 && 'Bonne progression, continuez !'}
            {starsEarned === 0 && 'Réessayez pour collecter des étoiles.'}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Vocabulaire maîtrisé
          </Typography>
          <Grid container spacing={2.5}>
            {unit.vocabulary.map(word => (
              <Grid item xs={12} sm={6} md={4} key={word.id}>
                <Box
                  sx={{
                    borderRadius: 3,
                    p: 2.5,
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(25,118,210,0.12)',
                    boxShadow: '0 10px 30px rgba(25,118,210,0.06)'
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {word.luxembourgish}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {word.french}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    /{word.pronunciation}/
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SuggestionCard
              icon={<RocketLaunchRoundedIcon fontSize="large" />}
              title={isSuccess ? 'Prêt(e) pour la suite !' : 'Continuez à pratiquer'}
              description={
                isSuccess
                  ? 'Passez à l’unité suivante pour consolider votre apprentissage.'
                  : 'Relancez l’unité pour consolider vos connaissances et améliorer votre score.'
              }
              actionLabel={isSuccess ? 'Aller à la prochaine unité' : 'Recommencer'}
              onAction={isSuccess ? onExit : onRestart}
              variant={isSuccess ? 'success' : 'warning'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SuggestionCard
              icon={<AutoAwesomeRoundedIcon fontSize="large" />}
              title="Révisez les phrases utiles"
              description="Renforcez votre mémoire avec des expressions contextualisées et la prononciation."
              actionLabel="Ouvrir la bibliothèque"
              onAction={onExit}
              variant="info"
            />
          </Grid>
        </Grid>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="flex-end">
          {!isSuccess && (
            <Button variant="outlined" startIcon={<ReplayRoundedIcon />} onClick={onRestart}>
              Recommencer l'unité
            </Button>
          )}
        </Stack>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            « D'Sprooch ass d'Bréck tëschent de Leit »
          </Typography>
          <Typography variant="caption" color="text.secondary">
            (La langue est le pont entre les gens)
          </Typography>
        </Box>
      </Stack>
    </Card>
  )
}

interface InfoStatProps {
  icon: ReactNode
  label: string
  value: string
  description: string
  color: 'primary' | 'secondary' | 'warning'
}

const InfoStat = ({ icon, label, value, description, color }: InfoStatProps) => (
  <Stack
    spacing={1}
    sx={{
      borderRadius: 3,
      p: 3,
      backgroundColor: 'rgba(255,255,255,0.95)',
      border: '1px solid rgba(25,118,210,0.12)',
      minHeight: 160,
      justifyContent: 'center'
    }}
  >
    <Avatar sx={{ bgcolor: `${color}.main`, color: 'common.white' }}>{icon}</Avatar>
    <Typography variant="subtitle2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="h4">{value}</Typography>
    <Typography variant="caption" color="text.secondary">
      {description}
    </Typography>
  </Stack>
)

interface SuggestionCardProps {
  icon: ReactNode
  title: string
  description: string
  actionLabel: string
  onAction: () => void
  variant: 'success' | 'warning' | 'info'
}

const SuggestionCard = ({ icon, title, description, actionLabel, onAction, variant }: SuggestionCardProps) => (
  <Stack
    spacing={2}
    sx={{
      borderRadius: 3,
      p: 3,
      backgroundColor: 'rgba(255,255,255,0.95)',
      border: `1px solid rgba(25,118,210,0.12)`,
      height: '100%'
    }}
  >
    <Avatar sx={{ bgcolor: `${variant}.main`, color: 'common.white', width: 56, height: 56 }}>
      {icon}
    </Avatar>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
    <Button
      variant={variant === 'warning' ? 'outlined' : 'contained'}
      color={variant}
      onClick={onAction}
      endIcon={<ArrowIcon variant={variant} />}
    >
      {actionLabel}
    </Button>
  </Stack>
)

const ArrowIcon = ({ variant }: { variant: 'success' | 'warning' | 'info' }) => (
  <Box
    component="span"
    sx={{
      display: 'inline-flex',
      transform: 'translateY(2px)'
    }}
  >
    {variant === 'warning' ? '↻' : '→'}
  </Box>
)

export default UnitCompletion
