// Données pour l'Unité E05 : "Hunn & Sinn"
// Les deux verbes les plus importants : avoir et être

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E05 - Conjugaisons de hunn et sinn
export const unitE05Vocabulary: VocabularyItem[] = [
  // Conjugaisons du verbe SINN (être) - 3 formes
  {
    id: 'ech_sinn',
    luxembourgish: 'ech sinn',
    french: 'je suis',
    pronunciation: 'esh zin',
    usage: 'Première personne singulier du verbe être'
  },
  {
    id: 'du_bass',
    luxembourgish: 'du bass',
    french: 'tu es',
    pronunciation: 'doo bas',
    usage: 'Deuxième personne singulier du verbe être'
  },
  {
    id: 'hien_si_et_ass',
    luxembourgish: 'hien/si/et ass',
    french: 'il/elle est',
    pronunciation: 'heen/zee/et as',
    usage: 'Troisième personne singulier du verbe être'
  },
  // Conjugaisons du verbe HUNN (avoir) - 3 formes
  {
    id: 'ech_hunn',
    luxembourgish: 'ech hunn',
    french: 'j\'ai',
    pronunciation: 'esh hun',
    usage: 'Première personne singulier du verbe avoir'
  },
  {
    id: 'du_hues',
    luxembourgish: 'du hues',
    french: 'tu as',
    pronunciation: 'doo hues',
    usage: 'Deuxième personne singulier du verbe avoir'
  },
  {
    id: 'hien_si_et_huet',
    luxembourgish: 'hien/si/et huet',
    french: 'il/elle a',
    pronunciation: 'heen/zee/et huet',
    usage: 'Troisième personne singulier du verbe avoir'
  },
  // Mots de révision (2 de E04)
  {
    id: 'wie_review',
    luxembourgish: 'Wéi?',
    french: 'Comment?',
    pronunciation: 'vay',
    usage: 'Mot interrogatif (révision)'
  },
  {
    id: 'nee_net_review',
    luxembourgish: 'nee/net',
    french: 'non/ne...pas',
    pronunciation: 'nay/net',
    usage: 'Négation (révision)'
  }
]

