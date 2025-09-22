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

export interface UserStats {
  totalXp: number
  streak: number
  unitsCompleted: number
  accuracy: number
}

// Membre d'équipe responsable d'une section/unité
export interface TeamMember {
  id: string
  name: string
  role: 'lead' | 'developer' | 'content' | 'qa'
  specialization?: string
  avatar?: string
}

// Section regroupant plusieurs unités
export interface LearningSection {
  id: string
  title: string
  description: string
  icon: string
  color: string
  level: 'A1' | 'A2' | 'B1' | 'B2'
  units: LearningUnit[]
  teamLead: TeamMember
  contributors: TeamMember[]
  estimatedTotalTime: number // en minutes
  isActive: boolean
  order: number
}

// État de l'application d'apprentissage
export interface LearningState {
  currentSection: LearningSection | null
  currentUnit: LearningUnit | null
  unitProgress: UnitProgress | null
  userStats: UserStats
  isExerciseActive: boolean
  currentExercise: Exercise | null
}