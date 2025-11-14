// Données pour l'Unité E04 : "Froewierder, onbestëmmt Artikelen & Nee/Net"
// Questions, articles indéfinis et négation

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E04 - Mots interrogatifs et négation
export const unitE04Vocabulary: VocabularyItem[] = [
  // Mots interrogatifs (7 nouveaux)
  {
    id: 'wie',
    luxembourgish: 'Wéi?',
    french: 'Comment?',
    pronunciation: 'vay',
    usage: 'Mot interrogatif pour demander "comment"'
  },
  {
    id: 'wou',
    luxembourgish: 'Wou?',
    french: 'Où?',
    pronunciation: 'voo',
    usage: 'Mot interrogatif pour le lieu'
  },
  {
    id: 'wat',
    luxembourgish: 'Wat?',
    french: 'Quoi?/Que?',
    pronunciation: 'vat',
    usage: 'Mot interrogatif pour les choses'
  },
  {
    id: 'wien',
    luxembourgish: 'Wien?',
    french: 'Qui?',
    pronunciation: 'veen',
    usage: 'Mot interrogatif pour les personnes'
  },
  {
    id: 'nee',
    luxembourgish: 'nee',
    french: 'non',
    pronunciation: 'nay',
    usage: 'Négation simple'
  },
  {
    id: 'net',
    luxembourgish: 'net',
    french: 'ne...pas',
    pronunciation: 'net',
    usage: 'Négation dans la phrase'
  },
  {
    id: 'ee_eng',
    luxembourgish: 'ee/eng',
    french: 'un/une',
    pronunciation: 'ay/eng',
    usage: 'Articles indéfinis (ee=masculin/neutre, eng=féminin)'
  },
  // Mots de révision (2 de E03)
  {
    id: 'den_review',
    luxembourgish: 'den/déi/dat',
    french: 'le/la/le',
    pronunciation: 'den/day/dat',
    usage: 'Articles définis (révision)'
  },
  {
    id: 'mann_review',
    luxembourgish: 'Mann',
    french: 'homme',
    pronunciation: 'man',
    usage: 'Nom masculin (révision)'
  }
]

