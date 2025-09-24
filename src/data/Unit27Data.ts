// Unité 27 : Système politique luxembourgeois (A2+) - SECTION 4: Culture et société
// Progression CEFR: A2+ - Vocabulaire civique et institutions spécifiques

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire système politique luxembourgeois authentique
export const unit27Vocabulary: VocabularyItem[] = [
  // INSTITUTIONS POLITIQUES LUXEMBOURGEOISES
  {
    id: 'deputéiert',
    luxembourgish: 'Deputéiert',
    french: 'député',
    pronunciation: 'de-pu-TAY-ert',
    usage: 'Membre élu de la Chambre des députés du Luxembourg'
  },
  {
    id: 'chamber',
    luxembourgish: 'Chamber',
    french: 'chambre',
    pronunciation: 'SHAM-ber',
    usage: 'Chambre des députés, parlement luxembourgeois'
  },
  {
    id: 'regierung',
    luxembourgish: 'Regierung',
    french: 'gouvernement',
    pronunciation: 'reh-GEE-rung',
    usage: 'Gouvernement du Grand-Duché de Luxembourg'
  },
  {
    id: 'minister',
    luxembourgish: 'Minister',
    french: 'ministre',
    pronunciation: 'mi-NIS-ter',
    usage: 'Membre du gouvernement luxembourgeois'
  },
  {
    id: 'premier',
    luxembourgish: 'Premier',
    french: 'Premier ministre',
    pronunciation: 'pre-MI-er',
    usage: 'Chef du gouvernement luxembourgeois'
  },
  {
    id: 'groussherzogin',
    luxembourgish: 'Groussherzogin',
    french: 'Grande-Duchesse',
    pronunciation: 'GROUSS-her-tso-gin',
    usage: 'Chef d\'État du Luxembourg, actuellement Grande-Duchesse Charlotte'
  },
  // PROCESSUS DÉMOCRATIQUES
  {
    id: 'wielen',
    luxembourgish: 'wielen',
    french: 'voter',
    pronunciation: 'VEE-len',
    usage: 'Exercer son droit de vote aux élections'
  },
  {
    id: 'wahlen',
    luxembourgish: 'Wahlen',
    french: 'élections',
    pronunciation: 'VA-len',
    usage: 'Élections législatives ou communales au Luxembourg'
  },
  {
    id: 'demokratie',
    luxembourgish: 'Demokratie',
    french: 'démocratie',
    pronunciation: 'de-mo-kra-TEE',
    usage: 'Système démocratique luxembourgeois'
  },
  {
    id: 'gesetz',
    luxembourgish: 'Gesetz',
    french: 'loi',
    pronunciation: 'geh-SETS',
    usage: 'Loi votée par la Chambre des députés'
  }
]

