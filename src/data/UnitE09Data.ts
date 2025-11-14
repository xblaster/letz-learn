import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes';

const vocabularyE09: VocabularyItem[] = [
  {
    id: 'dag',
    luxembourgish: 'Dag',
    french: 'jour',
    pronunciation: 'dahk',
    usage: 'Période de 24 heures'
  },
  {
    id: 'zait',
    luxembourgish: 'Zäit',
    french: 'temps/heure',
    pronunciation: 'tsait',
    usage: 'Notion temporelle'
  },
  {
    id: 'iessen',
    luxembourgish: 'iessen',
    french: 'manger/nourriture',
    pronunciation: 'EES-en',
    usage: "Verbe et nom pour l'alimentation"
  },
  {
    id: 'drenken',
    luxembourgish: 'drénken',
    french: 'boire/boisson',
    pronunciation: 'DRENK-en',
    usage: 'Verbe et nom pour les boissons'
  },
  {
    id: 'goen',
    luxembourgish: 'goen',
    french: 'aller',
    pronunciation: 'goo-en',
    usage: 'Verbe de mouvement'
  },
  {
    id: 'maachen',
    luxembourgish: 'maachen',
    french: 'faire',
    pronunciation: 'MAH-khen',
    usage: "Verbe d'action générale"
  },
  {
    id: 'wellen',
    luxembourgish: 'wëllen',
    french: 'vouloir',
    pronunciation: 'VIL-en',
    usage: 'Verbe modal exprimant le désir'
  },
  // Review from E08
  {
    id: 'schaffen_review',
    luxembourgish: 'schaffen',
    french: 'travailler',
    pronunciation: 'SHAH-fen',
    usage: 'Verbe pour le travail (révision)'
  },
  {
    id: 'hellefen_review',
    luxembourgish: 'hëllefen',
    french: 'aider',
    pronunciation: 'HEL-ef-en',
    usage: "Verbe pour l'assistance (révision)"
  }
];

