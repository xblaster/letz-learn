// Unité 40 : Débats (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit40Vocabulary: VocabularyItem[] = [
  { id: 'argument', luxembourgish: 'Argument', french: 'argument', pronunciation: 'ar-gu-MAN', usage: 'Raisonnement pour soutenir une position' },
  { id: 'beweis', luxembourgish: 'Beweis', french: 'preuve', pronunciation: 'be-VAYS', usage: 'Élément factuel pour appuyer un argument' },
  { id: 'iwwerzeegen', luxembourgish: 'iwwerzeegen', french: 'convaincre', pronunciation: 'iw-wer-TSAY-gen', usage: 'Persuader quelqu\'un par l\'argumentation' }
]

export const generateUnit40Exercises = (): Exercise[] => [
  {
    id: 'argumentation_debate_skills',
    type: 'argumentation_building',
    vocabularyItem: unit40Vocabulary[0],
    question: 'Construisez un argument pour défendre l\'importance du multilinguisme',
    wordBank: ['Multilinguisme', 'ass', 'wichteg', 'well', 'et', 'erméglecht', 'besser', 'Verstännes'],
    correctAnswer: 'Multilinguisme ass wichteg well et erméglecht besser Verstännes',
    expectedSentence: 'Multilinguisme ass wichteg well et erméglecht besser Verstännes',
    context: 'Construction d\'arguments structurés'
  }
]

export const learningUnit40: LearningUnit = {
  id: 'unit_40',
  title: 'Débats',
  description: 'Argument, preuve, convaincre : maîtrise dialectique B1',
  level: 'B1',
  vocabulary: unit40Vocabulary,
  exercises: generateUnit40Exercises(),
  targetScore: 88,
  estimatedTime: 10
}