import { useState, type ReactNode } from 'react'
import useConfirmAction from './hooks/useConfirmAction'
import { useRouting, type View } from './hooks/useRouting'
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
  Typography
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
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
import SimpleUnitsList from './components/SimpleUnitsList'
import PhraseList from './components/PhraseList'
import SentenceBuilderWorkshop from './components/SentenceBuilderWorkshop'
import VocabularyQuiz from './components/VocabularyQuiz'
import { UnitProgress, UserStats } from './types/LearningTypes'

// type View = 'menu' | 'sections' | 'quiz' | 'sentenceBuilder' | 'phrases' - Moved to useRouting hook

const pageTransition = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const cardEntrance = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const statPulse = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`

const iconFloat = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`

function App() {
  const { currentView, setCurrentView } = useRouting()
  const { confirm, ConfirmationDialog } = useConfirmAction()
  const [userStats, setUserStats] = useState<UserStats>({
    totalXp: 0,
    streak: 0,
    unitsCompleted: 0,
    accuracy: 0
  })

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

  const renderMainMenu = () => {
    const statCards = [
      {
        label: 'XP',
        value: userStats.totalXp,
        icon: <StarRoundedIcon />,
        gradient: 'linear-gradient(135deg, rgba(255, 214, 102, 0.24) 0%, rgba(255, 171, 64, 0.16) 100%)'
      },
      {
        label: 'Unités',
        value: userStats.unitsCompleted,
        icon: <MilitaryTechRoundedIcon />,
        gradient: 'linear-gradient(135deg, rgba(33, 150, 243, 0.24) 0%, rgba(25, 118, 210, 0.16) 100%)'
      },
      {
        label: 'Précision',
        value: `${userStats.accuracy}%`,
        icon: <QueryStatsRoundedIcon />,
        gradient: 'linear-gradient(135deg, rgba(20, 184, 166, 0.24) 0%, rgba(14, 116, 144, 0.16) 100%)'
      }
    ]


    const learningCards = [
      {
        key: 'sections' as const,
        title: 'Sections d\'apprentissage',
        description: 'Progressez à travers des unités guidées avec feedback et suivi.',
        icon: <SchoolRoundedIcon fontSize="medium" />,
        accent: 'primary',
        metadata: [
          { icon: <MenuBookRoundedIcon fontSize="small" />, text: '3 sections thématiques' },
          { icon: <QueryStatsRoundedIcon fontSize="small" />, text: 'Suivi détaillé' },
          { icon: <EmojiEventsRoundedIcon fontSize="small" />, text: 'Unités 1 à 6' }
        ],
        actionLabel: 'Explorer les sections',
        actionIcon: <ArrowForwardRoundedIcon />,
        actionColor: 'primary',
        view: 'sections'
      },
      {
        key: 'quiz' as const,
        title: 'Quiz vocabulaire',
        description: 'Testez vos connaissances avec des questions dynamiques et adaptées.',
        icon: <QuizRoundedIcon fontSize="medium" />,
        accent: 'warning',
        metadata: [
          { icon: <AutoAwesomeRoundedIcon fontSize="small" />, text: 'Mode libre' },
          { icon: <QueryStatsRoundedIcon fontSize="small" />, text: 'Progression suivie' }
        ],
        actionLabel: 'Lancer le quiz',
        actionIcon: <RocketLaunchRoundedIcon />,
        actionColor: 'warning',
        view: 'quiz'
      },
      {
        key: 'sentenceBuilder' as const,
        title: 'Atelier de phrases',
        description: 'Entraînez-vous à construire des phrases à partir de bancs de mots guidés.',
        icon: <FormatQuoteRoundedIcon fontSize="medium" />,
        accent: 'info',
        metadata: [
          { icon: <AutoAwesomeRoundedIcon fontSize="small" />, text: 'Scénarios progressifs' },
          { icon: <StarRoundedIcon fontSize="small" />, text: 'Feedback immédiat' }
        ],
        actionLabel: "Lancer l'atelier",
        actionIcon: <ArrowForwardRoundedIcon />,
        actionColor: 'info',
        view: 'sentenceBuilder'
      },
      {
        key: 'phrases' as const,
        title: 'Phrases utiles',
        description: 'Explorez et écoutez les phrases indispensables au quotidien.',
        icon: <MenuBookRoundedIcon fontSize="medium" />,
        accent: 'success',
        metadata: [
          { icon: <StarRoundedIcon fontSize="small" />, text: 'Avec prononciation' },
          { icon: <QueryStatsRoundedIcon fontSize="small" />, text: 'Recherche rapide' }
        ],
        actionLabel: 'Explorer les phrases',
        actionIcon: <ArrowForwardRoundedIcon />,
        actionColor: 'success',
        view: 'phrases'
      }
    ]

    return (
      <Stack spacing={4} sx={{ mt: 4 }}>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 1,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
            color: 'common.white',
            background: 'linear-gradient(135deg, #1976d2 0%, #14b8a6 100%)',
            boxShadow: '0 30px 80px rgba(25, 118, 210, 0.35)',
            animation: `${pageTransition} 0.6s ease`
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18) 0%, transparent 40%), radial-gradient(circle at 80% 0%, rgba(20,184,166,0.35) 0%, transparent 45%)'
            }}
          />

          <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between" spacing={4}>
            <Box sx={{ maxWidth: { md: '60%' }, position: 'relative' }}>
              <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.85 }}>
                🇱🇺 Programme luxembourgeois
              </Typography>
              <Typography variant="h2" component="h2" sx={{ mt: 1, lineHeight: 1.2 }}>
                Lëtzebuergesch Léieren
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, maxWidth: 520, opacity: 0.9 }}>
                Progressez à votre rythme avec des unités guidées, des quiz adaptatifs et une bibliothèque de phrases prononcées.
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ position: 'relative' }}>
              {statCards.map((stat, index) => (
                <PaperStat key={stat.label} stat={stat} index={index} />
              ))}
            </Stack>
          </Stack>
        </Box>


        <Grid container spacing={3}>
          {learningCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={card.key}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  animation: `${cardEntrance} 0.6s ease`,
                  animationDelay: `${index * 0.07}s`,
                  animationFillMode: 'both',
                  background:
                    card.accent === 'primary'
                      ? 'linear-gradient(180deg, rgba(25,118,210,0.08) 0%, rgba(25,118,210,0.02) 100%)'
                      : card.accent === 'secondary'
                      ? 'linear-gradient(180deg, rgba(20,184,166,0.12) 0%, rgba(20,184,166,0.02) 100%)'
                      : card.accent === 'info'
                      ? 'linear-gradient(180deg, rgba(3,169,244,0.12) 0%, rgba(3,169,244,0.02) 100%)'
                      : card.accent === 'warning'
                      ? 'linear-gradient(180deg, rgba(255,193,7,0.12) 0%, rgba(255,193,7,0.02) 100%)'
                      : 'linear-gradient(180deg, rgba(46,125,50,0.12) 0%, rgba(46,125,50,0.02) 100%)'
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        bgcolor: `${card.actionColor}.main`,
                        color: 'common.white',
                        animation: `${iconFloat} 4s ease-in-out infinite`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    >
                      {card.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap', rowGap: 1 }}>
                    {card.metadata.map((item, idx) => (
                      <Chip
                        key={`${card.key}-${idx}`}
                        icon={item.icon}
                        label={item.text}
                        color={idx === 0 ? 'primary' : idx === 1 ? 'secondary' : 'default'}
                        variant="outlined"
                        sx={{
                          borderRadius: 999,
                          borderColor: 'divider',
                          padding: 1,
                          margin: 1,
                          '& .MuiChip-icon': { color: `${card.actionColor}.main` }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: 3, pb: 3 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color={card.actionColor as any}
                    endIcon={card.actionIcon}
                    onClick={() => {
                      setCurrentView(card.view as View)
                    }}
                  >
                    {card.actionLabel}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    )
  }


  const renderView = () => {
    switch (currentView) {
      case 'sections':
        return (
          <SimpleUnitsList
            onBack={() => setCurrentView('menu')}
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
    <Box sx={{ minHeight: '100vh', pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 10 } }}>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            borderRadius: { xs: 0, md: 3 },
            px: { xs: 1, md: 2 },
            py: { xs: 1.5, md: 2 },
            boxShadow: 'none'
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                🇱🇺 Lëtzebuergesch Léieren
              </Typography>
            </Box>

            {currentView !== 'menu' && (
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<ArrowBackRoundedIcon />}
                onClick={() => setCurrentView('menu')}
                sx={{ borderRadius: 999 }}
              >
               
              </Button>
            )}
          </Stack>
        </AppBar>



        <Divider sx={{ my: { xs: 3, md: 4 }, opacity: 0.15 }} />

        <Box
          key={currentView}
          sx={{
            animation: `${pageTransition} 0.5s ease`,
            transformOrigin: 'top center'
          }}
        >
          {renderView()}
        </Box>
      </Container>
      <ConfirmationDialog />
    </Box>
  )
}

interface StatCardProps {
  stat: {
    label: string
    value: number | string
    icon: ReactNode
    gradient: string
  }
  index: number
}

const PaperStat = ({ stat, index }: StatCardProps) => (
  <Box
    sx={{
      position: 'relative',
      px: 3,
      py: 2.5,
      borderRadius: 3,
      background: stat.gradient,
      backdropFilter: 'blur(8px)',
      boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
      minWidth: 120,
      animation: `${statPulse} 5s ease-in-out ${index * 0.4}s infinite`
    }}
  >
    
    <Stack spacing={1}>
      <Avatar
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          color: 'common.white',
          width: 40,
          height: 40
        }}
      >
        {stat.icon}
      </Avatar>
      <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
        {stat.label}
      </Typography>
      <Typography variant="h4">{stat.value}</Typography>
    </Stack>
  </Box>
)

export default App
