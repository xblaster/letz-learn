// Données pour l'Unité E03 : "D'Artikelen" - Les articles définis luxembourgeois

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire de l'Unité E03 - Articles définis et exemples de genre
export const unitE03Vocabulary: VocabularyItem[] = [
  // VOCABULAIRE NOUVEAU (6 mots essentiels)
  {
    id: 'den',
    luxembourgish: 'den',
    french: 'le (masculin)',
    pronunciation: 'den',
    usage: 'Article défini masculin : "den Mann" (l\'homme)'
  },
  {
    id: 'dei',
    luxembourgish: 'déi',
    french: 'la (féminin)',
    pronunciation: 'day',
    usage: 'Article défini féminin : "déi Fra" (la femme)'
  },
  {
    id: 'dat',
    luxembourgish: 'dat',
    french: 'le/la (neutre)',
    pronunciation: 'dat',
    usage: 'Article défini neutre : "dat Kand" (l\'enfant)'
  },
  {
    id: 'mann',
    luxembourgish: 'Mann',
    french: 'homme',
    pronunciation: 'man',
    usage: 'Exemple de nom masculin utilisé avec "den Mann"'
  },
  {
    id: 'fra',
    luxembourgish: 'Fra',
    french: 'femme',
    pronunciation: 'fra',
    usage: 'Exemple de nom féminin utilisé avec "déi Fra"'
  },
  {
    id: 'kand',
    luxembourgish: 'Kand',
    french: 'enfant',
    pronunciation: 'kant',
    usage: 'Exemple de nom neutre utilisé avec "dat Kand"'
  },

  // RÉVISION UNIT E02 (2 expressions)
  {
    id: 'ech_sinn_review',
    luxembourgish: 'Ech sinn',
    french: 'Je suis',
    pronunciation: 'ekh zin',
    usage: 'Révision Unit E02 : présentation personnelle'
  },
  {
    id: 'main_numm_ass_review',
    luxembourgish: 'Mäin Numm ass',
    french: 'Mon nom est',
    pronunciation: 'main num as',
    usage: 'Révision Unit E02 : donner son nom'
  }
]

