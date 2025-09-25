import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U6 : Sports et santé publique

export const unit30Vocabulary: VocabularyItem[] = [
  {
    id: 's4u6_sportshal',
    luxembourgish: 'Sportshal',
    french: 'salle de sport',
    pronunciation: 'SPORT-shal',
    usage: 'Lieu pour pratiquer une activité physique.'
  },
  {
    id: 's4u6_velobox',
    luxembourgish: "Vëlo'Box",
    french: 'box à vélos',
    pronunciation: 'VE-lo-box',
    usage: 'Service de stationnement sécurisé pour vélos.'
  },
  {
    id: 's4u6_gesondheetsplang',
    luxembourgish: 'Gesondheetsplang',
    french: 'plan de santé',
    pronunciation: 'ge-ZOND-heets-plang',
    usage: 'Programme municipal de santé publique.'
  },
  {
    id: 's4u6_equipe',
    luxembourgish: 'Equipe',
    french: 'équipe',
    pronunciation: 'ay-KEEP',
    usage: 'Groupe sportif ou associatif.'
  },
  {
    id: 's4u6_trainer',
    luxembourgish: 'Trainer',
    french: 'entraîneur',
    pronunciation: 'TRAI-ner',
    usage: 'Personne qui guide l’activité physique.'
  },
  {
    id: 's4u6_opwiermen',
    luxembourgish: 'Opwiermen',
    french: 'échauffement',
    pronunciation: 'OP-veer-men',
    usage: 'Étape de préparation du corps avant l’effort.'
  },
  {
    id: 's4u6_versecherung',
    luxembourgish: 'Versécherung',
    french: 'assurance',
    pronunciation: 'ver-SAY-scher-ung',
    usage: 'Assurance sportive ou santé.'
  },
  {
    id: 's4u6_abonnement',
    luxembourgish: 'Abonnement',
    french: 'abonnement',
    pronunciation: 'a-bo-ne-MON',
    usage: 'Inscription longue durée à un club.'
  },
  {
    id: 's4u6_fraizait',
    luxembourgish: 'Fräizäit',
    french: 'temps libre',
    pronunciation: 'FRAÏ-zait',
    usage: 'Moments consacrés aux activités sportives ou bien-être.'
  },
  {
    id: 's4u6_gemeinschaft',
    luxembourgish: 'Gemeinschaft',
    french: 'communauté',
    pronunciation: 'ge-MINE-shaft',
    usage: 'Dimension collective des campagnes santé.'
  }
]

export const generateUnit30Exercises = (): Exercise[] => [
  {
    id: 's4u6_reactivation_rdv',
    type: 'dialogue_completion',
    vocabularyItem: unit30Vocabulary[7],
    question: 'Complétez : « Ech huelen en ___ fir d’Sportshal bis Enn Joer. »',
    options: ['Abonnement', 'Trainer', 'Gemeinschaft'],
    correctAnswer: 'Abonnement',
    context: 'Réactiver la planification d’activités régulières.'
  },
  {
    id: 's4u6_plan',
    type: 'translation',
    vocabularyItem: unit30Vocabulary[2],
    question: 'Quel mot présente le programme santé de la commune ?',
    options: ['Gesondheetsplang', 'Fräizäit', 'Sportshal'],
    correctAnswer: 'Gesondheetsplang',
    context: 'Introduire une campagne municipale.'
  },
  {
    id: 's4u6_velobox',
    type: 'pattern_recognition',
    vocabularyItem: unit30Vocabulary[1],
    question: 'Quelle phrase explique le service Vëlo’Box ?',
    options: [
      "D'Vëlo'Box schützt däi Vëlo géint Wieder a Diebstahl.",
      'D’Equipe spillt e Match.',
      'D’Versécherung kascht vill.'
    ],
    correctAnswer: "D'Vëlo'Box schützt däi Vëlo géint Wieder a Diebstahl.",
    context: 'Promouvoir la mobilité douce.'
  },
  {
    id: 's4u6_echauffement',
    type: 'dialogue_completion',
    vocabularyItem: unit30Vocabulary[5],
    question: 'Choisissez la phrase sur l’échauffement :',
    options: [
      'Mir maachen eng Opwiermung mat eisem Trainer.',
      'Mir kafen en Ticket kombinéiert.',
      'Mir preparéieren eng Broschür.'
    ],
    correctAnswer: 'Mir maachen eng Opwiermung mat eisem Trainer.',
    context: 'Sensibiliser aux bonnes pratiques physiques.'
  },
  {
    id: 's4u6_assurance',
    type: 'phrase_completion',
    vocabularyItem: unit30Vocabulary[6],
    question: 'Complétez : « D’___ deckt Accidente beim Training. »',
    options: ['Versécherung', 'Fräizäit', 'Trainer'],
    correctAnswer: 'Versécherung',
    context: 'Rappeler l’importance de la couverture santé.'
  },
  {
    id: 's4u6_community',
    type: 'cultural_context',
    vocabularyItem: unit30Vocabulary[9],
    question: 'Quel geste renforce la Gemeinschaft sportive ?',
    options: [
      'Organiséiert eng inklusiv Vëlosfahrt fir d’Quartier.',
      'Kaaft eng Zeitung.',
      'Schreift eng Petitioun fir méi Parking.'
    ],
    correctAnswer: 'Organiséiert eng inklusiv Vëlosfahrt fir d’Quartier.',
    context: 'Mettre en avant l’inclusion et la santé publique.'
  },
  {
    id: 's4u6_affiche',
    type: 'sentence_construction',
    vocabularyItem: unit30Vocabulary[3],
    question: 'Assemblez la phrase pour l’affiche motivante.',
    wordBank: ['Eis', 'Equipe', 'beweegt', 'd’Gemeinschaft', 'zweemol', 'd’Woch.'],
    correctAnswer: 'Eis Equipe beweegt d’Gemeinschaft zweemol d’Woch.',
    expectedSentence: 'Eis Equipe beweegt d’Gemeinschaft zweemol d’Woch.',
    context: 'Concevoir une campagne santé municipale.'
  }
]

export const learningUnit30: LearningUnit = {
  id: 'S4U6',
  title: 'Sports et santé publique',
  description:
    'Je peux promouvoir une activité collective, parler des services de santé municipaux et encourager la cohésion communautaire.',
  level: 'A2+',
  vocabulary: unit30Vocabulary,
  exercises: generateUnit30Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
