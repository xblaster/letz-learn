import { LearningUnit } from '../types/LearningTypes';

/**
 * UNIT E13 - REEGELMÉISSEG VERBEN
 * ==========================================
 * Theme: Regular verbs (action words)
 * Focus: Common regular verbs and their conjugation patterns
 *
 * Learning Objectives:
 * - Learn 6 essential regular verbs in Luxembourgish
 * - Understand basic verb conjugation patterns
 * - Use verbs in simple present tense sentences
 * - Apply verbs in meaningful everyday contexts
 *
 * Pedagogical Approach:
 * - Frame as "Action Words" not "Grammar"
 * - Show immediate utility in conversations
 * - Include conjugation patterns always in context
 * - Progressive complexity: start with infinitives, then conjugated forms
 *
 * Cultural Context:
 * - Common activities in Luxembourg
 * - Language learning context (learning Luxembourgish)
 * - Shopping and daily routines
 */

const UnitE13Data: LearningUnit = {
  id: 'unit_e13',
  title: 'E13 - Reegelméisseg Verben',
  description: "Maîtrisez les verbes réguliers luxembourgeois : parler, apprendre, acheter, jouer. Élargissez vos possibilités d'expression.",
  level: 'A1',

  vocabulary: [
    // === NEW VOCABULARY (6 verbs) ===
    {
      id: 'schwatzen',
      luxembourgish: 'schwätzen',
      french: 'parler/bavarder',
      pronunciation: 'SHVETS-en',
      usage: 'Verbe de communication, discuter'
    },
    {
      id: 'leieren',
      luxembourgish: 'léieren',
      french: 'apprendre',
      pronunciation: 'LAY-er-en',
      usage: 'Acquérir des connaissances, étudier'
    },
    {
      id: 'kafen',
      luxembourgish: 'kafen',
      french: 'acheter',
      pronunciation: 'KAH-fen',
      usage: 'Faire des achats, acquérir quelque chose'
    },
    {
      id: 'spillen',
      luxembourgish: 'spillen',
      french: 'jouer',
      pronunciation: 'SHPIL-en',
      usage: 'S\'amuser, pratiquer un jeu ou un sport'
    },
    {
      id: 'froen',
      luxembourgish: 'froen',
      french: 'demander',
      pronunciation: 'FROO-en',
      usage: 'Poser une question'
    },
    {
      id: 'lauschteren',
      luxembourgish: 'lauschteren',
      french: 'écouter',
      pronunciation: 'low-SHTER-en',
      usage: 'Prêter attention aux sons, écouter attentivement'
    },
    // === REVIEW VOCABULARY (2 words) ===
    {
      id: 'famill_review',
      luxembourgish: 'Famill',
      french: 'famille',
      pronunciation: 'fa-MIL',
      usage: 'Groupe de personnes apparentées (révision de E12)'
    },
    {
      id: 'kanner_review',
      luxembourgish: 'Kanner',
      french: 'enfants',
      pronunciation: 'KAN-er',
      usage: 'Pluriel de Kand (révision de E12)'
    }
  ],

  exercises: [
    // ===== EXERCISE 1: Audio Recognition - Which Verb =====
    {
      id: 'e13_ex1_audio_which_verb',
      type: 'audio_recognition',
      vocabularyItem: {
        id: 'verb_listening',
        luxembourgish: 'Verbe lauschteren',
        french: 'écouter les verbes',
        pronunciation: 'verb low-SHTER-en',
        usage: 'Identifier les verbes à l\'oreille'
      },
      question: 'Écoutez la phrase. Quel verbe entendez-vous ?',
      correctAnswer: 'léieren',
      options: ['léieren', 'schwätzen', 'spillen', 'kafen'],
      context: 'Audio: "Ech léieren Lëtzebuergesch." (J\'apprends le luxembourgeois)'
    },

    // ===== EXERCISE 2: Word Pairing - Infinitives =====
    {
      id: 'e13_ex2_pairing_infinitives',
      type: 'word_pairing',
      vocabularyItem: {
        id: 'verb_infinitives',
        luxembourgish: 'Infinitiv',
        french: 'infinitif',
        pronunciation: 'in-fi-ni-TEEF',
        usage: 'Forme de base du verbe'
      },
      question: 'Associez les verbes luxembourgeois (infinitifs) avec leur traduction française',
      correctAnswer: 'all_matched',
      wordPairs: [
        { id: 'pair_schwatzen', left: 'schwätzen', right: 'parler' },
        { id: 'pair_leieren', left: 'léieren', right: 'apprendre' },
        { id: 'pair_kafen', left: 'kafen', right: 'acheter' },
        { id: 'pair_spillen', left: 'spillen', right: 'jouer' },
        { id: 'pair_froen', left: 'froen', right: 'demander' }
      ],
      columnLabels: {
        left: 'Luxembourgeois',
        right: 'Français'
      },
      context: 'Ces verbes suivent des conjugaisons régulières et prévisibles'
    },

    // ===== EXERCISE 3: Pattern Recognition - Verb Endings =====
    {
      id: 'e13_ex3_pattern_verb_endings',
      type: 'pattern_recognition',
      vocabularyItem: {
        id: 'conjugation_pattern',
        luxembourgish: 'Konjugatiounsmuster',
        french: 'modèle de conjugaison',
        pronunciation: 'kon-ju-ga-tsi-OUNS-mus-ter',
        usage: 'Structure de conjugaison des verbes'
      },
      question: 'Quel est le modèle de conjugaison pour "ech" (je) avec les verbes réguliers ?',
      correctAnswer: 'Ech + verbe sans -en',
      options: [
        'Ech + verbe sans -en',
        'Ech + verbe + -t',
        'Ech + verbe complet',
        'Ech + verbe + -en'
      ],
      context: 'Exemple : schwätzen → Ech schwätzen, léieren → Ech léieren. À la 1ère personne, on garde souvent la forme complète.'
    },

    // ===== EXERCISE 4: Phrase Completion - I Learn/Speak =====
    {
      id: 'e13_ex4_completion_conjugation',
      type: 'phrase_completion',
      vocabularyItem: {
        id: 'ech_verb',
        luxembourgish: 'Ech + Verb',
        french: 'Je + verbe',
        pronunciation: 'esh + verb',
        usage: 'Conjugaison à la première personne'
      },
      question: 'Complétez : "Ech ___ Lëtzebuergesch" (J\'apprends le luxembourgeois)',
      correctAnswer: 'léieren',
      options: ['léieren', 'schwätzen', 'spillen', 'froen'],
      context: 'Le contexte "Lëtzebuergesch" (luxembourgeois) indique qu\'on parle d\'apprentissage'
    },

    // ===== EXERCISE 5: Translation - I Speak =====
    {
      id: 'e13_ex5_translation_i_speak',
      type: 'translation',
      vocabularyItem: {
        id: 'speak_lux',
        luxembourgish: 'Ech schwätzen Lëtzebuergesch',
        french: 'Je parle luxembourgeois',
        pronunciation: 'esh SHVETS-en lets-e-BOOR-gesh',
        usage: 'Dire qu\'on parle une langue'
      },
      question: 'Traduisez en luxembourgeois : "Je parle luxembourgeois"',
      correctAnswer: 'Ech schwätzen Lëtzebuergesch',
      options: [
        'Ech schwätzen Lëtzebuergesch',
        'Ech spillen Lëtzebuergesch',
        'Ech léieren Lëtzebuergesch',
        'Ech schwätzt Lëtzebuergesch'
      ],
      context: '"schwätzen" = parler/bavarder, utilisé pour les langues et conversations'
    },

    // ===== EXERCISE 6: Sentence Construction - What I\'m Learning =====
    {
      id: 'e13_ex6_sentence_what_learning',
      type: 'sentence_construction',
      vocabularyItem: {
        id: 'learning_statement',
        luxembourgish: 'Ech léieren',
        french: 'J\'apprends',
        pronunciation: 'esh LAY-er-en',
        usage: 'Dire ce qu\'on apprend'
      },
      question: 'Construisez : "J\'apprends le luxembourgeois avec ma famille"',
      correctAnswer: 'Ech léieren Lëtzebuergesch mat menger Famill',
      expectedSentence: 'Ech léieren Lëtzebuergesch mat menger Famill',
      wordBank: ['Ech', 'léieren', 'Lëtzebuergesch', 'mat', 'menger', 'Famill', 'spillen', 'schwätzen', 'Kanner', 'an'],
      context: '"mat" = avec, "menger" = ma/mon (datif après "mat")'
    },

    // ===== EXERCISE 7: Word Ordering - Children Play =====
    {
      id: 'e13_ex7_order_children_play',
      type: 'word_ordering',
      vocabularyItem: {
        id: 'children_play',
        luxembourgish: 'D\'Kanner spillen',
        french: 'Les enfants jouent',
        pronunciation: 'd KAN-er SHPIL-en',
        usage: 'Dire que les enfants jouent'
      },
      question: 'Mettez dans l\'ordre : "Les enfants jouent dans le jardin"',
      correctAnswer: 'D\'Kanner spillen am Gaart',
      expectedSentence: 'D\'Kanner spillen am Gaart',
      wordBank: ['spillen', 'am', 'Gaart', 'D\'Kanner', 'léieren', 'an', 'der', 'Këch'],
      context: '"am Gaart" = dans le jardin (am = an + dem, datif masculin)'
    },

    // ===== EXERCISE 8: Translation - We Buy =====
    {
      id: 'e13_ex8_translation_we_buy',
      type: 'translation',
      vocabularyItem: {
        id: 'mir_kafen',
        luxembourgish: 'Mir kafen',
        french: 'Nous achetons',
        pronunciation: 'meer KAH-fen',
        usage: 'Verbe acheter au pluriel'
      },
      question: 'Traduisez : "Nous achetons de la nourriture au marché"',
      correctAnswer: 'Mir kafen Iessen um Maart',
      options: [
        'Mir kafen Iessen um Maart',
        'Ech kafen Iessen um Maart',
        'Mir spillen Iessen um Maart',
        'Mir léieren Iessen um Maart'
      ],
      context: '"Mir kafen" = nous achetons, "Iessen" = nourriture, "um Maart" = au marché'
    },

    // ===== EXERCISE 9: Dialogue Completion - Verbs in Conversation =====
    {
      id: 'e13_ex9_dialogue_verbs',
      type: 'dialogue_completion',
      vocabularyItem: {
        id: 'dialogue_verbs',
        luxembourgish: 'Gespréich mat Verben',
        french: 'conversation avec verbes',
        pronunciation: 'ge-SHPRAYSH mat verb-en',
        usage: 'Utiliser plusieurs verbes dans un dialogue'
      },
      question: 'Marie : "Wat léiers du?" Tom : "Ech ___ Lëtzebuergesch. A wat spills du?"',
      correctAnswer: 'léieren',
      options: ['léieren', 'spillen', 'kafen', 'froen'],
      context: 'Tom répond à la question "Qu\'apprends-tu ?" en disant "J\'apprends le luxembourgeois"'
    },

    // ===== EXERCISE 10: Sentence Construction - Daily Verbs =====
    {
      id: 'e13_ex10_sentence_daily_verbs',
      type: 'sentence_construction',
      vocabularyItem: {
        id: 'daily_activities',
        luxembourgish: 'Alldeeglech Aktivitéiten',
        french: 'activités quotidiennes',
        pronunciation: 'all-dag-lesh ak-ti-vi-TAY-ten',
        usage: 'Actions qu\'on fait chaque jour'
      },
      question: 'Construisez : "Le matin, j\'apprends, je parle et j\'écoute"',
      correctAnswer: 'Moies léieren ech, schwätzen ech a lauschteren ech',
      expectedSentence: 'Moies léieren ech, schwätzen ech a lauschteren ech',
      wordBank: ['Moies', 'léieren', 'ech,', 'schwätzen', 'a', 'lauschteren', 'spillen', 'kafen', 'froen', 'mir'],
      context: '"Moies" = le matin, "a" = et. Structure inversée : verbe + ech (après expression de temps)'
    },

    // ===== EXERCISE 11: Speech Recognition - Verb Conjugation =====
    {
      id: 'e13_ex11_speech_verb_conjugation',
      type: 'speech_recognition',
      vocabularyItem: {
        id: 'verb_pronunciation',
        luxembourgish: 'Verb ausschwätzen',
        french: 'prononcer les verbes',
        pronunciation: 'verb OWS-shvets-en',
        usage: 'Dire les verbes à voix haute'
      },
      question: 'Prononcez : "J\'apprends et je parle luxembourgeois"',
      correctAnswer: 'Ech léieren a schwätzen Lëtzebuergesch',
      expectedSentence: 'Ech léieren a schwätzen Lëtzebuergesch',
      hint: 'Utilisez "a" (et) entre les deux verbes',
      context: 'On peut utiliser deux verbes avec le même sujet sans répéter "ech"'
    },

    // ===== EXERCISE 12: Pattern Recognition - Verb Usage Context =====
    {
      id: 'e13_ex12_pattern_verb_usage',
      type: 'pattern_recognition',
      vocabularyItem: {
        id: 'verb_context',
        luxembourgish: 'Verbkontext',
        french: 'contexte du verbe',
        pronunciation: 'verb-kon-tekst',
        usage: 'Situation appropriée pour un verbe'
      },
      question: 'Quel verbe utilisez-vous dans ce contexte : "Au magasin, je ___ des pommes" ?',
      correctAnswer: 'kafen',
      options: ['kafen', 'spillen', 'léieren', 'lauschteren'],
      context: 'Au magasin, on achète (kafen) des choses. Les autres verbes ne conviennent pas à ce contexte.'
    }
  ],

  targetScore: 80,
  estimatedTime: 7
};

export const learningUnitE13 = UnitE13Data;
export default UnitE13Data;
