// Données pour l'Unité 4 : "Temps et jours" - Progression scaffoldée A1

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 4 - Temps, jours et expressions temporelles
export const unit4Vocabulary: VocabularyItem[] = [
  // JOURS DE LA SEMAINE (essentiels)
  {
    id: 'méindeg',
    luxembourgish: 'Méindeg',
    french: 'lundi',
    pronunciation: 'MEE-in-deg',
    usage: 'Premier jour ouvrable de la semaine au Luxembourg'
  },
  {
    id: 'dënschdeg',
    luxembourgish: 'Dënschdeg',
    french: 'mardi',
    pronunciation: 'DENSE-deg',
    usage: 'Deuxième jour ouvrable, jour de marché traditionnel'
  },
  {
    id: 'samschdeg',
    luxembourgish: 'Samschdeg',
    french: 'samedi',
    pronunciation: 'SAMS-deg',
    usage: 'Jour de détente et marchés hebdomadaires luxembourgeois'
  },
  {
    id: 'sonnden',
    luxembourgish: 'Sonnden',
    french: 'dimanche',
    pronunciation: 'SON-den',
    usage: 'Jour de repos familial et activités de loisir'
  },

  // EXPRESSIONS TEMPORELLES DE BASE
  {
    id: 'haut',
    luxembourgish: 'haut',
    french: 'aujourd\'hui',
    pronunciation: 'howt',
    usage: 'Référence au jour présent'
  },
  {
    id: 'muer',
    luxembourgish: 'muer',
    french: 'demain',
    pronunciation: 'moo-er',
    usage: 'Le jour suivant, planification future'
  },

  // RÉVISION UNITÉS PRÉCÉDENTES (30%)
  {
    id: 'ech',
    luxembourgish: 'ech',
    french: 'je',
    pronunciation: 'ekh',
    usage: 'Pronom personnel (révision)'
  },
  {
    id: 'sinn',
    luxembourgish: 'sinn',
    french: 'suis',
    pronunciation: 'zin',
    usage: 'Verbe être (révision)'
  },
  {
    id: 'schaffen',
    luxembourgish: 'schaffen',
    french: 'travailler',
    pronunciation: 'SHAF-en',
    usage: 'Verbe travail (révision Unit2) pour horaires'
  }
]

