import { useState } from 'react'
import './NewDesignApp.css'
import VocabularyQuiz from './components/VocabularyQuiz'
import PhraseList from './components/PhraseList'
import LearningUnit from './components/LearningUnit'
import SectionManager from './components/SectionManager'
import SectionView from './components/SectionView'
import { learningUnit1 } from './data/Unit1Data'
import { learningUnit2 } from './data/Unit2Data'
import { learningUnit3 } from './data/Unit3Data'
import { UnitProgress, UserStats, LearningSection } from './types/LearningTypes'

function App() {
  const [currentView, setCurrentView] = useState<'menu' | 'sections' | 'section-view' | 'unit1' | 'unit2' | 'unit3' | 'quiz' | 'phrases'>('menu')
  const [currentSection, setCurrentSection] = useState<LearningSection | null>(null)
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

  const handleSectionSelect = (section: LearningSection) => {
    setCurrentSection(section)
    setCurrentView('section-view')
  }

  const handleBackToSections = () => {
    setCurrentSection(null)
    setCurrentView('sections')
  }

  const handleBackToMenu = () => {
    setCurrentSection(null)
    setCurrentView('menu')
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
            <span className="card-icon">🎓</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Unité 1 : Premières rencontres</h3>
            <p className="card-description">Apprenez les salutations et expressions de politesse essentielles</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">📚</span>
                <span className="metadata-text">4 mots nouveaux</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⏱️</span>
                <span className="metadata-text">~3 minutes</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⭐</span>
                <span className="metadata-text">Niveau A1</span>
              </div>
            </div>
            <button
              className="btn btn-primary btn-fullwidth"
              onClick={() => setCurrentView('unit1')}
            >
              <span>Commencer l'unité 1</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>

        <div className="learning-card">
          <div className="card-icon-wrapper">
            <span className="card-icon">👤</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Unité 2 : Ech sinn...</h3>
            <p className="card-description">Apprenez à vous présenter en luxembourgeois</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">📚</span>
                <span className="metadata-text">4 mots nouveaux</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⏱️</span>
                <span className="metadata-text">~3 minutes</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⭐</span>
                <span className="metadata-text">Niveau A1</span>
              </div>
            </div>
            <button
              className="btn btn-secondary btn-fullwidth"
              onClick={() => setCurrentView('unit2')}
            >
              <span>Commencer l'unité 2</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>

        <div className="learning-card">
          <div className="card-icon-wrapper">
            <span className="card-icon">❓</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Unité 3 : Wéi heescht Dir?</h3>
            <p className="card-description">Apprenez à poser des questions poliment</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">📚</span>
                <span className="metadata-text">4 mots nouveaux</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⏱️</span>
                <span className="metadata-text">~3 minutes</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">⭐</span>
                <span className="metadata-text">Niveau A1</span>
              </div>
            </div>
            <button
              className="btn btn-secondary btn-fullwidth"
              onClick={() => setCurrentView('unit3')}
            >
              <span>Commencer l'unité 3</span>
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
            <span className="card-icon">📚</span>
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

        <div className="learning-card featured">
          <div className="card-icon-wrapper">
            <span className="card-icon">🏗️</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Gestion des Sections</h3>
            <p className="card-description">Système modulaire d'apprentissage organisé par équipes</p>
            <div className="card-metadata">
              <div className="metadata-item">
                <span className="metadata-icon">👥</span>
                <span className="metadata-text">Travail d'équipe</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">📋</span>
                <span className="metadata-text">Organisation</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-icon">🎯</span>
                <span className="metadata-text">Progression</span>
              </div>
            </div>
            <button
              className="btn btn-primary btn-fullwidth"
              onClick={() => setCurrentView('sections')}
            >
              <span>Gérer les sections</span>
              <span className="btn-icon">⚙️</span>
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
          <SectionManager
            onSectionSelect={handleSectionSelect}
            onBackToMenu={handleBackToMenu}
          />
        )}
        {currentView === 'section-view' && currentSection && (
          <SectionView
            section={currentSection}
            onUnitComplete={handleUnitComplete}
            onBackToSections={handleBackToSections}
          />
        )}
        {currentView === 'unit1' && (
          <LearningUnit
            unit={learningUnit1}
            onUnitComplete={handleUnitComplete}
            onExit={() => setCurrentView('menu')}
          />
        )}
        {currentView === 'unit2' && (
          <LearningUnit
            unit={learningUnit2}
            onUnitComplete={handleUnitComplete}
            onExit={() => setCurrentView('menu')}
          />
        )}
        {currentView === 'unit3' && (
          <LearningUnit
            unit={learningUnit3}
            onUnitComplete={handleUnitComplete}
            onExit={() => setCurrentView('menu')}
          />
        )}
        {currentView === 'quiz' && <VocabularyQuiz />}
        {currentView === 'phrases' && <PhraseList />}
      </main>
    </div>
  )
}

export default App