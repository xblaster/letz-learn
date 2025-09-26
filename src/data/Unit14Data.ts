import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U6 : Loisirs et invitations

export const unit14Vocabulary: VocabularyItem[] = [
  {
    id: 's2u6_invitatioun',
    luxembourgish: 'Invitatioun',
    french: 'invitation',
    pronunciation: 'in-vi-TA-tsioun',
    usage: 'Proposer une activité conviviale avec chaleur.'
  },
  {
    id: 's2u6_zesumme',
    luxembourgish: 'zesumme',
    french: 'ensemble',
    pronunciation: 'ze-ZUM-me',
    usage: 'Mettre en avant l’esprit collectif.'
  },
  {
    id: 's2u6_kino',
    luxembourgish: 'Kino',
    french: 'cinéma',
    pronunciation: 'KEE-no',
    usage: 'Planifier une sortie culturelle accessible.'
  },
  {
    id: 's2u6_concert',
    luxembourgish: 'Concert',
    french: 'concert',
    pronunciation: 'kon-SAIR',
    usage: 'Proposer un événement musical local.'
  },
  {
    id: 's2u6_spillowend',
    luxembourgish: 'Spillowend',
    french: 'soirée jeux',
    pronunciation: 'SHPI-lou-end',
    usage: 'Organiser une activité conviviale à domicile.'
  },
  {
    id: 's2u6_rendezvous',
    luxembourgish: 'Rendez-vous',
    french: 'rendez-vous',
    pronunciation: 'ron-day-VOO',
    usage: 'Confirmer la date et l’heure partagées.'
  },
  {
    id: 's2u6_zäit',
    luxembourgish: 'Zäitblock',
    french: 'créneau horaire',
    pronunciation: 'TSAÏT-block',
    usage: 'Réserver un créneau pour la sortie planifiée.'
  }
]

export const generateUnit14Exercises = (): Exercise[] => [
  {
    id: 's2u6_reactivation_modaux',
    type: 'dialogue_completion',
    vocabularyItem: unit14Vocabulary[0],
    question: 'Complétez : « Hues du Loscht op eng ___ dëse Freideg? »',
    options: ['Invitatioun', 'Spillowend', 'Zäitblock'],
    correctAnswer: 'Invitatioun',
    context: 'Réactiver les modaux de Section 1 (« hues du Loscht…? »).' 
  },
  {
    id: 's2u6_ensemble',
    type: 'translation',
    vocabularyItem: unit14Vocabulary[1],
    question: 'Quel mot exprime « ensemble » pour inviter cordialement ?',
    options: ['zesumme', 'Kino', 'Concert'],
    correctAnswer: 'zesumme',
    context: 'Renforcer l’aspect collectif et motivant.'
  },
  {
    id: 's2u6_choix_sortie',
    type: 'pattern_recognition',
    vocabularyItem: unit14Vocabulary[2],
    question: 'Quelle phrase propose une sortie cinéma ?',
    options: [
      'Wëllt Dir mat an de Kino kommen?',
      'Ech muss an d’Gemeng goen.',
      'Ech sichen eng Wunneng.'
    ],
    correctAnswer: 'Wëllt Dir mat an de Kino kommen?',
    context: 'Utiliser les modaux pour proposer une activité conviviale.'
  },
  {
    id: 's2u6_confirmer_concert',
    type: 'dialogue_completion',
    vocabularyItem: unit14Vocabulary[3],
    question: 'Choisissez la phrase pour confirmer un concert local :',
    options: ['De Concert ass Samschdeg Owend.', 'Ech hunn d’Rechnong bezuelt.', 'Ech brauch en Dokter.'],
    correctAnswer: 'De Concert ass Samschdeg Owend.',
    context: 'Partager les informations clés d’un événement culturel.'
  },
  {
    id: 's2u6_spillowend',
    type: 'phrase_completion',
    vocabularyItem: unit14Vocabulary[4],
    question: 'Complétez : « Mir maachen en ___ mat Frënn. »',
    options: ['Spillowend', 'Invitatioun', 'Zäitblock'],
    correctAnswer: 'Spillowend',
    context: 'Préparer la planification d’une soirée jeux.'
  },
  {
    id: 's2u6_agenda',
    type: 'sentence_construction',
    vocabularyItem: unit14Vocabulary[6],
    question: 'Assemblez la phrase qui bloque le créneau.',
    wordBank: ['Ech', 'reservéieren', 'e', 'Zäitblock', 'fir', 'Freideg.'],
    correctAnswer: 'Ech reservéieren e Zäitblock fir Freideg.',
    expectedSentence: 'Ech reservéieren e Zäitblock fir Freideg.',
    context: 'Confirmer l’horaire avant de répondre au groupe.'
  }
]

export const learningUnit14: LearningUnit = {
  id: 'S2U6',
  title: 'Loisirs et invitations',
  description:
    'Je peux proposer des activités conviviales, vérifier la disponibilité des amis et confirmer un créneau commun.',
  level: 'A1+',
  vocabulary: unit14Vocabulary,
  exercises: generateUnit14Exercises(),
  targetScore: 85,
  estimatedTime: 8
}
