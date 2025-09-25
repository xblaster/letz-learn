/**
 * Preprocessing utility to improve German TTS pronunciation of Luxembourgish text
 * Maps Luxembourgish words and patterns to German phonetic equivalents
 */

// Dictionary of common Luxembourgish words to German phonetic equivalents
const luxToGermanDictionary: Record<string, string> = {
  // Common greetings and expressions
  'Moien': 'Morgen',
  'moien': 'morgen',
  'Äddi': 'Tschüss',
  'äddi': 'tschüss',
  // 'merci' stays as 'merci' - German TTS handles French loanwords well

  // Basic words
  'Ech': 'Ich',
  'ech': 'ich',
  'Dir': 'Du',
  'dir': 'du',
  'Hien': 'Er',
  'hien': 'er',
  'Si': 'Sie',
  'si': 'sie',
  'Et': 'Es',
  'et': 'es',

  // Questions words
  'Wéi': 'Wie',
  'wéi': 'wie',
  'Wat': 'Was',
  'wat': 'was',
  'Wou': 'Wo',
  'wou': 'wo',
  'Wann': 'Wann',
  'wann': 'wann',
  'Wien': 'Wer',
  'wien': 'wer',

  // Common verbs
  'sinn': 'sind',
  'ass': 'ist',
  'hunn': 'haben',
  'hun': 'haben',
  'ginn': 'gehen',
  'kommen': 'kommen',
  'maachen': 'machen',
  'gesinn': 'gewesen',
  'gouf': 'wurde',
  'wollt': 'wollte',

  // Time and numbers
  'haut': 'heute',
  'gëschter': 'gestern',
  'muer': 'morgen',
  'elo': 'jetzt',
  'eng': 'ein',
  'zwou': 'zwei',
  'dräi': 'drei',
  'véier': 'vier',
  'fënnef': 'fünf',
  'sechs': 'sechs',
  'siwen': 'sieben',
  'aacht': 'acht',
  'néng': 'neun',
  'zéng': 'zehn',

  // Family and people
  'Mamm': 'Mama',
  'mamm': 'mama',
  'Papp': 'Papa',
  'papp': 'papa',
  'Kand': 'Kind',
  'kand': 'kind',
  'Kanner': 'Kinder',
  'kanner': 'kinder',
  'Frëndin': 'Freundin',
  'frëndin': 'freundin',
  'Frënd': 'Freund',
  'frënd': 'freund',

  // Common adjectives
  'grouss': 'groß',
  'kleng': 'klein',
  'schéin': 'schön',
  'gutt': 'gut',
  'schlecht': 'schlecht',
  'nei': 'neu',
  'al': 'alt',
  'jonk': 'jung',
  'wäiss': 'weiß',
  'schwarz': 'schwarz',
  'rout': 'rot',
  'giel': 'gelb',
  'blo': 'blau',
  'gréng': 'grün',

  // Places and directions
  'Haus': 'Haus',
  'haus': 'haus',
  'Schoull': 'Schule',
  'schoull': 'schule',
  'Aarbecht': 'Arbeit',
  'aarbecht': 'arbeit',
  'Lëtzebuerg': 'Luxemburg',
  'lëtzebuerg': 'luxemburg',
  'Stad': 'Stadt',
  'stad': 'stadt',
  'Land': 'Land',
  'land': 'land',

  // Luxembourgish specific sounds and patterns
  'ä': 'ä',
  'ë': 'e',
  'ï': 'i',
  'ô': 'o',
  'ù': 'u',
  'é': 'e',
  'ü': 'ü',
  'ö': 'ö',
}

// Regex patterns for systematic sound replacements
const luxToGermanPatterns: Array<{ pattern: RegExp; replacement: string }> = [
  // Double consonants at word end - common in Luxembourgish
  { pattern: /nn\b/g, replacement: 'n' },
  { pattern: /ss\b/g, replacement: 's' },
  { pattern: /ll\b/g, replacement: 'l' },
  { pattern: /mm\b/g, replacement: 'm' },
  { pattern: /tt\b/g, replacement: 't' },

  // Luxembourgish "ëcht" -> German "echt"
  { pattern: /ëcht/g, replacement: 'echt' },

  // Luxembourgish "äert" -> German "euer"
  { pattern: /äert/g, replacement: 'euer' },

  // Luxembourgish "ier" -> German "ihr"
  { pattern: /\bier\b/g, replacement: 'ihr' },

  // Common Luxembourgish endings
  { pattern: /ech\b/g, replacement: 'ich' },
  { pattern: /esch\b/g, replacement: 'isch' },

  // Luxembourgish "ou" -> German "au"
  { pattern: /ou/g, replacement: 'au' },

  // Luxembourgish "éi" -> German "ei"
  { pattern: /éi/g, replacement: 'ei' },

  // Handle Luxembourgish "w" at beginning of words -> German "w"
  { pattern: /\bw([aeiou])/g, replacement: 'w$1' },

  // Luxembourgish final "g" often silent - keep for German TTS
  { pattern: /g\b/g, replacement: 'g' },

  // Luxembourgish "ch" -> German "ch" (keep as is, but ensure proper context)
  { pattern: /ch/g, replacement: 'ch' },

  // Handle Luxembourgish articles
  { pattern: /\bd'/g, replacement: 'der ' },
  { pattern: /\bD'/g, replacement: 'Der ' },

  // Common sound substitutions for better German TTS
  { pattern: /ue/g, replacement: 'u' }, // "ue" -> "u"
  { pattern: /ae/g, replacement: 'ä' }, // "ae" -> "ä"
  { pattern: /oe/g, replacement: 'ö' }, // "oe" -> "ö"
]

/**
 * Converts Luxembourgish text to a German-approximated version for better TTS pronunciation
 * @param text The Luxembourgish text to convert
 * @returns German-approximated text for TTS
 */
export const luxToGerman = (text: string): string => {
  if (!text || typeof text !== 'string') {
    return text
  }

  let processedText = text

  // Apply dictionary replacements first (exact word matches)
  Object.entries(luxToGermanDictionary).forEach(([lux, german]) => {
    // Word boundary replacement to avoid partial matches
    const wordPattern = new RegExp(`\\b${lux.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g')
    processedText = processedText.replace(wordPattern, german)
  })

  // Apply regex pattern replacements
  luxToGermanPatterns.forEach(({ pattern, replacement }) => {
    processedText = processedText.replace(pattern, replacement)
  })

  return processedText
}

/**
 * Helper function to add new dictionary entries at runtime if needed
 * @param luxWord Luxembourgish word
 * @param germanEquivalent German phonetic equivalent
 */
export const addLuxToGermanMapping = (luxWord: string, germanEquivalent: string): void => {
  luxToGermanDictionary[luxWord] = germanEquivalent
}

/**
 * Get all current dictionary mappings (useful for debugging)
 * @returns Current dictionary mappings
 */
export const getLuxToGermanDictionary = (): Record<string, string> => {
  return { ...luxToGermanDictionary }
}