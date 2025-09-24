import React from 'react'
import { loadProgress, clearProgress, getDefaultProgress } from '../utils/progressStorage'

const ProgressDebugger: React.FC = () => {
  const handleShowProgress = () => {
    const progress = loadProgress()
    console.log('Current progress:', progress)
    alert(`Progress: ${JSON.stringify(progress, null, 2)}`)
  }

  const handleClearProgress = () => {
    if (window.confirm('Êtes-vous sûr de vouloir effacer toute la progression ?')) {
      clearProgress()
      window.location.reload()
    }
  }

  const handleResetToDefault = () => {
    if (window.confirm('Réinitialiser avec les valeurs par défaut ?')) {
      const defaultProgress = getDefaultProgress()
      localStorage.setItem('letz-learn-progress', JSON.stringify(defaultProgress))
      window.location.reload()
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 10,
      right: 10,
      background: '#f0f0f0',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 1000
    }}>
      <h4>Debug Progression</h4>
      <button onClick={handleShowProgress} style={{ marginRight: '5px', fontSize: '10px' }}>
        Voir Progression
      </button>
      <button onClick={handleClearProgress} style={{ marginRight: '5px', fontSize: '10px' }}>
        Effacer
      </button>
      <button onClick={handleResetToDefault} style={{ fontSize: '10px' }}>
        Reset
      </button>
    </div>
  )
}

export default ProgressDebugger