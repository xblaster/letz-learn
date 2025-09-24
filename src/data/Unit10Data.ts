// Unit 10: Au magasin - Stratégie Duolingo A1+ shopping authentique
// Section 2: Communication quotidienne (A1+)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire Unit 10 - Shopping Luxembourg authentique
export const unit10Vocabulary: VocabularyItem[] = [
  // TIER 1: Quick wins - nombres et expressions universelles
  {
    id: 'wéivill_kascht',
    luxembourgish: 'Wéivill kascht et?',
    french: 'Combien ça coûte ?',
    pronunciation: 'VAY-vill KASHT et',
    usage: 'Question essentielle dans tous les magasins'
  },
  {
    id: 'euro',
    luxembourgish: 'Euro',
    french: 'Euro',
    pronunciation: 'OY-ro',
    usage: 'Monnaie du Luxembourg, identique au français'
  },
  {
    id: 'ech_wëll',
    luxembourgish: 'Ech wëll',
    french: 'Je voudrais',
    pronunciation: 'ekh VILL',
    usage: 'Formule de politesse pour demander quelque chose'
  },

  // TIER 2: Cultural hooks - magasins luxembourgeois typiques
  {
    id: 'delhaize',
    luxembourgish: 'Delhaize',
    french: 'Delhaize',
    pronunciation: 'del-HAYES',
    usage: 'Chaîne de supermarchés populaire au Luxembourg'
  },
  {
    id: 'auchan',
    luxembourgish: 'Auchan',
    french: 'Auchan',
    pronunciation: 'oh-SHAN',
    usage: 'Grand magasin à Kirchberg et autres'
  },

  // TIER 3: Vocabulaire shopping essentiel
  {
    id: 'kafen',
    luxembourgish: 'kafen',
    french: 'acheter',
    pronunciation: 'KAH-fen',
    usage: 'Verbe principal pour les achats'
  },
  {
    id: 'bezuelen',
    luxembourgish: 'bezuelen',
    french: 'payer',
    pronunciation: 'be-TSOO-len',
    usage: 'Action de paiement'
  },
  {
    id: 'kaart',
    luxembourgish: 'Kaart',
    french: 'carte',
    pronunciation: 'KAHRT',
    usage: 'Carte bancaire, très utilisée au Luxembourg'
  },

  // TIER 4: Expressions pratiques shopping
  {
    id: 'dat_ass_deier',
    luxembourgish: 'Dat ass deier',
    french: 'C\'est cher',
    pronunciation: 'dat ASS DAY-er',
    usage: 'Réaction face aux prix élevés'
  },
  {
    id: 'ech_huelen',
    luxembourgish: 'Ech huelen et',
    french: 'Je le prends',
    pronunciation: 'ekh HOO-len et',
    usage: 'Décision d\'achat positive'
  }
]

