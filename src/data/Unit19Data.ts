// Unit 19: Mobilitéit an Transport - A2 Vie pratique
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit19Vocabulary: VocabularyItem[] = [
  {
    id: 'mobiliteit',
    luxembourgish: 'Mobilitéit',
    french: 'mobilité',
    pronunciation: 'mo-bi-li-TÄIT',
    usage: 'Capacité à se déplacer au Luxembourg entre communes.'
  },
  {
    id: 'mobilise',
    luxembourgish: 'Mobilise',
    french: 'service public Mobilise',
    pronunciation: 'MO-bi-li-se',
    usage: 'Nom du service national pour les transports en commun.'
  },
  {
    id: 'mkaart',
    luxembourgish: 'mKaart',
    french: 'carte de transport',
    pronunciation: 'em-KAART',
    usage: 'Carte à puce pour utiliser trains et bus gratuitement.'
  },
  {
    id: 'zuch',
    luxembourgish: 'Zuch',
    french: 'train',
    pronunciation: 'TSOUKH',
    usage: 'Train CFL reliant les grandes villes du pays.'
  },
  {
    id: 'busarrêt',
    luxembourgish: 'Busarrêt',
    french: 'arrêt de bus',
    pronunciation: 'BUS-a-rè',
    usage: 'Point d\'arrêt pour monter dans un bus communal.'
  },
  {
    id: 'veloh',
    luxembourgish: 'Véloh!',
    french: 'vélo en libre-service',
    pronunciation: 'VÉ-lo',
    usage: 'Système de vélos partagés de la Ville de Luxembourg.'
  },
  {
    id: 'carsharing',
    luxembourgish: 'Carsharing',
    french: 'voiture partagée',
    pronunciation: 'KAAR-sha-ring',
    usage: 'Service d\'autopartage pour compléter les transports.'
  },
  {
    id: 'statioun',
    luxembourgish: 'Statioun',
    french: 'station',
    pronunciation: 'shta-tsi-OUN',
    usage: 'Station de tram ou de bus centrale.'
  },
  {
    id: 'tramschinn',
    luxembourgish: 'Tramschinn',
    french: 'tramway',
    pronunciation: 'TRAM-shinn',
    usage: 'Ligne de tram moderne entre Luxembourg-Ville et Kirchberg.'
  },
  {
    id: 'fahrplang',
    luxembourgish: 'Fahrplang',
    french: 'horaire',
    pronunciation: 'FAR-plang',
    usage: 'Horaire officiel des transports en commun.'
  }
]

export const generateUnit19Exercises = (): Exercise[] => [
  {
    id: 'u19_translation_mobiliteit',
    type: 'translation',
    vocabularyItem: unit19Vocabulary[0],
    question: 'Comment dit-on « mobilité » en luxembourgeois ?',
    options: ['Mobilitéit', 'Fahrplang', 'Tramschinn'],
    correctAnswer: 'Mobilitéit',
    context: 'Démarrez par un mot clé pour vous déplacer avec aisance.'
  },
  {
    id: 'u19_dialogue_mobilise',
    type: 'dialogue_completion',
    vocabularyItem: unit19Vocabulary[1],
    question: 'On vous indique le site national pour planifier un trajet. Vous répondez :',
    options: ['Mobilise', 'Carsharing', 'Véloh!'],
    correctAnswer: 'Mobilise',
    context: 'Identifier le service officiel aide à préparer vos trajets.'
  },
  {
    id: 'u19_sentence_mkaart',
    type: 'sentence_construction',
    vocabularyItem: unit19Vocabulary[2],
    question: 'Assemblez une phrase pour dire que vous avez la carte de transport.',
    wordBank: ['Ech', 'hu', 'meng', 'mKaart'],
    correctAnswer: 'Ech hu meng mKaart',
    expectedSentence: 'Ech hu meng mKaart',
    hint: 'Sujet + verbe avoir + déterminant + carte.',
    context: 'Exprimer que vous êtes prêt·e à voyager renforce votre autonomie.'
  },
  {
    id: 'u19_audio_zuch',
    type: 'audio_recognition',
    vocabularyItem: unit19Vocabulary[3],
    question: 'Vous entendez l\'annonce d\'un moyen de transport. De quoi s\'agit-il ?',
    options: ['Zuch', 'Busarrêt', 'Tramschinn'],
    correctAnswer: 'Zuch',
    context: 'Reconnaître les annonces sonores rassure pour vos déplacements.'
  },
  {
    id: 'u19_dialogue_bus',
    type: 'dialogue_completion',
    vocabularyItem: unit19Vocabulary[4],
    question: 'Un ami demande où se trouve le prochain arrêt. Vous dites :',
    options: ['De Busarrêt ass hei.', 'Ech hu meng mKaart.', 'Mobilitéit ass wichteg.'],
    correctAnswer: 'De Busarrêt ass hei.',
    context: 'Donner une information concrète fait avancer la conversation.'
  },
  {
    id: 'u19_translation_veloh',
    type: 'translation',
    vocabularyItem: unit19Vocabulary[5],
    question: 'Comment nomme-t-on les vélos partagés à Luxembourg-Ville ?',
    options: ['Véloh!', 'Carsharing', 'Mobilise'],
    correctAnswer: 'Véloh!',
    context: 'Diversifier vos moyens de transport augmente votre liberté.'
  },
  {
    id: 'u19_word_order_fahrplang',
    type: 'word_ordering',
    vocabularyItem: unit19Vocabulary[9],
    question: 'Remettez les mots en ordre pour parler des horaires.',
    wordBank: ['De', 'Fahrplang', 'ass', 'online'],
    correctAnswer: 'De Fahrplang ass online',
    expectedSentence: 'De Fahrplang ass online',
    hint: 'Commencez par l\'article défini.',
    context: 'Partager un conseil numérique motive votre partenaire de trajet.'
  },
  {
    id: 'u19_cultural_tram',
    type: 'cultural_context',
    vocabularyItem: unit19Vocabulary[8],
    question: 'Où le tram luxembourgeois est-il particulièrement pratique ?',
    options: ['Um Kirchberg', 'Am Süden', 'Op der Musel'],
    correctAnswer: 'Um Kirchberg',
    context: 'Situer les lignes clés vous rend confiant·e pour rejoindre les institutions.'
  }
]

export const learningUnit19: LearningUnit = {
  id: 'unit_19',
  title: 'Mobilitéit an Transport',
  description: 'Déplacez-vous sereinement grâce au réseau gratuit luxembourgeois.',
  level: 'A2',
  vocabulary: unit19Vocabulary,
  exercises: generateUnit19Exercises(),
  targetScore: 80,
  estimatedTime: 8
}
