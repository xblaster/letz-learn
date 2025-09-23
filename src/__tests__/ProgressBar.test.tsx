import { render, screen } from '@testing-library/react'
import ProgressBar from '../components/ProgressBar'

describe('ProgressBar', () => {
  it('displays progress information', () => {
    render(<ProgressBar progress={50} currentStep={2} totalSteps={4} />)

    expect(screen.getByText('Progression')).toBeInTheDocument()
    expect(screen.getByText('2 / 4 · 50%')).toBeInTheDocument()
    expect(
      screen.getByText("Atteignez 4 étapes pour compléter l'unité.")
    ).toBeInTheDocument()
  })

  it('renders indicators for completed and upcoming steps', () => {
    render(<ProgressBar progress={75} currentStep={3} totalSteps={4} />)

    const completedIcons = screen.getAllByTestId('CheckRoundedIcon')
    expect(completedIcons).toHaveLength(2)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })
})
