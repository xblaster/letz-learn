// Unité 39 : Hypothèses (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit39Vocabulary: VocabularyItem[] = [
  { id: 'wann_ech_wier', luxembourgish: 'wann ech wier', french: 'si j\'\u00e9tais', pronunciation: 'van ekh veer', usage: 'Expression d\'hypothèse irréelle' },
  { id: 'villäicht', luxembourgish: 'villäicht', french: 'peut-être', pronunciation: 'vil-AYKHT', usage: 'Expression de probabilité' },
  { id: 'wahrscheinlech', luxembourgish: 'wahrscheinlech', french: 'probablement', pronunciation: 'VAR-shay-nlekh', usage: 'Forte probabilité' }
]

export const generateUnit39Exercises = (): Exercise[] => [
  {
    id: 'creative_hypothetical_situation',
    type: 'creative_expression',
    vocabularyItem: unit39Vocabulary[0],
    question: 'Exprimez une hypothèse sur votre vie idéale',
    wordBank: ['Wann', 'ech', 'wär', 'räich', 'wéird', 'ech', 'vill', 'reesen'],
    correctAnswer: 'Wann ech wär räich wéird ech vill reesen',
    expectedSentence: 'Wann ech wär räich wéird ech vill reesen',
    context: 'Expression d\'hypothèses personnelles'
  }
]

export const learningUnit39: LearningUnit = {
  id: 'unit_39',
  title: 'Hypothèses',
  description: 'Si j\'\u00e9tais, peut-être, probablement : modalités B1',
  level: 'B1',
  vocabulary: unit39Vocabulary,
  exercises: generateUnit39Exercises(),
  targetScore: 88,
  estimatedTime: 10
}