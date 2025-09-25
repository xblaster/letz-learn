import { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'
import { useLuxembourgishSpeech } from '../hooks/useLuxembourgishSpeech'

interface LuxembourgishButtonProps extends Omit<ButtonProps, 'children'> {
  children: ReactNode
  luxembourgishText: string
  playOnClick?: boolean
  onSpeechComplete?: () => void
}

const LuxembourgishButton = ({
  children,
  luxembourgishText,
  playOnClick = true,
  onSpeechComplete,
  onClick,
  ...buttonProps
}: LuxembourgishButtonProps) => {
  const { speakText } = useLuxembourgishSpeech()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Exécuter le onClick original en premier
    if (onClick) {
      onClick(event)
    }

    // Puis jouer le son luxembourgeois si activé
    if (playOnClick && luxembourgishText) {
      try {
        speakText(luxembourgishText)
        onSpeechComplete?.()
      } catch (error) {
        console.warn('Speech failed:', error)
      }
    }
  }

  return (
    <Button
      {...buttonProps}
      onClick={handleButtonClick}
      title={playOnClick ? `Cliquez pour écouter: ${luxembourgishText}` : undefined}
    >
      {children}
    </Button>
  )
}

export default LuxembourgishButton