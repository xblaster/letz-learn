// Données pour l'Unité 1 : "Premières rencontres" - Progression scaffoldée optimisée

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 1 - Vocabulaire de base avec éléments grammaticaux
export const unit1Vocabulary: VocabularyItem[] = [
  // ÉTAPE 1 : Vocabulaire de base (4 mots essentiels)
  {
    id: 'moien',
    luxembourgish: 'Moien',
    french: 'Bonjour',
    pronunciation: 'MOY-en',
    usage: 'Salutation universelle utilisée toute la journée au Luxembourg'
  },
  {
    id: 'addi',
    luxembourgish: 'Äddi',
    french: 'Au revoir',
    pronunciation: 'Ä-di',
    usage: 'Congé standard dans toutes les situations'
  },
  {
    id: 'merci',
    luxembourgish: 'Merci',
    french: 'Merci',
    pronunciation: 'MER-si',
    usage: 'Remerciement, identique au français'
  },
  {
    id: 'jo',
    luxembourgish: 'Jo',
    french: 'Oui',
    pronunciation: 'YO',
    usage: 'Accord ou confirmation positive'
  },
  // ÉLÉMENTS GRAMMATICAUX pour construction progressive
  {
    id: 'ech',
    luxembourgish: 'ech',
    french: 'je',
    pronunciation: 'ekh',
    usage: 'Pronom personnel première personne'
  },
  {
    id: 'sinn',
    luxembourgish: 'sinn',
    french: 'suis',
    pronunciation: 'zin',
    usage: 'Verbe être première personne (ech sinn = je suis)'
  }
]

