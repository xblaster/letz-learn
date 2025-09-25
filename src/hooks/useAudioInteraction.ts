import { useEffect, useRef, useState } from 'react'
import { primeAudioContext } from '../utils/soundEffects'

export const useAudioInteraction = () => {
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const interactedRef = useRef(false)

  useEffect(() => {
    const handleUserInteraction = () => {
      if (interactedRef.current) {
        return
      }

      interactedRef.current = true
      setUserInteracted(true)
      setAudioEnabled(typeof window !== 'undefined' && 'speechSynthesis' in window)
      void primeAudioContext()
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
  }, [])

  const playAudioSafely = async (audioFunction: () => Promise<void> | void) => {
    try {
      if (!interactedRef.current) {
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