import { useCallback } from 'react'

const speakWithSystemVoice = (text: string) => {
  if (typeof window === 'undefined') {
    return
  }

  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser')
    return
  }

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'de-DE'
  utterance.rate = 0.85

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

export const useLuxembourgishSpeech = () => {
  const speakText = useCallback((text: string) => {
    try {
      speakWithSystemVoice(text)
    } catch (error) {
      console.warn('Text-to-speech failed:', error)
    }
  }, [])

  return { speakText }
}