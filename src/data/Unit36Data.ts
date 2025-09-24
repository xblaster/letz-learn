// Unité 36 : Relations personnelles (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit36Vocabulary: VocabularyItem[] = [
  { id: 'frndschaft', luxembourgish: 'Frëndschaft', french: 'amitié', pronunciation: 'FREND-shaft', usage: 'Relation amicale profonde' },
  { id: 'léift', luxembourgish: 'Léift', french: 'amour', pronunciation: 'LAYFT', usage: 'Sentiment amoureux' },
  { id: 'konflikt', luxembourgish: 'Konflikt', french: 'conflit', pronunciation: 'kon-FLIKT', usage: 'Désaccord ou tension relationnelle' },
  { id: 'vertraut', luxembourgish: 'vertraut', french: 'intime', pronunciation: 'ver-TROWT', usage: 'Relation de confiance profonde' }
]

export const generateUnit36Exercises = (): Exercise[] => [
  {
    id: 'opinion_friendship_importance',
    type: 'opinion_expression',
    vocabularyItem: unit36Vocabulary[0],
    question: 'Qu\'est-ce qui rend une amitié durable ?',
    options: [
      'Vertrauen a gegensiidegen Respekt sinn wichteg',
      'Nëmmen Spaß ze hunn ass genuch',
      'Frëndschaften daueren net laang'
    ],
    correctAnswer: 'Vertrauen a gegensiidegen Respekt sinn wichteg',
    context: 'Réflexion sur la qualité des relations'
  }
]

export const learningUnit36: LearningUnit = {
  id: 'unit_36',
  title: 'Relations personnelles',
  description: 'Amitié, amour, conflit : nuances relationnelles B1',
  level: 'B1',
  vocabulary: unit36Vocabulary,
  exercises: generateUnit36Exercises(),
  targetScore: 88,
  estimatedTime: 10
}