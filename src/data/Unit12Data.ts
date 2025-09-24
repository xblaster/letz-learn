// Unit 12: Transports - Stratégie Duolingo A1+ mobilité Luxembourg
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 12 - Transport Luxembourg authentique
export const unit12Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - mots universels/familiers
  {
    id: 'bus',
    luxembourgish: 'Bus',
    french: 'Bus',
    pronunciation: 'BUS',
    usage: 'Transport public principal, identique au français'
  },
  {
    id: 'train',
    luxembourgish: 'Train',
    french: 'Train',
    pronunciation: 'TRAYN',
    usage: 'Transport ferroviaire, mot international'
  },
  {
    id: 'auto',
    luxembourgish: 'Auto',
    french: 'Voiture',
    pronunciation: 'OW-to',
    usage: 'Véhicule personnel, familier'
  },

  // TIER 2: Cultural hooks - transport Luxembourg spécifique
  {
    id: 'cfl',
    luxembourgish: 'CFL',
    french: 'CFL (Chemins de Fer Luxembourgeois)',
    pronunciation: 'tsé-ef-EL',
    usage: 'Compagnie ferroviaire nationale luxembourgeoise'
  },
  {
    id: 'tram',
    luxembourgish: 'Tram',
    french: 'Tram',
    pronunciation: 'TRAM',
    usage: 'Nouveau tramway de Luxembourg-Ville (depuis 2017)'
  },
  {
    id: 'gratis',
    luxembourgish: 'gratis',
    french: 'gratuit',
    pronunciation: 'GRA-tis',
    usage: 'Transport public gratuit au Luxembourg depuis 2020'
  },

  // TIER 3: Vocabulaire transport essentiel
  {
    id: 'goen',
    luxembourgish: 'goen',
    french: 'aller',
    pronunciation: 'GO-en',
    usage: 'Verbe de mouvement principal'
  },
  {
    id: 'ticket',
    luxembourgish: 'Ticket',
    french: 'Ticket',
    pronunciation: 'TI-ket',
    usage: 'Billet de transport (bien que souvent gratuit)'
  },
  {
    id: 'gare',
    luxembourgish: 'Gare',
    french: 'Gare',
    pronunciation: 'GAR',
    usage: 'Station ferroviaire principale'
  },

  // TIER 4: Expressions transport pratiques
  {
    id: 'wou_geet',
    luxembourgish: 'Wou geet',
    french: 'Où va',
    pronunciation: 'VOO gate',
    usage: 'Question pour destination transport'
  },
  {
    id: 'op_kirchberg',
    luxembourgish: 'op Kirchberg',
    french: 'à Kirchberg',
    pronunciation: 'op KIRK-berg',
    usage: 'Destination business district populaire'
  }
]

