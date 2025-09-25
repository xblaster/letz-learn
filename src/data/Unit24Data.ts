// Unit 24: Integratioun a Gemeinschaft - A2 Vie pratique
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit24Vocabulary: VocabularyItem[] = [
  {
    id: 'integratioun',
    luxembourgish: 'Integratioun',
    french: 'intégration',
    pronunciation: 'in-te-gra-TSI-oun',
    usage: 'Processus pour participer activement à la société luxembourgeoise.'
  },
  {
    id: 'cours_lux',
    luxembourgish: 'Cours de Lëtzebuergesch',
    french: 'cours de luxembourgeois',
    pronunciation: 'KOUR de LET-ze-bour-gesch',
    usage: 'Cours organisés par communes et associations pour apprendre la langue.'
  },
  {
    id: 'sproochentest',
    luxembourgish: 'Sproochentest',
    french: 'test de langue',
    pronunciation: 'SHPROH-khen-test',
    usage: 'Examen officiel demandé pour la nationalité.'
  },
  {
    id: 'volontariat',
    luxembourgish: 'Fräiwëllegeprojet',
    french: 'projet de volontariat',
    pronunciation: 'FRAÏ-vël-le-ge-pro-jet',
    usage: 'Projet bénévole pour rencontrer des habitants.'
  },
  {
    id: 'fest',
    luxembourgish: 'Fest',
    french: 'fête locale',
    pronunciation: 'FEST',
    usage: 'Événement communal ou national rassemblant les habitants.'
  },
  {
    id: 'geschichtsatelier',
    luxembourgish: 'Geschichtsatelier',
    french: 'atelier d\'histoire locale',
    pronunciation: 'ge-SHIKHTS-atelier',
    usage: 'Atelier qui raconte l\'histoire et les traditions du pays.'
  },
  {
    id: 'asso',
    luxembourgish: 'Veräin',
    french: 'association',
    pronunciation: 've-RAÏN',
    usage: 'Association sportive ou culturelle pour créer des liens.'
  },
  {
    id: 'buergerpakt',
    luxembourgish: 'Biergerpakt',
    french: 'pacte citoyen',
    pronunciation: 'BIER-ger-pakt',
    usage: 'Programme d\'accueil communal pour nouveaux habitants.'
  },
  {
    id: 'gemeindfest',
    luxembourgish: 'Gemengefest',
    french: 'fête communale',
    pronunciation: 'ge-MENG-ge-fest',
    usage: 'Fête organisée par la commune avec animations.'
  },
  {
    id: 'nationalitet',
    luxembourgish: 'Nationalitéit',
    french: 'nationalité',
    pronunciation: 'na-tsio-na-li-TÄIT',
    usage: 'Statut juridique qui reconnaît votre appartenance au pays.'
  }
]

export const generateUnit24Exercises = (): Exercise[] => [
  {
    id: 'u24_translation_integratioun',
    type: 'translation',
    vocabularyItem: unit24Vocabulary[0],
    question: 'Comment dit-on « intégration » en luxembourgeois ?',
    options: ['Integratioun', 'Veräin', 'Fest'],
    correctAnswer: 'Integratioun',
    context: 'Nommer votre objectif donne du sens à chaque rencontre.'
  },
  {
    id: 'u24_dialogue_cours',
    type: 'dialogue_completion',
    vocabularyItem: unit24Vocabulary[1],
    question: 'Vous invitez un ami à apprendre la langue. Vous dites :',
    options: ['Kommt mat an de Cours de Lëtzebuergesch!', 'Ech ginn op d\'Gemeng.', 'Ech spueren am Spuerkont.'],
    correctAnswer: 'Kommt mat an de Cours de Lëtzebuergesch!',
    context: 'Partager un cours crée un soutien mutuel inspirant.'
  },
  {
    id: 'u24_sentence_sproochentest',
    type: 'sentence_construction',
    vocabularyItem: unit24Vocabulary[2],
    question: 'Formez une phrase pour dire que vous préparez le test de langue.',
    wordBank: ['Ech', 'bereeden', 'de', 'Sproochentest', 'vir'],
    correctAnswer: 'Ech bereeden de Sproochentest vir',
    expectedSentence: 'Ech bereeden de Sproochentest vir',
    hint: 'Le verbe à particule « virbereeden » envoie « vir » à la fin.',
    context: 'Mettre en mots votre préparation renforce votre confiance.'
  },
  {
    id: 'u24_cultural_volontariat',
    type: 'cultural_context',
    vocabularyItem: unit24Vocabulary[3],
    question: 'Quelle activité vous rapproche d\'habitants engagés ?',
    options: ['Fräiwëllegeprojet', 'Gemengefest', 'Sproochentest'],
    correctAnswer: 'Fräiwëllegeprojet',
    context: 'Le bénévolat ouvre des échanges chaleureux.'
  },
  {
    id: 'u24_translation_verain',
    type: 'translation',
    vocabularyItem: unit24Vocabulary[6],
    question: 'Comment parle-t-on d\'une association en luxembourgeois ?',
    options: ['Veräin', 'Biergerpakt', 'Fest'],
    correctAnswer: 'Veräin',
    context: 'Identifier les associations vous aide à participer activement.'
  },
  {
    id: 'u24_dialogue_buergerpakt',
    type: 'dialogue_completion',
    vocabularyItem: unit24Vocabulary[7],
    question: 'La commune vous propose un programme d\'accueil. Vous répondez :',
    options: ['Ech maachen beim Biergerpakt mat.', 'Ech liesen de Fahrplang.', 'Ech froe fir eng Residenzbestätegung.'],
    correctAnswer: 'Ech maachen beim Biergerpakt mat.',
    context: 'Accepter le pacte citoyen favorise votre intégration positive.'
  },
  {
    id: 'u24_word_order_fest',
    type: 'word_ordering',
    vocabularyItem: unit24Vocabulary[4],
    question: 'Remettez les mots en ordre pour annoncer une fête locale.',
    wordBank: ['D', 'Gemeng', 'organiséiert', 'e', 'Fest'],
    correctAnswer: 'D Gemeng organiséiert e Fest',
    expectedSentence: 'D Gemeng organiséiert e Fest',
    hint: 'Commencez par l\'article abrégé « D ».',
    context: 'Inviter vos amis aux fêtes renforce votre cercle social.'
  },
  {
    id: 'u24_cultural_nationalitet',
    type: 'cultural_context',
    vocabularyItem: unit24Vocabulary[9],
    question: 'Quel mot nomme l\'objectif final de naturalisation ?',
    options: ['Nationalitéit', 'Integratioun', 'Cours de Lëtzebuergesch'],
    correctAnswer: 'Nationalitéit',
    context: 'Visualiser votre but final maintient votre motivation sur la durée.'
  }
]

export const learningUnit24: LearningUnit = {
  id: 'unit_24',
  title: 'Integratioun a Gemeinschaft',
  description: 'Participez aux événements locaux et préparez vos démarches citoyennes.',
  level: 'A2',
  vocabulary: unit24Vocabulary,
  exercises: generateUnit24Exercises(),
  targetScore: 80,
  estimatedTime: 8
}
