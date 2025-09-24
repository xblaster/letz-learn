// Données pour l'Unité 3 : "Nombres essentiels" - Progression scaffoldée A1

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité 3 - Nombres et applications pratiques
export const unit3Vocabulary: VocabularyItem[] = [
  // NOMBRES DE BASE (0-10 prioritaires)
  {
    id: 'null',
    luxembourgish: 'null',
    french: 'zéro',
    pronunciation: 'noul',
    usage: 'Nombre zéro en luxembourgeois'
  },
  {
    id: 'een',
    luxembourgish: 'een',
    french: 'un',
    pronunciation: 'eeën',
    usage: 'Nombre un, utilisé pour compter et l\'âge'
  },
  {
    id: 'zwou',
    luxembourgish: 'zwou',
    french: 'deux',
    pronunciation: 'zwou',
    usage: 'Nombre deux, base pour les numéros de téléphone'
  },
  {
    id: 'dräi',
    luxembourgish: 'dräi',
    french: 'trois',
    pronunciation: 'dräy',
    usage: 'Nombre trois, utilisé dans les adresses'
  },
  {
    id: 'véier',
    luxembourgish: 'véier',
    french: 'quatre',
    pronunciation: 'VEE-er',
    usage: 'Nombre quatre, commun dans les codes postaux luxembourgeois'
  },

  // APPLICATIONS PRATIQUES
  {
    id: 'joer',
    luxembourgish: 'Joer',
    french: 'ans',
    pronunciation: 'yor',
    usage: 'Unité d\'âge : "ech sinn 25 Joer"'
  },
  {
    id: 'telefon',
    luxembourgish: 'Telefon',
    french: 'téléphone',
    pronunciation: 'te-le-FON',
    usage: 'Téléphone pour donner son numéro'
  },

  // RÉVISION UNITÉS PRÉCÉDENTES (30%)
  {
    id: 'ech',
    luxembourgish: 'ech',
    french: 'je',
    pronunciation: 'ekh',
    usage: 'Pronom personnel (révision)'
  },
  {
    id: 'sinn',
    luxembourgish: 'sinn',
    french: 'suis',
    pronunciation: 'zin',
    usage: 'Verbe être (révision pour âge)'
  }
]

