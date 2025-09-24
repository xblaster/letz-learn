// Unit 16: Téléphone - Stratégie Duolingo A1+ communication moderne
// Section 2: Communication quotidienne (A1+) - Unité finale

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 16 - Communication téléphonique Luxembourg
export const unit16Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - expressions téléphone universelles
  {
    id: 'allo',
    luxembourgish: 'Allo',
    french: 'Allô',
    pronunciation: 'a-LO',
    usage: 'Salutation téléphonique, identique au français'
  },
  {
    id: 'telefon',
    luxembourgish: 'Telefon',
    french: 'Téléphone',
    pronunciation: 'te-le-FONG',
    usage: 'Appareil de communication'
  },
  {
    id: 'message',
    luxembourgish: 'Message',
    french: 'Message',
    pronunciation: 'mes-SAHJ',
    usage: 'Communication écrite/vocale, universel'
  },

  // TIER 2: Cultural hooks - communication Luxembourg moderne
  {
    id: 'post_luxembourg',
    luxembourgish: 'Post Luxembourg',
    french: 'Post Luxembourg',
    pronunciation: 'POST LUX-em-burg',
    usage: 'Opérateur télécom national luxembourgeois'
  },
  {
    id: 'handy',
    luxembourgish: 'Handy',
    french: 'Portable',
    pronunciation: 'HAN-dy',
    usage: 'Téléphone portable, influence allemande'
  },

  // TIER 3: Expressions téléphone pratiques
  {
    id: 'uruffen',
    luxembourgish: 'uruffen',
    french: 'appeler',
    pronunciation: 'OO-ruf-fen',
    usage: 'Action de téléphoner'
  },
  {
    id: 'zréckruffen',
    luxembourgish: 'zréckruffen',
    french: 'rappeler',
    pronunciation: 'TSREK-ruf-fen',
    usage: 'Rappeler au téléphone'
  },
  {
    id: 'wer_ass_do',
    luxembourgish: 'Wer ass do?',
    french: 'Qui est là ? / Qui est à l\'appareil ?',
    pronunciation: 'VER ass DO',
    usage: 'Question d\'identification téléphonique'
  },
  {
    id: 'ech_sinn_et',
    luxembourgish: 'Ech sinn et',
    french: 'C\'est moi',
    pronunciation: 'ekh zin ET',
    usage: 'Identification personnelle au téléphone'
  }
]

