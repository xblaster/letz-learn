import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U7 : Alimentation et cuisine

export const unit23Vocabulary: VocabularyItem[] = [
  {
    id: 's3u7_bouneschlupp',
    luxembourgish: 'Bouneschlupp',
    french: 'soupe de haricots',
    pronunciation: 'BOU-ne-shlupp',
    usage: 'Plat traditionnel luxembourgeois à cuisiner.'
  },
  {
    id: 's3u7_grompereszalot',
    luxembourgish: 'Grompereszalot',
    french: 'salade de pommes de terre',
    pronunciation: 'GROM-per-es-za-lot',
    usage: 'Recette emblématique pour un repas partagé.'
  },
  {
    id: 's3u7_zutaten',
    luxembourgish: 'Zutaten',
    french: 'ingrédients',
    pronunciation: 'TSU-ta-ten',
    usage: 'Lister les ingrédients nécessaires.'
  },
  {
    id: 's3u7_rezept',
    luxembourgish: 'Rezept',
    french: 'recette',
    pronunciation: 're-TSEPT',
    usage: 'Suivre ou partager une recette.'
  },
  {
    id: 's3u7_scheiwen',
    luxembourgish: 'Scheiwen',
    french: 'tranches',
    pronunciation: 'SHY-ven',
    usage: 'Couper des légumes ou du pain en tranches.'
  },
  {
    id: 's3u7_laeffel',
    luxembourgish: 'Läffel',
    french: 'cuillère',
    pronunciation: 'LÄ-ffel',
    usage: 'Mesurer ou mélanger la préparation.'
  },
  {
    id: 's3u7_gramm',
    luxembourgish: 'Gramm',
    french: 'gramme',
    pronunciation: 'GRAM',
    usage: 'Peser les ingrédients avec précision.'
  },
  {
    id: 's3u7_ofwiessen',
    luxembourgish: 'Ofwiessen',
    french: 'peser',
    pronunciation: 'OF-vee-ssen',
    usage: 'Action de peser les ingrédients.'
  },
  {
    id: 's3u7_uwen',
    luxembourgish: 'Uewen',
    french: 'four',
    pronunciation: 'OO-ven',
    usage: 'Cuire la préparation au four.'
  },
  {
    id: 's3u7_marineieren',
    luxembourgish: 'Marinéieren',
    french: 'mariner',
    pronunciation: 'ma-ri-NAY-ren',
    usage: 'Préparer une marinade savoureuse.'
  }
]

export const generateUnit23Exercises = (): Exercise[] => [
  {
    id: 's3u7_reactivation_courses',
    type: 'dialogue_completion',
    vocabularyItem: unit23Vocabulary[2],
    question: 'Complétez : « Hei sinn d’___ fir d’Bouneschlupp. »',
    options: ['Zutaten', 'Gramm', 'Läffel'],
    correctAnswer: 'Zutaten',
    context: 'Réactiver la liste d’ingrédients vue au marché.'
  },
  {
    id: 's3u7_recette',
    type: 'translation',
    vocabularyItem: unit23Vocabulary[3],
    question: 'Quel mot désigne la recette à suivre ?',
    options: ['Rezept', 'Uewen', 'Scheiwen'],
    correctAnswer: 'Rezept',
    context: 'Partager un document culinaire avec le groupe.'
  },
  {
    id: 's3u7_mesure',
    type: 'pattern_recognition',
    vocabularyItem: unit23Vocabulary[6],
    question: 'Quelle phrase précise la quantité ?',
    options: [
      'Mir brauchen 200 Gramm Gromperen.',
      'Mir ginn op e Concert.',
      'Mir kafen eng Invitatioun.'
    ],
    correctAnswer: 'Mir brauchen 200 Gramm Gromperen.',
    context: 'Garantir la réussite de la recette.'
  },
  {
    id: 's3u7_decoupe',
    type: 'dialogue_completion',
    vocabularyItem: unit23Vocabulary[4],
    question: 'Choisissez la consigne pour couper en tranches :',
    options: [
      'Schneid d’Gromperen a fein Scheiwen.',
      'Setz d’Bouneschlupp an den Uewen.',
      'Ofwiess d’Ingrediente genee.'
    ],
    correctAnswer: 'Schneid d’Gromperen a fein Scheiwen.',
    context: 'Suivre les étapes du tutoriel vidéo.'
  },
  {
    id: 's3u7_peser',
    type: 'phrase_completion',
    vocabularyItem: unit23Vocabulary[7],
    question: 'Complétez : « Mir ___ d’Zutaten op der Kichenwaage. »',
    options: ['ofwiessen', 'marinéieren', 'baken'],
    correctAnswer: 'ofwiessen',
    context: 'Renforcer la précision culinaire.'
  },
  {
    id: 's3u7_cuisson',
    type: 'dialogue_completion',
    vocabularyItem: unit23Vocabulary[8],
    question: 'Quelle phrase indique la cuisson au four ?',
    options: [
      'Setz d’Schott an den Uewen fir 30 Minutten.',
      'Setz d’Schott an d’Spillowend.',
      'Setz d’Schott an d’Kees.'
    ],
    correctAnswer: 'Setz d’Schott an den Uewen fir 30 Minutten.',
    context: 'Respecter les temps de cuisson.'
  },
  {
    id: 's3u7_marinade',
    type: 'sentence_construction',
    vocabularyItem: unit23Vocabulary[9],
    question: 'Assemblez la phrase finale pour présenter la marinade.',
    wordBank: ['Mir', 'marinéiere', 'd’Geméis', 'iwwer', 'Nuecht.'],
    correctAnswer: 'Mir marinéiere d’Geméis iwwer Nuecht.',
    expectedSentence: 'Mir marinéiere d’Geméis iwwer Nuecht.',
    context: 'Préparer une vidéo culinaire engageante.'
  }
]

export const learningUnit23: LearningUnit = {
  id: 'S3U7',
  title: 'Alimentation et cuisine',
  description:
    'Je peux suivre une recette luxembourgeoise, mesurer précisément les ingrédients et partager une préparation conviviale.',
  level: 'A2',
  vocabulary: unit23Vocabulary,
  exercises: generateUnit23Exercises(),
  targetScore: 88,
  estimatedTime: 11
}
