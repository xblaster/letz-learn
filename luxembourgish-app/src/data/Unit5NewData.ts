// Données pour l'Unité 5 : "Les couleurs et descriptions simples"

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 5 - Couleurs et adjectifs de base
export const unit5NewVocabulary: VocabularyItem[] = [
  {
    id: 'rout',
    luxembourgish: 'rout',
    french: 'rouge',
    pronunciation: 'ROOT',
    usage: 'Couleur rouge, adjectif invariable'
  },
  {
    id: 'giel',
    luxembourgish: 'giel',
    french: 'jaune',
    pronunciation: 'GEEL',
    usage: 'Couleur jaune'
  },
  {
    id: 'blo',
    luxembourgish: 'blo',
    french: 'bleu',
    pronunciation: 'BLAW',
    usage: 'Couleur bleue'
  },
  {
    id: 'grouss',
    luxembourgish: 'grouss',
    french: 'grand',
    pronunciation: 'GROOS',
    usage: 'Adjectif de taille - grand, gros'
  }
]

// Générateur d'exercices pour l'Unité 5
export const generateUnit5NewExercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Exercices de base pour chaque vocabulaire
  unit5NewVocabulary.forEach((vocab) => {
    // 1. Reconnaissance Audio
    exercises.push({
      id: `audio_${vocab.id}`,
      type: 'audio_recognition',
      vocabularyItem: vocab,
      question: `Que signifie ce mot ?`,
      options: [
        vocab.french,
        getRandomColorDistractor(vocab.french),
        getRandomColorDistractor(vocab.french)
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
        getRandomLuxColorDistractor(vocab.luxembourgish),
        getRandomLuxColorDistractor(vocab.luxembourgish)
      ].sort(() => Math.random() - 0.5),
      correctAnswer: vocab.luxembourgish
    })
  })

  // Exercices de description avec couleurs
  exercises.push({
    id: 'dialogue_color_description',
    type: 'dialogue_completion',
    vocabularyItem: unit5NewVocabulary[0], // rout
    question: 'Décrire une voiture: "Meng Auto ass ____."',
    options: ['rout', 'giel', 'blo'].sort(() => Math.random() - 0.5),
    correctAnswer: 'rout',
    context: 'Décrire la couleur d\'un objet'
  })

  exercises.push({
    id: 'dialogue_size_description',
    type: 'dialogue_completion',
    vocabularyItem: unit5NewVocabulary[3], // grouss
    question: 'Décrire une maison: "Dëst Haus ass ganz ____."',
    options: ['grouss', 'rout', 'giel'].sort(() => Math.random() - 0.5),
    correctAnswer: 'grouss',
    context: 'Décrire la taille'
  })

  exercises.push({
    id: 'dialogue_color_preference',
    type: 'image_association',
    vocabularyItem: unit5NewVocabulary[2], // blo
    question: 'Exprimer une préférence: "Ech hunn gär ____ Saachen."',
    options: ['blo', 'grouss', 'rout'].sort(() => Math.random() - 0.5),
    correctAnswer: 'blo',
    context: 'Exprimer ses préférences de couleur'
  })

  return exercises.sort(() => Math.random() - 0.5)
}

// Fonctions utilitaires
function getRandomColorDistractor(correct: string): string {
  const colorDistractors = ['vert', 'noir', 'blanc', 'violet', 'orange', 'rose', 'petit', 'moyen']
  const filtered = colorDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomLuxColorDistractor(correct: string): string {
  const luxColorDistractors = ['gréng', 'schwaarz', 'wäiss', 'violett', 'orange', 'kleng', 'mëttel']
  const filtered = luxColorDistractors.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Définition de l'Unité 5 complète
export const learningUnit5New: LearningUnit = {
  id: 'unit_5_new',
  title: 'Les couleurs et descriptions simples',
  description: 'Apprenez les couleurs et à décrire simplement les objets',
  level: 'A1',
  vocabulary: unit5NewVocabulary,
  exercises: generateUnit5NewExercises(),
  targetScore: 75,
  estimatedTime: 4
}