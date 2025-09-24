// Unité 32 : Géographie luxembourgeoise (A2+) - SECTION 4: Culture et société

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit32Vocabulary: VocabularyItem[] = [
  {
    id: 'kanton',
    luxembourgish: 'Kanton',
    french: 'canton',
    pronunciation: 'kan-TON',
    usage: 'Division administrative luxembourgeoise (12 cantons)'
  },
  {
    id: 'stad',
    luxembourgish: 'Stad',
    french: 'ville',
    pronunciation: 'STAD',
    usage: 'Ville luxembourgeoise (Esch, Differdange, Dudelange)'
  },
  {
    id: 'floss',
    luxembourgish: 'Floss',
    french: 'rivière',
    pronunciation: 'FLOSS',
    usage: 'Rivières luxembourgeoises (Alzette, Sauer, Moselle)'
  },
  {
    id: 'norden',
    luxembourgish: 'Norden',
    french: 'nord',
    pronunciation: 'NOR-den',
    usage: 'Région nord du Luxembourg (Oesling)'
  },
  {
    id: 'geographie',
    luxembourgish: 'Geographie',
    french: 'géographie',
    pronunciation: 'geh-o-gra-FEE',
    usage: 'Géographie du Grand-Duché'
  }
]

export const generateUnit32Exercises = (): Exercise[] => [
  {
    id: 'cultural_cantons_system',
    type: 'cultural_context',
    vocabularyItem: unit32Vocabulary[0],
    question: 'Combien de cantons compte le Luxembourg ?',
    options: ['12 cantons', '26 cantons', '6 cantons'],
    correctAnswer: '12 cantons',
    context: 'Organisation territoriale luxembourgeoise'
  },
  {
    id: 'geography_description',
    type: 'sentence_construction',
    vocabularyItem: unit32Vocabulary[2],
    question: 'Décrivez les rivières du Luxembourg',
    wordBank: ['D\'Alzette', 'a', 'd\'Sauer', 'sinn', 'wichteg', 'Flëss'],
    correctAnswer: 'D\'Alzette a d\'Sauer sinn wichteg Flëss',
    expectedSentence: 'D\'Alzette a d\'Sauer sinn wichteg Flëss',
    context: 'Hydrographie luxembourgeoise'
  }
]

export const learningUnit32: LearningUnit = {
  id: 'unit_32',
  title: 'Géographie luxembourgeoise',
  description: 'Cantons, villes et rivières du Grand-Duché',
  level: 'A2',
  vocabulary: unit32Vocabulary,
  exercises: generateUnit32Exercises(),
  targetScore: 85,
  estimatedTime: 8
}