// Générateur d'exercices avec progression scaffoldée
export const generateUnit4Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : RECONNAISSANCE JOURS DE BASE
  // =============================================================================

  // 1.1 Reconnaissance audio jour ouvrable
  exercises.push({
    id: 'audio_meindeg',
    type: 'audio_recognition',
    vocabularyItem: unit4Vocabulary[0], // méindeg
    question: 'Quel jour de la semaine entendez-vous ?',
    options: ['lundi', 'mardi', 'mercredi'].sort(() => Math.random() - 0.5),
    correctAnswer: 'lundi',
    context: 'Reconnaissance des jours ouvrables luxembourgeois'
  })

  // 1.2 Traduction jours week-end
  exercises.push({
    id: 'translation_samschdeg',
    type: 'translation',
    vocabularyItem: unit4Vocabulary[2],
    question: 'Comment dit-on "samedi" en luxembourgeois ?',
    options: ['Samschdeg', 'Sonnden', 'Dënschdeg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Samschdeg',
    context: 'Vocabulaire week-end et loisirs'
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ (jour + contexte)
  // =============================================================================

  // 2.1 Construction expression temporelle simple
  exercises.push({
    id: 'progressive_haut_samschdeg',
    type: 'progressive_building',
    vocabularyItem: unit4Vocabulary[4], // haut
    question: 'Assemblez pour dire "aujourd\'hui samedi"',
    wordBank: ['haut', 'Samschdeg'],
    correctAnswer: 'haut Samschdeg',
    expectedSentence: 'haut Samschdeg',
    hint: 'temporel + jour',
    context: 'Expression du jour actuel'
  })

  // 2.2 Reconnaissance motif horaires travail
  exercises.push({
    id: 'pattern_work_schedule',
    type: 'pattern_recognition',
    vocabularyItem: unit4Vocabulary[8], // schaffen (révision)
    question: 'Comment exprime-t-on ses horaires de travail ?',
    options: ['ech schaffen op Méindeg', 'ech sinn op Méindeg', 'ech kommen op Méindeg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech schaffen op Méindeg',
    context: 'Structure pour indiquer ses jours de travail'
  })

  // =============================================================================
  // ÉTAPE 3 : CONSTRUCTION PHRASES COURTES (planning)
  // =============================================================================

  // 3.1 Phrase planning avec révision
  exercises.push({
    id: 'progressive_work_monday',
    type: 'progressive_building',
    vocabularyItem: unit4Vocabulary[6], // ech (révision)
    question: 'Complétez : "_____ schaffen op Méindeg"',
    wordBank: ['ech', 'haut', 'muer'],
    correctAnswer: 'ech',
    expectedSentence: 'ech schaffen op Méindeg',
    hint: 'Pronom personnel (révision Unit1)',
    context: 'Planning personnel de travail'
  })

  // 3.2 Complétion expression temporelle
  exercises.push({
    id: 'completion_tomorrow_plan',
    type: 'phrase_completion',
    vocabularyItem: unit4Vocabulary[5], // muer
    question: 'Complétez : "_____ ass Dënschdeg"',
    options: ['muer', 'haut', 'ech'].sort(() => Math.random() - 0.5),
    correctAnswer: 'muer',
    expectedSentence: 'muer ass Dënschdeg',
    context: 'Planning du lendemain'
  })

  // =============================================================================
  // ÉTAPE 4 : CONSTRUCTION PHRASES COMPLÈTES (4-6 mots)
  // =============================================================================

  // 4.1 Planning complet travail
  exercises.push({
    id: 'sentence_work_schedule_complete',
    type: 'sentence_construction',
    vocabularyItem: unit4Vocabulary[0],
    question: 'Exprimez votre planning : travail lundi et mardi',
    wordBank: ['ech', 'schaffen', 'op', 'Méindeg', 'an', 'Dënschdeg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech schaffen op Méindeg an Dënschdeg',
    expectedSentence: 'ech schaffen op Méindeg an Dënschdeg',
    hint: 'pronom + verbe + préposition + jours',
    context: 'Planning professionnel détaillé'
  })

  // 4.2 Remise en ordre week-end
  exercises.push({
    id: 'word_order_weekend_plan',
    type: 'word_ordering',
    vocabularyItem: unit4Vocabulary[2],
    question: 'Ordonnez : planning week-end samedi et dimanche',
    wordBank: ['haut', 'Samschdeg', 'muer', 'ass', 'Sonnden', 'an'],
    correctAnswer: 'haut Samschdeg an muer Sonnden',
    expectedSentence: 'haut Samschdeg an muer Sonnden',
    hint: 'temporel + jour + conjonction + temporel + jour',
    context: 'Organisation du week-end'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE LUXEMBOURGEOISE
  // =============================================================================

  // 5.1 Dialogue rendez-vous médical Luxembourg
  exercises.push({
    id: 'dialogue_medical_appointment',
    type: 'dialogue_completion',
    vocabularyItem: unit4Vocabulary[1],
    question: 'Prise de rendez-vous CHL (Centre Hospitalier). Disponibilité mardi :',
    options: [
      'ech sinn disponibel op Dënschdeg',
      'ech kommen disponibel op Dënschdeg',
      'ech schaffen disponibel op Dënschdeg'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech sinn disponibel op Dënschdeg',
    context: 'Système de santé luxembourgeois'
  })

  // 5.2 Reconnaissance vocale planning semaine
  exercises.push({
    id: 'speech_weekly_schedule',
    type: 'speech_recognition',
    vocabularyItem: unit4Vocabulary[4],
    question: 'Annoncez votre planning : "haut ech schaffen"',
    correctAnswer: 'haut ech schaffen',
    expectedSentence: 'haut ech schaffen',
    hint: 'Prononcez : howt ekh SHAF-en',
    context: 'Communication planning professionnel'
  })

  // 5.3 Application pratique - garde d\'enfants
  exercises.push({
    id: 'creative_childcare_schedule',
    type: 'dialogue_completion',
    vocabularyItem: unit4Vocabulary[3],
    question: 'Planning garde partagée. Enfant chez vous dimanche :',
    options: [
      'mäin Kand ass hei op Sonnden',
      'mäin Kand schaffen hei op Sonnden',
      'mäin Kand kommen hei op Sonnden'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'mäin Kand ass hei op Sonnden',
    context: 'Organisation familiale luxembourgeoise'
  })

  // 5.4 Exercice bonus - marché traditionnel
  exercises.push({
    id: 'bonus_market_day',
    type: 'pattern_recognition',
    vocabularyItem: unit4Vocabulary[2],
    question: 'Quel jour se tient le marché traditionnel à Luxembourg-Ville ?',
    options: ['Samschdeg', 'Méindeg', 'Sonnden'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Samschdeg',
    context: 'Traditions et coutumes luxembourgeoises'
  })

  // 5.5 Exercice culturel - journée type luxembourgeoise
  exercises.push({
    id: 'cultural_typical_day',
    type: 'dialogue_completion',
    vocabularyItem: unit4Vocabulary[4],
    question: 'Restaurant traditionnel. Réservation pour aujourd\'hui :',
    options: [
      'haut fir owes',
      'muer fir owes',
      'Samschdeg fir owes'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'haut fir owes',
    context: 'Gastronomie et habitudes luxembourgeoises'
  })

  return exercises
}

// Fonctions utilitaires pour jours et temps
function getRandomDayDistractor(correct: string): string {
  const days = ['Méindeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg', 'Sonnden']
  const filtered = days.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomTimeDistractor(correct: string): string {
  const timeExpressions = ['haut', 'muer', 'gëscht', 'iwwermuer', 'dës Woch']
  const filtered = timeExpressions.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Validation spécifique Unit4
export function validateUnit4Progression(): {
  isValid: boolean
  issues: string[]
  temporalProgression: 'poor' | 'good' | 'excellent'
  culturalIntegration: number // pourcentage contexte luxembourgeois
} {
  const exercises = generateUnit4Exercises()
  const issues: string[] = []

  // Vérifier intégration culturelle luxembourgeoise
  const culturalCount = exercises.filter(ex =>
    ex.context?.includes('luxembourgeois') ||
    ex.context?.includes('Luxembourg') ||
    ex.context?.includes('CHL') ||
    ex.context?.includes('marché') ||
    ex.context?.includes('traditions')
  ).length

  const culturalPercentage = (culturalCount / exercises.length) * 100

  if (culturalPercentage < 50) {
    issues.push('Pas assez de contexte culturel luxembourgeois (minimum 50%)')
  }

  // Vérifier progression temporelle cohérente
  const temporalExercises = exercises.filter(ex =>
    ex.vocabularyItem?.id?.includes('haut') ||
    ex.vocabularyItem?.id?.includes('muer') ||
    ex.vocabularyItem?.id?.includes('deg') || // pour les jours
    ex.expectedSentence?.includes('op ') // préposition temporelle
  ).length

  if (temporalExercises < 8) {
    issues.push('Progression temporelle insuffisante pour maîtrise planning')
  }

  const temporalProgression = issues.length === 0 ? 'excellent' :
                             issues.length <= 1 ? 'good' : 'poor'

  return {
    isValid: issues.length === 0,
    issues,
    temporalProgression,
    culturalIntegration: Math.round(culturalPercentage)
  }
}

// Définition de l'Unité 4 complète
export const learningUnit4: LearningUnit = {
  id: 'unit_4',
  title: 'Temps et jours',
  description: 'Jours de la semaine et expressions temporelles pour organiser son quotidien luxembourgeois',
  level: 'A1',
  vocabulary: unit4Vocabulary,
  exercises: generateUnit4Exercises(),
  targetScore: 80,
  estimatedTime: 5
}