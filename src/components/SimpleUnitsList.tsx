import React, { useState, useEffect, useMemo } from 'react'
import type { LearningUnit, UnitProgress, UnitSection } from '../types/LearningTypes'
import '../styles/SimpleUnitsList.css'
import { beginnerUnitSections } from '../data/unitSections'
import LearningUnitComponent from './LearningUnit'
import { saveProgress, loadProgress } from '../utils/progressStorage'

interface SimpleUnitsListProps {
  onBack: () => void
  onUnitComplete: (progress: UnitProgress) => void
}

const ensureUnlockedSections = (
  sections: UnitSection[],
  completedUnitIds: string[],
  existingUnlocked: string[]
): string[] => {
  const knownSectionIds = sections.map(section => section.id)
  const unlockedSet = new Set(existingUnlocked.filter(id => knownSectionIds.includes(id)))

  if (sections.length > 0) {
    unlockedSet.add(sections[0].id)
  }

  sections.forEach((section, index) => {
    const sectionUnitIds = section.units.map(unit => unit.id)
    if (sectionUnitIds.length === 0) {
      return
    }

    const isSectionCompleted = sectionUnitIds.every(unitId => completedUnitIds.includes(unitId))
    if (isSectionCompleted) {
      unlockedSet.add(section.id)
      const nextSection = sections[index + 1]
      if (nextSection) {
        unlockedSet.add(nextSection.id)
      }
    }
  })

  const orderedUnlocked = sections
    .map(section => section.id)
    .filter(sectionId => unlockedSet.has(sectionId))

  return orderedUnlocked
}

const SimpleUnitsList: React.FC<SimpleUnitsListProps> = ({ onBack, onUnitComplete }) => {
  const sections = useMemo(() => beginnerUnitSections, [])
  const [currentUnit, setCurrentUnit] = useState<LearningUnit | null>(null)
  const [completedUnits, setCompletedUnits] = useState<string[]>([])
  const [unlockedSections, setUnlockedSections] = useState<string[]>(() =>
    ensureUnlockedSections(sections, [], [])
  )
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger la progression depuis localStorage au montage
  useEffect(() => {
    const savedProgress = loadProgress()
    if (savedProgress) {
      setCompletedUnits(savedProgress.completedUnits)
      setUnlockedSections(
        ensureUnlockedSections(sections, savedProgress.completedUnits, savedProgress.unlockedSections)
      )
    } else {
      setUnlockedSections(ensureUnlockedSections(sections, [], []))
    }
    setIsLoaded(true)
  }, [sections])

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

        setUnlockedSections(prevSections => ensureUnlockedSections(sections, updatedCompleted, prevSections))

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

  const isUnitUnlocked = (unit: LearningUnit, section: UnitSection) => {
    if (!isSectionUnlocked(section.id)) return false

    const unitIndex = section.units.findIndex((u: LearningUnit) => u.id === unit.id)
    if (unitIndex <= 0) {
      return true
    }

    const previousUnit = section.units[unitIndex - 1]
    return isUnitCompleted(previousUnit.id)
  }

  const getSectionProgressPercentage = (section: UnitSection) => {
    const completedCount = section.units.filter((unit: LearningUnit) => isUnitCompleted(unit.id)).length
    return Math.round((completedCount / section.units.length) * 100)
  }

  const getMotivationalMessage = (section: UnitSection) => {
    const progressPercent = getSectionProgressPercentage(section)

    const focusMessage = (() => {
      switch (section.id) {
        case 'section_1':
          return 'Vos bases deviennent solides.'
        case 'section_2':
          return 'Vos conversations gagnent en fluidité.'
        case 'section_3':
          return 'Votre autonomie quotidienne s’installe.'
        default:
          return 'Continuez sur cette belle lancée !'
      }
    })()

    if (progressPercent === 0) {
      switch (section.id) {
        case 'section_1':
          return 'Plongez dans les salutations luxembourgeoises !'
        case 'section_2':
          return 'Prêt·e pour des dialogues du quotidien ?'
        case 'section_3':
          return 'Commencez vos démarches pratiques en luxembourgeois !'
        default:
          return 'Commencez votre aventure !'
      }
    }
    if (progressPercent < 25) return `Excellent départ ! ${focusMessage}`
    if (progressPercent < 50) return `Vous progressez bien ! ${focusMessage}`
    if (progressPercent < 75) return `Vous êtes sur la bonne voie ! ${focusMessage}`
    if (progressPercent < 100) return `Presque terminé ! ${focusMessage}`
    return `Section maîtrisée ! ${focusMessage}`
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
              className={`section-card ${sectionUnlocked ? 'unlocked' : ''} ${
                section.id === 'section_2' ? 'section-2' : section.id === 'section_3' ? 'section-3' : ''
              }`}
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
                const isBeyondBeginner = section.order > 1
                const isPracticalLevel = section.order > 2
                const levelCardClass = isPracticalLevel ? 'advanced' : isBeyondBeginner ? 'intermediate' : ''
                const levelPillClass = isPracticalLevel
                  ? 'advanced-level'
                  : isBeyondBeginner
                  ? 'intermediate-level'
                  : ''
                const badgeLabel = (() => {
                  if (section.order === 2) return 'INTERMÉDIAIRE A1+'
                  if (section.order > 2) return 'VIE PRATIQUE A2'
                  return null
                })()

                return (
                  <div
                    key={unit.id}
                    className={`unit-card ${unitCompleted ? 'completed' : ''} ${!unitUnlocked ? 'locked' : ''} ${levelCardClass}`}
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
                        <span className={`unit-level ${levelPillClass}`}>
                          {unit.level}
                        </span>
                        <span className="unit-time">~{unit.estimatedTime} min</span>
                        <span className="unit-words">{unit.vocabulary.length} mots</span>
                        {badgeLabel && (
                          <span
                            className={`intermediate-badge ${isPracticalLevel ? 'advanced-badge' : ''}`}
                            style={{
                            background: section.color,
                            color: 'white',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.375rem',
                            fontSize: '0.7rem',
                            fontWeight: 600
                          }}>
                            {badgeLabel}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="unit-arrow" style={{
                      color: unitUnlocked
                        ? isBeyondBeginner
                          ? section.color
                          : '#9ca3af'
                        : '#d1d5db'
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
