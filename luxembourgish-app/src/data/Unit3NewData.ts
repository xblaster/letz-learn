// Données pour l'Unité 3 : "La famille proche"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 3 - Famille et possessifs
export const unit3NewVocabulary: VocabularyItem[] = [
  {
    id: 'famill',
    luxembourgish: 'Famill',
    french: 'famille',
    pronunciation: 'fa-MILL',
    usage: 'Le groupe familial, la parenté'
  },
  {
    id: 'papp',
    luxembourgish: 'Papp',
    french: 'papa',
    pronunciation: 'PAP',
    usage: 'Père, terme affectueux'
  },
  {
    id: 'mamm',
    luxembourgish: 'Mamm',
    french: 'maman',
    pronunciation: 'MAM',
    usage: 'Mère, terme affectueux'
  },
  {
    id: 'kand',
    luxembourgish: 'Kand',
    french: 'enfant',
    pronunciation: 'KAND',
    usage: 'Enfant, descendant'
  }
]

// Générateur d'exercices pour l'Unité 3
export const generateUnit3NewExercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit3NewVocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomFamilyDistractor(vocab.french),
        getRandomFamilyDistractor(vocab.french)
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
        getRandomLuxFamilyDistractor(vocab.luxembourgish),
        getRandomLuxFamilyDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Exercices de dialogue spécifiques à la famille
  exercises.push({
    id: 'dialogue_family_presentation',
    type: 'dialogue_completion',
    vocabularyItem: unit3NewVocabulary[0], // Famill
    question: 'Vous présentez votre famille: "Dat ass meng ____."',
    options: ['Famill', 'Papp', 'Mamm'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Famill',
    context: 'Présenter sa famille'
  })

  exercises.push({
    id: 'dialogue_parents',
    type: 'dialogue_completion',
    vocabularyItem: unit3NewVocabulary[1], // Papp
    question: 'Parler de ses parents: "Mäin ____ schaffe zu Lëtzebuerg."',
    options: ['Papp', 'Mamm', 'Kand'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Papp',
    context: 'Parler de son père'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomFamilyDistractor(correct: string): string {
  const familyDistractors = ['ami', 'voisin', 'collègue', 'professeur', 'docteur']
  const filtered = familyDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxFamilyDistractor(correct: string): string {
  const luxFamilyDistractors = ['Frënd', 'Noper', 'Kolleeg', 'Léierer', 'Dokter']
  const filtered = luxFamilyDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 3 complète
export const learningUnit3New: LearningUnit = {
  id: 'unit_3_new',
  title: 'La famille proche',
  description: 'Apprenez à parler de votre famille en luxembourgeois',
  level: 'A1',
  vocabulary: unit3NewVocabulary,
  exercises: generateUnit3NewExercises(),
  targetScore: 75,
  estimatedTime: 4
}