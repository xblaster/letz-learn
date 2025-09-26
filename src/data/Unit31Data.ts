import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U7 : Vie culturelle

export const unit31Vocabulary: VocabularyItem[] = [
  {
    id: 's4u7_philharmonie',
    luxembourgish: 'Philharmonie',
    french: 'Philharmonie',
    pronunciation: 'fil-har-mo-NIE',
    usage: 'Salle de concert emblématique du Luxembourg.'
  },
  {
    id: 's4u7_mudam',
    luxembourgish: 'Mudam',
    french: 'Mudam',
    pronunciation: 'MOO-dam',
    usage: 'Musée d’art contemporain à Luxembourg-Kirchberg.'
  },
  {
    id: 's4u7_festival',
    luxembourgish: 'Festival de Wiltz',
    french: 'Festival de Wiltz',
    pronunciation: 'fes-ti-VAL de VILTS',
    usage: 'Festival culturel estival dans le nord du pays.'
  },
  {
    id: 's4u7_theatersteck',
    luxembourgish: 'Theaterstéck',
    french: 'pièce de théâtre',
    pronunciation: 'TEA-ter-schteck',
    usage: 'Représentation théâtrale à recommander.'
  },
  {
    id: 's4u7_entreeskaart',
    luxembourgish: 'Entréeskaart',
    french: 'billet d’entrée',
    pronunciation: 'en-TREES-kaart',
    usage: 'Ticket d’accès aux événements culturels.'
  },
  {
    id: 's4u7_virverkaf',
    luxembourgish: 'Virverkaf',
    french: 'prévente',
    pronunciation: 'FIR-fer-kaf',
    usage: 'Achat anticipé de billets.'
  },
  {
    id: 's4u7_kulturpass',
    luxembourgish: 'Kulturpass',
    french: 'Kulturpass',
    pronunciation: 'KUL-tur-pass',
    usage: 'Programme facilitant l’accès à la culture.'
  },
  {
    id: 's4u7_guideierung',
    luxembourgish: 'Guidéierung',
    french: 'visite guidée',
    pronunciation: 'gi-DAY-irung',
    usage: 'Visite commentée d’un lieu culturel.'
  },
  {
    id: 's4u7_ausstellung',
    luxembourgish: 'Ausstellung',
    french: 'exposition',
    pronunciation: 'AUS-shtel-lung',
    usage: 'Exposition temporaire ou permanente.'
  },
  {
    id: 's4u7_fraiwelleger',
    luxembourgish: 'Fräiwëlleger',
    french: 'bénévole',
    pronunciation: 'FRAÏ-vel-le-ger',
    usage: 'Personne engagée dans la vie culturelle.'
  }
]

export const generateUnit31Exercises = (): Exercise[] => [
  {
    id: 's4u7_reactivation_agenda',
    type: 'dialogue_completion',
    vocabularyItem: unit31Vocabulary[4],
    question: 'Complétez : « Ech kafen zwou ___ fir d’Theaterstéck. »',
    options: ['Entréeskaarten', 'Ausstellungen', 'Kulturpass'],
    correctAnswer: 'Entréeskaarten',
    context: 'Réactiver la planification d’événements en groupe.'
  },
  {
    id: 's4u7_philharmonie',
    type: 'translation',
    vocabularyItem: unit31Vocabulary[0],
    question: 'Quel lieu accueillirait un concert symphonique ?',
    options: ['Philharmonie', 'Mudam', 'Kulturpass'],
    correctAnswer: 'Philharmonie',
    context: 'Recommander un événement musical prestigieux.'
  },
  {
    id: 's4u7_mudam',
    type: 'pattern_recognition',
    vocabularyItem: unit31Vocabulary[1],
    question: 'Quelle phrase décrit le Mudam ?',
    options: [
      'De Mudam weist modern Konscht an engem hellen Gebai.',
      'De Kulturpass ass gratis.',
      'D’Guidéierung ass spéit.'
    ],
    correctAnswer: 'De Mudam weist modern Konscht an engem hellen Gebai.',
    context: 'Présenter un lieu iconique aux nouveaux arrivants.'
  },
  {
    id: 's4u7_festival',
    type: 'dialogue_completion',
    vocabularyItem: unit31Vocabulary[2],
    question: 'Choisissez la phrase pour promouvoir le Festival de Wiltz :',
    options: [
      'De Festival de Wiltz bréngt Theater a Musek an den Norden.',
      'De Kulturpass gëlt nëmme fir Sport.',
      'D’Fräiwëlleger maachen Hausaufgaben.'
    ],
    correctAnswer: 'De Festival de Wiltz bréngt Theater a Musek an den Norden.',
    context: 'Valoriser la diversité culturelle dans tout le pays.'
  },
  {
    id: 's4u7_kulturpass',
    type: 'phrase_completion',
    vocabularyItem: unit31Vocabulary[6],
    question: 'Complétez : « De ___ erlaabt Zougang zu ville Programmen. »',
    options: ['Kulturpass', 'Virverkaf', 'Entréeskaart'],
    correctAnswer: 'Kulturpass',
    context: 'Encourager l’accessibilité culturelle.'
  },
  {
    id: 's4u7_benevolat',
    type: 'dialogue_completion',
    vocabularyItem: unit31Vocabulary[9],
    question: 'Quelle phrase met en avant les bénévoles ?',
    options: [
      'Fräiwëlleger begleeden d’Guidéierungen a verschidde Sproochen.',
      'Fräiwëlleger maachen eng Recette.',
      'Fräiwëlleger reservéieren eng Vëlo’Box.'
    ],
    correctAnswer: 'Fräiwëlleger begleeden d’Guidéierungen a verschidde Sproochen.',
    context: 'Promouvoir l’engagement culturel inclusif.'
  },
  {
    id: 's4u7_itineraire',
    type: 'sentence_construction',
    vocabularyItem: unit31Vocabulary[7],
    question: 'Assemblez la phrase pour une visite guidée.',
    wordBank: ['D’Guidéierung', 'start', 'um', '17', 'Auer', 'am', 'Mudam.'],
    correctAnswer: 'D’Guidéierung start um 17 Auer am Mudam.',
    expectedSentence: 'D’Guidéierung start um 17 Auer am Mudam.',
    context: 'Planifier un itinéraire culturel de week-end.'
  }
]

export const learningUnit31: LearningUnit = {
  id: 'S4U7',
  title: 'Vie culturelle',
  description:
    'Je peux recommander des événements variés, encourager l’usage du Kulturpass et valoriser le bénévolat culturel.',
  level: 'A2+',
  vocabulary: unit31Vocabulary,
  exercises: generateUnit31Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
