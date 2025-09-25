// Unit 23: Famill a Schoul - A2 Vie pratique
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit23Vocabulary: VocabularyItem[] = [
  {
    id: 'kräibierg',
    luxembourgish: 'Krëpp',
    french: 'crèche',
    pronunciation: 'KREPP',
    usage: 'Structure d\'accueil pour les enfants de 0 à 3 ans.'
  },
  {
    id: 'maison_relais',
    luxembourgish: 'Maison Relais',
    french: 'service d\'accueil périscolaire',
    pronunciation: 'mé-zon re-LÄ',
    usage: 'Accueil après l\'école dans la plupart des communes.'
  },
  {
    id: 'schoul',
    luxembourgish: 'Schoul',
    french: 'école',
    pronunciation: 'SHOUL',
    usage: 'Établissement scolaire pour enfants et adolescents.'
  },
  {
    id: 'cycle',
    luxembourgish: 'Cycle',
    french: 'cycle scolaire',
    pronunciation: 'SI-kel',
    usage: 'Période d\'apprentissage dans l\'enseignement fondamental.'
  },
  {
    id: 'bichelchen',
    luxembourgish: 'Bichelchen',
    french: 'cahier',
    pronunciation: 'BI-shel-khen',
    usage: 'Petit cahier pour les devoirs et messages enseignants.'
  },
  {
    id: 'schoulmaterial',
    luxembourgish: 'Schoulmaterial',
    french: 'fournitures scolaires',
    pronunciation: 'SHOUL-ma-te-ri-AL',
    usage: 'Matériel scolaire demandé en début d\'année.'
  },
  {
    id: 'elterendeel',
    luxembourgish: 'Elterendeel',
    french: 'parent',
    pronunciation: 'EL-teren-deel',
    usage: 'Parent ou tuteur impliqué dans la scolarité.'
  },
  {
    id: 'reunioun',
    luxembourgish: 'Eltereversammelung',
    french: 'réunion parents-professeurs',
    pronunciation: 'EL-tere-fer-SAM-me-lung',
    usage: 'Réunion pour échanger avec l\'enseignant·e.'
  },
  {
    id: 'canteen',
    luxembourgish: 'Schoulkantin',
    french: 'cantine scolaire',
    pronunciation: 'SHOUL-kan-tinn',
    usage: 'Repas chaud proposé aux enfants à midi.'
  },
  {
    id: 'schoultransport',
    luxembourgish: 'Schoultransport',
    french: 'transport scolaire',
    pronunciation: 'SHOUL-trans-port',
    usage: 'Bus organisés par la commune pour les élèves.'
  }
]

export const generateUnit23Exercises = (): Exercise[] => [
  {
    id: 'u23_translation_krepp',
    type: 'translation',
    vocabularyItem: unit23Vocabulary[0],
    question: 'Comment dit-on « crèche » en luxembourgeois ?',
    options: ['Krëpp', 'Schoul', 'Schoultransport'],
    correctAnswer: 'Krëpp',
    context: 'Nommer la structure d\'accueil facilite vos inscriptions.'
  },
  {
    id: 'u23_dialogue_maison_relais',
    type: 'dialogue_completion',
    vocabularyItem: unit23Vocabulary[1],
    question: 'Vous remerciez le service périscolaire. Vous dites :',
    options: ['D\'Maison Relais ass immens hëllefräich.', 'Ech fänken e Stage un.', 'Ech huelen de Rendez-vous.'],
    correctAnswer: 'D\'Maison Relais ass immens hëllefräich.',
    context: 'Exprimer de la gratitude crée un lien chaleureux.'
  },
  {
    id: 'u23_sentence_bichelchen',
    type: 'sentence_construction',
    vocabularyItem: unit23Vocabulary[4],
    question: 'Formez une phrase pour dire que le cahier est signé.',
    wordBank: ['D\'', 'Bichelchen', 'ass', 'ënnerschriwwen'],
    correctAnswer: 'D\' Bichelchen ass ënnerschriwwen',
    expectedSentence: 'D\' Bichelchen ass ënnerschriwwen',
    hint: 'L\'article se contracte avec le mot suivant.',
    context: 'Suivre les communications renforce la confiance avec l\'école.'
  },
  {
    id: 'u23_cultural_cycle',
    type: 'cultural_context',
    vocabularyItem: unit23Vocabulary[3],
    question: 'Comment s\'appellent les étapes de l\'enseignement fondamental ?',
    options: ['Cycle', 'Krëpp', 'Elterendeel'],
    correctAnswer: 'Cycle',
    context: 'Comprendre l\'organisation scolaire rassure toute la famille.'
  },
  {
    id: 'u23_translation_schoulmaterial',
    type: 'translation',
    vocabularyItem: unit23Vocabulary[5],
    question: 'Comment parle-t-on des fournitures scolaires ?',
    options: ['Schoulmaterial', 'Schoulkantin', 'Schoultransport'],
    correctAnswer: 'Schoulmaterial',
    context: 'Préparer le matériel montre votre engagement parental.'
  },
  {
    id: 'u23_dialogue_reunion',
    type: 'dialogue_completion',
    vocabularyItem: unit23Vocabulary[7],
    question: 'Vous confirmez votre présence à la réunion. Vous dites :',
    options: ['Ech kommen op d\'Eltereversammelung.', 'Ech spueren am Spuerkont.', 'Ech ginn op d\'Gemeng.'],
    correctAnswer: 'Ech kommen op d\'Eltereversammelung.',
    context: 'Être présent·e renforce la collaboration avec l\'enseignant·e.'
  },
  {
    id: 'u23_word_order_canteen',
    type: 'word_ordering',
    vocabularyItem: unit23Vocabulary[8],
    question: 'Remettez les mots en ordre pour parler de la cantine.',
    wordBank: ['D', 'Schoulkantin', 'bitt', 'gesond', 'Iessen'],
    correctAnswer: 'D Schoulkantin bitt gesond Iessen',
    expectedSentence: 'D Schoulkantin bitt gesond Iessen',
    hint: 'Commencez par l\'article abrégé « D » pour le féminin.',
    context: 'Soulever la qualité des repas encourage de bonnes habitudes.'
  },
  {
    id: 'u23_cultural_transport',
    type: 'cultural_context',
    vocabularyItem: unit23Vocabulary[9],
    question: 'Quel service garantit un trajet sûr vers l\'école ?',
    options: ['Schoultransport', 'Krëpp', 'Bichelchen'],
    correctAnswer: 'Schoultransport',
    context: 'Connaitre les aides locales rassure sur l\'organisation familiale.'
  }
]

export const learningUnit23: LearningUnit = {
  id: 'unit_23',
  title: 'Famill a Schoul',
  description: 'Accompagnez vos enfants et échangez avec l\'école en confiance.',
  level: 'A2',
  vocabulary: unit23Vocabulary,
  exercises: generateUnit23Exercises(),
  targetScore: 80,
  estimatedTime: 8
}
