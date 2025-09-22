import { useState } from 'react'
import { LearningSection, LearningUnit, UnitProgress } from '../types/LearningTypes'
import LearningUnit from './LearningUnit'

interface SectionViewProps {
  section: LearningSection
  onUnitComplete: (progress: UnitProgress) => void
  onBackToSections: () => void
}

const SectionView: React.FC<SectionViewProps> = ({
  section,
  onUnitComplete,
  onBackToSections
}) => {
  const [currentUnit, setCurrentUnit] = useState<LearningUnit | null>(null)
  const [completedUnits, setCompletedUnits] = useState<Set<string>>(new Set())

  const handleUnitSelect = (unit: LearningUnit) => {
    setCurrentUnit(unit)
  }

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted) {
      setCompletedUnits(prev => new Set([...prev, progress.unitId]))
    }
    onUnitComplete(progress)
    setCurrentUnit(null)
  }

  const handleBackToUnits = () => {
    setCurrentUnit(null)
  }

  if (currentUnit) {
    return (
      <LearningUnit
        unit={currentUnit}
        onUnitComplete={handleUnitComplete}
        onExit={handleBackToUnits}
      />
    )
  }

  const progressPercentage = section.units.length > 0
    ? (completedUnits.size / section.units.length) * 100
    : 0

  return (
    <div className="section-view">
      <div className="section-header">
        <button className="btn btn-outline btn-sm" onClick={onBackToSections}>
          ← Retour aux sections
        </button>

        <div className="section-info">
          <div className="section-title-area">
            <span className="section-icon-large" style={{ color: section.color }}>
              {section.icon}
            </span>
            <div>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </div>
          </div>

          <div className="section-meta">
            <span className="section-level">Niveau {section.level}</span>
            <span className="section-time">~{section.estimatedTotalTime} minutes</span>
          </div>
        </div>
      </div>

      <div className="section-progress">
        <div className="progress-header">
          <h3>Progression de la section</h3>
          <span className="progress-text">
            {completedUnits.size} / {section.units.length} unités complétées
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="team-section">
        <h3>Équipe responsable</h3>
        <div className="team-display">
          <div className="team-lead-card">
            <span className="team-avatar">{section.teamLead.avatar}</span>
            <div className="team-info">
              <h4>{section.teamLead.name}</h4>
              <p className="team-role">Chef d'équipe</p>
              <p className="team-spec">{section.teamLead.specialization}</p>
            </div>
          </div>

          <div className="contributors">
            <h4>Contributeurs</h4>
            <div className="contributors-list">
              {section.contributors.map(contributor => (
                <div key={contributor.id} className="contributor-card">
                  <span className="contributor-avatar">{contributor.avatar}</span>
                  <div className="contributor-info">
                    <span className="contributor-name">{contributor.name}</span>
                    <span className="contributor-role">{contributor.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="units-section">
        <h3>Unités d'apprentissage</h3>
        {section.units.length === 0 ? (
          <div className="no-units">
            <div className="no-units-icon">🚧</div>
            <h4>Section en cours de développement</h4>
            <p>L'équipe travaille actuellement sur la création des unités pour cette section.</p>
            <div className="development-status">
              <span>État: En cours de développement</span>
              <span>Équipe: {section.contributors.length + 1} membres assignés</span>
            </div>
          </div>
        ) : (
          <div className="units-grid">
            {section.units.map((unit, index) => {
              const isCompleted = completedUnits.has(unit.id)
              const isAvailable = index === 0 || completedUnits.has(section.units[index - 1].id)

              return (
                <div
                  key={unit.id}
                  className={`unit-card ${isCompleted ? 'completed' : ''} ${!isAvailable ? 'locked' : ''}`}
                >
                  <div className="unit-header">
                    <div className="unit-number">{index + 1}</div>
                    <div className="unit-status">
                      {isCompleted ? '✅' : isAvailable ? '▶️' : '🔒'}
                    </div>
                  </div>

                  <div className="unit-content">
                    <h4 className="unit-title">{unit.title}</h4>
                    <p className="unit-description">{unit.description}</p>

                    <div className="unit-metadata">
                      <div className="metadata-item">
                        <span className="metadata-icon">📚</span>
                        <span>{unit.vocabulary.length} mots</span>
                      </div>
                      <div className="metadata-item">
                        <span className="metadata-icon">⏱️</span>
                        <span>~{unit.estimatedTime} min</span>
                      </div>
                      <div className="metadata-item">
                        <span className="metadata-icon">🎯</span>
                        <span>{unit.targetScore}% requis</span>
                      </div>
                    </div>
                  </div>

                  <div className="unit-actions">
                    {isCompleted ? (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleUnitSelect(unit)}
                      >
                        Réviser
                      </button>
                    ) : isAvailable ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUnitSelect(unit)}
                      >
                        Commencer
                      </button>
                    ) : (
                      <button className="btn btn-outline" disabled>
                        Verrouillé
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionView