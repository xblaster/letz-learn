import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export type View = 'menu' | 'sections' | 'quiz' | 'sentenceBuilder' | 'phrases'

const pathToView: Record<string, View> = {
  '/': 'menu',
  '/menu': 'menu',
  '/sections': 'sections',
  '/quiz': 'quiz',
  '/sentence-builder': 'sentenceBuilder',
  '/phrases': 'phrases'
}

const viewToPath: Record<View, string> = {
  menu: '/',
  sections: '/sections',
  quiz: '/quiz',
  sentenceBuilder: '/sentence-builder',
  phrases: '/phrases'
}

export const useRouting = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Initialize view based on current path
  const getInitialView = (): View => {
    return pathToView[location.pathname] || 'menu'
  }

  const [currentView, setCurrentView] = useState<View>(getInitialView)

  // Update URL when view changes (only if it's not a unit-specific route)
  useEffect(() => {
    const targetPath = viewToPath[currentView]
    if (location.pathname !== targetPath && !location.pathname.startsWith('/sections/unit/')) {
      navigate(targetPath, { replace: true })
    }
  }, [currentView, navigate, location.pathname])

  // Update view when URL changes (browser back/forward)
  useEffect(() => {
    let newView: View

    // Check for unit-specific routes
    if (location.pathname.startsWith('/sections/unit/')) {
      newView = 'sections'
    } else {
      newView = pathToView[location.pathname] || 'menu'
    }

    if (newView !== currentView) {
      setCurrentView(newView)
    }
  }, [location.pathname])

  // Helper function to navigate to specific unit
  const navigateToUnit = (unitId: string) => {
    navigate(`/sections/unit/${unitId}`)
  }

  // Helper function to get current unit ID from URL
  const getCurrentUnitId = (): string | null => {
    const match = location.pathname.match(/^\/sections\/unit\/(.+)$/)
    return match ? match[1] : null
  }

  return {
    currentView,
    setCurrentView,
    navigateToUnit,
    getCurrentUnitId
  }
}