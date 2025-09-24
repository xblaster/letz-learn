// Données pour l'Unité 2 : "Présentations détaillées" - Progression scaffoldée A1

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 2 - Informations personnelles détaillées
export const unit2Vocabulary: VocabularyItem[] = [
  // VOCABULAIRE NOUVEAU (4-5 mots essentiels)
  {
    id: 'kommen',
    luxembourgish: 'kommen',
    french: 'venir',
    pronunciation: 'KOM-en',
    usage: 'Verbe de base pour indiquer l\'origine : "ech kommen aus..."'
  },
  {
    id: 'aus',
    luxembourgish: 'aus',
    french: 'de/du',
    pronunciation: 'ows',
    usage: 'Préposition d\'origine : "aus Lëtzebuerg" (du Luxembourg)'
  },
  {
    id: 'letzebuerg',
    luxembourgish: 'Lëtzebuerg',
    french: 'Luxembourg',
    pronunciation: 'LET-ze-boorg',
    usage: 'Nom du pays en luxembourgeois'
  },
  {
    id: 'schaffen',
    luxembourgish: 'schaffen',
    french: 'travailler',
    pronunciation: 'SHAF-en',
    usage: 'Verbe pour parler de profession : "ech schaffen als..."'
  },
  {
    id: 'als',
    luxembourgish: 'als',
    french: 'comme/en tant que',
    pronunciation: 'als',
    usage: 'Préposition pour préciser la profession'
  },

  // RÉVISION UNIT 1 (30% du vocabulaire)
  {
    id: 'ech',
    luxembourgish: 'ech',
    french: 'je',
    pronunciation: 'ekh',
    usage: 'Pronom personnel première personne (révision Unit1)'
  },
  {
    id: 'sinn',
    luxembourgish: 'sinn',
    french: 'suis',
    pronunciation: 'zin',
    usage: 'Verbe être première personne (révision Unit1)'
  }
]

