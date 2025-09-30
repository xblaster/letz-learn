import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U1 : Histoire du Luxembourg

export const unit25Vocabulary: VocabularyItem[] = [
  {
    id: 's4u1_groussherzogtum',
    luxembourgish: 'Groussherzogtum',
    french: 'grand-duché',
    pronunciation: 'GROOSS-hair-tsog-toom',
    usage: 'Nom officiel du pays à replacer dans un récit historique.'
  },
  {
    id: 's4u1_onofhängegkeet',
    luxembourgish: 'Onofhängegkeet',
    french: 'indépendance',
    pronunciation: 'ON-of-hang-gek-kait',
    usage: 'Évoquer l’indépendance politique du Luxembourg.'
  },
  {
    id: 's4u1_neutraliteit',
    luxembourgish: 'Neutralitéit',
    french: 'neutralité',
    pronunciation: 'noy-tra-li-TAIT',
    usage: 'Décrire la neutralité du pays dans l’histoire européenne.'
  },
  {
    id: 's4u1_festung',
    luxembourgish: 'Festung',
    french: 'forteresse',
    pronunciation: 'FES-toung',
    usage: 'Parler des fortifications de la capitale.'
  },
  {
    id: 's4u1_industrialiséierung',
    luxembourgish: 'Industrialiséierung',
    french: 'industrialisation',
    pronunciation: 'in-dus-tree-a-li-ZEE-rung',
    usage: 'Expliquer la transformation économique du pays.'
  },
  {
    id: 's4u1_resistenz',
    luxembourgish: 'Resistenz',
    french: 'résistance',
    pronunciation: 're-zi-STENTS',
    usage: 'Raconter les mouvements de résistance durant la guerre.'
  },
  {
    id: 's4u1_monarchie',
    luxembourgish: 'Monarchie',
    french: 'monarchie',
    pronunciation: 'mo-nar-SHIE',
    usage: 'Décrire l’institution monarchique actuelle.'
  },
  {
    id: 's4u1_verfassung',
    luxembourgish: 'Verfassung',
    french: 'constitution',
    pronunciation: 'fer-FASS-ung',
    usage: 'Parler des fondements légaux du pays.'
  },
  {
    id: 's4u1_joerhonnert',
    luxembourgish: 'Joerhonnert',
    french: 'siècle',
    pronunciation: 'yor-HON-nert',
    usage: 'Structurer un récit chronologique.'
  },
  {
    id: 's4u1_chronologie',
    luxembourgish: 'Chronologie',
    french: 'chronologie',
    pronunciation: 'kro-no-lo-ZHIE',
    usage: 'Organiser les événements dans le temps.'
  }
]

export const generateUnit25Exercises = (): Exercise[] => [
  {
    id: 's4u1_reactivation_periode',
    type: 'dialogue_completion',
    vocabularyItem: unit25Vocabulary[8],
    question: 'Complétez : « Am 19. ___ huet d’Industrialiséierung ugefaangen. »',
    options: ['Joerhonnert', 'Festung', 'Monarchie'],
    correctAnswer: 'Joerhonnert',
    context: 'Réactiver les repères temporels travaillés en sections précédentes.'
  },
  {
    id: 's4u1_grand_duche',
    type: 'translation',
    vocabularyItem: unit25Vocabulary[0],
    question: 'Comment nomme-t-on officiellement le Luxembourg ?',
    options: ['Groussherzogtum', 'Verfassung', 'Resistenz'],
    correctAnswer: 'Groussherzogtum',
    context: 'Introduire un récit destiné à de nouveaux résident·e·s.'
  },
  {
    id: 's4u1_neutralite',
    type: 'pattern_recognition',
    vocabularyItem: unit25Vocabulary[2],
    question: 'Quelle phrase explique la neutralité luxembourgeoise ?',
    options: [
      'D’Neutralitéit huet eng wichteg Roll am europäesche Gläichgewiicht gespillt.',
      'D’Festung ass haut eng Musée.',
      'D’Monarchie organiséiert eng Feier.'
    ],
    correctAnswer: 'D’Neutralitéit huet eng wichteg Roll am europäesche Gläichgewiicht gespillt.',
    context: 'Mettre en avant la singularité politique du pays.'
  },
  {
    id: 's4u1_forteresse',
    type: 'dialogue_completion',
    vocabularyItem: unit25Vocabulary[3],
    question: 'Choisissez la phrase décrivant la forteresse :',
    options: [
      'D’Festung vu Lëtzebuerg gouf deelweis ofgerappt am 19. Joerhonnert.',
      'D’Resistenz huet d’Festung restauréiert.',
      'D’Verfassung schützt d’Festung.'
    ],
    correctAnswer: 'D’Festung vu Lëtzebuerg gouf deelweis ofgerappt am 19. Joerhonnert.',
    context: 'Relier patrimoine bâti et chronologie.'
  },
  {
    id: 's4u1_resistance',
    type: 'cultural_context',
    vocabularyItem: unit25Vocabulary[5],
    question: 'Quel élément montre l’engagement de la Resistenz pendant la Seconde Guerre mondiale ?',
    options: [
      'Organisatioun vu Streiken am September 1942',
      'Construction de la Festung',
      'Révision de la Verfassung 1868'
    ],
    correctAnswer: 'Organisatioun vu Streiken am September 1942',
    context: 'Mettre en valeur la mémoire partagée des communautés.'
  },
  {
    id: 's4u1_constitution',
    type: 'phrase_completion',
    vocabularyItem: unit25Vocabulary[7],
    question: 'Complétez : « D’___ vun 1868 definéiert d’Rechter vun de Bierger. »',
    options: ['Verfassung', 'Groussherzogtum', 'Chronologie'],
    correctAnswer: 'Verfassung',
    context: 'Relier institutions et droits citoyens.'
  },
  {
    id: 's4u1_capsule',
    type: 'sentence_construction',
    vocabularyItem: unit25Vocabulary[4],
    question: 'Assemblez la phrase de conclusion pour la capsule audio.',
    wordBank: ['D’Industrialiséierung', 'huet', 'd’Land', 'staark', 'verännert.'],
    correctAnswer: 'D’Industrialiséierung huet d’Land staark verännert.',
    expectedSentence: 'D’Industrialiséierung huet d’Land staark verännert.',
    context: 'Préparer la capsule accueillant les nouveaux résidents.'
  }
]

export const learningUnit25: LearningUnit = {
  id: 'S4U1',
  title: 'Histoire du Luxembourg',
  description:
    'Je peux raconter un événement historique marquant, relier la neutralité et la monarchie et créer une capsule audio d’accueil.',
  level: 'A2+',
  vocabulary: unit25Vocabulary,
  exercises: generateUnit25Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
