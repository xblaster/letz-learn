import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U4 : Travail quotidien

export const unit20Vocabulary: VocabularyItem[] = [
  {
    id: 's3u4_kolleg',
    luxembourgish: 'Kolleg',
    french: 'collègue',
    pronunciation: 'ko-LEK',
    usage: 'Parler de ses collègues au quotidien.'
  },
  {
    id: 's3u4_reunioun',
    luxembourgish: 'Reunioun',
    french: 'réunion',
    pronunciation: 'roy-NEE-oon',
    usage: 'Organiser ou rappeler une réunion.'
  },
  {
    id: 's3u4_deadline',
    luxembourgish: 'Deadline',
    french: 'échéance',
    pronunciation: 'DEAD-lain',
    usage: 'Clarifier la date limite d’un dossier.'
  },
  {
    id: 's3u4_dossier',
    luxembourgish: 'Dossier',
    french: 'dossier',
    pronunciation: 'DOS-see-ay',
    usage: 'Suivre un dossier administratif ou projet.'
  },
  {
    id: 's3u4_feedback',
    luxembourgish: 'Feedback',
    french: 'retour',
    pronunciation: 'FEED-bek',
    usage: 'Donner un retour constructif.'
  },
  {
    id: 's3u4_prioriteit',
    luxembourgish: 'Prioritéit',
    french: 'priorité',
    pronunciation: 'pryo-ree-TAIT',
    usage: 'Hiérarchiser les tâches.'
  },
  {
    id: 's3u4_notiz',
    luxembourgish: 'Notiz',
    french: 'note',
    pronunciation: 'no-TEETS',
    usage: 'Prendre des notes lors d’une réunion.'
  },
  {
    id: 's3u4_team',
    luxembourgish: 'Team',
    french: 'équipe',
    pronunciation: 'TEEM',
    usage: 'Valoriser l’esprit d’équipe multilingue.'
  },
  {
    id: 's3u4_projet',
    luxembourgish: 'Projet',
    french: 'projet',
    pronunciation: 'PRO-zhay',
    usage: 'Décrire l’avancée d’un projet en cours.'
  },
  {
    id: 's3u4_optrag',
    luxembourgish: 'Optrag',
    french: 'mission',
    pronunciation: 'OP-trak',
    usage: 'Donner ou recevoir une mission précise.'
  }
]

export const generateUnit20Exercises = (): Exercise[] => [
  {
    id: 's3u4_reactivation_agenda',
    type: 'dialogue_completion',
    vocabularyItem: unit20Vocabulary[1],
    question: 'Complétez : « D’___ ass muer um 9 Auer am Sall B. »',
    options: ['Reunioun', 'Optrag', 'Team'],
    correctAnswer: 'Reunioun',
    context: 'Réactiver la coordination d’agenda vue en Section 2.'
  },
  {
    id: 's3u4_prioriser',
    type: 'translation',
    vocabularyItem: unit20Vocabulary[5],
    question: 'Quel mot permet de parler de priorité ?',
    options: ['Prioritéit', 'Feedback', 'Notiz'],
    correctAnswer: 'Prioritéit',
    context: 'Hiérarchiser les actions lors d’un briefing.'
  },
  {
    id: 's3u4_deadline',
    type: 'pattern_recognition',
    vocabularyItem: unit20Vocabulary[2],
    question: 'Quelle phrase insiste sur l’échéance ?',
    options: [
      'D’Deadline fir de Projet ass en Donneschdeg.',
      'Ech fueren an de Quartier.',
      'Ech maachen eng Invitatioun.'
    ],
    correctAnswer: 'D’Deadline fir de Projet ass en Donneschdeg.',
    context: 'Communiquer des informations clés à son équipe.'
  },
  {
    id: 's3u4_feedback',
    type: 'dialogue_completion',
    vocabularyItem: unit20Vocabulary[4],
    question: 'Choisissez la phrase pour donner un feedback constructif :',
    options: [
      'Deng Iddi ass staark, mee mir verbesseren nach de Schluss.',
      'Ech hunn eng Invitatioun fir de Concert.',
      'Ech brauch meng Gesondheetskaart.'
    ],
    correctAnswer: 'Deng Iddi ass staark, mee mir verbesseren nach de Schluss.',
    context: 'Encourager tout en guidant l’amélioration.'
  },
  {
    id: 's3u4_notes',
    type: 'phrase_completion',
    vocabularyItem: unit20Vocabulary[6],
    question: 'Complétez : « Schreif eng ___ iwwer déi nächst Schrëtt. »',
    options: ['Notiz', 'Team', 'Kolleg'],
    correctAnswer: 'Notiz',
    context: 'Assurer le suivi des décisions de réunion.'
  },
  {
    id: 's3u4_mission',
    type: 'dialogue_completion',
    vocabularyItem: unit20Vocabulary[9],
    question: 'Quelle phrase confie une mission claire ?',
    options: [
      'Du kriss den Optrag fir de Rapport ze finaliséieren.',
      'Ech huelen eng Invitatioun un.',
      'Ech kafen en Ticket kombinéiert.'
    ],
    correctAnswer: 'Du kriss den Optrag fir de Rapport ze finaliséieren.',
    context: 'Encadrer les responsabilités de chacun·e.'
  },
  {
    id: 's3u4_team_spirit',
    type: 'sentence_construction',
    vocabularyItem: unit20Vocabulary[7],
    question: 'Assemblez la phrase qui valorise l’équipe.',
    wordBank: ['Eist', 'Team', 'schafft', 'multilingue', 'zesummen.'],
    correctAnswer: 'Eist Team schafft multilingue zesummen.',
    expectedSentence: 'Eist Team schafft multilingue zesummen.',
    context: 'Promouvoir l’esprit de collaboration luxembourgeois.'
  }
]

export const learningUnit20: LearningUnit = {
  id: 'S3U4',
  title: 'Travail quotidien',
  description:
    'Je peux coordonner mon équipe, préciser les échéances et donner un feedback motivant dans un environnement multilingue.',
  level: 'A2',
  vocabulary: unit20Vocabulary,
  exercises: generateUnit20Exercises(),
  targetScore: 88,
  estimatedTime: 10
}
