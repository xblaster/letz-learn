import { ReactNode } from 'react'
import { IconButton, Stack, Tooltip } from '@mui/material'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import { useLuxembourgishSpeech } from '../hooks/useLuxembourgishSpeech'

interface LuxembourgishTextProps {
  children: ReactNode
  text: string
  showSpeaker?: boolean
  inline?: boolean
  iconSize?: 'small' | 'medium' | 'large'
}

const LuxembourgishText = ({
  children,
  text,
  showSpeaker = true,
  inline = false,
  iconSize = 'small'
}: LuxembourgishTextProps) => {
  const { speakText } = useLuxembourgishSpeech()

  const handleSpeak = async () => {
    await speakText(text)
  }

  if (!showSpeaker) {
    return <>{children}</>
  }

  const speakerButton = (
    <Tooltip title={`Écouter: ${text}`}>
      <IconButton
        onClick={handleSpeak}
        color="secondary"
        size={iconSize}
        sx={{
          minWidth: 'auto',
          p: iconSize === 'small' ? 0.5 : 1
        }}
        aria-label={`Écouter ${text}`}
      >
        <VolumeUpRoundedIcon fontSize={iconSize} />
      </IconButton>
    </Tooltip>
  )

  if (inline) {
    return (
      <Stack direction="row" alignItems="center" spacing={0.5} component="span">
        {children}
        {speakerButton}
      </Stack>
    )
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {children}
      {speakerButton}
    </Stack>
  )
}

export default LuxembourgishText