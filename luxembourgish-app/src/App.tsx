import { useState } from 'react'
import './NewDesignApp.css'
import './styles/SimpleUnitsList.css'
import VocabularyQuiz from './components/VocabularyQuiz'
import PhraseList from './components/PhraseList'
import SimpleUnitsList from './components/SimpleUnitsList'
import { UnitProgress, UserStats } from './types/LearningTypes'

function App() {
  const [currentView, setCurrentView] = useState<'menu' | 'sections' | 'quiz' | 'phrases'>('menu')
  const [userStats, setUserStats] = useState<UserStats>({
    totalXp: 0,
    streak: 0,
    unitsCompleted: 0,
    accuracy: 0
  })

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted) {
      setUserStats(prev => ({
        ...prev,
        totalXp: prev.totalXp + calculateXp(progress.score),
        unitsCompleted: prev.unitsCompleted + 1,
        accuracy: updateAccuracy(prev.accuracy, progress.score)
      }))
    }
  }

  const calculateXp = (score: number): number => {
    const baseXp = 50
    const bonus = Math.round(score * 0.5)
    return baseXp + bonus
  }

  const updateAccuracy = (currentAccuracy: number, newScore: number): number => {
    return Math.round((currentAccuracy + newScore) / 2)
  }

  const renderMainMenu = () => (
    <div className="main-menu">
      <div className="menu-hero">
        <h2 className="section-title">Choisissez votre mode d'apprentissage</h2>
        <div className="user-stats">
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <div className="stat-value">{userStats.totalXp}</div>
              <div className="stat-label">XP</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <div className="stat-value">{userStats.unitsCompleted}</div>
              <div className="stat-label">Unités</div>
            </div>
          </div>
        </div>
      </div>

      <div className="learning-grid">
        <div className="learning-card featured">
          <div className="card-icon-wrapper">
            <span className="card-icon">📚</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Sections d'apprentissage</h3>
            <p className="card-description">Progressez par sections thématiques avec 6 unités structurées</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">🎯</span>
                <span className="metadata-text">3 sections</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">📖</span>
                <span className="metadata-text">6 unités</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⏱️</span>
                <span className="metadata-text">~20 minutes</span>
              </div>
            </div>
            <button
              className="btn btn-primary btn-fullwidth"
              onClick={() => setCurrentView('sections')}
            >
              <span>Voir les sections</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>

        <div className="learning-card">
          <div className="card-icon-wrapper">
            <span className="card-icon">🎯</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Quiz Vocabulaire</h3>
            <p className="card-description">Testez vos connaissances avec un quiz rapide</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">📝</span>
                <span className="metadata-text">Mode libre</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">🔄</span>
                <span className="metadata-text">Questions variées</span>
              </div>
            </div>
            <button
              className="btn btn-accent btn-fullwidth"
              onClick={() => setCurrentView('quiz')}
            >
              <span>Lancer le quiz</span>
              <span className="btn-icon">🎯</span>
            </button>
          </div>
        </div>

        <div className="learning-card">
          <div className="card-icon-wrapper">
            <span className="card-icon">📖</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Phrases Utiles</h3>
            <p className="card-description">Explorez une collection de phrases essentielles</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">🔊</span>
                <span className="metadata-text">Avec prononciation</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">🔍</span>
                <span className="metadata-text">Recherche</span>
              </div>
            </div>
            <button
              className="btn btn-accent btn-fullwidth"
              onClick={() => setCurrentView('phrases')}
            >
              <span>Explorer les phrases</span>
              <span className="btn-icon">📖</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="brand">
            <h1 className="app-title">🇱🇺 Lëtzebuergesch Léieren</h1>
            <p className="app-subtitle">Apprendre le Luxembourgeois</p>
          </div>

          {currentView !== 'menu' && (
            <nav className="header-nav">
              <button
                className="btn btn-outline btn-sm"
                onClick={() => setCurrentView('menu')}
              >
                <span className="btn-icon">←</span>
                <span>Retour au menu</span>
              </button>
            </nav>
          )}
        </div>
      </header>

      <main className="app-main">
        {currentView === 'menu' && renderMainMenu()}
        {currentView === 'sections' && (
          <SimpleUnitsList
            onBack={() => setCurrentView('menu')}
            onUnitComplete={handleUnitComplete}
          />
        )}
        {currentView === 'quiz' && <VocabularyQuiz />}
        {currentView === 'phrases' && <PhraseList />}
      </main>
    </div>
  )
}

export default App