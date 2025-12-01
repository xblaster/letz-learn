import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U3 : Café et restaurant

export const unit11Vocabulary: VocabularyItem[] = [
  {
    id: 's2u3_desch',
    luxembourgish: 'Dësch',
    french: 'table',
    pronunciation: 'DESH',
    usage: 'Demander une table avec courtoisie.'
  },
  {
    id: 's2u3_reservatioun',
    luxembourgish: 'Reservatioun',
    french: 'réservation',
    pronunciation: 're-zehr-va-TION',
    usage: 'Vérifier que votre réservation est bien enregistrée.'
  },
  {
    id: 's2u3_menu',
    luxembourgish: 'Menü',
    french: 'menu',
    pronunciation: 'me-NU',
    usage: 'Parcourir la carte avant de commander.'
  },
  {
    id: 's2u3_rechnong',
    luxembourgish: 'Rechnong',
    french: 'addition',
    pronunciation: 'RECH-nong',
    usage: 'Demander l’addition de manière polie.'
  },
  {
    id: 's2u3_portmonni',
    luxembourgish: 'Portmonni',
    french: 'portefeuille',
    pronunciation: 'port-mo-NEE',
    usage: 'Garder le lexique financier sous contrôle.'
  },
  {
    id: 's2u3_bezuelen',
    luxembourgish: 'bezuelen',
    french: 'payer',
    pronunciation: 'be-TSEU-len',
    usage: 'Exprimer l’action de payer avec le conditionnel de politesse.'
  },
  {
    id: 's2u3_tipp',
    luxembourgish: 'Tipp',
    french: 'pourboire',
    pronunciation: 'TIP',
    usage: 'Mentionner le pourboire dans le respect de l’étiquette locale.'
  }
]

export const generateUnit11Exercises = (): Exercise[] => [
  {
    id: 's2u3_reactivation_salutation',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[0],
    question: 'Complétez : « Moien, mir hunn eng ___ fir zwee Persounen. »',
    options: ['Reservatioun', 'Rechnong', 'Tipp'],
    correctAnswer: 'Reservatioun',
    context: 'Réactivation : saluer et confirmer la réservation en arrivant.'
  },
  {
    id: 's2u3_demander_table',
    type: 'translation',
    vocabularyItem: unit11Vocabulary[0],
    question: 'Comment dire « table » lorsque vous cherchez une place ?',
    options: ['Dësch', 'Menü', 'Portmonni'],
    correctAnswer: 'Dësch',
    context: 'Formuler une demande claire auprès du personnel.'
  },
  {
    id: 's2u3_commander_poliment',
    type: 'dialogue_completion',
    vocabularyItem: unit11Vocabulary[2],
    question: 'Choisissez la phrase polie : « Ech hätt gär den ___, w.e.g. »',
    options: ['Menü', 'Tipp', 'Portmonni'],
    correctAnswer: 'Menü',
    context: 'Utiliser « Ech hätt gär… » pour demander le menu.'
  },
  {
    id: 's2u3_demander_addition',
    type: 'phrase_completion',
    vocabularyItem: unit11Vocabulary[3],
    question: 'Complétez : « Kënnt Dir mir d’___ bréngen, w.e.g.? »',
    options: ['Rechnong', 'Reservatioun', 'Tipp'],
    correctAnswer: 'Rechnong',
    context: 'Préparer la clôture de repas dans la tâche finale.'
  },
  {
    id: 's2u3_payer_conditionnel',
    type: 'pattern_recognition',
    vocabularyItem: unit11Vocabulary[5],
    question: 'Quelle phrase exprime poliment l’intention de payer ?',
    options: [
      'Ech géif gären bezuelen, w.e.g.',
      'Ech sinn midd, w.e.g.',
      'Ech hunn de Portmonni doheem.'
    ],
    correctAnswer: 'Ech géif gären bezuelen, w.e.g.',
    context: 'Mettre en pratique le conditionnel de politesse.'
  },
  {
    id: 's2u3_pourboire',
    type: 'sentence_construction',
    vocabularyItem: unit11Vocabulary[6],
    question: 'Assemblez la phrase qui mentionne le pourboire.',
    wordBank: ['De', 'Tipp', 'ass', 'inklusive', 'haut.'],
    correctAnswer: 'De Tipp ass inklusive haut.',
    expectedSentence: 'De Tipp ass inklusive haut.',
    context: 'Souligner l’étiquette luxembourgeoise dans l’activité finale.'
  }
]

export const learningUnit11: LearningUnit = {
  id: 'S2U3',
  title: 'Café et restaurant',
  description:
    'Je peux commander, vérifier ma réservation et régler l’addition sereinement dans un café luxembourgeois.',
  level: 'A1+',
  vocabulary: unit11Vocabulary,
  exercises: generateUnit11Exercises(),
  targetScore: 84,
  estimatedTime: 8
}
