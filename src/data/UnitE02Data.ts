// Données pour l'Unité E02 : "Sech virstellen" - Se présenter

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E02 - Se présenter avec nom et origine
export const unitE02Vocabulary: VocabularyItem[] = [
  // Vocabulaire nouveau (7 items)
  {
    id: 'ech_sinn',
    luxembourgish: 'Ech sinn',
    french: 'Je suis',
    pronunciation: 'esh zin',
    usage: 'Structure de base pour se présenter'
  },
  {
    id: 'main_numm_ass',
    luxembourgish: 'Mäin Numm ass',
    french: 'Mon nom est',
    pronunciation: 'mine num as',
    usage: 'Donner son nom'
  },
  {
    id: 'ech_kommen_aus',
    luxembourgish: 'Ech kommen aus',
    french: 'Je viens de',
    pronunciation: 'esh KO-men ows',
    usage: 'Indiquer son origine'
  },
  {
    id: 'frankraich',
    luxembourgish: 'Frankräich',
    french: 'France',
    pronunciation: 'frank-RAISH',
    usage: 'Pays voisin du Luxembourg'
  },
  {
    id: 'letzebuerg',
    luxembourgish: 'Lëtzebuerg',
    french: 'Luxembourg',
    pronunciation: 'LUT-ze-buerg',
    usage: 'Le Grand-Duché'
  },
  {
    id: 'sprooch',
    luxembourgish: 'Sprooch',
    french: 'Langue',
    pronunciation: 'shprookh',
    usage: 'Langue parlée'
  },
  {
    id: 'letzebuergesch',
    luxembourgish: 'lëtzebuergesch',
    french: 'luxembourgeois (la langue)',
    pronunciation: 'LUT-ze-buerg-esh',
    usage: 'La langue nationale'
  },
  // Vocabulaire de révision de E01
  {
    id: 'moien_review',
    luxembourgish: 'Moien',
    french: 'Bonjour',
    pronunciation: 'MOY-en',
    usage: 'Salutation universelle (révision de unit_e01)'
  },
  {
    id: 'jo_review',
    luxembourgish: 'Jo',
    french: 'Oui',
    pronunciation: 'YO',
    usage: 'Accord ou confirmation (révision de unit_e01)'
  }
]

