import { ReactNode } from 'react'
import { Chip, ChipProps } from '@mui/material'
import { useLuxembourgishSpeech } from '../hooks/useLuxembourgishSpeech'

interface LuxembourgishChipProps extends Omit<ChipProps, 'label'> {
  label: ReactNode
  luxembourgishText: string
  playOnClick?: boolean
  onSpeechComplete?: () => void
}

const LuxembourgishChip = ({
  label,
  luxembourgishText,
  playOnClick = true,
  onSpeechComplete,
  onClick,
  ...chipProps
}: LuxembourgishChipProps) => {
  const { speakText } = useLuxembourgishSpeech()

  const handleChipClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    // Jouer le son luxembourgeois en premier si activé
    if (playOnClick && luxembourgishText) {
      try {
        await speakText(luxembourgishText)
        onSpeechComplete?.()
      } catch (error) {
        console.warn('Speech failed:', error)
      }
    }

    // Ensuite exécuter le onClick original
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <Chip
      {...chipProps}
      label={label}
      onClick={handleChipClick}
      title={playOnClick ? `Cliquez pour écouter: ${luxembourgishText}` : undefined}
    />
  )
}

export default LuxembourgishChip