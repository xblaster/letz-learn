import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U5 : Météo et vêtements

export const unit13Vocabulary: VocabularyItem[] = [
  {
    id: 's2u5_wieder',
    luxembourgish: 'Wieder',
    french: 'météo',
    pronunciation: 'VEE-der',
    usage: 'Introduire un commentaire sur le temps.'
  },
  {
    id: 's2u5_sonneg',
    luxembourgish: 'sonneg',
    french: 'ensoleillé',
    pronunciation: 'SON-nek',
    usage: 'Décrire un temps lumineux pour conseiller une tenue.'
  },
  {
    id: 's2u5_reenen',
    luxembourgish: 'reenen',
    french: 'pleuvoir',
    pronunciation: 'RAY-nen',
    usage: 'Prévenir quelqu’un d’un épisode de pluie.'
  },
  {
    id: 's2u5_fraschteg',
    luxembourgish: 'fraschteg',
    french: 'glacial',
    pronunciation: 'FRASH-teg',
    usage: 'Parler d’un froid continental typique.'
  },
  {
    id: 's2u5_schal',
    luxembourgish: 'Schal',
    french: 'écharpe',
    pronunciation: 'SHAAL',
    usage: 'Recommander un accessoire chaud.'
  },
  {
    id: 's2u5_reemantel',
    luxembourgish: 'Reemantel',
    french: 'imperméable',
    pronunciation: 'RAY-man-tel',
    usage: 'Conseiller un manteau de pluie.'
  },
  {
    id: 's2u5_handschuesch',
    luxembourgish: 'Handschuesch',
    french: 'gants',
    pronunciation: 'HAND-sho-esh',
    usage: 'Compléter la tenue adaptée au climat.'
  }
]

export const generateUnit13Exercises = (): Exercise[] => [
  {
    id: 's2u5_reactivation_jours',
    type: 'dialogue_completion',
    vocabularyItem: unit13Vocabulary[0],
    question: 'Complétez : « Muer ass d’___ wahrscheinlech sonneg. »',
    options: ['Wieder', 'Schal', 'Reemantel'],
    correctAnswer: 'Wieder',
    context: 'Réactivation des jours et commentaires météorologiques.'
  },
  {
    id: 's2u5_tenue_soleil',
    type: 'translation',
    vocabularyItem: unit13Vocabulary[1],
    question: 'Quel adjectif luxembourgeois décrit un temps ensoleillé ?',
    options: ['sonneg', 'fraschteg', 'reenen'],
    correctAnswer: 'sonneg',
    context: 'Choisir une tenue légère pour un collègue.'
  },
  {
    id: 's2u5_prevenir_pluie',
    type: 'pattern_recognition',
    vocabularyItem: unit13Vocabulary[2],
    question: 'Quelle phrase annonce la pluie ?',
    options: [
      'Et geet reenen haut Owend.',
      'Et ass sonneg den Owend.',
      'Et bleift dréchen haut.'
    ],
    correctAnswer: 'Et geet reenen haut Owend.',
    context: 'Prévenir un·e ami·e pour une sortie Schueberfouer.'
  },
  {
    id: 's2u5_froid',
    type: 'dialogue_completion',
    vocabularyItem: unit13Vocabulary[3],
    question: 'Choisissez l’expression pour signaler un froid marqué :',
    options: ['Et ass fraschteg haut Moien.', 'Et ass sonneg haut Moien.', 'Ech sinn midd haut Moien.'],
    correctAnswer: 'Et ass fraschteg haut Moien.',
    context: 'Adapter la tenue pour aller au bureau.'
  },
  {
    id: 's2u5_accessoires',
    type: 'phrase_completion',
    vocabularyItem: unit13Vocabulary[4],
    question: 'Complétez : « Ech recommandéieren dir en ___ an Handschuesch. »',
    options: ['Schal', 'Wieder', 'Reemantel'],
    correctAnswer: 'Schal',
    context: 'Conseiller un accessoire en fonction du climat.'
  },
  {
    id: 's2u5_note_finale',
    type: 'sentence_construction',
    vocabularyItem: unit13Vocabulary[5],
    question: 'Assemblez la recommandation audio finale.',
    wordBank: ['Huelt', 'ären', 'Reemantel', 'a', 'Handschuesch!'],
    correctAnswer: 'Huelt ären Reemantel a Handschuesch!',
    expectedSentence: 'Huelt ären Reemantel a Handschuesch!',
    context: 'Préparer la note vocale qui aide un·e ami·e à s’habiller.'
  }
]

export const learningUnit13: LearningUnit = {
  id: 'S2U5',
  title: 'Météo et vêtements',
  description:
    'Je peux commenter la météo luxembourgeoise, conseiller une tenue adaptée et rester encourageant·e.',
  level: 'A1+',
  vocabulary: unit13Vocabulary,
  exercises: generateUnit13Exercises(),
  targetScore: 84,
  estimatedTime: 7
}
