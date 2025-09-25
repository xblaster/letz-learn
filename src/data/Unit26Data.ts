import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U2 : Traditions et fêtes

export const unit26Vocabulary: VocabularyItem[] = [
  {
    id: 's4u2_schueberfouer',
    luxembourgish: 'Schueberfouer',
    french: 'Schueberfouer',
    pronunciation: 'SHOO-ber-fo-er',
    usage: 'Grande foire populaire de fin d’été.'
  },
  {
    id: 's4u2_eemaischen',
    luxembourgish: 'Eemaischen',
    french: 'Eimaischen',
    pronunciation: 'AY-mai-shen',
    usage: 'Marché de Pâques avec les sifflets « Péckvillercher ».'
  },
  {
    id: 's4u2_liichten',
    luxembourgish: 'Liichten',
    french: 'liichtmessdag (fête des lumières)',
    pronunciation: 'LEE-chten',
    usage: 'Défilé des enfants avec lanternes en février.'
  },
  {
    id: 's4u2_draikinn',
    luxembourgish: 'Dräikinneksdag',
    french: 'Épiphanie',
    pronunciation: 'DRÄI-kin-neks-dag',
    usage: 'Fête des rois célébrée avec chants et galette.'
  },
  {
    id: 's4u2_buergbrennen',
    luxembourgish: 'Buergbrennen',
    french: 'feu de joie de Carême',
    pronunciation: 'BUERG-bren-nen',
    usage: 'Grand bûcher annonçant la fin de l’hiver.'
  },
  {
    id: 's4u2_traditioun',
    luxembourgish: 'Traditioun',
    french: 'tradition',
    pronunciation: 'tra-di-TSOUN',
    usage: 'Parler du patrimoine immatériel du pays.'
  },
  {
    id: 's4u2_haemmelsmarsch',
    luxembourgish: 'Hämmelsmarsch',
    french: 'défilé des moutons (Ville de Luxembourg)',
    pronunciation: 'HAE-mels-marsch',
    usage: 'Fanfare traditionnelle précédant la Schueberfouer.'
  },
  {
    id: 's4u2_fuesent',
    luxembourgish: 'Fuesent',
    french: 'carnaval',
    pronunciation: 'FOO-zent',
    usage: 'Saison du carnaval avec défilés multilingues.'
  },
  {
    id: 's4u2_geback',
    luxembourgish: 'Gebäck',
    french: 'pâtisserie',
    pronunciation: 'ge-BÄCK',
    usage: 'Spécialités sucrées associées aux fêtes.'
  },
  {
    id: 's4u2_laternen',
    luxembourgish: 'Laternen',
    french: 'lanternes',
    pronunciation: 'la-TER-nen',
    usage: 'Lanternes des enfants lors de la Liichten.'
  }
]

export const generateUnit26Exercises = (): Exercise[] => [
  {
    id: 's4u2_reactivation_calendrier',
    type: 'dialogue_completion',
    vocabularyItem: unit26Vocabulary[5],
    question: 'Complétez : « Dës ___ verbënnt d’Communautéiten am Wanter. »',
    options: ['Traditioun', 'Gebäck', 'Laternen'],
    correctAnswer: 'Traditioun',
    context: 'Réactiver les discussions calendaires et communautaires.'
  },
  {
    id: 's4u2_schueberfouer',
    type: 'translation',
    vocabularyItem: unit26Vocabulary[0],
    question: 'Quelle fête ouvre la rentrée avec attractions et Hämmelsmarsch ?',
    options: ['Schueberfouer', 'Buergbrennen', 'Eemaischen'],
    correctAnswer: 'Schueberfouer',
    context: 'Identifier l’événement culturel emblématique.'
  },
  {
    id: 's4u2_buergbrennen',
    type: 'pattern_recognition',
    vocabularyItem: unit26Vocabulary[4],
    question: 'Quelle phrase décrit le Buergbrennen ?',
    options: [
      'Am Duerf baue mir eng grouss Buerg a verbrenne si fir d’Wanter ofzeschléissen.',
      'Mir kafen eng Broschür um Marché.',
      'Mir huelen d’Nummer beim Schalter.'
    ],
    correctAnswer: 'Am Duerf baue mir eng grouss Buerg a verbrenne si fir d’Wanter ofzeschléissen.',
    context: 'Relier patrimoine rural et symbolique saisonnière.'
  },
  {
    id: 's4u2_lanternes',
    type: 'dialogue_completion',
    vocabularyItem: unit26Vocabulary[9],
    question: 'Choisissez la phrase pour expliquer la Liichten :',
    options: [
      'Kanner droen Laternen duerch d’Stroossen a sangen Tralala Liichtmëssdag.',
      'Kanner maachen eng Invitatioun fir de Concert.',
      'Kanner preparéieren eng Broschür.'
    ],
    correctAnswer: 'Kanner droen Laternen duerch d’Stroossen a sangen Tralala Liichtmëssdag.',
    context: 'Mettre en avant la participation des enfants.'
  },
  {
    id: 's4u2_gastronomie',
    type: 'phrase_completion',
    vocabularyItem: unit26Vocabulary[8],
    question: 'Complétez : « D’___ ass bei der Eemaischen ganz beléift. »',
    options: ['Gebäck', 'Fuesent', 'Traditioun'],
    correctAnswer: 'Gebäck',
    context: 'Évoquer les spécialités culinaires liées aux fêtes.'
  },
  {
    id: 's4u2_carnaval',
    type: 'dialogue_completion',
    vocabularyItem: unit26Vocabulary[7],
    question: 'Quelle phrase décrit la Fuesent ?',
    options: [
      'D’Fuesent bréngt vill maskéiert Défiléën a vill Sproochen zesummen.',
      'D’Schueberfouer ass am August.',
      'D’Laternen si ganz hell.'
    ],
    correctAnswer: 'D’Fuesent bréngt vill maskéiert Défiléën a vill Sproochen zesummen.',
    context: 'Souligner la diversité linguistique du carnaval.'
  },
  {
    id: 's4u2_calendar',
    type: 'sentence_construction',
    vocabularyItem: unit26Vocabulary[6],
    question: 'Assemblez la phrase pour présenter la Hämmelsmarsch.',
    wordBank: ['D’Hämmelsmarsch', 'start', 'virun', 'der', 'Schueberfouer.'],
    correctAnswer: 'D’Hämmelsmarsch start virun der Schueberfouer.',
    expectedSentence: 'D’Hämmelsmarsch start virun der Schueberfouer.',
    context: 'Préparer un calendrier de fêtes pour parents expatriés.'
  }
]

export const learningUnit26: LearningUnit = {
  id: 'S4U2',
  title: 'Traditions et fêtes',
  description:
    'Je peux expliquer le sens des grandes fêtes luxembourgeoises, relier coutumes et gastronomie et créer un calendrier culturel.',
  level: 'A2+',
  vocabulary: unit26Vocabulary,
  exercises: generateUnit26Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
