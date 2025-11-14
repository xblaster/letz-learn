// Données pour l'Unité E08 : "Am Pfleegeberäich" - Dans le secteur des soins / In the Healthcare Sector

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E08 - Vocabulaire professionnel pour le secteur des soins
export const unitE08Vocabulary: VocabularyItem[] = [
  {
    id: 'dokter',
    luxembourgish: 'Dokter',
    french: 'médecin/docteur',
    pronunciation: 'DOK-ter',
    usage: 'Professionnel de santé qui soigne les patients'
  },
  {
    id: 'patient',
    luxembourgish: 'Patient',
    french: 'patient',
    pronunciation: 'pa-tee-ENT',
    usage: 'Personne qui reçoit des soins médicaux'
  },
  {
    id: 'krankenhaus',
    luxembourgish: 'Krankenhaus',
    french: 'hôpital',
    pronunciation: 'KRANK-en-house',
    usage: 'Établissement de soins médicaux'
  },
  {
    id: 'fleegeberaich',
    luxembourgish: 'Fleegeberäich',
    french: 'secteur des soins',
    pronunciation: 'FLAY-ge-ber-aish',
    usage: 'Domaine professionnel des soins de santé'
  },
  {
    id: 'hellefen',
    luxembourgish: 'hëllefen',
    french: 'aider',
    pronunciation: 'HEL-ef-en',
    usage: 'Verbe : apporter de l\'aide'
  },
  {
    id: 'gesondheet',
    luxembourgish: 'Gesondheet',
    french: 'santé',
    pronunciation: 'ge-ZOND-hate',
    usage: 'État de bien-être physique et mental'
  },
  {
    id: 'schaffen',
    luxembourgish: 'schaffen',
    french: 'travailler',
    pronunciation: 'SHAF-en',
    usage: 'Verbe : exercer une activité professionnelle'
  },
  // Vocabulaire de révision de E06
  {
    id: 'wunnen',
    luxembourgish: 'wunnen',
    french: 'habiter',
    pronunciation: 'VOON-en',
    usage: 'Verbe : résider, habiter quelque part'
  },
  {
    id: 'haus',
    luxembourgish: 'Haus',
    french: 'maison',
    pronunciation: 'house',
    usage: 'Bâtiment d\'habitation'
  }
]

