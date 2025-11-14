import { LearningUnit } from '../types/LearningTypes';

/**
 * UNIT E12 - FAMILL A HAUS
 * ==========================================
 * Theme: Family and home
 * Focus: Family members, basic rooms, family relationships
 *
 * Learning Objectives:
 * - Name immediate family members in Luxembourgish
 * - Describe your family composition
 * - Use basic house vocabulary (kitchen)
 * - Form simple sentences about family and home
 *
 * Cultural Context:
 * - Luxembourg family structures and traditions
 * - Using "meng/mäin" (my) with family members
 * - Typical Luxembourg family sizes and living arrangements
 */

const UnitE12Data: LearningUnit = {
  id: 'unit_e12',
  title: 'E12 - Famill a Haus',
  description: "Parlez de votre famille et de votre maison. Vocabulaire des liens familiaux et des pièces principales.",
  level: 'A1',

  vocabulary: [
    // === NEW VOCABULARY (7 words) ===
    {
      id: 'famill',
      luxembourgish: 'Famill',
      french: 'famille',
      pronunciation: 'fa-MIL',
      usage: 'Groupe de personnes apparentées'
    },
    {
      id: 'papp',
      luxembourgish: 'Papp',
      french: 'papa/père',
      pronunciation: 'pap',
      usage: 'Parent masculin'
    },
    {
      id: 'mamm',
      luxembourgish: 'Mamm',
      french: 'maman/mère',
      pronunciation: 'mam',
      usage: 'Parent féminin'
    },
    {
      id: 'brudder',
      luxembourgish: 'Brudder',
      french: 'frère',
      pronunciation: 'BRUD-er',
      usage: 'Frère/sibling masculin'
    },
    {
      id: 'schwester',
      luxembourgish: 'Schwëster',
      french: 'sœur',
      pronunciation: 'shvess-ter',
      usage: 'Sœur/sibling féminin'
    },
    {
      id: 'kanner',
      luxembourgish: 'Kanner',
      french: 'enfants',
      pronunciation: 'KAN-er',
      usage: 'Pluriel de Kand (enfant)'
    },
    {
      id: 'kech',
      luxembourgish: 'Këch',
      french: 'cuisine',
      pronunciation: 'kesh',
      usage: 'Pièce pour cuisiner'
    },
    // === REVIEW VOCABULARY (2 words) ===
    {
      id: 'ruffen_review',
      luxembourgish: 'ruffen',
      french: 'appeler',
      pronunciation: 'RUF-en',
      usage: 'Téléphoner à quelqu\'un (révision de E11)'
    },
    {
      id: 'nummer_review',
      luxembourgish: 'Nummer',
      french: 'numéro',
      pronunciation: 'NUM-er',
      usage: 'Chiffre ou série de chiffres (révision de E11)'
    }
  ],

  exercises: [
    // ===== EXERCISE 1: Audio Recognition - Who Is Speaking =====
    {
      id: 'e12_ex1_audio_family',
      type: 'audio_recognition',
      vocabularyItem: {
        id: 'famill_members',
        luxembourgish: 'Famillmember',
        french: 'membres de la famille',
        pronunciation: 'fa-MIL-mem-ber',
        usage: 'Les personnes dans votre famille'
      },
      question: 'Écoutez : Qui parle ? Identifiez le membre de la famille',
      correctAnswer: 'Mamm',
      options: ['Mamm', 'Papp', 'Brudder', 'Schwëster'],
      context: 'Audio: "Ech sinn d\'Mamm. Ech hunn dräi Kanner."'
    },

    // ===== EXERCISE 2: Word Pairing - Family Members =====
    {
      id: 'e12_ex2_pairing_family',
      type: 'word_pairing',
      vocabularyItem: {
        id: 'family_vocab',
        luxembourgish: 'Famill',
        french: 'famille',
        pronunciation: 'fa-MIL',
        usage: 'Groupe de personnes apparentées'
      },
      question: 'Associez les membres de la famille luxembourgeois avec leur traduction française',
      correctAnswer: 'all_matched',
      wordPairs: [
        { id: 'pair_papp', left: 'Papp', right: 'père' },
        { id: 'pair_mamm', left: 'Mamm', right: 'mère' },
        { id: 'pair_brudder', left: 'Brudder', right: 'frère' },
        { id: 'pair_schwester', left: 'Schwëster', right: 'sœur' },
        { id: 'pair_kanner', left: 'Kanner', right: 'enfants' }
      ],
      columnLabels: {
        left: 'Luxembourgeois',
        right: 'Français'
      },
      context: 'Vocabulaire fondamental pour parler de votre famille'
    },

    // ===== EXERCISE 3: Pattern Recognition - Family vs House =====
    {
      id: 'e12_ex3_pattern_categorize',
      type: 'pattern_recognition',
      vocabularyItem: {
        id: 'categories',
        luxembourgish: 'Kategorien',
        french: 'catégories',
        pronunciation: 'ka-te-go-REE-en',
        usage: 'Groupes de mots'
      },
      question: 'Quel mot appartient à la catégorie "maison" plutôt que "famille" ?',
      correctAnswer: 'Këch',
      options: ['Këch', 'Mamm', 'Brudder', 'Schwëster'],
      context: 'La Këch (cuisine) est une pièce de la maison, pas un membre de la famille'
    },

    // ===== EXERCISE 4: Phrase Completion - My Family =====
    {
      id: 'e12_ex4_completion_mein_family',
      type: 'phrase_completion',
      vocabularyItem: {
        id: 'mein_family',
        luxembourgish: 'Mäin/Meng',
        french: 'Mon/Ma/Mes',
        pronunciation: 'main/meng',
        usage: 'Possessif masculin/féminin-neutre-pluriel'
      },
      question: 'Complétez : "Mäin ___ ass Jean" (parler de votre père)',
      correctAnswer: 'Papp',
      options: ['Papp', 'Mamm', 'Brudder', 'Numm'],
      context: 'On utilise "Mäin" devant les noms masculins comme "Papp"'
    },

    // ===== EXERCISE 5: Translation - Mother in Kitchen =====
    {
      id: 'e12_ex5_translation_mother_kitchen',
      type: 'translation',
      vocabularyItem: {
        id: 'an_der',
        luxembourgish: 'an der',
        french: 'dans la',
        pronunciation: 'an der',
        usage: 'Préposition de lieu avec article féminin'
      },
      question: 'Traduisez en luxembourgeois : "Ma mère est dans la cuisine"',
      correctAnswer: 'Meng Mamm ass an der Këch',
      options: [
        'Meng Mamm ass an der Këch',
        'Mäin Mamm ass an der Këch',
        'Meng Mamm sinn an der Këch',
        'Meng Papp ass an der Këch'
      ],
      context: '"an der" = dans la (féminin), "Meng Mamm" = ma mère'
    },

    // ===== EXERCISE 6: Sentence Construction - Family Introduction =====
    {
      id: 'e12_ex6_sentence_family_intro',
      type: 'sentence_construction',
      vocabularyItem: {
        id: 'ech_hunn',
        luxembourgish: 'Ech hunn',
        french: 'J\'ai',
        pronunciation: 'esh hun',
        usage: 'Verbe avoir à la première personne'
      },
      question: 'Construisez : "Ma famille : j\'ai un frère et une sœur"',
      correctAnswer: 'Meng Famill: Ech hunn ee Brudder an eng Schwëster',
      expectedSentence: 'Meng Famill: Ech hunn ee Brudder an eng Schwëster',
      wordBank: ['Meng', 'Famill:', 'Ech', 'hunn', 'ee', 'Brudder', 'an', 'eng', 'Schwëster', 'zwee', 'Kanner', 'ass'],
      context: '"ee" = un (masculin), "eng" = une (féminin), "an" = et'
    },

    // ===== EXERCISE 7: Word Ordering - Children at Home =====
    {
      id: 'e12_ex7_order_children_home',
      type: 'word_ordering',
      vocabularyItem: {
        id: 'doheem',
        luxembourgish: 'doheem',
        french: 'à la maison',
        pronunciation: 'do-HEEM',
        usage: 'Chez soi, à domicile'
      },
      question: 'Mettez dans l\'ordre : "Les enfants sont à la maison"',
      correctAnswer: 'D\'Kanner sinn doheem',
      expectedSentence: 'D\'Kanner sinn doheem',
      wordBank: ['sinn', 'doheem', 'D\'Kanner', 'ass', 'an', 'der', 'Këch', 'Famill'],
      context: '"D\'" = article défini pluriel "les", "sinn" = sont'
    },

    // ===== EXERCISE 8: Translation - Brother and Sister =====
    {
      id: 'e12_ex8_translation_brother_sister',
      type: 'translation',
      vocabularyItem: {
        id: 'sibling_home',
        luxembourgish: 'Brudder an Schwëster',
        french: 'frère et sœur',
        pronunciation: 'BRUD-er an shvess-ter',
        usage: 'Frères et sœurs'
      },
      question: 'Traduisez : "Mon frère et ma sœur sont à la maison"',
      correctAnswer: 'Mäin Brudder a meng Schwëster sinn doheem',
      options: [
        'Mäin Brudder a meng Schwëster sinn doheem',
        'Meng Brudder a meng Schwëster ass doheem',
        'Mäin Brudder an mäin Schwëster sinn doheem',
        'Meng Brudder a Schwëster sinn an der Këch'
      ],
      context: '"a" = et (liaison entre deux noms), "Mäin" (masc.) / "Meng" (fém./plur.)'
    },

    // ===== EXERCISE 9: Dialogue Completion - Family Introduction =====
    {
      id: 'e12_ex9_dialogue_family_intro',
      type: 'dialogue_completion',
      vocabularyItem: {
        id: 'dialogue_family',
        luxembourgish: 'Wéi grouss ass deng Famill?',
        french: 'Quelle est la taille de ta famille ?',
        pronunciation: 'vay grooss ass deng fa-MIL',
        usage: 'Question sur la famille'
      },
      question: 'Marie demande : "Wéi grouss ass deng Famill?" Tom répond : "Ech hunn ee Brudder, eng Schwëster ___ zwee Kanner ass dat."',
      correctAnswer: 'an',
      options: ['an', 'a', 'mat', 'fir'],
      context: '"an" = et, utilisé pour compter/énumérer'
    },

    // ===== EXERCISE 10: Sentence Construction - Describe Family =====
    {
      id: 'e12_ex10_sentence_describe',
      type: 'sentence_construction',
      vocabularyItem: {
        id: 'mir_wunnen',
        luxembourgish: 'Mir wunnen',
        french: 'Nous habitons',
        pronunciation: 'meer VUN-en',
        usage: 'Verbe habiter au pluriel'
      },
      question: 'Construisez : "Nous habitons ensemble : mon père, ma mère et moi"',
      correctAnswer: 'Mir wunnen zesummen: Mäin Papp, meng Mamm an ech',
      expectedSentence: 'Mir wunnen zesummen: Mäin Papp, meng Mamm an ech',
      wordBank: ['Mir', 'wunnen', 'zesummen:', 'Mäin', 'Papp,', 'meng', 'Mamm', 'an', 'ech', 'doheem', 'ass', 'sinn'],
      context: '"zesummen" = ensemble, "mir" = nous'
    },

    // ===== EXERCISE 11: Speech Recognition - My Family =====
    {
      id: 'e12_ex11_speech_family',
      type: 'speech_recognition',
      vocabularyItem: {
        id: 'family_description',
        luxembourgish: 'Famillbeschreiwung',
        french: 'description de famille',
        pronunciation: 'fa-MIL-be-shrai-woong',
        usage: 'Décrire sa famille'
      },
      question: 'Prononcez : "Ma famille : j\'ai un père, une mère et un frère"',
      correctAnswer: 'Meng Famill: Ech hunn ee Papp, eng Mamm an ee Brudder',
      expectedSentence: 'Meng Famill: Ech hunn ee Papp, eng Mamm an ee Brudder',
      hint: 'Utilisez "ee" (un/masculin) et "eng" (une/féminin)',
      context: 'Pratiquez la prononciation des membres de la famille'
    },

    // ===== EXERCISE 12: Audio Recognition - Family in Rooms =====
    {
      id: 'e12_ex12_audio_family_context',
      type: 'audio_recognition',
      vocabularyItem: {
        id: 'family_location',
        luxembourgish: 'Wou ass...?',
        french: 'Où est...?',
        pronunciation: 'voo ass',
        usage: 'Demander où se trouve quelqu\'un'
      },
      question: 'Écoutez : Où est la mère dans la maison ?',
      correctAnswer: 'An der Këch',
      options: ['An der Këch', 'Doheem', 'Bei der Schwëster', 'Mat dem Brudder'],
      context: 'Audio: "Meng Mamm ass an der Këch. Si kacht."'
    }
  ],

  targetScore: 80,
  estimatedTime: 7
};

export const learningUnitE12 = UnitE12Data;
export default UnitE12Data;
