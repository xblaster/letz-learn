// Unité 26 : Traditions luxembourgeoises (A2+) - SECTION 4: Culture et société
// Progression CEFR: A2+ - Immersion culturelle authentique maximale

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

// Vocabulaire traditions luxembourgeoises authentiques
export const unit26Vocabulary: VocabularyItem[] = [
  // ÉVÉNEMENTS TRADITIONNELS MAJEURS
  {
    id: 'schueberfouer',
    luxembourgish: 'Schueberfouer',
    french: 'foire de la Schueberfouer',
    pronunciation: 'SHOO-ber-foo-er',
    usage: 'Fête foraine historique de Luxembourg depuis 1340, fin août'
  },
  {
    id: 'emaischen',
    luxembourgish: 'Emaischen',
    french: 'marché d\'Émaischen',
    pronunciation: 'eh-MAY-shen',
    usage: 'Marché de Pâques traditionnel à Luxembourg-Ville (lundi de Pâques)'
  },
  {
    id: 'kavalkade',
    luxembourgish: 'Kavalkade',
    french: 'cavalcade',
    pronunciation: 'ka-val-KA-de',
    usage: 'Défilé de carnaval traditionnel dans les villages luxembourgeois'
  },
  {
    id: 'nationalfeierdag',
    luxembourgish: 'Nationalfeierdag',
    french: 'fête nationale',
    pronunciation: 'na-tsi-o-NAL-fay-er-dak',
    usage: 'Fête nationale luxembourgeoise le 23 juin'
  },
  // OBJETS ET SYMBOLES TRADITIONNELS
  {
    id: 'pëckelchen',
    luxembourgish: 'Pëckelchen',
    french: 'sifflet d\'oiseau',
    pronunciation: 'PEK-kel-khen',
    usage: 'Sifflet en terre cuite traditionnel vendu à l\'Emaischen'
  },
  {
    id: 'bretzel',
    luxembourgish: 'Bretzel',
    french: 'bretzel',
    pronunciation: 'BRET-tsel',
    usage: 'Pain traditionnel luxembourgeois, symbole de l\'Emaischen'
  },
  {
    id: 'dëppelkuch',
    luxembourgish: 'Dëppelkuch',
    french: 'gâteau aux pommes de terre',
    pronunciation: 'DEP-pel-kukh',
    usage: 'Spécialité culinaire traditionnelle des foires'
  },
  {
    id: 'traditioun',
    luxembourgish: 'Traditioun',
    french: 'tradition',
    pronunciation: 'tra-di-tsi-OUN',
    usage: 'Traditions culturelles luxembourgeoises transmises'
  },
  // EXPRESSIONS CULTURELLES
  {
    id: 'op_der_fouer',
    luxembourgish: 'op der Fouer',
    french: 'à la foire',
    pronunciation: 'op der FOO-er',
    usage: 'Expression pour aller aux événements traditionnels'
  },
  {
    id: 'traditionell',
    luxembourgish: 'traditionell',
    french: 'traditionnel',
    pronunciation: 'tra-di-tsi-o-NELL',
    usage: 'Qualifie les éléments du patrimoine culturel'
  }
]

