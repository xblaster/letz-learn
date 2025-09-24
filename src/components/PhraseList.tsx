import { useMemo, useState } from 'react'
import {
  Card,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'

interface Phrase {
  luxembourgish: string
  french: string
  pronunciation: string
  category: string
  context?: string
}

const phrasesData: Phrase[] = [
  {
    luxembourgish: 'Moien!',
    french: 'Bonjour !',
    pronunciation: 'MOY-en',
    category: 'Salutations',
    context: 'Salutation standard utilisée toute la journée'
  },
  {
    luxembourgish: 'Wéi geet et?',
    french: 'Comment allez-vous ?',
    pronunciation: 'VAY gait et',
    category: 'Salutations'
  },
  {
    luxembourgish: 'Et geet mer gutt, merci',
    french: 'Je vais bien, merci',
    pronunciation: 'et gait mer goot MER-see',
    category: 'Salutations'
  },
  {
    luxembourgish: 'Ech heeschen...',
    french: "Je m'appelle...",
    pronunciation: 'esh HAY-shen',
    category: 'Présentation'
  },
  {
    luxembourgish: 'Wou kënnt Dir hier?',
    french: "D'où venez-vous ?",
    pronunciation: 'voo kent deer heer',
    category: 'Présentation'
  },
  {
    luxembourgish: 'Ech verstinn net',
    french: 'Je ne comprends pas',
    pronunciation: 'esh fer-SHTEEN net',
    category: 'Communication'
  },
  {
    luxembourgish: 'Kënnt Dir mir hëllefen?',
    french: "Pouvez-vous m'aider ?",
    pronunciation: 'kent deer meer HEL-e-fen',
    category: 'Communication'
  },
  {
    luxembourgish: "Wou ass d'Gare?",
    french: 'Où est la gare ?',
    pronunciation: "voo ass d'GA-re",
    category: 'Directions'
  },
  {
    luxembourgish: 'Wéivill kascht dat?',
    french: 'Combien cela coûte-t-il ?',
    pronunciation: 'VAY-veel kasht dat',
    category: 'Shopping'
  },
  {
    luxembourgish: 'Ech hätt gäer...',
    french: "J'aimerais...",
    pronunciation: 'esh het GAIR',
    category: 'Restaurant'
  },
  {
    luxembourgish: "D'Rechnung, wann ech gelift",
    french: "L'addition, s'il vous plaît",
    pronunciation: "d'REKH-noong van esh ge-LEEFT",
    category: 'Restaurant'
  },
  {
    luxembourgish: 'Äddi!',
    french: 'Au revoir !',
    pronunciation: 'AD-dee',
    category: 'Salutations'
  }
]

const categories = ['Tous', ...Array.from(new Set(phrasesData.map(phrase => phrase.category)))]

const PhraseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPhrases = useMemo(() => {
    return phrasesData.filter(phrase => {
      const matchesCategory = selectedCategory === 'Tous' || phrase.category === selectedCategory
      const matchesSearch =
        phrase.luxembourgish.toLowerCase().includes(searchTerm.toLowerCase()) ||
        phrase.french.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchTerm, selectedCategory])

  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <Stack spacing={4}>
      <Card
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 1,
          background: 'linear-gradient(140deg, rgba(25,118,210,0.12) 0%, rgba(20,184,166,0.08) 100%)'
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Stack spacing={0.5}>
              <Typography variant="overline" color="primary">
                Bibliothèque de phrases
              </Typography>
              <Typography variant="h3">Phrases utiles</Typography>
              <Typography variant="body1" color="text.secondary">
                Explorez les phrases indispensables et écoutez leur prononciation pour vous entraîner.
              </Typography>
            </Stack>
            <Chip
              icon={<AutoAwesomeRoundedIcon />}
              label={`${filteredPhrases.length} phrase(s)`}
              color="secondary"
              sx={{ borderRadius: 999 }}
            />
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Rechercher une phrase ou une traduction"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon color="primary" />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Select
                fullWidth
                value={selectedCategory}
                onChange={event => setSelectedCategory(event.target.value)}
                displayEmpty
                sx={{ borderRadius: 3 }}
              >
                {categories.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Stack>
      </Card>

      <Grid container spacing={3}>
        {filteredPhrases.map((phrase, index) => (
          <Grid item xs={12} sm={6} md={4} key={`${phrase.luxembourgish}-${index}`}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(25,118,210,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Chip label={phrase.category} size="small" color="primary" sx={{ borderRadius: 999 }} />
                <IconButton
                  onClick={() => playPronunciation(phrase.luxembourgish)}
                  color="secondary"
                  aria-label={`Écouter ${phrase.luxembourgish}`}
                >
                  <VolumeUpRoundedIcon />
                </IconButton>
              </Stack>
              <Typography variant="h6">{phrase.luxembourgish}</Typography>
              <Typography variant="body2" color="text.secondary">
                {phrase.french}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Prononciation : {phrase.pronunciation}
              </Typography>
              {phrase.context && (
                <Typography variant="caption" color="text.secondary">
                  {phrase.context}
                </Typography>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredPhrases.length === 0 && (
        <Card
          elevation={0}
          sx={{
            p: 3,
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: 4
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Aucune phrase trouvée pour votre recherche.
          </Typography>
        </Card>
      )}
    </Stack>
  )
}

export default PhraseList
