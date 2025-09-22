// Données pour l'Unité 6 : "Les nombres"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 6 - Nombres de base
export const unit6Vocabulary: VocabularyItem[] = [
  {
    id: 'een',
    luxembourgish: 'een',
    french: 'un',
    pronunciation: 'EEN',
    usage: 'Nombre 1, article indéfini masculin'
  },
  {
    id: 'zwou',
    luxembourgish: 'zwou',
    french: 'deux',
    pronunciation: 'ZVOO',
    usage: 'Nombre 2'
  },
  {
    id: 'dräi',
    luxembourgish: 'dräi',
    french: 'trois',
    pronunciation: 'DRAY',
    usage: 'Nombre 3'
  },
  {
    id: 'véier',
    luxembourgish: 'véier',
    french: 'quatre',
    pronunciation: 'VAY-er',
    usage: 'Nombre 4'
  }
]

// Générateur d'exercices pour l'Unité 6
export const generateUnit6Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit6Vocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomNumberDistractor(vocab.french),
        getRandomNumberDistractor(vocab.french)
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
        getRandomLuxNumberDistractor(vocab.luxembourgish),
        getRandomLuxNumberDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Exercices pratiques avec les nombres
  exercises.push({
    id: 'dialogue_count_coffee',
    type: 'dialogue_completion',
    vocabularyItem: unit6Vocabulary[1], // zwou
    question: 'Au café: "_____ Kaffi, wann ech gelift."',
    options: ['Zwou', 'Een', 'Dräi'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Zwou',
    context: 'Commander deux cafés'
  })

  exercises.push({
    id: 'dialogue_count_people',
    type: 'dialogue_completion',
    vocabularyItem: unit6Vocabulary[2], // dräi
    question: 'Réservation restaurant: "Eng Tafel fir _____ Leit."',
    options: ['dräi', 'zwou', 'véier'].sort(() => Math.random() - 0.5),
    correctAnswer: 'dräi',
    context: 'Réserver une table pour trois personnes'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomNumberDistractor(correct: string): string {
  const numbers = ['cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'zéro']
  const filtered = numbers.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxNumberDistractor(correct: string): string {
  const luxNumbers = ['fënnef', 'sechs', 'siwen', 'aacht', 'néng', 'zéng', 'null']
  const filtered = luxNumbers.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 6 complète
export const learningUnit6: LearningUnit = {
  id: 'unit_6',
  title: 'Les nombres',
  description: 'Apprenez les nombres de base en luxembourgeois',
  level: 'A1',
  vocabulary: unit6Vocabulary,
  exercises: generateUnit6Exercises(),
  targetScore: 75,
  estimatedTime: 3
}