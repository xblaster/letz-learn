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

  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
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