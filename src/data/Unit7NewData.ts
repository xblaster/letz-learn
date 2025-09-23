// Données pour l'Unité 7 : "Les nombres et l'heure"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 7 - Nombres et temps
export const unit7NewVocabulary: VocabularyItem[] = [
  {
    id: 'auer',
    luxembourgish: 'Auer',
    french: 'heure',
    pronunciation: 'AW-er',
    usage: 'Unité de temps, moment de la journée'
  },
  {
    id: 'minutt',
    luxembourgish: 'Minutt',
    french: 'minute',
    pronunciation: 'mi-NUT',
    usage: 'Soixante secondes, subdivision de l\'heure'
  },
  {
    id: 'euro',
    luxembourgish: 'Euro',
    french: 'euro',
    pronunciation: 'EU-ro',
    usage: 'Monnaie européenne, utilisée au Luxembourg'
  },
  {
    id: 'weivill',
    luxembourgish: 'wéivill',
    french: 'combien',
    pronunciation: 'VAY-vill',
    usage: 'Mot interrogatif pour les quantités'
  }
]

// Générateur d'exercices pour l'Unité 7
export const generateUnit7NewExercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit7NewVocabulary.forEach((vocab) => {
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

  // Exercices pratiques avec l'heure et les prix
  exercises.push({
    id: 'dialogue_time_question',
    type: 'dialogue_completion',
    vocabularyItem: unit7NewVocabulary[0], // Auer
    question: 'Demander l\'heure: "____ ass et?"',
    options: ['Wéi vill Auer', 'Wéivill Euro', 'Wéi vill Minutt'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi vill Auer',
    context: 'Demander l\'heure'
  })

  exercises.push({
    id: 'dialogue_price_question',
    type: 'dialogue_completion',
    vocabularyItem: unit7NewVocabulary[3], // wéivill
    question: 'Demander un prix: "____ kascht dat?"',
    options: ['Wéivill', 'Auer', 'Minutt'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéivill',
    context: 'Demander le prix de quelque chose'
  })

  exercises.push({
    id: 'dialogue_payment',
    type: 'image_association',
    vocabularyItem: unit7NewVocabulary[2], // Euro
    question: 'Payer: "Dat kascht fënnef ____."',
    options: ['Euro', 'Auer', 'Minutt'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Euro',
    context: 'Payer en euros'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomNumberDistractor(correct: string): string {
  const numberDistractors = ['seconde', 'jour', 'mois', 'dollar', 'franc', 'pourquoi', 'où']
  const filtered = numberDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxNumberDistractor(correct: string): string {
  const luxNumberDistractors = ['Sekonn', 'Dag', 'Mount', 'Dollar', 'Franc', 'firwat', 'wou']
  const filtered = luxNumberDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 7 complète
export const learningUnit7New: LearningUnit = {
  id: 'unit_7_new',
  title: 'Les nombres et l\'heure',
  description: 'Apprenez à dire l\'heure et à utiliser les prix',
  level: 'A1',
  vocabulary: unit7NewVocabulary,
  exercises: generateUnit7NewExercises(),
  targetScore: 75,
  estimatedTime: 4
}