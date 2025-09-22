// Données pour l'Unité 6 : "Le temps et les saisons"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 6 - Temps et saisons
export const unit6NewVocabulary: VocabularyItem[] = [
  {
    id: 'dag',
    luxembourgish: 'Dag',
    french: 'jour',
    pronunciation: 'DAHG',
    usage: 'Unité de temps de 24 heures'
  },
  {
    id: 'woch',
    luxembourgish: 'Woch',
    french: 'semaine',
    pronunciation: 'VOKH',
    usage: 'Période de 7 jours'
  },
  {
    id: 'wieder',
    luxembourgish: 'Wieder',
    french: 'temps (météo)',
    pronunciation: 'VEE-der',
    usage: 'Conditions météorologiques'
  },
  {
    id: 'sonneschein',
    luxembourgish: 'Sonneschäin',
    french: 'soleil',
    pronunciation: 'SON-ne-shayn',
    usage: 'Lumière du soleil, beau temps'
  }
]

// Générateur d'exercices pour l'Unité 6
export const generateUnit6NewExercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit6NewVocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomTimeDistractor(vocab.french),
        getRandomTimeDistractor(vocab.french)
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
        getRandomLuxTimeDistractor(vocab.luxembourgish),
        getRandomLuxTimeDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Exercices sur le temps et les saisons
  exercises.push({
    id: 'dialogue_daily_routine',
    type: 'dialogue_completion',
    vocabularyItem: unit6NewVocabulary[0], // Dag
    question: 'Parler de sa routine: "All ____ ginn ech schaffen."',
    options: ['Dag', 'Woch', 'Wieder'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Dag',
    context: 'Exprimer une routine quotidienne'
  })

  exercises.push({
    id: 'dialogue_weather_talk',
    type: 'dialogue_completion',
    vocabularyItem: unit6NewVocabulary[2], // Wieder
    question: 'Parler de la météo: "Wat fir ____ ass et haut?"',
    options: ['Wieder', 'Dag', 'Woch'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wieder',
    context: 'Demander des nouvelles du temps'
  })

  exercises.push({
    id: 'dialogue_nice_weather',
    type: 'image_association',
    vocabularyItem: unit6NewVocabulary[3], // Sonneschäin
    question: 'Beau temps: "Et ass schéinen ____ haut."',
    options: ['Sonneschäin', 'Wieder', 'Dag'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Sonneschäin',
    context: 'Commenter le beau temps'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomTimeDistractor(correct: string): string {
  const timeDistractors = ['mois', 'année', 'heure', 'minute', 'pluie', 'neige', 'vent']
  const filtered = timeDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxTimeDistractor(correct: string): string {
  const luxTimeDistractors = ['Mount', 'Joer', 'Auer', 'Minutt', 'Reen', 'Schnéi', 'Wand']
  const filtered = luxTimeDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 6 complète
export const learningUnit6New: LearningUnit = {
  id: 'unit_6_new',
  title: 'Le temps et les saisons',
  description: 'Apprenez à parler du temps qui passe et de la météo',
  level: 'A1',
  vocabulary: unit6NewVocabulary,
  exercises: generateUnit6NewExercises(),
  targetScore: 75,
  estimatedTime: 4
}