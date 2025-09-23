import React, { useState, useEffect } from 'react'
import { PathSection, PathNode, UnitProgress } from '../types/LearningTypes'
import { learningPathSections, updateNodeUnlockStatus, calculateOverallProgress, calculateSectionProgress } from '../data/LearningPathData'
import LearningUnit from './LearningUnit'

interface LearningPathProps {
  onBack: () => void
  onUnitComplete: (progress: UnitProgress) => void
}

const LearningPath: React.FC<LearningPathProps> = ({ onBack, onUnitComplete }) => {
  const [sections, setSections] = useState<PathSection[]>(learningPathSections)
  const [completedNodes, setCompletedNodes] = useState<string[]>([])
  const [selectedNode, setSelectedNode] = useState<PathNode | null>(null)
  const [isUnitActive, setIsUnitActive] = useState(false)

  // Mettre à jour le statut de déblocage des nœuds
  useEffect(() => {
    const updatedSections = updateNodeUnlockStatus(learningPathSections, completedNodes)
    setSections(updatedSections)
  }, [completedNodes])

  const handleNodeClick = (node: PathNode) => {
    if (node.isUnlocked) {
      setSelectedNode(node)
      setIsUnitActive(true)
    }
  }

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted && selectedNode) {
      // Marquer le nœud comme complété
      setCompletedNodes(prev => [...prev, selectedNode.id])

      // Appeler le callback parent
      onUnitComplete(progress)

      // Revenir au parcours
      setIsUnitActive(false)
      setSelectedNode(null)
    }
  }

  const handleExitUnit = () => {
    setIsUnitActive(false)
    setSelectedNode(null)
  }

  // Rendu du parcours
  const renderPath = () => (
    <div className="learning-path-container">
      <div className="path-header">
        <div className="path-title">
          <h1>Votre parcours d'apprentissage</h1>
          <div className="overall-progress">
            <div className="progress-circle">
              <span className="progress-text">{calculateOverallProgress(sections)}%</span>
            </div>
            <span className="progress-label">Progression globale</span>
          </div>
        </div>
        <button className="btn btn-outline" onClick={onBack}>
          <span className="btn-icon">←</span>
          Retour au menu
        </button>
      </div>

      <div className="path-canvas">
        <svg className="path-connections" viewBox="0 0 100 120" preserveAspectRatio="none">
          {/* Lignes de connexion entre les nœuds */}
          <path
            d="M50,20 Q45,30 50,40 Q55,50 30,60 Q25,67 70,75 Q65,82 40,90 Q45,97 60,105"
            stroke="url(#pathGradient)"
            strokeWidth="0.5"
            fill="none"
            className="connection-path"
          />
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {sections.map((section) => (
          <div key={section.id} className="path-section">
            <div className="section-header" style={{ '--section-color': section.color } as React.CSSProperties}>
              <div className="section-info">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>
              <div className="section-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${calculateSectionProgress(section)}%`, backgroundColor: section.color }}
                  />
                </div>
                <span className="progress-percentage">{calculateSectionProgress(section)}%</span>
              </div>
            </div>

            <div className="section-nodes">
              {section.nodes.map((node) => (
                <div
                  key={node.id}
                  className={`path-node ${node.isCompleted ? 'completed' : ''} ${node.isUnlocked ? 'unlocked' : 'locked'}`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    '--node-color': section.color
                  } as React.CSSProperties}
                  onClick={() => handleNodeClick(node)}
                >
                  <div className="node-circle">
                    <div className="node-icon">
                      {node.isCompleted ? (
                        <span className="icon-completed">✓</span>
                      ) : node.isUnlocked ? (
                        <span className="icon-unit">{node.unit.level}</span>
                      ) : (
                        <span className="icon-locked">🔒</span>
                      )}
                    </div>
                  </div>

                  <div className="node-info">
                    <h3 className="node-title">{node.unit.title}</h3>
                    <div className="node-meta">
                      <span className="node-level">{node.unit.level}</span>
                      <span className="node-time">~{node.unit.estimatedTime} min</span>
                    </div>
                    <p className="node-description">{node.unit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // Si une unité est active, afficher le composant LearningUnit
  if (isUnitActive && selectedNode) {
    return (
      <LearningUnit
        unit={selectedNode.unit}
        onUnitComplete={handleUnitComplete}
        onExit={handleExitUnit}
      />
    )
  }

  return renderPath()
}

export default LearningPath