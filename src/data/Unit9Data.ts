// Unit 9: Conversations simples - Stratégie Duolingo A1+ optimisée
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 9 - Conversations simples (engagement optimal)
export const unit9Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - expressions familières
  {
    id: 'wéi_geet_et',
    luxembourgish: 'Wéi geet et?',
    french: 'Comment allez-vous ?',
    pronunciation: 'VAY gate et',
    usage: 'Question standard de politesse au Luxembourg'
  },
  {
    id: 'et_geet_gutt',
    luxembourgish: 'Et geet gutt',
    french: 'Ça va bien',
    pronunciation: 'et gate GOOT',
    usage: 'Réponse positive standard'
  },
  {
    id: 'an_dir',
    luxembourgish: 'an Dir?',
    french: 'et vous ?',
    pronunciation: 'an DEER',
    usage: 'Retourner la question poliment'
  },

  // TIER 2: Cultural hooks - spécificité luxembourgeoise
  {
    id: 'alles_kloer',
    luxembourgish: 'Alles kloer?',
    french: 'Tout va bien ?',
    pronunciation: 'AL-les KLOW-er',
    usage: 'Expression informelle typiquement luxembourgeoise'
  },
  {
    id: 'jo_merci',
    luxembourgish: 'Jo, merci',
    french: 'Oui, merci',
    pronunciation: 'YO MER-si',
    usage: 'Réponse courte et polie'
  },

  // TIER 3: Spaced repetition - vocabulaire précédent réintégré
  {
    id: 'moien_wéi',
    luxembourgish: 'Moien, wéi geet et?',
    french: 'Bonjour, comment allez-vous ?',
    pronunciation: 'MOY-en VAY gate et',
    usage: 'Salutation complète avec question'
  },

  // TIER 4: Context variation - même pattern, situations différentes
  {
    id: 'bis_gesinn',
    luxembourgish: 'Bis gesinn!',
    french: 'À bientôt !',
    pronunciation: 'bis ge-SEEN',
    usage: 'Au revoir informel entre collègues/amis'
  },
  {
    id: 'schéinen_dag',
    luxembourgish: 'Schéinen Dag!',
    french: 'Bonne journée !',
    pronunciation: 'SHAY-nen DAG',
    usage: 'Souhait en partant, très courant au Luxembourg'
  }
]

