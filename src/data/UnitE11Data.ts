import { LearningUnit } from '../types/LearningTypes';

/**
 * UNIT E11 - WÉI ASS DENG TELEFONSNUMMER?
 * ==========================================
 * Theme: Phone numbers and telephone communication
 * Focus: Numbers 6-10, phone number exchange, making calls
 *
 * Learning Objectives:
 * - Master numbers 6-10 in Luxembourgish
 * - Give and ask for phone numbers
 * - Use telephone-related vocabulary
 * - Practice authentic Luxembourg phone number formats
 *
 * Cultural Context:
 * - Luxembourg mobile numbers: 6XX XXX XXX format
 * - Common prefixes: 621, 691, 661, etc.
 * - Landline numbers: 2X XX XX format
 */

const UnitE11Data: LearningUnit = {
  id: 'unit_e11',
  title: 'E11 - Telefonsnummer',
  description: "Donnez et demandez un numéro de téléphone. Complétez vos nombres de 1 à 10 et pratiquez les conversations téléphoniques.",
  level: 'A1',

  vocabulary: [
    // === NEW VOCABULARY (6 words) ===
    {
      id: 'telefonsnummer',
      luxembourgish: 'Telefonsnummer',
      french: 'numéro de téléphone',
      pronunciation: 'te-le-FONS-num-er',
      usage: 'Numéro pour appeler quelqu\'un'
    },
    {
      id: 'nummer',
      luxembourgish: 'Nummer',
      french: 'numéro',
      pronunciation: 'NUM-er',
      usage: 'Chiffre ou série de chiffres'
    },
    {
      id: 'ruffen',
      luxembourgish: 'ruffen',
      french: 'appeler',
      pronunciation: 'RUF-en',
      usage: 'Téléphoner à quelqu\'un'
    },
    {
      id: 'sms',
      luxembourgish: 'SMS',
      french: 'SMS/texto',
      pronunciation: 'es-em-es',
      usage: 'Message texte'
    },
    {
      id: 'handy',
      luxembourgish: 'Handy',
      french: 'téléphone portable',
      pronunciation: 'HAN-dee',
      usage: 'Appareil de communication mobile'
    },
    {
      id: 'sechs',
      luxembourgish: 'sechs',
      french: 'six',
      pronunciation: 'zeks',
      usage: 'Nombre 6'
    },
    // === ADDITIONAL NUMBERS (4 more) ===
    {
      id: 'siwen',
      luxembourgish: 'siwen',
      french: 'sept',
      pronunciation: 'ZEE-ven',
      usage: 'Nombre 7'
    },
    {
      id: 'aacht',
      luxembourgish: 'aacht',
      french: 'huit',
      pronunciation: 'akht',
      usage: 'Nombre 8'
    },
    {
      id: 'neng',
      luxembourgish: 'néng',
      french: 'neuf',
      pronunciation: 'nayng',
      usage: 'Nombre 9'
    },
    {
      id: 'zeng',
      luxembourgish: 'zéng',
      french: 'dix',
      pronunciation: 'tsayng',
      usage: 'Nombre 10'
    },
    // === REVIEW VOCABULARY (2 words) ===
    {
      id: 'joer_review',
      luxembourgish: 'Joer',
      french: 'ans/années',
      pronunciation: 'YOO-er',
      usage: 'Unité de temps (révision de E10)'
    },
    {
      id: 'eent_review',
      luxembourgish: 'eent',
      french: 'un',
      pronunciation: 'aynt',
      usage: 'Nombre 1 (révision)'
    }
  ],

  exercises: [
    // ===== EXERCISE 1: Audio Recognition - Phone Number =====
    {
      id: 'e11_ex1_audio_phone',
      type: 'audio_recognition',
      vocabularyItem: {
        id: 'telefonsnummer',
        luxembourgish: 'Telefonsnummer',
        french: 'numéro de téléphone',
        pronunciation: 'te-le-FONS-num-er',
        usage: 'Numéro pour appeler quelqu\'un'
      },
      question: 'Écoutez le numéro de téléphone. Quel est le bon numéro ?',
      correctAnswer: '691 357',
      options: ['691 357', '621 347', '681 357', '691 537'],
      context: 'Au Luxembourg, les numéros mobiles commencent souvent par 6'
    },

    // ===== EXERCISE 2: Word Pairing - Numbers 6-10 =====
    {
      id: 'e11_ex2_pairing_numbers',
      type: 'word_pairing',
      vocabularyItem: {
        id: 'sechs',
        luxembourgish: 'sechs',
        french: 'six',
        pronunciation: 'zeks',
        usage: 'Nombre 6'
      },
      question: 'Associez les nombres luxembourgeois (6-10) avec leur traduction française',
      correctAnswer: 'all_matched',
      wordPairs: [
        { id: 'pair_6', left: 'sechs', right: 'six' },
        { id: 'pair_7', left: 'siwen', right: 'sept' },
        { id: 'pair_8', left: 'aacht', right: 'huit' },
        { id: 'pair_9', left: 'néng', right: 'neuf' },
        { id: 'pair_10', left: 'zéng', right: 'dix' }
      ],
      columnLabels: {
        left: 'Luxembourgeois',
        right: 'Français'
      },
      context: 'Vous maîtrisez maintenant les nombres de 1 à 10 en luxembourgeois !'
    },

    // ===== EXERCISE 3: Pattern Recognition - Phone Grouping =====
    {
      id: 'e11_ex3_pattern_format',
      type: 'pattern_recognition',
      vocabularyItem: {
        id: 'handy',
        luxembourgish: 'Handy',
        french: 'téléphone portable',
        pronunciation: 'HAN-dee',
        usage: 'Appareil de communication mobile'
      },
      question: 'Au Luxembourg, comment sont groupés les chiffres dans un numéro de portable ?',
      correctAnswer: '6XX XXX XXX',
      options: ['6XX XXX XXX', '06 XX XX XX XX', 'XXX-XXX-XXXX', '+352 XXXXXXXX'],
      context: 'Les numéros mobiles luxembourgeois suivent le format 6XX XXX XXX (9 chiffres commençant par 6)'
    },

    // ===== EXERCISE 4: Phrase Completion - My Phone Number =====
    {
      id: 'e11_ex4_completion_my_number',
      type: 'phrase_completion',
      vocabularyItem: {
        id: 'meng_telefonsnummer',
        luxembourgish: 'Meng Telefonsnummer',
        french: 'Mon numéro de téléphone',
        pronunciation: 'meng te-le-FONS-num-er',
        usage: 'Expression pour donner son numéro'
      },
      question: 'Complétez la phrase : "Meng Telefonsnummer ___ 621 345 678"',
      correctAnswer: 'ass',
      options: ['ass', 'sinn', 'huet', 'gëtt'],
      context: 'On utilise "ass" (est) à la 3e personne'
    },

    // ===== EXERCISE 5: Translation - My Number Is =====
    {
      id: 'e11_ex5_translation_my_number',
      type: 'translation',
      vocabularyItem: {
        id: 'telefonsnummer_ginn',
        luxembourgish: 'Telefonsnummer ginn',
        french: 'donner le numéro de téléphone',
        pronunciation: 'te-le-FONS-num-er gin',
        usage: 'Communiquer son numéro'
      },
      question: 'Traduisez en luxembourgeois : "Mon numéro de téléphone est le 691 234 567"',
      correctAnswer: 'Meng Telefonsnummer ass 691 234 567',
      options: [
        'Meng Telefonsnummer ass 691 234 567',
        'Mäin Telefonsnummer ass 691 234 567',
        'Deng Telefonsnummer ass 691 234 567',
        'Ech hunn Telefonsnummer 691 234 567'
      ],
      context: '"Meng Telefonsnummer ass..." utilise "meng" (mon/ma/mes) pour les possessifs'
    },

    // ===== EXERCISE 6: Sentence Construction - Give Number =====
    {
      id: 'e11_ex6_sentence_give_number',
      type: 'sentence_construction',
      vocabularyItem: {
        id: 'hei_ass',
        luxembourgish: 'Hei ass',
        french: 'Voici',
        pronunciation: 'hay ass',
        usage: 'Présenter quelque chose'
      },
      question: 'Construisez la phrase : "Voici mon numéro de téléphone"',
      correctAnswer: 'Hei ass meng Telefonsnummer',
      expectedSentence: 'Hei ass meng Telefonsnummer',
      wordBank: ['Hei', 'ass', 'meng', 'Telefonsnummer', 'deng', 'Nummer', 'ech', 'sinn'],
      context: '"Hei" = voici/ici'
    },

    // ===== EXERCISE 7: Word Ordering - I Can Call You =====
    {
      id: 'e11_ex7_order_call_you',
      type: 'word_ordering',
      vocabularyItem: {
        id: 'ruffen_uruffen',
        luxembourgish: 'uruffen',
        french: 'appeler',
        pronunciation: 'OO-ruf-en',
        usage: 'Téléphoner à quelqu\'un'
      },
      question: 'Mettez dans l\'ordre : "Je peux t\'appeler"',
      correctAnswer: 'Ech kann dech uruffen',
      expectedSentence: 'Ech kann dech uruffen',
      wordBank: ['uruffen', 'kann', 'dech', 'Ech', 'mech', 'bass', 'sinn'],
      context: '"kann" = peux/peut, "uruffen" = appeler/téléphoner'
    },

    // ===== EXERCISE 8: Translation - Can You Call =====
    {
      id: 'e11_ex8_translation_can_call',
      type: 'translation',
      vocabularyItem: {
        id: 'kanns_du',
        luxembourgish: 'Kanns du',
        french: 'Peux-tu',
        pronunciation: 'kanst doo',
        usage: 'Question avec modal "können"'
      },
      question: 'Traduisez en luxembourgeois : "Tu peux m\'appeler ?"',
      correctAnswer: 'Kanns du mech uruffen?',
      options: [
        'Kanns du mech uruffen?',
        'Kann ech dech uruffen?',
        'Bass du uruffen?',
        'Wëlls du mech uruffen?'
      ],
      context: '"Kanns du" (peux-tu) + "mech" (me) + "uruffen" (appeler)'
    },

    // ===== EXERCISE 9: Dialogue Completion - Exchange Numbers =====
    {
      id: 'e11_ex9_dialogue_exchange',
      type: 'dialogue_completion',
      vocabularyItem: {
        id: 'sms',
        luxembourgish: 'SMS',
        french: 'SMS/texto',
        pronunciation: 'es-em-es',
        usage: 'Message texte'
      },
      question: 'Complétez le dialogue : Marie demande à Tom son numéro. Tom répond : "Jo, meng Nummer ___ 621 345 789."',
      correctAnswer: 'ass',
      options: ['ass', 'sinn', 'huet', 'gëtt'],
      context: '"schécken dir eng SMS" = t\'envoyer un SMS'
    },

    // ===== EXERCISE 10: Sentence Construction - Voicemail =====
    {
      id: 'e11_ex10_sentence_voicemail',
      type: 'sentence_construction',
      vocabularyItem: {
        id: 'ruff_un',
        luxembourgish: 'Ruff...un',
        french: 'Appelle',
        pronunciation: 'roof...oon',
        usage: 'Impératif de appeler'
      },
      question: 'Construisez : "Appelle-moi au numéro 691 234 567"',
      correctAnswer: 'Ruff mech un op 691 234 567',
      expectedSentence: 'Ruff mech un op 691 234 567',
      wordBank: ['Ruff', 'mech', 'un', 'op', '691', '234', '567', 'dech', 'mir', 'ass'],
      context: '"Ruff...un" = appeler (impératif)'
    },

    // ===== EXERCISE 11: Speech Recognition - My Phone Number =====
    {
      id: 'e11_ex11_speech_my_number',
      type: 'speech_recognition',
      vocabularyItem: {
        id: 'nummer_soen',
        luxembourgish: 'Nummer soen',
        french: 'dire le numéro',
        pronunciation: 'NUM-er ZOO-en',
        usage: 'Prononcer son numéro de téléphone'
      },
      question: 'Prononcez votre numéro de téléphone en luxembourgeois : "Meng Telefonsnummer ass 621 357 890"',
      correctAnswer: 'Meng Telefonsnummer ass sechs eent zwee dräi fënnef siwen aacht néng null',
      expectedSentence: 'Meng Telefonsnummer ass sechs eent zwee dräi fënnef siwen aacht néng null',
      hint: 'Prononcez chaque chiffre séparément',
      context: 'Vous pouvez maintenant dire votre numéro de téléphone en luxembourgeois'
    }
  ],

  targetScore: 80,
  estimatedTime: 6
};

export const learningUnitE11 = UnitE11Data;
export default UnitE11Data;
