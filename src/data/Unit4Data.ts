// Données pour l'Unité 4 : "Au restaurant"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 4 - Restaurant et nourriture
export const unit4Vocabulary: VocabularyItem[] = [
  {
    id: 'iessen',
    luxembourgish: 'iessen',
    french: 'manger',
    pronunciation: 'EE-sen',
    usage: 'Verbe pour exprimer l\'action de manger'
  },
  {
    id: 'drénken',
    luxembourgish: 'drénken',
    french: 'boire',
    pronunciation: 'DREN-ken',
    usage: 'Verbe pour exprimer l\'action de boire'
  },
  {
    id: 'waasser',
    luxembourgish: 'Waasser',
    french: 'eau',
    pronunciation: 'VAH-ser',
    usage: 'Boisson de base, essentielle'
  },
  {
    id: 'kaffi',
    luxembourgish: 'Kaffi',
    french: 'café',
    pronunciation: 'KAH-fee',
    usage: 'Boisson chaude populaire'
  }
]

// Générateur d'exercices pour l'Unité 4
export const generateUnit4Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit4Vocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomDistractor(vocab.french, 'food'),
        getRandomDistractor(vocab.french, 'other')
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.french
    })

    // 2. Traduction
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

  // Exercices de dialogue spécifiques au restaurant
  exercises.push({
    id: 'dialogue_restaurant_order',
    type: 'dialogue_completion',
    vocabularyItem: unit4Vocabulary[0], // iessen
    question: 'Au restaurant: "Wat wëllt Dir _____ ?"',
    options: ['iessen', 'drénken', 'soen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'iessen',
    context: 'Question du serveur pour la commande'
  })

  exercises.push({
    id: 'dialogue_restaurant_drink',
    type: 'dialogue_completion',
    vocabularyItem: unit4Vocabulary[1], // drénken
    question: 'Vous commandez: "Ech wëll _____ Waasser."',
    options: ['drénken', 'iessen', 'hunn'].sort(() => Math.random() - 0.5),
    correctAnswer: 'drénken',
    context: 'Commander une boisson'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomDistractor(correct: string, category: 'food' | 'other'): string {
  const foodDistractors = ['dormir', 'marcher', 'parler', 'écouter']
  const otherDistractors = ['livre', 'voiture', 'maison', 'téléphone']

  const pool = category === 'food' ? foodDistractors : otherDistractors
  const filtered = pool.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxDistractor(correct: string): string {
  const luxDistractors = ['goen', 'kommen', 'stoen', 'leien', 'schwätzen', 'lauschteren']
  const filtered = luxDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 4 complète
export const learningUnit4: LearningUnit = {
  id: 'unit_4',
  title: 'Au restaurant',
  description: 'Apprenez à commander et parler de nourriture et boissons',
  level: 'A1',
  vocabulary: unit4Vocabulary,
  exercises: generateUnit4Exercises(),
  targetScore: 75,
  estimatedTime: 4
}