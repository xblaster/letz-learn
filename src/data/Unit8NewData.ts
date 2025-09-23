// Données pour l'Unité 8 : "Actions quotidiennes"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 8 - Verbes et routine
export const unit8NewVocabulary: VocabularyItem[] = [
  {
    id: 'moies',
    luxembourgish: 'moies',
    french: 'le matin',
    pronunciation: 'MOY-es',
    usage: 'Période du matin, avant midi'
  },
  {
    id: 'owes',
    luxembourgish: 'owes',
    french: 'le soir',
    pronunciation: 'AW-es',
    usage: 'Période du soir, après le travail'
  },
  {
    id: 'schlofen',
    luxembourgish: 'schlofen',
    french: 'dormir',
    pronunciation: 'SHLAW-fen',
    usage: 'Action de dormir, se reposer'
  },
  {
    id: 'opwächen',
    luxembourgish: 'opwächen',
    french: 'se réveiller',
    pronunciation: 'OP-vay-khen',
    usage: 'Action de se réveiller le matin'
  }
]

// Générateur d'exercices pour l'Unité 8
export const generateUnit8NewExercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit8NewVocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomRoutineDistractor(vocab.french),
        getRandomRoutineDistractor(vocab.french)
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
        getRandomLuxRoutineDistractor(vocab.luxembourgish),
        getRandomLuxRoutineDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Exercices sur la routine quotidienne
  exercises.push({
    id: 'dialogue_morning_routine',
    type: 'dialogue_completion',
    vocabularyItem: unit8NewVocabulary[0], // moies
    question: 'Routine matinale: "______ iessen ech Frühstück."',
    options: ['Moies', 'Owes', 'Schlofen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moies',
    context: 'Décrire sa routine du matin'
  })

  exercises.push({
    id: 'dialogue_wake_up',
    type: 'dialogue_completion',
    vocabularyItem: unit8NewVocabulary[3], // opwächen
    question: 'Se réveiller: "Ech ____ ëm 7 Auer."',
    options: ['wächen op', 'schlofen', 'iessen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'wächen op',
    context: 'Dire à quelle heure on se réveille'
  })

  exercises.push({
    id: 'dialogue_bedtime',
    type: 'image_association',
    vocabularyItem: unit8NewVocabulary[2], // schlofen
    question: 'Aller se coucher: "Ech ginn elo ____."',
    options: ['schlofen', 'opwächen', 'moies'].sort(() => Math.random() - 0.5),
    correctAnswer: 'schlofen',
    context: 'Dire qu\'on va dormir'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomRoutineDistractor(correct: string): string {
  const routineDistractors = ['midi', 'nuit', 'travailler', 'manger', 'boire', 'marcher']
  const filtered = routineDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxRoutineDistractor(correct: string): string {
  const luxRoutineDistractors = ['mëttes', 'nuecht', 'schaffen', 'iessen', 'drénken', 'goen']
  const filtered = luxRoutineDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 8 complète
export const learningUnit8New: LearningUnit = {
  id: 'unit_8_new',
  title: 'Actions quotidiennes',
  description: 'Apprenez à parler de votre routine quotidienne',
  level: 'A1',
  vocabulary: unit8NewVocabulary,
  exercises: generateUnit8NewExercises(),
  targetScore: 75,
  estimatedTime: 4
}