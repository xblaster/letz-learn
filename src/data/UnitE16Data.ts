import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes';

const vocabularyE16: VocabularyItem[] = [
  {
    id: 'main',
    luxembourgish: 'mäin',
    french: 'mon/ma/mes',
    pronunciation: 'mine',
    usage: 'Possessif 1ère personne'
  },
  {
    id: 'dain',
    luxembourgish: 'däin',
    french: 'ton/ta/tes',
    pronunciation: 'dine',
    usage: 'Possessif 2ème personne'
  },
  {
    id: 'sain',
    luxembourgish: 'säin',
    french: 'son/sa/ses',
    pronunciation: 'zine',
    usage: 'Possessif 3ème personne'
  },
  {
    id: 'grouss',
    luxembourgish: 'grouss',
    french: 'grand',
    pronunciation: 'groos',
    usage: 'Adjectif de taille'
  },
  {
    id: 'kleng',
    luxembourgish: 'kleng',
    french: 'petit',
    pronunciation: 'kleng',
    usage: 'Adjectif de taille'
  },
  {
    id: 'gutt',
    luxembourgish: 'gutt',
    french: 'bon',
    pronunciation: 'goot',
    usage: 'Adjectif de qualité positive'
  },
  {
    id: 'rendez_vous',
    luxembourgish: 'Rendez-vous',
    french: 'rendez-vous',
    pronunciation: 'ron-day-voo',
    usage: 'Rencontre planifiée'
  },
  {
    id: 'wei_doen',
    luxembourgish: 'wéi doen',
    french: 'avoir mal',
    pronunciation: 'vay doo-en',
    usage: 'Expression de douleur'
  },
  {
    id: 'medikament',
    luxembourgish: 'Medikament',
    french: 'médicament',
    pronunciation: 'me-dee-ka-MENT',
    usage: 'Substance thérapeutique'
  },
  {
    id: 'rezept',
    luxembourgish: 'Rezept',
    french: 'ordonnance',
    pronunciation: 're-TSEPT',
    usage: 'Prescription médicale'
  },
  // Review from E15
  {
    id: 'well_review',
    luxembourgish: 'well',
    french: 'parce que',
    pronunciation: 'vel',
    usage: 'Révision E15'
  },
  {
    id: 'dann_review',
    luxembourgish: 'dann',
    french: 'alors/puis',
    pronunciation: 'dan',
    usage: 'Révision E15'
  }
];