// Générateur d'exercices traditions A2+
export const generateUnit26Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  // =============================================================================
  // ÉTAPE 1 : VOCABULAIRE TRADITIONNEL DE BASE (A2+)
  // =============================================================================

  // 1.1 Reconnaissance audio des événements
  exercises.push({
    id: 'audio_schueberfouer',
    type: 'audio_recognition',
    vocabularyItem: unit26Vocabulary[0], // Schueberfouer
    question: 'Écoutez ce nom d\'événement traditionnel. Quand a-t-il lieu ?',
    options: ['fin août', 'à Pâques', 'en décembre'].sort(() => Math.random() - 0.5),
    correctAnswer: 'fin août',
    context: 'Calendrier des traditions luxembourgeoises'
  })

  // 1.2 Association culturelle spécifique
  exercises.push({
    id: 'cultural_emaischen_objects',
    type: 'cultural_context',
    vocabularyItem: unit26Vocabulary[1], // Emaischen
    question: 'Que trouve-t-on traditionnellement au marché d\'Emaischen ?',
    options: [
      'Des Pëckelchen et des Bretzelen',
      'Des voitures et des bijoux',
      'Des livres et des vêtements'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Des Pëckelchen et des Bretzelen',
    context: 'Objets traditionnels spécifiques à l\'Emaischen'
  })

  // =============================================================================
  // ÉTAPE 2 : DESCRIPTION D\'ÉVÉNEMENTS (A2+)
  // =============================================================================

  // 2.1 Construction de descriptions d'événements
  exercises.push({
    id: 'event_description_schueberfouer',
    type: 'sentence_construction',
    vocabularyItem: unit26Vocabulary[0],
    question: 'Décrivez quand a lieu la Schueberfouer',
    wordBank: ['D\'Schueberfouer', 'ass', 'am', 'August', 'zu', 'Lëtzebuerg'].sort(() => Math.random() - 0.5),
    correctAnswer: 'D\'Schueberfouer ass am August zu Lëtzebuerg',
    expectedSentence: 'D\'Schueberfouer ass am August zu Lëtzebuerg',
    hint: 'Structure: Article + nom + verbe + temps + lieu',
    context: 'Description temporelle des événements traditionnels'
  })

  // 2.2 Complétion avec objets traditionnels
  exercises.push({
    id: 'objects_completion_emaischen',
    type: 'phrase_completion',
    vocabularyItem: unit26Vocabulary[4], // Pëckelchen
    question: 'Complétez: "Op der Emaischen kaf ech ___"',
    options: ['Pëckelchen', 'Computeren', 'Télévisionen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'Pëckelchen',
    expectedSentence: 'Op der Emaischen kaf ech Pëckelchen',
    context: 'Achat d\'objets traditionnels à l\'Emaischen'
  })

  // =============================================================================
  // ÉTAPE 3 : COMPRÉHENSION CULTURELLE (A2+)
  // =============================================================================

  // 3.1 Compréhension de texte culturel
  exercises.push({
    id: 'text_comprehension_traditions',
    type: 'text_comprehension',
    vocabularyItem: unit26Vocabulary[7],
    question: 'Lisez: "Lëtzebuerger Traditiounen sinn wichteg fir eis Kultur. Si bréngen d\'Leit zesummen." Pourquoi les traditions sont-elles importantes ?',
    options: ['elles rassemblent les gens', 'elles coûtent cher', 'elles sont anciennes'].sort(() => Math.random() - 0.5),
    correctAnswer: 'elles rassemblent les gens',
    context: 'Valeur sociale des traditions luxembourgeoises'
  })

  // 3.2 Correction d'erreurs culturelles
  exercises.push({
    id: 'error_correction_date_nationale',
    type: 'error_correction',
    vocabularyItem: unit26Vocabulary[3],
    question: 'Corrigez l\'erreur: "Den Nationalfeierdag ass den 14. Juli"',
    options: [
      'Den Nationalfeierdag ass den 23. Juni',
      'Den Nationalfeierdag ass den 1. Januar',
      'Den Nationalfeierdag ass den 25. Dezember'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Den Nationalfeierdag ass den 23. Juni',
    context: 'Correction de dates des fêtes nationales'
  })

  // =============================================================================
  // ÉTAPE 4 : PARTICIPATION AUX TRADITIONS (A2+/B1)
  // =============================================================================

  // 4.1 Expression créative sur traditions
  exercises.push({
    id: 'creative_carnival_description',
    type: 'creative_expression',
    vocabularyItem: unit26Vocabulary[2],
    question: 'Décrivez votre participation à une Kavalkade locale',
    wordBank: ['ech', 'ginn', 'mat', 'Frënn', 'op', 'Kavalkade', 'dansen', 'Musek'],
    correctAnswer: 'Ech ginn mat Frënn op d\'Kavalkade a mir dansen',
    expectedSentence: 'Ech ginn mat Frënn op d\'Kavalkade',
    hint: 'Utilisez "mat" pour exprimer "avec"',
    context: 'Participation personnelle aux traditions de carnaval'
  })

  // 4.2 Dialogue situation traditionnelle
  exercises.push({
    id: 'dialogue_fouer_visit',
    type: 'dialogue_completion',
    vocabularyItem: unit26Vocabulary[8],
    question: 'À un ami: "Wëlls du mat op der Fouer ___?"',
    options: ['kommen', 'schaffen', 'liewen'].sort(() => Math.random() - 0.5),
    correctAnswer: 'kommen',
    context: 'Invitation à participer aux événements traditionnels'
  })

  // =============================================================================
  // ÉTAPE 5 : APPRÉCIATION CULTURELLE (B1)
  // =============================================================================

  // 5.1 Argumentation sur l'importance culturelle
  exercises.push({
    id: 'argumentation_tradition_value',
    type: 'argumentation_building',
    vocabularyItem: unit26Vocabulary[7],
    question: 'Expliquez pourquoi préserver les traditions luxembourgeoises est important',
    wordBank: ['well', 'si', 'eis', 'Identitéit', 'representéieren', 'a', 'Geschicht', 'weisen'],
    correctAnswer: 'Traditiounen sinn wichteg well si eis Identitéit a Geschicht weisen',
    expectedSentence: 'Traditiounen sinn wichteg well si eis Identitéit weisen',
    hint: 'Utilisez "well" pour expliquer la raison',
    context: 'Argumentation sur la valeur patrimoniale'
  })

  // 5.2 Opinion sur évolution des traditions
  exercises.push({
    id: 'opinion_modern_traditions',
    type: 'opinion_expression',
    vocabularyItem: unit26Vocabulary[9],
    question: 'Votre opinion: Comment les traditions peuvent-elles évoluer tout en restant authentiques ?',
    options: [
      'Si kënnen modern ginn awer traditionell bleiwen',
      'Si mussen esou bleiwen wéi fréier',
      'Si sinn net méi wichteg haut'
    ].sort(() => Math.random() - 0.5),
    correctAnswer: 'Si kënnen modern ginn awer traditionell bleiwen',
    context: 'Réflexion sur l\'adaptation des traditions modernes'
  })

  return exercises
}

// Validation spécifique traditions luxembourgeoises
export function validateUnit26Structure(): {
  cefrLevel: string
  culturalDepth: number
  authenticity: 'excellent' | 'good' | 'basic'
  traditionalCoverage: string[]
} {
  const exercises = generateUnit26Exercises()

  // Vérification couverture des traditions majeures
  const coveredTraditions = [
    'Schueberfouer', 'Emaischen', 'Kavalkade', 'Nationalfeierdag'
  ]

  // Évaluation profondeur culturelle
  const culturalTypes = ['cultural_context', 'creative_expression', 'text_comprehension']
  const culturalCount = exercises.filter(ex => culturalTypes.includes(ex.type)).length
  const culturalDepth = (culturalCount / exercises.length) * 100

  return {
    cefrLevel: 'A2+',
    culturalDepth: Math.round(culturalDepth),
    authenticity: culturalDepth >= 40 ? 'excellent' : 'good',
    traditionalCoverage: coveredTraditions
  }
}

// Définition complète Unité 26 - Traditions luxembourgeoises
export const learningUnit26: LearningUnit = {
  id: 'unit_26',
  title: 'Traditions luxembourgeoises',
  description: 'Plongez dans l\'authenticité culturelle : Schueberfouer, Emaischen et carnavals',
  level: 'A2',
  vocabulary: unit26Vocabulary,
  exercises: generateUnit26Exercises(),
  targetScore: 85,
  estimatedTime: 8
}