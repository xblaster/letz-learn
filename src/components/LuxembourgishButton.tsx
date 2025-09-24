import { ReactNode } from 'react'
import { Button, ButtonProps, IconButton, Stack, Tooltip } from '@mui/material'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import { useLuxembourgishSpeech } from '../hooks/useLuxembourgishSpeech'

interface LuxembourgishButtonProps extends Omit<ButtonProps, 'children'> {
  children: ReactNode
  luxembourgishText: string
  showSpeaker?: boolean
  speakerSize?: 'small' | 'medium'
  onSpeakerClick?: () => void
}

const LuxembourgishButton = ({
  children,
  luxembourgishText,
  showSpeaker = true,
  speakerSize = 'small',
  onSpeakerClick,
  onClick,
  ...buttonProps
}: LuxembourgishButtonProps) => {
  const { speakText } = useLuxembourgishSpeech()

  const handleSpeakerClick = async (event: React.MouseEvent) => {
    event.stopPropagation()
    await speakText(luxembourgishText)
    onSpeakerClick?.()
  }

  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event)
    }
  }

  if (!showSpeaker) {
    return (
      <Button {...buttonProps} onClick={handleButtonClick}>
        {children}
      </Button>
    )
  }

  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <Button
        {...buttonProps}
        onClick={handleButtonClick}
        sx={{
          ...buttonProps.sx,
          flex: 1
        }}
      >
        {children}
      </Button>
      <Tooltip title={`Écouter: ${luxembourgishText}`}>
        <IconButton
          onClick={handleSpeakerClick}
          color="secondary"
          size={speakerSize}
          sx={{
            minWidth: 'auto',
            p: speakerSize === 'small' ? 0.5 : 1
          }}
          aria-label={`Écouter ${luxembourgishText}`}
        >
          <VolumeUpRoundedIcon fontSize={speakerSize} />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

export default LuxembourgishButton