// Générateur d'exercices avec progression scaffoldée en 5 étapes
export const generateUnit1Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : VOCABULAIRE DE BASE (4 mots essentiels)
  // =============================================================================

  // 1.1 Reconnaissance audio des salutations de base
  exercises.push({
    id: 'audio_moien',
    type: 'audio_recognition',
    vocabularyItem: unit1Vocabulary[0], // Moien
    question: 'Que signifie ce mot que vous entendez ?',
    options: ['Bonjour', 'Au revoir', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Bonjour',
    context: 'Reconnaissance de la salutation luxembourgeoise principale'
  })

  // 1.2 Traduction vocabulaire essentiel
  exercises.push({
    id: 'translation_basic',
    type: 'translation',
    vocabularyItem: unit1Vocabulary[0],
    question: 'Comment dit-on "Bonjour" en luxembourgeois ?',
    options: ['Moien', 'Äddi', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien',
    context: 'Traduction de base français-luxembourgeois'
  })

  // 1.3 Association de vocabulaire clé
  exercises.push({
    id: 'word_pairing_greetings',
    type: 'word_pairing',
    vocabularyItem: unit1Vocabulary[0],
    question: 'Associez chaque mot luxembourgeois à sa traduction française.',
    context: 'Consolidez vos premières salutations et expressions courantes.',
    correctAnswer: 'all_matched',
    hint: 'Cliquez sur un mot luxembourgeois puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'moien', left: 'Moien', right: 'Bonjour' },
      { id: 'addi', left: 'Äddi', right: 'Au revoir' },
      { id: 'merci', left: 'Merci', right: 'Merci' },
      { id: 'jo', left: 'Jo', right: 'Oui' },
      { id: 'ech', left: 'ech', right: 'je' }
    ]
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ SIMPLE (2-3 mots)
  // =============================================================================

  // 2.1 Construction guidée "Moien ech"
  exercises.push({
    id: 'progressive_moien_ech',
    type: 'progressive_building',
    vocabularyItem: unit1Vocabulary[0],
    question: 'Assemblez : salutation + "je" pour commencer une présentation',
    wordBank: ['Moien', 'ech'],
    correctAnswer: 'Moien ech',
    expectedSentence: 'Moien ech',
    hint: 'Commencez par la salutation, puis ajoutez le pronom personnel',
    context: 'Première étape de présentation personnelle'
  })

  // 2.2 Reconnaissance de motifs simples
  exercises.push({
    id: 'pattern_simple',
    type: 'pattern_recognition',
    vocabularyItem: unit1Vocabulary[4], // ech
    question: 'Quel motif permet de commencer une présentation ?',
    options: ['Moien ech', 'Äddi ech', 'Merci ech'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien ech',
    context: 'Reconnaissance du début de présentation standard'
  })

  // =============================================================================
  // ÉTAPE 3 : CONSTRUCTION PHRASES COURTES (3-4 mots)
  // =============================================================================

  // 3.1 Construction "Moien ech sinn"
  exercises.push({
    id: 'progressive_moien_ech_sinn',
    type: 'progressive_building',
    vocabularyItem: unit1Vocabulary[5], // sinn
    question: 'Complétez la présentation : "Moien ech ___"',
    wordBank: ['sinn', 'jo', 'merci'],
    correctAnswer: 'sinn',
    expectedSentence: 'Moien ech sinn',
    hint: '"ech sinn" signifie "je suis" en luxembourgeois',
    context: 'Construction progressive de la présentation'
  })

  // 3.2 Complétion à trous pour consolider
  exercises.push({
    id: 'completion_presentation',
    type: 'phrase_completion',
    vocabularyItem: unit1Vocabulary[5],
    question: 'Complétez : "Moien ___ sinn"',
    options: ['ech', 'jo', 'merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech',
    expectedSentence: 'Moien ech sinn',
    context: 'Consolidation de la structure de présentation'
  })

  // =============================================================================
  // ÉTAPE 4 : CONSTRUCTION PHRASES COMPLÈTES (4-5 mots)
  // =============================================================================

  // 4.1 Construction complète avec prénom
  exercises.push({
    id: 'sentence_complete_presentation',
    type: 'sentence_construction',
    vocabularyItem: unit1Vocabulary[0],
    question: 'Assemblez une présentation complète avec le prénom "Marie"',
    wordBank: ['Moien', 'ech', 'sinn', 'Marie'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien ech sinn Marie',
    expectedSentence: 'Moien ech sinn Marie',
    hint: 'Structure : Salutation + pronom + verbe + prénom',
    context: 'Présentation personnelle complète'
  })

  // 4.2 Remise en ordre pour vérification
  exercises.push({
    id: 'word_order_presentation',
    type: 'word_ordering',
    vocabularyItem: unit1Vocabulary[5],
    question: 'Remettez ces mots dans l\'ordre pour une présentation correcte',
    wordBank: ['sinn', 'ech', 'Tom', 'Moien'],
    correctAnswer: 'Moien ech sinn Tom',
    expectedSentence: 'Moien ech sinn Tom',
    hint: 'L\'ordre luxembourgeois suit : salutation, pronom, verbe, nom',
    context: 'Maîtrise de l\'ordre des mots en luxembourgeois'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE
  // =============================================================================

  // 5.1 Dialogue contextuel authentique
  exercises.push({
    id: 'dialogue_office_context',
    type: 'dialogue_completion',
    vocabularyItem: unit1Vocabulary[0],
    question: 'Premier jour au bureau à Luxembourg-Ville. Vous vous présentez : "____"',
    options: [
      'Moien ech sinn Alex',
      'Äddi ech sinn Alex',
      'Merci ech sinn Alex'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien ech sinn Alex',
    context: 'Contexte professionnel luxembourgeois authentique'
  })

  // 5.2 Reconnaissance vocale complète
  exercises.push({
    id: 'speech_complete_presentation',
    type: 'speech_recognition',
    vocabularyItem: unit1Vocabulary[0],
    question: 'Prononcez votre présentation complète : "Moien ech sinn [votre prénom]"',
    correctAnswer: 'Moien ech sinn',
    expectedSentence: 'Moien ech sinn',
    hint: 'Prononcez clairement chaque mot : MOY-en ekh zin',
    context: 'Production orale de présentation personnelle'
  })

  // 5.3 Application créative
  exercises.push({
    id: 'creative_goodbye',
    type: 'dialogue_completion',
    vocabularyItem: unit1Vocabulary[1], // Äddi
    question: 'Fin de réunion au Luxembourg. Vous partez : "____"',
    options: ['Äddi', 'Moien', 'Jo'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Äddi',
    context: 'Usage contextuel des salutations de départ'
  })

  // Conserver l'ordre des exercices pour respecter la progression scaffoldée
  return exercises
}

// Fonctions utilitaires pour exercices scaffoldés

function getRandomDistractor(correct: string, category: 'greeting' | 'other'): string {
  const greetingDistracters = ['Bonsoir', 'Salut', 'Bonne nuit', 'À bientôt']
  const otherDistracters = ['Peut-être', 'Toujours', 'Jamais', 'Beaucoup']

  const pool = category === 'greeting' ? greetingDistracters : otherDistracters
  const filtered = pool.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxDistractor(correct: string): string {
  const luxDistracters = ['Gudden', 'Wuel', 'Éief', 'Elo', 'Ganz', 'Ville']
  const filtered = luxDistracters.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Fonction pour valider la progression scaffoldée
export function validateProgressiveStructure(): {
  isValid: boolean
  issues: string[]
  scaffoldingQuality: 'poor' | 'good' | 'excellent'
} {
  const exercises = generateUnit1Exercises()
  const issues: string[] = []

  // Vérifier la progression des types d'exercices
  const typeProgression = [
    'audio_recognition',      // Étape 1
    'translation',           // Étape 1
    'progressive_building',  // Étape 2
    'pattern_recognition',   // Étape 2
    'phrase_completion',     // Étape 3
    'sentence_construction', // Étape 4
    'word_ordering',         // Étape 4
    'dialogue_completion',   // Étape 5
    'speech_recognition'     // Étape 5
  ]

  // Vérifier équilibre des types d'exercices
  const typeCount = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const qcmCount = typeCount['audio_recognition'] + typeCount['translation'] + typeCount['dialogue_completion']
  const constructionCount = typeCount['progressive_building'] + typeCount['sentence_construction'] + typeCount['word_ordering'] + typeCount['phrase_completion']

  if (qcmCount / exercises.length > 0.5) {
    issues.push('Trop de QCM par rapport aux exercices de construction')
  }

  if (constructionCount / exercises.length < 0.3) {
    issues.push('Pas assez d\'exercices de construction (minimum 30%)')
  }

  const scaffoldingQuality = issues.length === 0 ? 'excellent' :
                            issues.length <= 2 ? 'good' : 'poor'

  return {
    isValid: issues.length === 0,
    issues,
    scaffoldingQuality
  }
}

// Statistiques de la progression scaffoldée
export function getScaffoldingStats() {
  const exercises = generateUnit1Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const qcmPercentage = ((typeDistribution['audio_recognition'] || 0) +
                        (typeDistribution['translation'] || 0) +
                        (typeDistribution['dialogue_completion'] || 0)) / exercises.length * 100

  const constructionPercentage = ((typeDistribution['progressive_building'] || 0) +
                                 (typeDistribution['sentence_construction'] || 0) +
                                 (typeDistribution['word_ordering'] || 0) +
                                 (typeDistribution['phrase_completion'] || 0)) / exercises.length * 100

  return {
    totalExercises: exercises.length,
    typeDistribution,
    qcmPercentage: Math.round(qcmPercentage),
    constructionPercentage: Math.round(constructionPercentage),
    scaffoldingSteps: 5,
    progressionComplexity: 'A1 → phrases complètes'
  }
}

// Définition de l'Unité 1 complète - PROGRESSION SCAFFOLDÉE A1
export const learningUnit1: LearningUnit = {
  id: 'unit_1',
  title: 'Premières rencontres',
  description: 'Progression scaffoldée des salutations vers la construction de phrases personnelles',
  level: 'A1',
  vocabulary: unit1Vocabulary,
  exercises: generateUnit1Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80, // Augmenté car progression plus structurée
  estimatedTime: 5 // Augmenté pour permettre apprentissage scaffoldé approprié
}