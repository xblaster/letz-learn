// Données pour l'Unité E10 : "Wéi al bass du?"
// Comment demander et dire son âge avec les nombres essentiels (1-10)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E10 - Âge et nombres de base
export const unitE10Vocabulary: VocabularyItem[] = [
  // VOCABULAIRE NOUVEAU (8 mots)
  {
    id: 'wie_al_bass_du',
    luxembourgish: 'Wéi al bass du?',
    french: 'Quel âge as-tu?',
    pronunciation: 'vay ahl bas doo',
    usage: 'Question pour demander l\'âge (informel)'
  },
  {
    id: 'ech_sinn_x_joer_al',
    luxembourgish: 'Ech sinn X Joer al',
    french: 'J\'ai X ans',
    pronunciation: 'esh zin ... yoor ahl',
    usage: 'Réponse pour donner son âge'
  },
  {
    id: 'joer',
    luxembourgish: 'Joer',
    french: 'an(s)/année(s)',
    pronunciation: 'yoor',
    usage: 'Unité de temps pour l\'âge'
  },
  {
    id: 'gebuertsdag',
    luxembourgish: 'Gebuertsdag',
    french: 'anniversaire',
    pronunciation: 'ge-BUERTZ-dahk',
    usage: 'Jour de naissance'
  },
  {
    id: 'jonk',
    luxembourgish: 'jonk',
    french: 'jeune',
    pronunciation: 'yonk',
    usage: 'Adjectif pour quelqu\'un de peu d\'âge'
  },
  {
    id: 'al',
    luxembourgish: 'al',
    french: 'vieux/âgé',
    pronunciation: 'ahl',
    usage: 'Adjectif pour quelqu\'un d\'âge avancé'
  },
  {
    id: 'eent',
    luxembourgish: 'eent',
    french: 'un',
    pronunciation: 'aynt',
    usage: 'Nombre 1'
  },
  {
    id: 'zwee',
    luxembourgish: 'zwee',
    french: 'deux',
    pronunciation: 'tsvay',
    usage: 'Nombre 2'
  },

  // NOMBRES ADDITIONNELS (utilisés dans les exercices)
  {
    id: 'drai',
    luxembourgish: 'dräi',
    french: 'trois',
    pronunciation: 'dry',
    usage: 'Nombre 3'
  },
  {
    id: 'veier',
    luxembourgish: 'véier',
    french: 'quatre',
    pronunciation: 'FAY-er',
    usage: 'Nombre 4'
  },
  {
    id: 'fennef',
    luxembourgish: 'fënnef',
    french: 'cinq',
    pronunciation: 'FIN-ef',
    usage: 'Nombre 5'
  },
  {
    id: 'sechs',
    luxembourgish: 'sechs',
    french: 'six',
    pronunciation: 'zeks',
    usage: 'Nombre 6'
  },
  {
    id: 'siwen',
    luxembourgish: 'siwen',
    french: 'sept',
    pronunciation: 'ZEE-ven',
    usage: 'Nombre 7'
  },
  {
    id: 'aacht',
    luxembourgish: 'aacht',
    french: 'huit',
    pronunciation: 'ahkht',
    usage: 'Nombre 8'
  },
  {
    id: 'neng',
    luxembourgish: 'néng',
    french: 'neuf',
    pronunciation: 'naynk',
    usage: 'Nombre 9'
  },
  {
    id: 'zeng',
    luxembourgish: 'zéng',
    french: 'dix',
    pronunciation: 'tsaynk',
    usage: 'Nombre 10'
  },

  // MOTS DE RÉVISION (de E09)
  {
    id: 'wellen_review',
    luxembourgish: 'wëllen',
    french: 'vouloir',
    pronunciation: 'VEL-en',
    usage: 'Verbe vouloir (révision)'
  },
  {
    id: 'goen_review',
    luxembourgish: 'goen',
    french: 'aller',
    pronunciation: 'GOH-en',
    usage: 'Verbe aller (révision)'
  }
]

