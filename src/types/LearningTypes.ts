// Types pour le système d'apprentissage inspiré de Duolingo

export interface VocabularyItem {
  id: string
  luxembourgish: string
  french: string
  pronunciation: string
  audioUrl?: string
  imageUrl?: string
  usage: string
}

export interface Exercise {
  id: string
  type: ExerciseType
  vocabularyItem: VocabularyItem
  question: string
  options?: string[]
  correctAnswer: string
  distractors?: string[]
  context?: string
  wordBank?: string[]
  expectedSentence?: string
  hint?: string
  wordPairs?: Array<{
    id: string
    left: string
    right: string
  }>
  columnLabels?: {
    left: string
    right: string
  }
}

export type CEFRLevel =
  | 'A1'
  | 'A1+'
  | 'A2'
  | 'A2+'
  | 'B1'
  | 'B1+'
  | 'B2'

export interface LearningUnit {
  id: string
  title: string
  description: string
  level: CEFRLevel
  vocabulary: VocabularyItem[]
  exercises: Exercise[]
  targetScore: number
  estimatedTime: number // en minutes
}

export interface UnitSection {
  id: string
  title: string
  description: string
  color: string
  order: number
  units: LearningUnit[]
  pathLayout?: Array<{ x: number; y: number }>
}

export interface ExerciseResult {
  exerciseId: string
  isCorrect: boolean
  timeSpent: number // en millisecondes
  attempts: number
  timestamp: Date
}

export interface UnitProgress {
  unitId: string
  currentExerciseIndex: number
  completedExercises: ExerciseResult[]
  score: number
  isCompleted: boolean
  startedAt: Date
  completedAt?: Date
}

export type ExerciseType =
  | 'audio_recognition'    // Reconnaissance audio
  | 'image_association'    // Association image/situation
  | 'translation'          // Traduction français → luxembourgeois
  | 'dialogue_completion'  // Complétion de dialogue
  | 'pronunciation'        // Répétition guidée
  | 'sentence_construction' // Construction de phrase
  | 'speech_recognition'    // Répétition + reconnaissance de phrase
  | 'word_ordering'        // Remettre mots dans l'ordre
  | 'phrase_completion'    // Compléter phrases à trous
  | 'progressive_building' // Construction par étapes
  | 'pattern_recognition'  // Reconnaître structures
  | 'creative_expression'  // Production libre avec contraintes (B1+)
  | 'error_correction'     // Identifier et corriger erreurs (A2+)
  | 'word_pairing'         // Associer mots entre deux langues
  | 'register_adaptation'  // Adapter selon contexte formel/informel (B1+)
  | 'argumentation_building' // Construire arguments structurés (B1+)
  | 'cultural_context'     // Compréhension culturelle luxembourgeoise (A2+)
  | 'text_comprehension'   // Compréhension de textes authentiques (A2+)
  | 'opinion_expression'   // Expression d'opinions nuancées (B1)

export interface UserStats {
  totalXp: number
  streak: number
  unitsCompleted: number
  accuracy: number
}

// Nœud du parcours d'apprentissage (comme dans Duolingo)
export interface PathNode {
  id: string
  unit: LearningUnit
  position: { x: number; y: number } // Position sur le parcours
  isUnlocked: boolean
  isCompleted: boolean
  sectionId: string
}

// Section du parcours avec style visuel
export interface PathSection {
  id: string
  title: string
  description: string
  color: string
  nodes: PathNode[]
  order: number
}

// État de l'application d'apprentissage
export interface LearningState {
  currentNode: PathNode | null
  currentUnit: LearningUnit | null
  unitProgress: UnitProgress | null
  userStats: UserStats
  isExerciseActive: boolean
  currentExercise: Exercise | null
  completedNodes: string[]
}