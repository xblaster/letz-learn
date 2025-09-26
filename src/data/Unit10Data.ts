import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U2 : Courses et marché

export const unit10Vocabulary: VocabularyItem[] = [
  {
    id: 's2u2_brout',
    luxembourgish: 'Brout',
    french: 'pain',
    pronunciation: 'BROWT',
    usage: 'Produit de base indispensable pour un panier luxembourgeois.'
  },
  {
    id: 's2u2_gromperen',
    luxembourgish: 'Gromperen',
    french: 'pommes de terre',
    pronunciation: 'GROM-pe-ren',
    usage: 'Ingrédient phare des recettes familiales.'
  },
  {
    id: 's2u2_tomaten',
    luxembourgish: 'Tomaten',
    french: 'tomates',
    pronunciation: 'to-MA-ten',
    usage: 'Produit frais à demander au marché couvert.'
  },
  {
    id: 's2u2_prais',
    luxembourgish: 'Präis',
    french: 'prix',
    pronunciation: 'PRAÏS',
    usage: 'Mot clé pour poser une question polie sur le coût.'
  },
  {
    id: 's2u2_reduktioun',
    luxembourgish: 'Reduktioun',
    french: 'réduction',
    pronunciation: 're-DUK-tee-oon',
    usage: 'Mentionner une promotion avec le sourire.'
  },
  {
    id: 's2u2_kuerf',
    luxembourgish: 'Kuerf',
    french: 'panier',
    pronunciation: 'KUERF',
    usage: 'Objet utile pour préparer le panier local final.'
  },
  {
    id: 's2u2_kaese',
    luxembourgish: 'Käse',
    french: 'fromage',
    pronunciation: 'KAE-ze',
    usage: 'Produit signature pour valoriser les producteurs.'
  }
]

export const generateUnit10Exercises = (): Exercise[] => [
  {
    id: 's2u2_reactivation_politesse',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[3],
    question: 'Complétez la question : « Wéi vill ___ kascht dëst Brout, w.e.g.? »',
    options: ['Präis', 'Käse', 'Kuerf'],
    correctAnswer: 'Präis',
    context: 'Réactivation : utiliser la politesse et les nombres vus en Section 1.'
  },
  {
    id: 's2u2_panier_local',
    type: 'translation',
    vocabularyItem: unit10Vocabulary[5],
    question: 'Comment dire « panier » pour préparer sa liste ?',
    options: ['Kuerf', 'Brout', 'Tomaten'],
    correctAnswer: 'Kuerf',
    context: 'Préparer l’activité finale : composer un panier du marché.'
  },
  {
    id: 's2u2_choix_produit',
    type: 'pattern_recognition',
    vocabularyItem: unit10Vocabulary[2],
    question: 'Quel mot correspond aux tomates que vous voyez au stand bio ?',
    options: ['Tomaten', 'Gromperen', 'Käse'],
    correctAnswer: 'Tomaten',
    context: 'Identifier les produits frais lors d’un dialogue authentique.'
  },
  {
    id: 's2u2_negociation',
    type: 'dialogue_completion',
    vocabularyItem: unit10Vocabulary[4],
    question: 'Choisissez la phrase polie pour demander une promotion :',
    options: [
      'Gëtt et eng Reduktioun haut?',
      'Ech sinn midd haut.',
      'Ech hunn e Portmonni.'
    ],
    correctAnswer: 'Gëtt et eng Reduktioun haut?',
    context: 'Utiliser un ton cordial lors d’une négociation au marché.'
  },
  {
    id: 's2u2_compter',
    type: 'phrase_completion',
    vocabularyItem: unit10Vocabulary[0],
    question: 'Complétez : « Ech hätt gär zwee ___ a véier Tomaten, w.e.g. »',
    options: ['Brout', 'Präis', 'Käse'],
    correctAnswer: 'Brout',
    context: 'Mobiliser les nombres pour une commande claire.'
  },
  {
    id: 's2u2_panier_final',
    type: 'sentence_construction',
    vocabularyItem: unit10Vocabulary[6],
    question: 'Assemblez la phrase qui clôt la tâche finale.',
    wordBank: ['Ech', 'maachen', 'e', 'lokale', 'Käse', 'Kuerf.'],
    correctAnswer: 'Ech maachen e lokale Käse Kuerf.',
    expectedSentence: 'Ech maachen e lokale Käse Kuerf.',
    context: 'Valider le panier présenté sur la Place Guillaume II.'
  }
]

export const learningUnit10: LearningUnit = {
  id: 'S2U2',
  title: 'Courses et marché',
  description:
    'Je peux acheter les produits de base au marché, poser des questions de prix et rester cordial·e avec les commerçant·e·s.',
  level: 'A1+',
  vocabulary: unit10Vocabulary,
  exercises: generateUnit10Exercises(),
  targetScore: 82,
  estimatedTime: 8
}
