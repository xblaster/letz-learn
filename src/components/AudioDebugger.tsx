import React, { useState } from 'react'
import { AudioService } from '../services/AudioService'

const AudioDebugger: React.FC = () => {
  const [status, setStatus] = useState<string>('Non testé')
  const [isAndroid, setIsAndroid] = useState<boolean>(false)

  React.useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent))
  }, [])

  const testAudio = async () => {
    setStatus('Test en cours...')

    try {
      // Tester l'activation audio
      await AudioService.enableAudio()
      setStatus('Audio activé ✅')

      // Tester les sons
      AudioService.playClickSound()
      await new Promise(resolve => setTimeout(resolve, 500))

      AudioService.playSuccessSound()
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus('Sons testés ✅')

      // Tester la synthèse vocale
      await AudioService.speakLuxembourgish('Moien!')
      setStatus('Synthèse vocale testée ✅')

    } catch (error) {
      setStatus(`Erreur: ${error}`)
    }
  }

  const testSpeech = async () => {
    try {
      setStatus('Test synthèse vocale...')
      await AudioService.speakLuxembourgish('Wéi geet et?')
      setStatus('Synthèse vocale OK ✅')
    } catch (error) {
      setStatus(`Erreur synthèse: ${error}`)
    }
  }

  const testSounds = () => {
    setStatus('Test des sons...')
    try {
      AudioService.playClickSound()
      setTimeout(() => AudioService.playSuccessSound(), 300)
      setTimeout(() => AudioService.playCompletionSound(), 800)
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
        <div>AudioContext: {window.AudioContext ? '✅' : '❌'}</div>
        <div>SpeechSynthesis: {window.speechSynthesis ? '✅' : '❌'}</div>
      </div>
    </div>
  )
}

export default AudioDebugger