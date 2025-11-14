import { LearningUnit, VocabularyItem, Exercise } from '../types/LearningTypes';

/**
 * UNIT E07 - EXERCICEN 1 (REVIEW UNIT)
 * =====================================
 * 🎓 FIRST MILESTONE - A1 FOUNDATION COMPLETE!
 *
 * This is the first major review unit, consolidating all learning from E01-E06.
 * Structured as a "Boss Level" celebration rather than a traditional test.
 *
 * Narrative Theme: Marie arrives in Luxembourg and introduces herself to a neighbor
 *
 * Vocabulary Distribution:
 * - 40% from E05-E06 (recent): verbs, locations, articles
 * - 30% from E03-E04 (medium-term): questions, negation, basics
 * - 30% from E01-E02 (long-term): greetings, introductions
 *
 * XP BONUS: This unit awards 150% normal XP for completion!
 */

// Review vocabulary from E01-E06
const vocabularyE07: VocabularyItem[] = [
    // ===== FROM E01-E02 (Long-term retention - 30%) =====
    {
      id: 'moien',
      luxembourgish: 'Moien',
      french: 'Bonjour',
      pronunciation: 'MOY-en',
      usage: 'The most common Luxembourgish greeting'
    },
    {
      id: 'ech_sinn',
      luxembourgish: 'Ech sinn',
      french: 'Je suis',
      pronunciation: 'ekh zin',
      usage: 'Essential verb for self-introduction'
    },
    {
      id: 'main_numm_ass',
      luxembourgish: 'Mäin Numm ass',
      french: 'Mon nom est',
      pronunciation: 'mine noom ass',
      usage: 'Formal way to introduce yourself'
    },
    {
      id: 'wei_geet_et',
      luxembourgish: 'Wéi geet et?',
      french: 'Comment allez-vous ?',
      pronunciation: 'vay gayt et',
      usage: 'Common greeting question'
    },
    {
      id: 'merci',
      luxembourgish: 'Merci',
      french: 'Merci',
      pronunciation: 'MEHR-see',
      usage: 'Gratitude expression'
    },
    {
      id: 'letzebuerg',
      luxembourgish: 'Lëtzebuerg',
      french: 'Luxembourg',
      pronunciation: 'LETS-eh-boo-ehrg',
      usage: 'The country name'
    },
    {
      id: 'frou',
      luxembourgish: 'frou',
      french: 'content/contente',
      pronunciation: 'froh',
      usage: 'Expressing happiness'
    },

    // ===== FROM E03-E04 (Medium-term - 30%) =====
    {
      id: 'den',
      luxembourgish: 'den',
      french: 'le (masculin)',
      pronunciation: 'den',
      usage: 'Masculine definite article'
    },
    {
      id: 'dei',
      luxembourgish: 'déi',
      french: 'la (féminin)',
      pronunciation: 'day',
      usage: 'Feminine definite article'
    },
    {
      id: 'dat',
      luxembourgish: 'dat',
      french: 'le/la (neutre)',
      pronunciation: 'daht',
      usage: 'Neuter definite article'
    },
    {
      id: 'wei',
      luxembourgish: 'Wéi?',
      french: 'Comment ?',
      pronunciation: 'vay',
      usage: 'Question word for "how"'
    },
    {
      id: 'wou',
      luxembourgish: 'Wou?',
      french: 'Où ?',
      pronunciation: 'voh',
      usage: 'Question word for "where"'
    },
    {
      id: 'nee',
      luxembourgish: 'nee',
      french: 'non',
      pronunciation: 'nay',
      usage: 'Negative response'
    },
    {
      id: 'net',
      luxembourgish: 'net',
      french: 'ne...pas',
      pronunciation: 'net',
      usage: 'Negation particle'
    },

    // ===== FROM E05-E06 (Recent - 40%) =====
    {
      id: 'ech_sinn_2',
      luxembourgish: 'ech sinn',
      french: 'je suis',
      pronunciation: 'ekh zin',
      usage: 'Present tense of "to be" - 1st person'
    },
    {
      id: 'du_bass',
      luxembourgish: 'du bass',
      french: 'tu es',
      pronunciation: 'doo bahss',
      usage: 'Present tense of "to be" - 2nd person'
    },
    {
      id: 'hunn',
      luxembourgish: 'hunn',
      french: 'avoir',
      pronunciation: 'hoon',
      usage: 'Essential verb "to have"'
    },
    {
      id: 'wunnen',
      luxembourgish: 'wunnen',
      french: 'habiter',
      pronunciation: 'VOO-nen',
      usage: 'Verb for where you live'
    },
    {
      id: 'stad',
      luxembourgish: 'Stad',
      french: 'ville',
      pronunciation: 'shtaht',
      usage: 'Urban location'
    },
    {
      id: 'haus',
      luxembourgish: 'Haus',
      french: 'maison',
      pronunciation: 'house',
      usage: 'Place of residence'
    },
    {
      id: 'nei',
      luxembourgish: 'nei',
      french: 'nouveau/nouvelle',
      pronunciation: 'noy',
      usage: 'Adjective for something new'
    },
    {
      id: 'aus',
      luxembourgish: 'aus',
      french: 'de (provenance)',
      pronunciation: 'ows',
      usage: 'Preposition indicating origin'
    },
    {
      id: 'noper',
      luxembourgish: 'Noper',
      french: 'voisin/voisine',
      pronunciation: 'NOH-per',
      usage: 'Person living nearby'
    },
    {
      id: 'hei',
      luxembourgish: 'hei',
      french: 'ici',
      pronunciation: 'hay',
      usage: 'Location indicator'
    },
    {
      id: 'och',
      luxembourgish: 'och',
      french: 'aussi',
      pronunciation: 'okh',
      usage: 'Addition particle'
    }
];