const exercisesE09: Exercise[] = [
  // Exercise 1: Audio - Match audio to daily activities
  {
    id: 'e09_ex1_audio_iessen',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE09[2], // iessen
    question: 'Écoutez et choisissez la bonne activité quotidienne',
    correctAnswer: 'Ech iessen',
    options: ['Ech iessen', 'Ech drénken', 'Ech goen', 'Ech schaffen'],
    context: 'Reconnaissance audio: "Ech iessen" signifie "Je mange"'
  },
  {
    id: 'e09_ex2_audio_drenken',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE09[3], // drénken
    question: 'Écoutez et choisissez la bonne activité quotidienne',
    correctAnswer: 'Ech drénken',
    options: ['Ech iessen', 'Ech drénken', 'Ech maachen', 'Ech wëll'],
    context: 'Reconnaissance audio: "Ech drénken" signifie "Je bois"'
  },

  // Exercise 2: Word pairing Lux-French everyday words
  {
    id: 'e09_ex3_pairing_daily',
    type: 'word_pairing',
    vocabularyItem: vocabularyE09[0], // Dag
    question: 'Associez les mots luxembourgeois et français du quotidien',
    correctAnswer: 'all_matched',
    context: 'Ces mots sont essentiels pour parler de votre journée',
    hint: 'Cliquez sur un mot luxembourgeois puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'dag', left: 'Dag', right: 'jour' },
      { id: 'zait', left: 'Zäit', right: 'temps' },
      { id: 'iessen', left: 'iessen', right: 'manger' },
      { id: 'drenken', left: 'drénken', right: 'boire' }
    ]
  },

  // Exercise 3: Pattern - Identify food words
  {
    id: 'e09_ex4_pattern_food',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE09[2], // iessen
    question: 'Quels mots concernent l\'alimentation ?',
    correctAnswer: 'iessen et drénken',
    options: ['iessen et drénken', 'Zäit et goen', 'Dag et maachen', 'schaffen et wëllen'],
    context: '"iessen" (manger) et "drénken" (boire) concernent l\'alimentation'
  },
  {
    id: 'e09_ex5_pattern_time',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE09[0], // Dag
    question: 'Quels mots sont liés au temps ?',
    correctAnswer: 'Dag et Zäit',
    options: ['Dag et Zäit', 'iessen et goen', 'wëllen et schaffen', 'drénken et maachen'],
    context: '"Dag" (jour) et "Zäit" (temps/heure) sont liés au temps'
  },
  {
    id: 'e09_ex6_pattern_actions',
    type: 'pattern_recognition',
    vocabularyItem: vocabularyE09[4], // goen
    question: 'Quels sont les verbes d\'action ?',
    correctAnswer: 'goen, maachen, schaffen',
    options: ['goen, maachen, schaffen', 'Dag, Zäit, drénken', 'iessen, Dag, Zäit', 'wëllen uniquement'],
    context: '"goen" (aller), "maachen" (faire) et "schaffen" (travailler) sont des verbes d\'action'
  },

  // Exercise 4: Phrase completion - Ech wëll goen
  {
    id: 'e09_ex7_completion_wëll',
    type: 'phrase_completion',
    vocabularyItem: vocabularyE09[6], // wëllen
    question: 'Complétez : "Ech ___ goen" (Je veux aller)',
    correctAnswer: 'wëll',
    expectedSentence: 'Ech wëll goen',
    options: ['wëll', 'hunn', 'sinn', 'maachen'],
    context: '"Ech wëll goen" = "Je veux aller". "wëllen" est le verbe vouloir'
  },

  // Exercise 5: Translation - Je veux manger
  {
    id: 'e09_ex8_translation_want_eat',
    type: 'translation',
    vocabularyItem: vocabularyE09[6], // wëllen
    question: 'Traduisez en luxembourgeois : "Je veux manger"',
    correctAnswer: 'Ech wëll iessen',
    options: ['Ech wëll iessen', 'Ech hunn iessen', 'Ech sinn iessen', 'Ech maachen iessen'],
    context: '"Ech wëll iessen" utilise "wëllen" (vouloir) + infinitif "iessen" (manger)'
  },

  // Exercise 6: Sentence construction - Say what you want to do
  {
    id: 'e09_ex9_sentence_want_help',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE09[8], // hëllefen (review)
    question: 'Construisez : "Je veux aider"',
    correctAnswer: 'Ech wëll hëllefen',
    expectedSentence: 'Ech wëll hëllefen',
    wordBank: ['Ech', 'wëll', 'hëllefen', 'schaffen', 'goen', 'hunn'],
    hint: 'Structure : sujet + wëllen + infinitif',
    context: '"Ech wëll hëllefen" = "Je veux aider". Structure : sujet + wëllen + infinitif'
  },

  // Exercise 7: Word ordering - drénken sentence
  {
    id: 'e09_ex10_order_drink_something',
    type: 'word_ordering',
    vocabularyItem: vocabularyE09[3], // drénken
    question: 'Mettez dans l\'ordre : "Je veux boire quelque chose"',
    correctAnswer: 'Ech wëll eppes drénken',
    expectedSentence: 'Ech wëll eppes drénken',
    wordBank: ['drénken', 'wëll', 'eppes', 'Ech', 'hunn', 'iessen'],
    hint: '"eppes" = quelque chose',
    context: '"Ech wëll eppes drénken" = "Je veux boire quelque chose". "eppes" = quelque chose'
  },

  // Exercise 8: Translation - What do you want to do today?
  {
    id: 'e09_ex11_translation_today',
    type: 'translation',
    vocabularyItem: vocabularyE09[5], // maachen
    question: 'Traduisez en luxembourgeois : "Qu\'est-ce que tu veux faire aujourd\'hui ?"',
    correctAnswer: 'Wat wëlls du haut maachen?',
    options: [
      'Wat wëlls du haut maachen?',
      'Wat maachs du haut?',
      'Wéi geet et haut?',
      'Wat ass haut?'
    ],
    context: '"Wat wëlls du haut maachen?" utilise "wëllen" (vouloir) et "maachen" (faire). "haut" = aujourd\'hui'
  },

  // Exercise 9: Dialogue - Daily routine
  {
    id: 'e09_ex12_dialogue_routine',
    type: 'dialogue_completion',
    vocabularyItem: vocabularyE09[7], // schaffen (review)
    question: 'Complétez le dialogue sur la routine quotidienne : "Wat maachs du normalerweis?" - "___ schaffen an duerno iessen."',
    correctAnswer: 'Ech',
    options: ['Ech', 'Du', 'Hien', 'Si'],
    context: '"Ech schaffen" = "Je travaille". "normalerweis" = normalement, "duerno" = après'
  },

  // Exercise 10: Sentence construction - Describe your typical day
  {
    id: 'e09_ex13_sentence_today_work',
    type: 'sentence_construction',
    vocabularyItem: vocabularyE09[7], // schaffen (review)
    question: 'Construisez : "Aujourd\'hui je veux travailler et manger"',
    correctAnswer: 'Haut wëll ech schaffen an iessen',
    expectedSentence: 'Haut wëll ech schaffen an iessen',
    wordBank: ['Haut', 'wëll', 'ech', 'schaffen', 'an', 'iessen', 'goen', 'Zäit', 'Dag'],
    hint: '"an" = et',
    context: '"Haut wëll ech schaffen an iessen" = "Aujourd\'hui je veux travailler et manger". "an" = et'
  },

  // Exercise 11: Speech recognition - Daily routine sentence
  {
    id: 'e09_ex14_speech_today',
    type: 'speech_recognition',
    vocabularyItem: vocabularyE09[5], // maachen
    question: 'Prononcez : "Ech wëll haut eppes maachen"',
    correctAnswer: 'Ech wëll haut eppes maachen',
    expectedSentence: 'Ech wëll haut eppes maachen',
    hint: 'Cette phrase signifie "Je veux faire quelque chose aujourd\'hui"',
    context: 'Production orale: "Ech wëll haut eppes maachen" = "Je veux faire quelque chose aujourd\'hui"'
  },

  // Exercise 12: Audio - Identify activities at different times
  {
    id: 'e09_ex15_audio_work_day',
    type: 'audio_recognition',
    vocabularyItem: vocabularyE09[0], // Dag
    question: 'Écoutez et identifiez l\'activité mentionnée',
    correctAnswer: 'Den Dag goen ech schaffen',
    options: [
      'Den Dag goen ech schaffen',
      'Den Dag wëll ech iessen',
      'Den Dag maachen ech Zäit',
      'Den Dag hëllefen ech'
    ],
    context: 'Reconnaissance audio: "Den Dag goen ech schaffen" = "Pendant la journée je vais travailler"'
  }
];

const UnitE09Data: LearningUnit = {
  id: 'unit_e09',
  title: 'E09 - Vocabulaire quotidien',
  description: "Les mots essentiels du quotidien : manger, boire, aller, faire. Parlez de vos activités de tous les jours.",
  level: 'A1',
  vocabulary: vocabularyE09,
  exercises: exercisesE09,
  targetScore: 80,
  estimatedTime: 6
};

export const learningUnitE09 = UnitE09Data;
export default UnitE09Data;
