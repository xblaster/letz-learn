import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U4 : Éducation et formation

export const unit28Vocabulary: VocabularyItem[] = [
  {
    id: 's4u4_grondschoul',
    luxembourgish: 'Grondschoul',
    french: 'école fondamentale',
    pronunciation: 'GROND-sho-ol',
    usage: 'Premier niveau scolaire au Luxembourg.'
  },
  {
    id: 's4u4_lycee',
    luxembourgish: 'Lycée',
    french: 'lycée',
    pronunciation: 'LEE-seh',
    usage: 'Deuxième cycle scolaire secondaire.'
  },
  {
    id: 's4u4_formation',
    luxembourgish: 'Formation professionnelle',
    french: 'formation professionnelle',
    pronunciation: 'for-ma-SJON pro-fes-sio-nell',
    usage: 'Parcours alternant école et entreprise.'
  },
  {
    id: 's4u4_cycle',
    luxembourgish: 'Cycle',
    french: 'cycle',
    pronunciation: 'TSI-kel',
    usage: 'Organisation en cycles de l’école fondamentale.'
  },
  {
    id: 's4u4_optionen',
    luxembourgish: 'Optionen',
    french: 'options',
    pronunciation: 'op-TSEE-onen',
    usage: 'Choix d’options linguistiques ou scientifiques.'
  },
  {
    id: 's4u4_stage',
    luxembourgish: 'Stage',
    french: 'stage',
    pronunciation: 'STAHZH',
    usage: 'Expérience professionnelle encadrée.'
  },
  {
    id: 's4u4_hausaufgaben',
    luxembourgish: 'Hausaufgaben',
    french: 'devoirs',
    pronunciation: 'HAUS-auf-ga-ben',
    usage: 'Travail à faire à la maison.'
  },
  {
    id: 's4u4_educateur',
    luxembourgish: 'Educateur',
    french: 'éducateur',
    pronunciation: 'é-du-ka-TEUR',
    usage: 'Professionnel qui accompagne les élèves.'
  },
  {
    id: 's4u4_direction',
    luxembourgish: 'Direction',
    french: 'direction',
    pronunciation: 'di-rek-tsi-ON',
    usage: 'Équipe qui coordonne l’établissement.'
  },
  {
    id: 's4u4_orienteierung',
    luxembourgish: 'Orientéierung',
    french: 'orientation',
    pronunciation: 'or-i-en-TEE-rung',
    usage: 'Processus d’orientation scolaire pour les familles.'
  }
]

export const generateUnit28Exercises = (): Exercise[] => [
  {
    id: 's4u4_reactivation_enfants',
    type: 'dialogue_completion',
    vocabularyItem: unit28Vocabulary[0],
    question: 'Complétez : « Mäi Jong geet an d’___ am Cycle 2.1. »',
    options: ['Grondschoul', 'Lycée', 'Stage'],
    correctAnswer: 'Grondschoul',
    context: 'Réactiver les échanges famille-école.'
  },
  {
    id: 's4u4_secondaire',
    type: 'translation',
    vocabularyItem: unit28Vocabulary[1],
    question: 'Quel mot désigne le secondaire général ou classique ?',
    options: ['Lycée', 'Cycle', 'Optionen'],
    correctAnswer: 'Lycée',
    context: 'Orienter une famille expatriée.'
  },
  {
    id: 's4u4_cycle',
    type: 'pattern_recognition',
    vocabularyItem: unit28Vocabulary[3],
    question: 'Quelle phrase explique l’organisation en cycles ?',
    options: [
      'D’Grondschoul ass a véier Cycle opgedeelt.',
      'De Stage dauert zwee Méint.',
      'D’Optionen si kreativ.'
    ],
    correctAnswer: 'D’Grondschoul ass a véier Cycle opgedeelt.',
    context: 'Clarifier la structure scolaire aux parents.'
  },
  {
    id: 's4u4_options',
    type: 'dialogue_completion',
    vocabularyItem: unit28Vocabulary[4],
    question: 'Choisissez la phrase pour parler des options :',
    options: [
      'Am Lycée ginn et vill Optionen tëscht Sproochen a Wëssenschaften.',
      'D’Hausaufgaben sinn haut einfach.',
      'D’Direction mécht eng Fuesent.'
    ],
    correctAnswer: 'Am Lycée ginn et vill Optionen tëscht Sproochen a Wëssenschaften.',
    context: 'Aider à choisir un parcours adapté.'
  },
  {
    id: 's4u4_stage',
    type: 'phrase_completion',
    vocabularyItem: unit28Vocabulary[5],
    question: 'Complétez : « Mäin Duechter mécht en ___ an enger Bank. »',
    options: ['Stage', 'Orientéierung', 'Hausaufgaben'],
    correctAnswer: 'Stage',
    context: 'Relier formation professionnelle et monde du travail.'
  },
  {
    id: 's4u4_maison',
    type: 'dialogue_completion',
    vocabularyItem: unit28Vocabulary[6],
    question: 'Quelle phrase encourage pour les devoirs ?',
    options: [
      'Mir maachen d’Hausaufgaben zesummen nom Owesiessen.',
      'Mir ginn an de Kulturpass.',
      'Mir planzen e Bam.'
    ],
    correctAnswer: 'Mir maachen d’Hausaufgaben zesummen nom Owesiessen.',
    context: 'Soutenir la coopération famille-école.'
  },
  {
    id: 's4u4_orientation',
    type: 'sentence_construction',
    vocabularyItem: unit28Vocabulary[9],
    question: 'Assemblez la phrase pour guider l’orientation.',
    wordBank: ['D’Orientéierung', 'hëlleft', 'der', 'Famill', 'bei', 'decisiounen.'],
    correctAnswer: 'D’Orientéierung hëlleft der Famill bei decisiounen.',
    expectedSentence: 'D’Orientéierung hëlleft der Famill bei decisiounen.',
    context: 'Préparer un entretien avec la direction.'
  }
]

export const learningUnit28: LearningUnit = {
  id: 'S4U4',
  title: 'Éducation et formation',
  description:
    'Je peux orienter une famille dans le système scolaire luxembourgeois, expliquer les cycles et proposer des options pertinentes.',
  level: 'A2+',
  vocabulary: unit28Vocabulary,
  exercises: generateUnit28Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
