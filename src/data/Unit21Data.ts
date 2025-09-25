// Unit 21: Suen a Budget - A2 Vie pratique
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit21Vocabulary: VocabularyItem[] = [
  {
    id: 'budget',
    luxembourgish: 'Budget',
    french: 'budget',
    pronunciation: 'BU-djett',
    usage: 'Plan de dépenses pour votre quotidien au Luxembourg.'
  },
  {
    id: 'kont',
    luxembourgish: 'Kont',
    french: 'compte bancaire',
    pronunciation: 'KONT',
    usage: 'Compte bancaire luxembourgeois pour recevoir votre salaire.'
  },
  {
    id: 'spuerkont',
    luxembourgish: 'Spuerkont',
    french: 'compte épargne',
    pronunciation: 'SHPOUR-kont',
    usage: 'Compte pour économiser et préparer vos projets.'
  },
  {
    id: 'staatleche_prime',
    luxembourgish: 'Staatlech Prime',
    french: 'prime étatique',
    pronunciation: 'SHTAAT-lekh PRI-me',
    usage: 'Aide financière du gouvernement (p.ex. loyer, mobilité).'
  },
  {
    id: 'steier',
    luxembourgish: 'Steier',
    french: 'impôt',
    pronunciation: 'SHTAY-er',
    usage: 'Impôt sur le revenu ou les achats (TVA).'
  },
  {
    id: 'recu',
    luxembourgish: 'Reçu',
    french: 'reçu',
    pronunciation: 're-SÜ',
    usage: 'Preuve de paiement à conserver pour vos dossiers.'
  },
  {
    id: 'ausgab',
    luxembourgish: 'Ausgab',
    french: 'dépense',
    pronunciation: 'AOS-gab',
    usage: 'Argent que vous sortez pour vos achats quotidiens.'
  },
  {
    id: 'spueren',
    luxembourgish: 'Spueren',
    french: 'économiser',
    pronunciation: 'SHPOU-ren',
    usage: 'Mettre de côté pour un projet ou une sécurité.'
  },
  {
    id: 'bancomat',
    luxembourgish: 'Bancomat',
    french: 'distributeur automatique',
    pronunciation: 'BAN-ko-mat',
    usage: 'Guichet automatique pour retirer des espèces.'
  },
  {
    id: 'familienzulag',
    luxembourgish: 'Familljenzoulage',
    french: 'allocation familiale',
    pronunciation: 'fa-MILL-yen-tsou-lach',
    usage: 'Soutien financier versé aux familles résidentes.'
  }
]

export const generateUnit21Exercises = (): Exercise[] => [
  {
    id: 'u21_translation_budget',
    type: 'translation',
    vocabularyItem: unit21Vocabulary[0],
    question: 'Comment dit-on « budget » en luxembourgeois ?',
    options: ['Budget', 'Steier', 'Ausgab'],
    correctAnswer: 'Budget',
    context: 'Nommer votre budget vous aide à mieux le suivre.'
  },
  {
    id: 'u21_dialogue_kont',
    type: 'dialogue_completion',
    vocabularyItem: unit21Vocabulary[1],
    question: 'Votre banque vous confirme l\'ouverture. Vous répondez :',
    options: ['Ech hunn en neie Kont.', 'Ech fëllen d\'Meldungskaart.', 'Ech fueren mam Tram.'],
    correctAnswer: 'Ech hunn en neie Kont.',
    context: 'Exprimer votre réussite valorise vos efforts administratifs.'
  },
  {
    id: 'u21_sentence_spuerkont',
    type: 'sentence_construction',
    vocabularyItem: unit21Vocabulary[2],
    question: 'Formez une phrase pour dire que vous ouvrez un compte épargne.',
    wordBank: ['Ech', 'maachen', 'en', 'Spuerkont', 'op'],
    correctAnswer: 'Ech maachen en Spuerkont op',
    expectedSentence: 'Ech maachen en Spuerkont op',
    hint: 'Le verbe à particule séparable se place à la fin.',
    context: 'Souligner un projet personnel motive votre progression.'
  },
  {
    id: 'u21_cultural_prime',
    type: 'cultural_context',
    vocabularyItem: unit21Vocabulary[3],
    question: 'Quelle aide mentionnez-vous pour la mobilité durable ?',
    options: ['Staatlech Prime', 'Reçu', 'Spuerkont'],
    correctAnswer: 'Staatlech Prime',
    context: 'Connaître les primes nationales encourage les démarches écologiques.'
  },
  {
    id: 'u21_translation_steier',
    type: 'translation',
    vocabularyItem: unit21Vocabulary[4],
    question: 'Comment dit-on « impôt » en luxembourgeois ?',
    options: ['Steier', 'Ausgab', 'Budget'],
    correctAnswer: 'Steier',
    context: 'Identifier le vocabulaire fiscal clarifie vos obligations.'
  },
  {
    id: 'u21_dialogue_recu',
    type: 'dialogue_completion',
    vocabularyItem: unit21Vocabulary[5],
    question: 'Après un achat, vous demandez une preuve. Vous dites :',
    options: ['Kritt ech w.e.g. e Reçu?', 'Ech huelen de Rendez-vous.', 'Ech fueren op d\'Gemeng.'],
    correctAnswer: 'Kritt ech w.e.g. e Reçu?',
    context: 'Demander poliment vous aide à suivre votre budget.'
  },
  {
    id: 'u21_word_order_ausgab',
    type: 'word_ordering',
    vocabularyItem: unit21Vocabulary[6],
    question: 'Remettez les mots en ordre pour parler d\'une dépense.',
    wordBank: ['Dës', 'Ausgab', 'ass', 'fir', 'den', 'Iessenbudget'],
    correctAnswer: 'Dës Ausgab ass fir den Iessenbudget',
    expectedSentence: 'Dës Ausgab ass fir den Iessenbudget',
    hint: 'Commencez par l\'adjectif démonstratif.',
    context: 'Classer vos dépenses rend votre plan plus motivant.'
  },
  {
    id: 'u21_cultural_familljen',
    type: 'cultural_context',
    vocabularyItem: unit21Vocabulary[9],
    question: 'Quelle aide financière soutient les familles au Luxembourg ?',
    options: ['Familljenzoulage', 'Steier', 'Bancomat'],
    correctAnswer: 'Familljenzoulage',
    context: 'Connaître les droits familiaux renforce votre sentiment de sécurité.'
  }
]

export const learningUnit21: LearningUnit = {
  id: 'unit_21',
  title: 'Suen a Budget',
  description: 'Organisez vos dépenses et dialoguez avec votre banque.',
  level: 'A2',
  vocabulary: unit21Vocabulary,
  exercises: generateUnit21Exercises(),
  targetScore: 80,
  estimatedTime: 8
}
