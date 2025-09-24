// Unité 28 : Éducation luxembourgeoise (A2+) - SECTION 4: Culture et société
// Progression CEFR: A2+ - Système éducatif spécifique au Luxembourg

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit28Vocabulary: VocabularyItem[] = [
  {
    id: 'lycée',
    luxembourgish: 'Lycée',
    french: 'lycée',
    pronunciation: 'li-SAY',
    usage: 'Enseignement secondaire luxembourgeois (classique ou technique)'
  },
  {
    id: 'universitéit',
    luxembourgish: 'Universitéit',
    french: 'université',
    pronunciation: 'u-ni-ver-si-TAYT',
    usage: 'Université du Luxembourg ou études supérieures'
  },
  {
    id: 'diplom',
    luxembourgish: 'Diplom',
    french: 'diplôme',
    pronunciation: 'di-PLOM',
    usage: 'Certification d\'études luxembourgeoise'
  },
  {
    id: 'enseignement',
    luxembourgish: 'Enseignement',
    french: 'enseignement',
    pronunciation: 'an-SAY-nye-man',
    usage: 'Système d\'enseignement multilingue luxembourgeois'
  },
  {
    id: 'sprooch',
    luxembourgish: 'Sprooch',
    french: 'langue',
    pronunciation: 'SPROKH',
    usage: 'Langues d\'enseignement (luxembourgeois, français, allemand)'
  },
  {
    id: 'primärschoul',
    luxembourgish: 'Primärschoul',
    french: 'école primaire',
    pronunciation: 'pri-MÄR-shool',
    usage: 'Enseignement primaire fondamental'
  },
  {
    id: 'léieren',
    luxembourgish: 'léieren',
    french: 'apprendre',
    pronunciation: 'LAY-er-en',
    usage: 'Processus d\'apprentissage'
  },
  {
    id: 'multilingue',
    luxembourgish: 'multilingue',
    french: 'multilingue',
    pronunciation: 'mul-ti-LING-gue',
    usage: 'Caractéristique clé du système éducatif luxembourgeois'
  }
]

export const generateUnit28Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  exercises.push({
    id: 'cultural_multilingual_system',
    type: 'cultural_context',
    vocabularyItem: unit28Vocabulary[7],
    question: 'Combien de langues officielles sont enseignées au Luxembourg ?',
    options: ['trois (luxembourgeois, français, allemand)', 'deux', 'une seule'],
    correctAnswer: 'trois (luxembourgeois, français, allemand)',
    context: 'Spécificité trilingue de l\'éducation luxembourgeoise'
  })

  exercises.push({
    id: 'education_path_construction',
    type: 'sentence_construction',
    vocabularyItem: unit28Vocabulary[0],
    question: 'Décrivez le parcours après la Primärschoul',
    wordBank: ['No', 'der', 'Primärschoul', 'ginn', 'Kanner', 'op', 'de', 'Lycée'],
    correctAnswer: 'No der Primärschoul ginn d\'Kanner op de Lycée',
    expectedSentence: 'No der Primärschoul ginn d\'Kanner op de Lycée',
    context: 'Progression du système éducatif'
  })

  exercises.push({
    id: 'text_comprehension_university',
    type: 'text_comprehension',
    vocabularyItem: unit28Vocabulary[1],
    question: 'Lisez: "D\'Universitéit zu Lëtzebuerg ass jonk awer innovativ. Si bitt international Coursen." Quel est l\'avantage de cette université ?',
    options: ['elle offre des cours internationaux', 'elle est très ancienne', 'elle est gratuite'],
    correctAnswer: 'elle offre des cours internationaux',
    context: 'Caractéristiques de l\'Université du Luxembourg'
  })

  exercises.push({
    id: 'creative_language_learning',
    type: 'creative_expression',
    vocabularyItem: unit28Vocabulary[6],
    question: 'Exprimez comment vous apprenez les langues au Luxembourg',
    wordBank: ['Ech', 'léieren', 'dräi', 'Sproochen', 'an', 'der', 'Schoul'],
    correctAnswer: 'Ech léieren dräi Sproochen an der Schoul',
    expectedSentence: 'Ech léieren dräi Sproochen an der Schoul',
    context: 'Apprentissage multilingue personnel'
  })

  exercises.push({
    id: 'opinion_education_system',
    type: 'opinion_expression',
    vocabularyItem: unit28Vocabulary[4],
    question: 'Votre opinion sur l\'enseignement trilingue au Luxembourg',
    options: [
      'Et ass eng grouss Chance fir d\'Zukunft',
      'Et ass ze schwéier',
      'Et ass net wichteg'
    ],
    correctAnswer: 'Et ass eng grouss Chance fir d\'Zukunft',
    context: 'Avantages de l\'éducation multilingue'
  })

  return exercises
}

export const learningUnit28: LearningUnit = {
  id: 'unit_28',
  title: 'Éducation luxembourgeoise',
  description: 'Système éducatif trilingue : lycée, université et multilinguisme',
  level: 'A2',
  vocabulary: unit28Vocabulary,
  exercises: generateUnit28Exercises(),
  targetScore: 85,
  estimatedTime: 8
}