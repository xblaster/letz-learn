import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U6 : Mode et services

export const unit22Vocabulary: VocabularyItem[] = [
  {
    id: 's3u6_greisst',
    luxembourgish: 'Gréisst',
    french: 'taille',
    pronunciation: 'GRÄÏSST',
    usage: 'Demander ou indiquer une taille en boutique.'
  },
  {
    id: 's3u6_umtausche',
    luxembourgish: 'ëmtauschen',
    french: 'échanger',
    pronunciation: 'UM-tao-shen',
    usage: 'Réaliser un échange de produit.'
  },
  {
    id: 's3u6_usprobéieren',
    luxembourgish: 'usprobéieren',
    french: 'essayer',
    pronunciation: 'OUSS-pro-bay-ren',
    usage: 'Demander à essayer un vêtement.'
  },
  {
    id: 's3u6_service',
    luxembourgish: 'Service no-verkaf',
    french: 'service après-vente',
    pronunciation: 'SER-vees no-VER-kaf',
    usage: 'Obtenir une réparation ou un conseil après-vente.'
  },
  {
    id: 's3u6_garantie',
    luxembourgish: 'Garantie',
    french: 'garantie',
    pronunciation: 'ga-ran-TI',
    usage: 'Vérifier la durée de garantie du produit.'
  },
  {
    id: 's3u6_kees',
    luxembourgish: 'Kees',
    french: 'caisse',
    pronunciation: 'KAYS',
    usage: 'Indiquer la caisse où payer ou échanger.'
  },
  {
    id: 's3u6_rabattbon',
    luxembourgish: 'Rabattbon',
    french: 'bon de réduction',
    pronunciation: 'ra-BATT-bon',
    usage: 'Présenter un bon de réduction avec politesse.'
  },
  {
    id: 's3u6_liwwerung',
    luxembourgish: 'Liwwerung',
    french: 'livraison',
    pronunciation: 'LEE-ver-ung',
    usage: 'Discuter des modalités de livraison.'
  },
  {
    id: 's3u6_stoff',
    luxembourgish: 'Stoff',
    french: 'tissu',
    pronunciation: 'SHTOFF',
    usage: 'Choisir le tissu adapté.'
  },
  {
    id: 's3u6_qualiteit',
    luxembourgish: 'Qualitéit',
    french: 'qualité',
    pronunciation: 'kwa-li-TAIT',
    usage: 'Parler de la qualité du produit.'
  }
]

export const generateUnit22Exercises = (): Exercise[] => [
  {
    id: 's3u6_reactivation_politesse',
    type: 'dialogue_completion',
    vocabularyItem: unit22Vocabulary[0],
    question: 'Complétez : « Ech bräicht dës Jackett eng Gréisst méi ___. »',
    options: ['grouss', 'ëmtauschen', 'Qualitéit'],
    correctAnswer: 'grouss',
    context: 'Réactiver les structures de demande polie.'
  },
  {
    id: 's3u6_echange',
    type: 'translation',
    vocabularyItem: unit22Vocabulary[1],
    question: 'Quel verbe signifie « échanger » un article ?',
    options: ['ëmtauschen', 'usprobéieren', 'Liwwerung'],
    correctAnswer: 'ëmtauschen',
    context: 'Formuler clairement la demande d’échange.'
  },
  {
    id: 's3u6_cabine',
    type: 'pattern_recognition',
    vocabularyItem: unit22Vocabulary[2],
    question: 'Quelle phrase demande à essayer le vêtement ?',
    options: [
      'Kann ech et kuerz usprobéieren?',
      'Wou ass d’Kees?',
      'Gëtt et eng Garantie?'
    ],
    correctAnswer: 'Kann ech et kuerz usprobéieren?',
    context: 'Encourager l’interaction respectueuse en boutique.'
  },
  {
    id: 's3u6_service',
    type: 'dialogue_completion',
    vocabularyItem: unit22Vocabulary[3],
    question: 'Choisissez la phrase pour demander le service après-vente :',
    options: [
      'Wéi funktionéiert de Service no-verkaf?',
      'Wou läit de Wanderwee?',
      'Wéi héich ass de Präis?'
    ],
    correctAnswer: 'Wéi funktionéiert de Service no-verkaf?',
    context: 'Obtenir de l’aide avec bienveillance.'
  },
  {
    id: 's3u6_garantie',
    type: 'phrase_completion',
    vocabularyItem: unit22Vocabulary[4],
    question: 'Complétez : « D’___ gëllt nach zwielef Méint. »',
    options: ['Garantie', 'Liwwerung', 'Stoff'],
    correctAnswer: 'Garantie',
    context: 'Vérifier la durée de garantie avant l’échange.'
  },
  {
    id: 's3u6_livraison',
    type: 'dialogue_completion',
    vocabularyItem: unit22Vocabulary[7],
    question: 'Quelle phrase clarifie la livraison ?',
    options: [
      'D’Liwwerung kënnt muer nomëttes.',
      'Ech reservéieren e Concert.',
      'Ech brauch en Antibiotikum.'
    ],
    correctAnswer: 'D’Liwwerung kënnt muer nomëttes.',
    context: 'Informer le client des délais.'
  },
  {
    id: 's3u6_qualite',
    type: 'sentence_construction',
    vocabularyItem: unit22Vocabulary[9],
    question: 'Assemblez la phrase qui met en avant la qualité.',
    wordBank: ['D’Qualitéit', 'ass', 'héich', 'trotz', 'dem', 'Rabattbon.'],
    correctAnswer: 'D’Qualitéit ass héich trotz dem Rabattbon.',
    expectedSentence: 'D’Qualitéit ass héich trotz dem Rabattbon.',
    context: 'Rassurer sur la qualité lors de l’échange.'
  }
]

export const learningUnit22: LearningUnit = {
  id: 'S3U6',
  title: 'Mode et services',
  description:
    'Je peux gérer un échange ou une réparation, discuter de la garantie et rester cordial·e avec le service client.',
  level: 'A2',
  vocabulary: unit22Vocabulary,
  exercises: generateUnit22Exercises(),
  targetScore: 88,
  estimatedTime: 10
}