// Générateur d'exercices pour E10
export const generateUnitE10Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // EXERCICE 1 : RECONNAISSANCE AUDIO - NOMBRES D'ÂGE
  // =============================================================================
  exercises.push({
    id: 'audio_how_old',
    type: 'audio_recognition',
    vocabularyItem: unitE10Vocabulary[0], // Wéi al bass du?
    question: 'Écoutez la phrase. Quel âge a cette personne?',
    options: ['25 ans', '35 ans', '45 ans', '55 ans'],
    correctAnswer: '25 ans',
    context: 'Reconnaissance auditive: "Ech sinn fënnefanzwanzeg Joer al" (J\'ai 25 ans). Focus: reconnaître les nombres dans un contexte d\'âge.'
  })

  // =============================================================================
  // EXERCICE 2 : ASSOCIATION NOMBRES 1-5
  // =============================================================================
  exercises.push({
    id: 'word_pairing_numbers',
    type: 'word_pairing',
    vocabularyItem: unitE10Vocabulary[6], // eent
    question: 'Associez chaque nombre luxembourgeois avec sa traduction française.',
    context: 'Maîtrisez les cinq premiers nombres essentiels en luxembourgeois.',
    correctAnswer: 'all_matched',
    hint: 'Les nombres luxembourgeois ont des sonorités germaniques distinctes.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'eent', left: 'eent', right: 'un' },
      { id: 'zwee', left: 'zwee', right: 'deux' },
      { id: 'drai', left: 'dräi', right: 'trois' },
      { id: 'veier', left: 'véier', right: 'quatre' },
      { id: 'fennef', left: 'fënnef', right: 'cinq' }
    ]
  })

  // =============================================================================
  // EXERCICE 3 : RECONNAISSANCE DE MOTIFS - EXPRESSIONS D'ÂGE
  // =============================================================================
  exercises.push({
    id: 'pattern_age_expressions',
    type: 'pattern_recognition',
    vocabularyItem: unitE10Vocabulary[1], // Ech sinn X Joer al
    question: 'Quelle structure correcte permet de dire son âge en luxembourgeois?',
    options: [
      'Ech sinn [nombre] Joer al',
      'Ech hunn [nombre] Joer',
      'Ech bass [nombre] al',
      'Ech Joer [nombre] al'
    ],
    correctAnswer: 'Ech sinn [nombre] Joer al',
    context: 'La structure luxembourgeoise pour l\'âge est: "Ech sinn [nombre] Joer al" (littéralement "Je suis [nombre] années vieux/vieille")'
  })

  // =============================================================================
  // EXERCICE 4 : COMPLÉTION - ECH SINN ___ JOER AL
  // =============================================================================
  exercises.push({
    id: 'completion_age',
    type: 'phrase_completion',
    vocabularyItem: unitE10Vocabulary[1], // Ech sinn X Joer al
    question: 'Complétez: "Ech sinn ___ Joer al" pour dire "J\'ai 30 ans"',
    options: ['drësseg', 'zwanzeg', 'véierzeg', 'fofzeg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'drësseg',
    expectedSentence: 'Ech sinn drësseg Joer al',
    hint: '"drësseg" signifie 30 en luxembourgeois',
    context: 'Expression de l\'âge avec le mot "Joer" (ans/années)'
  })

  // =============================================================================
  // EXERCICE 5 : TRADUCTION - J'AI 25 ANS
  // =============================================================================
  exercises.push({
    id: 'translation_i_am_25',
    type: 'translation',
    vocabularyItem: unitE10Vocabulary[1], // Ech sinn X Joer al
    question: 'Traduisez en luxembourgeois: "J\'ai 25 ans"',
    options: [
      'Ech sinn fënnefanzwanzeg Joer al',
      'Ech hunn fënnefanzwanzeg Joer',
      'Du bass fënnefanzwanzeg Joer al',
      'Ech sinn zwanzeg Joer al'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sinn fënnefanzwanzeg Joer al',
    hint: 'Structure: Ech sinn + [nombre] + Joer al',
    context: 'En luxembourgeois, on dit "je suis X années vieux" plutôt que "j\'ai X ans"'
  })

  // =============================================================================
  // EXERCICE 6 : CONSTRUCTION DE PHRASE - DEMANDER L'ÂGE
  // =============================================================================
  exercises.push({
    id: 'sentence_ask_age',
    type: 'sentence_construction',
    vocabularyItem: unitE10Vocabulary[0], // Wéi al bass du?
    question: 'Construisez la question: "Quel âge as-tu?" en luxembourgeois.',
    wordBank: ['Wéi', 'al', 'bass', 'du', '?', 'Joer', 'sinn'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéi al bass du?',
    expectedSentence: 'Wéi al bass du?',
    hint: 'Mot à mot: "Comment vieux es-tu?"',
    context: 'Question informelle pour demander l\'âge de quelqu\'un'
  })

  // =============================================================================
  // EXERCICE 7 : REMISE EN ORDRE - ÂGE D'UN ENFANT
  // =============================================================================
  exercises.push({
    id: 'word_order_child_age',
    type: 'word_ordering',
    vocabularyItem: unitE10Vocabulary[2], // Joer
    question: 'Remettez ces mots dans l\'ordre pour dire: "Il a trois ans"',
    wordBank: ['ass', 'dräi', 'hien', 'Joer', 'al'],
    correctAnswer: 'hien ass dräi Joer al',
    expectedSentence: 'hien ass dräi Joer al',
    hint: 'Structure: Pronom + verbe être (3e personne) + nombre + Joer + al',
    context: 'Dire l\'âge d\'une tierce personne (il/elle)'
  })

  // =============================================================================
  // EXERCICE 8 : TRADUCTION - QUAND EST TON ANNIVERSAIRE?
  // =============================================================================
  exercises.push({
    id: 'translation_birthday',
    type: 'translation',
    vocabularyItem: unitE10Vocabulary[3], // Gebuertsdag
    question: 'Traduisez: "Quand est ton anniversaire?"',
    options: [
      'Wéini ass däin Gebuertsdag?',
      'Wou ass däin Gebuertsdag?',
      'Wéi al bass däin Gebuertsdag?',
      'Wéi ass däin Gebuertsdag?'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Wéini ass däin Gebuertsdag?',
    hint: '"Wéini" = "Quand", "däin" = "ton", "Gebuertsdag" = "anniversaire"',
    context: 'Question sur la date d\'anniversaire'
  })

  // =============================================================================
  // EXERCICE 9 : DIALOGUE - FÊTE D'ANNIVERSAIRE
  // =============================================================================
  exercises.push({
    id: 'dialogue_birthday_party',
    type: 'dialogue_completion',
    vocabularyItem: unitE10Vocabulary[3], // Gebuertsdag
    question: 'Complétez le dialogue à une fête d\'anniversaire:\n- Moien! Wéi al bass du haut? (Bonjour! Quel âge as-tu aujourd\'hui?)\n- Ech sinn ___ Joer al haut! (J\'ai ___ ans aujourd\'hui!)',
    options: [
      'aacht (8 ans)',
      'jonk (jeune)',
      'Gebuertsdag (anniversaire)',
      'al (vieux)'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'aacht (8 ans)',
    context: 'Contexte: Un enfant célèbre ses 8 ans. Utiliser un nombre spécifique pour répondre.'
  })

  // =============================================================================
  // EXERCICE 10 : CONSTRUCTION - ÂGES DE LA FAMILLE
  // =============================================================================
  exercises.push({
    id: 'sentence_family_ages',
    type: 'sentence_construction',
    vocabularyItem: unitE10Vocabulary[4], // jonk
    question: 'Construisez: "Ma sœur est jeune, elle a cinq ans"',
    wordBank: [
      'Meng',
      'Schwëster',
      'ass',
      'jonk',
      ',',
      'si',
      'ass',
      'fënnef',
      'Joer',
      'al'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Meng Schwëster ass jonk, si ass fënnef Joer al',
    expectedSentence: 'Meng Schwëster ass jonk, si ass fënnef Joer al',
    hint: 'Deux phrases reliées: [Meng Schwëster ass jonk] + [si ass fënnef Joer al]',
    context: 'Décrire l\'âge et la jeunesse d\'un membre de la famille'
  })

  // =============================================================================
  // EXERCICE 11 : RECONNAISSANCE VOCALE - MON ÂGE
  // =============================================================================
  exercises.push({
    id: 'speech_my_age',
    type: 'speech_recognition',
    vocabularyItem: unitE10Vocabulary[1], // Ech sinn X Joer al
    question: 'Prononcez votre âge en luxembourgeois: "Ech sinn [votre âge] Joer al"',
    correctAnswer: 'Ech sinn Joer al',
    expectedSentence: 'Ech sinn [nombre] Joer al',
    hint: 'Exemple: "Ech sinn fënnefanzwanzeg Joer al" (J\'ai 25 ans). Prononcez: "esh zin [nombre] yoor ahl"',
    context: 'Production orale: dire son propre âge en luxembourgeois'
  })

  return exercises
}

// Fonction utilitaire pour obtenir des nombres aléatoires
function getRandomNumberDistractor(correct: string, range: 'low' | 'mid' | 'high'): string {
  const lowNumbers = ['eent', 'zwee', 'dräi', 'véier', 'fënnef']
  const midNumbers = ['zéng', 'fofzeg', 'honnert']
  const highNumbers = ['zwanzeg', 'drësseg', 'véierzeg', 'fofzeg']

  let pool: string[] = []
  switch (range) {
    case 'low':
      pool = lowNumbers
      break
    case 'mid':
      pool = midNumbers
      break
    case 'high':
      pool = highNumbers
      break
  }

  const filtered = pool.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)] || pool[0]
}

// Fonction de validation de la structure des exercices
export function validateUnitE10Structure(): {
  isValid: boolean
  issues: string[]
  exerciseBalance: string
  numberCoverage: { basic: number; age: number; both: number }
} {
  const exercises = generateUnitE10Exercises()
  const issues: string[] = []

  // Vérifier le nombre d'exercices
  if (exercises.length !== 11) {
    issues.push(`Nombre d'exercices incorrect: ${exercises.length} au lieu de 11`)
  }

  // Vérifier la diversité des types d'exercices
  const typeCount = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const uniqueTypes = Object.keys(typeCount).length
  if (uniqueTypes < 6) {
    issues.push(`Pas assez de diversité dans les types d'exercices: ${uniqueTypes} types différents`)
  }

  // Vérifier l'équilibre entre nombres et expressions d'âge
  const basicNumberExercises = exercises.filter(ex =>
    ex.id.includes('number') || ex.id.includes('pairing')
  ).length

  const ageExercises = exercises.filter(ex =>
    ex.id.includes('age') || ex.id.includes('birthday')
  ).length

  const bothConcepts = exercises.length - basicNumberExercises - ageExercises

  const numberCoverage = {
    basic: basicNumberExercises,
    age: ageExercises,
    both: bothConcepts
  }

  // Les nombres et l'âge doivent être équilibrés
  if (ageExercises < 4) {
    issues.push(`Pas assez d'exercices sur l'expression de l'âge: ${ageExercises}`)
  }
  if (basicNumberExercises < 1) {
    issues.push(`Pas assez d'exercices sur les nombres de base: ${basicNumberExercises}`)
  }

  // Vérifier l'équilibre entre QCM et exercices de construction
  const qcmCount = (typeCount['audio_recognition'] || 0) +
                   (typeCount['translation'] || 0) +
                   (typeCount['dialogue_completion'] || 0) +
                   (typeCount['pattern_recognition'] || 0) +
                   (typeCount['phrase_completion'] || 0)
  const constructionCount = (typeCount['sentence_construction'] || 0) +
                           (typeCount['word_ordering'] || 0) +
                           (typeCount['speech_recognition'] || 0) +
                           (typeCount['word_pairing'] || 0)

  const qcmPercentage = Math.round((qcmCount / exercises.length) * 100)
  const constructionPercentage = Math.round((constructionCount / exercises.length) * 100)

  const exerciseBalance = `QCM: ${qcmPercentage}%, Construction: ${constructionPercentage}%`

  return {
    isValid: issues.length === 0,
    issues,
    exerciseBalance,
    numberCoverage
  }
}

// Statistiques de l'unité E10
export function getUnitE10Stats() {
  const exercises = generateUnitE10Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    vocabularyCount: unitE10Vocabulary.length,
    newWords: 8,
    numbers: 10, // nombres 1-10
    reviewWords: 2,
    typeDistribution,
    focusAreas: [
      'Demander l\'âge: Wéi al bass du?',
      'Dire son âge: Ech sinn X Joer al',
      'Nombres de base (1-10)',
      'Vocabulaire de l\'anniversaire: Gebuertsdag',
      'Adjectifs d\'âge: jonk (jeune), al (vieux)',
      'Application contextuelle: famille, fêtes d\'anniversaire'
    ],
    pedagogicalNote: 'Focus sur le contexte de l\'âge plutôt que le comptage abstrait. Nombres 1-10 seulement pour éviter surcharge cognitive.',
    importance: 'ESSENTIEL - Les nombres sont fondamentaux et seront développés dans E11 (11-100)'
  }
}

// Définition de l'Unité E10 complète
export const learningUnitE10: LearningUnit = {
  id: 'unit_e10',
  title: 'E10 - Wéi al bass du?',
  description: 'Apprenez à demander et dire votre âge, ainsi que les premiers nombres essentiels (1-10).',
  level: 'A1',
  vocabulary: unitE10Vocabulary,
  exercises: generateUnitE10Exercises(),
  targetScore: 80,
  estimatedTime: 7
}
