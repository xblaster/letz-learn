import { Box, Chip, LinearProgress, Stack, Typography } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { keyframes } from '@mui/system'

interface ProgressBarProps {
  progress: number
  currentStep: number
  totalSteps: number
}

const glow = keyframes`
  0% { box-shadow: 0 0 0 rgba(25, 118, 210, 0.45); }
  50% { box-shadow: 0 0 16px rgba(25, 118, 210, 0.28); }
  100% { box-shadow: 0 0 0 rgba(25, 118, 210, 0.45); }
`

const ProgressBar = ({ progress, currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <Stack spacing={2.5} sx={{ width: '100%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Progression
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentStep} / {totalSteps} · {Math.round(progress)}%
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 12,
          borderRadius: 999,
          backgroundColor: 'rgba(25, 118, 210, 0.12)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 999,
            background: 'linear-gradient(90deg, #1976d2 0%, #14b8a6 100%)',
            animation: `${glow} 2.4s ease infinite`
          }
        }}
      />

      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" rowGap={1}>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index < currentStep - 1
          const isCurrent = index === currentStep - 1

          return (
            <Chip
              key={index}
              label={isCompleted ? <CheckRoundedIcon fontSize="small" /> : index + 1}
              color={isCompleted ? 'success' : isCurrent ? 'primary' : 'default'}
              variant={isCurrent || isCompleted ? 'filled' : 'outlined'}
              sx={{
                borderRadius: 999,
                minWidth: 40,
                fontWeight: 600,
                '& .MuiChip-label': {
                  px: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }}
            />
          )
        })}
      </Stack>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          Atteignez {totalSteps} étapes pour compléter l'unité.
        </Typography>
      </Box>
    </Stack>
  )
}

export default ProgressBar
