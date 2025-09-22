// Données pour l'Unité 5 : "Les directions"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 5 - Directions et localisation
export const unit5Vocabulary: VocabularyItem[] = [
  {
    id: 'wou',
    luxembourgish: 'wou',
    french: 'où',
    pronunciation: 'VOO',
    usage: 'Mot interrogatif pour demander un lieu'
  },
  {
    id: 'riets',
    luxembourgish: 'riets',
    french: 'droite',
    pronunciation: 'REETS',
    usage: 'Direction vers la droite'
  },
  {
    id: 'lénks',
    luxembourgish: 'lénks',
    french: 'gauche',
    pronunciation: 'LENKS',
    usage: 'Direction vers la gauche'
  },
  {
    id: 'richtung',
    luxembourgish: 'Richtung',
    french: 'direction',
    pronunciation: 'RIKH-tung',
    usage: 'Orientation, sens à suivre'
  }
]

// Générateur d'exercices pour l'Unité 5
export const generateUnit5Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit5Vocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
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

  // Exercices de dialogue pour les directions
  exercises.push({
    id: 'dialogue_ask_direction',
    type: 'dialogue_completion',
    vocabularyItem: unit5Vocabulary[0], // wou
    question: 'Vous demandez votre chemin: "_____ ass d\'Gare?"',
    options: ['Wou', 'Wéi', 'Wat'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wou',
    context: 'Demander où se trouve la gare'
  })

  exercises.push({
    id: 'dialogue_give_direction',
    type: 'dialogue_completion',
    vocabularyItem: unit5Vocabulary[1], // riets
    question: 'Indiquer la direction: "Gitt no _____ ."',
    options: ['riets', 'lénks', 'uewen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'riets',
    context: 'Dire d\'aller à droite'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomDistractor(correct: string): string {
  const distractors = ['devant', 'derrière', 'dessus', 'dessous', 'près', 'loin', 'ici', 'là-bas']
  const filtered = distractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxDistractor(correct: string): string {
  const luxDistractors = ['uewen', 'ënnen', 'virun', 'hannen', 'do', 'hei', 'fort']
  const filtered = luxDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 5 complète
export const learningUnit5: LearningUnit = {
  id: 'unit_5',
  title: 'Les directions',
  description: 'Apprenez à demander et donner des directions',
  level: 'A1',
  vocabulary: unit5Vocabulary,
  exercises: generateUnit5Exercises(),
  targetScore: 75,
  estimatedTime: 4
}