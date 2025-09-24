// Données du parcours d'apprentissage à la Duolingo

import { PathSection, PathNode, LearningState } from '../types/LearningTypes'
import { learningUnit1 } from './Unit1Data'
import { learningUnit2 } from './Unit2Data'
import { learningUnit3 } from './Unit3NewData'
import { learningUnit4 } from './Unit4NewData'
import { learningUnit5 } from './Unit5NewData'
import { learningUnit6 } from './Unit6Data'

// Configuration du parcours avec positions visuelles
export const learningPathSections: PathSection[] = [
  {
    id: 'section_1',
    title: 'Premiers pas',
    description: 'Découvrez les bases du luxembourgeois',
    color: '#4ade80', // vert clair
    order: 1,
    nodes: [
      {
        id: 'node_1',
        unit: learningUnit1,
        position: { x: 50, y: 20 },
        isUnlocked: true,  // Premier nœud toujours débloqué
        isCompleted: false,
        sectionId: 'section_1'
      },
      {
        id: 'node_2',
        unit: learningUnit2,
        position: { x: 50, y: 40 },
        isUnlocked: false,
        isCompleted: false,
        sectionId: 'section_1'
      }
    ]
  },
  {
    id: 'section_2',
    title: 'Nombres et temps',
    description: 'Maîtrisez les nombres, le temps et les jours',
    color: '#3b82f6', // bleu
    order: 2,
    nodes: [
      {
        id: 'node_3',
        unit: learningUnit3,
        position: { x: 30, y: 60 },
        isUnlocked: false,
        isCompleted: false,
        sectionId: 'section_2'
      },
      {
        id: 'node_4',
        unit: learningUnit4,
        position: { x: 70, y: 75 },
        isUnlocked: false,
        isCompleted: false,
        sectionId: 'section_2'
      }
    ]
  },
  {
    id: 'section_3',
    title: 'Famille et relations',
    description: 'Parlez de votre famille avec les possessifs',
    color: '#8b5cf6', // violet
    order: 3,
    nodes: [
      {
        id: 'node_5',
        unit: learningUnit5,
        position: { x: 40, y: 90 },
        isUnlocked: false,
        isCompleted: false,
        sectionId: 'section_3'
      },
      {
        id: 'node_6',
        unit: learningUnit6,
        position: { x: 60, y: 105 },
        isUnlocked: false,
        isCompleted: false,
        sectionId: 'section_3'
      }
    ]
  }
]

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