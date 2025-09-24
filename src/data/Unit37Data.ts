// Unité 37 : Projets futurs (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit37Vocabulary: VocabularyItem[] = [
  { id: 'ambitiounen', luxembourgish: 'Ambitiounen', french: 'ambitions', pronunciation: 'am-bi-tsi-OU-nen', usage: 'Objectifs personnels à long terme' },
  { id: 'drämer', luxembourgish: 'Drämer', french: 'rêves', pronunciation: 'DRAY-mer', usage: 'Aspirations et souhaits profonds' },
  { id: 'ziler', luxembourgish: 'Ziler', french: 'objectifs', pronunciation: 'TSEE-ler', usage: 'Buts concrets à atteindre' }
]

export const generateUnit37Exercises = (): Exercise[] => [
  {
    id: 'creative_future_plans',
    type: 'creative_expression',
    vocabularyItem: unit37Vocabulary[0],
    question: 'Décrivez vos ambitions professionnelles (2-3 phrases)',
    wordBank: ['Meng', 'gröusst', 'Ambitioun', 'ass', 'et', 'zu', 'Luxembourg', 'ze', 'schaffen'],
    correctAnswer: 'Meng gröusst Ambitioun ass et zu Luxembourg ze schaffen',
    expectedSentence: 'Meng gröusst Ambitioun ass et zu Luxembourg ze schaffen',
    context: 'Expression d\'ambitions personnelles'
  }
]

export const learningUnit37: LearningUnit = {
  id: 'unit_37',
  title: 'Projets futurs',
  description: 'Ambitions, rêves, objectifs : planification B1',
  level: 'B1',
  vocabulary: unit37Vocabulary,
  exercises: generateUnit37Exercises(),
  targetScore: 88,
  estimatedTime: 10
}