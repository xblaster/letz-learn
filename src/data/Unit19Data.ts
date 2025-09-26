import { Exercise, LearningUnit, VocabularyItem } from '../types/LearningTypes'

// Section 3 — Vie pratique et autonomie (A2)
// S3U3 : Banque et finances

export const unit19Vocabulary: VocabularyItem[] = [
  {
    id: 's3u3_kont',
    luxembourgish: 'Kont',
    french: 'compte',
    pronunciation: 'KONT',
    usage: 'Ouvrir un compte bancaire au Luxembourg.'
  },
  {
    id: 's3u3_spuerkeess',
    luxembourgish: 'Spuerkeess',
    french: 'Caisse d’Épargne (banque)',
    pronunciation: 'SHPOOR-kess',
    usage: 'Citer l’institution bancaire locale.'
  },
  {
    id: 's3u3_virement',
    luxembourgish: 'Virement',
    french: 'virement',
    pronunciation: 'VIR-ra-mong',
    usage: 'Parler d’un transfert bancaire.'
  },
  {
    id: 's3u3_fraisen',
    luxembourgish: 'Fraise(n)',
    french: 'frais',
    pronunciation: 'FRAI-zen',
    usage: 'Demander le coût des services bancaires.'
  },
  {
    id: 's3u3_rib',
    luxembourgish: 'RIB',
    french: 'relevé d’identité bancaire',
    pronunciation: 'RIB',
    usage: 'Fournir ses coordonnées bancaires.'
  },
  {
    id: 's3u3_disponibel',
    luxembourgish: 'Disponibel',
    french: 'disponible',
    pronunciation: 'dis-po-NI-bel',
    usage: 'Vérifier le solde accessible.'
  },
  {
    id: 's3u3_spuerbuch',
    luxembourgish: 'Spuerbuch',
    french: 'livret d’épargne',
    pronunciation: 'SHPOOR-bouh',
    usage: 'Épargner pour des projets futurs.'
  },
  {
    id: 's3u3_daueroptrag',
    luxembourgish: 'Daueroptrag',
    french: 'ordre permanent',
    pronunciation: 'DAU-er-opp-trak',
    usage: 'Mettre en place un paiement automatique.'
  },
  {
    id: 's3u3_bankkaart',
    luxembourgish: 'Bankkaart',
    french: 'carte bancaire',
    pronunciation: 'BANK-kaart',
    usage: 'Recevoir et utiliser sa carte.'
  },
  {
    id: 's3u3_pin',
    luxembourgish: 'PIN',
    french: 'code PIN',
    pronunciation: 'PIN',
    usage: 'Sécuriser ses opérations.'
  }
]

export const generateUnit19Exercises = (): Exercise[] => [
  {
    id: 's3u3_reactivation_presentation',
    type: 'dialogue_completion',
    vocabularyItem: unit19Vocabulary[0],
    question: 'Complétez : « Ech wëll en ___ bei der Spuerkeess opmaachen. »',
    options: ['Kont', 'PIN', 'Spuerbuch'],
    correctAnswer: 'Kont',
    context: 'Réactiver les formules de demande polie.'
  },
  {
    id: 's3u3_institution',
    type: 'translation',
    vocabularyItem: unit19Vocabulary[1],
    question: 'Quel mot cite la banque luxembourgeoise historique ?',
    options: ['Spuerkeess', 'Virement', 'Bankkaart'],
    correctAnswer: 'Spuerkeess',
    context: 'Se repérer dans les démarches administratives.'
  },
  {
    id: 's3u3_virement',
    type: 'pattern_recognition',
    vocabularyItem: unit19Vocabulary[2],
    question: 'Quelle phrase décrit un virement ?',
    options: [
      'Ech maachen e Virement op mäi Spuerbuch.',
      'Ech reservéieren en Ticket.',
      'Ech kafen e Reemantel.'
    ],
    correctAnswer: 'Ech maachen e Virement op mäi Spuerbuch.',
    context: 'Simuler l’ouverture d’un compte courant.'
  },
  {
    id: 's3u3_frais',
    type: 'dialogue_completion',
    vocabularyItem: unit19Vocabulary[3],
    question: 'Choisissez la question pour connaître les frais :',
    options: [
      'Wéi héich sinn d’Fraise fir dëse Kont?',
      'Wou ass meng Bankkaart?',
      'Wéini kréien ech mäi PIN?'
    ],
    correctAnswer: 'Wéi héich sinn d’Fraise fir dëse Kont?',
    context: 'Clarifier les coûts lors de l’entretien bancaire.'
  },
  {
    id: 's3u3_documents',
    type: 'phrase_completion',
    vocabularyItem: unit19Vocabulary[4],
    question: 'Complétez : « Ech schécken de ___ un d’Gemeng. »',
    options: ['RIB', 'PIN', 'Spuerkeess'],
    correctAnswer: 'RIB',
    context: 'Transmettre les coordonnées bancaires pour un salaire.'
  },
  {
    id: 's3u3_ordre',
    type: 'dialogue_completion',
    vocabularyItem: unit19Vocabulary[7],
    question: 'Quelle phrase met en place un ordre permanent ?',
    options: [
      'Ech riichten en Daueroptrag fir d’Locatioun an.',
      'Ech froen no der Gesondheetskaart.',
      'Ech huelen d’Antibiotikum all Moien.'
    ],
    correctAnswer: 'Ech riichten en Daueroptrag fir d’Locatioun an.',
    context: 'Automatiser le paiement du loyer mensuel.'
  },
  {
    id: 's3u3_securite',
    type: 'sentence_construction',
    vocabularyItem: unit19Vocabulary[9],
    question: 'Assemblez la recommandation de sécurité.',
    wordBank: ['Gëff', 'däi', 'PIN', 'net', 'wéider.'],
    correctAnswer: 'Gëff däi PIN net weider.',
    expectedSentence: 'Gëff däi PIN net weider.',
    context: 'Sensibiliser aux bonnes pratiques bancaires.'
  }
]

export const learningUnit19: LearningUnit = {
  id: 'S3U3',
  title: 'Banque et finances',
  description:
    'Je peux ouvrir un compte, clarifier les frais bancaires et mettre en place des virements sécurisés.',
  level: 'A2',
  vocabulary: unit19Vocabulary,
  exercises: generateUnit19Exercises(),
  targetScore: 88,
  estimatedTime: 10
}