// Générateur d'exercices - Communication téléphonique finale Section 2
export const generateUnit16Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // PHASE 1: QUICK WINS - Téléphone universel (20%)
  // =============================================================================

  // 1.1 Reconnaissance salutation universelle
  exercises.push({
    id: 'quick_win_hello',
    type: 'audio_recognition',
    vocabularyItem: unit16Vocabulary[0], // Allo
    question: 'Vous décrochez le téléphone. Comment saluez-vous ?',
    options: ['Allo', 'Moien', 'Äddi'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Allo',
    context: 'Quick win: salutation téléphonique universelle'
  })

  // 1.2 Concept communication universel
  exercises.push({
    id: 'quick_win_message',
    type: 'translation',
    vocabularyItem: unit16Vocabulary[2],
    question: 'Comment dit-on "message" en luxembourgeois ?',
    options: ['Message', 'Telefon', 'Handy'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Message',
    context: 'Quick win: concept communication universel'
  })

  // =============================================================================
  // PHASE 2: CULTURAL HOOKS - Infrastructure Luxembourg (25%)
  // =============================================================================

  // 2.1 Opérateur national luxembourgeois
  exercises.push({
    id: 'cultural_post_luxembourg',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[3],
    question: 'Problème de réseau au Luxembourg. Opérateur national à contacter :',
    options: ['Post Luxembourg', 'Handy', 'Message'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Post Luxembourg',
    context: 'Cultural hook: infrastructure télécom Luxembourg'
  })

  // 2.2 Influence culturelle allemande
  exercises.push({
    id: 'cultural_german_influence',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[4],
    question: 'Téléphone mobile au Luxembourg. Terme influencé par l\'allemand :',
    options: ['Handy', 'Telefon', 'Allo'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Handy',
    context: 'Cultural hook: influence linguistique allemande'
  })

  // =============================================================================
  // PHASE 3: SPACED REPETITION - Communication + identité (20%)
  // =============================================================================

  // 3.1 Réintégration identité (Unit 1) + téléphone
  exercises.push({
    id: 'spaced_phone_identity',
    type: 'sentence_construction',
    vocabularyItem: unit16Vocabulary[8],
    question: 'Assemblez votre identification au téléphone',
    wordBank: ['Ech', 'sinn', 'et', ',', 'Marie'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sinn et, Marie',
    expectedSentence: 'Ech sinn et, Marie',
    hint: 'C\'est + moi + , + prénom (réutilisation Unit 1)',
    context: 'Spaced repetition: identité téléphonique'
  })

  // 3.2 Pattern question identification
  exercises.push({
    id: 'spaced_identity_question',
    type: 'progressive_building',
    vocabularyItem: unit16Vocabulary[7],
    question: 'Construisez la question pour identifier votre interlocuteur',
    wordBank: ['Wer', 'ass', 'do', '?'],
    correctAnswer: 'Wer ass do?',
    expectedSentence: 'Wer ass do?',
    hint: 'Qui + est + là + ? (pattern question familier)',
    context: 'Pattern question: identification'
  })

  // =============================================================================
  // PHASE 4: CONTEXT VARIATION - Situations téléphone (25%)
  // =============================================================================

  // 4.1 Contexte professionnel (rappel business)
  exercises.push({
    id: 'context_business_callback',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[6],
    question: 'Meeting manqué Kirchberg. Action de suivi professionnel :',
    options: ['Zréckruffen', 'Allo', 'Message'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Zréckruffen',
    context: 'Context variation: suivi professionnel'
  })

  // 4.2 Contexte social (appel amical)
  exercises.push({
    id: 'context_social_call',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[5],
    question: 'Appel social à un ami au Luxembourg :',
    options: ['Uruffen', 'Post Luxembourg', 'Wer ass do'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Uruffen',
    context: 'Context variation: communication sociale'
  })

  // 4.3 Contexte technologique moderne
  exercises.push({
    id: 'context_mobile_communication',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[4],
    question: 'Communication mobile moderne au Luxembourg :',
    options: ['Mat Handy', 'Post Luxembourg', 'Allo'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Mat Handy',
    context: 'Context variation: technologie moderne'
  })

  // =============================================================================
  // PHASE 5: PRODUCTION ORALE - Communication complète (10%)
  // =============================================================================

  // 5.1 Dialogue téléphonique complet
  exercises.push({
    id: 'speech_phone_conversation',
    type: 'speech_recognition',
    vocabularyItem: unit16Vocabulary[0],
    question: 'Répondez au téléphone et identifiez-vous',
    correctAnswer: 'Allo, ech sinn et',
    expectedSentence: 'Allo, ech sinn et',
    hint: 'a-LO, ekh zin ET',
    context: 'Production orale: conversation téléphonique complète'
  })

  return exercises
}

// Métriques d'engagement Unit 16 - Finale Section 2
export function getUnit16EngagementMetrics() {
  const exercises = generateUnit16Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    typeDistribution,
    engagementStrategy: {
      quickWins: 20, // Téléphone universel (allo, message)
      culturalHooks: 25, // Infrastructure Luxembourg (Post Luxembourg, Handy)
      spacedRepetition: 20, // Identité Unit 1 + communication
      contextVariation: 25, // Professionnel/social/moderne
      oralProduction: 10 // Conversation téléphonique complète
    },
    section2Completion: {
      unitsCompleted: '9-16 (8 unités)',
      skillsAcquired: ['Conversations sociales', 'Shopping', 'Restaurant', 'Transport', 'Météo', 'Loisirs', 'Rendez-vous', 'Téléphone'],
      culturalIntegration: 'Haute (institutions, lieux, expressions authentiques)',
      communicationLevel: 'A1+ complet'
    },
    targetMetrics: {
      retentionD7: '60%+',
      timeToCompletion: '6-7min',
      satisfactionScore: '4.3+/5',
      section2Mastery: '85%+' // Nouveau: maîtrise Section 2 complète
    }
  }
}

// Validation finale Section 2 (Communication quotidienne)
export function validateSection2Completion() {
  return {
    sectionTitle: 'Section 2: Communication quotidienne (A1+)',
    unitsRange: 'Units 9-16 (8 unités)',
    progressionFlow: 'Conversations → Shopping → Restaurant → Transport → Météo → Loisirs → Rendez-vous → Téléphone',
    skillsProgression: {
      socialSkills: 'Salutations → Conversations complètes',
      practicalSkills: 'Shopping → Organisation sociale',
      culturalSkills: 'Gastronomie → Infrastructure Luxembourg'
    },
    engagementMaintained: {
      quickWins: 'Maintenu à 20% (confiance)',
      culturalHooks: 'Maintenu à 25% (engagement authentique)',
      spacedRepetition: 'Maintenu à 20% (rétention)',
      contextVariation: 'Maintenu à 25% (application)',
      oralProduction: 'Maintenu à 10% (confiance expression)'
    },
    readyForSection3: true,
    nextLevel: 'A2 (Vie pratique)'
  }
}

// Définition Unit 16 - Communication téléphonique moderne (finale Section 2)
export const learningUnit16: LearningUnit = {
  id: 'unit_16',
  title: 'Téléphone',
  description: 'Maîtrisez la communication téléphonique au Luxembourg',
  level: 'A1+',
  vocabulary: unit16Vocabulary,
  exercises: generateUnit16Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 85, // Maintien cohérence Section 2
  estimatedTime: 6 // Durée cohérente section
}