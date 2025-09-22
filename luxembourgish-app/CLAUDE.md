# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based Luxembourgish language learning application built with TypeScript. The app features two main learning modes: a vocabulary quiz and a phrase reference with pronunciation guides.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

## Architecture

### Application Structure
- **Single Page Application**: Uses React state to switch between two main views (`quiz` and `phrases`)
- **Component-based**: Main app renders either `VocabularyQuiz` or `PhraseList` based on navigation state
- **Local state management**: Uses React hooks for all state (no external state library)

### Key Components

#### App.tsx
- Root component with navigation between quiz and phrase list
- Manages global view state (`currentView: 'quiz' | 'phrases'`)
- Contains the main header with navigation buttons

#### VocabularyQuiz.tsx
- Interactive quiz with multiple choice questions
- Generates random options for each question from vocabulary pool
- Tracks score, progress, and quiz state
- Shuffles questions on each session
- **Data structure**: `VocabularyItem { luxembourgish, french, category }`

#### PhraseList.tsx
- Displays categorized phrases with pronunciation guides
- Features search functionality and category filtering
- Integrates Web Speech API for pronunciation playback
- **Data structure**: `Phrase { luxembourgish, french, pronunciation, category, context? }`

### Data Management
- **Vocabulary data**: Static array in `VocabularyQuiz.tsx` (10 items across 5 categories)
- **Phrase data**: Static array in `PhraseList.tsx` (12 phrases across 6 categories)
- **No persistence**: All progress resets on page reload
- **Categories**: salutations, politesse, conversation, questions, nourriture, présentation, communication, directions, shopping, restaurant

### Styling Approach
- **CSS-in-JS**: None, uses traditional CSS files
- **Responsive design**: Mobile-first with CSS Grid and Flexbox
- **Design system**: Consistent color scheme (#667eea primary, gradient background)
- **Animations**: CSS transitions for interactive elements

### Browser APIs Used
- **Web Speech API**: For pronunciation playback in PhraseList component
- **LocalStorage**: Not currently used (future enhancement opportunity)

## Working with Language Content

### Adding Vocabulary
- Extend `vocabularyData` array in `VocabularyQuiz.tsx`
- Follow the `VocabularyItem` interface
- Categories should be lowercase and consistent

### Adding Phrases
- Extend `phrasesData` array in `PhraseList.tsx`
- Include pronunciation guide in phonetic format
- Use title case for categories
- Context field is optional but helpful

### Pronunciation Guidelines
- Use phonetic spelling with hyphens for syllable breaks
- Capitalize stressed syllables (e.g., "MOY-en", "VAY gait et")
- German-based pronunciation due to language similarity

## Technical Considerations

### TypeScript
- Strict typing enabled
- Interface definitions for all data structures
- React.FC type for functional components

### React Patterns
- Functional components with hooks
- useState for local state management
- useEffect for component initialization
- Conditional rendering based on state

### Performance
- No optimization implemented (acceptable for current data size)
- Consider useMemo/useCallback if vocabulary/phrase datasets grow large
- Speech synthesis runs on-demand (no preloading)

## Future Enhancement Areas

The codebase is structured to easily accommodate:
- User progress persistence (localStorage/backend)
- Additional learning modes
- Audio file integration
- Spaced repetition algorithms
- User-generated content