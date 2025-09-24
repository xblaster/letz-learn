// Unité 31 : Événements luxembourgeois (A2+) - SECTION 4: Culture et société

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit31Vocabulary: VocabularyItem[] = [
  {
    id: 'festival',
    luxembourgish: 'Festival',
    french: 'festival',
    pronunciation: 'fes-ti-VAL',
    usage: 'Festival de musique et d\'art au Luxembourg'
  },
  {
    id: 'concert',
    luxembourgish: 'Concert',
    french: 'concert',
    pronunciation: 'kon-SERT',
    usage: 'Concert à la Philharmonie Luxembourg'
  },
  {
    id: 'expositioun',
    luxembourgish: 'Expositioun',
    french: 'exposition',
    pronunciation: 'eks-po-zi-tsi-OUN',
    usage: 'Exposition d\'art ou culturelle'
  },
  {
    id: 'evenement',
    luxembourgish: 'Evenement',
    french: 'événement',
    pronunciation: 'eh-veh-ne-MAN',
    usage: 'Événement culturel ou social'
  },
  {
    id: 'kultur',
    luxembourgish: 'Kultur',
    french: 'culture',
    pronunciation: 'kul-TUR',
    usage: 'Culture et arts luxembourgeois'
  }
]

export const generateUnit31Exercises = (): Exercise[] => [
  {
    id: 'cultural_philharmonie',
    type: 'cultural_context',
    vocabularyItem: unit31Vocabulary[1],
    question: 'Où peut-on écouter des concerts classiques à Luxembourg ?',
    options: ['Philharmonie Luxembourg', 'Stade Josy Barthel', 'Gare centrale'],
    correctAnswer: 'Philharmonie Luxembourg',
    context: 'Lieu culturel emblématique'
  },
  {
    id: 'creative_cultural_participation',
    type: 'creative_expression',
    vocabularyItem: unit31Vocabulary[3],
    question: 'Décrivez votre participation aux événements culturels',
    wordBank: ['Ech', 'ginn', 'gär', 'op', 'kulturell', 'Evenementer'],
    correctAnswer: 'Ech ginn gär op kulturell Evenementer',
    expectedSentence: 'Ech ginn gär op kulturell Evenementer',
    context: 'Engagement culturel personnel'
  }
]

export const learningUnit31: LearningUnit = {
  id: 'unit_31',
  title: 'Événements luxembourgeois',
  description: 'Festivals, concerts et expositions culturelles',
  level: 'A2',
  vocabulary: unit31Vocabulary,
  exercises: generateUnit31Exercises(),
  targetScore: 85,
  estimatedTime: 8
}