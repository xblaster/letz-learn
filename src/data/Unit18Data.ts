import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U2 : Santé

export const unit18Vocabulary: VocabularyItem[] = [
  {
    id: 's3u2_rendezvous',
    luxembourgish: 'Rendez-vous',
    french: 'rendez-vous',
    pronunciation: 'ron-day-VOO',
    usage: 'Prendre rendez-vous chez le médecin.'
  },
  {
    id: 's3u2_rezept',
    luxembourgish: 'Rezept',
    french: 'ordonnance',
    pronunciation: 're-TSEPT',
    usage: 'Demander ou présenter une prescription médicale.'
  },
  {
    id: 's3u2_medikament',
    luxembourgish: 'Medikament',
    french: 'médicament',
    pronunciation: 'me-di-ka-MENT',
    usage: 'Parler d’un traitement à la pharmacie.'
  },
  {
    id: 's3u2_versecherung',
    luxembourgish: 'Versécherung',
    french: 'assurance',
    pronunciation: 'ver-SAY-scher-ung',
    usage: 'Présenter sa carte d’assurance maladie.'
  },
  {
    id: 's3u2_symptomer',
    luxembourgish: 'Symptomer',
    french: 'symptômes',
    pronunciation: 'SIMP-to-mer',
    usage: 'Décrire ce que l’on ressent au médecin.'
  },
  {
    id: 's3u2_peng',
    luxembourgish: 'Péng',
    french: 'douleur',
    pronunciation: 'PENG',
    usage: 'Localiser et qualifier une douleur.'
  },
  {
    id: 's3u2_gesondheetskaart',
    luxembourgish: 'Gesondheetskaart',
    french: 'carte de santé',
    pronunciation: 'ge-ZOND-heets-kaart',
    usage: 'Présenter sa carte CNS à l’accueil.'
  },
  {
    id: 's3u2_thermometer',
    luxembourgish: 'Thermometer',
    french: 'thermomètre',
    pronunciation: 'TER-mo-may-ter',
    usage: 'Discuter de la fièvre mesurée.'
  },
  {
    id: 's3u2_urgence',
    luxembourgish: 'Urgence',
    french: 'urgence',
    pronunciation: 'ur-JANS',
    usage: 'Identifier si la situation est urgente.'
  },
  {
    id: 's3u2_antibiotikum',
    luxembourgish: 'Antibiotikum',
    french: 'antibiotique',
    pronunciation: 'an-ti-bio-TI-kum',
    usage: 'Parler d’un traitement prescrit.'
  }
]

export const generateUnit18Exercises = (): Exercise[] => [
  {
    id: 's3u2_reactivation_politesse',
    type: 'dialogue_completion',
    vocabularyItem: unit18Vocabulary[0],
    question: 'Complétez : « Ech hätt gär e ___ fir dësen Donneschdeg. »',
    options: ['Rendez-vous', 'Thermometer', 'Péng'],
    correctAnswer: 'Rendez-vous',
    context: 'Réactiver la prise de rendez-vous polie.'
  },
  {
    id: 's3u2_decrire_symptomes',
    type: 'translation',
    vocabularyItem: unit18Vocabulary[4],
    question: 'Quel mot désigne les symptômes que vous décrivez ?',
    options: ['Symptomer', 'Urgence', 'Versécherung'],
    correctAnswer: 'Symptomer',
    context: 'Préparer la discussion avec le médecin.'
  },
  {
    id: 's3u2_douleur',
    type: 'pattern_recognition',
    vocabularyItem: unit18Vocabulary[5],
    question: 'Quelle phrase exprime une douleur claire ?',
    options: [
      'Ech hunn Péng am Réck zënter gëschter.',
      'Ech maachen eng Invitatioun fir muer.',
      'Ech sichen eng Wunneng am Quartier.'
    ],
    correctAnswer: 'Ech hunn Péng am Réck zënter gëschter.',
    context: 'Utiliser la structure « ech hunn Péng » recommandée.'
  },
  {
    id: 's3u2_assurance',
    type: 'dialogue_completion',
    vocabularyItem: unit18Vocabulary[3],
    question: 'Choisissez la phrase pour présenter votre assurance :',
    options: [
      'Hei ass meng Versécherung, merci.',
      'Ech hunn eng Invitatioun haut.',
      'Ech kommen direkt zeréck.'
    ],
    correctAnswer: 'Hei ass meng Versécherung, merci.',
    context: 'Respecter les procédures administratives en cabinet.'
  },
  {
    id: 's3u2_ordonnance',
    type: 'phrase_completion',
    vocabularyItem: unit18Vocabulary[1],
    question: 'Complétez : « De Dokter stellt mir e ___ aus. »',
    options: ['Rezept', 'Antibiotikum', 'Thermometer'],
    correctAnswer: 'Rezept',
    context: 'Préparer la visite à la pharmacie après la consultation.'
  },
  {
    id: 's3u2_traitement',
    type: 'dialogue_completion',
    vocabularyItem: unit18Vocabulary[9],
    question: 'Quelle phrase confirme que vous prenez le traitement prescrit ?',
    options: [
      'Ech huelen d’Antibiotikum all Moien.',
      'Ech fueren an de Quartier.',
      'Ech reservéieren e Konzert.'
    ],
    correctAnswer: 'Ech huelen d’Antibiotikum all Moien.',
    context: 'Montrer son engagement dans le suivi médical.'
  },
  {
    id: 's3u2_urgence',
    type: 'sentence_construction',
    vocabularyItem: unit18Vocabulary[8],
    question: 'Assemblez la phrase pour orienter vers l’urgence.',
    wordBank: ['Et', 'ass', 'eng', 'Urgence,', 'rufft', '112!'],
    correctAnswer: 'Et ass eng Urgence, rufft 112!',
    expectedSentence: 'Et ass eng Urgence, rufft 112!',
    context: 'Identifier rapidement les situations critiques.'
  }
]

export const learningUnit18: LearningUnit = {
  id: 'S3U2',
  title: 'Santé',
  description:
    'Je peux décrire mes symptômes, présenter mes documents de santé et préparer une consultation médicale efficace.',
  level: 'A2',
  vocabulary: unit18Vocabulary,
  exercises: generateUnit18Exercises(),
  targetScore: 88,
  estimatedTime: 10
}
