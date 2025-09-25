// Unit 22: Aarbecht a Formatioun - A2 Vie pratique
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit22Vocabulary: VocabularyItem[] = [
  {
    id: 'arbechtskontrakt',
    luxembourgish: 'Aarbechtskontrakt',
    french: 'contrat de travail',
    pronunciation: 'AAR-bekhts-kon-trakt',
    usage: 'Document qui définit vos conditions de travail.'
  },
  {
    id: 'stage',
    luxembourgish: 'Stage',
    french: 'stage',
    pronunciation: 'SHTASH',
    usage: 'Période d\'apprentissage pratique en entreprise.'
  },
  {
    id: 'gehalt',
    luxembourgish: 'Gehalt',
    french: 'salaire',
    pronunciation: 'geh-HALT',
    usage: 'Rémunération mensuelle versée par l\'employeur.'
  },
  {
    id: 'arbechtsamt',
    luxembourgish: 'ADEM',
    french: 'agence pour l\'emploi',
    pronunciation: 'A-DEMM',
    usage: 'Agence luxembourgeoise de placement et de formation.'
  },
  {
    id: 'weiderbildung',
    luxembourgish: 'Weiderbildung',
    french: 'formation continue',
    pronunciation: 'VAI-der-bil-dung',
    usage: 'Formation pour développer vos compétences.'
  },
  {
    id: 'motivationnsbréif',
    luxembourgish: 'Motivatiounsbréif',
    french: 'lettre de motivation',
    pronunciation: 'mo-ti-VA-tsions-brêf',
    usage: 'Lettre envoyée pour exprimer votre motivation à un employeur.'
  },
  {
    id: 'gesprech',
    luxembourgish: 'Gespréich',
    french: 'entretien',
    pronunciation: 'ge-SHPRÄÏSH',
    usage: 'Entretien de recrutement ou d\'évaluation.'
  },
  {
    id: 'arbechtszäiten',
    luxembourgish: 'Aarbechtszäiten',
    french: 'horaires de travail',
    pronunciation: 'AAR-bekhts-TSÄÏ-ten',
    usage: 'Heures convenues dans votre contrat.'
  },
  {
    id: 'team',
    luxembourgish: 'Equipe / Team',
    french: 'équipe',
    pronunciation: 'EE-keep',
    usage: 'Groupe de collègues avec qui vous collaborez.'
  },
  {
    id: 'arbechtsrecht',
    luxembourgish: 'Aarbechtsrecht',
    french: 'droit du travail',
    pronunciation: 'AAR-bekhts-rekht',
    usage: 'Règles qui protègent salariés et employeurs.'
  }
]

export const generateUnit22Exercises = (): Exercise[] => [
  {
    id: 'u22_translation_kontrakt',
    type: 'translation',
    vocabularyItem: unit22Vocabulary[0],
    question: 'Comment dit-on « contrat de travail » en luxembourgeois ?',
    options: ['Aarbechtskontrakt', 'Motivatiounsbréif', 'Stage'],
    correctAnswer: 'Aarbechtskontrakt',
    context: 'Connaître vos documents clés vous rend confiant·e.'
  },
  {
    id: 'u22_dialogue_adem',
    type: 'dialogue_completion',
    vocabularyItem: unit22Vocabulary[3],
    question: 'Où prenez-vous rendez-vous pour un accompagnement emploi ?',
    options: ['Bei der ADEM', 'Um Tram', 'An der Gemeng'],
    correctAnswer: 'Bei der ADEM',
    context: 'Savoir à qui s\'adresser ouvre des opportunités positives.'
  },
  {
    id: 'u22_sentence_stage',
    type: 'sentence_construction',
    vocabularyItem: unit22Vocabulary[1],
    question: 'Composez une phrase pour annoncer que vous commencez un stage.',
    wordBank: ['Ech', 'fänken', 'e', 'Stage', 'un'],
    correctAnswer: 'Ech fänken e Stage un',
    expectedSentence: 'Ech fänken e Stage un',
    hint: 'Le verbe « ufänken » place la particule « un » à la fin.',
    context: 'Célébrer un nouveau départ soutient votre motivation.'
  },
  {
    id: 'u22_cultural_weiderbildung',
    type: 'cultural_context',
    vocabularyItem: unit22Vocabulary[4],
    question: 'Comment parle-t-on des formations financées pour adultes ?',
    options: ['Weiderbildung', 'Gehalt', 'Equipe'],
    correctAnswer: 'Weiderbildung',
    context: 'Identifier les ressources renforce votre confiance professionnelle.'
  },
  {
    id: 'u22_translation_motivatioun',
    type: 'translation',
    vocabularyItem: unit22Vocabulary[5],
    question: 'Comment dit-on « lettre de motivation » en luxembourgeois ?',
    options: ['Motivatiounsbréif', 'Aarbechtsrecht', 'Aarbechtszäiten'],
    correctAnswer: 'Motivatiounsbréif',
    context: 'Nommer votre document valorise votre candidature.'
  },
  {
    id: 'u22_dialogue_gesprech',
    type: 'dialogue_completion',
    vocabularyItem: unit22Vocabulary[6],
    question: 'Vous confirmez votre présence à un entretien. Vous dites :',
    options: ['Ech sinn beim Gespréich dobäi.', 'Ech fueren op d\'Gemeng.', 'Ech liesen de Fahrplang.'],
    correctAnswer: 'Ech sinn beim Gespréich dobäi.',
    context: 'Se montrer disponible crée une ambiance collaborative.'
  },
  {
    id: 'u22_word_order_arbechtszaiten',
    type: 'word_ordering',
    vocabularyItem: unit22Vocabulary[7],
    question: 'Remettez les mots en ordre pour évoquer les horaires.',
    wordBank: ['Meng', 'Aarbechtszäiten', 'si', 'flexibel'],
    correctAnswer: 'Meng Aarbechtszäiten si flexibel',
    expectedSentence: 'Meng Aarbechtszäiten si flexibel',
    hint: 'Le verbe « sinn » reste en deuxième position.',
    context: 'Parler de flexibilité instaure un climat positif au travail.'
  },
  {
    id: 'u22_cultural_team',
    type: 'cultural_context',
    vocabularyItem: unit22Vocabulary[8],
    question: 'Quel mot mixte français-anglais décrit souvent votre équipe ?',
    options: ['Equipe / Team', 'Stage', 'Aarbechtsrecht'],
    correctAnswer: 'Equipe / Team',
    context: 'Valoriser votre équipe renforce le sentiment d\'appartenance.'
  }
]

export const learningUnit22: LearningUnit = {
  id: 'unit_22',
  title: 'Aarbecht a Formatioun',
  description: 'Préparez vos démarches emploi et vos dialogues professionnels.',
  level: 'A2',
  vocabulary: unit22Vocabulary,
  exercises: generateUnit22Exercises(),
  targetScore: 80,
  estimatedTime: 8
}
