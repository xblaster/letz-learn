import { VocabularyItem } from '../types/LearningTypes'

export interface VocabularyQuizItem extends VocabularyItem {
  category: 'salutations' | 'politesse' | 'conversation' | 'questions' | 'nourriture'
}

export const vocabularyQuizItems: VocabularyQuizItem[] = [
  {
    id: 'moien',
    luxembourgish: 'Moien',
    french: 'Bonjour',
    pronunciation: 'MOY-en',
    usage: "Formule chaleureuse pour dire bonjour et ouvrir un échange avec un sourire.",
    category: 'salutations'
  },
  {
    id: 'addi',
    luxembourgish: 'Äddi',
    french: 'Au revoir',
    pronunciation: 'AED-di',
    usage: "Permet de prendre congé avec politesse tout en laissant une impression positive.",
    category: 'salutations'
  },
  {
    id: 'merci',
    luxembourgish: 'Merci',
    french: 'Merci',
    pronunciation: 'MER-see',
    usage: "Exprime une gratitude sincère qui encourage la bienveillance réciproque.",
    category: 'politesse'
  },
  {
    id: 'pardon',
    luxembourgish: 'Pardon',
    french: 'Excusez-moi',
    pronunciation: 'PAR-don',
    usage: "Idéal pour attirer l’attention avec douceur ou présenter des excuses respectueuses.",
    category: 'politesse'
  },
  {
    id: 'wei_geet_et',
    luxembourgish: 'Wéi geet et?',
    french: 'Comment allez-vous?',
    pronunciation: 'VAY gate et',
    usage: "Invite l’interlocuteur à partager son ressenti et renforce la connexion humaine.",
    category: 'conversation'
  },
  {
    id: 'ech_verstinn_net',
    luxembourgish: 'Ech verstinn net',
    french: 'Je ne comprends pas',
    pronunciation: 'EHKH fer-STIN net',
    usage: "Exprime clairement un besoin d’aide tout en restant respectueux et motivé.",
    category: 'conversation'
  },
  {
    id: 'wou_ass',
    luxembourgish: 'Wou ass...?',
    french: 'Où est...?',
    pronunciation: 'VOU ass',
    usage: "Question utile pour se repérer et favoriser les échanges pratiques au quotidien.",
    category: 'questions'
  },
  {
    id: 'weivill_kascht_dat',
    luxembourgish: 'Wéivill kascht dat?',
    french: 'Combien ça coûte?',
    pronunciation: 'VAY-vill KASHT dat',
    usage: "Permet de gérer ses achats avec assurance et de pratiquer le luxembourgeois en situation réelle.",
    category: 'questions'
  },
  {
    id: 'waasser',
    luxembourgish: 'Waasser',
    french: 'Eau',
    pronunciation: 'VAH-ser',
    usage: "Mot indispensable pour commander à boire et prendre soin de soi en toute circonstance.",
    category: 'nourriture'
  },
  {
    id: 'kaffi',
    luxembourgish: 'Kaffi',
    french: 'Café',
    pronunciation: 'KAF-fi',
    usage: "Idéal pour partager une pause conviviale et tisser des liens autour d’une boisson chaude.",
    category: 'nourriture'
  }
]
