import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SimpleUnitsList from '../components/SimpleUnitsList'

describe('SimpleUnitsList', () => {
  it('affiche le bouton de retour encourageant et déclenche onBack', async () => {
    const user = userEvent.setup()
    const onBack = jest.fn()

    render(<SimpleUnitsList onBack={onBack} onUnitComplete={jest.fn()} />)

    const backButton = screen.getByRole('button', {
      name: /Zréck op d'Haaptmenü – du meeschters dat! \(Retour vers le menu principal\)/i
    })

    expect(backButton).toBeInTheDocument()

    await user.click(backButton)

    expect(onBack).toHaveBeenCalledTimes(1)
  })
})
