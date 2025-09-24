// Utilitaires pour la persistance de la progression dans localStorage

export interface StoredProgress {
  completedUnits: string[]
  unlockedSections: string[]
  userStats: {
    totalXp: number
    streak: number
    unitsCompleted: number
    accuracy: number
  }
  lastUpdated: string
}

const STORAGE_KEY = 'letz-learn-progress'

export const saveProgress = (progress: Omit<StoredProgress, 'lastUpdated'> | StoredProgress): void => {
  try {
    const progressWithTimestamp = {
      ...progress,
      lastUpdated: new Date().toISOString()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressWithTimestamp))
  } catch (error) {
    console.error('Error saving progress to localStorage:', error)
  }
}

export const loadProgress = (): StoredProgress | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const progress = JSON.parse(stored) as StoredProgress

    // Validation basique des données
    if (!progress.completedUnits || !progress.unlockedSections || !progress.userStats) {
      console.warn('Invalid progress data found, resetting...')
      clearProgress()
      return null
    }

    return progress
  } catch (error) {
    console.error('Error loading progress from localStorage:', error)
    return null
  }
}

export const clearProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Error clearing progress from localStorage:', error)
  }
}

export const getDefaultProgress = (): StoredProgress => ({
  completedUnits: [],
  unlockedSections: ['section_1'],
  userStats: {
    totalXp: 0,
    streak: 0,
    unitsCompleted: 0,
    accuracy: 0
  },
  lastUpdated: new Date().toISOString()
})

// Utilitaire pour migrer les anciennes données si nécessaire
export const migrateProgress = (): void => {
  // Réservé pour de futures migrations de données
  console.log('Progress migration check completed')
}

// Hook personnalisé pour la gestion de la progression avec localStorage
export const useProgressPersistence = () => {
  const save = (progress: Omit<StoredProgress, 'lastUpdated'>) => {
    saveProgress({
      ...progress,
      lastUpdated: new Date().toISOString()
    })
  }

  const load = () => {
    return loadProgress() || getDefaultProgress()
  }

  const clear = () => {
    clearProgress()
  }

  return { save, load, clear }
}