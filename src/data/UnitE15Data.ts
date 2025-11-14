import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes';

const vocabularyE15: VocabularyItem[] = [
  {
    id: 'awer',
    luxembourgish: 'awer',
    french: 'mais',
    pronunciation: 'AH-ver',
    usage: 'Conjonction d\'opposition'
  },
  {
    id: 'an',
    luxembourgish: 'an',
    french: 'et',
    pronunciation: 'un',
    usage: 'Conjonction de coordination'
  },
  {
    id: 'oder',
    luxembourgish: 'oder',
    french: 'ou',
    pronunciation: 'OH-der',
    usage: 'Conjonction d\'alternative'
  },
  {
    id: 'dann',
    luxembourgish: 'dann',
    french: 'alors/puis',
    pronunciation: 'dan',
    usage: 'Conjonction temporelle'
  },
  {
    id: 'elo',
    luxembourgish: 'elo',
    french: 'maintenant',
    pronunciation: 'EL-o',
    usage: 'Adverbe temporel présent'
  },
  {
    id: 'haut',
    luxembourgish: 'haut',
    french: 'aujourd\'hui',
    pronunciation: 'howt',
    usage: 'Adverbe temporel du jour'
  },
  {
    id: 'muer',
    luxembourgish: 'muer',
    french: 'demain',
    pronunciation: 'moo-er',
    usage: 'Adverbe temporel futur'
  },
  // Review from E14
  {
    id: 'verstoen_review',
    luxembourgish: 'verstoen',
    french: 'comprendre',
    pronunciation: 'fer-SHTO-en',
    usage: 'Révision E14'
  },
  {
    id: 'mat_review',
    luxembourgish: 'mat',
    french: 'avec',
    pronunciation: 'mat',
    usage: 'Révision E14'
  }
];

