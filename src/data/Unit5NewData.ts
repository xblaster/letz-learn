// Données pour l'Unité 5 : "Famille proche" - Progression scaffoldée A1

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 5 - Famille et relations familiales
export const unit5Vocabulary: VocabularyItem[] = [
  // FAMILLE NUCLÉAIRE (prioritaire)
  {
    id: 'famill',
    luxembourgish: 'Famill',
    french: 'famille',
    pronunciation: 'fa-MILL',
    usage: 'Le groupe familial, unité sociale de base au Luxembourg'
  },
  {
    id: 'papp',
    luxembourgish: 'Papp',
    french: 'papa',
    pronunciation: 'PAP',
    usage: 'Père, terme affectueux utilisé en famille'
  },
  {
    id: 'mamm',
    luxembourgish: 'Mamm',
    french: 'maman',
    pronunciation: 'MAM',
    usage: 'Mère, terme affectueux familial'
  },
  {
    id: 'kand',
    luxembourgish: 'Kand',
    french: 'enfant',
    pronunciation: 'KAND',
    usage: 'Enfant, descendant direct'
  },

  // POSSESSIFS ESSENTIELS
  {
    id: 'mäin',
    luxembourgish: 'mäin',
    french: 'mon/ma',
    pronunciation: 'mäyn',
    usage: 'Adjectif possessif première personne'
  },
  {
    id: 'är',
    luxembourgish: 'är',
    french: 'il/elle',
    pronunciation: 'är',
    usage: 'Pronom personnel troisième personne'
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
    french: 'suis/sont',
    pronunciation: 'zin',
    usage: 'Verbe être (révision)'
  },
  {
    id: 'schaffen',
    luxembourgish: 'schaffen',
    french: 'travailler',
    pronunciation: 'SHAF-en',
    usage: 'Verbe travail (révision) pour famille active'
  }
]

