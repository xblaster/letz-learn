import { act, fireEvent, render, screen } from '@testing-library/react'
import App from '../App'
import { sentenceBuilderExercises } from '../data/SentenceBuilderData'

describe('SentenceBuilderWorkshop', () => {
  it('permet de naviguer et de compléter un atelier de phrases', async () => {
    jest.useFakeTimers()

    try {
      render(<App />)

      expect(await screen.findByText('Lëtzebuergesch Léieren')).toBeInTheDocument()

      fireEvent.click(screen.getByRole('button', { name: "Lancer l'atelier" }))

      expect(await screen.findByText('Atelier de construction de phrases')).toBeInTheDocument()
      expect(screen.getByText('Scénario 1 sur 3')).toBeInTheDocument()

      for (let index = 0; index < sentenceBuilderExercises.length; index += 1) {
        const exercise = sentenceBuilderExercises[index]
        const expectedSentence = exercise.expectedSentence ?? exercise.correctAnswer
        const tokens = expectedSentence.split(' ')

        tokens.forEach(word => {
          fireEvent.click(screen.getByRole('button', { name: word }))
        })

        fireEvent.click(screen.getByRole('button', { name: 'Valider la phrase' }))

        act(() => {
          jest.advanceTimersByTime(1600)
        })

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
    } finally {
      jest.useRealTimers()
    }
  })
})
