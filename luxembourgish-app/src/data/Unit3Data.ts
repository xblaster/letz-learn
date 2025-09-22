// Données pour l'Unité 3 : "Wéi heescht Dir?" (Comment vous appelez-vous?)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 3 - Réduit à 4 mots pour 3 min MAX
export const unit3Vocabulary: VocabularyItem[] = [
  {
    id: 'wei',
    luxembourgish: 'Wéi',
    french: 'Comment',
    pronunciation: 'VAY',
    usage: 'Mot interrogatif pour poser des questions'
  },
  {
    id: 'heescht',
    luxembourgish: 'heescht',
    french: 'vous appelez',
    pronunciation: 'HAY-sht',
    usage: 'Verbe pour demander le nom (forme polie)'
  },
  {
    id: 'dir',
    luxembourgish: 'Dir',
    french: 'vous',
    pronunciation: 'DEER',
    usage: 'Pronom poli de politesse (vouvoiement)'
  },
  {
    id: 'du',
    luxembourgish: 'du',
    french: 'tu',
    pronunciation: 'DOO',
    usage: 'Pronom familier (tutoiement)'
  }
]

// Générateur d'exercices optimisé pour 3 minutes
export const generateUnit3Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Pour respecter 3 min: seulement 2 types d'exercices par mot
  unit3Vocabulary.forEach((vocab) => {

    // 1. Reconnaissance Audio - apprentissage du son
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

    // 2. Traduction Simple - consolidation
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

  // Ajouter 3 exercices de dialogue pratique (politesse vs familiarité)
  exercises.push({
    id: 'dialogue_formal',
    type: 'dialogue_completion',
    vocabularyItem: unit3Vocabulary[1], // heescht
    question: 'Question polie à un inconnu: "_____ heescht Dir?"',
    options: ['Wéi', 'Wat', 'Wou'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi',
    context: 'Forme polie: Wéi heescht Dir? = Comment vous appelez-vous?'
  })

  exercises.push({
    id: 'dialogue_informal',
    type: 'dialogue_completion',
    vocabularyItem: unit3Vocabulary[3], // du
    question: 'Question familière à un ami: "Wéi heescht ____?"',
    options: ['du', 'Dir', 'hatt'].sort(() => Math.random() - 0.5),
    correctAnswer: 'du',
    context: 'Forme familière: Wéi heescht du? = Comment tu t\'appelles?'
  })

  exercises.push({
    id: 'dialogue_context',
    type: 'image_association',
    vocabularyItem: unit3Vocabulary[0], // Wéi
    question: 'Vous rencontrez votre nouveau voisin. Comment demandez-vous son nom poliment ?',
    options: [
      'Wéi heescht Dir?',
      'Wéi heescht du?',
      'Wat ass Ären Numm?'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi heescht Dir?',
    context: 'Situation: Rencontre formelle avec un adulte inconnu'
  })

  return exercises.sort(() => Math.random() - 0.5) // Mélange aléatoire final
}

// Fonctions utilitaires adaptées pour l'Unité 3
function getRandomDistractor(correct: string): string {
  const distractors = ['Qui', 'Quoi', 'Où', 'Quand', 'Pourquoi', 'nous', 'ils', 'elles', 'appelle', 'dit']
  const filtered = distractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxDistractor(correct: string): string {
  const luxDistracters = ['wat', 'wou', 'wéini', 'firwat', 'hatt', 'mir', 'sinn', 'ginn', 'kommen']
  const filtered = luxDistracters.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 3 complète - OPTIMISÉE 3 MIN
export const learningUnit3: LearningUnit = {
  id: 'unit_3',
  title: 'Wéi heescht Dir? (Comment vous appelez-vous?)',
  description: 'Apprenez à poser des questions et à distinguer le tutoiement du vouvoiement',
  level: 'A1',
  vocabulary: unit3Vocabulary,
  exercises: generateUnit3Exercises(),
  targetScore: 75, // Objectif encourageant pour progression rapide
  estimatedTime: 3 // 3 minutes MAX
}