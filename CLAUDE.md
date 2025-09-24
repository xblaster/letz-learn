# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript application for learning Luxembourgish (Lëtzebuergesch). It's a Duolingo-inspired language learning app with multiple interactive learning modes including structured units, vocabulary quizzes, sentence building workshops, and phrase collections.

## Common Commands

### Development
```bash
npm start                    # Start development server (http://localhost:3000)
npm test                     # Run tests in watch mode
npm test -- --watchAll=false # Run tests once (CI mode)
npm run build                # Build for production
npm run eject                # Eject from Create React App (irreversible)
```

### Docker Deployment
```bash
docker build -t letz-learn . # Build Docker image
# Application runs on port 80 in container
```

## Architecture Overview

### Core App Structure
- **App.tsx**: Main application component with routing logic and user statistics
- **hooks/useRouting.ts**: Custom hook managing view navigation ('menu' | 'sections' | 'quiz' | 'sentenceBuilder' | 'phrases')
- **hooks/useConfirmAction.tsx**: Reusable confirmation dialog hook

### Learning System Components
- **SimpleUnitsList.tsx**: Main learning path with structured units
- **LearningUnit.tsx**: Individual unit component with progress tracking
- **UnitCompletion.tsx**: Completion celebration and statistics
- **VocabularyQuiz.tsx**: Standalone vocabulary quiz mode
- **SentenceBuilderWorkshop.tsx**: Interactive sentence construction
- **PhraseList.tsx**: Browse and listen to useful phrases

### Exercise Types (src/components/exercises/)
The app supports 15+ exercise types defined in `LearningTypes.ts`:
- **GenericExercise.tsx**: Base exercise wrapper
- **AudioRecognitionExercise.tsx**: Audio comprehension
- **TranslationExercise.tsx**: French ↔ Luxembourgish translation
- **SentenceConstructionExercise.tsx**: Build sentences from word bank
- **PronunciationExercise.tsx**: Speech recognition exercises
- **DialogueCompletionExercise.tsx**: Fill in conversation gaps
- **ImageAssociationExercise.tsx**: Match images with words/phrases
- Plus advanced exercises for higher CEFR levels (A2+, B1+, B2)

### Data Structure
- **data/**: Contains 40+ unit files (Unit1Data.ts - Unit40Data.ts) with vocabulary and exercises
- **data/LearningPathData.ts**: Main course structure and progression
- **data/unitSections.ts**: Section organization and theming
- **types/LearningTypes.ts**: Core TypeScript interfaces for exercises, units, and user progress

### Services
- **services/AudioService.ts**: Text-to-speech functionality
- **services/SpeechRecognitionService.ts**: Voice input handling

### Styling and Theming
- Uses Material-UI (MUI) v7 with custom themes
- **theme.ts**: Light theme configuration
- **theme-dark.ts**: Dark theme configuration
- Responsive design with mobile-first approach
- Custom animations using MUI's `keyframes`

## Key Technical Features

### CEFR Level System
Exercises are organized by European language learning levels (A1, A1+, A2, A2+, B1, B1+, B2) with progressive difficulty.

### Progress Tracking
- `UnitProgress` interface tracks completion, scores, and timing
- `UserStats` maintains XP, streak, units completed, and accuracy
- Local state management (no backend required)

### Speech Integration
- Web Speech API for text-to-speech (phrase pronunciation)
- SpeechRecognition API for voice input exercises
- Audio feedback and pronunciation guidance

### Exercise System
- Modular exercise architecture supporting 15+ exercise types
- Generic exercise wrapper with consistent UI/UX
- Dynamic scoring and feedback systems
- Randomized question selection and shuffling

## Build System

- Standard Create React App setup with TypeScript
- **scripts/generate-build-info.js**: Generates build metadata (version, commit hash, timestamp)
- ESLint configured with React App presets
- Jest testing with Testing Library
- Docker multi-stage build for production deployment

## Testing

Tests are located in `src/__tests__/` using React Testing Library and Jest:
- Component unit tests for main learning components
- Service tests for AudioService and SpeechRecognitionService
- Run tests with `npm test` (watch mode) or `npm test -- --watchAll=false` (CI mode)

## Development Notes

### Working with Units
- Each unit file follows the `LearningUnit` interface structure
- Units contain vocabulary items and associated exercises
- Exercise types must match the `ExerciseType` enum in LearningTypes.ts

### Adding New Exercise Types
1. Add the new type to `ExerciseType` in `types/LearningTypes.ts`
2. Create the exercise component in `components/exercises/`
3. Update `GenericExercise.tsx` to handle the new type

### Internationalization
- Currently supports French and Luxembourgish
- Text content is embedded in components (no i18n library)
- Audio pronunciation uses Web Speech API with language detection

## Deployment

- CI/CD via GitHub Actions (.github/workflows/ci.yml)
- Docker containerized with Nginx serving static build
- Kubernetes deployment files in k8s/ directory
- Build info injection for version tracking in production