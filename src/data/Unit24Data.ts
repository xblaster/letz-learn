import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U8 : Services publics

export const unit24Vocabulary: VocabularyItem[] = [
  {
    id: 's3u8_gemeng',
    luxembourgish: 'Gemeng',
    french: 'commune',
    pronunciation: 'ge-MENG',
    usage: 'Identifier l’administration locale.'
  },
  {
    id: 's3u8_formulaire',
    luxembourgish: 'Formulaire',
    french: 'formulaire',
    pronunciation: 'for-mu-LAIR',
    usage: 'Compléter un formulaire administratif.'
  },
  {
    id: 's3u8_dokumenter',
    luxembourgish: 'Dokumenter',
    french: 'documents',
    pronunciation: 'do-ku-MEN-ter',
    usage: 'Rassembler les pièces justificatives.'
  },
  {
    id: 's3u8_rendezvous',
    luxembourgish: 'Rendez-vous fixé',
    french: 'rendez-vous fixé',
    pronunciation: 'ron-day-VOO fik-SAY',
    usage: 'Respecter un rendez-vous administratif.'
  },
  {
    id: 's3u8_certificat',
    luxembourgish: 'Certificat',
    french: 'certificat',
    pronunciation: 'ser-ti-fi-KA',
    usage: 'Demander un certificat officiel.'
  },
  {
    id: 's3u8_meldezettel',
    luxembourgish: 'Meldezettel',
    french: 'certificat de résidence',
    pronunciation: 'MEL-de-tset-tel',
    usage: 'Document clé pour s’inscrire à la commune.'
  },
  {
    id: 's3u8_annexe',
    luxembourgish: 'Annexe',
    french: 'annexe',
    pronunciation: 'an-NEKS',
    usage: 'Ajouter des pièces complémentaires.'
  },
  {
    id: 's3u8_nummer',
    luxembourgish: 'Nummer',
    french: 'numéro',
    pronunciation: 'NU-mmer',
    usage: 'Prendre un numéro d’attente.'
  },
  {
    id: 's3u8_schalter',
    luxembourgish: 'Schalter',
    french: 'guichet',
    pronunciation: 'SHAL-ter',
    usage: 'Se présenter au guichet approprié.'
  },
  {
    id: 's3u8_empfang',
    luxembourgish: 'Empfang',
    french: 'accueil',
    pronunciation: 'EM-pfank',
    usage: 'Demander de l’aide à l’accueil.'
  }
]

export const generateUnit24Exercises = (): Exercise[] => [
  {
    id: 's3u8_reactivation_identite',
    type: 'dialogue_completion',
    vocabularyItem: unit24Vocabulary[1],
    question: 'Complétez : « Ech fëllen de ___ fir den Dossier aus. »',
    options: ['Formulaire', 'Certificat', 'Annexe'],
    correctAnswer: 'Formulaire',
    context: 'Réactiver la complétion de formulaires administratifs.'
  },
  {
    id: 's3u8_documents',
    type: 'translation',
    vocabularyItem: unit24Vocabulary[2],
    question: 'Quel mot désigne les documents à fournir ?',
    options: ['Dokumenter', 'Schalter', 'Empfang'],
    correctAnswer: 'Dokumenter',
    context: 'Préparer la liste des pièces justificatives.'
  },
  {
    id: 's3u8_rdv',
    type: 'pattern_recognition',
    vocabularyItem: unit24Vocabulary[3],
    question: 'Quelle phrase confirme le rendez-vous ?',
    options: [
      'Ech hunn den Rendez-vous fixé muer um 10 Auer.',
      'Ech ginn an d’Spuerkeess.',
      'Ech reservéieren en Ticket.'
    ],
    correctAnswer: 'Ech hunn den Rendez-vous fixé muer um 10 Auer.',
    context: 'Respecter les horaires de la commune.'
  },
  {
    id: 's3u8_certificat',
    type: 'dialogue_completion',
    vocabularyItem: unit24Vocabulary[4],
    question: 'Choisissez la phrase pour demander un certificat :',
    options: [
      'Ech géif gären en Certificat fir meng Dossier kréien.',
      'Ech maachen eng Invitatioun fir muer.',
      'Ech kafen eng Broschür.'
    ],
    correctAnswer: 'Ech géif gären en Certificat fir meng Dossier kréien.',
    context: 'Utiliser le conditionnel de politesse.'
  },
  {
    id: 's3u8_meldezettel',
    type: 'phrase_completion',
    vocabularyItem: unit24Vocabulary[5],
    question: 'Complétez : « De ___ ass néideg fir d’Aschreiwung. »',
    options: ['Meldezettel', 'Nummer', 'Empfang'],
    correctAnswer: 'Meldezettel',
    context: 'Connaître les documents incontournables.'
  },
  {
    id: 's3u8_guichet',
    type: 'dialogue_completion',
    vocabularyItem: unit24Vocabulary[8],
    question: 'Quelle phrase indique à quel guichet aller ?',
    options: [
      'De Schalter B ass fir d’Meldezettelen.',
      'D’Annexe ass an der Broschür.',
      'D’Nummer ass 25.'
    ],
    correctAnswer: 'De Schalter B ass fir d’Meldezettelen.',
    context: 'S’orienter dans l’administration.'
  },
  {
    id: 's3u8_accueil',
    type: 'sentence_construction',
    vocabularyItem: unit24Vocabulary[9],
    question: 'Assemblez la phrase pour demander de l’aide à l’accueil.',
    wordBank: ['Gudde', 'Moien,', 'ech', 'bräicht', 'Hëllef', 'um', 'Empfang.'],
    correctAnswer: 'Gudde Moien, ech bräicht Hëllef um Empfang.',
    expectedSentence: 'Gudde Moien, ech bräicht Hëllef um Empfang.',
    context: 'Encourager une attitude respectueuse et confiante.'
  }
]

export const learningUnit24: LearningUnit = {
  id: 'S3U8',
  title: 'Services publics',
  description:
    'Je peux compléter un dossier administratif, demander les bons documents et me repérer au guichet communal.',
  level: 'A2',
  vocabulary: unit24Vocabulary,
  exercises: generateUnit24Exercises(),
  targetScore: 88,
  estimatedTime: 11
}
