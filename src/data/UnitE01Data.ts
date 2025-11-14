// Données pour l'Unité E01 : "D'Alphabet" - L'alphabet luxembourgeois avec applications pratiques

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E01 - Salutations essentielles et alphabet
export const unitE01Vocabulary: VocabularyItem[] = [
  {
    id: 'moien',
    luxembourgish: 'Moien',
    french: 'Bonjour',
    pronunciation: 'MOY-en',
    usage: 'Salutation universelle utilisée toute la journée au Luxembourg'
  },
  {
    id: 'merci',
    luxembourgish: 'Merci',
    french: 'Merci',
    pronunciation: 'MAIR-see',
    usage: 'Remerciement standard, identique au français'
  },
  {
    id: 'jo',
    luxembourgish: 'Jo',
    french: 'Oui',
    pronunciation: 'yo',
    usage: 'Affirmation ou confirmation positive'
  },
  {
    id: 'nee',
    luxembourgish: 'Nee',
    french: 'Non',
    pronunciation: 'nay',
    usage: 'Négation standard'
  },
  {
    id: 'addi',
    luxembourgish: 'Äddi',
    french: 'Au revoir',
    pronunciation: 'AD-ee',
    usage: 'Salutation de départ utilisée dans toutes les situations'
  },
  {
    id: 'pardon',
    luxembourgish: 'Pardon',
    french: 'Pardon/Excusez-moi',
    pronunciation: 'par-DON',
    usage: 'Formule de politesse pour s\'excuser ou demander l\'attention'
  },
  {
    id: 'wann_ech_gelift',
    luxembourgish: 'Wann ech gelift',
    french: 'S\'il vous plaît',
    pronunciation: 'van esh ge-LIFT',
    usage: 'Formule de politesse pour faire une demande courtoise'
  }
]

