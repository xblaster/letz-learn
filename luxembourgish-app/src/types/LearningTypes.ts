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
}

export interface LearningUnit {
  id: string
  title: string
  description: string
  level: 'A1' | 'A2' | 'B1' | 'B2'
  vocabulary: VocabularyItem[]
  exercises: Exercise[]
  targetScore: number
  estimatedTime: number // en minutes
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