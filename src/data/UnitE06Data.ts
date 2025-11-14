// Données pour l'Unité E06 : "Wou wunns du?" - Où habites-tu?
// Apprendre à dire où l'on habite avec ville, village, rue et adresse

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E06 - Localisation et adresse
export const unitE06Vocabulary: VocabularyItem[] = [
  // Nouveaux mots (7)
  {
    id: 'ech_wunnen',
    luxembourgish: 'Ech wunnen zu/an',
    french: 'J\'habite à/dans',
    pronunciation: 'esh VUN-nen tsoo/un',
    usage: 'Expression pour dire où l\'on vit ("zu" pour les villes, "an" pour les pays/régions)'
  },
  {
    id: 'stad',
    luxembourgish: 'Stad',
    french: 'ville',
    pronunciation: 'shtad',
    usage: 'Zone urbaine (ex: Lëtzebuerg-Stad, Esch-sur-Alzette)'
  },
  {
    id: 'duerf',
    luxembourgish: 'Duerf',
    french: 'village',
    pronunciation: 'dwerf',
    usage: 'Petite localité rurale (ex: Schengen, Vianden)'
  },
  {
    id: 'strooss',
    luxembourgish: 'Strooss',
    french: 'rue',
    pronunciation: 'shtrohs',
    usage: 'Voie urbaine ("an der Strooss" = dans la rue)'
  },
  {
    id: 'nummer',
    luxembourgish: 'Nummer',
    french: 'numéro',
    pronunciation: 'NUM-er',
    usage: 'Numéro de maison ou d\'appartement'
  },
  {
    id: 'wunneng',
    luxembourgish: 'Wunneng',
    french: 'appartement',
    pronunciation: 'VUN-eng',
    usage: 'Logement dans un immeuble collectif'
  },
  {
    id: 'haus',
    luxembourgish: 'Haus',
    french: 'maison',
    pronunciation: 'house',
    usage: 'Habitation individuelle (comme "house" en anglais)'
  },
  // Mots de révision (2 de E05)
  {
    id: 'ech_hunn_review',
    luxembourgish: 'ech hunn',
    french: 'j\'ai',
    pronunciation: 'esh hun',
    usage: 'Verbe avoir, 1ère personne (révision de E05)'
  },
  {
    id: 'du_bass_review',
    luxembourgish: 'du bass',
    french: 'tu es',
    pronunciation: 'doo bas',
    usage: 'Verbe être, 2ème personne (révision de E05)'
  }
]

