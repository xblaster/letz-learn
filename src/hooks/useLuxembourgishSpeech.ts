import { useCallback } from 'react'
import { AudioService } from '../services/AudioService'

export const useLuxembourgishSpeech = () => {
  const speakText = useCallback(async (text: string) => {
    try {
      await AudioService.speakLuxembourgish(text)
    } catch (error) {
      console.warn('Text-to-speech failed:', error)
    }
  }, [])

  return { speakText }
}