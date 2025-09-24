// Unité 35 : Art et culture (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit35Vocabulary: VocabularyItem[] = [
  { id: 'theater', luxembourgish: 'Theater', french: 'théâtre', pronunciation: 'teh-A-ter', usage: 'Art dramatique luxembourgeois' },
  { id: 'musée', luxembourgish: 'Musée', french: 'musée', pronunciation: 'mu-SAY', usage: 'Institution culturelle (MUDAM, Musée National)' },
  { id: 'kritik', luxembourgish: 'Kritik', french: 'critique', pronunciation: 'kri-TIK', usage: 'Analyse critique d\'œuvre artistique' },
  { id: 'artistesch', luxembourgish: 'artistesch', french: 'artistique', pronunciation: 'ar-TIS-tesh', usage: 'Relatif à l\'art et à la création' }
]

export const generateUnit35Exercises = (): Exercise[] => [
  {
    id: 'creative_art_critique',
    type: 'creative_expression',
    vocabularyItem: unit35Vocabulary[2],
    question: 'Donnez votre critique d\'une exposition au MUDAM',
    wordBank: ['Dës', 'Expositioun', 'am', 'MUDAM', 'ass', 'ganz', 'innovativ', 'a', 'interessant'],
    correctAnswer: 'Dës Expositioun am MUDAM ass ganz innovativ a interessant',
    expectedSentence: 'Dës Expositioun am MUDAM ass ganz innovativ',
    context: 'Critique artistique constructive'
  }
]

export const learningUnit35: LearningUnit = {
  id: 'unit_35',
  title: 'Art et culture',
  description: 'Théâtre, musée, critique : appréciation artistique B1',
  level: 'B1',
  vocabulary: unit35Vocabulary,
  exercises: generateUnit35Exercises(),
  targetScore: 88,
  estimatedTime: 10
}