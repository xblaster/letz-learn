import { useEffect, useState } from 'react'
import { AudioService } from '../services/AudioService'

export const useAudioInteraction = () => {
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const handleUserInteraction = async () => {
      if (!userInteracted) {
        setUserInteracted(true)
        try {
          await AudioService.enableAudio()
          setAudioEnabled(true)
          console.log('Audio enabled after user interaction')
        } catch (error) {
          console.warn('Failed to enable audio:', error)
        }
      }
    }

    // Écouter les interactions utilisateur pour activer l'audio
    const events = ['click', 'touchstart', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [userInteracted])

  const playAudioSafely = async (audioFunction: () => Promise<void> | void) => {
    try {
      if (!userInteracted) {
        console.warn('Audio not enabled yet, waiting for user interaction')
        return
      }

      if (typeof audioFunction === 'function') {
        await audioFunction()
      }
    } catch (error) {
      console.warn('Audio playback failed:', error)
    }
  }

  return {
    audioEnabled,
    userInteracted,
    playAudioSafely
  }
}