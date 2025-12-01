import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U5 : Voyager au Luxembourg

export const unit21Vocabulary: VocabularyItem[] = [
  {
    id: 's3u5_ticket',
    luxembourgish: 'Ticket kombinéiert',
    french: 'ticket combiné',
    pronunciation: 'TI-ket kom-bi-NAY',
    usage: 'Réserver un ticket combinant plusieurs transports.'
  },
  {
    id: 's3u5_museeen',
    luxembourgish: 'Muséeën',
    french: 'musées',
    pronunciation: 'mu-ZAY-en',
    usage: 'Préparer une visite culturelle.'
  },
  {
    id: 's3u5_wanderweer',
    luxembourgish: 'Wanderweeër',
    french: 'sentiers de randonnée',
    pronunciation: 'VAN-der-vay-er',
    usage: 'Planifier une excursion nature.'
  },
  {
    id: 's3u5_entree',
    luxembourgish: 'Entrée',
    french: 'entrée (billet)',
    pronunciation: 'AN-tree',
    usage: 'Demander le prix d’entrée.'
  },
  {
    id: 's3u5_reserveieren',
    luxembourgish: 'Reservéieren',
    french: 'réserver',
    pronunciation: 're-zer-VAY-ren',
    usage: 'Réserver une activité ou un hébergement.'
  },
  {
    id: 's3u5_ausfluch',
    luxembourgish: 'Ausfluch',
    french: 'excursion',
    pronunciation: 'AUS-flu(h)',
    usage: 'Décrire l’excursion proposée.'
  },
  {
    id: 's3u5_iwwernuechtung',
    luxembourgish: 'Iwwernuechtung',
    french: 'nuitée',
    pronunciation: 'IU-ber-nuek-tung',
    usage: 'Planifier l’hébergement sur place.'
  },
  {
    id: 's3u5_plang',
    luxembourgish: 'Plang',
    french: 'plan',
    pronunciation: 'PLANG',
    usage: 'Structurer l’itinéraire complet.'
  },
  {
    id: 's3u5_broschur',
    luxembourgish: 'Broschür',
    french: 'brochure',
    pronunciation: 'bro-SHUR',
    usage: 'S’appuyer sur les supports touristiques.'
  },
  {
    id: 's3u5_bunn',
    luxembourgish: 'Bunn',
    french: 'train',
    pronunciation: 'BOON',
    usage: 'Coordonner les transports ferroviaires.'
  }
]

export const generateUnit21Exercises = (): Exercise[] => [
  {
    id: 's3u5_reactivation_itineraire',
    type: 'dialogue_completion',
    vocabularyItem: unit21Vocabulary[7],
    question: 'Complétez : « De ___ fir den Ausfluch féiert iwwer d’Musel. »',
    options: ['Plang', 'Broschür', 'Bunn'],
    correctAnswer: 'Plang',
    context: 'Réactiver la planification d’itinéraires multimodaux.'
  },
  {
    id: 's3u5_ticket',
    type: 'translation',
    vocabularyItem: unit21Vocabulary[0],
    question: 'Quel ticket mentionne plusieurs transports ?',
    options: ['Ticket kombinéiert', 'Entrée', 'Bunn'],
    correctAnswer: 'Ticket kombinéiert',
    context: 'Préparer les réservations de transport.'
  },
  {
    id: 's3u5_randonnee',
    type: 'pattern_recognition',
    vocabularyItem: unit21Vocabulary[2],
    question: 'Quelle phrase décrit une randonnée ?',
    options: [
      'Mir entdecken déi nei Wanderweeër am Mullerthal.',
      'Mir maachen eng Invitatioun fir e Concert.',
      'Mir kafen en neie Portmonni.'
    ],
    correctAnswer: 'Mir entdecken déi nei Wanderweeër am Mullerthal.',
    context: 'Mettre en valeur le patrimoine naturel luxembourgeois.'
  },
  {
    id: 's3u5_reservation',
    type: 'dialogue_completion',
    vocabularyItem: unit21Vocabulary[4],
    question: 'Choisissez la phrase pour réserver un hébergement :',
    options: [
      'Ech wëll eng Iwwernuechtung zu Clervaux reservéieren.',
      'Ech froen no der Gesondheetskaart.',
      'Ech schécken de RIB haut.'
    ],
    correctAnswer: 'Ech wëll eng Iwwernuechtung zu Clervaux reservéieren.',
    context: 'Coordonner l’hébergement pour le week-end.'
  },
  {
    id: 's3u5_musees',
    type: 'phrase_completion',
    vocabularyItem: unit21Vocabulary[1],
    question: 'Complétez : « Mir besichen zwou ___ zu Lëtzebuerg-Stad. »',
    options: ['Muséeën', 'Broschür', 'Bunn'],
    correctAnswer: 'Muséeën',
    context: 'Organiser la partie culturelle de l’itinéraire.'
  },
  {
    id: 's3u5_support',
    type: 'dialogue_completion',
    vocabularyItem: unit21Vocabulary[8],
    question: 'Quelle phrase montre que vous utilisez une brochure ?',
    options: [
      'D’Broschür erkläert d’Programm vum Weekend.',
      'Ech schécken de PIN net weider.',
      'Ech huelen d’Antibiotikum.'
    ],
    correctAnswer: 'D’Broschür erkläert d’Programm vum Weekend.',
    context: 'Utiliser des supports pour convaincre les ami·e·s.'
  },
  {
    id: 's3u5_train',
    type: 'sentence_construction',
    vocabularyItem: unit21Vocabulary[9],
    question: 'Assemblez la phrase pour préciser le transport ferroviaire.',
    wordBank: ['Mir', 'fueren', 'mam', 'Bunn', 'op', 'Clervaux.'],
    correctAnswer: 'Mir fueren mam Bunn op Clervaux.',
    expectedSentence: 'Mir fueren mam Bunn op Clervaux.',
    context: 'Décrire l’itinéraire complet aux participant·e·s.'
  }
]

export const learningUnit21: LearningUnit = {
  id: 'S3U5',
  title: 'Voyager au Luxembourg',
  description:
    'Je peux planifier une excursion complète, réserver transports et hébergements et valoriser le patrimoine local.',
  level: 'A2',
  vocabulary: unit21Vocabulary,
  exercises: generateUnit21Exercises(),
  targetScore: 88,
  estimatedTime: 11
}
