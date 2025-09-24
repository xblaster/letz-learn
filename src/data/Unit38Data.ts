// Unité 38 : Expériences passées (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit38Vocabulary: VocabularyItem[] = [
  { id: 'erenneren', luxembourgish: 'erenneren', french: 'se souvenir', pronunciation: 'eh-REN-ner-en', usage: 'Rappeler des souvenirs du passé' },
  { id: 'bedaueren', luxembourgish: 'bedaueren', french: 'regretter', pronunciation: 'be-DOW-er-en', usage: 'Exprimer des regrets' },
  { id: 'houfreg', luxembourgish: 'houfreg', french: 'fier', pronunciation: 'HOW-freg', usage: 'Sentiment de fierté' }
]

export const generateUnit38Exercises = (): Exercise[] => [
  {
    id: 'creative_memory_sharing',
    type: 'creative_expression',
    vocabularyItem: unit38Vocabulary[0],
    question: 'Partagez un souvenir marquant de votre enfance',
    wordBank: ['Ech', 'erenneren', 'mech', 'ganz', 'gair', 'un', 'meng', 'Kandheet'],
    correctAnswer: 'Ech erenneren mech ganz gair un meng Kandheet',
    expectedSentence: 'Ech erenneren mech ganz gair un meng Kandheet',
    context: 'Partage de souvenirs personnels'
  }
]

export const learningUnit38: LearningUnit = {
  id: 'unit_38',
  title: 'Expériences passées',
  description: 'Souvenirs, regrets, fierté : réflexion temporelle B1',
  level: 'B1',
  vocabulary: unit38Vocabulary,
  exercises: generateUnit38Exercises(),
  targetScore: 88,
  estimatedTime: 10
}