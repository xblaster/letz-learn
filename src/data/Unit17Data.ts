// Unit 17: Logement - Stratégie Duolingo A2 immobilier Luxembourg
// Section 3: Vie pratique (A2) - Complexité accrue avec engagement maintenu

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 17 - Logement Luxembourg authentique A2
export const unit17Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - concepts logement universels
  {
    id: 'haus',
    luxembourgish: 'Haus',
    french: 'Maison',
    pronunciation: 'HOWSS',
    usage: 'Logement individuel, familier'
  },
  {
    id: 'appartement',
    luxembourgish: 'Appartement',
    french: 'Appartement',
    pronunciation: 'a-par-te-MANG',
    usage: 'Logement collectif, identique au français'
  },
  {
    id: 'chambre',
    luxembourgish: 'Chambre',
    french: 'Chambre',
    pronunciation: 'SHAM-ber',
    usage: 'Pièce de repos, universel'
  },

  // TIER 2: Cultural hooks - marché immobilier Luxembourg spécifique
  {
    id: 'deier_präisser',
    luxembourgish: 'Deier Präisser',
    french: 'Prix chers',
    pronunciation: 'DAY-er PRAY-ser',
    usage: 'Réalité immobilière luxembourgeoise (prix élevés)'
  },
  {
    id: 'limpertsberg',
    luxembourgish: 'Limpertsberg',
    french: 'Limpertsberg',
    pronunciation: 'LIM-pers-berg',
    usage: 'Quartier résidentiel chic Luxembourg-Ville'
  },
  {
    id: 'belair',
    luxembourgish: 'Belair',
    french: 'Belair',
    pronunciation: 'be-LAIR',
    usage: 'Quartier populaire Luxembourg-Ville'
  },

  // TIER 3: Vocabulaire immobilier A2 (complexité accrue)
  {
    id: 'louwen',
    luxembourgish: 'louwen',
    french: 'louer',
    pronunciation: 'LOW-en',
    usage: 'Action de location (très courant Luxembourg)'
  },
  {
    id: 'kafen_haus',
    luxembourgish: 'kafen (Haus)',
    french: 'acheter (maison)',
    pronunciation: 'KAH-fen',
    usage: 'Achat immobilier (réutilisation Unit 10 + contexte)'
  },
  {
    id: 'miet',
    luxembourgish: 'Miet',
    french: 'Loyer',
    pronunciation: 'MEET',
    usage: 'Paiement mensuel logement'
  },

  // TIER 4: Expressions pratiques immobilier A2
  {
    id: 'ech_sichen',
    luxembourgish: 'Ech sichen',
    french: 'Je cherche',
    pronunciation: 'ekh ZI-khen',
    usage: 'Recherche active logement'
  },
  {
    id: 'wou_wunnen',
    luxembourgish: 'Wou wunnen Dir?',
    french: 'Où habitez-vous ?',
    pronunciation: 'VOO VUN-nen deer',
    usage: 'Question résidence (politesse formelle A2)'
  }
]

