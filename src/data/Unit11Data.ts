// Unit 11: Au restaurant - Stratégie Duolingo A1+ gastronomie Luxembourg
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 11 - Restaurant Luxembourg authentique
export const unit11Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - mots universels/familiers
  {
    id: 'restaurant',
    luxembourgish: 'Restaurant',
    french: 'Restaurant',
    pronunciation: 'res-to-RANG',
    usage: 'Identique au français, universellement compris'
  },
  {
    id: 'menu',
    luxembourgish: 'Menu',
    french: 'Menu',
    pronunciation: 'me-NÜ',
    usage: 'Carte des plats, mot international'
  },
  {
    id: 'waasser',
    luxembourgish: 'Waasser',
    french: 'eau',
    pronunciation: 'VAH-ser',
    usage: 'Boisson essentielle, demande fréquente'
  },

  // TIER 2: Cultural hooks - plats luxembourgeois typiques
  {
    id: 'judd_mat_gaardebounen',
    luxembourgish: 'Judd mat Gaardebounen',
    french: 'Porc fumé aux haricots',
    pronunciation: 'YUDD mat GAR-de-boo-nen',
    usage: 'Plat national luxembourgeois incontournable'
  },
  {
    id: 'bouneschlupp',
    luxembourgish: 'Bouneschlupp',
    french: 'Soupe aux haricots verts',
    pronunciation: 'BOO-ne-shlup',
    usage: 'Soupe traditionnelle luxembourgeoise'
  },
  {
    id: 'riesling',
    luxembourgish: 'Riesling',
    french: 'Riesling',
    pronunciation: 'REES-ling',
    usage: 'Vin blanc luxembourgeois de la Moselle'
  },

  // TIER 3: Vocabulaire restaurant essentiel
  {
    id: 'bestellen',
    luxembourgish: 'bestellen',
    french: 'commander',
    pronunciation: 'be-SHTELL-en',
    usage: 'Action de passer commande'
  },
  {
    id: 'rechnung',
    luxembourgish: 'Rechnung',
    french: 'addition',
    pronunciation: 'REKH-nung',
    usage: 'Demande de facture en fin de repas'
  },
  {
    id: 'lécker',
    luxembourgish: 'Lécker',
    french: 'délicieux',
    pronunciation: 'LEK-er',
    usage: 'Compliment culinaire typiquement luxembourgeois'
  },

  // TIER 4: Expressions restauration pratiques
  {
    id: 'ech_hätt_gär',
    luxembourgish: 'Ech hätt gär',
    french: 'J\'aimerais bien',
    pronunciation: 'ekh HÄTT gär',
    usage: 'Formule polie pour commander'
  },
  {
    id: 'dat_räicht',
    luxembourgish: 'Dat räicht',
    french: 'Ça suffit / C\'est tout',
    pronunciation: 'dat RYKHT',
    usage: 'Phrase pour indiquer que c\'est suffisant'
  }
]

