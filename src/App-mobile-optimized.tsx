import { useState, type ReactNode, useEffect } from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
  IconButton,
  Fab,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import Grid from '@mui/material/GridLegacy' // Grid standard compatible
import { keyframes } from '@mui/system'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import QuizRoundedIcon from '@mui/icons-material/QuizRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SimpleUnitsList from './components/SimpleUnitsList'
import PhraseList from './components/PhraseList'
import SentenceBuilderWorkshop from './components/SentenceBuilderWorkshop'
import VocabularyQuiz from './components/VocabularyQuiz'
import { UnitProgress, UserStats } from './types/LearningTypes'
import useConfirmAction, { useQuickConfirm } from './hooks/useConfirmAction'
import './mobile-optimized.css'

type View = 'menu' | 'sections' | 'quiz' | 'sentenceBuilder' | 'phrases'

// Animations optimisées pour mobile (plus légères)
const mobilePageTransition = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const mobileCardEntrance = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const floatGentle = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`

function AppMobileOptimized() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [currentView, setCurrentView] = useState<View>('menu')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [userStats, setUserStats] = useState<UserStats>({
    totalXp: 0,
    streak: 0,
    unitsCompleted: 0,
    accuracy: 0
  })

  // Hooks pour confirmations
  const { ConfirmationDialog } = useConfirmAction()
  const { confirmNavigation, confirmUnitStart } = useQuickConfirm()

  // Navigation avec confirmation sur mobile
  const handleNavigation = async (newView: View, destination?: string) => {
    if (isMobile && currentView !== 'menu' && newView !== currentView) {
      const confirmed = await confirmNavigation(destination || getViewTitle(newView))
      if (!confirmed) return
    }
    setCurrentView(newView)
    setDrawerOpen(false)
  }

  const getViewTitle = (view: View): string => {
    switch (view) {
      case 'sections': return 'Sections d\'apprentissage'
      case 'quiz': return 'Quiz vocabulaire'
      case 'sentenceBuilder': return 'Atelier de phrases'
      case 'phrases': return 'Phrases utiles'
      default: return 'Menu principal'
    }
  }

  // Gestion scroll pour mobile (empêcher overflow)
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowX = 'hidden'
      document.body.style.position = 'relative'
    }
    return () => {
      document.body.style.overflowX = 'auto'
      document.body.style.position = 'static'
    }
  }, [isMobile])

  const handleUnitComplete = (progress: UnitProgress) => {
    if (progress.isCompleted) {
      setUserStats(prev => ({
        ...prev,
        totalXp: prev.totalXp + calculateXp(progress.score),
        unitsCompleted: prev.unitsCompleted + 1,
        accuracy: updateAccuracy(prev.accuracy, progress.score)
      }))
    }
  }

  const calculateXp = (score: number): number => {
    const baseXp = 50
    const bonus = Math.round(score * 0.5)
    return baseXp + bonus
  }

  const updateAccuracy = (currentAccuracy: number, newScore: number): number => {
    if (currentAccuracy === 0) {
      return newScore
    }
    return Math.round((currentAccuracy + newScore) / 2)
  }

  const renderMobileStats = () => {
    const statCards = [
      {
        label: 'XP',
        value: userStats.totalXp,
        icon: <StarRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#ffd700' : '#ff8f00'
      },
      {
        label: 'Unités',
        value: userStats.unitsCompleted,
        icon: <MilitaryTechRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#00d4ff' : '#1976d2'
      },
      {
        label: 'Précision',
        value: `${userStats.accuracy}%`,
        icon: <QueryStatsRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#00ff88' : '#14b8a6'
      }
    ]

    return (
      <Stack
        direction="row"
        spacing={1}
        sx={{
          overflowX: 'auto',
          pb: 1,
          px: 2,
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none'
        }}
      >
        {statCards.map((stat, index) => (
          <Box
            key={stat.label}
            sx={{
              minWidth: isMobile ? 100 : 120,
              p: 2,
              borderRadius: 3,
              background: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              animation: `${floatGentle} 3s ease-in-out ${index * 0.5}s infinite`
            }}
          >
            <Avatar
              sx={{
                bgcolor: stat.color,
                width: 32,
                height: 32,
                mx: 'auto',
                mb: 1
              }}
            >
              {stat.icon}
            </Avatar>
            <Typography variant="caption" color="text.secondary" display="block">
              {stat.label}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {stat.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    )
  }

  const renderMainMenu = () => {
    const learningCards = [
      {
        key: 'sections' as const,
        title: 'Sections d\'apprentissage',
        description: 'Progressez à travers des unités guidées avec feedback et suivi.',
        icon: <SchoolRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#00d4ff' : '#1976d2',
        gradient: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(200, 119, 255, 0.05) 100%)'
          : 'linear-gradient(135deg, rgba(25,118,210,0.08) 0%, rgba(25,118,210,0.02) 100%)',
        metadata: ['3 sections', 'Suivi détaillé', 'Unités 1-6'],
        view: 'sections' as View
      },
      {
        key: 'quiz' as const,
        title: 'Quiz vocabulaire',
        description: 'Testez vos connaissances avec des questions dynamiques.',
        icon: <QuizRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#ff6b35' : '#ff8f00',
        gradient: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 193, 7, 0.05) 100%)'
          : 'linear-gradient(135deg, rgba(255,193,7,0.12) 0%, rgba(255,193,7,0.02) 100%)',
        metadata: ['Mode libre', 'Progression suivie'],
        view: 'quiz' as View
      },
      {
        key: 'sentenceBuilder' as const,
        title: 'Atelier de phrases',
        description: 'Construisez des phrases à partir de bancs de mots guidés.',
        icon: <FormatQuoteRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#c877ff' : '#3f51b5',
        gradient: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(200, 119, 255, 0.15) 0%, rgba(103, 58, 183, 0.05) 100%)'
          : 'linear-gradient(135deg, rgba(3,169,244,0.12) 0%, rgba(3,169,244,0.02) 100%)',
        metadata: ['Scénarios progressifs', 'Feedback immédiat'],
        view: 'sentenceBuilder' as View
      },
      {
        key: 'phrases' as const,
        title: 'Phrases utiles',
        description: 'Explorez les phrases indispensables au quotidien.',
        icon: <MenuBookRoundedIcon />,
        color: theme.palette.mode === 'dark' ? '#00ff88' : '#2e7d32',
        gradient: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(46, 125, 50, 0.05) 100%)'
          : 'linear-gradient(135deg, rgba(46,125,50,0.12) 0%, rgba(46,125,50,0.02) 100%)',
        metadata: ['Avec prononciation', 'Recherche rapide'],
        view: 'phrases' as View
      }
    ]

    return (
      <Stack spacing={isMobile ? 3 : 4}>
        {/* Hero Section - Mobile optimized */}
        <Box
          sx={{
            borderRadius: isMobile ? 4 : 6,
            p: isMobile ? 3 : 6,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #00d4ff 0%, #c877ff 100%)'
              : 'linear-gradient(135deg, #1976d2 0%, #14b8a6 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            animation: `${mobilePageTransition} 0.6s ease`,
            minHeight: isMobile ? 'auto' : 300
          }}
        >
          <Stack spacing={isMobile ? 2 : 4}>
            <Box>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                fontWeight={800}
                sx={{
                  lineHeight: 1.2,
                  fontSize: isMobile ? '1.8rem' : '2.5rem'
                }}
              >
                🇱🇺 Lëtzebuergesch Léieren
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  opacity: 0.9,
                  maxWidth: isMobile ? '100%' : 520,
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}
              >
                Progressez à votre rythme avec des unités guidées, des quiz adaptatifs et une bibliothèque de phrases.
              </Typography>
            </Box>

            {renderMobileStats()}
          </Stack>

          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
              pointerEvents: 'none'
            }}
          />
        </Box>

        {/* Learning Cards - Mobile Grid */}
        <Grid container spacing={isMobile ? 2 : 3} sx={{ px: 0 }}>
          {learningCards.map((card, index) => (
            <Grid
              key={card.key}
              xs={isMobile ? 12 : 6}
              sx={{
                animation: `${mobileCardEntrance} 0.5s ease`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: card.gradient,
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: 4,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: isMobile ? 'scale(0.98)' : 'translateY(-4px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? `0 12px 40px rgba(0, 212, 255, 0.2)`
                      : `0 12px 40px rgba(25, 118, 210, 0.15)`
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                    transition: 'all 0.1s'
                  }
                }}
                onClick={() => handleNavigation(card.view)}
              >
                <CardContent sx={{ p: isMobile ? 3 : 4 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Avatar
                      sx={{
                        bgcolor: card.color,
                        width: isMobile ? 40 : 48,
                        height: isMobile ? 40 : 48,
                        animation: `${floatGentle} 4s ease-in-out infinite`
                      }}
                    >
                      {card.icon}
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant={isMobile ? "h6" : "h5"}
                        fontWeight={700}
                        sx={{ mb: 1 }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {card.description}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          flexWrap: 'wrap',
                          gap: 1
                        }}
                      >
                        {card.metadata.map((item, idx) => (
                          <Chip
                            key={idx}
                            label={item}
                            size="small"
                            sx={{
                              borderRadius: 999,
                              bgcolor: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.75rem',
                              height: 24
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: isMobile ? 3 : 4, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size={isMobile ? "large" : "medium"}
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)'
                        : card.color,
                      color: theme.palette.mode === 'dark' ? 'white' : 'white',
                      fontWeight: 700,
                      borderRadius: 3,
                      minHeight: 48, // Touch-friendly
                      '&:hover': {
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)'
                          : card.color,
                        filter: 'brightness(1.1)'
                      }
                    }}
                  >
                    Explorer
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    )
  }

  // Drawer Navigation pour mobile
  const renderMobileDrawer = () => {
    const menuItems = [
      { view: 'menu' as View, label: 'Accueil', icon: <HomeRoundedIcon /> },
      { view: 'sections' as View, label: 'Sections', icon: <SchoolRoundedIcon /> },
      { view: 'quiz' as View, label: 'Quiz', icon: <QuizRoundedIcon /> },
      { view: 'sentenceBuilder' as View, label: 'Atelier', icon: <FormatQuoteRoundedIcon /> },
      { view: 'phrases' as View, label: 'Phrases', icon: <MenuBookRoundedIcon /> }
    ]

    return (
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        PaperProps={{
          sx: {
            width: 280,
            background: theme.palette.mode === 'dark'
              ? 'rgba(22, 22, 31, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.05)'
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            🇱🇺 Navigation
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Choisissez votre destination
          </Typography>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.view}
              onClick={() => handleNavigation(item.view)}
              sx={{
                borderRadius: 2,
                mx: 2,
                mb: 1,
                bgcolor: currentView === item.view
                  ? theme.palette.mode === 'dark' ? 'rgba(0, 212, 255, 0.15)' : 'rgba(25, 118, 210, 0.08)'
                  : 'transparent',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              <ListItemIcon sx={{ color: currentView === item.view ? 'primary.main' : 'text.secondary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: currentView === item.view ? 600 : 400,
                  color: currentView === item.view ? 'primary.main' : 'text.primary'
                }}
              />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    )
  }

  const renderView = () => {
    switch (currentView) {
      case 'sections':
        return (
          <SimpleUnitsList
            onBack={() => handleNavigation('menu')}
            onUnitComplete={handleUnitComplete}
          />
        )
      case 'quiz':
        return <VocabularyQuiz />
      case 'sentenceBuilder':
        return <SentenceBuilderWorkshop />
      case 'phrases':
        return <PhraseList />
      case 'menu':
      default:
        return renderMainMenu()
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden', // Crucial pour mobile
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a0a0f 0%, #16161f 50%, #1a1a24 100%)'
          : 'linear-gradient(135deg, #f6f7fb 0%, #eef3ff 100%)'
      }}
    >
      {/* Mobile Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: theme.palette.mode === 'dark'
            ? 'rgba(10, 10, 15, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.05)',
          py: 1
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuRoundedIcon />
              </IconButton>
            )}

            <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                fontWeight={700}
                color="text.primary"
              >
                {isMobile ? '🇱🇺 Lëtzebuergesch' : '🇱🇺 Lëtzebuergesch Léieren'}
              </Typography>
            </Box>

            {!isMobile && currentView !== 'menu' && (
              <Button
                variant="outlined"
                startIcon={<ArrowBackRoundedIcon />}
                onClick={() => handleNavigation('menu')}
                sx={{ borderRadius: 3 }}
              >
                Retour au menu
              </Button>
            )}
          </Stack>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          pt: isMobile ? 3 : 4,
          pb: isMobile ? 10 : 6, // Extra padding bottom pour mobile FAB
          px: isMobile ? 2 : 3
        }}
      >
        <Box
          key={currentView}
          sx={{
            animation: `${mobilePageTransition} 0.4s ease`
          }}
        >
          {renderView()}
        </Box>
      </Container>

      {/* Mobile FAB for quick access */}
      {isMobile && currentView !== 'menu' && (
        <Fab
          color="primary"
          onClick={() => handleNavigation('menu')}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #00d4ff 0%, #c877ff 100%)'
              : 'linear-gradient(135deg, #1976d2 0%, #14b8a6 100%)',
            color: theme.palette.mode === 'dark' ? '#0a0a0f' : 'white',
            '&:hover': {
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #5dffff 0%, #ffaaff 100%)'
                : 'linear-gradient(135deg, #63a4ff 0%, #5eead4 100%)',
              transform: 'scale(1.1)'
            }
          }}
        >
          <HomeRoundedIcon />
        </Fab>
      )}

      {/* Mobile Navigation Drawer */}
      {isMobile && renderMobileDrawer()}

      {/* Confirmation Dialog */}
      <ConfirmationDialog />
    </Box>
  )
}

export default AppMobileOptimized