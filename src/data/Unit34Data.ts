// Unité 34 : Opinions politiques (B1) - SECTION 5: Expression personnelle

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit34Vocabulary: VocabularyItem[] = [
  {
    id: 'fir',
    luxembourgish: 'fir',
    french: 'pour',
    pronunciation: 'fir',
    usage: 'Expression d\'accord ou de soutien'
  },
  {
    id: 'géint',
    luxembourgish: 'géint',
    french: 'contre',
    pronunciation: 'GAY-nt',
    usage: 'Expression d\'opposition'
  },
  {
    id: 'debat',
    luxembourgish: 'Debat',
    french: 'débat',
    pronunciation: 'de-BAT',
    usage: 'Discussion argumentée sur un sujet politique'
  },
  {
    id: 'wielen',
    luxembourgish: 'wielen',
    french: 'voter',
    pronunciation: 'VEE-len',
    usage: 'Exercer son droit de vote'
  },
  {
    id: 'meenung',
    luxembourgish: 'Meenung',
    french: 'opinion',
    pronunciation: 'MAY-nung',
    usage: 'Point de vue personnel sur un sujet'
  }
]

export const generateUnit34Exercises = (): Exercise[] => [
  {
    id: 'argumentation_political_position',
    type: 'argumentation_building',
    vocabularyItem: unit34Vocabulary[0],
    question: 'Exprimez une position politique avec argumentation',
    wordBank: ['Ech', 'sinn', 'fir', 'dës', 'Mesure', 'well', 'si', 'hëlleft', 'd\'Ëmwelt'],
    correctAnswer: 'Ech sinn fir dës Mesure well si hëlleft d\'Ëmwelt',
    expectedSentence: 'Ech sinn fir dës Mesure well si hëlleft d\'Ëmwelt',
    context: 'Argumentation politique environnementale'
  },
  {
    id: 'opinion_democratic_participation',
    type: 'opinion_expression',
    vocabularyItem: unit34Vocabulary[3],
    question: 'Votre opinion sur l\'importance du vote',
    options: [
      'Wielen ass eis demokratescht Recht a Flicht',
      'Politik interesséiert mech net',
      'Meng Stëmm zielt net'
    ],
    correctAnswer: 'Wielen ass eis demokratescht Recht a Flicht',
    context: 'Engagement civique et responsabilité démocratique'
  }
]

export const learningUnit34: LearningUnit = {
  id: 'unit_34',
  title: 'Opinions politiques',
  description: 'Pour/contre, débat, voter : expression citoyenne B1',
  level: 'B1',
  vocabulary: unit34Vocabulary,
  exercises: generateUnit34Exercises(),
  targetScore: 88,
  estimatedTime: 10
}