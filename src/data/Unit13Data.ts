// Unit 13: Météo - Stratégie Duolingo A1+ climat Luxembourg
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 13 - Météo Luxembourg authentique
export const unit13Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - concepts météo universels
  {
    id: 'sonn',
    luxembourgish: 'Sonn',
    french: 'Soleil',
    pronunciation: 'SON',
    usage: 'Temps ensoleillé, concept universel'
  },
  {
    id: 'reen',
    luxembourgish: 'Reen',
    french: 'Pluie',
    pronunciation: 'RAIN',
    usage: 'Précipitations, très fréquent au Luxembourg'
  },
  {
    id: 'waarm',
    luxembourgish: 'waarm',
    french: 'chaud',
    pronunciation: 'VARM',
    usage: 'Température élevée'
  },

  // TIER 2: Cultural hooks - climat Luxembourg spécifique
  {
    id: 'kal',
    luxembourgish: 'kal',
    french: 'froid',
    pronunciation: 'KAL',
    usage: 'Température basse, hiver luxembourgeois'
  },
  {
    id: 'wanter',
    luxembourgish: 'Wanter',
    french: 'Hiver',
    pronunciation: 'VAN-ter',
    usage: 'Saison froide Luxembourg (décembre-février)'
  },
  {
    id: 'summer',
    luxembourgish: 'Summer',
    french: 'Été',
    pronunciation: 'SUM-mer',
    usage: 'Saison chaude Luxembourg (juin-août)'
  },

  // TIER 3: Expressions météo pratiques
  {
    id: 'wéi_ass_d_wieder',
    luxembourgish: 'Wéi ass d\'Wieder?',
    french: 'Quel temps fait-il ?',
    pronunciation: 'VAY ass d\'VEE-der',
    usage: 'Question météo standard'
  },
  {
    id: 'et_regnt',
    luxembourgish: 'Et regnt',
    french: 'Il pleut',
    pronunciation: 'et REKNT',
    usage: 'Constatation pluie actuelle'
  },
  {
    id: 'schéin_wieder',
    luxembourgish: 'Schéin Wieder',
    french: 'Beau temps',
    pronunciation: 'SHAYN VEE-der',
    usage: 'Appréciation temps agréable'
  }
]

// Générateur d'exercices - Météo avec conversation naturelle
export const generateUnit13Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Quick wins météo universelle
  exercises.push({
    id: 'quick_win_sun',
    type: 'audio_recognition',
    vocabularyItem: unit13Vocabulary[0],
    question: 'Vous entendez parler du temps. Il fait beau, il y a du :',
    options: ['Sonn', 'Reen', 'Kal'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Sonn',
    context: 'Quick win: concept météo universel'
  })

  // Cultural hook - pluie fréquente Luxembourg
  exercises.push({
    id: 'cultural_luxembourg_rain',
    type: 'dialogue_completion',
    vocabularyItem: unit13Vocabulary[1],
    question: 'Météo typique Luxembourg (200+ jours/an). Très fréquent :',
    options: ['Reen', 'Sonn', 'Summer'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Reen',
    context: 'Cultural hook: climat pluvieux Luxembourg'
  })

  // Spaced repetition - question météo
  exercises.push({
    id: 'spaced_weather_question',
    type: 'sentence_construction',
    vocabularyItem: unit13Vocabulary[6],
    question: 'Assemblez la question standard sur le temps',
    wordBank: ['Wéi', 'ass', 'd\'Wieder', '?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi ass d\'Wieder?',
    expectedSentence: 'Wéi ass d\'Wieder?',
    hint: 'Comment + est + le temps + ?',
    context: 'Spaced repetition: questions pratiques'
  })

  // Context variation - saisons Luxembourg
  exercises.push({
    id: 'context_luxembourg_winter',
    type: 'dialogue_completion',
    vocabularyItem: unit13Vocabulary[4],
    question: 'Décembre à Luxembourg. Température typique :',
    options: ['Kal', 'Waarm', 'Schéin'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Kal',
    context: 'Context variation: hiver luxembourgeois'
  })

  // Production orale - conversation météo
  exercises.push({
    id: 'speech_weather_conversation',
    type: 'speech_recognition',
    vocabularyItem: unit13Vocabulary[6],
    question: 'Demandez le temps qu\'il fait',
    correctAnswer: 'Wéi ass d\'Wieder?',
    expectedSentence: 'Wéi ass d\'Wieder?',
    hint: 'VAY ass d\'VEE-der?',
    context: 'Production orale: conversation sociale'
  })

  return exercises
}

export const learningUnit13: LearningUnit = {
  id: 'unit_13',
  title: 'Météo',
  description: 'Discutez du temps et des saisons au Luxembourg',
  level: 'A1+',
  vocabulary: unit13Vocabulary,
  exercises: generateUnit13Exercises(),
  targetScore: 85,
  estimatedTime: 6
}