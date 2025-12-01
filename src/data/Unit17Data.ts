import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U1 : Logement

export const unit17Vocabulary: VocabularyItem[] = [
  {
    id: 's3u1_appartement',
    luxembourgish: 'Appartement',
    french: 'appartement',
    pronunciation: 'a-par-te-MANG',
    usage: 'Décrire le type de logement recherché.'
  },
  {
    id: 's3u1_wunneng',
    luxembourgish: 'Wunneng',
    french: 'habitation',
    pronunciation: 'WOU-neng',
    usage: 'Parler d’un logement de manière générale.'
  },
  {
    id: 's3u1_locatioun',
    luxembourgish: 'Locatioun',
    french: 'location',
    pronunciation: 'lo-ka-TSOUN',
    usage: 'Mentionner le contrat de location.'
  },
  {
    id: 's3u1_loyers',
    luxembourgish: 'Loyer',
    french: 'loyer',
    pronunciation: 'lo-YAY',
    usage: 'Comparer les prix des logements.'
  },
  {
    id: 's3u1_quartier',
    luxembourgish: 'Quartier',
    french: 'quartier',
    pronunciation: 'kar-TIAY',
    usage: 'Situer le logement dans la ville.'
  },
  {
    id: 's3u1_balkon',
    luxembourgish: 'Balkon',
    french: 'balcon',
    pronunciation: 'BAL-kon',
    usage: 'Décrire les atouts du logement.'
  },
  {
    id: 's3u1_miwwelen',
    luxembourgish: 'Miwwelen',
    french: 'meubles',
    pronunciation: 'MI-vel-en',
    usage: 'Vérifier si le logement est meublé.'
  },
  {
    id: 's3u1_paart',
    luxembourgish: 'Paart',
    french: 'porte',
    pronunciation: 'PART',
    usage: 'Décrire l’entrée et la sécurité.'
  },
  {
    id: 's3u1_noperschaft',
    luxembourgish: 'Noperschaft',
    french: 'voisinage',
    pronunciation: 'NO-per-shaft',
    usage: 'Parler de l’ambiance du quartier.'
  },
  {
    id: 's3u1_vertrag',
    luxembourgish: 'Vertrag',
    french: 'contrat',
    pronunciation: 'fer-TRAK',
    usage: 'Analyser les clauses du contrat de location.'
  }
]

export const generateUnit17Exercises = (): Exercise[] => [
  {
    id: 's3u1_reactivation_famille',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[1],
    question: 'Complétez : « Mir sichen eng ___ fir eis Famill mat zwee Kanner. »',
    options: ['Wunneng', 'Balkon', 'Paart'],
    correctAnswer: 'Wunneng',
    context: 'Réactiver les descriptions familiales des sections précédentes.'
  },
  {
    id: 's3u1_comparer_loyer',
    type: 'translation',
    vocabularyItem: unit17Vocabulary[3],
    question: 'Quel mot utilise-t-on pour parler du loyer ?',
    options: ['Loyer', 'Quartier', 'Vertrag'],
    correctAnswer: 'Loyer',
    context: 'Comparer différentes annonces immobilières.'
  },
  {
    id: 's3u1_localisation',
    type: 'pattern_recognition',
    vocabularyItem: unit17Vocabulary[4],
    question: 'Quelle phrase situe clairement le logement ?',
    options: [
      'De Quartier ass roueg an no beim Tram.',
      'D’Locatioun ass ganz deier.',
      'Den Vertrag ass komplizéiert.'
    ],
    correctAnswer: 'De Quartier ass roueg an no beim Tram.',
    context: 'Mettre en valeur l’accessibilité dans l’annonce.'
  },
  {
    id: 's3u1_meubles',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[6],
    question: 'Choisissez la question pour savoir si le logement est meublé :',
    options: [
      'Sinn Miwwelen abegraff?',
      'Wéi grouss ass de Balkon?',
      'Wéi laang ass de Vertrag?'
    ],
    correctAnswer: 'Sinn Miwwelen abegraff?',
    context: 'Vérifier la disponibilité du mobilier pour l’installation.'
  },
  {
    id: 's3u1_contrat',
    type: 'phrase_completion',
    vocabularyItem: unit17Vocabulary[9],
    question: 'Complétez : « De ___ gëllt fir dräi Joer. »',
    options: ['Vertrag', 'Quartier', 'Paart'],
    correctAnswer: 'Vertrag',
    context: 'Analyser la durée de location proposée.'
  },
  {
    id: 's3u1_annonce',
    type: 'sentence_construction',
    vocabularyItem: unit17Vocabulary[5],
    question: 'Assemblez la phrase pour valoriser un point fort.',
    wordBank: ['D’Appartement', 'huet', 'e', 'sonnege', 'Balkon.'],
    correctAnswer: 'D’Appartement huet e sonnege Balkon.',
    expectedSentence: 'D’Appartement huet e sonnege Balkon.',
    context: 'Préparer la présentation de l’annonce finale.'
  },
  {
    id: 's3u1_voisinage',
    type: 'dialogue_completion',
    vocabularyItem: unit17Vocabulary[8],
    question: 'Quelle phrase décrit un voisinage accueillant ?',
    options: [
      'D’Noperschaft ass ganz hëllefsbereet.',
      'D’Paart ass zou.',
      'D’Locatioun ass kuerz.'
    ],
    correctAnswer: 'D’Noperschaft ass ganz hëllefsbereet.',
    context: 'Insister sur l’intégration dans la communauté locale.'
  }
]

export const learningUnit17: LearningUnit = {
  id: 'S3U1',
  title: 'Logement',
  description:
    'Je peux décrire un logement, comparer des loyers et présenter un quartier adapté à ma situation familiale.',
  level: 'A2',
  vocabulary: unit17Vocabulary,
  exercises: generateUnit17Exercises(),
  targetScore: 88,
  estimatedTime: 10
}