// Générateur d'exercices avec progression scaffoldée
export const generateUnit5Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : RECONNAISSANCE FAMILLE DE BASE
  // =============================================================================

  // 1.1 Reconnaissance audio famille nucléaire
  exercises.push({
    id: 'audio_famill',
    type: 'audio_recognition',
    vocabularyItem: unit5Vocabulary[0], // famill
    question: 'Quel concept familial entendez-vous ?',
    options: ['famille', 'amis', 'voisins'].sort(() => Math.random() - 0.5),
    correctAnswer: 'famille',
    context: 'Reconnaissance du concept familial luxembourgeois'
  })

  // 1.2 Traduction membres famille
  exercises.push({
    id: 'translation_papp',
    type: 'translation',
    vocabularyItem: unit5Vocabulary[1],
    question: 'Comment dit-on "papa" en luxembourgeois ?',
    options: ['Papp', 'Mamm', 'Kand'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Papp',
    context: 'Vocabulaire familial affectueux'
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ (possessifs + famille)
  // =============================================================================

  // 2.1 Construction possessif simple
  exercises.push({
    id: 'progressive_mäin_papp',
    type: 'progressive_building',
    vocabularyItem: unit5Vocabulary[4], // mäin
    question: 'Assemblez pour dire "mon papa"',
    wordBank: ['mäin', 'Papp'],
    correctAnswer: 'mäin Papp',
    expectedSentence: 'mäin Papp',
    hint: 'possessif + membre famille',
    context: 'Expression de lien familial personnel'
  })

  // 2.2 Reconnaissance motif familial
  exercises.push({
    id: 'pattern_family_presentation',
    type: 'pattern_recognition',
    vocabularyItem: unit5Vocabulary[0],
    question: 'Comment présente-t-on sa famille ?',
    options: ['dat ass mäin Famill', 'ech sinn mäin Famill', 'ech schaffen mäin Famill'].sort(() => Math.random() - 0.5),
    correctAnswer: 'dat ass mäin Famill',
    context: 'Structure pour présenter sa famille'
  })

  // =============================================================================
  // ÉTAPE 3 : CONSTRUCTION PHRASES COURTES (descriptions famille)
  // =============================================================================

  // 3.1 Phrase description avec révision
  exercises.push({
    id: 'progressive_family_work',
    type: 'progressive_building',
    vocabularyItem: unit5Vocabulary[6], // ech (révision)
    question: 'Complétez : "_____ an mäin Papp schaffen"',
    wordBank: ['ech', 'mäin', 'är'],
    correctAnswer: 'ech',
    expectedSentence: 'ech an mäin Papp schaffen',
    hint: 'Pronom personnel (révision Unit1)',
    context: 'Famille qui travaille ensemble'
  })

  // 3.2 Complétion description familiale
  exercises.push({
    id: 'completion_family_member',
    type: 'phrase_completion',
    vocabularyItem: unit5Vocabulary[2], // mamm
    question: 'Complétez : "mäin _____ ass fréindlech"',
    options: ['Mamm', 'Papp', 'Kand'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Mamm',
    expectedSentence: 'mäin Mamm ass fréindlech',
    context: 'Description positive membre famille'
  })

  // =============================================================================
  // ÉTAPE 4 : CONSTRUCTION PHRASES COMPLÈTES (4-6 mots)
  // =============================================================================

  // 4.1 Présentation famille complète
  exercises.push({
    id: 'sentence_family_complete',
    type: 'sentence_construction',
    vocabularyItem: unit5Vocabulary[0],
    question: 'Présentez votre famille : moi, papa et maman',
    wordBank: ['dat', 'ass', 'mäin', 'Famill', 'Papp', 'Mamm', 'an'].sort(() => Math.random() - 0.5),
    correctAnswer: 'dat ass mäin Famill Papp an Mamm',
    expectedSentence: 'dat ass mäin Famill Papp an Mamm',
    hint: 'démonstratif + verbe + possessif + famille + membres',
    context: 'Présentation familiale formelle'
  })

  // 4.2 Remise en ordre activité familiale
  exercises.push({
    id: 'word_order_family_activity',
    type: 'word_ordering',
    vocabularyItem: unit5Vocabulary[8], // schaffen (révision)
    question: 'Ordonnez : famille qui travaille ensemble',
    wordBank: ['mäin', 'Famill', 'schaffen', 'zesummen', 'op', 'der', 'Ferme'],
    correctAnswer: 'mäin Famill schaffen zesummen op der Ferme',
    expectedSentence: 'mäin Famill schaffen zesummen op der Ferme',
    hint: 'possessif + famille + verbe + adverbe + lieu',
    context: 'Tradition familiale agricole luxembourgeoise'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE LUXEMBOURGEOISE
  // =============================================================================

  // 5.1 Dialogue inscription scolaire Luxembourg
  exercises.push({
    id: 'dialogue_school_enrollment',
    type: 'dialogue_completion',
    vocabularyItem: unit5Vocabulary[3],
    question: 'Inscription école communale. Présentation de votre enfant :',
    options: [
      'dat ass mäin Kand Marie',
      'dat schaffen mäin Kand Marie',
      'dat kommen mäin Kand Marie'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'dat ass mäin Kand Marie',
    context: 'Système éducatif luxembourgeois'
  })

  // 5.2 Reconnaissance vocale présentation familiale
  exercises.push({
    id: 'speech_family_introduction',
    type: 'speech_recognition',
    vocabularyItem: unit5Vocabulary[0],
    question: 'Présentez votre famille : "dat ass mäin Famill"',
    correctAnswer: 'dat ass mäin Famill',
    expectedSentence: 'dat ass mäin Famill',
    hint: 'Prononcez : dat ass mäyn fa-MILL',
    context: 'Présentation orale en contexte social'
  })

  // 5.3 Application pratique - réunion parent-professeur
  exercises.push({
    id: 'creative_parent_teacher',
    type: 'dialogue_completion',
    vocabularyItem: unit5Vocabulary[1],
    question: 'Réunion parent-professeur lycée. Vous et votre mari :',
    options: [
      'ech an mäin Papp sinn hei',
      'ech an mäin Mamm sinn hei',
      'ech an mäin Mann sinn hei'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech an mäin Mann sinn hei',
    context: 'Système éducatif secondaire luxembourgeois'
  })

  // 5.4 Exercice bonus - traditions familiales
  exercises.push({
    id: 'bonus_family_traditions',
    type: 'pattern_recognition',
    vocabularyItem: unit5Vocabulary[0],
    question: 'Tradition luxembourgeoise : repas famille dimanche ?',
    options: ['mäin Famill ëst zesummen', 'mäin Famill schaffen zesummen', 'mäin Famill sinn zesummen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'mäin Famill ëst zesummen',
    context: 'Traditions familiales luxembourgeoises'
  })

  // 5.5 Exercice culturel - garde partagée
  exercises.push({
    id: 'cultural_shared_custody',
    type: 'dialogue_completion',
    vocabularyItem: unit5Vocabulary[3],
    question: 'Organisation garde alternée. Cette semaine :',
    options: [
      'mäin Kand ass bei mäin Mamm',
      'mäin Kand schaffen bei mäin Mamm',
      'mäin Kand kommen bei mäin Mamm'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'mäin Kand ass bei mäin Mamm',
    context: 'Organisation familiale moderne luxembourgeoise'
  })

  return exercises
}

// Fonctions utilitaires pour famille
function getRandomFamilyDistractor(correct: string): string {
  const familyDistractors = ['Frënd', 'Noper', 'Kolleeg', 'Léierer', 'Dokter']
  const filtered = familyDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomRelationDistractor(correct: string): string {
  const relationDistractors = ['Grousselteren', 'Cousin', 'Tatta', 'Onkel']
  const filtered = relationDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Validation spécifique Unit5
export function validateUnit5Progression(): {
  isValid: boolean
  issues: string[]
  familyProgression: 'poor' | 'good' | 'excellent'
  possessiveIntegration: number // pourcentage usage possessifs
} {
  const exercises = generateUnit5Exercises()
  const issues: string[] = []

  // Vérifier intégration possessifs
  const possessiveCount = exercises.filter(ex =>
    ex.expectedSentence?.includes('mäin') ||
    ex.correctAnswer?.includes('mäin') ||
    ex.vocabularyItem?.id === 'mäin'
  ).length

  const possessivePercentage = (possessiveCount / exercises.length) * 100

  if (possessivePercentage < 40) {
    issues.push('Pas assez d\'usage des possessifs pour famille (minimum 40%)')
  }

  // Vérifier progression familiale cohérente
  const familyExercises = exercises.filter(ex =>
    ex.vocabularyItem?.id?.includes('famill') ||
    ex.vocabularyItem?.id?.includes('papp') ||
    ex.vocabularyItem?.id?.includes('mamm') ||
    ex.vocabularyItem?.id?.includes('kand') ||
    ex.context?.includes('famille') ||
    ex.context?.includes('familial')
  ).length

  if (familyExercises < 8) {
    issues.push('Progression familiale insuffisante pour maîtrise relations')
  }

  const familyProgression = issues.length === 0 ? 'excellent' :
                           issues.length <= 1 ? 'good' : 'poor'

  return {
    isValid: issues.length === 0,
    issues,
    familyProgression,
    possessiveIntegration: Math.round(possessivePercentage)
  }
}

// Définition de l'Unité 5 complète
export const learningUnit5: LearningUnit = {
  id: 'unit_5',
  title: 'Famille proche',
  description: 'Membres famille nucléaire et expressions possessives pour parler de ses proches',
  level: 'A1',
  vocabulary: unit5Vocabulary,
  exercises: generateUnit5Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80,
  estimatedTime: 5
}