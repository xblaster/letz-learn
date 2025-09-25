// Unit 20: Administrativ Demarchen - A2 Vie pratique
// Section 3: Vie pratique (A2)

import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes'

export const unit20Vocabulary: VocabularyItem[] = [
  {
    id: 'biergercenter',
    luxembourgish: 'Bierger-Center',
    french: 'centre citoyen',
    pronunciation: 'BIE-jer-sen-ter',
    usage: 'Guichet principal de Luxembourg-Ville pour démarches rapides.'
  },
  {
    id: 'gemeen',
    luxembourgish: 'Gemeng',
    french: 'commune',
    pronunciation: 'geh-MENG',
    usage: 'Administration communale qui gère vos dossiers locaux.'
  },
  {
    id: 'meldungskaart',
    luxembourgish: 'Meldungskaart',
    french: 'carte de déclaration',
    pronunciation: 'MEL-dungs-kaart',
    usage: 'Document pour s\'enregistrer comme résident·e.'
  },
  {
    id: 'residenzbestätegung',
    luxembourgish: 'Residenzbestätegung',
    french: 'attestation de résidence',
    pronunciation: 're-zi-DENTS-besh-TÄ-te-gung',
    usage: 'Attestation officielle demandée par les banques ou écoles.'
  },
  {
    id: 'formulaire',
    luxembourgish: 'Formulaire',
    french: 'formulaire',
    pronunciation: 'for-mu-LAIR',
    usage: 'Document à remplir pour votre demande administrative.'
  },
  {
    id: 'dossier',
    luxembourgish: 'Dossier',
    french: 'dossier',
    pronunciation: 'dos-SIÉ',
    usage: 'Ensemble de documents remis à l\'administration.'
  },
  {
    id: 'termin huelen',
    luxembourgish: 'Rendez-vous huelen',
    french: 'prendre rendez-vous',
    pronunciation: 'ron-day-VOO HOU-len',
    usage: 'Action de fixer un rendez-vous administratif.'
  },
  {
    id: 'dokumenter',
    luxembourgish: 'Dokumenter',
    french: 'documents',
    pronunciation: 'do-ku-MEN-ter',
    usage: 'Pièces justificatives nécessaires pour la procédure.'
  },
  {
    id: 'digital',
    luxembourgish: 'Digital Lëtzebuerg',
    french: 'administration en ligne',
    pronunciation: 'DI-gi-tal LET-ze-bourk',
    usage: 'Portail national pour déposer vos demandes en ligne.'
  },
  {
    id: 'eidas',
    luxembourgish: 'luxID / eIDAS',
    french: 'identité électronique',
    pronunciation: 'luks-ID',
    usage: 'Carte d\'identité numérique pour signer vos formulaires.'
  }
]

export const generateUnit20Exercises = (): Exercise[] => [
  {
    id: 'u20_translation_biergercenter',
    type: 'translation',
    vocabularyItem: unit20Vocabulary[0],
    question: 'Comment désigne-t-on le centre citoyen de Luxembourg-Ville ?',
    options: ['Bierger-Center', 'Gemeng', 'Digital Lëtzebuerg'],
    correctAnswer: 'Bierger-Center',
    context: 'Identifier le bon guichet vous fait gagner du temps.'
  },
  {
    id: 'u20_dialogue_gemeng',
    type: 'dialogue_completion',
    vocabularyItem: unit20Vocabulary[1],
    question: 'Un courrier officiel vous invite à contacter la commune. Vous dites :',
    options: ['Ech ginn op d\'Gemeng.', 'Ech huelen d\'mKaart.', 'Ech fueren mam Zuch.'],
    correctAnswer: 'Ech ginn op d\'Gemeng.',
    context: 'Affirmer votre action rassure votre interlocuteur administratif.'
  },
  {
    id: 'u20_word_order_meldung',
    type: 'word_ordering',
    vocabularyItem: unit20Vocabulary[2],
    question: 'Ordonnez la phrase pour dire que vous remplissez votre carte.',
    wordBank: ['Ech', 'fëllen', 'meng', 'Meldungskaart'],
    correctAnswer: 'Ech fëllen meng Meldungskaart',
    expectedSentence: 'Ech fëllen meng Meldungskaart',
    hint: 'Commencez par le sujet, puis le verbe conjugué.',
    context: 'Affirmer votre autonomie dans les formulaires est motivant.'
  },
  {
    id: 'u20_cultural_residence',
    type: 'cultural_context',
    vocabularyItem: unit20Vocabulary[3],
    question: 'Quel document rassure une banque sur votre résidence ?',
    options: ['Residenzbestätegung', 'Meldungskaart', 'Formulaire'],
    correctAnswer: 'Residenzbestätegung',
    context: 'Relier les documents aux besoins concrets clarifie vos démarches.'
  },
  {
    id: 'u20_translation_formulaire',
    type: 'translation',
    vocabularyItem: unit20Vocabulary[4],
    question: 'Comment dit-on « formulaire » en luxembourgeois ?',
    options: ['Formulaire', 'Dokument', 'Dossier'],
    correctAnswer: 'Formulaire',
    context: 'Les mots transparents donnent confiance avant de signer.'
  },
  {
    id: 'u20_dialogue_rendezvous',
    type: 'dialogue_completion',
    vocabularyItem: unit20Vocabulary[6],
    question: 'Le guichet vous propose une heure. Vous acceptez en disant :',
    options: ['Ech huelen de Rendez-vous.', 'Ech fueren mam Tram.', 'Ech liesen de Fahrplang.'],
    correctAnswer: 'Ech huelen de Rendez-vous.',
    context: 'Confirmer calmement un rendez-vous montre votre préparation.'
  },
  {
    id: 'u20_sentence_documents',
    type: 'sentence_construction',
    vocabularyItem: unit20Vocabulary[7],
    question: 'Formez une phrase pour dire que vous avez tous les documents.',
    wordBank: ['Ech', 'hu', 'all', 'meng', 'Dokumenter'],
    correctAnswer: 'Ech hu all meng Dokumenter',
    expectedSentence: 'Ech hu all meng Dokumenter',
    hint: 'Placez le verbe en deuxième position.',
    context: 'Se féliciter renforce la motivation avant le rendez-vous.'
  },
  {
    id: 'u20_cultural_digital',
    type: 'cultural_context',
    vocabularyItem: unit20Vocabulary[8],
    question: 'Quel portail vous permet de déposer une demande en ligne ?',
    options: ['Digital Lëtzebuerg', 'Bierger-Center', 'Gemeng'],
    correctAnswer: 'Digital Lëtzebuerg',
    context: 'Utiliser le numérique simplifie vos démarches où que vous soyez.'
  }
]

export const learningUnit20: LearningUnit = {
  id: 'unit_20',
  title: 'Administrativ Demarchen',
  description: 'Préparez vos documents et dialogues pour les démarches courantes.',
  level: 'A2',
  vocabulary: unit20Vocabulary,
  exercises: generateUnit20Exercises(),
  targetScore: 80,
  estimatedTime: 8
}
