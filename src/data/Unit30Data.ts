// Unité 30 : Sports luxembourgeois (A2+) - SECTION 4: Culture et société

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit30Vocabulary: VocabularyItem[] = [
  {
    id: 'fussball',
    luxembourgish: 'Fussball',
    french: 'football',
    pronunciation: 'FOOSS-ball',
    usage: 'Sport populaire, équipe nationale luxembourgeoise'
  },
  {
    id: 'cyclisme',
    luxembourgish: 'Cyclisme',
    french: 'cyclisme',
    pronunciation: 'si-KLISS-me',
    usage: 'Tour de Luxembourg, tradition cycliste'
  },
  {
    id: 'equipe_nationale',
    luxembourgish: 'Nationalequipe',
    french: 'équipe nationale',
    pronunciation: 'na-tsi-o-NAL-eh-ki-pe',
    usage: 'Équipe nationale de football du Luxembourg'
  },
  {
    id: 'sport',
    luxembourgish: 'Sport',
    french: 'sport',
    pronunciation: 'SPORT',
    usage: 'Activité sportive au Luxembourg'
  },
  {
    id: 'spillen',
    luxembourgish: 'spillen',
    french: 'jouer',
    pronunciation: 'SPIL-len',
    usage: 'Pratiquer un sport'
  }
]

export const generateUnit30Exercises = (): Exercise[] => [
  {
    id: 'cultural_tour_luxembourg',
    type: 'cultural_context',
    vocabularyItem: unit30Vocabulary[1],
    question: 'Quel événement cycliste important a lieu au Luxembourg ?',
    options: ['Tour de Luxembourg', 'Tour de France', 'Vuelta'],
    correctAnswer: 'Tour de Luxembourg',
    context: 'Événement sportif national'
  },
  {
    id: 'sports_participation',
    type: 'sentence_construction',
    vocabularyItem: unit30Vocabulary[4],
    question: 'Exprimez votre pratique sportive',
    wordBank: ['Ech', 'spillen', 'gär', 'Fussball', 'mat', 'Frënn'],
    correctAnswer: 'Ech spillen gär Fussball mat Frënn',
    expectedSentence: 'Ech spillen gär Fussball mat Frënn',
    context: 'Participation sportive personnelle'
  }
]

export const learningUnit30: LearningUnit = {
  id: 'unit_30',
  title: 'Sports luxembourgeois',
  description: 'Football, cyclisme et équipe nationale',
  level: 'A2',
  vocabulary: unit30Vocabulary,
  exercises: generateUnit30Exercises(),
  targetScore: 85,
  estimatedTime: 8
}