// Générateur d'exercices avec progression scaffoldée en 5 étapes
export const generateUnitE03Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : VOCABULAIRE DE BASE (reconnaissance des 3 articles)
  // =============================================================================

  // 1. Association articles avec genres (word_pairing)
  exercises.push({
    id: 'word_pairing_articles',
    type: 'word_pairing',
    vocabularyItem: unitE03Vocabulary[0], // den
    question: 'Associez chaque article luxembourgeois à sa traduction française avec indication du genre.',
    context: 'Découvrez les trois articles définis du luxembourgeois et leurs genres grammaticaux.',
    correctAnswer: 'all_matched',
    hint: 'Le luxembourgeois a trois genres : masculin (♂), féminin (♀), et neutre (⚬)',
    columnLabels: {
      left: 'Luxembourgeois',
      right: 'Français'
    },
    wordPairs: [
      { id: 'den', left: 'den (♂)', right: 'le (masculin)' },
      { id: 'dei', left: 'déi (♀)', right: 'la (féminin)' },
      { id: 'dat', left: 'dat (⚬)', right: 'le/la (neutre)' }
    ]
  })

  // 2. Reconnaissance audio d'un article (audio_recognition)
  exercises.push({
    id: 'audio_articles',
    type: 'audio_recognition',
    vocabularyItem: unitE03Vocabulary[0], // den
    question: 'Écoutez attentivement : "den Mann". Quel article entendez-vous ?',
    options: ['den', 'déi', 'dat'].sort(() => Math.random() - 0.5),
    correctAnswer: 'den',
    context: 'Reconnaissance audio de l\'article masculin'
  })

  // =============================================================================
  // ÉTAPE 2 : RECONNAISSANCE DES GENRES (pattern recognition)
  // =============================================================================

  // 3. Tri de noms par genre/article (pattern_recognition)
  exercises.push({
    id: 'pattern_gender_sort',
    type: 'pattern_recognition',
    vocabularyItem: unitE03Vocabulary[1], // déi
    question: 'Quel article utilise-t-on devant "Fra" (femme) ?',
    options: ['déi', 'den', 'dat'].sort(() => Math.random() - 0.5),
    correctAnswer: 'déi',
    context: 'Identification du genre féminin en luxembourgeois',
    hint: 'Fra est un nom féminin, comme en français "la femme"'
  })

  // 4. Complétion avec l'article correct (phrase_completion)
  exercises.push({
    id: 'completion_article_haus',
    type: 'phrase_completion',
    vocabularyItem: unitE03Vocabulary[2], // dat
    question: 'Complétez : "___ Kand"',
    options: ['dat', 'den', 'déi'].sort(() => Math.random() - 0.5),
    correctAnswer: 'dat',
    expectedSentence: 'dat Kand',
    context: 'Le mot "Kand" (enfant) est neutre en luxembourgeois',
    hint: 'Kand est un nom neutre, utilisez l\'article neutre'
  })

  // =============================================================================
  // ÉTAPE 3 : TRADUCTION SIMPLE (articles + noms)
  // =============================================================================

  // 5. Traduction "l'homme" (translation)
  exercises.push({
    id: 'translation_the_man',
    type: 'translation',
    vocabularyItem: unitE03Vocabulary[3], // Mann
    question: 'Comment dit-on "l\'homme" en luxembourgeois ?',
    options: ['den Mann', 'déi Mann', 'dat Mann'].sort(() => Math.random() - 0.5),
    correctAnswer: 'den Mann',
    context: 'Mann est masculin et prend l\'article "den"'
  })

  // 6. Construction de phrase simple (sentence_construction)
  exercises.push({
    id: 'sentence_woman_child',
    type: 'sentence_construction',
    vocabularyItem: unitE03Vocabulary[4], // Fra
    question: 'Construisez la phrase : "la femme et l\'enfant"',
    wordBank: ['déi', 'Fra', 'an', 'dat', 'Kand'].sort(() => Math.random() - 0.5),
    correctAnswer: 'déi Fra an dat Kand',
    expectedSentence: 'déi Fra an dat Kand',
    hint: '"an" signifie "et" en luxembourgeois',
    context: 'Coordination de deux groupes nominaux avec articles corrects'
  })

  // =============================================================================
  // ÉTAPE 4 : CONSTRUCTION AVEC ADJECTIFS (word ordering)
  // =============================================================================

  // 7. Remise en ordre avec adjectif (word_ordering)
  exercises.push({
    id: 'word_order_article_adj',
    type: 'word_ordering',
    vocabularyItem: unitE03Vocabulary[5], // Kand
    question: 'Remettez en ordre : "L\'enfant est petit"',
    wordBank: ['Kand', 'dat', 'kleng', 'ass'],
    correctAnswer: 'Dat Kand ass kleng',
    expectedSentence: 'Dat Kand ass kleng',
    hint: 'Structure : Article + Nom + Verbe + Adjectif',
    context: 'Construction de phrase avec article neutre et adjectif'
  })

  // 8. Traduction avec article et adjectif (translation)
  exercises.push({
    id: 'translation_with_article',
    type: 'translation',
    vocabularyItem: unitE03Vocabulary[4], // Fra
    question: 'Traduisez : "La femme est gentille"',
    options: [
      'Déi Fra ass frëndlech',
      'Den Fra ass frëndlech',
      'Dat Fra ass frëndlech'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Déi Fra ass frëndlech',
    context: 'Phrase complète avec article féminin et adjectif',
    hint: 'Fra (femme) est féminin, utilisez "déi"'
  })

  // =============================================================================
  // ÉTAPE 5 : APPLICATION EN CONTEXTE (dialogue et exercices avancés)
  // =============================================================================

  // 9. Dialogue avec démonstratif (dialogue_completion)
  exercises.push({
    id: 'dialogue_identify',
    type: 'dialogue_completion',
    vocabularyItem: unitE03Vocabulary[2], // dat
    question: 'Dialogue : "Wat ass dat?" (Qu\'est-ce que c\'est ?) - Répondez en montrant un enfant :',
    options: [
      'Dat ass dat Kand',
      'Den ass dat Kand',
      'Déi ass dat Kand'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Dat ass dat Kand',
    context: 'Usage de l\'article neutre dans un dialogue d\'identification',
    hint: 'Kand est neutre, utilisez "dat" deux fois'
  })

  // 10. Reconnaissance audio avancée (audio_recognition)
  exercises.push({
    id: 'audio_article_listening',
    type: 'audio_recognition',
    vocabularyItem: unitE03Vocabulary[1], // déi
    question: 'Écoutez : "déi Fra". Quel genre grammatical identifiez-vous ?',
    options: ['Féminin', 'Masculin', 'Neutre'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Féminin',
    context: 'Identification du genre par l\'écoute de l\'article',
    hint: 'L\'article "déi" indique le genre féminin'
  })

  // 11. Construction de phrases multiples (sentence_construction)
  exercises.push({
    id: 'sentence_describe_people',
    type: 'sentence_construction',
    vocabularyItem: unitE03Vocabulary[3], // Mann
    question: 'Construisez : "l\'homme, la femme et l\'enfant"',
    wordBank: ['den', 'Mann', 'déi', 'Fra', 'an', 'dat', 'Kand'].sort(() => Math.random() - 0.5),
    correctAnswer: 'den Mann déi Fra an dat Kand',
    expectedSentence: 'den Mann déi Fra an dat Kand',
    hint: 'Utilisez les trois articles dans l\'ordre : masculin, féminin, neutre',
    context: 'Coordination de trois groupes nominaux avec articles différents'
  })

  // 12. Reconnaissance de motifs dans phrases complexes (pattern_recognition)
  exercises.push({
    id: 'pattern_article_practice',
    type: 'pattern_recognition',
    vocabularyItem: unitE03Vocabulary[0], // den
    question: 'Quelle phrase utilise correctement l\'article masculin ?',
    options: [
      'Den Mann ass grouss',
      'Déi Mann ass grouss',
      'Dat Mann ass grouss'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Den Mann ass grouss',
    context: 'Validation de l\'usage correct de l\'article masculin dans une phrase complète',
    hint: 'Mann (homme) est masculin et nécessite "den"'
  })

  return exercises
}

// Validation de la progression Unit E03
export function validateUnitE03Progression(): {
  isValid: boolean
  issues: string[]
  articlesCoverage: 'poor' | 'good' | 'excellent'
  genderBalance: number // pourcentage équilibre des 3 genres
} {
  const exercises = generateUnitE03Exercises()
  const issues: string[] = []

  // Vérifier couverture des 3 articles
  const denCount = exercises.filter(ex =>
    ex.correctAnswer?.includes('den') ||
    ex.expectedSentence?.includes('den')
  ).length

  const deiCount = exercises.filter(ex =>
    ex.correctAnswer?.includes('déi') ||
    ex.expectedSentence?.includes('déi')
  ).length

  const datCount = exercises.filter(ex =>
    ex.correctAnswer?.includes('dat') ||
    ex.expectedSentence?.includes('dat')
  ).length

  const totalArticleExercises = denCount + deiCount + datCount
  const minCoverage = Math.min(denCount, deiCount, datCount)
  const genderBalance = (minCoverage / (totalArticleExercises / 3)) * 100

  if (genderBalance < 70) {
    issues.push('Déséquilibre dans la couverture des trois genres grammaticaux')
  }

  // Vérifier types d'exercices variés
  const typeCount = exercises.reduce((acc, ex) => {
    acc[ex.type] = (acc[ex.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const uniqueTypes = Object.keys(typeCount).length
  if (uniqueTypes < 6) {
    issues.push('Variété insuffisante de types d\'exercices (minimum 6 types)')
  }

  const articlesCoverage = issues.length === 0 ? 'excellent' :
                          issues.length <= 1 ? 'good' : 'poor'

  return {
    isValid: issues.length === 0,
    issues,
    articlesCoverage,
    genderBalance: Math.round(genderBalance)
  }
}

// Statistiques de couverture des articles
export function getArticlesStats() {
  const exercises = generateUnitE03Exercises()

  const articleUsage = {
    den: 0,
    dei: 0,
    dat: 0
  }

  exercises.forEach(ex => {
    const fullText = `${ex.correctAnswer || ''} ${ex.expectedSentence || ''} ${ex.question || ''}`
    if (fullText.includes('den')) articleUsage.den++
    if (fullText.includes('déi')) articleUsage.dei++
    if (fullText.includes('dat')) articleUsage.dat++
  })

  return {
    totalExercises: exercises.length,
    articleUsage,
    coverageBalance: Math.min(articleUsage.den, articleUsage.dei, articleUsage.dat),
    exerciseTypes: exercises.reduce((acc, ex) => {
      acc[ex.type] = (acc[ex.type] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }
}

// Définition de l'Unité E03 complète
export const learningUnitE03: LearningUnit = {
  id: 'unit_e03',
  title: 'E03 - D\'Artikelen',
  description: 'Maîtrisez les articles définis luxembourgeois (den, déi, dat) et découvrez les trois genres grammaticaux.',
  level: 'A1',
  vocabulary: unitE03Vocabulary,
  exercises: generateUnitE03Exercises(),
  targetScore: 80,
  estimatedTime: 7
}
