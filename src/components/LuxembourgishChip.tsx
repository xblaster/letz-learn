import { ReactNode } from 'react'
import { Chip, ChipProps, IconButton, Stack, Tooltip } from '@mui/material'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import { useLuxembourgishSpeech } from '../hooks/useLuxembourgishSpeech'

interface LuxembourgishChipProps extends Omit<ChipProps, 'label'> {
  label: ReactNode
  luxembourgishText: string
  showSpeaker?: boolean
  speakerSize?: 'small' | 'medium'
  onSpeakerClick?: () => void
}

const LuxembourgishChip = ({
  label,
  luxembourgishText,
  showSpeaker = true,
  speakerSize = 'small',
  onSpeakerClick,
  onClick,
  ...chipProps
}: LuxembourgishChipProps) => {
  const { speakText } = useLuxembourgishSpeech()

  const handleSpeakerClick = async (event: React.MouseEvent) => {
    event.stopPropagation()
    await speakText(luxembourgishText)
    onSpeakerClick?.()
  }

  const handleChipClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event)
    }
  }

  if (!showSpeaker) {
    return (
      <Chip {...chipProps} label={label} onClick={handleChipClick} />
    )
  }

  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <Chip
        {...chipProps}
        label={label}
        onClick={handleChipClick}
        sx={{
          ...chipProps.sx,
          flex: 1
        }}
      />
      <Tooltip title={`Écouter: ${luxembourgishText}`}>
        <IconButton
          onClick={handleSpeakerClick}
          color="secondary"
          size={speakerSize}
          sx={{
            minWidth: 'auto',
            p: speakerSize === 'small' ? 0.25 : 0.5
          }}
          aria-label={`Écouter ${luxembourgishText}`}
        >
          <VolumeUpRoundedIcon
            fontSize={speakerSize === 'small' ? 'inherit' : speakerSize}
            sx={{ fontSize: speakerSize === 'small' ? '1rem' : undefined }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

export default LuxembourgishChip