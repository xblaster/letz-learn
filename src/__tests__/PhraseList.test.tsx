import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PhraseList from '../components/PhraseList'

describe('PhraseList', () => {
  it('renders the list of phrases with summary information', () => {
    render(<PhraseList />)

    expect(screen.getByText('Bibliothèque de phrases')).toBeInTheDocument()
    expect(screen.getByText('Moien!')).toBeInTheDocument()
    expect(screen.getByText('Bonjour !')).toBeInTheDocument()
  })

  it('filters phrases based on search input', () => {
    render(<PhraseList />)

    const searchInput = screen.getByPlaceholderText('Rechercher une phrase ou une traduction')
    fireEvent.change(searchInput, { target: { value: 'gare' } })

    expect(screen.getByText("Wou ass d'Gare?")).toBeInTheDocument()
    expect(screen.queryByText('Moien!')).not.toBeInTheDocument()
  })

  it('filters phrases by category using the select menu', async () => {
    const user = userEvent.setup()
    render(<PhraseList />)

    const categorySelect = screen.getByRole('combobox')
    await user.click(categorySelect)

    const listbox = await screen.findByRole('listbox')
    await user.click(within(listbox).getByText('Restaurant'))

    expect(screen.getByText("Ech hätt gäer...")).toBeInTheDocument()
    expect(screen.getByText("D'Rechnung, wann ech gelift")).toBeInTheDocument()
    expect(screen.queryByText('Moien!')).not.toBeInTheDocument()
  })

  it('plays pronunciation when the icon button is clicked', () => {
    render(<PhraseList />)

    const speakSpy = jest.spyOn(window.speechSynthesis, 'speak')
    const button = screen.getByRole('button', { name: 'Écouter Moien!' })
    fireEvent.click(button)

    expect(speakSpy).toHaveBeenCalled()
  })
})
