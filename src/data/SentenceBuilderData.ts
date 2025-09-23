import { Exercise } from '../types/LearningTypes'

export const sentenceBuilderExercises: Exercise[] = [
  {
    id: 'sentence_builder_1',
    type: 'sentence_construction',
    vocabularyItem: {
      id: 'sentence_builder_vocab_1',
      luxembourgish: "Ech ginn an d'Schoul",
      french: "Je vais à l'école",
      pronunciation: "Ekh ginn an d'Shoul",
      usage: 'Exprimer un déplacement vers un lieu du quotidien'
    },
    question: 'Assemblez la phrase luxembourgeoise correspondant à « Je vais à l\'école ».',
    correctAnswer: "Ech ginn an d'Schoul",
    expectedSentence: "Ech ginn an d'Schoul",
    wordBank: ['Ech', 'ginn', 'an', "d'Schoul"],
    hint: 'Commencez par le pronom sujet « Ech » avant le verbe.',
    context: 'Structure simple sujet + verbe + complément.'
  },
  {
    id: 'sentence_builder_2',
    type: 'sentence_construction',
    vocabularyItem: {
      id: 'sentence_builder_vocab_2',
      luxembourgish: "D'Kanner spillen am Park",
      french: 'Les enfants jouent au parc',
      pronunciation: "D'Kanner shpillen am Park",
      usage: 'Décrire une activité d\'enfants dans un lieu public'
    },
    question: 'Reconstituez la phrase signifiant « Les enfants jouent au parc ».',
    correctAnswer: "D'Kanner spillen am Park",
    expectedSentence: "D'Kanner spillen am Park",
    wordBank: ["D'Kanner", 'spillen', 'am', 'Park'],
    hint: 'Commencez par le groupe nominal « D\'Kanner » pour exprimer le sujet.',
    context: 'Pensez au verbe « spillen » qui signifie jouer.'
  },
  {
    id: 'sentence_builder_3',
    type: 'sentence_construction',
    vocabularyItem: {
      id: 'sentence_builder_vocab_3',
      luxembourgish: 'Mir drénken gär moies Kaffi',
      french: 'Nous aimons boire du café le matin',
      pronunciation: 'Meer drengken gair moy-es Kaffi',
      usage: 'Parler des habitudes quotidiennes en famille ou entre amis'
    },
    question: 'Construisez la phrase équivalente à « Nous aimons boire du café le matin ».',
    correctAnswer: 'Mir drénken gär moies Kaffi',
    expectedSentence: 'Mir drénken gär moies Kaffi',
    wordBank: ['Mir', 'drénken', 'gär', 'moies', 'Kaffi'],
    hint: 'Le verbe « drénken » (boire) est suivi de l\'adverbe « gär » pour exprimer le plaisir.',
    context: 'L\'adverbe « moies » précise le moment de la journée.'
  }
]
