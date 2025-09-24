import React, { forwardRef, ReactElement, cloneElement } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import Fade from '@mui/material/Fade'
import Zoom from '@mui/material/Zoom'
import Grow from '@mui/material/Grow'
import Collapse from '@mui/material/Collapse'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

// Types pour les transitions
export type TransitionType = 'slide' | 'fade' | 'zoom' | 'grow' | 'collapse'
export type SlideDirection = 'left' | 'right' | 'up' | 'down'

interface MobileTransitionProps extends Omit<TransitionProps, 'children'> {
  children: ReactElement
  type?: TransitionType
  direction?: SlideDirection
  duration?: number
  delay?: number
  easing?: string
  mobile?: boolean
  sx?: SxProps<Theme>
}

// Transitions optimisées pour mobile
const MobileSlideTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
  direction?: SlideDirection
  duration?: number
}>(function MobileSlideTransition(props, ref) {
  const { children, direction = 'right', duration = 300, ...other } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  // Ajuster la durée pour mobile (plus rapide)
  const mobileDuration = isMobile ? Math.max(duration * 0.7, 200) : duration

  return (
    <Slide
      direction={direction}
      ref={ref}
      timeout={mobileDuration}
      easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      {...other}
    >
      {children}
    </Slide>
  )
})

const MobileFadeTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
  duration?: number
}>(function MobileFadeTransition(props, ref) {
  const { children, duration = 300, ...other } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const mobileDuration = isMobile ? Math.max(duration * 0.8, 250) : duration

  return (
    <Fade
      ref={ref}
      timeout={mobileDuration}
      easing="ease-out"
      {...other}
    >
      {children}
    </Fade>
  )
})

const MobileZoomTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
  duration?: number
}>(function MobileZoomTransition(props, ref) {
  const { children, duration = 300, ...other } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const mobileDuration = isMobile ? Math.max(duration * 0.6, 200) : duration

  return (
    <Zoom
      ref={ref}
      timeout={mobileDuration}
      easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
      {...other}
    >
      {children}
    </Zoom>
  )
})

const MobileGrowTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
  duration?: number
}>(function MobileGrowTransition(props, ref) {
  const { children, duration = 300, ...other } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const mobileDuration = isMobile ? Math.max(duration * 0.7, 220) : duration

  return (
    <Grow
      ref={ref}
      timeout={mobileDuration}
      easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      {...other}
    >
      {children}
    </Grow>
  )
})

const MobileCollapseTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
  duration?: number
}>(function MobileCollapseTransition(props, ref) {
  const { children, duration = 300, ...other } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const mobileDuration = isMobile ? Math.max(duration * 0.8, 240) : duration

  return (
    <Collapse
      ref={ref}
      timeout={mobileDuration}
      easing="cubic-bezier(0.4, 0, 0.2, 1)"
      {...other}
    >
      {children}
    </Collapse>
  )
})

// Composant principal de transition mobile
const MobileTransition: React.FC<MobileTransitionProps> = ({
  children,
  type = 'slide',
  direction = 'right',
  duration = 300,
  delay = 0,
  easing,
  mobile = true,
  sx,
  ...transitionProps
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  // Si mobile=false et on est sur mobile, pas de transition
  if (!mobile && isMobile) {
    return children
  }

  // Appliquer le délai si spécifié
  const childWithDelay = delay > 0 ? cloneElement(children, {
    style: {
      ...children.props.style,
      animationDelay: `${delay}ms`
    }
  }) : children

  // Wrapper avec styles personnalisés
  const wrappedChild = sx ? (
    <Box sx={sx}>
      {childWithDelay}
    </Box>
  ) : childWithDelay

  // Sélection du type de transition
  switch (type) {
    case 'slide':
      return (
        <MobileSlideTransition
          direction={direction}
          duration={duration}
          {...transitionProps}
        >
          {wrappedChild}
        </MobileSlideTransition>
      )
    case 'fade':
      return (
        <MobileFadeTransition
          duration={duration}
          {...transitionProps}
        >
          {wrappedChild}
        </MobileFadeTransition>
      )
    case 'zoom':
      return (
        <MobileZoomTransition
          duration={duration}
          {...transitionProps}
        >
          {wrappedChild}
        </MobileZoomTransition>
      )
    case 'grow':
      return (
        <MobileGrowTransition
          duration={duration}
          {...transitionProps}
        >
          {wrappedChild}
        </MobileGrowTransition>
      )
    case 'collapse':
      return (
        <MobileCollapseTransition
          duration={duration}
          {...transitionProps}
        >
          {wrappedChild}
        </MobileCollapseTransition>
      )
    default:
      return children
  }
}

// Hook pour gérer les transitions de page
export const usePageTransition = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const getTransitionConfig = (
    type: TransitionType = 'slide',
    direction: SlideDirection = 'right'
  ) => {
    if (isMobile) {
      return {
        type,
        direction,
        duration: 300,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    }
    return {
      type,
      direction,
      duration: 400,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }

  return { getTransitionConfig, isMobile }
}

// Composant de transition en groupe avec délais échelonnés
interface StaggeredTransitionProps {
  children: ReactElement[]
  type?: TransitionType
  direction?: SlideDirection
  staggerDelay?: number
  baseDuration?: number
  sx?: SxProps<Theme>
}

export const StaggeredTransition: React.FC<StaggeredTransitionProps> = ({
  children,
  type = 'grow',
  direction = 'up',
  staggerDelay = 100,
  baseDuration = 300,
  sx
}) => {
  return (
    <Box sx={sx}>
      {children.map((child, index) => (
        <MobileTransition
          key={child.key || index}
          type={type}
          direction={direction}
          duration={baseDuration}
          delay={index * staggerDelay}
          in={true}
        >
          {child}
        </MobileTransition>
      ))}
    </Box>
  )
}

// Transition spécialisée pour les cartes
export const CardTransition: React.FC<{
  children: ReactElement
  index?: number
  delay?: number
}> = ({ children, index = 0, delay = 100 }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <MobileTransition
      type={isMobile ? "grow" : "slide"}
      direction="up"
      duration={isMobile ? 250 : 350}
      delay={index * delay}
      in={true}
      sx={{
        '&': {
          animationFillMode: 'both'
        }
      }}
    >
      {children}
    </MobileTransition>
  )
}

// Transition pour les modales sur mobile
export const MobileModalTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
}>(function MobileModalTransition(props, ref) {
  const { children, ...other } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  if (isMobile) {
    return (
      <Slide direction="up" ref={ref} timeout={300} {...other}>
        {children}
      </Slide>
    )
  }

  return (
    <Zoom ref={ref} timeout={250} {...other}>
      {children}
    </Zoom>
  )
})

// Transition pour navigation mobile (Drawer)
export const DrawerTransition = forwardRef<unknown, TransitionProps & {
  children: ReactElement
}>(function DrawerTransition(props, ref) {
  const { children, ...other } = props

  return (
    <Slide
      direction="right"
      ref={ref}
      timeout={250}
      easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      {...other}
    >
      {children}
    </Slide>
  )
})

// Composant de transition pour les fab buttons
export const FabTransition: React.FC<{
  children: ReactElement
  in: boolean
}> = ({ children, in: inProp }) => {
  return (
    <MobileTransition
      type="zoom"
      duration={200}
      in={inProp}
    >
      {children}
    </MobileTransition>
  )
}

export default MobileTransition