// Review exercises
const exercisesE07: Exercise[] = [
    // ===== EXERCISE 1: Audio Recognition - Marie's Introduction =====
    {
      id: 'e07_ex01_audio',
      type: 'audio_recognition',
      vocabularyItem: vocabularyE07[0], // Moien
      question: "Écoutez l'introduction de Marie. Qu'avez-vous entendu ?",
      options: [
        "Moien! Mäin Numm ass Marie. Ech sinn nei hei. Ech wunnen an der Stad.",
        "Moien! Ech sinn Marie. Ech sinn frou hei. Ech hunn en Haus.",
        "Moien! Mäin Numm ass Marie. Du bass nei hei. Ech wunnen hei.",
        "Moien! Ech sinn nei. Du wunns an der Stad. Merci!"
      ],
      correctAnswer: "Moien! Mäin Numm ass Marie. Ech sinn nei hei. Ech wunnen an der Stad.",
      context: "MILESTONE CHALLENGE BEGIN! Listen carefully to Marie introducing herself to her new neighbor."
    },

    // ===== EXERCISE 2: Word Pairing - Mixed Review =====
    {
      id: 'e07_ex02_pairing',
      type: 'word_pairing',
      vocabularyItem: vocabularyE07[0], // Moien
      question: "Associez les mots luxembourgeois avec leur traduction française",
      correctAnswer: 'all_matched',
      context: "Review vocabulary from all 6 units - match the pairs!",
      hint: "Cliquez sur un mot luxembourgeois puis sur sa traduction française.",
      columnLabels: {
        left: 'Luxembourgeois',
        right: 'Français'
      },
      wordPairs: [
        { id: 'moien', left: 'Moien', right: 'Bonjour' },
        { id: 'wunnen', left: 'wunnen', right: 'habiter' },
        { id: 'noper', left: 'Noper', right: 'voisin' },
        { id: 'stad', left: 'Stad', right: 'ville' },
        { id: 'nei', left: 'nei', right: 'nouveau' },
        { id: 'hunn', left: 'hunn', right: 'avoir' },
        { id: 'frou', left: 'frou', right: 'content' },
        { id: 'hei', left: 'hei', right: 'ici' }
      ]
    },

    // ===== EXERCISE 3: Pattern Recognition - Grammar Elements =====
    {
      id: 'e07_ex03_pattern',
      type: 'pattern_recognition',
      vocabularyItem: vocabularyE07[1], // ech sinn
      question: "Dans la phrase 'Ech sinn nei hei an der Stad', identifiez l'élément grammatical",
      options: [
        "ech sinn",
        "nei hei",
        "an der",
        "der Stad"
      ],
      correctAnswer: "ech sinn",
      context: "Recognize the grammatical structure Marie uses to describe herself."
    },

    // ===== EXERCISE 4: Phrase Completion - Marie's Story =====
    {
      id: 'e07_ex04_completion',
      type: 'phrase_completion',
      vocabularyItem: vocabularyE07[17], // wunnen
      question: "Complétez l'introduction de Marie : 'Mäin Numm ___ Marie. Ech ___ nei hei. Ech ___ an der Stad.'",
      wordBank: ["ass", "sinn", "wunnen", "frou", "bass", "hunn", "nei", "och"],
      correctAnswer: "ass",
      expectedSentence: "Mäin Numm ass Marie. Ech sinn nei hei. Ech wunnen an der Stad.",
      context: "Fill in the gaps to reconstruct Marie's full introduction.",
      hint: "Utilisez 'ass' (est), 'sinn' (suis), 'wunnen' (habite)"
    },

    // ===== EXERCISE 5: Translation - Story Sentences =====
    {
      id: 'e07_ex05_translation',
      type: 'translation',
      vocabularyItem: vocabularyE07[20], // nei
      question: "Traduisez en luxembourgeois : 'Je suis nouvelle ici'",
      options: ["Ech sinn nei hei", "Ech wunnen hei", "Du bass nei hei", "Ech hunn hei"],
      correctAnswer: "Ech sinn nei hei",
      context: "Translate a key phrase from Marie's introduction.",
      wordBank: ["Ech", "sinn", "nei", "hei", "wunnen", "Stad", "bass", "du"]
    },

    // ===== EXERCISE 6: Sentence Construction - Answer About Marie =====
    {
      id: 'e07_ex06_construction',
      type: 'sentence_construction',
      vocabularyItem: vocabularyE07[17], // wunnen
      question: "Répondez à la question : 'Wou wunnt Marie?' (Où habite Marie ?)",
      wordBank: ["Marie", "wunnt", "an", "der", "Stad", "Haus", "hei", "bass"],
      correctAnswer: "Marie wunnt an der Stad",
      expectedSentence: "Marie wunnt an der Stad",
      context: "Use what you learned from Marie's introduction to answer this question.",
      hint: "Notez 'wunnt' (3e personne de 'wunnen')"
    },

    // ===== EXERCISE 7: Word Ordering - Scrambled Story Sentences =====
    {
      id: 'e07_ex07_ordering',
      type: 'word_ordering',
      vocabularyItem: vocabularyE07[2], // main numm ass
      question: "Remettez les mots dans le bon ordre pour former la phrase correcte",
      wordBank: ["Mäin", "Numm", "ass", "Marie"],
      correctAnswer: "Mäin Numm ass Marie",
      expectedSentence: "Mäin Numm ass Marie",
      context: "Reconstruct one of Marie's sentences.",
      hint: "L'ordre correct : Mäin Numm ass Marie"
    },

    // ===== EXERCISE 8: Dialogue Completion - Full Conversation =====
    {
      id: 'e07_ex08_dialogue',
      type: 'dialogue_completion',
      vocabularyItem: vocabularyE07[3], // wei geet et
      question: "Marie répond : 'Wéi geet et?' Quelle est la bonne réponse ?",
      options: ["Moien! Et geet gutt, merci.", "Ech sinn Marie.", "Du bass Paul."],
      correctAnswer: "Moien! Et geet gutt, merci.",
      context: "Complete this authentic neighborhood conversation using everything you've learned!"
    },

    // ===== EXERCISE 9: Sentence Construction - Respond to Marie =====
    {
      id: 'e07_ex09_respond',
      type: 'sentence_construction',
      vocabularyItem: vocabularyE07[3], // wei geet et
      question: "Marie demande : 'Wéi geet et?' Créez votre réponse",
      wordBank: ["Et", "geet", "gutt", "merci", "frou", "sinn", "ech", "och"],
      correctAnswer: "Et geet gutt, merci",
      expectedSentence: "Et geet gutt, merci",
      context: "Respond to Marie's greeting naturally.",
      hint: "Une réponse typique : 'Et geet gutt, merci' = Ça va bien, merci"
    },

    // ===== EXERCISE 10: Pronunciation - Marie's Full Introduction =====
    {
      id: 'e07_ex10_pronunciation',
      type: 'pronunciation',
      vocabularyItem: vocabularyE07[0], // Moien
      question: "Prononcez l'introduction complète de Marie",
      correctAnswer: "Moien! Mäin Numm ass Marie. Ech sinn nei hei.",
      expectedSentence: "Moien! Mäin Numm ass Marie. Ech sinn nei hei.",
      context: "BOSS CHALLENGE: Record yourself saying Marie's complete introduction!",
      hint: "Prononcez clairement : MOY-en mine noom ass Marie ekh zin noy hay"
    },

    // ===== EXERCISE 11: Sentence Construction - Introduce Yourself =====
    {
      id: 'e07_ex11_intro',
      type: 'sentence_construction',
      vocabularyItem: vocabularyE07[2], // main numm ass
      question: "Présentez-vous en luxembourgeois : 'Bonjour, mon nom est Marie'",
      wordBank: ["Moien", "mäin", "Numm", "ass", "ech", "sinn", "Marie", "Paul"],
      correctAnswer: "Moien, mäin Numm ass Marie",
      expectedSentence: "Moien, mäin Numm ass Marie",
      context: "FINAL CHALLENGE: Create your own introduction using all learned structures!",
      hint: "Structure : Salutation + mäin Numm ass + prénom"
    },

    // ===== EXERCISE 12: Audio Recognition - Rapid Dialogue =====
    {
      id: 'e07_ex12_finale',
      type: 'audio_recognition',
      vocabularyItem: vocabularyE07[22], // noper
      question: "Écoutez ce dialogue rapide entre Marie et Paul. Que dit Paul à la fin ?",
      options: [
        "Wëllkomm hei!",
        "Merci gutt!",
        "Et geet gutt!",
        "Ech sinn frou!"
      ],
      correctAnswer: "Wëllkomm hei!",
      context: "FINAL BOSS: Listen to native-speed conversation and comprehend the ending!",
      hint: "Paul dit 'Wëllkomm hei!' (Bienvenue ici!). Vous avez complété votre première révision A1 !"
    }
];

const UnitE07Data: LearningUnit = {
  id: 'unit_e07',
  title: 'E07 - Exercicen 1',
  description: "Première révision ! Mettez en pratique tout ce que vous avez appris dans les 6 premières unités. Célébrez votre premier jalon A1 !",
  level: 'A1',
  vocabulary: vocabularyE07,
  exercises: exercisesE07,
  targetScore: 80,
  estimatedTime: 8
};

export const learningUnitE07 = UnitE07Data;
export default UnitE07Data;