// Générateur d'exercices pour E06
export const generateUnitE06Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // EXERCICE 1 : RECONNAISSANCE AUDIO - CITY/VILLAGE/STREET
  // =============================================================================
  exercises.push({
    id: 'audio_wunnen',
    type: 'audio_recognition',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Écoutez la phrase. De quel type de lieu parle-t-on?',
    options: ['ville', 'village', 'rue'].sort(() => Math.random() - 0.5),
    correctAnswer: 'ville',
    context: 'Reconnaissance auditive: "Ech wunnen zu Esch-sur-Alzette" (J\'habite à Esch-sur-Alzette, une ville)'
  })

  // =============================================================================
  // EXERCICE 2 : ASSOCIATION DE MOTS - LOCATION VOCABULARY
  // =============================================================================
  exercises.push({
    id: 'word_pairing_location',
    type: 'word_pairing',
    vocabularyItem: unitE06Vocabulary[1], // Stad
    question: 'Associez chaque mot de localisation luxembourgeois à sa traduction française.',
    context: 'Maîtrisez le vocabulaire essentiel pour décrire votre lieu de résidence.',
    correctAnswer: 'all_matched',
    hint: 'Stad ressemble à "Stadt" en allemand (ville), Haus à "house" en anglais.',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'stad', left: 'Stad', right: 'ville' },
      { id: 'duerf', left: 'Duerf', right: 'village' },
      { id: 'strooss', left: 'Strooss', right: 'rue' },
      { id: 'haus', left: 'Haus', right: 'maison' }
    ]
  })

  // =============================================================================
  // EXERCICE 3 : RECONNAISSANCE DE MOTIFS - ZU VS AN
  // =============================================================================
  exercises.push({
    id: 'pattern_zu_vs_an',
    type: 'pattern_recognition',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Identifiez la règle : Quand utilise-t-on "zu" avec "wunnen"?',
    options: [
      'Pour les villes et localités',
      'Pour les pays et régions',
      'Pour les rues uniquement'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Pour les villes et localités',
    context: 'Au Luxembourg : "wunnen zu" + ville (Esch, Ettelbruck), "wunnen an" + pays/région (Lëtzebuerg, derStad)',
    hint: '"zu" indique une localité précise, "an" un territoire plus large'
  })

  // =============================================================================
  // EXERCICE 4 : COMPLÉTION DE PHRASE - WUNNEN + PREPOSITION
  // =============================================================================
  exercises.push({
    id: 'completion_wunnen_preposition',
    type: 'phrase_completion',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Complétez : "Ech wunnen ___ Lëtzebuerg" (J\'habite au Luxembourg)',
    options: ['an', 'zu', 'op'].sort(() => Math.random() - 0.5),
    correctAnswer: 'an',
    expectedSentence: 'Ech wunnen an Lëtzebuerg',
    hint: 'Pour un pays, on utilise "an" (dans)',
    context: 'Expression courante pour dire qu\'on habite au Luxembourg'
  })

  // =============================================================================
  // EXERCICE 5 : TRADUCTION - J'HABITE AU LUXEMBOURG
  // =============================================================================
  exercises.push({
    id: 'translation_i_live_luxembourg',
    type: 'translation',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Comment dit-on "J\'habite au Luxembourg" en luxembourgeois?',
    options: [
      'Ech wunnen an Lëtzebuerg',
      'Ech wunnen zu Lëtzebuerg',
      'Ech hunn an Lëtzebuerg'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wunnen an Lëtzebuerg',
    context: 'Phrase essentielle pour se présenter au Luxembourg'
  })

  // =============================================================================
  // EXERCICE 6 : CONSTRUCTION DE PHRASE - WHERE YOU LIVE
  // =============================================================================
  exercises.push({
    id: 'sentence_where_live',
    type: 'sentence_construction',
    vocabularyItem: unitE06Vocabulary[1], // Stad
    question: 'Construisez la phrase : "J\'habite dans une ville"',
    wordBank: ['Ech', 'wunnen', 'an', 'enger', 'Stad'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wunnen an enger Stad',
    expectedSentence: 'Ech wunnen an enger Stad',
    hint: '"enger" = article indéfini féminin ("une")',
    context: 'Dire qu\'on habite dans une ville (sans préciser laquelle)'
  })

  // =============================================================================
  // EXERCICE 7 : REMISE EN ORDRE - MIR WUNNEN ZU ESCH
  // =============================================================================
  exercises.push({
    id: 'word_order_mir_wunnen',
    type: 'word_ordering',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Remettez ces mots dans l\'ordre : "Nous habitons à Esch" (Esch-sur-Alzette)',
    wordBank: ['zu', 'wunnen', 'mir', 'Esch'],
    correctAnswer: 'Mir wunnen zu Esch',
    expectedSentence: 'Mir wunnen zu Esch',
    hint: 'Structure : Pronom + verbe + préposition + ville',
    context: 'Esch-sur-Alzette (souvent appelée simplement "Esch") est la 2ème ville du Luxembourg'
  })

  // =============================================================================
  // EXERCICE 8 : TRADUCTION - MAISON DANS LA RUE PRINCIPALE
  // =============================================================================
  exercises.push({
    id: 'translation_house_street',
    type: 'translation',
    vocabularyItem: unitE06Vocabulary[3], // Strooss
    question: 'Traduisez : "Nous habitons dans une maison dans la rue principale"',
    options: [
      'Mir wunnen an engem Haus an der Haaptstrooss',
      'Mir wunnen zu engem Haus an der Haaptstrooss',
      'Mir hunn en Haus an der Haaptstrooss'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Mir wunnen an engem Haus an der Haaptstrooss',
    hint: '"Haaptstrooss" = rue principale, "engem" = article indéfini neutre/masculin',
    context: 'Décrire précisément son type d\'habitation et sa localisation'
  })

  // =============================================================================
  // EXERCICE 9 : DIALOGUE - WOU WUNNS DU?
  // =============================================================================
  exercises.push({
    id: 'dialogue_wou_wunns_du',
    type: 'dialogue_completion',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Complétez le dialogue:\n- Wou wunns du?\n- Ech wunnen ___ Dudelange.',
    options: ['zu', 'an', 'op', 'vun'].sort(() => Math.random() - 0.5),
    correctAnswer: 'zu',
    context: 'Dudelange est une ville luxembourgeoise, donc on utilise "zu". Dialogue typique de première rencontre.'
  })

  // =============================================================================
  // EXERCICE 10 : CONSTRUCTION - ADRESSE COMPLÈTE
  // =============================================================================
  exercises.push({
    id: 'sentence_full_address',
    type: 'sentence_construction',
    vocabularyItem: unitE06Vocabulary[4], // Nummer
    question: 'Donnez une adresse complète : "J\'habite rue Principale, numéro 15, à Ettelbruck"',
    wordBank: [
      'Ech',
      'wunnen',
      'an',
      'der',
      'Haaptstrooss',
      'Nummer',
      '15',
      'zu',
      'Ettelbréck'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ech wunnen an der Haaptstrooss Nummer 15 zu Ettelbréck',
    expectedSentence: 'Ech wunnen an der Haaptstrooss Nummer 15 zu Ettelbréck',
    hint: 'Structure : Ech wunnen + rue + numéro + ville',
    context: 'Ettelbruck (Ettelbréck) est une ville du nord du Luxembourg, centre important'
  })

  // =============================================================================
  // EXERCICE 11 : RECONNAISSANCE VOCALE - ADRESSE
  // =============================================================================
  exercises.push({
    id: 'speech_address',
    type: 'speech_recognition',
    vocabularyItem: unitE06Vocabulary[0], // Ech wunnen zu/an
    question: 'Prononcez votre adresse en luxembourgeois : "J\'habite à Kirchberg, dans la rue de la Gare"',
    correctAnswer: 'Ech wunnen zu Kierchbierg an der Gaarstrooss',
    expectedSentence: 'Ech wunnen zu Kierchbierg an der Gaarstrooss',
    hint: 'Kirchberg = Kierchbierg (quartier européen), Gaarstrooss = rue de la Gare',
    context: 'Kirchberg est le quartier moderne de Luxembourg-Ville où siègent les institutions européennes. Production orale d\'une adresse complète.'
  })

  return exercises
}

// Fonction de validation de la structure des exercices
export function validateUnitE06Structure(): {
  isValid: boolean
  issues: string[]
  exerciseBalance: string
} {
  const exercises = generateUnitE06Exercises()
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

  // Vérifier l'équilibre entre QCM et exercices de construction
  const qcmCount = (typeCount['audio_recognition'] || 0) +
                   (typeCount['translation'] || 0) +
                   (typeCount['dialogue_completion'] || 0) +
                   (typeCount['pattern_recognition'] || 0) +
                   (typeCount['phrase_completion'] || 0)
  const constructionCount = (typeCount['sentence_construction'] || 0) +
                           (typeCount['word_ordering'] || 0) +
                           (typeCount['speech_recognition'] || 0)

  const qcmPercentage = Math.round((qcmCount / exercises.length) * 100)
  const constructionPercentage = Math.round((constructionCount / exercises.length) * 100)

  const exerciseBalance = `QCM: ${qcmPercentage}%, Construction: ${constructionPercentage}%`

  return {
    isValid: issues.length === 0,
    issues,
    exerciseBalance
  }
}

// Statistiques de l'unité E06
export function getUnitE06Stats() {
  const exercises = generateUnitE06Exercises()

  const typeDistribution = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return {
    totalExercises: exercises.length,
    vocabularyCount: unitE06Vocabulary.length,
    newWords: 7,
    reviewWords: 2,
    typeDistribution,
    focusAreas: [
      'Expression "wunnen zu/an" (habiter à/dans)',
      'Vocabulaire géographique (Stad, Duerf, Strooss)',
      'Prépositions de lieu (zu vs an)',
      'Habitation (Haus, Wunneng)',
      'Donner son adresse complète',
      'Villes luxembourgeoises réelles (Esch, Ettelbruck, Kirchberg, Dudelange)'
    ],
    culturalNotes: [
      'Luxembourg est un petit pays de ~650 000 habitants',
      'Principales villes : Luxembourg-Ville, Esch-sur-Alzette, Dudelange, Differdange',
      'Kirchberg : quartier européen et financier de Luxembourg-Ville',
      'Trilinguisme : luxembourgeois, français et allemand couramment utilisés',
      'Les adresses utilisent souvent les noms de rues en luxembourgeois'
    ]
  }
}

// Définition de l'Unité E06 complète
export const learningUnitE06: LearningUnit = {
  id: 'unit_e06',
  title: 'E06 - Wou wunns du?',
  description: 'Apprenez à dire où vous habitez : ville, village, rue et adresse complète au Luxembourg.',
  level: 'A1',
  vocabulary: unitE06Vocabulary,
  exercises: generateUnitE06Exercises(),
  targetScore: 80,
  estimatedTime: 6
}
