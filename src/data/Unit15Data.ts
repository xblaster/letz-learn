import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U7 : Rendez-vous et agenda

export const unit15Vocabulary: VocabularyItem[] = [
  {
    id: 's2u7_disponibel',
    luxembourgish: 'disponibel',
    french: 'disponible',
    pronunciation: 'dis-po-NI-bel',
    usage: 'Confirmer sa disponibilité avec précision.'
  },
  {
    id: 's2u7_agenda',
    luxembourgish: 'Agenda',
    french: 'agenda',
    pronunciation: 'a-JEN-da',
    usage: 'Partager l’outil de planification utilisé.'
  },
  {
    id: 's2u7_kalennert',
    luxembourgish: 'Kalennert',
    french: 'calendrier',
    pronunciation: 'ka-LEN-nert',
    usage: 'Vérifier les disponibilités hebdomadaires.'
  },
  {
    id: 's2u7_zaitblock',
    luxembourgish: 'Zäitblock',
    french: 'bloc horaire',
    pronunciation: 'TSAÏT-block',
    usage: 'Bloquer une plage précise pour le rendez-vous.'
  },
  {
    id: 's2u7_virdrun',
    luxembourgish: 'virdrun',
    french: 'avant',
    pronunciation: 'FEER-drun',
    usage: 'Préparer les instructions sur les étapes avant la réunion.'
  },
  {
    id: 's2u7_dono',
    luxembourgish: 'dono',
    french: 'après',
    pronunciation: 'DO-no',
    usage: 'Organiser le suivi après la rencontre.'
  },
  {
    id: 's2u7_dauer',
    luxembourgish: 'Dauer',
    french: 'durée',
    pronunciation: 'DAU-er',
    usage: 'Indiquer le temps prévu pour l’activité.'
  }
]

export const generateUnit15Exercises = (): Exercise[] => [
  {
    id: 's2u7_reactivation_dates',
    type: 'dialogue_completion',
    vocabularyItem: unit15Vocabulary[1],
    question: 'Complétez : « Ech aktualiséieren mäin ___ fir d’Sëtzung. »',
    options: ['Agenda', 'Dauer', 'dono'],
    correctAnswer: 'Agenda',
    context: 'Réactiver les dates et outils vus précédemment.'
  },
  {
    id: 's2u7_disponibilite',
    type: 'translation',
    vocabularyItem: unit15Vocabulary[0],
    question: 'Quel adjectif exprime que vous êtes disponible ?',
    options: ['disponibel', 'dono', 'virdrun'],
    correctAnswer: 'disponibel',
    context: 'Coordonner un agenda partagé entre collègues.'
  },
  {
    id: 's2u7_bloc',
    type: 'pattern_recognition',
    vocabularyItem: unit15Vocabulary[3],
    question: 'Quel terme désigne un bloc horaire ?',
    options: ['Zäitblock', 'Kalennert', 'Dauer'],
    correctAnswer: 'Zäitblock',
    context: 'Inviter les membres du club linguistique à bloquer un créneau.'
  },
  {
    id: 's2u7_sequence',
    type: 'dialogue_completion',
    vocabularyItem: unit15Vocabulary[4],
    question: 'Choisissez la phrase pour indiquer une étape avant la réunion :',
    options: [
      'Mir treffen eis virdrun fir de Raum virzebereeden.',
      'Mir treffen eis dono fir ze feieren.',
      'Ech sinn disponibel haut.'
    ],
    correctAnswer: 'Mir treffen eis virdrun fir de Raum virzebereeden.',
    context: 'Organiser un briefing préparatoire.'
  },
  {
    id: 's2u7_suivi',
    type: 'phrase_completion',
    vocabularyItem: unit15Vocabulary[5],
    question: 'Complétez : « Mir treffen eis ___ fir eng Tasse Kaffi. »',
    options: ['dono', 'virdrun', 'disponibel'],
    correctAnswer: 'dono',
    context: 'Planifier le moment convivial après la rencontre.'
  },
  {
    id: 's2u7_duree',
    type: 'sentence_construction',
    vocabularyItem: unit15Vocabulary[6],
    question: 'Assemblez la phrase qui précise la durée.',
    wordBank: ['D’Reunioun', 'dauert', '45', 'Minutten.'],
    correctAnswer: 'D’Reunioun dauert 45 Minutten.',
    expectedSentence: 'D’Reunioun dauert 45 Minutten.',
    context: 'Donner une vision claire du temps demandé aux participant·e·s.'
  }
]

export const learningUnit15: LearningUnit = {
  id: 'S2U7',
  title: 'Rendez-vous et agenda',
  description:
    'Je peux coordonner un agenda social ou professionnel, proposer un créneau commun et décrire les étapes avant/après la rencontre.',
  level: 'A1+',
  vocabulary: unit15Vocabulary,
  exercises: generateUnit15Exercises(),
  targetScore: 85,
  estimatedTime: 8
}
