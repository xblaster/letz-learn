import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App main menu learning cards', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => ({
        version: 'test',
        buildHash: 'hash',
        buildTime: 'now',
        commitHash: 'commit'
      })
    } as Response)

    window.localStorage.clear()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('presents the three sections with bilingual metadata chips', async () => {
    render(<App />)

    expect(
      await screen.findByText(
        'Sektioun 1 – Éischt Schrëtt am Alldag (Unitë 1-8) · Section 1 – Premiers pas au quotidien (unités 1-8)'
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'Sektioun 2 – Kommunikatioun am Alldag (Unitë 9-16) · Section 2 – Communication quotidienne (unités 9-16)'
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'Sektioun 3 – Praktescht Liewen & Autonomie (Unitë 17-24) · Section 3 – Vie pratique et autonomie (unités 17-24)'
      )
    ).toBeInTheDocument()
  })
})