// Générateur d'exercices avec progression scaffoldée
export const generateUnit3Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : RECONNAISSANCE NOMBRES DE BASE (0-5)
  // =============================================================================

  // 1.1 Reconnaissance audio nombres
  exercises.push({
    id: 'audio_numbers_basic',
    type: 'audio_recognition',
    vocabularyItem: unit3Vocabulary[1], // een
    question: 'Quel nombre entendez-vous ?',
    options: ['un', 'deux', 'trois'].sort(() => Math.random() - 0.5),
    correctAnswer: 'un',
    context: 'Reconnaissance auditive des nombres de base'
  })

  // 1.2 Traduction nombres essentiels
  exercises.push({
    id: 'translation_zwou',
    type: 'translation',
    vocabularyItem: unit3Vocabulary[2],
    question: 'Comment dit-on "deux" en luxembourgeois ?',
    options: ['zwou', 'dräi', 'véier'].sort(() => Math.random() - 0.5),
    correctAnswer: 'zwou',
    context: 'Vocabulaire numérique de base'
  })

  // =============================================================================
  // ÉTAPE 2 : ASSEMBLAGE GUIDÉ (nombres + contexte)
  // =============================================================================

  // 2.1 Construction âge simple
  exercises.push({
    id: 'progressive_age_simple',
    type: 'progressive_building',
    vocabularyItem: unit3Vocabulary[5], // joer
    question: 'Assemblez pour dire "trois ans"',
    wordBank: ['dräi', 'Joer'],
    correctAnswer: 'dräi Joer',
    expectedSentence: 'dräi Joer',
    hint: 'nombre + unité de temps',
    context: 'Expression de l\'âge en luxembourgeois'
  })

  // 2.2 Reconnaissance motif téléphone
  exercises.push({
    id: 'pattern_phone',
    type: 'pattern_recognition',
    vocabularyItem: unit3Vocabulary[6], // telefon
    question: 'Comment présente-t-on un numéro de téléphone ?',
    options: ['mäin Telefon ass', 'ech Telefon sinn', 'mäin sinn Telefon'].sort(() => Math.random() - 0.5),
    correctAnswer: 'mäin Telefon ass',
    context: 'Structure pour donner son numéro de téléphone'
  })

  // =============================================================================
  // ÉTAPE 3 : CONSTRUCTION PHRASES COURTES (âge, numéro)
  // =============================================================================

  // 3.1 Phrase complète âge avec révision
  exercises.push({
    id: 'progressive_age_complete',
    type: 'progressive_building',
    vocabularyItem: unit3Vocabulary[8], // sinn (révision)
    question: 'Complétez : "ech _____ zwou Joer"',
    wordBank: ['sinn', 'kommen', 'schaffen'],
    correctAnswer: 'sinn',
    expectedSentence: 'ech sinn zwou Joer',
    hint: 'Verbe être + âge (révision Unit1)',
    context: 'Expression personnelle de l\'âge'
  })

  // 3.2 Complétion numéro téléphone
  exercises.push({
    id: 'completion_phone_number',
    type: 'phrase_completion',
    vocabularyItem: unit3Vocabulary[6],
    question: 'Complétez : "mäin _____ ass 621"',
    options: ['Telefon', 'Joer', 'Numm'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Telefon',
    expectedSentence: 'mäin Telefon ass 621',
    context: 'Début de numéro de téléphone luxembourgeois typique'
  })

  // =============================================================================
  // ÉTAPE 4 : CONSTRUCTION PHRASES COMPLÈTES (4-6 mots)
  // =============================================================================

  // 4.1 Présentation complète avec âge
  exercises.push({
    id: 'sentence_age_presentation',
    type: 'sentence_construction',
    vocabularyItem: unit3Vocabulary[1],
    question: 'Présentez-vous avec l\'âge de 4 ans',
    wordBank: ['ech', 'sinn', 'véier', 'Joer'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ech sinn véier Joer',
    expectedSentence: 'ech sinn véier Joer',
    hint: 'pronom + verbe + nombre + unité',
    context: 'Présentation personnelle avec âge'
  })

  // 4.2 Remise en ordre numéro complet
  exercises.push({
    id: 'word_order_phone_complete',
    type: 'word_ordering',
    vocabularyItem: unit3Vocabulary[6],
    question: 'Ordonnez pour donner votre numéro de téléphone',
    wordBank: ['mäin', 'Telefon', 'ass', 'véier', 'null', 'een'],
    correctAnswer: 'mäin Telefon ass véier null een',
    expectedSentence: 'mäin Telefon ass véier null een',
    hint: 'possessif + objet + verbe + chiffres',
    context: 'Communication du numéro de téléphone'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION CONTEXTUELLE LUXEMBOURGEOISE
  // =============================================================================

  // 5.1 Dialogue inscription crèche Luxembourg
  exercises.push({
    id: 'dialogue_creche_age',
    type: 'dialogue_completion',
    vocabularyItem: unit3Vocabulary[5],
    question: 'Inscription crèche Kirchberg. Âge de votre enfant de 2 ans :',
    options: [
      'mäin Kand ass zwou Joer',
      'mäin Kand sinn zwou Joer',
      'mäin Kand kommen zwou Joer'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'mäin Kand ass zwou Joer',
    context: 'Services de garde d\'enfants luxembourgeois'
  })

  // 5.2 Reconnaissance vocale numéro téléphone
  exercises.push({
    id: 'speech_phone_number',
    type: 'speech_recognition',
    vocabularyItem: unit3Vocabulary[6],
    question: 'Donnez votre numéro : "mäin Telefon ass..."',
    correctAnswer: 'mäin Telefon ass',
    expectedSentence: 'mäin Telefon ass',
    hint: 'Prononcez : mäyn te-le-FON ass',
    context: 'Communication de coordonnées personnelles'
  })

  // 5.3 Application pratique - rendez-vous médical
  exercises.push({
    id: 'creative_medical_appointment',
    type: 'dialogue_completion',
    vocabularyItem: unit3Vocabulary[1],
    question: 'Rendez-vous pédiatre. Âge de l\'enfant (1 an) :',
    options: [
      'een Joer',
      'een sinn',
      'een Telefon'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'een Joer',
    context: 'Système de santé luxembourgeois'
  })

  // 5.4 Exercice bonus - Code postal Luxembourg
  exercises.push({
    id: 'bonus_postal_code',
    type: 'pattern_recognition',
    vocabularyItem: unit3Vocabulary[4], // véier
    question: 'Quel chiffre commence tous les codes postaux luxembourgeois ?',
    options: ['véier', 'dräi', 'zwou'].sort(() => Math.random() - 0.5),
    correctAnswer: 'véier',
    context: 'Connaissance pratique système postal luxembourgeois'
  })

  return exercises
}

// Fonctions utilitaires pour nombres
function getRandomNumberDistractor(correct: string): string {
  const numbers = ['een', 'zwou', 'dräi', 'véier', 'fënnef', 'sechs']
  const filtered = numbers.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function generateRandomLuxembourgishPhone(): string {
  // Format téléphone luxembourgeois : 6xx xxx xxx
  const numbers = ['null', 'een', 'zwou', 'dräi', 'véier']
  return `6${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}`
}

// Validation spécifique Unit3
export function validateUnit3Progression(): {
  isValid: boolean
  issues: string[]
  numericalProgression: 'poor' | 'good' | 'excellent'
  practicalApplication: number // pourcentage d'exercices pratiques
} {
  const exercises = generateUnit3Exercises()
  const issues: string[] = []

  // Vérifier applications pratiques (âge, téléphone)
  const practicalCount = exercises.filter(ex =>
    ex.context?.includes('téléphone') ||
    ex.context?.includes('âge') ||
    ex.context?.includes('crèche') ||
    ex.context?.includes('médical')
  ).length

  const practicalPercentage = (practicalCount / exercises.length) * 100

  if (practicalPercentage < 40) {
    issues.push('Pas assez d\'applications pratiques des nombres (minimum 40%)')
  }

  // Vérifier progression numérique cohérente
  const numberExercises = exercises.filter(ex =>
    ex.vocabularyItem?.id?.includes('null') ||
    ex.vocabularyItem?.id?.includes('een') ||
    ex.vocabularyItem?.id?.includes('zwou') ||
    ex.vocabularyItem?.id?.includes('dräi') ||
    ex.vocabularyItem?.id?.includes('véier')
  ).length

  if (numberExercises < 6) {
    issues.push('Progression numérique insuffisante pour base solide')
  }

  const numericalProgression = issues.length === 0 ? 'excellent' :
                              issues.length <= 1 ? 'good' : 'poor'

  return {
    isValid: issues.length === 0,
    issues,
    numericalProgression,
    practicalApplication: Math.round(practicalPercentage)
  }
}

// Définition de l'Unité 3 complète
export const learningUnit3: LearningUnit = {
  id: 'unit_3',
  title: 'Nombres essentiels',
  description: 'Nombres 0-10 et applications pratiques : âge, téléphone, codes postaux luxembourgeois',
  level: 'A1',
  vocabulary: unit3Vocabulary,
  exercises: generateUnit3Exercises().filter(ex => ex.type !== 'progressive_building'),
  targetScore: 80,
  estimatedTime: 6 // Légèrement plus long pour maîtriser les nombres
}