// Unité 25 : Histoire du Luxembourg (A2+) - SECTION 4: Culture et société
// Progression CEFR: A2+ vers B1 - Complexité linguistique et culturelle authentique

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire spécialisé Histoire Luxembourg - Authenticité culturelle maximale
export const unit25Vocabulary: VocabularyItem[] = [
  // VOCABULAIRE HISTORIQUE FONDAMENTAL
  {
    id: 'chateau',
    luxembourgish: 'Schlass',
    french: 'château',
    pronunciation: 'SHLASS',
    usage: 'Le château-fort luxembourgeois, symbole historique fondateur'
  },
  {
    id: 'krieg',
    luxembourgish: 'Krich',
    french: 'guerre',
    pronunciation: 'KRIKH',
    usage: 'Référence aux conflits européens qui ont marqué le Luxembourg'
  },
  {
    id: 'onofhaengegkeet',
    luxembourgish: 'Onofhängegkeet',
    french: 'indépendance',
    pronunciation: 'o-nof-HÄN-geh-keet',
    usage: 'Indépendance luxembourgeoise de 1839/1867'
  },
  {
    id: 'geschicht',
    luxembourgish: 'Geschicht',
    french: 'histoire',
    pronunciation: 'geh-SHIKHT',
    usage: 'Histoire nationale luxembourgeoise'
  },
  {
    id: 'festung',
    luxembourgish: 'Festung',
    french: 'forteresse',
    pronunciation: 'FES-tung',
    usage: 'La forteresse de Luxembourg, "Gibraltar du Nord"'
  },
  {
    id: 'groussherzogtum',
    luxembourgish: 'Groussherzogtum',
    french: 'grand-duché',
    pronunciation: 'GROUSS-her-tsok-tum',
    usage: 'Statut politique unique du Luxembourg'
  },
  {
    id: 'grondung',
    luxembourgish: 'Grondung',
    french: 'fondation',
    pronunciation: 'GRON-dung',
    usage: 'Fondation de la ville en 963 par Siegfried'
  },
  {
    id: 'traditioun',
    luxembourgish: 'Traditioun',
    french: 'tradition',
    pronunciation: 'tra-di-tsi-OUN',
    usage: 'Traditions historiques luxembourgeoises'
  },
  // EXPRESSIONS TEMPORELLES A2+
  {
    id: 'am_joer',
    luxembourgish: 'am Joer',
    french: 'en l\'année',
    pronunciation: 'am YO-er',
    usage: 'Expression temporelle pour dates historiques'
  },
  {
    id: 'fréier',
    luxembourgish: 'fréier',
    french: 'autrefois',
    pronunciation: 'FRAY-er',
    usage: 'Référence au passé historique'
  }
]

