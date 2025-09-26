import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U4 : Transports publics

export const unit12Vocabulary: VocabularyItem[] = [
  {
    id: 's2u4_buskaart',
    luxembourgish: 'Buskaart',
    french: 'carte de bus',
    pronunciation: 'BUS-kart',
    usage: 'Support indispensable pour valider son trajet.'
  },
  {
    id: 's2u4_arret',
    luxembourgish: 'Arrêt',
    french: 'arrêt',
    pronunciation: 'ar-RAY',
    usage: 'Nommer l’arrêt exact pour éviter les confusions.'
  },
  {
    id: 's2u4_umstieg',
    luxembourgish: 'Umstieg',
    french: 'correspondance',
    pronunciation: 'OOM-shtiig',
    usage: 'Prévoir un changement de ligne sereinement.'
  },
  {
    id: 's2u4_fueren',
    luxembourgish: 'fueren',
    french: 'conduire / aller',
    pronunciation: 'FUR-en',
    usage: 'Décrire le trajet multimodal dans la tâche finale.'
  },
  {
    id: 's2u4_ukommen',
    luxembourgish: 'ukommen',
    french: 'arriver',
    pronunciation: 'OU-koh-men',
    usage: 'Indiquer l’heure d’arrivée prévue.'
  },
  {
    id: 's2u4_retour',
    luxembourgish: 'Retour',
    french: 'retour',
    pronunciation: 're-TOUR',
    usage: 'Planifier le trajet retour avec précision.'
  },
  {
    id: 's2u4_plang',
    luxembourgish: 'Plang',
    french: 'plan / horaire',
    pronunciation: 'PLANG',
    usage: 'Lire et citer l’horaire officiel CFL/TICE.'
  }
]

export const generateUnit12Exercises = (): Exercise[] => [
  {
    id: 's2u4_reactivation_horaire',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[6],
    question: 'Complétez : « De ___ seet, datt de Bus um 7:30 ukënnt. »',
    options: ['Plang', 'Retour', 'Buskaart'],
    correctAnswer: 'Plang',
    context: 'Réactivation des horaires et chiffres vus précédemment.'
  },
  {
    id: 's2u4_valider',
    type: 'translation',
    vocabularyItem: unit12Vocabulary[0],
    question: 'Comment nommer le support que vous validez à bord ?',
    options: ['Buskaart', 'Arrêt', 'Retour'],
    correctAnswer: 'Buskaart',
    context: 'Préparer la description du trajet domicile-travail.'
  },
  {
    id: 's2u4_correspondance',
    type: 'pattern_recognition',
    vocabularyItem: unit12Vocabulary[2],
    question: 'Quel terme désigne un changement de ligne ?',
    options: ['Umstieg', 'fueren', 'ukommen'],
    correctAnswer: 'Umstieg',
    context: 'Anticiper les explications lors d’un itinéraire combiné.'
  },
  {
    id: 's2u4_arrivee',
    type: 'dialogue_completion',
    vocabularyItem: unit12Vocabulary[4],
    question: 'Choisissez la phrase pour annoncer votre arrivée :',
    options: [
      'Ech kommen um 8 Auer zu Lëtzebuerg Gare un.',
      'Ech maachen eng Reservatioun um 8 Auer.',
      'Ech sinn midd um 8 Auer.'
    ],
    correctAnswer: 'Ech kommen um 8 Auer zu Lëtzebuerg Gare un.',
    context: 'Préciser les horaires dans un échange professionnel.'
  },
  {
    id: 's2u4_retour_planifie',
    type: 'phrase_completion',
    vocabularyItem: unit12Vocabulary[5],
    question: 'Complétez : « Fir de ___ fueren ech mat der Tram. »',
    options: ['Retour', 'Plang', 'Buskaart'],
    correctAnswer: 'Retour',
    context: 'Expliquer la stratégie multimodale complète.'
  },
  {
    id: 's2u4_itineraire_final',
    type: 'sentence_construction',
    vocabularyItem: unit12Vocabulary[3],
    question: 'Assemblez la phrase clé de la tâche finale.',
    wordBank: ['Ech', 'fueren', 'mam', 'Bus', 'a', 'mam', 'Zuch.'],
    correctAnswer: 'Ech fueren mam Bus a mam Zuch.',
    expectedSentence: 'Ech fueren mam Bus a mam Zuch.',
    context: 'Présenter l’itinéraire combinant bus et train.'
  }
]

export const learningUnit12: LearningUnit = {
  id: 'S2U4',
  title: 'Transports publics',
  description:
    'Je peux planifier un trajet multimodal, lire les horaires officiels et prévenir mes interlocuteur·trice·s des correspondances.',
  level: 'A1+',
  vocabulary: unit12Vocabulary,
  exercises: generateUnit12Exercises(),
  targetScore: 84,
  estimatedTime: 8
}