// Générateur d'exercices avec progression scaffoldée pour le secteur des soins
export const generateUnitE08Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : RECONNAISSANCE (Recognition) - 2 exercices
  // =============================================================================

  // 1.1 Association de paires de mots : vocabulaire médical Lux-French
  exercises.push({
    id: 'word_pairing_healthcare',
    type: 'word_pairing',
    vocabularyItem: unitE08Vocabulary[0], // Dokter
    question: 'Associez chaque mot luxembourgeois du secteur des soins à sa traduction française.',
    context: 'Vocabulaire essentiel pour les professionnels de santé au Luxembourg. De nombreux travailleurs transfrontaliers (France, Belgique, Allemagne) exercent dans le secteur de la santé luxembourgeois.',
    correctAnswer: 'all_matched',
    hint: 'Cliquez sur un mot luxembourgeois puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'dokter', left: 'Dokter', right: 'médecin' },
      { id: 'patient', left: 'Patient', right: 'patient' },
      { id: 'krankenhaus', left: 'Krankenhaus', right: 'hôpital' },
      { id: 'gesondheet', left: 'Gesondheet', right: 'santé' }
    ]
  })

  // 1.2 Reconnaissance audio : lieu de travail (Krankenhaus)
  exercises.push({
    id: 'audio_workplace',
    type: 'audio_recognition',
    vocabularyItem: unitE08Vocabulary[2], // Krankenhaus
    question: 'Quel lieu de travail entendez-vous ?',
    options: ['hôpital', 'magasin', 'maison de retraite'].sort(() => Math.random() - 0.5),
    correctAnswer: 'hôpital',
    context: 'Identification des lieux de travail dans le secteur des soins'
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ (Guided Assembly) - 2 exercices
  // =============================================================================

  // 2.1 Reconnaissance de motifs : associer professions et lieux de travail
  exercises.push({
    id: 'pattern_jobs_workplaces',
    type: 'pattern_recognition',
    vocabularyItem: unitE08Vocabulary[0], // Dokter
    question: 'Où travaille principalement un "Dokter" ?',
    options: [
      'Am Krankenhaus (à l\'hôpital)',
      'Am Geschäft (au magasin)',
      'An der Gare (à la gare)'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Am Krankenhaus (à l\'hôpital)',
    context: 'Le système de santé luxembourgeois comprend plusieurs grands hôpitaux : Centre Hospitalier de Luxembourg (CHL), Hôpitaux Robert Schuman, Centre Hospitalier Emile Mayrisch (CHEM)',
    hint: 'Le Dokter soigne les patients dans un établissement de santé'
  })

  // 2.2 Complétion de phrase : Ech schaffen am ___
  exercises.push({
    id: 'completion_schaffen_am',
    type: 'phrase_completion',
    vocabularyItem: unitE08Vocabulary[6], // schaffen
    question: 'Complétez : "Ech schaffen am ___" (Je travaille à l\'___)',
    options: ['Krankenhaus', 'Geschäft', 'Park'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Krankenhaus',
    expectedSentence: 'Ech schaffen am Krankenhaus',
    context: 'Construction de phrase pour décrire son lieu de travail dans le secteur médical'
  })

  // =============================================================================
  // ÉTAPE 3 : PHRASES COURTES (Short Phrase) - 2 exercices
  // =============================================================================

  // 3.1 Traduction : "Je travaille à l'hôpital"
  exercises.push({
    id: 'translation_work_hospital',
    type: 'translation',
    vocabularyItem: unitE08Vocabulary[6], // schaffen
    question: 'Traduisez en luxembourgeois : "Je travaille à l\'hôpital"',
    options: [
      'Ech schaffen am Krankenhaus',
      'Ech wunnen am Krankenhaus',
      'Ech schaffen am Haus'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech schaffen am Krankenhaus',
    context: 'Phrase immédiatement utile pour les professionnels de santé au Luxembourg'
  })

  // 3.2 Construction de phrase : décrire où on travaille
  exercises.push({
    id: 'sentence_where_work',
    type: 'sentence_construction',
    vocabularyItem: unitE08Vocabulary[6], // schaffen
    question: 'Assemblez une phrase pour dire où vous travaillez',
    wordBank: ['Ech', 'schaffen', 'am', 'Krankenhaus'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech schaffen am Krankenhaus',
    expectedSentence: 'Ech schaffen am Krankenhaus',
    hint: 'Structure : Sujet + verbe + préposition + lieu',
    context: 'Construction autonome d\'une phrase décrivant son lieu de travail'
  })

  // =============================================================================
  // ÉTAPE 4 : ASSEMBLAGE DE PHRASES (Sentence Assembly) - 3 exercices
  // =============================================================================

  // 4.1 Ordre des mots : "J'aide les patients"
  exercises.push({
    id: 'word_order_help_patients',
    type: 'word_ordering',
    vocabularyItem: unitE08Vocabulary[4], // hëllefen
    question: 'Remettez ces mots dans l\'ordre : "J\'aide les patients"',
    wordBank: ['Ech', 'hëllefen', 'den', 'Patienten'],
    correctAnswer: 'Ech hëllefen den Patienten',
    expectedSentence: 'Ech hëllefen den Patienten',
    hint: 'Structure : Sujet + verbe + article + complément',
    context: 'Le verbe "hëllefen" est au cœur du travail des soignants'
  })

  // 4.2 Traduction : "Le médecin aide le patient"
  exercises.push({
    id: 'translation_doctor_helps',
    type: 'translation',
    vocabularyItem: unitE08Vocabulary[0], // Dokter
    question: 'Traduisez : "Le médecin aide le patient"',
    options: [
      'Den Dokter hëlleft dem Patient',
      'Den Patient hëlleft dem Dokter',
      'Den Dokter schafft am Patient'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Den Dokter hëlleft dem Patient',
    context: 'Phrase décrivant l\'action principale du médecin avec conjugaison à la 3ème personne'
  })

  // 4.3 Dialogue contextuel : premier jour de travail
  exercises.push({
    id: 'dialogue_first_day',
    type: 'dialogue_completion',
    vocabularyItem: unitE08Vocabulary[6], // schaffen
    question: 'C\'est votre premier jour à l\'hôpital. Un collègue demande : "Wou schaffs du?" Que répondez-vous ?',
    options: [
      'Ech schaffen am Krankenhaus',
      'Ech wunnen zu Lëtzebuerg',
      'Ech sin den Dokter'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech schaffen am Krankenhaus',
    context: 'Situation réelle : présentation lors du premier jour dans un nouvel établissement de soins au Luxembourg',
    hint: 'La question porte sur le lieu de travail (Wou = où)'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE (Contextual Application) - 2 exercices
  // =============================================================================

  // 5.1 Construction de phrase : répondre à "Wou schaffs du?"
  exercises.push({
    id: 'sentence_answer_wou_schaffs',
    type: 'sentence_construction',
    vocabularyItem: unitE08Vocabulary[6], // schaffen
    question: 'Construisez une réponse complète à la question : "Wou schaffs du am Fleegeberäich?" (Où travailles-tu dans le secteur des soins ?)',
    wordBank: ['Ech', 'schaffen', 'am', 'Krankenhaus', 'ech', 'hëllefen', 'Patienten'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech schaffen am Krankenhaus ech hëllefen Patienten',
    expectedSentence: 'Ech schaffen am Krankenhaus ech hëllefen Patienten',
    hint: 'Combinez deux phrases : lieu de travail + action professionnelle',
    context: 'Réponse élaborée typique lors d\'une conversation avec des collègues luxembourgeois'
  })

  // 5.2 Reconnaissance vocale : phrase complète professionnelle
  exercises.push({
    id: 'speech_work_hospital',
    type: 'speech_recognition',
    vocabularyItem: unitE08Vocabulary[6], // schaffen
    question: 'Prononcez cette phrase importante pour votre travail : "Ech schaffen am Krankenhaus, ech hëllefen Patienten"',
    correctAnswer: 'Ech schaffen am Krankenhaus, ech hëllefen Patienten',
    expectedSentence: 'Ech schaffen am Krankenhaus, ech hëllefen Patienten',
    hint: 'SHAF-en am KRANK-en-house, esh HEL-ef-en pa-tee-EN-ten',
    context: 'Production orale d\'une présentation professionnelle complète. Cette phrase sera immédiatement utile dans votre environnement de travail au Luxembourg.'
  })

  return exercises
}

// Définition de l'Unité E08 complète - AM PFLEEGEBERÄICH (SECTEUR DES SOINS)
export const learningUnitE08: LearningUnit = {
  id: 'unit_e08',
  title: 'E08 - Am Pfleegeberäich',
  description: 'Vocabulaire professionnel pour le secteur des soins : hôpital, médecins, patients. Idéal pour les travailleurs de la santé au Luxembourg.',
  level: 'A1',
  vocabulary: unitE08Vocabulary,
  exercises: generateUnitE08Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80,
  estimatedTime: 6
}