// Générateur d'exercices - Restaurant avec progression culturelle
export const generateUnit11Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // PHASE 1: QUICK WINS - Confiance avec universels (20%)
  // =============================================================================

  // 1.1 Reconnaissance mots universels
  exercises.push({
    id: 'quick_win_restaurant',
    type: 'audio_recognition',
    vocabularyItem: unit11Vocabulary[0], // Restaurant
    question: 'Vous entendez parler d\'un lieu pour manger. De quoi s\'agit-il ?',
    options: ['Restaurant', 'Magasin', 'Bureau'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Restaurant',
    context: 'Quick win: mot universel'
  })

  // 1.2 Menu familier
  exercises.push({
    id: 'quick_win_menu',
    type: 'translation',
    vocabularyItem: unit11Vocabulary[1],
    question: 'Comment dit-on "menu" en luxembourgeois ?',
    options: ['Menu', 'Rechnung', 'Waasser'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Menu',
    context: 'Quick win: mot international'
  })

  // =============================================================================
  // PHASE 2: CULTURAL HOOKS - Gastronomie Luxembourg authentique (25%)
  // =============================================================================

  // 2.1 Plat national incontournable
  exercises.push({
    id: 'cultural_national_dish',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[3],
    question: 'Restaurant traditionnel à Luxembourg-Ville. Le serveur recommande le plat national :',
    options: ['Judd mat Gaardebounen', 'Bouneschlupp', 'Riesling'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Judd mat Gaardebounen',
    context: 'Cultural hook: plat national emblématique'
  })

  // 2.2 Spécialité soupe traditionnelle
  exercises.push({
    id: 'cultural_traditional_soup',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[4],
    question: 'Menu du jour dans une brasserie luxembourgeoise. Entrée traditionnelle :',
    options: ['Bouneschlupp', 'Waasser', 'Menu'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Bouneschlupp',
    context: 'Cultural hook: soupe traditionnelle'
  })

  // 2.3 Vin de la Moselle luxembourgeoise
  exercises.push({
    id: 'cultural_local_wine',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[5],
    question: 'Dégustation à Remich (Route des Vins). Vin blanc local recommandé :',
    options: ['Riesling', 'Waasser', 'Lécker'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Riesling',
    context: 'Cultural hook: viticulture luxembourgeoise'
  })

  // =============================================================================
  // PHASE 3: SPACED REPETITION - Politesse + restaurant (20%)
  // =============================================================================

  // 3.1 Réintégration politesse (Units 9-10) + commande
  exercises.push({
    id: 'spaced_polite_ordering',
    type: 'sentence_construction',
    vocabularyItem: unit11Vocabulary[9],
    question: 'Assemblez une commande polie en utilisant la formule de politesse',
    wordBank: ['Ech', 'hätt', 'gär', 'Waasser'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech hätt gär Waasser',
    expectedSentence: 'Ech hätt gär Waasser',
    hint: 'Structure polie: Je + aimerais + bien + boisson',
    context: 'Spaced repetition: politesse + commande'
  })

  // 3.2 Pattern commande avec élément connu
  exercises.push({
    id: 'spaced_ordering_pattern',
    type: 'progressive_building',
    vocabularyItem: unit11Vocabulary[6],
    question: 'Construisez l\'action de commander au restaurant',
    wordBank: ['Ech', 'wëll', 'bestellen'],
    correctAnswer: 'Ech wëll bestellen',
    expectedSentence: 'Ech wëll bestellen',
    hint: 'Je + vouloir + commander (réutilisation "wëll" Unit 10)',
    context: 'Pattern familier: volonté + action'
  })

  // =============================================================================
  // PHASE 4: CONTEXT VARIATION - Types restaurants différents (25%)
  // =============================================================================

  // 4.1 Contexte formel (restaurant gastronomique)
  exercises.push({
    id: 'context_fine_dining',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[9],
    question: 'Restaurant gastronomique Clairefontaine (Luxembourg). Commande formelle :',
    options: ['Ech hätt gär', 'Bestellen', 'Dat räicht'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech hätt gär',
    context: 'Context variation: restaurant haut de gamme'
  })

  // 4.2 Contexte informel (brasserie locale)
  exercises.push({
    id: 'context_local_brasserie',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[6],
    question: 'Brasserie de quartier à Esch. Commande décontractée :',
    options: ['Bestellen', 'Ech hätt gär', 'Rechnung'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Bestellen',
    context: 'Context variation: établissement décontracté'
  })

  // 4.3 Fin de repas (demande addition)
  exercises.push({
    id: 'context_bill_request',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[7],
    question: 'Fin de repas. Vous demandez à payer :',
    options: ['Rechnung', 'Menu', 'Bestellen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Rechnung',
    context: 'Context variation: fin de service'
  })

  // 4.4 Compliment culinaire
  exercises.push({
    id: 'context_food_compliment',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[8],
    question: 'Après avoir goûté le Judd mat Gaardebounen, vous complimentez :',
    options: ['Lécker', 'Dat räicht', 'Waasser'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Lécker',
    context: 'Context variation: appréciation culinaire'
  })

  // =============================================================================
  // PHASE 5: PRODUCTION ORALE - Confiance restaurant (10%)
  // =============================================================================

  // 5.1 Commande complète orale
  exercises.push({
    id: 'speech_complete_order',
    type: 'speech_recognition',
    vocabularyItem: unit11Vocabulary[9],
    question: 'Prononcez votre commande polie pour le plat national',
    correctAnswer: 'Ech hätt gär Judd mat Gaardebounen',
    expectedSentence: 'Ech hätt gär Judd mat Gaardebounen',
    hint: 'ekh HÄTT gär YUDD mat GAR-de-boo-nen',
    context: 'Production orale: commande authentique'
  })

  return exercises
}

// Métriques d'engagement Unit 11 spécifiques
export function getUnit11EngagementMetrics() {
  const exercises = generateUnit11Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    typeDistribution,
    engagementStrategy: {
      quickWins: 20, // Mots universels (restaurant, menu)
      culturalHooks: 25, // Gastronomie luxembourgeoise authentique
      spacedRepetition: 20, // Politesse Units précédentes + restaurant
      contextVariation: 25, // Types restaurants (gastronomique/brasserie)
      oralProduction: 10 // Confiance commande orale
    },
    culturalAuthenticity: {
      nationalDishes: ['Judd mat Gaardebounen', 'Bouneschlupp'],
      localWines: ['Riesling (Moselle)'],
      restaurantTypes: ['Gastronomique', 'Brasserie locale'],
      locations: ['Luxembourg-Ville', 'Esch', 'Remich']
    },
    targetMetrics: {
      retentionD7: '60%+',
      timeToCompletion: '6-7min',
      satisfactionScore: '4.3+/5',
      culturalAppreciation: '80%+' // Nouveau: appréciation culture culinaire
    }
  }
}

// Validation progression Unit 10 → Unit 11
export function validateUnit11Progression() {
  return {
    progressionFrom: 'Unit 10 (Shopping magasins)',
    progressionTo: 'Unit 11 (Restaurant gastronomie)',
    scaffolding: 'Transactions commerciales → Expérience culturelle',
    continuityElements: ['Politesse commande', 'Prix/paiement', 'Contextes formels/informels'],
    newComplexity: 'Vocabulaire culinaire spécialisé, culture gastronomique',
    culturalEvolution: 'Commerce pratique → Immersion culturelle Luxembourg',
    engagementMaintain: 'Quick wins universels + Cultural hooks gastronomiques'
  }
}

// Définition Unit 11 - Restaurant Luxembourg gastronomique
export const learningUnit11: LearningUnit = {
  id: 'unit_11',
  title: 'Au restaurant',
  description: 'Découvrez la gastronomie luxembourgeoise et commandez avec aisance',
  level: 'A1+',
  vocabulary: unit11Vocabulary,
  exercises: generateUnit11Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 85, // Maintien cohérence section A1+
  estimatedTime: 6 // Cohérence avec autres unités section 2
}