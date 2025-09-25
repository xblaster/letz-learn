import { fireEvent, render, screen } from '@testing-library/react'
import SentenceBuilderWorkshop from '../components/SentenceBuilderWorkshop'
import { sentenceBuilderExercises } from '../data/SentenceBuilderData'
import type { Exercise } from '../types/LearningTypes'

jest.mock('../components/exercises/SentenceConstructionExercise', () => ({
  __esModule: true,
  default: ({
    onComplete,
    exercise
  }: {
    onComplete: (isCorrect: boolean, time: number, attempts?: number) => void
    exercise: Exercise
  }) => (
    <div>
      <p data-testid={`exercise-${exercise.id}`}>Exercice simulé</p>
      <button type="button" onClick={() => onComplete(true, 1200, 1)}>
        Simuler une réussite
      </button>
    </div>
  )
}))

describe('SentenceBuilderWorkshop', () => {
  it('permet de parcourir tous les scénarios et de relancer un atelier', async () => {
    render(<SentenceBuilderWorkshop />)

    expect(screen.getByText('Atelier de construction de phrases')).toBeInTheDocument()
    expect(screen.getByText('Scénario 1 sur 3')).toBeInTheDocument()

    for (let index = 0; index < sentenceBuilderExercises.length; index += 1) {
      fireEvent.click(screen.getByRole('button', { name: 'Simuler une réussite' }))

      const continueLabel =
        index === sentenceBuilderExercises.length - 1 ? 'Voir le récapitulatif' : 'Scénario suivant'

      const continueButton = await screen.findByRole('button', { name: continueLabel })
      fireEvent.click(continueButton)
    }

    expect(await screen.findByText("Récapitulatif de l'atelier")).toBeInTheDocument()
    sentenceBuilderExercises.forEach(exercise => {
      const sentence = exercise.expectedSentence ?? exercise.correctAnswer
      expect(screen.getByText(sentence)).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: "Recommencer l'atelier" }))

    expect(await screen.findByText('Scénario 1 sur 3')).toBeInTheDocument()
  })
})