// Générateur d'exercices avec progression scaffoldée en 5 étapes
export const generateUnit2Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : VOCABULAIRE DE BASE (reconnaissance nouveau vocabulaire)
  // =============================================================================

  // 1.1 Reconnaissance audio "kommen"
  exercises.push({
    id: 'audio_kommen',
    type: 'audio_recognition',
    vocabularyItem: unit2Vocabulary[0], // kommen
    question: 'Que signifie ce verbe luxembourgeois ?',
    options: ['venir', 'partir', 'rester'].sort(() => Math.random() - 0.5),
    correctAnswer: 'venir',
    context: 'Verbe essentiel pour parler d\'origine'
  })

  // 1.2 Traduction vocabulaire pays
  exercises.push({
    id: 'translation_letzebuerg',
    type: 'translation',
    vocabularyItem: unit2Vocabulary[2],
    question: 'Comment dit-on "Luxembourg" en luxembourgeois ?',
    options: ['Lëtzebuerg', 'Letzebuerg', 'Luxenburg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Lëtzebuerg',
    context: 'Nom officiel du pays en luxembourgeois'
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ SIMPLE (2-3 mots avec révision Unit1)
  // =============================================================================

  // 2.1 Construction guidée "ech kommen"
  exercises.push({
    id: 'progressive_ech_kommen',
    type: 'progressive_building',
    vocabularyItem: unit2Vocabulary[0],
    question: 'Assemblez : pronom + verbe pour dire "je viens"',
    wordBank: ['ech', 'kommen'],
    correctAnswer: 'ech kommen',
    expectedSentence: 'ech kommen',
    hint: 'Utilisez le pronom de l\'Unit1 + le nouveau verbe',
    context: 'Construction de base pour parler d\'origine'
  })

  // 2.2 Reconnaissance motif origine
  exercises.push({
    id: 'pattern_origin',
    type: 'pattern_recognition',
    vocabularyItem: unit2Vocabulary[1], // aus
    question: 'Quel motif exprime l\'origine géographique ?',
    options: ['ech kommen aus', 'ech sinn aus', 'ech schaffen aus'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech kommen aus',
    context: 'Structure standard pour indiquer d\'où on vient'
  })

  // =============================================================================
  // ÉTAPE 3 : CONSTRUCTION PHRASES COURTES (3-4 mots)
  // =============================================================================

  // 3.1 Construction complète origine Luxembourg
  exercises.push({
    id: 'progressive_aus_letzebuerg',
    type: 'progressive_building',
    vocabularyItem: unit2Vocabulary[2],
    question: 'Complétez : "ech kommen _____ Lëtzebuerg"',
    wordBank: ['aus', 'sinn', 'als'],
    correctAnswer: 'aus',
    expectedSentence: 'ech kommen aus Lëtzebuerg',
    hint: 'Quelle préposition utilise-t-on pour l\'origine ?',
    context: 'Expression complète de nationalité luxembourgeoise'
  })

  // 3.2 Complétion phrase profession
  exercises.push({
    id: 'completion_profession',
    type: 'phrase_completion',
    vocabularyItem: unit2Vocabulary[3], // schaffen
    question: 'Complétez : "ech _____ als dokter"',
    options: ['schaffen', 'kommen', 'sinn'].sort(() => Math.random() - 0.5),
    correctAnswer: 'schaffen',
    expectedSentence: 'ech schaffen als dokter',
    context: 'Expression de la profession en contexte médical'
  })

  // =============================================================================
  // ÉTAPE 4 : CONSTRUCTION PHRASES COMPLÈTES (4-6 mots)
  // =============================================================================

  // 4.1 Présentation complète avec origine
  exercises.push({
    id: 'sentence_origin_complete',
    type: 'sentence_construction',
    vocabularyItem: unit2Vocabulary[0],
    question: 'Présentez-vous comme venant de France (Frankräich)',
    wordBank: ['ech', 'kommen', 'aus', 'Frankräich', 'sinn'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech kommen aus Frankräich',
    expectedSentence: 'ech kommen aus Frankräich',
    hint: 'Structure : pronom + verbe + préposition + pays',
    context: 'Présentation d\'origine française au Luxembourg'
  })

  // 4.2 Remise en ordre profession
  exercises.push({
    id: 'word_order_profession',
    type: 'word_ordering',
    vocabularyItem: unit2Vocabulary[3],
    question: 'Remettez en ordre pour dire votre profession d\'enseignant',
    wordBank: ['als', 'ech', 'Enseignant', 'schaffen'],
    correctAnswer: 'ech schaffen als Enseignant',
    expectedSentence: 'ech schaffen als Enseignant',
    hint: 'pronom + verbe + préposition + profession',
    context: 'Présentation professionnelle dans l\'éducation'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE LUXEMBOURGEOISE
  // =============================================================================

  // 5.1 Dialogue networking professionnel Luxembourg-Ville
  exercises.push({
    id: 'dialogue_networking',
    type: 'dialogue_completion',
    vocabularyItem: unit2Vocabulary[0],
    question: 'Événement networking Chambre de Commerce. Vous vous présentez en détail :',
    options: [
      'ech kommen aus Belsch an ech schaffen als Consultant',
      'ech sinn aus Belsch an ech kommen als Consultant',
      'ech schaffen aus Belsch an ech kommen als Consultant'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech kommen aus Belsch an ech schaffen als Consultant',
    context: 'Contexte business luxembourgeois authentique'
  })

  // 5.2 Reconnaissance vocale présentation complète
  exercises.push({
    id: 'speech_detailed_presentation',
    type: 'speech_recognition',
    vocabularyItem: unit2Vocabulary[2],
    question: 'Prononcez votre présentation complète : "ech kommen aus Lëtzebuerg"',
    correctAnswer: 'ech kommen aus Lëtzebuerg',
    expectedSentence: 'ech kommen aus Lëtzebuerg',
    hint: 'Prononcez : ekh KOM-en ows LET-ze-boorg',
    context: 'Production orale identité luxembourgeoise'
  })

  // 5.3 Application créative - nouveaux résidents
  exercises.push({
    id: 'creative_new_resident',
    type: 'dialogue_completion',
    vocabularyItem: unit2Vocabulary[3],
    question: 'Inscription commune Esch-sur-Alzette. Agent demande votre profession :',
    options: [
      'ech schaffen als Ingenieur',
      'ech kommen als Ingenieur',
      'ech sinn als Ingenieur'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech schaffen als Ingenieur',
    context: 'Procédures administratives luxembourgeoises'
  })

  return exercises
}

// Fonctions utilitaires spécifiques Unit2
function getRandomCountryDistractor(correct: string): string {
  const countries = ['Däitschland', 'Frankräich', 'Belsch', 'Hollând', 'Spuenien']
  const filtered = countries.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function getRandomProfessionDistractor(correct: string): string {
  const professions = ['Dokter', 'Enseignant', 'Ingenieur', 'Infirmier', 'Comptable']
  const filtered = professions.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

// Validation progression Unit2 spécifique
export function validateUnit2Progression(): {
  isValid: boolean
  issues: string[]
  vocabularyProgression: 'poor' | 'good' | 'excellent'
  reviewIntegration: number // pourcentage révision Unit1
} {
  const exercises = generateUnit2Exercises()
  const issues: string[] = []

  // Vérifier intégration vocabulaire Unit1
  const unit1ReviewCount = exercises.filter(ex =>
    ex.vocabularyItem?.id === 'ech' ||
    ex.vocabularyItem?.id === 'sinn' ||
    ex.expectedSentence?.includes('ech') ||
    ex.expectedSentence?.includes('sinn')
  ).length

  const reviewPercentage = (unit1ReviewCount / exercises.length) * 100

  if (reviewPercentage < 25) {
    issues.push('Pas assez de révision du vocabulaire Unit1 (minimum 30%)')
  }

  // Vérifier progression culturelle authentique
  const luxContextCount = exercises.filter(ex =>
    ex.context?.includes('Luxembourg') ||
    ex.context?.includes('luxembourgeois') ||
    ex.expectedSentence?.includes('Lëtzebuerg')
  ).length

  if (luxContextCount < 6) {
    issues.push('Contextes luxembourgeois insuffisants pour authenticité culturelle')
  }

  const vocabularyProgression = issues.length === 0 ? 'excellent' :
                               issues.length <= 1 ? 'good' : 'poor'

  return {
    isValid: issues.length === 0,
    issues,
    vocabularyProgression,
    reviewIntegration: Math.round(reviewPercentage)
  }
}

// Définition de l'Unité 2 complète
export const learningUnit2: LearningUnit = {
  id: 'unit_2',
  title: 'Présentations détaillées',
  description: 'Expansion des présentations : origine, nationalité et profession en contexte luxembourgeois',
  level: 'A1',
  vocabulary: unit2Vocabulary,
  exercises: generateUnit2Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80,
  estimatedTime: 5
}