// Générateur d'exercices avec progression scaffoldée en 5 étapes
export const generateUnitE01Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : RECONNAISSANCE (Recognition) - 2 exercices
  // =============================================================================

  // 1.1 Reconnaissance audio : Moien
  exercises.push({
    id: 'audio_moien',
    type: 'audio_recognition',
    vocabularyItem: unitE01Vocabulary[0], // Moien
    question: 'Que signifie ce mot que vous entendez ?',
    options: ['Bonjour', 'Au revoir', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Bonjour',
    context: 'Première reconnaissance de la salutation luxembourgeoise la plus importante'
  })

  // 1.2 Association de paires de mots : salutations essentielles
  exercises.push({
    id: 'word_pairing_greetings',
    type: 'word_pairing',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Associez chaque mot luxembourgeois à sa traduction française.',
    context: 'Familiarisez-vous avec les salutations de base et les formules de politesse.',
    correctAnswer: 'all_matched',
    hint: 'Cliquez sur un mot luxembourgeois puis sur sa traduction française.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'moien', left: 'Moien', right: 'Bonjour' },
      { id: 'addi', left: 'Äddi', right: 'Au revoir' },
      { id: 'merci', left: 'Merci', right: 'Merci' },
      { id: 'pardon', left: 'Pardon', right: 'Pardon' }
    ]
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ (Guided Assembly) - 2 exercices
  // =============================================================================

  // 2.1 Reconnaissance de motifs : sons luxembourgeois uniques
  exercises.push({
    id: 'pattern_basic_sounds',
    type: 'pattern_recognition',
    vocabularyItem: unitE01Vocabulary[4], // Äddi
    question: 'Identifiez le son unique à l\'alphabet luxembourgeois',
    options: ['Le son "ä" comme dans Äddi', 'Le son "oi" comme dans Moien', 'Le son "é" comme dans café'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Le son "ä" comme dans Äddi',
    context: 'Le luxembourgeois possède des sons spécifiques absents du français, comme le "ä"',
    hint: 'Le "ä" est une voyelle typiquement luxembourgeoise'
  })

  // 2.2 Reconnaissance audio : Äddi
  exercises.push({
    id: 'audio_addi',
    type: 'audio_recognition',
    vocabularyItem: unitE01Vocabulary[4], // Äddi
    question: 'Que signifie ce mot que vous entendez ?',
    options: ['Au revoir', 'Bonjour', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Au revoir',
    context: 'Reconnaissance de la formule d\'au revoir luxembourgeoise avec son "ä" caractéristique'
  })

  // =============================================================================
  // ÉTAPE 3 : PHRASES COURTES (Short Phrase) - 2 exercices
  // =============================================================================

  // 3.1 Complétion de phrase : salutation de base
  exercises.push({
    id: 'completion_greeting',
    type: 'phrase_completion',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Pour dire bonjour en luxembourgeois, je dis : ___',
    options: ['Moien', 'Äddi', 'Merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien',
    expectedSentence: 'Moien',
    context: 'Consolidation de la salutation principale en luxembourgeois'
  })

  // 3.2 Traduction : oui et non
  exercises.push({
    id: 'translation_basic_yes_no',
    type: 'translation',
    vocabularyItem: unitE01Vocabulary[2], // Jo
    question: 'Comment dit-on "Oui" en luxembourgeois ?',
    options: ['Jo', 'Nee', 'Moien'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Jo',
    context: 'Traduction des mots de base pour confirmer ou nier'
  })

  // =============================================================================
  // ÉTAPE 4 : ASSEMBLAGE DE PHRASES (Sentence Assembly) - 3 exercices
  // =============================================================================

  // 4.1 Construction de phrase : formule de politesse
  exercises.push({
    id: 'sentence_polite_phrase',
    type: 'sentence_construction',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Assemblez une formule de salutation polie avec remerciement',
    wordBank: ['Moien', 'merci'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien merci',
    expectedSentence: 'Moien merci',
    hint: 'Commencez par la salutation, puis ajoutez le remerciement',
    context: 'Combinaison de salutation et remerciement pour une interaction polie'
  })

  // 4.2 Ordre des mots : échange de salutations
  exercises.push({
    id: 'word_order_greeting_response',
    type: 'word_ordering',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Remettez ces mots dans l\'ordre pour créer un échange naturel',
    wordBank: ['Moien', 'Jo', 'Merci'],
    correctAnswer: 'Moien Jo Merci',
    expectedSentence: 'Moien Jo Merci',
    hint: 'L\'ordre suit une salutation, une confirmation, puis un remerciement',
    context: 'Structure d\'un échange poli typique au Luxembourg'
  })

  // 4.3 Traduction : au revoir
  exercises.push({
    id: 'translation_goodbye',
    type: 'translation',
    vocabularyItem: unitE01Vocabulary[4], // Äddi
    question: 'Comment dit-on "Au revoir" en luxembourgeois ?',
    options: ['Äddi', 'Moien', 'Pardon'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Äddi',
    context: 'Traduction de la formule de départ luxembourgeoise'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE (Contextual Application) - 3 exercices
  // =============================================================================

  // 5.1 Dialogue contextuel : première rencontre
  exercises.push({
    id: 'dialogue_first_meeting',
    type: 'dialogue_completion',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Vous rencontrez un Luxembourgeois dans un bureau. Que dites-vous ?',
    options: [
      'Moien',
      'Äddi',
      'Pardon'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien',
    context: 'Contexte professionnel : salutation appropriée lors d\'une première rencontre au bureau'
  })

  // 5.2 Reconnaissance vocale : prononcer Moien
  exercises.push({
    id: 'speech_moien',
    type: 'speech_recognition',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Prononcez la salutation luxembourgeoise : "Moien"',
    correctAnswer: 'Moien',
    expectedSentence: 'Moien',
    hint: 'Prononcez : MOY-en (comme "moi" + "yen")',
    context: 'Production orale de la salutation principale luxembourgeoise'
  })

  // 5.3 Reconnaissance audio : échange complet
  exercises.push({
    id: 'audio_full_exchange',
    type: 'audio_recognition',
    vocabularyItem: unitE01Vocabulary[0],
    question: 'Écoutez cet échange rapide. Quelle formule entendez-vous en premier ?',
    options: ['Moien', 'Äddi', 'Pardon'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Moien',
    context: 'Reconnaissance dans un contexte d\'échange naturel entre locuteurs natifs'
  })

  return exercises
}

// Définition de l'Unité E01 complète - L'ALPHABET LUXEMBOURGEOIS
export const learningUnitE01: LearningUnit = {
  id: 'unit_e01',
  title: 'E01 - D\'Alphabet',
  description: 'Découvrez l\'alphabet luxembourgeois et les salutations essentielles pour vos premiers contacts au Luxembourg.',
  level: 'A1',
  vocabulary: unitE01Vocabulary,
  exercises: generateUnitE01Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80,
  estimatedTime: 5
}
