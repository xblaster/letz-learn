// Données pour l'Unité 1 : "Premières rencontres"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 1 - Réduit à 4 mots essentiels pour 3 min MAX
export const unit1Vocabulary: VocabularyItem[] = [
  {
    id: 'moien',
    luxembourgish: 'Moien',
    french: 'Bonjour',
    pronunciation: 'MOY-en',
    usage: 'Salutation universelle utilisée toute la journée'
  },
  {
    id: 'addi',
    luxembourgish: 'Äddi',
    french: 'Au revoir',
    pronunciation: 'ADI',
    usage: 'Congé standard dans toutes les situations'
  },
  {
    id: 'merci',
    luxembourgish: 'Merci',
    french: 'Merci',
    pronunciation: 'MER-see',
    usage: 'Remerciement, identique au français'
  },
  {
    id: 'jo',
    luxembourgish: 'Jo',
    french: 'Oui',
    pronunciation: 'YO',
    usage: 'Accord ou confirmation positive'
  }
]

// Générateur d'exercices optimisé pour 3 minutes MAX
export const generateUnit1Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Pour respecter 3 min: seulement 2 types d'exercices par mot (au lieu de 5)
  unit1Vocabulary.forEach((vocab) => {

    // 1. Reconnaissance Audio - apprentissage du son
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomDistractor(vocab.french, 'greeting'),
        getRandomDistractor(vocab.french, 'other')
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.french
    })

    // 2. Traduction Simple - consolidation essentielle
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

  // Ajouter 2 exercices de dialogue pratique pour les salutations
  exercises.push({
    id: 'dialogue_greeting',
    type: 'dialogue_completion',
    vocabularyItem: unit1Vocabulary[0], // Moien
    question: 'Vous rencontrez votre voisin le matin: "_____ !"',
    options: ['Moien', 'Äddi', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien',
    context: 'Salutation du matin'
  })

  exercises.push({
    id: 'dialogue_goodbye',
    type: 'dialogue_completion',
    vocabularyItem: unit1Vocabulary[1], // Äddi
    question: 'Vous quittez le bureau: "_____ !"',
    options: ['Äddi', 'Moien', 'Jo'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Äddi',
    context: 'Congé en partant'
  })

  // Mélanger les exercices pour variété
  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires pour générer les exercices

function getRandomDistractor(correct: string, category: 'greeting' | 'other'): string {
  const greetingDistracters = ['Bonsoir', 'Salut', 'Bonne nuit', 'À bientôt']
  const otherDistracters = ['Peut-être', 'Toujours', 'Jamais', 'Beaucoup']

  const pool = category === 'greeting' ? greetingDistracters : otherDistracters
  const filtered = pool.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxDistractor(correct: string): string {
  const luxDistracters = ['Gudden', 'Wuel', 'Éief', 'Elo', 'Ganz', 'Ville']
  const filtered = luxDistracters.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}


// Définition de l'Unité 1 complète - OPTIMISÉE 3 MIN
export const learningUnit1: LearningUnit = {
  id: 'unit_1',
  title: 'Premières rencontres',
  description: 'Apprenez les salutations essentielles en luxembourgeois',
  level: 'A1',
  vocabulary: unit1Vocabulary,
  exercises: generateUnit1Exercises(),
  targetScore: 75, // Réduit pour encourager la progression
  estimatedTime: 3 // 3 minutes MAX
}