// Générateur d'exercices - Transport avec spécificités Luxembourg
export const generateUnit12Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // PHASE 1: QUICK WINS - Transport universels (20%)
  // =============================================================================

  // 1.1 Reconnaissance transport familier
  exercises.push({
    id: 'quick_win_bus',
    type: 'audio_recognition',
    vocabularyItem: unit12Vocabulary[0], // Bus
    question: 'Vous entendez parler d\'un transport public. De quoi s\'agit-il ?',
    options: ['Bus', 'Restaurant', 'Menu'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Bus',
    context: 'Quick win: transport universel'
  })

  // 1.2 Transport ferroviaire familier
  exercises.push({
    id: 'quick_win_train',
    type: 'translation',
    vocabularyItem: unit12Vocabulary[1],
    question: 'Comment dit-on "train" en luxembourgeois ?',
    options: ['Train', 'Auto', 'Tram'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Train',
    context: 'Quick win: mot international'
  })

  // =============================================================================
  // PHASE 2: CULTURAL HOOKS - Spécificités Luxembourg (25%)
  // =============================================================================

  // 2.1 CFL - système ferroviaire national
  exercises.push({
    id: 'cultural_cfl_system',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[3],
    question: 'Gare Centrale Luxembourg. Vous prenez le train national avec :',
    options: ['CFL', 'Bus', 'Auto'].sort(() => Math.random() - 0.5),
    correctAnswer: 'CFL',
    context: 'Cultural hook: système ferroviaire luxembourgeois'
  })

  // 2.2 Tram moderne Luxembourg-Ville
  exercises.push({
    id: 'cultural_tram_modern',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[4],
    question: 'Nouveau transport écologique à Luxembourg-Ville depuis 2017 :',
    options: ['Tram', 'CFL', 'Ticket'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Tram',
    context: 'Cultural hook: modernité transport Luxembourg'
  })

  // 2.3 Transport gratuit - spécificité mondiale unique
  exercises.push({
    id: 'cultural_free_transport',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[5],
    question: 'Depuis 2020, tous les transports publics au Luxembourg sont :',
    options: ['Gratis', 'Deier', 'Ticket'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Gratis',
    context: 'Cultural hook: transport gratuit unique au monde'
  })

  // =============================================================================
  // PHASE 3: SPACED REPETITION - Mouvement + destination (20%)
  // =============================================================================

  // 3.1 Réintégration volonté (Units précédentes) + déplacement
  exercises.push({
    id: 'spaced_want_to_go',
    type: 'sentence_construction',
    vocabularyItem: unit12Vocabulary[6],
    question: 'Assemblez votre intention de vous déplacer',
    wordBank: ['Ech', 'wëll', 'goen', 'mat', 'Bus'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wëll mat Bus goen',
    expectedSentence: 'Ech wëll mat Bus goen',
    hint: 'Je + vouloir + avec + transport + aller',
    context: 'Spaced repetition: volonté + mouvement'
  })

  // 3.2 Pattern question destination
  exercises.push({
    id: 'spaced_destination_question',
    type: 'progressive_building',
    vocabularyItem: unit12Vocabulary[9],
    question: 'Construisez la question pour la destination',
    wordBank: ['Wou', 'geet', 'de', 'Bus', '?'],
    correctAnswer: 'Wou geet de Bus?',
    expectedSentence: 'Wou geet de Bus?',
    hint: 'Où + va + le + transport + ?',
    context: 'Pattern question: destination transport'
  })

  // =============================================================================
  // PHASE 4: CONTEXT VARIATION - Différents modes transport (25%)
  // =============================================================================

  // 4.1 Transport personnel (voiture)
  exercises.push({
    id: 'context_personal_car',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[2],
    question: 'Trajet vers la France. Transport personnel préféré :',
    options: ['Auto', 'Tram', 'Gratis'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Auto',
    context: 'Context variation: transport personnel'
  })

  // 4.2 Transport urbain moderne
  exercises.push({
    id: 'context_urban_tram',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[4],
    question: 'Centre-ville Luxembourg vers Kirchberg. Transport moderne :',
    options: ['Tram', 'Auto', 'CFL'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Tram',
    context: 'Context variation: transport urbain'
  })

  // 4.3 Destination business (Kirchberg)
  exercises.push({
    id: 'context_business_destination',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[10],
    question: 'Trajet vers le quartier d\'affaires européen :',
    options: ['Op Kirchberg', 'Gratis', 'Ticket'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Op Kirchberg',
    context: 'Context variation: destination business'
  })

  // 4.4 Transport interurbain (CFL)
  exercises.push({
    id: 'context_intercity_train',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[3],
    question: 'Voyage Luxembourg-Esch. Transport ferroviaire national :',
    options: ['CFL', 'Tram', 'Bus'].sort(() => Math.random() - 0.5),
    correctAnswer: 'CFL',
    context: 'Context variation: transport interurbain'
  })

  // =============================================================================
  // PHASE 5: PRODUCTION ORALE - Confiance mobilité (10%)
  // =============================================================================

  // 5.1 Question trajet complet
  exercises.push({
    id: 'speech_journey_question',
    type: 'speech_recognition',
    vocabularyItem: unit12Vocabulary[9],
    question: 'Demandez où va le bus pour Kirchberg',
    correctAnswer: 'Wou geet de Bus op Kirchberg?',
    expectedSentence: 'Wou geet de Bus op Kirchberg?',
    hint: 'VOO gate de BUS op KIRK-berg?',
    context: 'Production orale: question trajet pratique'
  })

  return exercises
}

// Métriques d'engagement Unit 12 spécifiques
export function getUnit12EngagementMetrics() {
  const exercises = generateUnit12Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    typeDistribution,
    engagementStrategy: {
      quickWins: 20, // Transports universels (bus, train)
      culturalHooks: 25, // Spécificités Luxembourg (CFL, tram, gratuit)
      spacedRepetition: 20, // Volonté + mouvement
      contextVariation: 25, // Types transport/destinations
      oralProduction: 10 // Confiance questions trajet
    },
    transportAuthenticity: {
      nationalSystems: ['CFL (ferroviaire)', 'Tram Luxembourg'],
      uniqueFeatures: ['Transport public gratuit (2020)'],
      destinations: ['Kirchberg (business)', 'Gare Centrale'],
      practicalModes: ['Bus urbain', 'Train CFL', 'Tram moderne', 'Auto personnel']
    },
    targetMetrics: {
      retentionD7: '60%+',
      timeToCompletion: '6-7min',
      satisfactionScore: '4.3+/5',
      mobilityConfidence: '85%+' // Nouveau: confiance en mobilité
    }
  }
}

// Validation progression Unit 11 → Unit 12
export function validateUnit12Progression() {
  return {
    progressionFrom: 'Unit 11 (Restaurant gastronomie)',
    progressionTo: 'Unit 12 (Transport mobilité)',
    scaffolding: 'Expérience culturelle → Mobilité pratique',
    continuityElements: ['Questions pratiques', 'Destinations spécifiques', 'Contextes quotidiens'],
    newComplexity: 'Mouvement/déplacement, systèmes transport spécialisés',
    culturalEvolution: 'Gastronomie locale → Infrastructure moderne Luxembourg',
    engagementMaintain: 'Quick wins universels + Cultural hooks système unique'
  }
}

// Définition Unit 12 - Transport Luxembourg moderne
export const learningUnit12: LearningUnit = {
  id: 'unit_12',
  title: 'Transports',
  description: 'Naviguez efficacement avec le système de transport luxembourgeois',
  level: 'A1+',
  vocabulary: unit12Vocabulary,
  exercises: generateUnit12Exercises(),
  targetScore: 85, // Cohérence section A1+
  estimatedTime: 6 // Maintien durée section 2
}