// Générateur d'exercices - Immobilier Luxembourg A2 (complexité progressive)
export const generateUnit17Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // PHASE 1: QUICK WINS - Logement universel (20%)
  // =============================================================================

  // 1.1 Reconnaissance logement familier
  exercises.push({
    id: 'quick_win_house',
    type: 'audio_recognition',
    vocabularyItem: unit17Vocabulary[0], // Haus
    question: 'Vous entendez parler de type de logement. Il s\'agit d\'une :',
    options: ['Haus', 'Restaurant', 'Auto'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Haus',
    context: 'Quick win: logement universel'
  })

  // 1.2 Concept appartement international
  exercises.push({
    id: 'quick_win_apartment',
    type: 'translation',
    vocabularyItem: unit17Vocabulary[1],
    question: 'Comment dit-on "appartement" en luxembourgeois ?',
    options: ['Appartement', 'Chambre', 'Haus'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Appartement',
    context: 'Quick win: mot international identique'
  })

  // =============================================================================
  // PHASE 2: CULTURAL HOOKS - Marché immobilier Luxembourg (25%)
  // =============================================================================

  // 2.1 Réalité économique luxembourgeoise
  exercises.push({
    id: 'cultural_expensive_housing',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[3],
    question: 'Marché immobilier Luxembourg (parmi les plus chers au monde). Caractéristique :',
    options: ['Deier Präisser', 'Gratis', 'Kaffi'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Deier Präisser',
    context: 'Cultural hook: réalité économique Luxembourg'
  })

  // 2.2 Quartier chic Luxembourg-Ville
  exercises.push({
    id: 'cultural_limpertsberg',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[4],
    question: 'Recherche logement haut de gamme Luxembourg-Ville. Quartier prestigieux :',
    options: ['Limpertsberg', 'Belair', 'Kirchberg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Limpertsberg',
    context: 'Cultural hook: géographie résidentielle Luxembourg'
  })

  // 2.3 Quartier accessible Luxembourg-Ville
  exercises.push({
    id: 'cultural_belair_popular',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[5],
    question: 'Recherche logement accessible Luxembourg-Ville. Quartier populaire :',
    options: ['Belair', 'Limpertsberg', 'Deier Präisser'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Belair',
    context: 'Cultural hook: alternatives résidentielles'
  })

  // =============================================================================
  // PHASE 3: SPACED REPETITION - Actions + logement A2 (20%)
  // =============================================================================

  // 3.1 Réintégration recherche + complexité A2
  exercises.push({
    id: 'spaced_searching_housing',
    type: 'sentence_construction',
    vocabularyItem: unit17Vocabulary[9],
    question: 'Assemblez votre recherche active de logement',
    wordBank: ['Ech', 'sichen', 'eng', 'Appartement'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sichen eng Appartement',
    expectedSentence: 'Ech sichen eng Appartement',
    hint: 'Je + chercher + un/une + logement (complexité A2)',
    context: 'Spaced repetition: recherche active A2'
  })

  // 3.2 Réintégration achat (Unit 10) + complexité immobilier
  exercises.push({
    id: 'spaced_buying_house',
    type: 'progressive_building',
    vocabularyItem: unit17Vocabulary[7],
    question: 'Construisez votre intention d\'achat immobilier',
    wordBank: ['Ech', 'wëll', 'eng', 'Haus', 'kafen'],
    correctAnswer: 'Ech wëll eng Haus kafen',
    expectedSentence: 'Ech wëll eng Haus kafen',
    hint: 'Réutilisation "kafen" Unit 10 + contexte immobilier',
    context: 'Spaced repetition: achat + spécialisation'
  })

  // =============================================================================
  // PHASE 4: CONTEXT VARIATION - Situations logement A2 (25%)
  // =============================================================================

  // 4.1 Contexte location (majorité Luxembourg)
  exercises.push({
    id: 'context_rental_market',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[6],
    question: 'Marché Luxembourg (70% locataires). Action principale logement :',
    options: ['Louwen', 'Kafen', 'Sichen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Louwen',
    context: 'Context variation: marché locatif dominant'
  })

  // 4.2 Contexte coût logement
  exercises.push({
    id: 'context_rental_cost',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[8],
    question: 'Budget mensuel logement Luxembourg. Paiement principal :',
    options: ['Miet', 'Ticket', 'Kaffi'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Miet',
    context: 'Context variation: gestion budget logement'
  })

  // 4.3 Question résidence formelle A2
  exercises.push({
    id: 'context_formal_residence',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[10],
    question: 'Conversation formelle nouveaux collègues. Question résidence polie :',
    options: ['Wou wunnen Dir?', 'Wéi geet et?', 'Wéini?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wou wunnen Dir?',
    context: 'Context variation: politesse formelle A2'
  })

  // =============================================================================
  // PHASE 5: PRODUCTION ORALE - Recherche logement A2 (10%)
  // =============================================================================

  // 5.1 Expression recherche logement complète
  exercises.push({
    id: 'speech_housing_search',
    type: 'speech_recognition',
    vocabularyItem: unit17Vocabulary[9],
    question: 'Exprimez votre recherche d\'appartement à Luxembourg',
    correctAnswer: 'Ech sichen eng Appartement zu Lëtzebuerg',
    expectedSentence: 'Ech sichen eng Appartement zu Lëtzebuerg',
    hint: 'ekh ZI-khen eng a-par-te-MANG tsoo LET-se-bu-erg',
    context: 'Production orale: recherche logement complexe A2'
  })

  return exercises
}

// Métriques d'engagement Unit 17 - Ouverture Section 3 A2
export function getUnit17EngagementMetrics() {
  const exercises = generateUnit17Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    typeDistribution,
    engagementStrategy: {
      quickWins: 20, // Logement universel (maintien confiance)
      culturalHooks: 25, // Marché immobilier Luxembourg réaliste
      spacedRepetition: 20, // Recherche/achat + spécialisation
      contextVariation: 25, // Location/achat/quartiers différents
      oralProduction: 10 // Expression recherche complexe A2
    },
    complexityIncrease: {
      level: 'A1+ → A2',
      newFeatures: ['Questions formelles (Dir)', 'Phrases plus longues', 'Vocabulaire spécialisé'],
      maintainedEngagement: 'Cultural hooks réalité Luxembourg',
      culturalAuthenticity: 'Quartiers réels, prix réalistes'
    },
    targetMetrics: {
      retentionD7: '50%+', // Légèrement réduit pour A2 (normal)
      timeToCompletion: '6-8min', // Légèrement plus long (complexité)
      satisfactionScore: '4.3+/5',
      practicalRelevance: '90%+' // Haute utilité pratique logement
    }
  }
}

// Validation transition Section 2 A1+ → Section 3 A2
export function validateUnit17Progression() {
  return {
    transitionFrom: 'Section 2 A1+ (Communication quotidienne)',
    transitionTo: 'Section 3 A2 (Vie pratique)',
    complexityIncrease: {
      grammar: 'Questions polies formelles (Dir)',
      vocabulary: 'Spécialisé immobilier',
      sentences: 'Plus longues et complexes',
      cultural: 'Réalités économiques concrètes'
    },
    engagementMaintained: 'Quick wins + Cultural hooks + Spaced repetition',
    scaffolding: 'Communication sociale → Applications pratiques spécialisées',
    preparation: 'Prêt pour Unités 18-24 (vie pratique approfondie)'
  }
}

// Définition Unit 17 - Logement Luxembourg A2 (ouverture Section 3)
export const learningUnit17: LearningUnit = {
  id: 'unit_17',
  title: 'Logement',
  description: 'Naviguez le marché immobilier luxembourgeois avec confiance',
  level: 'A2',
  vocabulary: unit17Vocabulary,
  exercises: generateUnit17Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80, // Légèrement réduit pour A2 (complexité accrue)
  estimatedTime: 7 // Augmentation progressive pour A2
}