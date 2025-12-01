import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U1 : Bien-être et sentiments simples

export const unit9Vocabulary: VocabularyItem[] = [
  {
    id: 's2u1_et_geet',
    luxembourgish: 'Et geet',
    french: 'Ça va',
    pronunciation: 'et GEET',
    usage: 'Réponse courte et encourageante pour dire que tout va bien.'
  },
  {
    id: 's2u1_midd',
    luxembourgish: 'ech sinn midd',
    french: 'je suis fatigué·e',
    pronunciation: 'ech sin MIT',
    usage: 'Exprimer une fatigue passagère avec bienveillance.'
  },
  {
    id: 's2u1_frou',
    luxembourgish: 'ech sinn frou',
    french: 'je suis content·e',
    pronunciation: 'ech sin FRO',
    usage: 'Partager une émotion positive pour dynamiser l’échange.'
  },
  {
    id: 's2u1_traureg',
    luxembourgish: 'ech sinn traureg',
    french: 'je suis triste',
    pronunciation: 'ech sin TRAU-reg',
    usage: 'Exprimer un ressenti avec douceur afin de recevoir du soutien.'
  },
  {
    id: 's2u1_gesond',
    luxembourgish: 'ech sinn gesond',
    french: 'je suis en bonne santé',
    pronunciation: 'ech sin ge-ZONT',
    usage: 'Rassurer un·e interlocuteur·trice sur son état de santé.'
  },
  {
    id: 's2u1_krank',
    luxembourgish: 'ech sinn krank',
    french: 'je suis malade',
    pronunciation: 'ech sin KRANK',
    usage: 'Indiquer un inconfort physique pour adapter la conversation.'
  },
  {
    id: 's2u1_loscht',
    luxembourgish: 'ech hunn Loscht',
    french: 'j’ai envie',
    pronunciation: 'ech hunn LOSHT',
    usage: 'Exprimer une motivation pour stimuler la participation.'
  }
]

export const generateUnit9Exercises = (): Exercise[] => [
  {
    id: 's2u1_reactivation_salut',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[0],
    question: 'On vous demande « Wéi geet et? ». Choisissez la réponse luxembourgeoise polie.',
    options: ['Et geet', 'Ech sinn traureg', 'Ech sinn midd'],
    correctAnswer: 'Et geet',
    context: 'Réactivation de la Section 1 : répondre positivement et encourager la suite.'
  },
  {
    id: 's2u1_partager_ressenti',
    type: 'translation',
    vocabularyItem: unit9Vocabulary[1],
    question: 'Comment dire « je suis fatigué·e » en luxembourgeois ?',
    options: ['ech sinn midd', 'ech hunn Loscht', 'ech sinn gesond'],
    correctAnswer: 'ech sinn midd',
    context: 'Exprimer son énergie pour adapter le rythme de l’échange.'
  },
  {
    id: 's2u1_feedback_positif',
    type: 'dialogue_completion',
    vocabularyItem: unit9Vocabulary[2],
    question: 'Votre partenaire d’apprentissage partage une bonne nouvelle. Choisissez la phrase pour montrer votre joie.',
    options: ['ech sinn frou', 'ech sinn krank', 'ech sinn traureg'],
    correctAnswer: 'ech sinn frou',
    context: 'Encourager les émotions positives dans le groupe.'
  },
  {
    id: 's2u1_soutien',
    type: 'phrase_completion',
    vocabularyItem: unit9Vocabulary[3],
    question: 'Complétez : « Haut ___ ___ ___, ech brauch Zäit fir mech. »',
    options: ['ech', 'sinn', 'traureg'],
    correctAnswer: 'ech sinn traureg',
    hint: 'Utilisez la structure « ech sinn + émotion ».',
    context: 'Partager une émotion plus difficile avec délicatesse.'
  },
  {
    id: 's2u1_conseil_sante',
    type: 'pattern_recognition',
    vocabularyItem: unit9Vocabulary[5],
    question: 'Quel énoncé correspond à quelqu’un qui préfère rester chez soi aujourd’hui ?',
    options: ['ech sinn krank', 'ech sinn gesond', 'ech hunn Loscht'],
    correctAnswer: 'ech sinn krank',
    context: 'Repérer quand proposer de l’aide ou un message chaleureux.'
  },
  {
    id: 's2u1_note_audio',
    type: 'sentence_construction',
    vocabularyItem: unit9Vocabulary[6],
    question: 'Assemblez la phrase pour enregistrer un message motivant au groupe.',
    wordBank: ['Ech', 'hunn', 'Loscht', 'op', 'eis', 'Cours!'],
    correctAnswer: 'Ech hunn Loscht op eis Cours!',
    expectedSentence: 'Ech hunn Loscht op eis Cours!',
    context: 'Préparer le message audio final « Moien, haut fillen ech mech… ».'
  }
]

export const learningUnit9: LearningUnit = {
  id: 'S2U1',
  title: 'Bien-être et sentiments simples',
  description:
    'Je peux dire comment je me sens, écouter les autres et relancer l’échange avec bienveillance.',
  level: 'A1+',
  vocabulary: unit9Vocabulary,
  exercises: generateUnit9Exercises(),
  targetScore: 80,
  estimatedTime: 7
}