// Générateur d'exercices pour l'Unité E02
export const generateUnitE02Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // EXERCICE 1 : Reconnaissance audio "Ech sinn"
  // =============================================================================
  exercises.push({
    id: 'audio_ech_sinn',
    type: 'audio_recognition',
    vocabularyItem: unitE02Vocabulary[0], // Ech sinn
    question: 'Que signifie "Ech sinn" ?',
    options: ['Je suis', 'Mon nom', 'Je viens'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Je suis',
    context: 'Reconnaissance de la structure de base pour se présenter'
  })

  // =============================================================================
  // EXERCICE 2 : Appariement de mots - Vocabulaire de présentation
  // =============================================================================
  exercises.push({
    id: 'word_pairing_intro',
    type: 'word_pairing',
    vocabularyItem: unitE02Vocabulary[0],
    question: 'Associez chaque expression luxembourgeoise à sa traduction française.',
    context: 'Maîtrisez le vocabulaire essentiel pour vous présenter.',
    correctAnswer: 'all_matched',
    hint: 'Cliquez sur une expression luxembourgeoise puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'ech_sinn', left: 'Ech sinn', right: 'Je suis' },
      { id: 'numm', left: 'Numm', right: 'Nom' },
      { id: 'kommen', left: 'kommen', right: 'venir' },
      { id: 'frankraich', left: 'Frankräich', right: 'France' },
      { id: 'letzebuerg', left: 'Lëtzebuerg', right: 'Luxembourg' }
    ]
  })

  // =============================================================================
  // EXERCICE 3 : Reconnaissance de motif - Identifier le verbe
  // =============================================================================
  exercises.push({
    id: 'pattern_verb_sinn',
    type: 'pattern_recognition',
    vocabularyItem: unitE02Vocabulary[0],
    question: 'Dans la phrase "Ech sinn Marie", quel mot est le verbe ?',
    options: ['sinn', 'Ech', 'Marie'].sort(() => Math.random() - 0.5),
    correctAnswer: 'sinn',
    context: 'Reconnaissance du verbe "être" dans une présentation'
  })

  // =============================================================================
  // EXERCICE 4 : Complétion de phrase - Nom
  // =============================================================================
  exercises.push({
    id: 'completion_name',
    type: 'phrase_completion',
    vocabularyItem: unitE02Vocabulary[1], // Mäin Numm ass
    question: 'Complétez : "Mäin ___ ass Sophie"',
    options: ['Numm', 'Sprooch', 'Land'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Numm',
    expectedSentence: 'Mäin Numm ass Sophie',
    context: 'Donner son nom en luxembourgeois'
  })

  // =============================================================================
  // EXERCICE 5 : Traduction - "Je viens de France"
  // =============================================================================
  exercises.push({
    id: 'translation_je_viens',
    type: 'translation',
    vocabularyItem: unitE02Vocabulary[2], // Ech kommen aus
    question: 'Traduisez en luxembourgeois : "Je viens de France"',
    options: [
      'Ech kommen aus Frankräich',
      'Ech sinn aus Frankräich',
      'Mäin Numm ass Frankräich'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech kommen aus Frankräich',
    context: 'Indiquer son pays d\'origine'
  })

  // =============================================================================
  // EXERCICE 6 : Construction de phrase - Introduction simple
  // =============================================================================
  exercises.push({
    id: 'sentence_intro_complete',
    type: 'sentence_construction',
    vocabularyItem: unitE02Vocabulary[0],
    question: 'Construisez la phrase : "Je suis Marie"',
    wordBank: ['Ech', 'sinn', 'Marie', 'Numm'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sinn Marie',
    expectedSentence: 'Ech sinn Marie',
    hint: 'Structure : Pronom + verbe + prénom',
    context: 'Se présenter avec son prénom'
  })

  // =============================================================================
  // EXERCICE 7 : Ordre des mots - Origine
  // =============================================================================
  exercises.push({
    id: 'word_order_origin',
    type: 'word_ordering',
    vocabularyItem: unitE02Vocabulary[2],
    question: 'Remettez ces mots dans l\'ordre pour dire "Je viens de France"',
    wordBank: ['aus', 'Ech', 'Frankräich', 'kommen'],
    correctAnswer: 'Ech kommen aus Frankräich',
    expectedSentence: 'Ech kommen aus Frankräich',
    hint: 'L\'ordre : Pronom + verbe + préposition + pays',
    context: 'Indiquer son origine géographique'
  })

  // =============================================================================
  // EXERCICE 8 : Traduction - "Je viens du Luxembourg"
  // =============================================================================
  exercises.push({
    id: 'translation_from_lux',
    type: 'translation',
    vocabularyItem: unitE02Vocabulary[4], // Lëtzebuerg
    question: 'Traduisez en luxembourgeois : "Je viens du Luxembourg"',
    options: [
      'Ech kommen aus Lëtzebuerg',
      'Ech sinn Lëtzebuerg',
      'Mäin Sprooch ass Lëtzebuerg'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech kommen aus Lëtzebuerg',
    context: 'Indiquer une origine luxembourgeoise'
  })

  // =============================================================================
  // EXERCICE 9 : Dialogue - Première rencontre
  // =============================================================================
  exercises.push({
    id: 'dialogue_meeting',
    type: 'dialogue_completion',
    vocabularyItem: unitE02Vocabulary[0],
    question: 'Vous rencontrez quelqu\'un pour la première fois. Comment vous présentez-vous ?',
    options: [
      'Moien, ech sinn Thomas',
      'Äddi, ech sinn Thomas',
      'Merci, ech sinn Thomas'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien, ech sinn Thomas',
    context: 'Contexte : Première rencontre dans un cadre informel'
  })

  // =============================================================================
  // EXERCICE 10 : Construction complète - Introduction avec origine
  // =============================================================================
  exercises.push({
    id: 'sentence_full_intro',
    type: 'sentence_construction',
    vocabularyItem: unitE02Vocabulary[2],
    question: 'Construisez une présentation complète : "Je suis Sophie, je viens de France"',
    wordBank: [
      'Ech', 'sinn', 'Sophie', 'ech', 'kommen', 'aus', 'Frankräich'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sinn Sophie ech kommen aus Frankräich',
    expectedSentence: 'Ech sinn Sophie ech kommen aus Frankräich',
    hint: 'Deux parties : "Ech sinn [nom]" + "ech kommen aus [pays]"',
    context: 'Présentation complète avec nom et origine'
  })

  // =============================================================================
  // EXERCICE 11 : Reconnaissance vocale - Introduction complète
  // =============================================================================
  exercises.push({
    id: 'speech_introduction',
    type: 'speech_recognition',
    vocabularyItem: unitE02Vocabulary[0],
    question: 'Prononcez une présentation complète avec votre prénom : "Moien, ech sinn [votre prénom], ech kommen aus Frankräich"',
    correctAnswer: 'Moien ech sinn',
    expectedSentence: 'Moien ech sinn ech kommen aus Frankräich',
    hint: 'Prononcez clairement : MOY-en, esh zin [prénom], esh KO-men ows frank-RAISH',
    context: 'Production orale complète d\'une présentation personnelle'
  })

  return exercises
}

// Définition de l'Unité E02 complète
export const learningUnitE02: LearningUnit = {
  id: 'unit_e02',
  title: 'E02 - Sech virstellen',
  description: 'Apprenez à vous présenter : dire votre nom, votre origine et votre nationalité en luxembourgeois.',
  level: 'A1',
  vocabulary: unitE02Vocabulary,
  exercises: generateUnitE02Exercises(),
  targetScore: 80,
  estimatedTime: 6
}
