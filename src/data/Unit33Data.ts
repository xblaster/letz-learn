// Unité 33 : Émotions avancées (B1) - SECTION 5: Expression personnelle
// Progression CEFR: B1 - Nuances émotionnelles et expressions subjectives

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit33Vocabulary: VocabularyItem[] = [
  {
    id: 'frustréiert',
    luxembourgish: 'frustréiert',
    french: 'frustré',
    pronunciation: 'frus-TRAY-ert',
    usage: 'Sentiment de contrariété face à un obstacle'
  },
  {
    id: 'begeeschtert',
    luxembourgish: 'begeeschtert',
    french: 'enthousiaste',
    pronunciation: 'be-GAY-shert',
    usage: 'Très motivé et excité par quelque chose'
  },
  {
    id: 'enttäuscht',
    luxembourgish: 'enttäuscht',
    french: 'déçu',
    pronunciation: 'ent-TOISHT',
    usage: 'Sentiment de déception face à un résultat'
  },
  {
    id: 'iwwerrascht',
    luxembourgish: 'iwwerrascht',
    french: 'surpris',
    pronunciation: 'iw-wer-RASHT',
    usage: 'Étonné par un événement inattendu'
  },
  {
    id: 'zoufridde',
    luxembourgish: 'zoufridde',
    french: 'satisfait',
    pronunciation: 'tsoo-FRID-de',
    usage: 'Content du résultat obtenu'
  },
  {
    id: 'besuergt',
    luxembourgish: 'besuergt',
    french: 'inquiet',
    pronunciation: 'be-SOORGT',
    usage: 'Préoccupé par une situation'
  },
  {
    id: 'erliichtert',
    luxembourgish: 'erliichtert',
    french: 'soulagé',
    pronunciation: 'er-LEEKH-tert',
    usage: 'Libéré d\'une inquiétude'
  },
  {
    id: 'emotional',
    luxembourgish: 'emotional',
    french: 'émotionnel',
    pronunciation: 'eh-mo-tsi-o-NAL',
    usage: 'Relatif aux émotions'
  }
]

export const generateUnit33Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // B1: Expression d'émotions complexes avec justification
  exercises.push({
    id: 'emotional_expression_complex',
    type: 'creative_expression',
    vocabularyItem: unit33Vocabulary[0],
    question: 'Exprimez votre frustration et expliquez pourquoi (2-3 phrases)',
    wordBank: ['Ech', 'sinn', 'frustréiert', 'well', 'et', 'dauert', 'ze', 'laang', 'bis'],
    correctAnswer: 'Ech sinn frustréiert well et dauert ze laang bis d\'Resultater kommen',
    expectedSentence: 'Ech sinn frustréiert well et dauert ze laang',
    hint: 'Utilisez "well" pour justifier votre émotion',
    context: 'Expression émotionnelle avec argumentation B1'
  })

  // B1: Dialogue émotionnel nuancé
  exercises.push({
    id: 'dialogue_emotional_support',
    type: 'dialogue_completion',
    vocabularyItem: unit33Vocabulary[5],
    question: 'Votre ami semble inquiet. Vous lui demandez: "Firwat bass du esou ___?"',
    options: ['besuergt', 'frou', 'méid'].sort(() => Math.random() - 0.5),
    correctAnswer: 'besuergt',
    context: 'Dialogue de soutien émotionnel authentique'
  })

  // B1: Changement d'émotion dans le temps
  exercises.push({
    id: 'emotional_transition_construction',
    type: 'sentence_construction',
    vocabularyItem: unit33Vocabulary[6],
    question: 'Décrivez un changement d\'émotion: d\'inquiet à soulagé',
    wordBank: ['Fréier', 'war', 'ech', 'besuergt', 'awer', 'elo', 'sinn', 'ech', 'erliichtert'],
    correctAnswer: 'Fréier war ech besuergt awer elo sinn ech erliichtert',
    expectedSentence: 'Fréier war ech besuergt awer elo sinn ech erliichtert',
    hint: 'Utilisez "awer" pour marquer le contraste temporel',
    context: 'Expression de l\'évolution émotionnelle'
  })

  // B1: Opinion sur la gestion émotionnelle
  exercises.push({
    id: 'opinion_emotional_management',
    type: 'opinion_expression',
    vocabularyItem: unit33Vocabulary[7],
    question: 'Comment gérez-vous vos émotions difficiles ?',
    options: [
      'Ech schwätzen mat Frënn iwwer meng Gefiller',
      'Ech verstoppen all meng Emotiounen',
      'Emotiounen sinn net wichteg'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech schwätzen mat Frënn iwwer meng Gefiller',
    context: 'Stratégies de gestion émotionnelle matures'
  })

  // B1: Argumentation sur l'importance des émotions
  exercises.push({
    id: 'argumentation_emotions_importance',
    type: 'argumentation_building',
    vocabularyItem: unit33Vocabulary[7],
    question: 'Argumentez pourquoi exprimer ses émotions est important',
    wordBank: ['Emotiounen', 'ze', 'deelen', 'ass', 'wichteg', 'well', 'et', 'hëlleft', 'verstoen'],
    correctAnswer: 'Emotiounen ze deelen ass wichteg well et hëlleft aner ze verstoen',
    expectedSentence: 'Emotiounen ze deelen ass wichteg well et hëlleft',
    hint: 'Connectez l\'expression émotionnelle à la compréhension mutuelle',
    context: 'Argumentation sur l\'intelligence émotionnelle'
  })

  return exercises
}

export const learningUnit33: LearningUnit = {
  id: 'unit_33',
  title: 'Émotions avancées',
  description: 'Frustration, enthousiasme, déception : nuances émotionnelles B1',
  level: 'B1',
  vocabulary: unit33Vocabulary,
  exercises: generateUnit33Exercises(),
  targetScore: 88, // Plus élevé pour B1
  estimatedTime: 10 // Plus de temps pour complexité B1
}