const exercisesE15: Exercise[] = [
  {
    id: 'e15_ex1_audio_connector',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE15[1], // an
    question: 'Écoutez la phrase et identifiez le mot de liaison : "Ech schwätzen Franséisch an Lëtzebuergesch"',
    correctAnswer: 'an',
    options: ['an', 'awer', 'oder', 'well'],
    context: 'Reconnaissance audio du connecteur "an" (et)'
  },
  {
    id: 'e15_ex2_pairing_connectors',
    type: 'word_pairing',
    vocabularyItem: vocabularyE15[0], // awer
    question: 'Associez les mots de liaison luxembourgeois et français',
    correctAnswer: 'all_matched',
    context: 'Les connecteurs permettent de relier les idées dans les phrases',
    hint: 'Cliquez sur un mot luxembourgeois puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'awer', left: 'awer', right: 'mais' },
      { id: 'an', left: 'an', right: 'et' },
      { id: 'oder', left: 'oder', right: 'ou' },
      { id: 'dann', left: 'dann', right: 'alors/puis' },
      { id: 'well', left: 'well', right: 'parce que' }
    ]
  },
  {
    id: 'e15_ex3_pattern_connectors',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE15[0], // awer
    question: 'Quel type de relation exprime "awer" ?',
    correctAnswer: 'Contraste/opposition',
    options: [
      'Contraste/opposition',
      'Cause/raison',
      'Addition',
      'Alternative/choix'
    ],
    context: '"well" exprime la cause, "awer" exprime le contraste, "dann" exprime la conséquence. Ex: "Ech verstoen awer ech schwätzen net" (Je comprends mais je ne parle pas)'
  },
  {
    id: 'e15_ex4_completion_because',
    type: 'phrase_completion',
    vocabularyItem: vocabularyE15[0], // awer (well is in the sentence)
    question: 'Complétez : "Ech léieren Lëtzebuergesch, ___ et wichteg ass"',
    correctAnswer: 'well',
    expectedSentence: 'Ech léieren Lëtzebuergesch, well et wichteg ass',
    options: ['well', 'awer', 'oder', 'dann'],
    context: 'J\'apprends le luxembourgeois parce que c\'est important. "well" = parce que'
  },
  {
    id: 'e15_ex5_translation_today_but_tomorrow',
    type: 'translation',
    vocabularyItem: vocabularyE15[0], // awer
    question: 'Traduisez : "Je travaille aujourd\'hui mais je suis libre demain"',
    correctAnswer: 'Ech schaffen haut awer ech si fräi muer',
    options: [
      'Ech schaffen haut awer ech si fräi muer',
      'Ech schaffen haut an ech si fräi muer',
      'Ech schaffen haut oder ech si fräi muer',
      'Ech schaffen haut well ech si fräi muer'
    ],
    hint: 'schaffen = travailler, haut = aujourd\'hui, awer = mais, fräi = libre, muer = demain',
    context: 'Utilisation de "awer" (mais) pour contraster deux situations temporelles'
  },
  {
    id: 'e15_ex6_sentence_learn_because',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE15[0], // awer (well is used in sentence)
    question: 'Construisez une phrase donnant une raison avec "well" : "J\'apprends parce que c\'est intéressant"',
    correctAnswer: 'Ech léieren well et interessant ass',
    expectedSentence: 'Ech léieren well et interessant ass',
    wordBank: ['Ech', 'léieren', 'well', 'et', 'interessant', 'ass', 'awer', 'dann'],
    hint: 'well = parce que, interessant = intéressant',
    context: 'Construction avec "well" (parce que) pour donner une raison'
  },
  {
    id: 'e15_ex7_order_learn_then_understand',
    type: 'word_ordering',
    vocabularyItem: vocabularyE15[3], // dann
    question: 'Ordonnez les mots pour former : "J\'apprends puis je comprends"',
    correctAnswer: 'Ech léieren dann verstoen ech',
    expectedSentence: 'Ech léieren dann verstoen ech',
    wordBank: ['Ech', 'léieren', 'dann', 'verstoen', 'ech', 'awer', 'well'],
    hint: 'dann = puis/alors',
    context: 'Séquence temporelle avec "dann" (puis)'
  },
  {
    id: 'e15_ex8_translation_now_understand',
    type: 'translation',
    vocabularyItem: vocabularyE15[4], // elo
    question: 'Traduisez : "Maintenant je comprends et je peux parler"',
    correctAnswer: 'Elo verstinn ech an ech ka schwätzen',
    options: [
      'Elo verstinn ech an ech ka schwätzen',
      'Haut verstinn ech an ech ka schwätzen',
      'Muer verstinn ech an ech ka schwätzen',
      'Elo verstinn ech awer ech ka schwätzen'
    ],
    hint: 'elo = maintenant, verstinn = comprends, an = et, ka = peux',
    context: 'Utilisation de "elo" (maintenant) pour parler du présent'
  },
  {
    id: 'e15_ex9_dialogue_speak_luxembourgish',
    type: 'dialogue_completion',
    vocabularyItem: vocabularyE15[0], // awer
    question: 'Complétez le dialogue : "Schwätzt dir Lëtzebuergesch?" - "Jo, ___ net séier gutt."',
    correctAnswer: 'awer',
    options: ['awer', 'an', 'oder', 'well'],
    context: 'Contexte : "Oui, mais pas très bien". Utiliser "awer" pour le contraste'
  },
  {
    id: 'e15_ex10_sentence_today_tomorrow',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE15[5], // haut
    question: 'Racontez avec plusieurs connecteurs : "J\'apprends aujourd\'hui et demain parce que c\'est important"',
    correctAnswer: 'Ech léieren haut an muer well et wichteg ass',
    expectedSentence: 'Ech léieren haut an muer well et wichteg ass',
    wordBank: ['Ech', 'léieren', 'haut', 'an', 'muer', 'well', 'et', 'wichteg', 'ass', 'awer', 'oder', 'dann'],
    hint: 'Utilisez "an" (et) et "well" (parce que)',
    context: 'Phrase complexe avec plusieurs connecteurs : temps + cause'
  },
  {
    id: 'e15_ex11_speech_speak_but',
    type: 'speech_recognition',
    vocabularyItem: vocabularyE15[0], // awer
    question: 'Prononcez : "Ech schwätzen Lëtzebuergesch awer ech verstoen net alles"',
    correctAnswer: 'Ech schwätzen Lëtzebuergesch awer ech verstoen net alles',
    expectedSentence: 'Ech schwätzen Lëtzebuergesch awer ech verstoen net alles',
    hint: 'Je parle luxembourgeois mais je ne comprends pas tout',
    context: 'Production orale d\'une phrase avec "awer" (mais) exprimant le contraste'
  },
  {
    id: 'e15_ex12_pattern_connector_roles',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE15[2], // oder
    question: 'Quel connecteur utilise-t-on pour offrir un choix ?',
    correctAnswer: 'oder',
    options: ['oder', 'well', 'awer', 'dann'],
    context: 'Chaque connecteur a un rôle spécifique : "well" donne une raison, "awer" exprime un contraste, "oder" offre un choix, "dann" indique une séquence'
  }
];

const UnitE15Data: LearningUnit = {
  id: 'unit_e15',
  title: 'E15 - Strukturen a Wieder',
  description: 'Construisez des phrases plus complexes avec les mots de liaison : mais, et, ou, parce que. Parlez du présent et du futur.',
  level: 'A1',
  vocabulary: vocabularyE15,
  exercises: exercisesE15,
  targetScore: 80,
  estimatedTime: 7
};

export const learningUnitE15 = UnitE15Data;
export default UnitE15Data;