// Générateur d'exercices - Shopping pratique avec engagement optimal
export const generateUnit10Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // PHASE 1: QUICK WINS - Confiance immédiate avec universels (20%)
  // =============================================================================

  // 1.1 Recognition motif familier (Euro)
  exercises.push({
    id: 'quick_win_euro',
    type: 'audio_recognition',
    vocabularyItem: unit10Vocabulary[1], // Euro
    question: 'Vous entendez parler de prix. Quelle monnaie utilise-t-on ?',
    options: ['Euro', 'Dollar', 'Franc'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Euro',
    context: 'Quick win: monnaie universelle'
  })

  // 1.2 Question universelle shopping
  exercises.push({
    id: 'quick_win_price_question',
    type: 'translation',
    vocabularyItem: unit10Vocabulary[0],
    question: 'Comment demander le prix en luxembourgeois ?',
    options: ['Wéivill kascht et?', 'Ech wëll', 'Dat ass deier'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéivill kascht et?',
    context: 'Quick win: question prix universelle'
  })

  // =============================================================================
  // PHASE 2: CULTURAL HOOKS - Magasins Luxembourg authentiques (25%)
  // =============================================================================

  // 2.1 Situation authentique Delhaize (familier aux résidents)
  exercises.push({
    id: 'cultural_delhaize',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[3],
    question: 'Vous faites vos courses au Delhaize à Esch-sur-Alzette. Vous demandez le prix :',
    options: ['Wéivill kascht et?', 'Ech wëll', 'Dat ass deier'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéivill kascht et?',
    context: 'Cultural hook: supermarché luxembourgeois familier'
  })

  // 2.2 Shopping Center Kirchberg (Auchan)
  exercises.push({
    id: 'cultural_auchan_kirchberg',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[4],
    question: 'Shopping à Auchan Kirchberg. Vous voulez acheter quelque chose :',
    options: ['Ech wëll', 'Bezuelen', 'Dat ass deier'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wëll',
    context: 'Cultural hook: grand magasin Kirchberg'
  })

  // 2.3 Réaction prix Luxembourg (contexte économique)
  exercises.push({
    id: 'cultural_expensive',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[8],
    question: 'Prix au Luxembourg souvent élevés. Vous réagissez :',
    options: ['Dat ass deier', 'Ech huelen et', 'Kaart'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Dat ass deier',
    context: 'Cultural hook: réalité économique luxembourgeoise'
  })

  // =============================================================================
  // PHASE 3: SPACED REPETITION - Réintégration + nouveau (20%)
  // =============================================================================

  // 3.1 Réintégration politesse (Unit 9) + shopping
  exercises.push({
    id: 'spaced_polite_shopping',
    type: 'sentence_construction',
    vocabularyItem: unit10Vocabulary[2],
    question: 'Assemblage poli pour demander quelque chose en magasin',
    wordBank: ['Ech', 'wëll', 'dat', 'kaf''].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wëll dat kafen',
    expectedSentence: 'Ech wëll dat kafen',
    hint: 'Structure: Je + vouloir + objet + acheter',
    context: 'Spaced repetition: politesse + shopping'
  })

  // 3.2 Pattern prix avec élément connu
  exercises.push({
    id: 'spaced_price_pattern',
    type: 'progressive_building',
    vocabularyItem: unit10Vocabulary[0],
    question: 'Construisez la question complète pour le prix',
    wordBank: ['Wéivill', 'kascht', 'et', '?'],
    correctAnswer: 'Wéivill kascht et?',
    expectedSentence: 'Wéivill kascht et?',
    hint: 'Combien + coûter + ça + ?',
    context: 'Pattern familier: question prix'
  })

  // =============================================================================
  // PHASE 4: CONTEXT VARIATION - Situations shopping diverses (25%)
  // =============================================================================

  // 4.1 Contexte formel (boutique de luxe)
  exercises.push({
    id: 'context_luxury_shop',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[2],
    question: 'Boutique de luxe Place d\'Armes. Vous demandez poliment :',
    options: ['Ech wëll', 'Kafen', 'Bezuelen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wëll',
    context: 'Context variation: shopping formel'
  })

  // 4.2 Contexte informel (marché local)
  exercises.push({
    id: 'context_local_market',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[5],
    question: 'Marché local à Esch. Vous décidez d\'acheter :',
    options: ['Kafen', 'Bezuelen', 'Dat ass deier'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Kafen',
    context: 'Context variation: marché local'
  })

  // 4.3 Paiement (universel mais avec variation)
  exercises.push({
    id: 'context_payment_method',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[7],
    question: 'Caisse du magasin. Vous préférez payer par carte :',
    options: ['Mat Kaart', 'Euro', 'Ech wëll'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Mat Kaart',
    context: 'Context variation: mode de paiement'
  })

  // 4.4 Décision d'achat positive
  exercises.push({
    id: 'context_purchase_decision',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[9],
    question: 'Après avoir vu le prix, vous décidez d\'acheter :',
    options: ['Ech huelen et', 'Dat ass deier', 'Wéivill kascht et?'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech huelen et',
    context: 'Context variation: décision d\'achat'
  })

  // =============================================================================
  // PHASE 5: PRODUCTION ORALE - Confiance pratique (10%)
  // =============================================================================

  // 5.1 Dialogue shopping complet
  exercises.push({
    id: 'speech_shopping_dialogue',
    type: 'speech_recognition',
    vocabularyItem: unit10Vocabulary[0],
    question: 'Prononcez votre question pour connaître le prix',
    correctAnswer: 'Wéivill kascht et?',
    expectedSentence: 'Wéivill kascht et?',
    hint: 'VAY-vill KASHT et?',
    context: 'Production orale: shopping pratique'
  })

  return exercises
}

// Métriques d'engagement spécifiques Unit 10
export function getUnit10EngagementMetrics() {
  const exercises = generateUnit10Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    typeDistribution,
    engagementStrategy: {
      quickWins: 20, // Éléments universels (Euro, questions prix)
      culturalHooks: 25, // Magasins Luxembourg authentiques
      spacedRepetition: 20, // Politesse Unit 9 + shopping
      contextVariation: 25, // Formel/informel/différents magasins
      oralProduction: 10 // Confiance expression shopping
    },
    practicalApplication: {
      realStores: ['Delhaize', 'Auchan'],
      locations: ['Kirchberg', 'Esch-sur-Alzette', 'Place d\'Armes'],
      situations: ['Supermarché', 'Boutique luxe', 'Marché local']
    },
    targetMetrics: {
      retentionD7: '60%+',
      timeToCompletion: '5-7min',
      satisfactionScore: '4.3+/5',
      practicalUtility: '85%+' // Nouveau: utilité pratique perçue
    }
  }
}

// Validation progression Unit 9 → Unit 10
export function validateUnit10Progression() {
  return {
    progressionFrom: 'Unit 9 (Conversations simples)',
    progressionTo: 'Unit 10 (Shopping pratique)',
    scaffolding: 'Politesse sociale → Application pratique',
    continuityElements: ['Ech wëll (vouloir)', 'Questions polies', 'Contextes formels/informels'],
    newComplexity: 'Transactions, nombres, lieux spécifiques',
    culturalEvolution: 'Interactions sociales → Interactions commerciales',
    engagementMaintain: 'Quick wins + Cultural hooks Luxembourg'
  }
}

// Définition Unit 10 - Shopping Luxembourg authentique
export const learningUnit10: LearningUnit = {
  id: 'unit_10',
  title: 'Au magasin',
  description: 'Faites vos achats en toute confiance dans les magasins luxembourgeois',
  level: 'A1+',
  vocabulary: unit10Vocabulary,
  exercises: generateUnit10Exercises(),
  targetScore: 85, // Maintien niveau A1+
  estimatedTime: 6 // Même durée que Unit 9 pour cohérence section
}