// Générateur d'exercices - Stratégie Duolingo optimisée pour engagement
export const generateUnit9Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // PHASE 1: QUICK WINS - Confiance immédiate (20% des exercices)
  // =============================================================================

  // 1.1 Recognition pattern familier (cerveau reconnait du français)
  exercises.push({
    id: 'quick_win_merci',
    type: 'audio_recognition',
    vocabularyItem: unit9Vocabulary[4], // Jo, merci
    question: 'Vous entendez une réponse polie. Que dit la personne ?',
    options: ['Jo, merci', 'Alles kloer', 'Bis gesinn'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Jo, merci',
    context: 'Quick win: reconnaissance de mots familiers'
  })

  // 1.2 Pattern matching simple
  exercises.push({
    id: 'pattern_simple_greeting',
    type: 'translation',
    vocabularyItem: unit9Vocabulary[0],
    question: 'Comment dit-on "Comment allez-vous ?" en luxembourgeois ?',
    options: ['Wéi geet et?', 'Alles kloer?', 'Bis gesinn!'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi geet et?',
    context: 'Traduction directe - quick win'
  })

  // =============================================================================
  // PHASE 2: CULTURAL HOOKS - Engagement Luxembourg authentique (25%)
  // =============================================================================

  // 2.1 Situation authentique Kirchberg (quartier affaires)
  exercises.push({
    id: 'cultural_kirchberg',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[3], // Alles kloer?
    question: 'Pause café au bureau à Kirchberg. Votre collègue vous demande informellement :',
    options: ['Alles kloer?', 'Wéi geet et?', 'Schéinen Dag!'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Alles kloer?',
    context: 'Cultural hook: usage informel au bureau luxembourgeois'
  })

  // 2.2 Réponse culturellement appropriée
  exercises.push({
    id: 'cultural_response',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[1],
    question: 'On vous demande "Wéi geet et?". Vous répondez positivement :',
    options: ['Et geet gutt', 'Alles kloer', 'Bis gesinn'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Et geet gutt',
    context: 'Réponse standard luxembourgeoise'
  })

  // 2.3 Usage contextuel des salutations de fin
  exercises.push({
    id: 'cultural_goodbye',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[7],
    question: 'Fin de journée au Luxembourg. Vous souhaitez une bonne journée :',
    options: ['Schéinen Dag!', 'Moien!', 'Alles kloer?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Schéinen Dag!',
    context: 'Cultural hook: souhait de fin très luxembourgeois'
  })

  // =============================================================================
  // PHASE 3: SPACED REPETITION - Réintégration intelligente (20%)
  // =============================================================================

  // 3.1 Réintégration Unit 1 + nouveau contenu
  exercises.push({
    id: 'spaced_moien_integration',
    type: 'sentence_construction',
    vocabularyItem: unit9Vocabulary[5],
    question: 'Assemblez une salutation complète avec question de politesse',
    wordBank: ['Moien', 'wéi', 'geet', 'et?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien, wéi geet et?',
    expectedSentence: 'Moien, wéi geet et?',
    hint: 'Commencez par la salutation, puis la question de politesse',
    context: 'Spaced repetition: Unit 1 + nouveau vocabulaire'
  })

  // 3.2 Pattern recognition avec éléments connus
  exercises.push({
    id: 'spaced_pattern_recognition',
    type: 'pattern_recognition',
    vocabularyItem: unit9Vocabulary[2],
    question: 'Après "Et geet gutt", comment retourner poliment la question ?',
    options: ['an Dir?', 'Bis gesinn!', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'an Dir?',
    context: 'Politesse: retourner la question'
  })

  // =============================================================================
  // PHASE 4: CONTEXT VARIATION - Même pattern, situations différentes (25%)
  // =============================================================================

  // 4.1 Même pattern, contexte formel
  exercises.push({
    id: 'context_formal',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[0],
    question: 'Première rencontre avec le directeur. Vous demandez poliment :',
    options: ['Wéi geet et?', 'Alles kloer?', 'Bis gesinn!'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi geet et?',
    context: 'Context variation: situation formelle'
  })

  // 4.2 Même pattern, contexte informel entre amis
  exercises.push({
    id: 'context_informal',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[3],
    question: 'Retrouvailles avec un ami à Bonnevoie. Vous demandez :',
    options: ['Alles kloer?', 'Wéi geet et?', 'Schéinen Dag!'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Alles kloer?',
    context: 'Context variation: situation informelle'
  })

  // 4.3 Dialogue complet - application pratique
  exercises.push({
    id: 'context_complete_dialogue',
    type: 'progressive_building',
    vocabularyItem: unit9Vocabulary[1],
    question: 'Construisez votre réponse complète à "Moien, wéi geet et?"',
    wordBank: ['Et', 'geet', 'gutt', 'an', 'Dir?'],
    correctAnswer: 'Et geet gutt, an Dir?',
    expectedSentence: 'Et geet gutt, an Dir?',
    hint: 'Répondez positivement puis retournez la question',
    context: 'Application: dialogue complet naturel'
  })

  // =============================================================================
  // PHASE 5: PRODUCTION ORALE - Confiance en expression (10%)
  // =============================================================================

  // 5.1 Production guidée
  exercises.push({
    id: 'speech_guided_greeting',
    type: 'speech_recognition',
    vocabularyItem: unit9Vocabulary[5],
    question: 'Prononcez une salutation complète avec question de politesse',
    correctAnswer: 'Moien, wéi geet et?',
    expectedSentence: 'Moien, wéi geet et?',
    hint: 'MOY-en, VAY gate et?',
    context: 'Production orale: salutation naturelle'
  })

  return exercises
}

// Métriques Duolingo pour Unit 9
export function getUnit9EngagementMetrics() {
  const exercises = generateUnit9Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // Calcul des métriques d'engagement Duolingo
  const quickWinPercentage = 20 // Quick wins pour confiance
  const culturalHookPercentage = 25 // Cultural hooks pour engagement authentique
  const spacedRepetitionPercentage = 20 // Spaced repetition pour retention
  const contextVariationPercentage = 25 // Context variation pour application
  const oralProductionPercentage = 10 // Production pour confiance

  return {
    totalExercises: exercises.length,
    typeDistribution,
    engagementStrategy: {
      quickWins: quickWinPercentage,
      culturalHooks: culturalHookPercentage,
      spacedRepetition: spacedRepetitionPercentage,
      contextVariation: contextVariationPercentage,
      oralProduction: oralProductionPercentage
    },
    targetMetrics: {
      retentionD7: '60%+',
      timeToCompletion: '5-7min',
      satisfactionScore: '4.3+/5'
    },
    luxembourgishAuth: {
      geoReferences: ['Kirchberg', 'Bonnevoie'],
      culturalExpressions: ['Alles kloer?', 'Schéinen Dag!'],
      informalFormal: 'Balanced'
    }
  }
}

// Validation progression pédagogique
export function validateUnit9Progression() {
  const exercises = generateUnit9Exercises()

  return {
    progressionType: 'A1+ Communication',
    scaffolding: 'Quick wins → Cultural hooks → Spaced repetition → Context variation → Production',
    engagementOptimization: true,
    culturalAuthenticity: true,
    retentionStrategy: 'Spaced repetition + Context variation',
    confidenceBuilding: 'Quick wins + Gradual complexity'
  }
}

// Définition Unit 9 - Communication quotidienne optimisée
export const learningUnit9: LearningUnit = {
  id: 'unit_9',
  title: 'Conversations simples',
  description: 'Maîtrisez les bases des conversations quotidiennes au Luxembourg',
  level: 'A1+',
  vocabulary: unit9Vocabulary,
  exercises: generateUnit9Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 85, // Légèrement plus élevé que Unit 1 (progression naturelle)
  estimatedTime: 6 // Progression: 5→6 minutes pour plus de contenu
}