// Générateur d'exercices pour E04
export const generateUnitE04Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // EXERCICE 1 : ASSOCIATION MOTS INTERROGATIFS
  // =============================================================================
  exercises.push({
    id: 'word_pairing_questions',
    type: 'word_pairing',
    vocabularyItem: unitE04Vocabulary[0], // Wéi
    question: 'Associez chaque mot interrogatif luxembourgeois à sa traduction française.',
    context: 'Maîtrisez les quatre mots interrogatifs essentiels pour poser vos premières questions.',
    correctAnswer: 'all_matched',
    hint: 'Wéi ressemble à "way" en anglais, Wou à "wo" en allemand.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'wie', left: 'Wéi?', right: 'Comment?' },
      { id: 'wou', left: 'Wou?', right: 'Où?' },
      { id: 'wat', left: 'Wat?', right: 'Quoi?/Que?' },
      { id: 'wien', left: 'Wien?', right: 'Qui?' }
    ]
  })

  // =============================================================================
  // EXERCICE 2 : RECONNAISSANCE AUDIO DES MOTS INTERROGATIFS
  // =============================================================================
  exercises.push({
    id: 'audio_question_words',
    type: 'audio_recognition',
    vocabularyItem: unitE04Vocabulary[0], // Wéi
    question: 'Écoutez la question complète. Quel est le mot interrogatif utilisé?',
    options: ['Wéi', 'Wou', 'Wat', 'Wien'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi',
    context: 'Reconnaissance auditive: "Wéi geet et?" (Comment ça va?)'
  })

  // =============================================================================
  // EXERCICE 3 : RECONNAISSANCE DE MOTIFS - QUESTIONS VS AFFIRMATIONS
  // =============================================================================
  exercises.push({
    id: 'pattern_questions_vs_statements',
    type: 'pattern_recognition',
    vocabularyItem: unitE04Vocabulary[2], // Wat
    question: 'Identifiez si cette phrase est une question ou une affirmation: "Wat ass dat?"',
    options: ['Question', 'Affirmation'],
    correctAnswer: 'Question',
    context: 'En luxembourgeois, les questions commencent souvent par un mot interrogatif et ont une intonation montante.'
  })

  // =============================================================================
  // EXERCICE 4 : COMPLÉTION DE PHRASE - WÉI GEET ET
  // =============================================================================
  exercises.push({
    id: 'completion_wie_geet',
    type: 'phrase_completion',
    vocabularyItem: unitE04Vocabulary[0], // Wéi
    question: 'Complétez la question courante: "___ geet et?" (Comment ça va?)',
    options: ['Wéi', 'Wat', 'Wien'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi',
    expectedSentence: 'Wéi geet et?',
    hint: 'Pour demander "comment", utilisez le mot qui ressemble à "way".',
    context: 'Expression courante pour saluer quelqu\'un'
  })

  // =============================================================================
  // EXERCICE 5 : TRADUCTION - QU'EST-CE QUE C'EST?
  // =============================================================================
  exercises.push({
    id: 'translation_what_is_that',
    type: 'translation',
    vocabularyItem: unitE04Vocabulary[2], // Wat
    question: 'Comment dit-on "Qu\'est-ce que c\'est?" en luxembourgeois?',
    options: ['Wat ass dat?', 'Wien ass dat?', 'Wou ass dat?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wat ass dat?',
    context: 'Question essentielle pour identifier les objets'
  })

  // =============================================================================
  // EXERCICE 6 : CONSTRUCTION DE PHRASE - QUESTION AVEC WOU
  // =============================================================================
  exercises.push({
    id: 'sentence_wou_question',
    type: 'sentence_construction',
    vocabularyItem: unitE04Vocabulary[1], // Wou
    question: 'Construisez la question: "Où es-tu?" en luxembourgeois.',
    wordBank: ['Wou', 'bass', 'du', '?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wou bass du?',
    expectedSentence: 'Wou bass du?',
    hint: 'Ordre: Mot interrogatif + verbe + pronom + ?',
    context: 'Demander où se trouve quelqu\'un'
  })

  // =============================================================================
  // EXERCICE 7 : REMISE EN ORDRE - WÉI ASS DÄIN NUMM?
  // =============================================================================
  exercises.push({
    id: 'word_order_question',
    type: 'word_ordering',
    vocabularyItem: unitE04Vocabulary[0], // Wéi
    question: 'Remettez ces mots dans l\'ordre pour former: "Comment t\'appelles-tu?"',
    wordBank: ['ass', 'Wéi', 'Numm', 'däin', '?'],
    correctAnswer: 'Wéi ass däin Numm?',
    expectedSentence: 'Wéi ass däin Numm?',
    hint: 'Wéi (comment) + ass (est) + däin (ton) + Numm (nom)',
    context: 'Question pour demander le nom de quelqu\'un'
  })

  // =============================================================================
  // EXERCICE 8 : TRADUCTION NÉGATION - JE NE VIENS PAS
  // =============================================================================
  exercises.push({
    id: 'translation_negation',
    type: 'translation',
    vocabularyItem: unitE04Vocabulary[5], // net
    question: 'Traduisez: "Je ne viens pas du Luxembourg" en luxembourgeois.',
    options: [
      'Ech kommen net vu Lëtzebuerg',
      'Ech kommen nee vu Lëtzebuerg',
      'Ech kommen vu Lëtzebuerg net'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech kommen net vu Lëtzebuerg',
    hint: '"net" se place après le verbe conjugué, comme en allemand.',
    context: 'Utilisation de la négation "net" dans une phrase'
  })

  // =============================================================================
  // EXERCICE 9 : DIALOGUE - QUESTION-RÉPONSE
  // =============================================================================
  exercises.push({
    id: 'dialogue_question_answer',
    type: 'dialogue_completion',
    vocabularyItem: unitE04Vocabulary[3], // Wien
    question: 'Complétez le dialogue:\n- ___ bass du?\n- Ech sinn de Marc.',
    options: ['Wien', 'Wéi', 'Wat', 'Wou'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wien',
    context: 'Wien (qui) s\'utilise pour demander l\'identité d\'une personne'
  })

  // =============================================================================
  // EXERCICE 10 : CONSTRUCTION NÉGATIVE - NÉGATION DE PHRASES
  // =============================================================================
  exercises.push({
    id: 'sentence_negate',
    type: 'sentence_construction',
    vocabularyItem: unitE04Vocabulary[5], // net
    question: 'Construisez la phrase négative: "Je ne suis pas Marie"',
    wordBank: ['Ech', 'sinn', 'net', 'Marie'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sinn net Marie',
    expectedSentence: 'Ech sinn net Marie',
    hint: 'Structure: Pronom + verbe + net + complément',
    context: 'Former une négation simple avec "net"'
  })

  // =============================================================================
  // EXERCICE 11 : RECONNAISSANCE AUDIO - INTONATION QUESTION
  // =============================================================================
  exercises.push({
    id: 'audio_question_intonation',
    type: 'audio_recognition',
    vocabularyItem: unitE04Vocabulary[1], // Wou
    question: 'Écoutez la phrase. Est-ce une question ou une affirmation?',
    options: ['Question', 'Affirmation'],
    correctAnswer: 'Question',
    context: 'Reconnaissance de l\'intonation montante des questions: "Wou wunns du?" (Où habites-tu?)'
  })

  return exercises
}

// Fonction utilitaire pour obtenir des distracteurs aléatoires
function getRandomDistractor(correct: string, category: 'question' | 'negation' | 'article'): string {
  const questionDistracters = ['Wann?', 'Firwat?', 'Wéivill?', 'Wéini?']
  const negationDistracters = ['keen', 'näischt', 'ni', 'néng']
  const articleDistracters = ['de', 'déi', 'd\'', 'dem']

  let pool: string[] = []
  switch (category) {
    case 'question':
      pool = questionDistracters
      break
    case 'negation':
      pool = negationDistracters
      break
    case 'article':
      pool = articleDistracters
      break
  }

  const filtered = pool.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)] || pool[0]
}

// Fonction de validation de la structure des exercices
export function validateUnitE04Structure(): {
  isValid: boolean
  issues: string[]
  exerciseBalance: string
} {
  const exercises = generateUnitE04Exercises()
  const issues: string[] = []

  // Vérifier le nombre d'exercices
  if (exercises.length !== 11) {
    issues.push(`Nombre d'exercices incorrect: ${exercises.length} au lieu de 11`)
  }

  // Vérifier la diversité des types d'exercices
  const typeCount = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const uniqueTypes = Object.keys(typeCount).length
  if (uniqueTypes < 5) {
    issues.push(`Pas assez de diversité dans les types d'exercices: ${uniqueTypes} types différents`)
  }

  // Vérifier l'équilibre entre QCM et exercices de construction
  const qcmCount = (typeCount['audio_recognition'] || 0) +
                   (typeCount['translation'] || 0) +
                   (typeCount['dialogue_completion'] || 0) +
                   (typeCount['pattern_recognition'] || 0) +
                   (typeCount['phrase_completion'] || 0)
  const constructionCount = (typeCount['sentence_construction'] || 0) +
                           (typeCount['word_ordering'] || 0)

  const qcmPercentage = Math.round((qcmCount / exercises.length) * 100)
  const constructionPercentage = Math.round((constructionCount / exercises.length) * 100)

  const exerciseBalance = `QCM: ${qcmPercentage}%, Construction: ${constructionPercentage}%`

  return {
    isValid: issues.length === 0,
    issues,
    exerciseBalance
  }
}

// Statistiques de l'unité E04
export function getUnitE04Stats() {
  const exercises = generateUnitE04Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    vocabularyCount: unitE04Vocabulary.length,
    newWords: 7,
    reviewWords: 2,
    typeDistribution,
    focusAreas: [
      'Mots interrogatifs (Wéi, Wou, Wat, Wien)',
      'Négation (nee, net)',
      'Articles indéfinis (ee, eng)',
      'Construction de questions',
      'Intonation interrogative'
    ]
  }
}

// Définition de l'Unité E04 complète
export const learningUnitE04: LearningUnit = {
  id: 'unit_e04',
  title: 'E04 - Froewierder & Nee/Net',
  description: 'Posez vos premières questions en luxembourgeois et apprenez à dire non avec nee et net.',
  level: 'A1',
  vocabulary: unitE04Vocabulary,
  exercises: generateUnitE04Exercises(),
  targetScore: 80,
  estimatedTime: 6
}
