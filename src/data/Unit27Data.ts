import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 4 — Culture et société (A2+)
// S4U3 : Institutions politiques

export const unit27Vocabulary: VocabularyItem[] = [
  {
    id: 's4u3_chamber',
    luxembourgish: 'Chamber',
    french: 'Chambre des Députés',
    pronunciation: 'SHAHM-ber',
    usage: 'Institution législative principale du pays.'
  },
  {
    id: 's4u3_regierung',
    luxembourgish: 'Regierung',
    french: 'gouvernement',
    pronunciation: 're-GEE-rung',
    usage: 'Organe exécutif du Luxembourg.'
  },
  {
    id: 's4u3_gemengerot',
    luxembourgish: 'Gemengerot',
    french: 'conseil communal',
    pronunciation: 'ge-MENG-rot',
    usage: 'Instance locale représentant les communes.'
  },
  {
    id: 's4u3_deputeierten',
    luxembourgish: 'Deputéierten',
    french: 'députés',
    pronunciation: 'de-pu-TEI-erten',
    usage: 'Élus qui siègent à la Chambre.'
  },
  {
    id: 's4u3_gesetzprojet',
    luxembourgish: 'Gesetzprojet',
    french: 'projet de loi',
    pronunciation: 'ge-ZETS-pro-jet',
    usage: 'Texte soumis au débat parlementaire.'
  },
  {
    id: 's4u3_walen',
    luxembourgish: 'Walen',
    french: 'élections',
    pronunciation: 'VAH-len',
    usage: 'Processus démocratique de vote.'
  },
  {
    id: 's4u3_koalitioun',
    luxembourgish: 'Koalitioun',
    french: 'coalition',
    pronunciation: 'ko-a-li-TSOUN',
    usage: 'Alliance de partis pour gouverner.'
  },
  {
    id: 's4u3_minister',
    luxembourgish: 'Minister',
    french: 'ministre',
    pronunciation: 'mi-NIS-ter',
    usage: 'Responsable d’un portefeuille gouvernemental.'
  },
  {
    id: 's4u3_biergerinitiativ',
    luxembourgish: 'Biergerinitiativ',
    french: 'initiative citoyenne',
    pronunciation: 'BEER-ger-ini-tsa-tiv',
    usage: 'Participation citoyenne aux décisions publiques.'
  },
  {
    id: 's4u3_verwaltungsrot',
    luxembourgish: 'Verwaltungsrot',
    french: 'conseil d’administration',
    pronunciation: 'fer-VAL-tungs-rot',
    usage: 'Organe de gouvernance d’une institution publique.'
  }
]

export const generateUnit27Exercises = (): Exercise[] => [
  {
    id: 's4u3_reactivation_commune',
    type: 'dialogue_completion',
    vocabularyItem: unit27Vocabulary[2],
    question: 'Complétez : « De ___ decidéiert iwwer Projeten an der Gemeng. »',
    options: ['Gemengerot', 'Minister', 'Walen'],
    correctAnswer: 'Gemengerot',
    context: 'Réactiver la participation locale évoquée en Section 3.'
  },
  {
    id: 's4u3_chamber',
    type: 'translation',
    vocabularyItem: unit27Vocabulary[0],
    question: 'Comment nommer la Chambre des Députés en luxembourgeois ?',
    options: ['Chamber', 'Verwaltungsrot', 'Koalitioun'],
    correctAnswer: 'Chamber',
    context: 'Se repérer dans les institutions nationales.'
  },
  {
    id: 's4u3_projet_de_loi',
    type: 'pattern_recognition',
    vocabularyItem: unit27Vocabulary[4],
    question: 'Quelle phrase décrit le parcours d’un projet de loi ?',
    options: [
      'De Gesetzprojet gëtt an der Chamber diskutéiert an dunn gestëmmt.',
      'De Minister organiséiert eng Fuesent.',
      'D’Koalitioun spillt eng Musek.'
    ],
    correctAnswer: 'De Gesetzprojet gëtt an der Chamber diskutéiert an dunn gestëmmt.',
    context: 'Expliquer le fonctionnement démocratique luxembourgeois.'
  },
  {
    id: 's4u3_elections',
    type: 'dialogue_completion',
    vocabularyItem: unit27Vocabulary[5],
    question: 'Choisissez la phrase qui parle des élections :',
    options: [
      'D’Walen fannen all fënnef Joer statt.',
      'D’Biergerinitiativ schreift eng Rezept.',
      'De Minister reservéiert e Concert.'
    ],
    correctAnswer: 'D’Walen fannen all fënnef Joer statt.',
    context: 'Souligner la régularité du processus démocratique.'
  },
  {
    id: 's4u3_coalition',
    type: 'phrase_completion',
    vocabularyItem: unit27Vocabulary[6],
    question: 'Complétez : « D’___ tëscht dräi Parteien huet eng nei Regierung geformt. »',
    options: ['Koalitioun', 'Chamber', 'Biergerinitiativ'],
    correctAnswer: 'Koalitioun',
    context: 'Montrer comment naissent les gouvernements.'
  },
  {
    id: 's4u3_participation',
    type: 'cultural_context',
    vocabularyItem: unit27Vocabulary[8],
    question: 'Quel exemple illustre une Biergerinitiativ ?',
    options: [
      'Bewunner ënnerschreiwen eng Petitioun fir méi Vëlosweeër.',
      'D’Regierung verëffentlecht de Budget.',
      'D’Chamber mécht eng Kultur-Ausstellung.'
    ],
    correctAnswer: 'Bewunner ënnerschreiwen eng Petitioun fir méi Vëlosweeër.',
    context: 'Encourager l’engagement citoyen local.'
  },
  {
    id: 's4u3_simulation',
    type: 'sentence_construction',
    vocabularyItem: unit27Vocabulary[3],
    question: 'Assemblez la phrase pour une simulation citoyenne.',
    wordBank: ['D’Deputéierten', 'debattéieren', 'iwwer', 'de', 'Gesetzprojet.'],
    correctAnswer: 'D’Deputéierten debattéieren iwwer de Gesetzprojet.',
    expectedSentence: 'D’Deputéierten debattéieren iwwer de Gesetzprojet.',
    context: 'Préparer un atelier participatif sur la démocratie.'
  }
]

export const learningUnit27: LearningUnit = {
  id: 'S4U3',
  title: 'Institutions politiques',
  description:
    'Je peux décrire l’organisation civique du Luxembourg, expliquer le chemin d’un projet de loi et encourager la participation citoyenne.',
  level: 'A2+',
  vocabulary: unit27Vocabulary,
  exercises: generateUnit27Exercises(),
  targetScore: 90,
  estimatedTime: 12
}
