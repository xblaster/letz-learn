import { useState } from 'react'

export type View = 'menu' | 'sections' | 'quiz' | 'sentenceBuilder' | 'phrases'

export const useRouting = () => {
  const [currentView, setCurrentView] = useState<View>('menu')

  return {
    currentView,
    setCurrentView
  }
}