// Données pour l'Unité 2 : "Ech sinn..." (Je suis...)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 2 - Réduit à 4 mots pour 3 min MAX
export const unit2Vocabulary: VocabularyItem[] = [
  {
    id: 'ech',
    luxembourgish: 'Ech',
    french: 'Je',
    pronunciation: 'EKH',
    usage: 'Pronom personnel première personne'
  },
  {
    id: 'sinn',
    luxembourgish: 'sinn',
    french: 'suis',
    pronunciation: 'SIN',
    usage: 'Verbe être à la première personne'
  },
  {
    id: 'vun',
    luxembourgish: 'vun',
    french: 'de/du',
    pronunciation: 'FUN',
    usage: 'Préposition pour indiquer l\'origine'
  },
  {
    id: 'wunnen',
    luxembourgish: 'wunnen',
    french: 'habiter',
    pronunciation: 'VUN-nen',
    usage: 'Verbe pour dire où on habite'
  }
]

// Générateur d'exercices optimisé pour 3 minutes
export const generateUnit2Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Pour respecter 3 min: seulement 2 types d'exercices par mot (au lieu de 5)
  unit2Vocabulary.forEach((vocab) => {

    // 1. Reconnaissance Audio - plus rapide
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomDistractor(vocab.french),
        getRandomDistractor(vocab.french)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.french
    })

    // 2. Traduction Simple - essentiel pour progression
    exercises.push({
      id: `translation_${vocab.id}`,
      type: 'translation',
      vocabularyItem: vocab,
      question: `Comment dit-on "${vocab.french}" en luxembourgeois ?`,
      options: [
        vocab.luxembourgish,
        getRandomLuxDistractor(vocab.luxembourgish),
        getRandomLuxDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Ajouter 2 exercices de structure grammaticale
  exercises.push({
    id: 'grammar_presentation',
    type: 'dialogue_completion',
    vocabularyItem: unit2Vocabulary[0], // Ech
    question: 'Marie se présente: "_____ sinn Marie."',
    options: ['Ech', 'Du', 'Hatt'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech',
    context: 'Structure: Ech sinn [nom] = Je suis [nom]'
  })

  exercises.push({
    id: 'grammar_origin',
    type: 'dialogue_completion',
    vocabularyItem: unit2Vocabulary[2], // vun
    question: 'Paul dit d\'où il vient: "Ech sinn _____ Lëtzebuerg."',
    options: ['vun', 'zu', 'mat'].sort(() => Math.random() - 0.5),
    correctAnswer: 'vun',
    context: 'Structure: Ech sinn vun [lieu] = Je suis de [lieu]'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires adaptées pour l'Unité 2
function getRandomDistractor(correct: string): string {
  const distractors = ['Tu', 'Il', 'Elle', 'Nous', 'Vous', 'Ils', 'être', 'avoir', 'vivre', 'venir']
  const filtered = distractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxDistractor(correct: string): string {
  const luxDistracters = ['hatt', 'mir', 'dir', 'hunn', 'ginn', 'kommen', 'zu', 'mat']
  const filtered = luxDistracters.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 2 complète - OPTIMISÉE 3 MIN
export const learningUnit2: LearningUnit = {
  id: 'unit_2',
  title: 'Ech sinn... (Je suis...)',
  description: 'Apprenez à vous présenter et dire d\'où vous venez',
  level: 'A1',
  vocabulary: unit2Vocabulary,
  exercises: generateUnit2Exercises(),
  targetScore: 75, // Réduit pour encourager la progression rapide
  estimatedTime: 3 // 3 minutes MAX
}