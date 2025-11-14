import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes';

const vocabularyE14: VocabularyItem[] = [
  {
    id: 'kucken',
    luxembourgish: 'kucken',
    french: 'regarder',
    pronunciation: 'KUK-en',
    usage: 'Utiliser la vue, observer'
  },
  {
    id: 'fannen',
    luxembourgish: 'fannen',
    french: 'trouver',
    pronunciation: 'FAN-en',
    usage: 'Découvrir, localiser'
  },
  {
    id: 'verstoen',
    luxembourgish: 'verstoen',
    french: 'comprendre',
    pronunciation: 'fer-SHTO-en',
    usage: 'Saisir le sens'
  },
  {
    id: 'mat',
    luxembourgish: 'mat',
    french: 'avec',
    pronunciation: 'mat',
    usage: 'Préposition de compagnie'
  },
  {
    id: 'ouni',
    luxembourgish: 'ouni',
    french: 'sans',
    pronunciation: 'OW-nee',
    usage: 'Préposition d\'absence'
  },
  {
    id: 'fir',
    luxembourgish: 'fir',
    french: 'pour',
    pronunciation: 'feer',
    usage: 'Préposition de but'
  },
  {
    id: 'well',
    luxembourgish: 'well',
    french: 'parce que',
    pronunciation: 'vel',
    usage: 'Conjonction de cause'
  },
  // Review from E13
  {
    id: 'leieren_review',
    luxembourgish: 'léieren',
    french: 'apprendre',
    pronunciation: 'LAY-er-en',
    usage: 'Révision E13'
  },
  {
    id: 'schwatzen_review',
    luxembourgish: 'schwätzen',
    french: 'parler',
    pronunciation: 'SHVET-sen',
    usage: 'Révision E13'
  }
];

