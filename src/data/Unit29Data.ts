// Unité 29 : Médias luxembourgeois (A2+) - SECTION 4: Culture et société
// Progression CEFR: A2+ - Paysage médiatique national

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit29Vocabulary: VocabularyItem[] = [
  {
    id: 'journal',
    luxembourgish: 'Journal',
    french: 'journal',
    pronunciation: 'zhur-NAL',
    usage: 'Presse écrite luxembourgeoise (Luxemburger Wort, Tageblatt)'
  },
  {
    id: 'radio',
    luxembourgish: 'Radio',
    french: 'radio',
    pronunciation: 'RA-di-o',
    usage: 'Radio 100,7 ou RTL Radio en luxembourgeois'
  },
  {
    id: 'télé',
    luxembourgish: 'Télé',
    french: 'télévision',
    pronunciation: 'tay-LAY',
    usage: 'RTL Télé Lëtzebuerg, chaîne nationale'
  },
  {
    id: 'informatiounen',
    luxembourgish: 'Informatiounen',
    french: 'informations',
    pronunciation: 'in-for-ma-tsi-OU-nen',
    usage: 'Actualités diffusées en luxembourgeois'
  },
  {
    id: 'presse',
    luxembourgish: 'Presse',
    french: 'presse',
    pronunciation: 'PRESS',
    usage: 'Ensemble des médias luxembourgeois'
  },
  {
    id: 'aktuell',
    luxembourgish: 'aktuell',
    french: 'actuel',
    pronunciation: 'ak-tu-ELL',
    usage: 'Informations d\'actualité'
  },
  {
    id: 'emissioun',
    luxembourgish: 'Emissioun',
    french: 'émission',
    pronunciation: 'eh-mi-si-OUN',
    usage: 'Programme télévisé ou radiophonique'
  },
  {
    id: 'novellen',
    luxembourgish: 'Novellen',
    french: 'nouvelles',
    pronunciation: 'no-VEL-len',
    usage: 'Nouvelles, actualités en luxembourgeois'
  }
]

export const generateUnit29Exercises = (): Exercise[] => {
  const exercises: Exercise[] = []

  exercises.push({
    id: 'cultural_rtl_context',
    type: 'cultural_context',
    vocabularyItem: unit29Vocabulary[2],
    question: 'Quelle est la chaîne de télévision nationale du Luxembourg ?',
    options: ['RTL Télé Lëtzebuerg', 'France 2', 'ARD'],
    correctAnswer: 'RTL Télé Lëtzebuerg',
    context: 'Médias audiovisuels luxembourgeois'
  })

  exercises.push({
    id: 'media_consumption_construction',
    type: 'sentence_construction',
    vocabularyItem: unit29Vocabulary[3],
    question: 'Décrivez votre consommation d\'informations',
    wordBank: ['Ech', 'kucken', 'd\'Informatiounen', 'op', 'der', 'Télé'],
    correctAnswer: 'Ech kucken d\'Informatiounen op der Télé',
    expectedSentence: 'Ech kucken d\'Informatiounen op der Télé',
    context: 'Habitudes médiatiques personnelles'
  })

  exercises.push({
    id: 'text_comprehension_radio',
    type: 'text_comprehension',
    vocabularyItem: unit29Vocabulary[1],
    question: 'Lisez: "Radio 100,7 sëndt op Lëtzebuergesch. D\'Leit lauschteren eidel gär." Pourquoi les gens aiment cette radio ?',
    options: ['elle diffuse en luxembourgeois', 'elle joue que de la musique', 'elle est gratuite'],
    correctAnswer: 'elle diffuse en luxembourgeois',
    context: 'Importance de la langue dans les médias'
  })

  exercises.push({
    id: 'creative_media_preference',
    type: 'creative_expression',
    vocabularyItem: unit29Vocabulary[4],
    question: 'Exprimez votre préférence médiatique',
    wordBank: ['Ech', 'liesen', 'gär', 'de', 'Journal', 'fir', 'aktuell', 'Novellen'],
    correctAnswer: 'Ech liesen gär de Journal fir aktuell Novellen',
    expectedSentence: 'Ech liesen gär de Journal fir aktuell Novellen',
    context: 'Préférences personnelles pour l\'information'
  })

  exercises.push({
    id: 'opinion_luxembourg_media',
    type: 'opinion_expression',
    vocabularyItem: unit29Vocabulary[7],
    question: 'Votre opinion sur les médias en luxembourgeois',
    options: [
      'Si sinn wichteg fir eis Sprooch ze erhalen',
      'Et gëtt ze vill Informatiounen',
      'Ech verstin näischt'
    ],
    correctAnswer: 'Si sinn wichteg fir eis Sprooch ze erhalen',
    context: 'Rôle des médias dans la préservation linguistique'
  })

  return exercises
}

export const learningUnit29: LearningUnit = {
  id: 'unit_29',
  title: 'Médias luxembourgeois',
  description: 'Paysage médiatique national : journal, radio, télé en luxembourgeois',
  level: 'A2',
  vocabulary: unit29Vocabulary,
  exercises: generateUnit29Exercises(),
  targetScore: 85,
  estimatedTime: 8
}