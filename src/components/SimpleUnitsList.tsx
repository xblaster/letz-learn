import React, { useState } from 'react'
import type { LearningUnit, UnitProgress } from '../types/LearningTypes'
import '../styles/SimpleUnitsList.css'
import { beginnerUnitSections } from '../data/unitSections'
import LearningUnit from './LearningUnit'

interface SimpleUnitsListProps {
  onBack: () => void
  onUnitComplete: (progress: UnitProgress) => void
}

const SimpleUnitsList: React.FC<SimpleUnitsListProps> = ({ onBack, onUnitComplete }) => {
  const [currentUnit, setCurrentUnit] = useState<LearningUnit | null>(null)
  const [completedUnits, setCompletedUnits] = useState<string[]>([])

  const sections = beginnerUnitSections

  const handleUnitClick = (unit: LearningUnit) => {
    setCurrentUnit(unit)
  }

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted && currentUnit) {
      setCompletedUnits(prev =>
        prev.includes(currentUnit.id) ? prev : [...prev, currentUnit.id]
      )
      onUnitComplete(progress)
    }
    setCurrentUnit(null)
  }

  const handleExitUnit = () => {
    setCurrentUnit(null)
  }

  const isUnitCompleted = (unitId: string) => {
    return completedUnits.includes(unitId)
  }

  // Si une unité est active, afficher le composant LearningUnit
  if (currentUnit) {
    return (
      <LearningUnit
        unit={currentUnit}
        onUnitComplete={handleUnitComplete}
        onExit={handleExitUnit}
      />
    )
  }

  return (
    <div className="simple-units-container">
      <div className="units-header">
        <div className="header-content">
          <h1>Sections d'apprentissage</h1>
          <p className="subtitle">Choisissez une unité pour commencer votre apprentissage</p>
        </div>
        <button className="btn btn-outline" onClick={onBack}>
          <span className="btn-icon">←</span>
          Retour au menu
        </button>
      </div>

      <div className="sections-list">
        {sections.map(section => (
          <div key={section.id} className="section-card">
            <div className="section-header">
              <div className="section-info">
                <h2 className="section-title" style={{ color: section.color }}>
                  {section.title}
                </h2>
                <p className="section-description">{section.description}</p>
              </div>
              <div className="section-progress">
                <span className="progress-text">
                  {section.units.filter(unit => isUnitCompleted(unit.id)).length} / {section.units.length}
                </span>
              </div>
            </div>

            <div className="units-grid">
              {section.units.map(unit => (
                <div
                  key={unit.id}
                  className={`unit-card ${isUnitCompleted(unit.id) ? 'completed' : ''}`}
                  onClick={() => handleUnitClick(unit)}
                >
                  <div className="unit-icon">
                    {isUnitCompleted(unit.id) ? '✓' : unit.level}
                  </div>
                  <div className="unit-content">
                    <h3 className="unit-title">{unit.title}</h3>
                    <p className="unit-description">{unit.description}</p>
                    <div className="unit-meta">
                      <span className="unit-level">{unit.level}</span>
                      <span className="unit-time">~{unit.estimatedTime} min</span>
                      <span className="unit-words">{unit.vocabulary.length} mots</span>
                    </div>
                  </div>
                  <div className="unit-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimpleUnitsList