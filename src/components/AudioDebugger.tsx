import React, { useState } from 'react'
import { useSoundEffects } from '../hooks/useSoundEffects'

const speak = async (text: string) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    throw new Error('Speech synthesis not supported')
  }

  return new Promise<void>(resolve => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = 0.95
    utterance.onend = () => resolve()
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  })
}

const AudioDebugger: React.FC = () => {
  const [status, setStatus] = useState<string>('Non testé')
  const [isAndroid, setIsAndroid] = useState<boolean>(false)
  const {
    playTestTone,
    playTransitionSound,
    playSuccessSound,
    playErrorSound,
    playCompletionSound
  } = useSoundEffects()

  React.useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent))
  }, [])

  const testAudio = async () => {
    setStatus('Test en cours...')

    try {
      await playTestTone()
      await new Promise(resolve => setTimeout(resolve, 400))
      await playSuccessSound()
      await new Promise(resolve => setTimeout(resolve, 400))
      await speak('Test audio réussi')
      setStatus('Synthèse vocale testée ✅')

    } catch (error) {
      setStatus(`Erreur: ${error}`)
    }
  }

  const testSpeech = async () => {
    try {
      setStatus('Test synthèse vocale...')
      await speak('Wéi geet et?')
      setStatus('Synthèse vocale OK ✅')
    } catch (error) {
      setStatus(`Erreur synthèse: ${error}`)
    }
  }

  const testSounds = async () => {
    setStatus('Test des sons...')
    try {
      await playTransitionSound()
      await new Promise(resolve => setTimeout(resolve, 250))
      await playSuccessSound()
      await new Promise(resolve => setTimeout(resolve, 250))
      await playErrorSound()
      await new Promise(resolve => setTimeout(resolve, 250))
      await playCompletionSound()
      setStatus('Sons joués ✅')
    } catch (error) {
      setStatus(`Erreur sons: ${error}`)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 10,
      right: 10,
      background: isAndroid ? '#ffebee' : '#f0f0f0',
      border: isAndroid ? '2px solid #f44336' : '1px solid #ccc',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 1000,
      maxWidth: '250px'
    }}>
      <h4>Debug Audio {isAndroid ? '🤖 Android' : '💻 Desktop'}</h4>
      <div style={{ marginBottom: '10px', fontWeight: 'bold', color: isAndroid ? '#d32f2f' : '#333' }}>
        {status}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <button onClick={testAudio} style={{ fontSize: '10px', padding: '5px' }}>
          Test Complet
        </button>
        <button onClick={testSounds} style={{ fontSize: '10px', padding: '5px' }}>
          Test Sons
        </button>
        <button onClick={testSpeech} style={{ fontSize: '10px', padding: '5px' }}>
          Test Voix
        </button>

        {isAndroid && (
          <div style={{
            marginTop: '10px',
            padding: '5px',
            background: '#fff3e0',
            borderRadius: '4px',
            fontSize: '10px'
          }}>
            ⚠️ Android détecté
            <br />Touches d'abord un bouton pour activer l'audio !
          </div>
        )}
      </div>

      <div style={{ marginTop: '10px', fontSize: '10px', color: '#666' }}>
        <div>UserAgent: {navigator.userAgent.substring(0, 30)}...</div>
        <div>AudioContext: {'AudioContext' in window ? '✅' : '❌'}</div>
        <div>SpeechSynthesis: {'speechSynthesis' in window ? '✅' : '❌'}</div>
      </div>
    </div>
  )
}

export default AudioDebugger
