// Unit 18: Santé - Stratégie Duolingo A2 système santé Luxembourg
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 18 - Santé Luxembourg authentique A2
export const unit18Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - santé universelle
  {
    id: 'dokter',
    luxembourgish: 'Dokter',
    french: 'Médecin',
    pronunciation: 'DOK-ter',
    usage: 'Professionnel de santé, familier'
  },
  {
    id: 'pharmacie',
    luxembourgish: 'Pharmacie',
    french: 'Pharmacie',
    pronunciation: 'far-ma-SEE',
    usage: 'Lieu de médicaments, identique français'
  },
  {
    id: 'wéi',
    luxembourgish: 'Wéi',
    french: 'Mal/Douleur',
    pronunciation: 'VAY',
    usage: 'Sensation désagréable'
  },

  // TIER 2: Cultural hooks - système santé Luxembourg
  {
    id: 'cns',
    luxembourgish: 'CNS',
    french: 'Caisse Nationale de Santé',
    pronunciation: 'tsé-en-ES',
    usage: 'Sécurité sociale luxembourgeoise obligatoire'
  },
  {
    id: 'kierchbierg_klinik',
    luxembourgish: 'Kierchbierg Klinik',
    french: 'Clinique Kirchberg',
    pronunciation: 'KIRK-berg KLI-nik',
    usage: 'Hôpital moderne prestigieux Luxembourg'
  },

  // TIER 3: Vocabulaire médical A2
  {
    id: 'krank',
    luxembourgish: 'krank',
    french: 'malade',
    pronunciation: 'KRANK',
    usage: 'État de maladie'
  },
  {
    id: 'medicament',
    luxembourgish: 'Medicament',
    french: 'Médicament',
    pronunciation: 'me-di-ka-MANG',
    usage: 'Remède médical'
  },
  {
    id: 'ech_hu_wéi',
    luxembourgish: 'Ech hu wéi',
    french: 'J\'ai mal',
    pronunciation: 'ekh HOO VAY',
    usage: 'Expression douleur/mal-être'
  },
  {
    id: 'rendez_vous',
    luxembourgish: 'Rendez-vous',
    french: 'Rendez-vous médical',
    pronunciation: 'ron-day-VOO',
    usage: 'RDV médical (réutilisation Unit 15 + spécialisation)'
  }
]

export const generateUnit18Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // Quick wins santé universelle
  exercises.push({
    id: 'quick_win_doctor',
    type: 'audio_recognition',
    vocabularyItem: unit18Vocabulary[0],
    question: 'Problème de santé. Professionnel à consulter :',
    options: ['Dokter', 'Pharmacie', 'CNS'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Dokter',
    context: 'Quick win: professionnel santé universel'
  })

  // Cultural hook - système santé Luxembourg
  exercises.push({
    id: 'cultural_cns_system',
    type: 'dialogue_completion',
    vocabularyItem: unit18Vocabulary[3],
    question: 'Couverture santé obligatoire Luxembourg. Organisme :',
    options: ['CNS', 'Dokter', 'Medicament'].sort(() => Math.random() - 0.5),
    correctAnswer: 'CNS',
    context: 'Cultural hook: système social luxembourgeois'
  })

  // Spaced repetition - RDV médical (Unit 15 + santé)
  exercises.push({
    id: 'spaced_medical_appointment',
    type: 'sentence_construction',
    vocabularyItem: unit18Vocabulary[8],
    question: 'Assemblez votre demande de RDV médical',
    wordBank: ['Ech', 'brauchen', 'eng', 'Rendez-vous', 'mam', 'Dokter'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech brauchen eng Rendez-vous mam Dokter',
    expectedSentence: 'Ech brauchen eng Rendez-vous mam Dokter',
    hint: 'Réutilisation RDV Unit 15 + contexte médical',
    context: 'Spaced repetition: RDV spécialisé médical'
  })

  // Context variation - douleur/mal-être
  exercises.push({
    id: 'context_pain_expression',
    type: 'dialogue_completion',
    vocabularyItem: unit18Vocabulary[7],
    question: 'Consultation médicale. Expression de votre mal-être :',
    options: ['Ech hu wéi', 'Dokter', 'Pharmacie'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech hu wéi',
    context: 'Context variation: expression symptôme'
  })

  // Production orale - consultation médicale
  exercises.push({
    id: 'speech_medical_consultation',
    type: 'speech_recognition',
    vocabularyItem: unit18Vocabulary[7],
    question: 'Exprimez votre mal-être au médecin',
    correctAnswer: 'Ech hu wéi',
    expectedSentence: 'Ech hu wéi',
    hint: 'ekh HOO VAY',
    context: 'Production orale: consultation médicale'
  })

  return exercises
}

export const learningUnit18: LearningUnit = {
  id: 'unit_18',
  title: 'Santé',
  description: 'Gérez vos besoins de santé dans le système luxembourgeois',
  level: 'A2',
  vocabulary: unit18Vocabulary,
  exercises: generateUnit18Exercises(),
  targetScore: 80,
  estimatedTime: 7
}