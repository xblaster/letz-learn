// Unit 15: Rendez-vous - Stratégie Duolingo A1+ organisation sociale
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 15 - Rendez-vous Luxembourg professionnel/social
export const unit15Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - concepts universels temps
  {
    id: 'wéini',
    luxembourgish: 'Wéini?',
    french: 'Quand ?',
    pronunciation: 'VAY-ni',
    usage: 'Question temporelle essentielle'
  },
  {
    id: 'wou',
    luxembourgish: 'Wou?',
    french: 'Où ?',
    pronunciation: 'VOO',
    usage: 'Question de lieu, déjà vu transport'
  },
  {
    id: 'firwat',
    luxembourgish: 'Firwat?',
    french: 'Pourquoi ?',
    pronunciation: 'FIR-vat',
    usage: 'Question de raison/motif'
  },

  // TIER 2: Cultural hooks - contextes Luxembourg
  {
    id: 'rendezvous',
    luxembourgish: 'Rendezvous',
    french: 'Rendez-vous',
    pronunciation: 'ron-day-VOO',
    usage: 'Mot français adopté, milieu professionnel'
  },
  {
    id: 'meeting',
    luxembourgish: 'Meeting',
    french: 'Réunion',
    pronunciation: 'MEE-ting',
    usage: 'Anglicisme courant milieu business Luxembourg'
  },
  {
    id: 'kaffi',
    luxembourgish: 'Kaffi',
    french: 'Café',
    pronunciation: 'KAF-fi',
    usage: 'Rencontre sociale informelle très populaire'
  },

  // TIER 3: Expressions organisation temporelle
  {
    id: 'haut',
    luxembourgish: 'Haut',
    french: 'Aujourd\'hui',
    pronunciation: 'HOWT',
    usage: 'Référence temporelle immédiate'
  },
  {
    id: 'muer',
    luxembourgish: 'Muer',
    french: 'Demain',
    pronunciation: 'MOO-er',
    usage: 'Jour suivant, planification proche'
  },
  {
    id: 'eis_gesinn',
    luxembourgish: 'Eis gesinn',
    french: 'Nous voir / Se voir',
    pronunciation: 'AYS ge-SEEN',
    usage: 'Action de rendez-vous social'
  }
]

// Générateur d'exercices - Organisation sociale Luxembourg
export const generateUnit15Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Quick wins questions essentielles
  exercises.push({
    id: 'quick_win_when_question',
    type: 'audio_recognition',
    vocabularyItem: unit15Vocabulary[0],
    question: 'Question pour organiser un rendez-vous. On demande :',
    options: ['Wéini?', 'Wou?', 'Firwat?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéini?',
    context: 'Quick win: question temporelle universelle'
  })

  // Cultural hook - contexte business Luxembourg
  exercises.push({
    id: 'cultural_business_meeting',
    type: 'dialogue_completion',
    vocabularyItem: unit15Vocabulary[4],
    question: 'Bureau Kirchberg, quartier européen. Réunion professionnelle :',
    options: ['Meeting', 'Kaffi', 'Rendezvous'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Meeting',
    context: 'Cultural hook: environnement business Luxembourg'
  })

  // Spaced repetition - organisation rendez-vous
  exercises.push({
    id: 'spaced_meet_planning',
    type: 'sentence_construction',
    vocabularyItem: unit15Vocabulary[8],
    question: 'Assemblez proposition de se voir',
    wordBank: ['Kënnen', 'mir', 'eis', 'gesinn', '?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Kënnen mir eis gesinn?',
    expectedSentence: 'Kënnen mir eis gesinn?',
    hint: 'Pouvons + nous + nous + voir + ?',
    context: 'Spaced repetition: organisation sociale'
  })

  // Context variation - rencontre informelle
  exercises.push({
    id: 'context_informal_coffee',
    type: 'dialogue_completion',
    vocabularyItem: unit15Vocabulary[5],
    question: 'Rencontre détendue entre amis à Luxembourg-Ville :',
    options: ['Kaffi', 'Meeting', 'Firwat'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Kaffi',
    context: 'Context variation: social informel'
  })

  // Production orale - question rendez-vous
  exercises.push({
    id: 'speech_appointment_question',
    type: 'speech_recognition',
    vocabularyItem: unit15Vocabulary[0],
    question: 'Demandez quand vous pouvez vous voir',
    correctAnswer: 'Wéini kënnen mir eis gesinn?',
    expectedSentence: 'Wéini kënnen mir eis gesinn?',
    hint: 'VAY-ni KEN-nen meer AYS ge-SEEN?',
    context: 'Production orale: organisation rendez-vous'
  })

  return exercises
}

export const learningUnit15: LearningUnit = {
  id: 'unit_15',
  title: 'Rendez-vous',
  description: 'Organisez vos rencontres professionnelles et sociales',
  level: 'A1+',
  vocabulary: unit15Vocabulary,
  exercises: generateUnit15Exercises(),
  targetScore: 85,
  estimatedTime: 6
}