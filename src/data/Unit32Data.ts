import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U8 : Géographie et mobilité

export const unit32Vocabulary: VocabularyItem[] = [
  {
    id: 's4u8_norden',
    luxembourgish: 'Norden',
    french: 'nord',
    pronunciation: 'NOR-den',
    usage: 'Nommer la région nordique du Luxembourg.'
  },
  {
    id: 's4u8_sueden',
    luxembourgish: 'Süden',
    french: 'sud',
    pronunciation: 'ZU-den',
    usage: 'Décrire la région sud, berceau industriel.'
  },
  {
    id: 's4u8_eislek',
    luxembourgish: 'Éislek',
    french: 'Oesling',
    pronunciation: 'AYS-lek',
    usage: 'Région vallonnée du nord, idéale pour la randonnée.'
  },
  {
    id: 's4u8_musel',
    luxembourgish: 'Musel',
    french: 'Moselle',
    pronunciation: 'MOO-zel',
    usage: 'Vallée viticole à découvrir.'
  },
  {
    id: 's4u8_mettelland',
    luxembourgish: 'Mëttelland',
    french: 'Gutland / centre',
    pronunciation: 'MET-tel-land',
    usage: 'Plaine centrale comprenant la capitale.'
  },
  {
    id: 's4u8_grenz',
    luxembourgish: 'Grenz',
    french: 'frontière',
    pronunciation: 'GRENTS',
    usage: 'Décrire les frontières partagées avec les pays voisins.'
  },
  {
    id: 's4u8_dall',
    luxembourgish: 'Dall',
    french: 'vallée',
    pronunciation: 'DAL',
    usage: 'Parler des reliefs luxembourgeois.'
  },
  {
    id: 's4u8_heicht',
    luxembourgish: 'Héicht',
    french: 'altitude',
    pronunciation: 'HAYCHT',
    usage: 'Comparer l’altitude des régions.'
  },
  {
    id: 's4u8_duerf',
    luxembourgish: 'Duerf',
    french: 'village',
    pronunciation: 'DOERF',
    usage: 'Mettre en avant les villages pittoresques.'
  },
  {
    id: 's4u8_naturpark',
    luxembourgish: 'Naturpark',
    french: 'parc naturel',
    pronunciation: 'na-TOUR-park',
    usage: 'Désigner les parcs naturels luxembourgeois.'
  }
]

export const generateUnit32Exercises = (): Exercise[] => [
  {
    id: 's4u8_reactivation_regions',
    type: 'dialogue_completion',
    vocabularyItem: unit32Vocabulary[0],
    question: 'Complétez : « Am ___ fannt Dir d’Stad Clervaux. »',
    options: ['Norden', 'Musel', 'Dall'],
    correctAnswer: 'Norden',
    context: 'Réactiver la connaissance des régions du pays.'
  },
  {
    id: 's4u8_sud',
    type: 'translation',
    vocabularyItem: unit32Vocabulary[1],
    question: 'Quel mot évoque la région industrielle du sud ?',
    options: ['Süden', 'Éislek', 'Mëttelland'],
    correctAnswer: 'Süden',
    context: 'Relier géographie et histoire industrielle.'
  },
  {
    id: 's4u8_musel',
    type: 'pattern_recognition',
    vocabularyItem: unit32Vocabulary[3],
    question: 'Quelle phrase décrit la vallée de la Moselle ?',
    options: [
      'D’Musel ass bekannt fir Wäibau a pittoresch Dierfer.',
      'D’Grenz mat der Belsch ass ganz laang.',
      'D’Héicht vum Éislek ass niddreg.'
    ],
    correctAnswer: 'D’Musel ass bekannt fir Wäibau a pittoresch Dierfer.',
    context: 'Valoriser les atouts viticoles du pays.'
  },
  {
    id: 's4u8_altitude',
    type: 'dialogue_completion',
    vocabularyItem: unit32Vocabulary[7],
    question: 'Choisissez la phrase comparant les altitudes :',
    options: [
      'D’Héicht am Éislek ass méi grouss wéi am Mëttelland.',
      'D’Héicht huet en Ticket.',
      'D’Héicht ass eng Broschür.'
    ],
    correctAnswer: 'D’Héicht am Éislek ass méi grouss wéi am Mëttelland.',
    context: 'Expliquer les différences de relief.'
  },
  {
    id: 's4u8_frontieres',
    type: 'phrase_completion',
    vocabularyItem: unit32Vocabulary[5],
    question: 'Complétez : « D’___ mam Éislek grenzt un d’Belsch. »',
    options: ['Grenz', 'Duerf', 'Naturpark'],
    correctAnswer: 'Grenz',
    context: 'Montrer la position stratégique du pays.'
  },
  {
    id: 's4u8_parc',
    type: 'dialogue_completion',
    vocabularyItem: unit32Vocabulary[9],
    question: 'Quelle phrase invite à visiter un parc naturel ?',
    options: [
      'De Naturpark Our bitt vill Wanderweeër an Héichten.',
      'De Naturpark ass eng Invitatioun.',
      'De Naturpark ass eng Zeitung.'
    ],
    correctAnswer: 'De Naturpark Our bitt vill Wanderweeër an Héichten.',
    context: 'Encourager la mobilité douce et le respect de l’environnement.'
  },
  {
    id: 's4u8_itineraire',
    type: 'sentence_construction',
    vocabularyItem: unit32Vocabulary[2],
    question: 'Assemblez la phrase pour présenter un itinéraire régional.',
    wordBank: ['Mir', 'entdecken', 'den', 'Éislek', 'an', 'hire', 'Däller.'],
    correctAnswer: 'Mir entdecken den Éislek an hire Däller.',
    expectedSentence: 'Mir entdecken den Éislek an hire Däller.',
    context: 'Préparer une présentation touristique interactive.'
  }
]

export const learningUnit32: LearningUnit = {
  id: 'S4U8',
  title: 'Géographie et mobilité',
  description:
    'Je peux présenter les régions du Luxembourg, comparer leurs reliefs et suggérer des mobilités adaptées.',
  level: 'A2+',
  vocabulary: unit32Vocabulary,
  exercises: generateUnit32Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