const exercisesE14: Exercise[] = [
  {
    id: 'e14_ex1_audio_kucken',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE14[0], // kucken
    question: 'Écoutez le verbe et associez-le à l\'action correspondante',
    correctAnswer: 'regarder',
    options: ['regarder', 'trouver', 'comprendre', 'apprendre'],
    context: 'Reconnaissance audio du verbe "kucken" (regarder)'
  },
  {
    id: 'e14_ex2_pairing_verbs_prepositions',
    type: 'word_pairing',
    vocabularyItem: vocabularyE14[3], // mat
    question: 'Associez les verbes avec les prépositions appropriées',
    correctAnswer: 'all_matched',
    context: 'Les prépositions se combinent avec les verbes pour enrichir le sens',
    hint: 'Cliquez sur une expression luxembourgeoise puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'schwatzen_mat', left: 'schwätzen mat', right: 'parler avec' },
      { id: 'leieren_ouni', left: 'léieren ouni', right: 'apprendre sans' },
      { id: 'kucken_fir', left: 'kucken fir', right: 'regarder pour' },
      { id: 'verstoen_mat', left: 'verstoen mat', right: 'comprendre avec' }
    ]
  },
  {
    id: 'e14_ex3_pattern_prepositions',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE14[3], // mat
    question: 'Où se placent les prépositions en luxembourgeois ?',
    correctAnswer: 'Les prépositions précèdent leur complément',
    options: [
      'Les prépositions précèdent leur complément',
      'Les prépositions suivent leur complément',
      'Les prépositions sont toujours à la fin',
      'Les prépositions n\'ont pas de place fixe'
    ],
    context: 'Les prépositions "mat" (avec), "ouni" (sans) et "fir" (pour) se placent avant leur complément, ex: "mat menger Mamm" (avec ma mère)'
  },
  {
    id: 'e14_ex4_completion_speak_with',
    type: 'phrase_completion',
    vocabularyItem: vocabularyE14[3], // mat
    question: 'Complétez la phrase : "Ech schwätzen ___ menger Mamm"',
    correctAnswer: 'mat',
    expectedSentence: 'Ech schwätzen mat menger Mamm',
    options: ['mat', 'ouni', 'fir', 'well'],
    context: 'Je parle avec ma mère. "mat" = avec'
  },
  {
    id: 'e14_ex5_translation_understand_without',
    type: 'translation',
    vocabularyItem: vocabularyE14[2], // verstoen
    question: 'Traduisez en luxembourgeois : "Je comprends sans aide"',
    correctAnswer: 'Ech verstoen ouni Hëllef',
    options: [
      'Ech verstoen ouni Hëllef',
      'Ech verstoen mat Hëllef',
      'Ech kucken ouni Hëllef',
      'Ech fannen ouni Hëllef'
    ],
    hint: 'verstoen = comprendre, ouni = sans, Hëllef = aide',
    context: 'Utilisation de la préposition "ouni" (sans) avec le verbe "verstoen" (comprendre)'
  },
  {
    id: 'e14_ex6_sentence_learn_for_exam',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE14[5], // fir
    question: 'Construisez une phrase avec une préposition : "J\'apprends pour mon examen"',
    correctAnswer: 'Ech léieren fir meng Examen',
    expectedSentence: 'Ech léieren fir meng Examen',
    wordBank: ['Ech', 'léieren', 'fir', 'meng', 'Examen', 'mat', 'ouni', 'well'],
    hint: 'fir = pour',
    context: 'Construction d\'une phrase avec la préposition "fir" (pour)'
  },
  {
    id: 'e14_ex7_order_speak_with_mother',
    type: 'word_ordering',
    vocabularyItem: vocabularyE14[8], // schwätzen (review)
    question: 'Mettez les mots dans le bon ordre : "Je parle avec ma mère"',
    correctAnswer: 'Ech schwätzen mat menger Mamm',
    expectedSentence: 'Ech schwätzen mat menger Mamm',
    wordBank: ['mat', 'schwätzen', 'Mamm', 'Ech', 'menger', 'ouni', 'fir'],
    hint: 'Structure : Sujet + verbe + préposition + possessif + nom',
    context: 'Remise en ordre avec préposition "mat" (avec)'
  },
  {
    id: 'e14_ex8_translation_find_phone',
    type: 'translation',
    vocabularyItem: vocabularyE14[1], // fannen
    question: 'Traduisez en luxembourgeois : "Je cherche mon téléphone"',
    correctAnswer: 'Ech fannen mäi Telefon',
    options: [
      'Ech fannen mäi Telefon',
      'Ech kucken mäi Telefon',
      'Ech verstoen mäi Telefon',
      'Ech léieren mäi Telefon'
    ],
    hint: 'fannen = trouver/chercher, mäi = mon, Telefon = téléphone',
    context: 'Le verbe "fannen" signifie à la fois trouver et chercher'
  },
  {
    id: 'e14_ex9_dialogue_find_book',
    type: 'dialogue_completion',
    vocabularyItem: vocabularyE14[1], // fannen
    question: 'Complétez le dialogue : "Wou ass mäi Buch?" (Où est mon livre ?) - "Ech ___ däi Buch net."',
    correctAnswer: 'fannen',
    options: ['fannen', 'kucken', 'verstoen', 'léieren'],
    context: 'Dialogue sur la recherche d\'un objet perdu. "Ech fannen däi Buch net" = Je ne trouve pas ton livre'
  },
  {
    id: 'e14_ex10_sentence_speak_without_help',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE14[4], // ouni
    question: 'Construisez une phrase : "Je parle luxembourgeois sans aide"',
    correctAnswer: 'Ech schwätzen Lëtzebuergesch ouni Hëllef',
    expectedSentence: 'Ech schwätzen Lëtzebuergesch ouni Hëllef',
    wordBank: ['Ech', 'schwätzen', 'Lëtzebuergesch', 'ouni', 'Hëllef', 'mat', 'fir', 'well'],
    hint: 'ouni = sans, Hëllef = aide',
    context: 'Phrase avec la préposition "ouni" (sans) pour exprimer l\'autonomie'
  },
  {
    id: 'e14_ex11_speech_understand_with_help',
    type: 'speech_recognition',
    vocabularyItem: vocabularyE14[2], // verstoen
    question: 'Prononcez : "Ech verstoen mat Hëllef"',
    correctAnswer: 'Ech verstoen mat Hëllef',
    expectedSentence: 'Ech verstoen mat Hëllef',
    hint: 'Cette phrase signifie "Je comprends avec de l\'aide"',
    context: 'Production orale d\'une phrase avec verbe et préposition'
  }
];

const UnitE14Data: LearningUnit = {
  id: 'unit_e14',
  title: 'E14 - Méi Verben a Sätz',
  description: 'Enrichissez vos phrases avec de nouveaux verbes (regarder, trouver, comprendre) et les prépositions essentielles (avec, sans, pour).',
  level: 'A1',
  vocabulary: vocabularyE14,
  exercises: exercisesE14,
  targetScore: 80,
  estimatedTime: 6
};

export const learningUnitE14 = UnitE14Data;
export default UnitE14Data;
