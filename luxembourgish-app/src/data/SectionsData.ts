// Système de sections pour l'organisation du travail d'équipe

import { LearningSection, TeamMember } from '../types/LearningTypes'
import { learningUnit1 } from './Unit1Data'
import { learningUnit2 } from './Unit2Data'
import { learningUnit3 } from './Unit3Data'

// Définition des membres de l'équipe
export const teamMembers: Record<string, TeamMember> = {
  marie: {
    id: 'marie',
    name: 'Marie Dupont',
    role: 'lead',
    specialization: 'Linguistique luxembourgeoise',
    avatar: '👩‍🏫'
  },
  paul: {
    id: 'paul',
    name: 'Paul Schmidt',
    role: 'developer',
    specialization: 'Interface utilisateur',
    avatar: '👨‍💻'
  },
  lisa: {
    id: 'lisa',
    name: 'Lisa Weber',
    role: 'content',
    specialization: 'Création d\'exercices',
    avatar: '👩‍🎨'
  },
  tom: {
    id: 'tom',
    name: 'Tom Muller',
    role: 'qa',
    specialization: 'Tests et validation',
    avatar: '👨‍🔧'
  },
  anna: {
    id: 'anna',
    name: 'Anna Klein',
    role: 'developer',
    specialization: 'Audio et prononciation',
    avatar: '👩‍🔬'
  },
  jean: {
    id: 'jean',
    name: 'Jean Lux',
    role: 'content',
    specialization: 'Culture luxembourgeoise',
    avatar: '👨‍🎭'
  }
}

// Sections organisées par thèmes d'apprentissage
export const learningSections: LearningSection[] = [
  {
    id: 'foundations',
    title: 'Fondamentaux',
    description: 'Les bases essentielles pour débuter en luxembourgeois',
    icon: '🏗️',
    color: '#667eea',
    level: 'A1',
    units: [learningUnit1, learningUnit2, learningUnit3],
    teamLead: teamMembers.marie,
    contributors: [teamMembers.paul, teamMembers.lisa],
    estimatedTotalTime: 9, // 3 min x 3 unités
    isActive: true,
    order: 1
  },
  {
    id: 'daily_life',
    title: 'Vie Quotidienne',
    description: 'Vocabulaire et expressions pour les situations courantes',
    icon: '🏠',
    color: '#f093fb',
    level: 'A1',
    units: [], // À implémenter par l'équipe
    teamLead: teamMembers.anna,
    contributors: [teamMembers.jean, teamMembers.tom],
    estimatedTotalTime: 12,
    isActive: false, // En cours de développement
    order: 2
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'Dialogues et conversations interactives',
    icon: '💬',
    color: '#4facfe',
    level: 'A2',
    units: [], // À implémenter par l'équipe
    teamLead: teamMembers.lisa,
    contributors: [teamMembers.paul, teamMembers.anna],
    estimatedTotalTime: 15,
    isActive: false,
    order: 3
  },
  {
    id: 'culture',
    title: 'Culture & Traditions',
    description: 'Histoire, culture et traditions luxembourgeoises',
    icon: '🏰',
    color: '#fa709a',
    level: 'A2',
    units: [], // À implémenter par l'équipe
    teamLead: teamMembers.jean,
    contributors: [teamMembers.marie, teamMembers.tom],
    estimatedTotalTime: 18,
    isActive: false,
    order: 4
  },
  {
    id: 'advanced',
    title: 'Niveau Avancé',
    description: 'Grammaire complexe et vocabulaire spécialisé',
    icon: '🎓',
    color: '#667eea',
    level: 'B1',
    units: [], // À implémenter par l'équipe
    teamLead: teamMembers.marie,
    contributors: [teamMembers.paul, teamMembers.lisa, teamMembers.anna],
    estimatedTotalTime: 25,
    isActive: false,
    order: 5
  }
]

// Fonctions utilitaires pour la gestion des sections
export const getSectionById = (id: string): LearningSection | undefined => {
  return learningSections.find(section => section.id === id)
}

export const getActiveSections = (): LearningSection[] => {
  return learningSections.filter(section => section.isActive)
}

export const getSectionsByLevel = (level: 'A1' | 'A2' | 'B1' | 'B2'): LearningSection[] => {
  return learningSections.filter(section => section.level === level)
}

export const getTeamMemberSections = (memberId: string): LearningSection[] => {
  return learningSections.filter(section =>
    section.teamLead.id === memberId ||
    section.contributors.some(contributor => contributor.id === memberId)
  )
}

// Statistiques d'équipe
export const getTeamStats = () => {
  const totalSections = learningSections.length
  const activeSections = getActiveSections().length
  const totalUnits = learningSections.reduce((sum, section) => sum + section.units.length, 0)
  const totalTime = learningSections.reduce((sum, section) => sum + section.estimatedTotalTime, 0)

  return {
    totalSections,
    activeSections,
    inDevelopment: totalSections - activeSections,
    totalUnits,
    totalTime,
    teamSize: Object.keys(teamMembers).length
  }
}