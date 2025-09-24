import React, { useState, useEffect } from 'react'
import type { LearningUnit, UnitProgress } from '../types/LearningTypes'
import '../styles/SimpleUnitsList.css'
import { beginnerUnitSections } from '../data/unitSections'
import LearningUnitComponent from './LearningUnit'
import { saveProgress, loadProgress } from '../utils/progressStorage'

interface SimpleUnitsListProps {
  onBack: () => void
  onUnitComplete: (progress: UnitProgress) => void
}

const SimpleUnitsList: React.FC<SimpleUnitsListProps> = ({ onBack, onUnitComplete }) => {
  const [currentUnit, setCurrentUnit] = useState<LearningUnit | null>(null)
  const [completedUnits, setCompletedUnits] = useState<string[]>([])
  const [unlockedSections, setUnlockedSections] = useState<string[]>(['section_1'])
  const [isLoaded, setIsLoaded] = useState(false)

  const sections = beginnerUnitSections

  // Charger la progression depuis localStorage au montage
  useEffect(() => {
    const savedProgress = loadProgress()
    if (savedProgress) {
      setCompletedUnits(savedProgress.completedUnits)
      setUnlockedSections(savedProgress.unlockedSections)
    }
    setIsLoaded(true)
  }, [])

  // Sauvegarder la progression à chaque changement
  useEffect(() => {
    if (isLoaded) {
      const progressData = {
        completedUnits,
        unlockedSections,
        userStats: {
          totalXp: 0,
          streak: 0,
          unitsCompleted: completedUnits.length,
          accuracy: 0
        }
      }
      saveProgress(progressData)
    }
  }, [completedUnits, unlockedSections, isLoaded])

  const handleUnitClick = (unit: LearningUnit) => {
    setCurrentUnit(unit)
  }

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted && currentUnit) {
      setCompletedUnits(prev => {
        const updatedCompleted = prev.includes(currentUnit.id) ? prev : [...prev, currentUnit.id]

        // Check if Section 1 is completed to unlock Section 2
        const section1Units = sections[0].units.map(unit => unit.id)
        const section1Completed = section1Units.every(unitId => updatedCompleted.includes(unitId))

        if (section1Completed && !unlockedSections.includes('section_2')) {
          setUnlockedSections(prevSections => {
            const newSections = [...prevSections, 'section_2']
            return newSections
          })
        }

        return updatedCompleted
      })
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

  const isSectionUnlocked = (sectionId: string) => {
    return unlockedSections.includes(sectionId)
  }

  const isUnitUnlocked = (unit: LearningUnit, section: any) => {
    if (section.id === 'section_1') return true // Section 1 always unlocked

    if (!isSectionUnlocked(section.id)) return false // Section not unlocked

    // For Section 2, first unit unlocks when Section 1 is complete
    const unitIndex = section.units.findIndex((u: LearningUnit) => u.id === unit.id)
    if (unitIndex === 0 && isSectionUnlocked(section.id)) return true

    // Subsequent units unlock when previous unit is completed
    if (unitIndex > 0) {
      const previousUnit = section.units[unitIndex - 1]
      return isUnitCompleted(previousUnit.id)
    }

    return false
  }

  const getSectionProgressPercentage = (section: any) => {
    const completedCount = section.units.filter((unit: LearningUnit) => isUnitCompleted(unit.id)).length
    return Math.round((completedCount / section.units.length) * 100)
  }

  const getMotivationalMessage = (section: any) => {
    const progressPercent = getSectionProgressPercentage(section)
    if (progressPercent === 0) return "Commencez votre aventure !"
    if (progressPercent < 25) return "Excellent départ ! Continuez !"
    if (progressPercent < 50) return "Vous progressez bien !"
    if (progressPercent < 75) return "Vous êtes sur la bonne voie !"
    if (progressPercent < 100) return "Presque terminé ! Encore un effort !"
    return "Section maîtrisée ! Félicitations !"
  }

  // Si une unité est active, afficher le composant LearningUnit
  if (currentUnit) {
    return (
      <LearningUnitComponent
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
      </div>

      <div className="sections-list">
        {sections.map(section => {
          const sectionUnlocked = isSectionUnlocked(section.id)
          const progressPercent = getSectionProgressPercentage(section)
          const motivationalMsg = getMotivationalMessage(section)

          return (
            <div
              key={section.id}
              className={`section-card ${sectionUnlocked ? 'unlocked' : ''} ${section.id === 'section_2' ? 'section-2' : ''}`}
              style={{ opacity: sectionUnlocked ? 1 : 0.7 }}
            >
              <div className="section-header">
                <div className="section-info">
                  <h2 className="section-title section-progression-indicator" style={{ color: section.color }}>
                    {section.title}
                    {!sectionUnlocked && <span> 🔒</span>}
                  </h2>
                  <p className="section-description">{section.description}</p>
                  <p className="motivational-message" style={{
                    color: section.color,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}>
                    {motivationalMsg}
                  </p>
                </div>
                <div className="section-progress" style={{
                  background: sectionUnlocked ? `${section.color}20` : 'rgba(156, 163, 175, 0.2)'
                }}>
                  <span className="progress-text">
                    {section.units.filter(unit => isUnitCompleted(unit.id)).length} / {section.units.length}
                  </span>
                  <div className="progress-percentage" style={{
                    fontSize: '0.75rem',
                    color: section.color
                  }}>
                    {progressPercent}%
                  </div>
                </div>
              </div>

            <div className="units-grid">
              {section.units.map((unit, unitIndex) => {
                const unitCompleted = isUnitCompleted(unit.id)
                const unitUnlocked = isUnitUnlocked(unit, section)
                const isIntermediate = section.id === 'section_2'

                return (
                  <div
                    key={unit.id}
                    className={`unit-card ${unitCompleted ? 'completed' : ''} ${!unitUnlocked ? 'locked' : ''} ${isIntermediate ? 'intermediate' : ''}`}
                    onClick={() => unitUnlocked && handleUnitClick(unit)}
                    style={{
                      animationDelay: `${unitIndex * 0.1}s`
                    }}
                  >
                    <div className="unit-icon">
                      {unitCompleted ? '✓' : unitUnlocked ? unit.level : '🔒'}
                    </div>
                    <div className="unit-content">
                      <h3 className="unit-title">{unit.title}</h3>
                      <p className="unit-description">{unit.description}</p>
                      <div className="unit-meta">
                        <span className={`unit-level ${isIntermediate ? 'intermediate-level' : ''}`}>
                          {unit.level}
                        </span>
                        <span className="unit-time">~{unit.estimatedTime} min</span>
                        <span className="unit-words">{unit.vocabulary.length} mots</span>
                        {isIntermediate && (
                          <span className="intermediate-badge" style={{
                            background: section.color,
                            color: 'white',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.375rem',
                            fontSize: '0.7rem',
                            fontWeight: 600
                          }}>
                            INTERMÉDIAIRE
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="unit-arrow" style={{
                      color: unitUnlocked ? (isIntermediate ? section.color : '#9ca3af') : '#d1d5db'
                    }}>
                      {unitUnlocked ? '→' : ''}
                    </div>
                  </div>
                )
              })}
            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimpleUnitsList