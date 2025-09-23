import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import VocabularyQuiz from '../components/VocabularyQuiz'

const vocabularySequence = [
  { luxembourgish: 'Moien', french: 'Bonjour' },
  { luxembourgish: 'Äddi', french: 'Au revoir' },
  { luxembourgish: 'Merci', french: 'Merci' },
  { luxembourgish: 'Pardon', french: 'Excusez-moi' },
  { luxembourgish: 'Wéi geet et?', french: 'Comment allez-vous?' },
  { luxembourgish: 'Ech verstinn net', french: 'Je ne comprends pas' },
  { luxembourgish: 'Wou ass...?', french: 'Où est...?' },
  { luxembourgish: 'Wéivill kascht dat?', french: 'Combien ça coûte?' },
  { luxembourgish: 'Waasser', french: 'Eau' },
  { luxembourgish: 'Kaffi', french: 'Café' }
]

const translationMap = new Map(vocabularySequence.map(item => [item.luxembourgish, item.french]))

describe('VocabularyQuiz', () => {
  let mathRandomSpy: jest.SpyInstance<number, []>

  beforeEach(() => {
    mathRandomSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0.1)
  })

  afterEach(() => {
    mathRandomSpy.mockRestore()
  })

  it('renders the first question with its answer options', async () => {
    render(<VocabularyQuiz />)

    expect(await screen.findByText('Question 1')).toBeInTheDocument()
    expect(screen.getByText('Quiz vocabulaire')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 3 })
    const match = heading.textContent?.match(/«\s*(.*)\s*»/)
    expect(match).not.toBeNull()
    const currentWord = match ? match[1].trim() : ''
    expect(translationMap.has(currentWord)).toBe(true)

    const optionButtons = screen
      .getAllByRole('button')
      .filter(button =>
        Boolean(button.textContent && !button.textContent.includes('Question suivante'))
      )
    expect(optionButtons).toHaveLength(4)
    expect(screen.getByText('Score actuel : 0 / 10')).toBeInTheDocument()
  })

  it('displays a hint when an incorrect answer is selected', async () => {
    render(<VocabularyQuiz />)

    await screen.findByText('Question 1')

    const heading = screen.getByRole('heading', { level: 3 })
    const match = heading.textContent?.match(/«\s*(.*)\s*»/)
    const currentWord = match ? match[1].trim() : ''
    const correctAnswer = translationMap.get(currentWord.trim())

    const optionButtons = screen
      .getAllByRole('button')
      .filter(button =>
        Boolean(button.textContent && !button.textContent.includes('Question suivante'))
      )
    const wrongOption = optionButtons.find(button => button.textContent !== correctAnswer)
    expect(wrongOption).toBeDefined()

    fireEvent.click(wrongOption!)

    expect(screen.getByText(/Astuce/)).toBeInTheDocument()
  })

  it('moves to the next question after a correct answer', async () => {
    render(<VocabularyQuiz />)

    await screen.findByText('Question 1')

    const heading = screen.getByRole('heading', { level: 3 })
    const match = heading.textContent?.match(/«\s*(.*)\s*»/)
    const currentWord = match ? match[1].trim() : ''
    const correctAnswer = translationMap.get(currentWord.trim())
    expect(correctAnswer).toBeDefined()

    const correctButton = screen
      .getAllByRole('button')
      .find(button => button.textContent === correctAnswer)
    expect(correctButton).toBeDefined()

    fireEvent.click(correctButton!)
    fireEvent.click(screen.getByRole('button', { name: 'Question suivante' }))

    expect(await screen.findByText('Question 2')).toBeInTheDocument()
    expect(screen.getByText('Score actuel : 1 / 10')).toBeInTheDocument()
  })

  it('shows the quiz result summary after answering all questions', async () => {
    render(<VocabularyQuiz />)

    for (let index = 0; index < vocabularySequence.length; index += 1) {
      await screen.findByText(`Question ${index + 1}`)

      const heading = screen.getByRole('heading', { level: 3 })
      const match = heading.textContent?.match(/«\s*(.*)\s*»/)
      expect(match).not.toBeNull()

      const luxembourgishWord = match ? match[1] : ''
      const correctAnswer = translationMap.get(luxembourgishWord.trim())
      expect(correctAnswer).toBeDefined()

      fireEvent.click(screen.getByRole('button', { name: correctAnswer! }))

      const nextLabel = index === vocabularySequence.length - 1 ? 'Terminer' : 'Question suivante'
      fireEvent.click(screen.getByRole('button', { name: nextLabel }))
    }

    await waitFor(() => expect(screen.getByText('Résultat du quiz')).toBeInTheDocument())
    expect(screen.getByText('Vous avez obtenu 10 réponses sur 10.')).toBeInTheDocument()
    expect(screen.getByText('100% de réussite')).toBeInTheDocument()
  })
})
