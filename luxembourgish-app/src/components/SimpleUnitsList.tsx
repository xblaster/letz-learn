import React, { useState } from 'react'
import { UnitProgress } from '../types/LearningTypes'
import { learningUnit1 } from '../data/Unit1Data'
import { learningUnit2 } from '../data/Unit2Data'
import { learningUnit3 } from '../data/Unit3Data'
import { learningUnit4 } from '../data/Unit4Data'
import { learningUnit5 } from '../data/Unit5Data'
import { learningUnit6 } from '../data/Unit6Data'
import LearningUnit from './LearningUnit'

interface SimpleUnitsListProps {
  onBack: () => void
  onUnitComplete: (progress: UnitProgress) => void
}

const SimpleUnitsList: React.FC<SimpleUnitsListProps> = ({ onBack, onUnitComplete }) => {
  const [currentUnit, setCurrentUnit] = useState<any>(null)
  const [completedUnits, setCompletedUnits] = useState<string[]>([])

  const sections = [
    {
      id: 'section1',
      title: 'Premiers pas',
      description: 'Découvrez les bases du luxembourgeois',
      color: '#4ade80',
      units: [learningUnit1, learningUnit2]
    },
    {
      id: 'section2',
      title: 'Communication',
      description: 'Apprenez à communiquer au quotidien',
      color: '#3b82f6',
      units: [learningUnit3, learningUnit4]
    },
    {
      id: 'section3',
      title: 'Vie quotidienne',
      description: 'Maîtrisez les situations du quotidien',
      color: '#8b5cf6',
      units: [learningUnit5, learningUnit6]
    }
  ]

  const handleUnitClick = (unit: any) => {
    setCurrentUnit(unit)
  }

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted && currentUnit) {
      setCompletedUnits(prev => [...prev, currentUnit.id])
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