// Générateur d'exercices A2+ avec progression culturelle
export const generateUnit25Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : VOCABULAIRE HISTORIQUE DE BASE (A2+)
  // =============================================================================

  // 1.1 Reconnaissance audio contextuelle
  exercises.push({
    id: 'audio_schlass_context',
    type: 'audio_recognition',
    vocabularyItem: unit25Vocabulary[0], // Schlass
    question: 'Écoutez ce mot historique luxembourgeois. Que désigne-t-il ?',
    options: ['château', 'église', 'maison'].sort(() => Math.random() - 0.5),
    correctAnswer: 'château',
    context: 'Patrimoine architectural luxembourgeois'
  })

  // 1.2 Association culturelle authentique
  exercises.push({
    id: 'cultural_festung_context',
    type: 'cultural_context',
    vocabularyItem: unit25Vocabulary[4], // Festung
    question: 'Pourquoi Luxembourg était-il appelé le "Gibraltar du Nord" ?',
    options: [
      'À cause de sa forteresse imprenable',
      'À cause de son climat',
      'À cause de sa langue'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'À cause de sa forteresse imprenable',
    context: 'Contexte historique européen des fortifications'
  })

  // =============================================================================
  // ÉTAPE 2 : CONSTRUCTION HISTORIQUE COMPLEXE (A2+ vers B1)
  // =============================================================================

  // 2.1 Construction de phrases historiques
  exercises.push({
    id: 'historical_sentence_963',
    type: 'sentence_construction',
    vocabularyItem: unit25Vocabulary[6], // Grondung
    question: 'Construisez une phrase sur la fondation de Luxembourg en 963',
    wordBank: ['Siegfried', 'huet', 'Luxembourg', 'gegrënnt', 'am', 'Joer', '963'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Siegfried huet Luxembourg am Joer 963 gegrënnt',
    expectedSentence: 'Siegfried huet Luxembourg am Joer 963 gegrënnt',
    hint: 'Structure: Sujet + auxiliaire + objet + temps + verbe principal',
    context: 'Fondation historique du Luxembourg par le comte Siegfried'
  })

  // 2.2 Complétion chronologique
  exercises.push({
    id: 'chronology_independence',
    type: 'phrase_completion',
    vocabularyItem: unit25Vocabulary[2], // Onofhängegkeet
    question: 'Complétez: "D\'Onofhängegkeet vum Luxembourg war am Joer ___"',
    options: ['1839', '1815', '1945'].sort(() => Math.random() - 0.5),
    correctAnswer: '1839',
    expectedSentence: 'D\'Onofhängegkeet vum Luxembourg war am Joer 1839',
    context: 'Traité de Londres 1839 - indépendance luxembourgeoise'
  })

  // =============================================================================
  // ÉTAPE 3 : COMPRÉHENSION TEXTUELLE AUTHENTIQUE (A2+)
  // =============================================================================

  // 3.1 Compréhension de texte historique court
  exercises.push({
    id: 'text_comprehension_castle',
    type: 'text_comprehension',
    vocabularyItem: unit25Vocabulary[0],
    question: 'Lisez: "De Schlass zu Luxembourg war eng wichteg Festung. Et huet d\'Stad geschützt." Que protégeait le château ?',
    options: ['la ville', 'le pays', 'la rivière'].sort(() => Math.random() - 0.5),
    correctAnswer: 'la ville',
    context: 'Rôle défensif du château historique de Luxembourg'
  })

  // 3.2 Correction d'erreurs historiques
  exercises.push({
    id: 'error_correction_date',
    type: 'error_correction',
    vocabularyItem: unit25Vocabulary[6],
    question: 'Corrigez l\'erreur: "Luxembourg gouf am Joer 1963 gegrënnt"',
    options: [
      'Luxembourg gouf am Joer 963 gegrënnt',
      'Luxembourg gouf am Joer 1863 gegrënnt',
      'Luxembourg gouf am Joer 1063 gegrënnt'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Luxembourg gouf am Joer 963 gegrënnt',
    context: 'Correction de dates historiques fondamentales'
  })

  // =============================================================================
  // ÉTAPE 4 : EXPRESSION CULTURELLE AVANCÉE (B1)
  // =============================================================================

  // 4.1 Description historique libre
  exercises.push({
    id: 'creative_fortress_description',
    type: 'creative_expression',
    vocabularyItem: unit25Vocabulary[4],
    question: 'Décrivez en 2-3 phrases pourquoi la Festung était importante pour l\'Europe',
    wordBank: ['strategesch', 'wichteg', 'Europa', 'kontrolléiert', 'Handelsstrassen', 'geschützt'],
    correctAnswer: 'D\'Festung war strategesch wichteg fir Europa well si d\'Handelsstrassen kontrolléiert huet',
    expectedSentence: 'D\'Festung war strategesch wichteg fir Europa',
    hint: 'Utilisez des connecteurs logiques (well = parce que)',
    context: 'Importance géostratégique historique de Luxembourg'
  })

  // 4.2 Dialogue historique contextuel
  exercises.push({
    id: 'dialogue_museum_visit',
    type: 'dialogue_completion',
    vocabularyItem: unit25Vocabulary[3],
    question: 'Dans un musée luxembourgeois, le guide dit: "Dës Geschicht ass ganz ___"',
    options: ['interessant', 'schwéier', 'kuerz'].sort(() => Math.random() - 0.5),
    correctAnswer: 'interessant',
    context: 'Situation authentique de visite culturelle'
  })

  // =============================================================================
  // ÉTAPE 5 : ARGUMENTATION CULTURELLE (B1)
  // =============================================================================

  // 5.1 Construction d'arguments historiques
  exercises.push({
    id: 'argumentation_independence',
    type: 'argumentation_building',
    vocabularyItem: unit25Vocabulary[2],
    question: 'Argumentez pourquoi l\'indépendance de 1839 était importante',
    wordBank: ['well', 'dowéinst', 'awer', 'och', 'souveräin', 'neutral', 'Identitéit'],
    correctAnswer: 'D\'Onofhängegkeet war wichteg well Luxembourg souveräin a neutral ginn ass',
    expectedSentence: 'D\'Onofhängegkeet war wichteg well Luxembourg souveräin ginn ass',
    hint: 'Utilisez "well" pour introduire votre argument principal',
    context: 'Argumentation sur l\'importance historique de l\'indépendance'
  })

  // 5.2 Expression d'opinion nuancée
  exercises.push({
    id: 'opinion_historical_importance',
    type: 'opinion_expression',
    vocabularyItem: unit25Vocabulary[5],
    question: 'Exprimez votre opinion: Qu\'est-ce qui rend le Groussherzogtum unique en Europe ?',
    options: [
      'Et ass kleng awer ganz wichteg fir d\'EU',
      'Et ass nëmmen eng kleng Stad',
      'Et ass wéi all aner Länner'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Et ass kleng awer ganz wichteg fir d\'EU',
    context: 'Expression d\'opinion sur le statut unique du Luxembourg'
  })

  return exercises
}

// Fonction de validation CEFR A2+ vers B1
export function validateUnit25Structure(): {
  cefrLevel: string
  culturalAuthenticity: number
  constructionPercentage: number
  scaffoldingQuality: 'excellent' | 'good' | 'poor'
} {
  const exercises = generateUnit25Exercises()
  const totalExercises = exercises.length

  // Calcul pourcentage construction (objectif: 35% minimum pour A2+)
  const constructionTypes = ['sentence_construction', 'creative_expression', 'argumentation_building', 'text_comprehension']
  const constructionCount = exercises.filter(ex => constructionTypes.includes(ex.type)).length
  const constructionPercentage = (constructionCount / totalExercises) * 100

  // Évaluation authenticité culturelle
  const culturalTypes = ['cultural_context', 'text_comprehension', 'creative_expression']
  const culturalCount = exercises.filter(ex => culturalTypes.includes(ex.type)).length
  const culturalAuthenticity = (culturalCount / totalExercises) * 100

  return {
    cefrLevel: 'A2+ vers B1',
    culturalAuthenticity: Math.round(culturalAuthenticity),
    constructionPercentage: Math.round(constructionPercentage),
    scaffoldingQuality: constructionPercentage >= 35 && culturalAuthenticity >= 30 ? 'excellent' : 'good'
  }
}

// Définition complète Unité 25 - Histoire du Luxembourg
export const learningUnit25: LearningUnit = {
  id: 'unit_25',
  title: 'Histoire du Luxembourg',
  description: 'Découvrez l\'histoire fascinante du Grand-Duché à travers châteaux, guerres et indépendance',
  level: 'A2',
  vocabulary: unit25Vocabulary,
  exercises: generateUnit25Exercises(),
  targetScore: 85, // Plus élevé pour niveau A2+
  estimatedTime: 8 // Temps augmenté pour complexité culturelle
}