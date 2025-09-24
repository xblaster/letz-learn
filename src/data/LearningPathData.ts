// Données du parcours d'apprentissage à la Duolingo

import { PathSection, PathNode, LearningState } from '../types/LearningTypes'
import { beginnerUnitSections } from './unitSections'

// Configuration du parcours avec positions visuelles
const getFallbackPosition = (index: number): PathNode['position'] => {
  const column = index % 2 === 0 ? 40 : 60
  const row = Math.floor(index / 2)

  return {
    x: column,
    y: 20 + row * 20
  }
}

const createLearningPathSections = (): PathSection[] => {
  let nodeIndex = 0

  return beginnerUnitSections.map(section => {
    const nodes = section.units.map((unit, unitPositionIndex) => {
      const position = section.pathLayout?.[unitPositionIndex] ?? getFallbackPosition(nodeIndex)
      const nodeId = `node_${nodeIndex + 1}`

      const node: PathNode = {
        id: nodeId,
        unit,
        position,
        isUnlocked: nodeId === 'node_1',
        isCompleted: false,
        sectionId: section.id
      }

      nodeIndex += 1
      return node
    })

    return {
      id: section.id,
      title: section.title,
      description: section.description,
      color: section.color,
      nodes,
      order: section.order
    }
  })
}

export const learningPathSections: PathSection[] = createLearningPathSections()

// État initial du parcours d'apprentissage
export const initialLearningState: LearningState = {
  currentNode: null,
  currentUnit: null,
  unitProgress: null,
  userStats: {
    totalXp: 0,
    streak: 0,
    unitsCompleted: 0,
    accuracy: 0
  },
  isExerciseActive: false,
  currentExercise: null,
  completedNodes: []
}

// Utilitaires pour gérer la progression
export const getNextUnlockedNode = (sections: PathSection[], completedNodes: string[]): PathNode | null => {
  for (const section of sections) {
    for (const node of section.nodes) {
      // Le premier nœud est toujours débloqué
      if (node.id === 'node_1') {
        if (!completedNodes.includes(node.id)) {
          return node
        }
        continue
      }

      // Pour les autres nœuds, vérifier si le précédent est complété
      const previousNodeId = getPreviousNodeId(node.id)
      if (previousNodeId && completedNodes.includes(previousNodeId) && !completedNodes.includes(node.id)) {
        return node
      }
    }
  }
  return null
}

const getPreviousNodeId = (nodeId: string): string | null => {
  const nodeNumber = parseInt(nodeId.split('_')[1])
  if (nodeNumber <= 1) return null
  return `node_${nodeNumber - 1}`
}

export const updateNodeUnlockStatus = (sections: PathSection[], completedNodes: string[]): PathSection[] => {
  return sections.map(section => ({
    ...section,
    nodes: section.nodes.map(node => {
      if (node.id === 'node_1') {
        // Premier nœud toujours débloqué
        return { ...node, isUnlocked: true }
      }

      const previousNodeId = getPreviousNodeId(node.id)
      const isUnlocked = previousNodeId ? completedNodes.includes(previousNodeId) : false
      const isCompleted = completedNodes.includes(node.id)

      return {
        ...node,
        isUnlocked,
        isCompleted
      }
    })
  }))
}

// Calcul du pourcentage de progression globale
export const calculateOverallProgress = (sections: PathSection[]): number => {
  const totalNodes = sections.reduce((sum, section) => sum + section.nodes.length, 0)
  const completedNodes = sections.reduce((sum, section) =>
    sum + section.nodes.filter(node => node.isCompleted).length, 0
  )

  return totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0
}

// Calcul du pourcentage de progression par section
export const calculateSectionProgress = (section: PathSection): number => {
  const totalNodes = section.nodes.length
  const completedNodes = section.nodes.filter(node => node.isCompleted).length

  return totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0
}