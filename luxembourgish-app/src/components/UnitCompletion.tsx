import React from 'react'
import { LearningUnit } from '../types/LearningTypes'

interface UnitCompletionProps {
  unit: LearningUnit
  accuracy: number
  isSuccess: boolean
  totalTime: number // en minutes
  onRestart: () => void
  onExit: () => void
}

const UnitCompletion: React.FC<UnitCompletionProps> = ({
  unit,
  accuracy,
  isSuccess,
  totalTime,
  onRestart,
  onExit
}) => {

  const getResultMessage = () => {
    if (accuracy >= 90) {
      return {
        title: "Exceptionnel ! 🏆",
        message: "Vous maîtrisez parfaitement ces expressions !",
        icon: "🌟"
      }
    } else if (accuracy >= unit.targetScore) {
      return {
        title: "Très bien ! 🎉",
        message: "Vous avez atteint l'objectif de l'unité !",
        icon: "✅"
      }
    } else if (accuracy >= 60) {
      return {
        title: "Bon travail ! 💪",
        message: "Vous progressez bien, continuez vos efforts !",
        icon: "📈"
      }
    } else {
      return {
        title: "Continuez à pratiquer ! 🎯",
        message: "Réessayez pour mieux retenir le vocabulaire.",
        icon: "🔄"
      }
    }
  }

  const getXpEarned = () => {
    // Calcul XP basé sur l'accuracy et le temps
    const baseXp = 50
    const accuracyBonus = Math.round(accuracy * 0.5)
    const timeBonus = totalTime <= unit.estimatedTime ? 20 : 0
    return baseXp + accuracyBonus + timeBonus
  }

  const getStarsEarned = () => {
    if (accuracy >= 90) return 3
    if (accuracy >= unit.targetScore) return 2
    if (accuracy >= 60) return 1
    return 0
  }

  const result = getResultMessage()
  const xpEarned = getXpEarned()
  const starsEarned = getStarsEarned()

  return (
    <div className="unit-completion">
      <div className="completion-header">
        <div className="result-icon">{result.icon}</div>
        <h2 className="result-title">{result.title}</h2>
        <p className="result-message">{result.message}</p>
      </div>

      {/* Statistiques de performance */}
      <div className="completion-stats">
        <div className="stat-card accuracy">
          <div className="stat-icon">🎯</div>
          <div className="stat-value">{accuracy}%</div>
          <div className="stat-label">Précision</div>
        </div>

        <div className="stat-card time">
          <div className="stat-icon">⏱️</div>
          <div className="stat-value">{totalTime} min</div>
          <div className="stat-label">Temps</div>
        </div>

        <div className="stat-card xp">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">+{xpEarned}</div>
          <div className="stat-label">XP gagnés</div>
        </div>
      </div>

      {/* Étoiles obtenues */}
      <div className="stars-section">
        <h3>Étoiles obtenues</h3>
        <div className="stars-display">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`star ${index < starsEarned ? 'earned' : 'not-earned'}`}
            >
              ⭐
            </div>
          ))}
        </div>
        <p className="stars-description">
          {starsEarned === 3 && "Performance parfaite !"}
          {starsEarned === 2 && "Objectif atteint !"}
          {starsEarned === 1 && "Bonne progression !"}
          {starsEarned === 0 && "Recommencez pour obtenir des étoiles !"}
        </p>
      </div>

      {/* Récapitulatif du vocabulaire appris */}
      <div className="vocabulary-summary">
        <h3>Vocabulaire maîtrisé</h3>
        <div className="vocabulary-grid">
          {unit.vocabulary.map((word) => (
            <div key={word.id} className="vocabulary-item">
              <div className="word-pair">
                <span className="luxembourgish">{word.luxembourgish}</span>
                <span className="french">{word.french}</span>
              </div>
              <div className="pronunciation">/{word.pronunciation}/</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prochaines étapes */}
      <div className="next-steps">
        <h3>Suggestions</h3>
        <div className="suggestions">
          {isSuccess ? (
            <div className="suggestion success">
              <span className="suggestion-icon">🚀</span>
              <span>Vous êtes prêt(e) pour l'Unité 2 !</span>
            </div>
          ) : (
            <div className="suggestion retry">
              <span className="suggestion-icon">🔄</span>
              <span>Recommencez pour améliorer votre score</span>
            </div>
          )}

          <div className="suggestion practice">
            <span className="suggestion-icon">📚</span>
            <span>Révisez dans la section "Phrases Utiles"</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="completion-actions">
        {!isSuccess && (
          <button
            className="restart-button"
            onClick={onRestart}
          >
            🔄 Recommencer l'unité
          </button>
        )}

        <button
          className="continue-button primary"
          onClick={onExit}
        >
          {isSuccess ? "🚀 Continuer" : "📚 Retour au menu"}
        </button>
      </div>

      {/* Motivation quote */}
      <div className="motivation-quote">
        <p><em>"D'Sprooch ass d'Brécke tëschent de Leit"</em></p>
        <p><small>(La langue est le pont entre les gens)</small></p>
      </div>
    </div>
  )
}

export default UnitCompletion