import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U5 : Médias et information

export const unit29Vocabulary: VocabularyItem[] = [
  {
    id: 's4u5_zeitung',
    luxembourgish: 'Zeitung',
    french: 'journal',
    pronunciation: 'TSAI-toung',
    usage: 'Support papier pour suivre l’actualité.'
  },
  {
    id: 's4u5_noriichten',
    luxembourgish: 'Noriichten',
    french: 'nouvelles',
    pronunciation: 'NO-reecht-en',
    usage: 'Terminer ou introduire un bulletin d’information.'
  },
  {
    id: 's4u5_radiosender',
    luxembourgish: 'Radiosender',
    french: 'station de radio',
    pronunciation: 'RA-dee-oh-zender',
    usage: 'Recommander une station luxembourgeoise.'
  },
  {
    id: 's4u5_onlineportal',
    luxembourgish: 'Onlineportal',
    french: 'portail en ligne',
    pronunciation: 'ON-line-portal',
    usage: 'Consulter les actualités numériques.'
  },
  {
    id: 's4u5_editorial',
    luxembourgish: 'Editorial',
    french: 'éditorial',
    pronunciation: 'e-di-to-REE-al',
    usage: 'Analyser une opinion publiée.'
  },
  {
    id: 's4u5_quelle',
    luxembourgish: 'Quelle',
    french: 'source',
    pronunciation: 'KWEL-le',
    usage: 'Citer la source d’une information.'
  },
  {
    id: 's4u5_rubrik',
    luxembourgish: 'Rubrik',
    french: 'rubrique',
    pronunciation: 'RU-brik',
    usage: 'Identifier la section thématique du média.'
  },
  {
    id: 's4u5_podcast',
    luxembourgish: 'Podcast',
    french: 'podcast',
    pronunciation: 'POD-kast',
    usage: 'Partager un contenu audio à la demande.'
  },
  {
    id: 's4u5_kommentar',
    luxembourgish: 'Kommentar',
    french: 'commentaire',
    pronunciation: 'kom-man-TAR',
    usage: 'Rédiger ou analyser un commentaire en ligne.'
  },
  {
    id: 's4u5_faktcheck',
    luxembourgish: 'Faktcheck',
    french: 'vérification des faits',
    pronunciation: 'FAKT-check',
    usage: 'Vérifier la fiabilité d’une information.'
  }
]

export const generateUnit29Exercises = (): Exercise[] => [
  {
    id: 's4u5_reactivation_bulletin',
    type: 'dialogue_completion',
    vocabularyItem: unit29Vocabulary[1],
    question: 'Complétez : « Ech lauschteren all Moien d’___ um Radio 100,7. »',
    options: ['Noriichten', 'Podcast', 'Rubrik'],
    correctAnswer: 'Noriichten',
    context: 'Réactiver le suivi quotidien de l’actualité.'
  },
  {
    id: 's4u5_source',
    type: 'translation',
    vocabularyItem: unit29Vocabulary[5],
    question: 'Quel mot invite à citer la source ?',
    options: ['Quelle', 'Onlineportal', 'Editorial'],
    correctAnswer: 'Quelle',
    context: 'Encourager l’esprit critique face aux informations.'
  },
  {
    id: 's4u5_radio',
    type: 'pattern_recognition',
    vocabularyItem: unit29Vocabulary[2],
    question: 'Quelle phrase recommande une station de radio ?',
    options: [
      'De Radiosender 100,7 bitt Emissiounen an dräi Sproochen.',
      'D’Zeitung ass al.',
      'De Podcast ass laang.'
    ],
    correctAnswer: 'De Radiosender 100,7 bitt Emissiounen an dräi Sproochen.',
    context: 'Valoriser la pluralité linguistique des médias.'
  },
  {
    id: 's4u5_editorial',
    type: 'dialogue_completion',
    vocabularyItem: unit29Vocabulary[4],
    question: 'Choisissez la phrase pour parler d’un éditorial :',
    options: [
      'Den Editorial erkläert firwat d’Politik sech ännert.',
      'De Podcast spillt Musek.',
      'D’Rubrik ass e Rezept.'
    ],
    correctAnswer: 'Den Editorial erkläert firwat d’Politik sech ännert.',
    context: 'Comprendre la différence entre faits et opinions.'
  },
  {
    id: 's4u5_factcheck',
    type: 'phrase_completion',
    vocabularyItem: unit29Vocabulary[9],
    question: 'Complétez : « Mir maachen e ___ ier mir d’Noriicht deelen. »',
    options: ['Faktcheck', 'Kommentar', 'Rubrik'],
    correctAnswer: 'Faktcheck',
    context: 'Renforcer la vérification des informations partagées.'
  },
  {
    id: 's4u5_commentaire',
    type: 'dialogue_completion',
    vocabularyItem: unit29Vocabulary[8],
    question: 'Quelle phrase invite à un commentaire responsable ?',
    options: [
      'Schreif e respektvollen Kommentar ënner dem Artikel.',
      'Schreif eng Rubrik.',
      'Schreif e Faktcheck.'
    ],
    correctAnswer: 'Schreif e respektvollen Kommentar ënner dem Artikel.',
    context: 'Favoriser la discussion respectueuse en ligne.'
  },
  {
    id: 's4u5_revue',
    type: 'sentence_construction',
    vocabularyItem: unit29Vocabulary[7],
    question: 'Assemblez la phrase de recommandation média.',
    wordBank: ['Ech', 'lauschteren', 'de', 'Podcast', 'fir', 'eng', 'Revue', 'de', 'Presse.'],
    correctAnswer: 'Ech lauschteren de Podcast fir eng Revue de Presse.',
    expectedSentence: 'Ech lauschteren de Podcast fir eng Revue de Presse.',
    context: 'Préparer une revue de presse bilingue.'
  }
]

export const learningUnit29: LearningUnit = {
  id: 'S4U5',
  title: 'Médias et information',
  description:
    'Je peux comparer différentes sources, vérifier les faits et recommander des médias fiables aux apprenant·e·s.',
  level: 'A2+',
  vocabulary: unit29Vocabulary,
  exercises: generateUnit29Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
