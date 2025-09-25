import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import WordPairingExercise from '../components/exercises/WordPairingExercise'
import { Exercise } from '../types/LearningTypes'

const createExercise = (): Exercise => ({
  id: 'word-pairing-test',
  type: 'word_pairing',
  question: 'Associe chaque mot luxembourgeois à sa traduction française.',
  correctAnswer: 'N/A',
  vocabularyItem: {
    id: 'vocab-1',
    luxembourgish: 'Moien',
    french: 'Bonjour',
    pronunciation: 'ˈmɔɪ̯ən',
    usage: 'Formule de salutation courante.'
  },
  wordPairs: [
    { id: 'pair-1', left: 'Moien', right: 'Bonjour' },
    { id: 'pair-2', left: 'Äddi', right: 'Au revoir' }
  ],
  columnLabels: {
    left: 'Luxembourgeois',
    right: 'Français'
  }
})

describe('WordPairingExercise', () => {
  let mathRandomSpy: jest.SpyInstance<number, []>

  beforeEach(() => {
    mathRandomSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0.1)
  })

  afterEach(() => {
    mathRandomSpy.mockRestore()
  })

  it('affiche un message de réussite et désactive les mots appariés après une association correcte', async () => {
    render(<WordPairingExercise exercise={createExercise()} onComplete={jest.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: 'Moien' }))
    fireEvent.click(screen.getByRole('button', { name: 'Bonjour' }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Moien' })).toBeDisabled()
    })

    expect(
      screen.getByText('Parfait ! Continuez avec les autres mots.')
    ).toBeInTheDocument()
  })

  it("affiche un message d'erreur lorsqu'une mauvaise association est tentée", async () => {
    render(<WordPairingExercise exercise={createExercise()} onComplete={jest.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: 'Moien' }))
    fireEvent.click(screen.getByRole('button', { name: 'Au revoir' }))

    expect(
      await screen.findByText('« Moien » ne correspond pas à « Au revoir ». Réessayez !')
    ).toBeInTheDocument()
  })

  it("appelle onComplete lorsque toutes les associations sont trouvées", async () => {
    const handleComplete = jest.fn()

    render(<WordPairingExercise exercise={createExercise()} onComplete={handleComplete} />)

    fireEvent.click(screen.getByRole('button', { name: 'Moien' }))
    fireEvent.click(screen.getByRole('button', { name: 'Bonjour' }))

    fireEvent.click(screen.getByRole('button', { name: 'Äddi' }))
    fireEvent.click(screen.getByRole('button', { name: 'Au revoir' }))

    await waitFor(() => {
      expect(handleComplete).toHaveBeenCalledWith(true, expect.any(Number), 2)
    })
  })
})
