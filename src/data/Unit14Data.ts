// Unit 14: Loisirs - Stratégie Duolingo A1+ culture Luxembourg
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 14 - Loisirs Luxembourg authentique
export const unit14Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - loisirs universels
  {
    id: 'sport',
    luxembourgish: 'Sport',
    french: 'Sport',
    pronunciation: 'SPORT',
    usage: 'Activité physique, identique au français'
  },
  {
    id: 'musek',
    luxembourgish: 'Musek',
    french: 'Musique',
    pronunciation: 'MU-zek',
    usage: 'Art musical, familier'
  },
  {
    id: 'liewen',
    luxembourgish: 'Liewen',
    french: 'Lecture',
    pronunciation: 'LEE-wen',
    usage: 'Activité de lecture'
  },

  // TIER 2: Cultural hooks - loisirs Luxembourg spécifiques
  {
    id: 'philharmonie',
    luxembourgish: 'Philharmonie',
    french: 'Philharmonie',
    pronunciation: 'fil-har-mo-NEE',
    usage: 'Salle de concert prestigieuse Kirchberg'
  },
  {
    id: 'football',
    luxembourgish: 'Football',
    french: 'Football',
    pronunciation: 'FOOT-ball',
    usage: 'Sport populaire, équipe nationale Luxembourg'
  },
  {
    id: 'kino',
    luxembourgish: 'Kino',
    french: 'Cinéma',
    pronunciation: 'KI-no',
    usage: 'Cinéma, influence allemande'
  },

  // TIER 3: Expressions loisirs pratiques
  {
    id: 'ech_spillen',
    luxembourgish: 'Ech spillen',
    french: 'Je joue',
    pronunciation: 'ekh SHPILL-en',
    usage: 'Action de jouer (sport/musique)'
  },
  {
    id: 'zouluuschteren',
    luxembourgish: 'zouluuschteren',
    french: 'écouter',
    pronunciation: 'tsoo-LOOS-ter-en',
    usage: 'Écouter de la musique'
  },
  {
    id: 'fräi_zäit',
    luxembourgish: 'Fräi Zäit',
    french: 'Temps libre',
    pronunciation: 'FRAY tsayt',
    usage: 'Période de loisirs'
  }
]

// Générateur d'exercices - Loisirs avec culture Luxembourg
export const generateUnit14Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Quick wins loisirs universels
  exercises.push({
    id: 'quick_win_sport',
    type: 'audio_recognition',
    vocabularyItem: unit14Vocabulary[0],
    question: 'Vous entendez parler d\'activité physique. De quoi s\'agit-il ?',
    options: ['Sport', 'Musek', 'Kino'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Sport',
    context: 'Quick win: loisir universel'
  })

  // Cultural hook - Philharmonie Kirchberg
  exercises.push({
    id: 'cultural_philharmonie',
    type: 'dialogue_completion',
    vocabularyItem: unit14Vocabulary[3],
    question: 'Concert classique à Kirchberg. Lieu prestigieux :',
    options: ['Philharmonie', 'Kino', 'Sport'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Philharmonie',
    context: 'Cultural hook: institution culturelle Luxembourg'
  })

  // Spaced repetition - activité loisir
  exercises.push({
    id: 'spaced_play_activity',
    type: 'sentence_construction',
    vocabularyItem: unit14Vocabulary[6],
    question: 'Assemblez votre activité de jeu/sport',
    wordBank: ['Ech', 'spillen', 'Football'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech spillen Football',
    expectedSentence: 'Ech spillen Football',
    hint: 'Je + jouer + sport',
    context: 'Spaced repetition: action loisir'
  })

  // Context variation - temps libre
  exercises.push({
    id: 'context_free_time',
    type: 'dialogue_completion',
    vocabularyItem: unit14Vocabulary[8],
    question: 'Week-end à Luxembourg. Période pour les loisirs :',
    options: ['Fräi Zäit', 'Sport', 'Musek'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Fräi Zäit',
    context: 'Context variation: organisation temps'
  })

  // Production orale - loisir préféré
  exercises.push({
    id: 'speech_hobby_preference',
    type: 'speech_recognition',
    vocabularyItem: unit14Vocabulary[6],
    question: 'Dites que vous jouez au football',
    correctAnswer: 'Ech spillen Football',
    expectedSentence: 'Ech spillen Football',
    hint: 'ekh SHPILL-en FOOT-ball',
    context: 'Production orale: préférence loisir'
  })

  return exercises
}

export const learningUnit14: LearningUnit = {
  id: 'unit_14',
  title: 'Loisirs',
  description: 'Partagez vos activités et découvrez la culture luxembourgeoise',
  level: 'A1+',
  vocabulary: unit14Vocabulary,
  exercises: generateUnit14Exercises(),
  targetScore: 85,
  estimatedTime: 6
}