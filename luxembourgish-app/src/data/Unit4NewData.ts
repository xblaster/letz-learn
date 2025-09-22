// Données pour l'Unité 4 : "Les objets du quotidien"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 4 - Objets personnels essentiels
export const unit4NewVocabulary: VocabularyItem[] = [
  {
    id: 'telefon',
    luxembourgish: 'Telefon',
    french: 'téléphone',
    pronunciation: 'te-le-FON',
    usage: 'Appareil de communication mobile ou fixe'
  },
  {
    id: 'schluessel',
    luxembourgish: 'Schlëssel',
    french: 'clé',
    pronunciation: 'SHLEU-sel',
    usage: 'Objet pour ouvrir portes et serrures'
  },
  {
    id: 'portmonni',
    luxembourgish: 'Portmonni',
    french: 'portefeuille',
    pronunciation: 'port-mo-NEE',
    usage: 'Porte-monnaie pour argent et cartes'
  },
  {
    id: 'auto',
    luxembourgish: 'Auto',
    french: 'voiture',
    pronunciation: 'AW-to',
    usage: 'Véhicule automobile personnel'
  }
]

// Générateur d'exercices pour l'Unité 4
export const generateUnit4NewExercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit4NewVocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomObjectDistractor(vocab.french),
        getRandomObjectDistractor(vocab.french)
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
        getRandomLuxObjectDistractor(vocab.luxembourgish),
        getRandomLuxObjectDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Exercices pratiques avec articles
  exercises.push({
    id: 'dialogue_lost_phone',
    type: 'dialogue_completion',
    vocabularyItem: unit4NewVocabulary[0], // Telefon
    question: 'Vous cherchez votre téléphone: "Wou ass mäin ____?"',
    options: ['Telefon', 'Schlëssel', 'Auto'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Telefon',
    context: 'Chercher un objet perdu'
  })

  exercises.push({
    id: 'dialogue_articles',
    type: 'dialogue_completion',
    vocabularyItem: unit4NewVocabulary[1], // Schlëssel
    question: 'Avec les articles: "Ech sichen d\' ____."',
    options: ['Schlëssel', 'Telefon', 'Portmonni'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Schlëssel',
    context: 'Utiliser les articles définis'
  })

  exercises.push({
    id: 'dialogue_possession',
    type: 'image_association',
    vocabularyItem: unit4NewVocabulary[2], // Portmonni
    question: 'Montrer ce qui vous appartient: "Dat ass mäin ____."',
    options: ['Portmonni', 'Auto', 'Telefon'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Portmonni',
    context: 'Exprimer la possession'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomObjectDistractor(correct: string): string {
  const objectDistractors = ['livre', 'stylo', 'montre', 'lunettes', 'sac', 'ordinateur']
  const filtered = objectDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxObjectDistractor(correct: string): string {
  const luxObjectDistractors = ['Buch', 'Pen', 'Auer', 'Brëll', 'Sak', 'Computer']
  const filtered = luxObjectDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 4 complète
export const learningUnit4New: LearningUnit = {
  id: 'unit_4_new',
  title: 'Les objets du quotidien',
  description: 'Apprenez le vocabulaire des objets personnels essentiels',
  level: 'A1',
  vocabulary: unit4NewVocabulary,
  exercises: generateUnit4NewExercises(),
  targetScore: 75,
  estimatedTime: 4
}