import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 2 — Communication quotidienne (A1+)
// S2U8 : Téléphone et messages

export const unit16Vocabulary: VocabularyItem[] = [
  {
    id: 's2u8_stemmbox',
    luxembourgish: 'Stëmmbox',
    french: 'boîte vocale',
    pronunciation: 'SHTEM-box',
    usage: 'Indiquer que l’appel bascule sur le répondeur.'
  },
  {
    id: 's2u8_rufen_zereck',
    luxembourgish: 'Ech ruffen zeréck',
    french: 'Je rappelle',
    pronunciation: 'ech ROOF-en ze-RECK',
    usage: 'Promettre un rappel professionnel et fiable.'
  },
  {
    id: 's2u8_direkt',
    luxembourgish: 'direkt',
    french: 'immédiatement',
    pronunciation: 'dee-REKT',
    usage: 'Préciser la rapidité de la réponse.'
  },
  {
    id: 's2u8_spaeder',
    luxembourgish: 'spéider',
    french: 'plus tard',
    pronunciation: 'SHPAY-der',
    usage: 'Informer d’un rappel différé tout en rassurant.'
  },
  {
    id: 's2u8_ufro',
    luxembourgish: 'Ufro',
    french: 'demande',
    pronunciation: 'OU-fro',
    usage: 'Qualifier l’objet du message vocal.'
  },
  {
    id: 's2u8_message',
    luxembourgish: 'Message',
    french: 'message',
    pronunciation: 'ME-saazh',
    usage: 'Introduire un message clair et bien structuré.'
  },
  {
    id: 's2u8_nummer',
    luxembourgish: 'Nummer',
    french: 'numéro',
    pronunciation: 'NU-mmer',
    usage: 'Énoncer son numéro avec précision.'
  }
]

export const generateUnit16Exercises = (): Exercise[] => [
  {
    id: 's2u8_reactivation_present',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[5],
    question: 'Complétez : « Ech loossen e ___ fir d’Madame Schmit. »',
    options: ['Message', 'Ufro', 'Nummer'],
    correctAnswer: 'Message',
    context: 'Réactivation des présentations téléphoniques vues précédemment.'
  },
  {
    id: 's2u8_repondeur',
    type: 'translation',
    vocabularyItem: unit16Vocabulary[0],
    question: 'Quel terme indique que vous parlez sur une boîte vocale ?',
    options: ['Stëmmbox', 'spéider', 'direkt'],
    correctAnswer: 'Stëmmbox',
    context: 'Situer le message dans la tâche finale.'
  },
  {
    id: 's2u8_promesse',
    type: 'pattern_recognition',
    vocabularyItem: unit16Vocabulary[1],
    question: 'Quelle phrase rassure votre collègue absent·e ?',
    options: [
      'Ech ruffen zeréck spéider.',
      'Ech sinn midd haut.',
      'Ech maachen eng Invitatioun.'
    ],
    correctAnswer: 'Ech ruffen zeréck spéider.',
    context: 'Respecter la politesse professionnelle.'
  },
  {
    id: 's2u8_urgence',
    type: 'dialogue_completion',
    vocabularyItem: unit16Vocabulary[2],
    question: 'Choisissez la phrase qui montre que vous rappelez immédiatement :',
    options: ['Ech ruffen direkt zeréck.', 'Ech schécken den Dossier spéider.', 'Ech hunn eng aner Invitatioun.'],
    correctAnswer: 'Ech ruffen direkt zeréck.',
    context: 'Donner un signe de réactivité rassurant.'
  },
  {
    id: 's2u8_preciser',
    type: 'phrase_completion',
    vocabularyItem: unit16Vocabulary[4],
    question: 'Complétez : « D’___ geet ëm eng Reunioun muer. »',
    options: ['Ufro', 'Nummer', 'Stëmmbox'],
    correctAnswer: 'Ufro',
    context: 'Expliquer clairement l’objet du message.'
  },
  {
    id: 's2u8_cloture',
    type: 'sentence_construction',
    vocabularyItem: unit16Vocabulary[6],
    question: 'Assemblez la fin du message vocal professionnel.',
    wordBank: ['Meng', 'Nummer', 'ass', '661', '245', '310.'],
    correctAnswer: 'Meng Nummer ass 661 245 310.',
    expectedSentence: 'Meng Nummer ass 661 245 310.',
    context: 'Permettre à la personne absente de rappeler facilement.'
  }
]

export const learningUnit16: LearningUnit = {
  id: 'S2U8',
  title: 'Téléphone et messages',
  description:
    'Je peux laisser un message vocal poli, annoncer l’objet de l’appel et préciser mon rappel pour un collègue absent.',
  level: 'A1+',
  vocabulary: unit16Vocabulary,
  exercises: generateUnit16Exercises(),
  targetScore: 86,
  estimatedTime: 8
}