const exercisesE16: Exercise[] = [
  {
    id: 'e16_ex1_audio_doctor_visit',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE16[6], // Rendez-vous
    question: 'Écoutez le dialogue chez le médecin et répondez : "Gutt Moien, ech hunn e Rendez-vous. Mäi Kapp deet wéi." Quel est le problème du patient ?',
    correctAnswer: 'Le patient a mal à la tête',
    options: [
      'Le patient a mal à la tête',
      'Le patient a mal au ventre',
      'Le patient cherche un médecin',
      'Le patient veut une ordonnance'
    ],
    context: 'Reconnaissance audio du dialogue médical. "Mäi Kapp deet wéi" = Ma tête fait mal'
  },
  {
    id: 'e16_ex2_pairing_possessives',
    type: 'word_pairing',
    vocabularyItem: vocabularyE16[0], // mäin
    question: 'Associez les possessifs avec les noms appropriés',
    correctAnswer: 'all_matched',
    context: 'Les possessifs s\'accordent avec le possesseur, pas avec l\'objet possédé',
    hint: 'Cliquez sur une expression luxembourgeoise puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'mai_kapp', left: 'mäi Kapp', right: 'ma tête' },
      { id: 'dai_rendez', left: 'däi Rendez-vous', right: 'ton rendez-vous' },
      { id: 'sai_medikament', left: 'säi Medikament', right: 'son médicament' },
      { id: 'main_dokter', left: 'mäin Dokter', right: 'mon médecin' },
      { id: 'dain_rezept', left: 'däin Rezept', right: 'ton ordonnance' }
    ]
  },
  {
    id: 'e16_ex3_pattern_adjective_position',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE16[3], // grouss
    question: 'Où se placent les adjectifs en luxembourgeois ?',
    correctAnswer: 'Les adjectifs précèdent le nom qu\'ils qualifient',
    options: [
      'Les adjectifs précèdent le nom qu\'ils qualifient',
      'Les adjectifs suivent le nom qu\'ils qualifient',
      'Les adjectifs peuvent se placer avant ou après',
      'Les adjectifs se placent toujours en fin de phrase'
    ],
    context: 'En luxembourgeois, les adjectifs se placent généralement AVANT le nom, comme en français. Exemples : "e grousse Mann" (un grand homme), "e kleng Kand" (un petit enfant)'
  },
  {
    id: 'e16_ex4_completion_my_child',
    type: 'phrase_completion',
    vocabularyItem: vocabularyE16[0], // mäin
    question: 'Complétez : "___ kleng Kand ass krank" (Mon petit enfant est malade)',
    correctAnswer: 'Mäi',
    expectedSentence: 'Mäi kleng Kand ass krank',
    options: ['Mäi', 'Däin', 'Säin', 'Grouss'],
    context: 'Mon petit enfant est malade. "mäi" = mon/ma, "kleng" = petit, "krank" = malade'
  },
  {
    id: 'e16_ex5_translation_headache',
    type: 'translation',
    vocabularyItem: vocabularyE16[7], // wéi doen
    question: 'Traduisez : "J\'ai mal à la tête"',
    correctAnswer: 'Mäi Kapp deet wéi',
    options: [
      'Mäi Kapp deet wéi',
      'Däi Kapp deet wéi',
      'Ech hunn Kapp',
      'Mäi Kapp ass grouss'
    ],
    hint: 'mäi = mon/ma, Kapp = tête, deet wéi = fait mal',
    context: 'Expression de la douleur : "deet wéi" = fait mal'
  },
  {
    id: 'e16_ex6_sentence_need_appointment',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE16[6], // Rendez-vous
    question: 'Construisez : "J\'ai besoin d\'un rendez-vous parce que je suis malade"',
    correctAnswer: 'Ech brauchen e Rendez-vous well ech krank sinn',
    expectedSentence: 'Ech brauchen e Rendez-vous well ech krank sinn',
    wordBank: ['Ech', 'brauchen', 'e', 'Rendez-vous', 'well', 'ech', 'krank', 'sinn', 'Medikament', 'Rezept'],
    hint: 'brauchen = avoir besoin, well = parce que, krank = malade',
    context: 'Demande de rendez-vous médical avec justification'
  },
  {
    id: 'e16_ex7_order_need_prescription',
    type: 'word_ordering',
    vocabularyItem: vocabularyE16[9], // Rezept
    question: 'Ordonnez : "J\'ai besoin d\'une ordonnance pour le médicament"',
    correctAnswer: 'Ech brauchen e Rezept fir Medikament',
    expectedSentence: 'Ech brauchen e Rezept fir Medikament',
    wordBank: ['Rezept', 'brauchen', 'Ech', 'e', 'well', 'Medikament', 'fir'],
    hint: 'brauchen = avoir besoin, fir = pour',
    context: 'Demande d\'ordonnance pour obtenir un médicament'
  },
  {
    id: 'e16_ex8_translation_doctor_gives',
    type: 'translation',
    vocabularyItem: vocabularyE16[9], // Rezept
    question: 'Traduisez : "Le médecin me donne une ordonnance"',
    correctAnswer: 'Den Dokter gëtt mir e Rezept',
    options: [
      'Den Dokter gëtt mir e Rezept',
      'Den Dokter huet mir e Rezept',
      'Den Dokter braucht mir e Rezept',
      'Ech gëtt den Dokter e Rezept'
    ],
    hint: 'Dokter = médecin, gëtt = donne, mir = me, Rezept = ordonnance',
    context: 'Le médecin donne une ordonnance au patient'
  },
  {
    id: 'e16_ex9_dialogue_medical_consultation',
    type: 'dialogue_completion',
    vocabularyItem: vocabularyE16[7], // wéi doen
    question: 'Complétez le dialogue médical : "Wat ass d\'Probleem?" (Quel est le problème ?) - "___"',
    correctAnswer: 'Mäi Kapp deet wéi',
    options: ['Mäi Kapp deet wéi', 'Ech brauchen Rezept', 'Ech sinn gutt', 'Däi Kapp deet wéi'],
    context: 'Contexte : Le patient explique qu\'il a mal à la tête. "Mäi Kapp deet wéi" = Ma tête fait mal'
  },
  {
    id: 'e16_ex10_sentence_describe_pain',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE16[3], // grouss
    question: 'Décrivez avec possessifs ET adjectifs : "Ma tête et ton pied font mal"',
    correctAnswer: 'Mäi Kapp an däin Fouss doen wéi',
    expectedSentence: 'Mäi Kapp an däin Fouss doen wéi',
    wordBank: ['Mäi', 'grouss', 'Kapp', 'an', 'däin', 'kleng', 'Fouss', 'doen', 'wéi', 'gutt'],
    hint: 'an = et, doen wéi = font mal, Fouss = pied',
    context: 'Phrase combinant possessifs et expression de la douleur'
  },
  {
    id: 'e16_ex11_speech_patient_role',
    type: 'speech_recognition',
    vocabularyItem: vocabularyE16[7], // wéi doen
    question: 'JEU DE RÔLE : Prononcez comme un patient chez le médecin : "Mäi Kapp deet wéi well ech krank sinn. Ech brauchen e Rezept fir e Medikament."',
    correctAnswer: 'Mäi Kapp deet wéi well ech krank sinn Ech brauchen e Rezept fir e Medikament',
    expectedSentence: 'Mäi Kapp deet wéi well ech krank sinn. Ech brauchen e Rezept fir e Medikament.',
    hint: 'Ma tête me fait mal parce que je suis malade. J\'ai besoin d\'une ordonnance pour un médicament.',
    context: 'Production orale complète d\'une consultation médicale'
  },
  {
    id: 'e16_ex12_audio_final_graduation',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE16[3], // grouss
    question: 'DÉFI FINAL A1 : Écoutez et identifiez TOUS les éléments : "Mäi grousse Jong hunn e Rendez-vous well säi kleng Fiiss deet wéi. Den Dokter gëtt him e gutt Medikament an e Rezept."',
    correctAnswer: 'Grand fils, rendez-vous, petit pied fait mal, bon médicament et ordonnance',
    options: [
      'Grand fils, rendez-vous, petit pied fait mal, bon médicament et ordonnance',
      'Petit fils, grande main fait mal, mauvais médicament',
      'Grand homme cherche rendez-vous pour médicament',
      'Petit enfant veut voir le docteur demain'
    ],
    context: 'FÉLICITATIONS ! Vous avez terminé le niveau A1 ! Vous pouvez maintenant comprendre et utiliser des expressions familières en luxembourgeois.'
  }
];

const UnitE16Data: LearningUnit = {
  id: 'unit_e16',
  title: 'E16 - Beim Dokter',
  description: 'UNITÉ FINALE A1 ! Maîtrisez les adjectifs, les possessifs et le vocabulaire médical. Félicitations, vous avez complété le niveau A1 !',
  level: 'A1',
  vocabulary: vocabularyE16,
  exercises: exercisesE16,
  targetScore: 80,
  estimatedTime: 8
};

export const learningUnitE16 = UnitE16Data;
export default UnitE16Data;