// Générateur d'exercices système politique A2+
export const generateUnit27Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : INSTITUTIONS DE BASE (A2+)
  // =============================================================================

  // 1.1 Reconnaissance des institutions
  exercises.push({
    id: 'audio_chamber_institution',
    type: 'audio_recognition',
    vocabularyItem: unit27Vocabulary[1], // Chamber
    question: 'Écoutez ce mot politique. Que désigne-t-il au Luxembourg ?',
    options: ['parlement', 'tribunal', 'mairie'].sort(() => Math.random() - 0.5),
    correctAnswer: 'parlement',
    context: 'Institution législative luxembourgeoise'
  })

  // 1.2 Compréhension du système institutionnel
  exercises.push({
    id: 'cultural_political_system',
    type: 'cultural_context',
    vocabularyItem: unit27Vocabulary[5], // Groussherzogin
    question: 'Qui est le chef d\'État du Luxembourg ?',
    options: [
      'La Grande-Duchesse',
      'Le Premier ministre',
      'Le Président'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'La Grande-Duchesse',
    context: 'Spécificité monarchique constitutionnelle luxembourgeoise'
  })

  // =============================================================================
  // ÉTAPE 2 : FONCTIONS ET RÔLES (A2+)
  // =============================================================================

  // 2.1 Construction de phrases sur les rôles
  exercises.push({
    id: 'political_roles_description',
    type: 'sentence_construction',
    vocabularyItem: unit27Vocabulary[0], // Deputéiert
    question: 'Expliquez le rôle d\'un député luxembourgeois',
    wordBank: ['Den', 'Deputéiert', 'representéiert', 'd\'Leit', 'an', 'der', 'Chamber'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Den Deputéiert representéiert d\'Leit an der Chamber',
    expectedSentence: 'Den Deputéiert representéiert d\'Leit an der Chamber',
    hint: 'Structure: Article + sujet + verbe + objet + lieu',
    context: 'Fonction représentative des députés'
  })

  // 2.2 Complétion sur le gouvernement
  exercises.push({
    id: 'government_completion',
    type: 'phrase_completion',
    vocabularyItem: unit27Vocabulary[2], // Regierung
    question: 'Complétez: "D\'Regierung besteet aus ___"',
    options: ['Ministeren', 'Deputéierten', 'Richtere'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Ministeren',
    expectedSentence: 'D\'Regierung besteet aus Ministeren',
    context: 'Composition du gouvernement luxembourgeois'
  })

  // =============================================================================
  // ÉTAPE 3 : PROCESSUS DÉMOCRATIQUES (A2+)
  // =============================================================================

  // 3.1 Compréhension du processus électoral
  exercises.push({
    id: 'text_comprehension_elections',
    type: 'text_comprehension',
    vocabularyItem: unit27Vocabulary[7],
    question: 'Lisez: "All fënnef Joer sinn Wahlen zu Lëtzebuerg. D\'Leit wielen hir Deputéiert." Combien de temps dure un mandat ?',
    options: ['cinq ans', 'quatre ans', 'six ans'].sort(() => Math.random() - 0.5),
    correctAnswer: 'cinq ans',
    context: 'Cycle électoral luxembourgeois'
  })

  // 3.2 Correction erreurs institutionnelles
  exercises.push({
    id: 'error_correction_premier',
    type: 'error_correction',
    vocabularyItem: unit27Vocabulary[4],
    question: 'Corrigez: "De Premier gëtt direkt vum Vollek gewielt"',
    options: [
      'De Premier gëtt vun der Chamber ernannt',
      'De Premier gëtt vum Kinnek gewielt',
      'De Premier wielt sech selwer'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'De Premier gëtt vun der Chamber ernannt',
    context: 'Processus de nomination du Premier ministre'
  })

  // =============================================================================
  // ÉTAPE 4 : PARTICIPATION CITOYENNE (A2+/B1)
  // =============================================================================

  // 4.1 Expression sur la participation
  exercises.push({
    id: 'creative_citizen_participation',
    type: 'creative_expression',
    vocabularyItem: unit27Vocabulary[6], // wielen
    question: 'Exprimez pourquoi il est important de voter au Luxembourg',
    wordBank: ['Wielen', 'ass', 'wichteg', 'fir', 'Demokratie', 'a', 'Representatioun'],
    correctAnswer: 'Wielen ass wichteg fir d\'Demokratie a Representatioun',
    expectedSentence: 'Wielen ass wichteg fir d\'Demokratie',
    hint: 'Utilisez "fir" pour exprimer le but',
    context: 'Importance de la participation démocratique'
  })

  // 4.2 Dialogue citoyen
  exercises.push({
    id: 'dialogue_voting_discussion',
    type: 'dialogue_completion',
    vocabularyItem: unit27Vocabulary[8],
    question: 'Conversation politique: "Wat mengs du iwwer eis ___?"',
    options: ['Demokratie', 'Wieder', 'Essen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Demokratie',
    context: 'Discussion citoyenne sur le système politique'
  })

  // =============================================================================
  // ÉTAPE 5 : ANALYSE INSTITUTIONNELLE (B1)
  // =============================================================================

  // 5.1 Argumentation sur le système
  exercises.push({
    id: 'argumentation_monarchy_democracy',
    type: 'argumentation_building',
    vocabularyItem: unit27Vocabulary[8],
    question: 'Expliquez comment Luxembourg combine monarchie et démocratie',
    wordBank: ['Luxembourg', 'huet', 'eng', 'konstitutionell', 'Monarchie', 'mat', 'Demokratie'],
    correctAnswer: 'Luxembourg huet eng konstitutionell Monarchie mat Demokratie',
    expectedSentence: 'Luxembourg huet eng konstitutionell Monarchie mat Demokratie',
    hint: 'Utilisez "mat" pour combiner les concepts',
    context: 'Spécificité du système monarchique démocratique'
  })

  // 5.2 Opinion sur la représentation
  exercises.push({
    id: 'opinion_political_representation',
    type: 'opinion_expression',
    vocabularyItem: unit27Vocabulary[0],
    question: 'Votre opinion: Comment améliorer la représentation politique au Luxembourg ?',
    options: [
      'Méi Diversitéit an der Chamber wier gutt',
      'Alles ass perfekt wéi et ass',
      'Politique interesséiert mech net'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Méi Diversitéit an der Chamber wier gutt',
    context: 'Réflexion sur l\'amélioration démocratique'
  })

  return exercises
}

// Validation spécifique système politique
export function validateUnit27Structure(): {
  cefrLevel: string
  institutionalCoverage: number
  civicEngagement: number
  politicalAuthenticity: 'excellent' | 'good' | 'basic'
} {
  const exercises = generateUnit27Exercises()

  // Couverture institutionnelle
  const institutionalTerms = ['Chamber', 'Regierung', 'Deputéiert', 'Minister', 'Groussherzogin']
  const institutionalCoverage = (institutionalTerms.length / unit27Vocabulary.length) * 100

  // Engagement civique
  const engagementTypes = ['creative_expression', 'dialogue_completion', 'opinion_expression']
  const engagementCount = exercises.filter(ex => engagementTypes.includes(ex.type)).length
  const civicEngagement = (engagementCount / exercises.length) * 100

  return {
    cefrLevel: 'A2+',
    institutionalCoverage: Math.round(institutionalCoverage),
    civicEngagement: Math.round(civicEngagement),
    politicalAuthenticity: civicEngagement >= 30 ? 'excellent' : 'good'
  }
}

// Définition complète Unité 27 - Système politique
export const learningUnit27: LearningUnit = {
  id: 'unit_27',
  title: 'Système politique luxembourgeois',
  description: 'Maîtrisez le vocabulaire civique : députés, chambre, gouvernement et démocratie',
  level: 'A2',
  vocabulary: unit27Vocabulary,
  exercises: generateUnit27Exercises(),
  targetScore: 85,
  estimatedTime: 8
}