// Générateur d'exercices pour E05
export const generateUnitE05Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // EXERCICE 1 : ASSOCIATION VERBES - CONJUGAISONS ET PRONOMS
  // =============================================================================
  exercises.push({
    id: 'word_pairing_verbs',
    type: 'word_pairing',
    vocabularyItem: unitE05Vocabulary[0], // ech sinn
    question: 'Associez chaque pronom avec sa conjugaison correcte.',
    context: 'Maîtrisez les conjugaisons de sinn (être) et hunn (avoir) au présent.',
    correctAnswer: 'all_matched',
    hint: 'sinn = être, hunn = avoir. Regardez bien la forme du verbe.',
    columnLabels: {
      left: 'Pronom + Verbe',
      right: 'Traduction'
    },
    wordPairs: [
      { id: 'ech_sinn', left: 'ech sinn', right: 'je suis' },
      { id: 'du_bass', left: 'du bass', right: 'tu es' },
      { id: 'ech_hunn', left: 'ech hunn', right: 'j\'ai' },
      { id: 'du_hues', left: 'du hues', right: 'tu as' },
      { id: 'hien_ass', left: 'hien ass', right: 'il est' },
      { id: 'si_huet', left: 'si huet', right: 'elle a' }
    ]
  })

  // =============================================================================
  // EXERCICE 2 : RECONNAISSANCE AUDIO - SINN OU HUNN?
  // =============================================================================
  exercises.push({
    id: 'audio_sinn_or_hunn',
    type: 'audio_recognition',
    vocabularyItem: unitE05Vocabulary[0], // ech sinn
    question: 'Écoutez la phrase. Quel verbe est utilisé?',
    options: ['SINN (être)', 'HUNN (avoir)'],
    correctAnswer: 'SINN (être)',
    context: 'Reconnaissance auditive: "Ech sinn vun Lëtzebuerg" (Je suis du Luxembourg)'
  })

  // =============================================================================
  // EXERCICE 3 : RECONNAISSANCE DE MOTIFS - GROUPER PAR VERBE
  // =============================================================================
  exercises.push({
    id: 'pattern_verb_groups',
    type: 'pattern_recognition',
    vocabularyItem: unitE05Vocabulary[3], // ech hunn
    question: 'Identifiez le groupe auquel appartient "ech hunn".',
    options: ['Verbe SINN (être)', 'Verbe HUNN (avoir)', 'Verbe KOMMEN (venir)'],
    correctAnswer: 'Verbe HUNN (avoir)',
    context: 'Les conjugaisons se regroupent par verbe: sinn, bass, ass (être) / hunn, hues, huet (avoir)'
  })

  // =============================================================================
  // EXERCICE 4 : COMPLÉTION - TABLE DE CONJUGAISON
  // =============================================================================
  exercises.push({
    id: 'completion_conjugation_table',
    type: 'phrase_completion',
    vocabularyItem: unitE05Vocabulary[1], // du bass
    question: 'Complétez la conjugaison: "du ___" (tu es)',
    options: ['bass', 'hues', 'sinn', 'huet'].sort(() => Math.random() - 0.5),
    correctAnswer: 'bass',
    expectedSentence: 'du bass',
    hint: 'Pour "tu es", utilisez "bass" (du verbe sinn)',
    context: 'Conjugaison du verbe être à la 2e personne singulier'
  })

  // =============================================================================
  // EXERCICE 5 : COMPLÉTION - ECH ___ MARIE
  // =============================================================================
  exercises.push({
    id: 'completion_ech_verb',
    type: 'phrase_completion',
    vocabularyItem: unitE05Vocabulary[0], // ech sinn
    question: 'Complétez: "Ech ___ Marie" (Je suis Marie)',
    options: ['sinn', 'hunn', 'bass'].sort(() => Math.random() - 0.5),
    correctAnswer: 'sinn',
    expectedSentence: 'Ech sinn Marie',
    hint: 'Pour dire "je suis", utilisez "ech sinn"',
    context: 'Se présenter avec le verbe être'
  })

  // =============================================================================
  // EXERCICE 6 : TRADUCTION - J'AI UNE VOITURE
  // =============================================================================
  exercises.push({
    id: 'translation_i_have_car',
    type: 'translation',
    vocabularyItem: unitE05Vocabulary[3], // ech hunn
    question: 'Traduisez: "J\'ai une voiture" en luxembourgeois.',
    options: [
      'Ech hunn en Auto',
      'Ech sinn en Auto',
      'Du hues en Auto'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech hunn en Auto',
    hint: '"J\'ai" = "ech hunn" (verbe avoir)',
    context: 'Utilisation du verbe avoir pour exprimer la possession'
  })

  // =============================================================================
  // EXERCICE 7 : CONSTRUCTION DE PHRASE - TU ES DE FRANCE
  // =============================================================================
  exercises.push({
    id: 'sentence_you_are_from',
    type: 'sentence_construction',
    vocabularyItem: unitE05Vocabulary[1], // du bass
    question: 'Construisez la phrase: "Tu es de France" en luxembourgeois.',
    wordBank: ['Du', 'bass', 'aus', 'Frankräich'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Du bass aus Frankräich',
    expectedSentence: 'Du bass aus Frankräich',
    hint: 'Structure: Pronom + verbe être + aus (de) + pays',
    context: 'Dire d\'où quelqu\'un vient avec le verbe être'
  })

  // =============================================================================
  // EXERCICE 8 : REMISE EN ORDRE - ECH HUNN ENG FRA
  // =============================================================================
  exercises.push({
    id: 'word_order_ech_hunn',
    type: 'word_ordering',
    vocabularyItem: unitE05Vocabulary[3], // ech hunn
    question: 'Remettez ces mots dans l\'ordre: "J\'ai une question"',
    wordBank: ['eng', 'hunn', 'Fro', 'Ech'],
    correctAnswer: 'Ech hunn eng Fro',
    expectedSentence: 'Ech hunn eng Fro',
    hint: 'Structure: Pronom + verbe + article indéfini + nom',
    context: 'Former une phrase avec le verbe avoir'
  })

  // =============================================================================
  // EXERCICE 9 : TRADUCTION NÉGATION - IL N'EST PAS ICI
  // =============================================================================
  exercises.push({
    id: 'translation_negation_he_is_not',
    type: 'translation',
    vocabularyItem: unitE05Vocabulary[2], // hien/si/et ass
    question: 'Traduisez: "Il n\'est pas ici" en luxembourgeois.',
    options: [
      'Hien ass net hei',
      'Hien huet net hei',
      'Hien net ass hei'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Hien ass net hei',
    hint: 'Structure: Pronom + verbe + net (négation) + adverbe',
    context: 'Combiner le verbe être avec la négation "net" (de E04)'
  })

  // =============================================================================
  // EXERCICE 10 : DIALOGUE - REMPLIR AVEC FORMES CORRECTES
  // =============================================================================
  exercises.push({
    id: 'dialogue_verb_forms',
    type: 'dialogue_completion',
    vocabularyItem: unitE05Vocabulary[4], // du hues
    question: 'Complétez le dialogue:\n- Du ___ ee Brudder? (Tu as un frère?)\n- Jo, ech hunn ee Brudder.',
    options: ['hues', 'bass', 'sinn', 'huet'].sort(() => Math.random() - 0.5),
    correctAnswer: 'hues',
    context: 'Utiliser la bonne forme de "hunn" pour "tu as"'
  })

  // =============================================================================
  // EXERCICE 11 : CONSTRUCTION - DÉCRIRE CE QU'ON A ET EST
  // =============================================================================
  exercises.push({
    id: 'sentence_describe_have_are',
    type: 'sentence_construction',
    vocabularyItem: unitE05Vocabulary[0], // ech sinn
    question: 'Construisez: "Je suis Marie et j\'ai une voiture"',
    wordBank: ['Ech', 'sinn', 'Marie', 'an', 'ech', 'hunn', 'en', 'Auto'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech sinn Marie an ech hunn en Auto',
    expectedSentence: 'Ech sinn Marie an ech hunn en Auto',
    hint: 'Utilisez "an" (et) pour relier les deux phrases',
    context: 'Combiner les deux verbes pour se présenter complètement'
  })

  // =============================================================================
  // EXERCICE 12 : RECONNAISSANCE VOCALE - CONJUGAISONS
  // =============================================================================
  exercises.push({
    id: 'speech_conjugation',
    type: 'speech_recognition',
    vocabularyItem: unitE05Vocabulary[0], // ech sinn
    question: 'Prononcez les trois conjugaisons du verbe être: "ech sinn, du bass, hien ass"',
    correctAnswer: 'ech sinn du bass hien ass',
    expectedSentence: 'ech sinn, du bass, hien ass',
    hint: 'Prononcez clairement: "esh zin, doo bas, heen as"',
    context: 'Production orale des conjugaisons de sinn (être)'
  })

  return exercises
}

// Fonction utilitaire pour obtenir des distracteurs aléatoires
function getRandomDistractor(correct: string, category: 'sinn' | 'hunn' | 'pronoun'): string {
  const sinnDistracters = ['sinn', 'bass', 'ass', 'si', 'sinn']
  const hunnDistracters = ['hunn', 'hues', 'huet', 'hun', 'hat']
  const pronounDistracters = ['ech', 'du', 'hien', 'si', 'et']

  let pool: string[] = []
  switch (category) {
    case 'sinn':
      pool = sinnDistracters
      break
    case 'hunn':
      pool = hunnDistracters
      break
    case 'pronoun':
      pool = pronounDistracters
      break
  }

  const filtered = pool.filter(item => item !== correct)
  return filtered[Math.floor(Math.random() * filtered.length)] || pool[0]
}

// Fonction de validation de la structure des exercices
export function validateUnitE05Structure(): {
  isValid: boolean
  issues: string[]
  exerciseBalance: string
  verbBalance: { sinn: number; hunn: number; both: number }
} {
  const exercises = generateUnitE05Exercises()
  const issues: string[] = []

  // Vérifier le nombre d'exercices
  if (exercises.length !== 12) {
    issues.push(`Nombre d'exercices incorrect: ${exercises.length} au lieu de 12`)
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

  // Vérifier l'équilibre entre les deux verbes
  const sinnExercises = exercises.filter(ex =>
    ex.vocabularyItem.id.includes('sinn') ||
    ex.vocabularyItem.id.includes('bass') ||
    ex.vocabularyItem.id.includes('ass')
  ).length

  const hunnExercises = exercises.filter(ex =>
    ex.vocabularyItem.id.includes('hunn') ||
    ex.vocabularyItem.id.includes('hues') ||
    ex.vocabularyItem.id.includes('huet')
  ).length

  const bothVerbs = exercises.length - sinnExercises - hunnExercises

  const verbBalance = {
    sinn: sinnExercises,
    hunn: hunnExercises,
    both: bothVerbs
  }

  // Les deux verbes doivent être équilibrés (au moins 3 exercices chacun)
  if (sinnExercises < 3) {
    issues.push(`Pas assez d'exercices sur SINN (être): ${sinnExercises}`)
  }
  if (hunnExercises < 3) {
    issues.push(`Pas assez d'exercices sur HUNN (avoir): ${hunnExercises}`)
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
    verbBalance
  }
}

// Statistiques de l'unité E05
export function getUnitE05Stats() {
  const exercises = generateUnitE05Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    vocabularyCount: unitE05Vocabulary.length,
    newConjugations: 6,
    reviewWords: 2,
    typeDistribution,
    focusAreas: [
      'SINN (être): ech sinn, du bass, hien/si/et ass',
      'HUNN (avoir): ech hunn, du hues, hien/si/et huet',
      'Différenciation sinn vs hunn',
      'Construction de phrases avec les deux verbes',
      'Combinaison avec négation (révision E04)'
    ],
    importance: 'CRITIQUE - Ces verbes apparaîtront dans 30% des exercices des 5 prochaines unités'
  }
}

// Définition de l'Unité E05 complète
export const learningUnitE05: LearningUnit = {
  id: 'unit_e05',
  title: 'E05 - Hunn & Sinn',
  description: 'Maîtrisez les deux verbes les plus importants du luxembourgeois : hunn (avoir) et sinn (être) au présent.',
  level: 'A1',
  vocabulary: unitE05Vocabulary,
  exercises: generateUnitE05Exercises(),
  targetScore: 80,
  estimatedTime: 7
}
