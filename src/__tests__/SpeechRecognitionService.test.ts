import { SpeechRecognitionService } from '../services/SpeechRecognitionService'

declare global {
  interface Window {
    webkitSpeechRecognition?: typeof SpeechRecognition
  }
}

class MockSpeechRecognition {
  lang = ''
  continuous = false
  interimResults = false
  maxAlternatives = 1
  onstart: (() => void) | null = null
  onend: (() => void) | null = null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null = null
  onresult: ((event: SpeechRecognitionEvent) => void) | null = null
  start = jest.fn()
  stop = jest.fn()
  abort = jest.fn()
}

describe('SpeechRecognitionService', () => {
  let originalSpeechRecognition: typeof window.SpeechRecognition | undefined
  let originalWebkitSpeechRecognition: typeof window.webkitSpeechRecognition | undefined

  beforeEach(() => {
    originalSpeechRecognition = window.SpeechRecognition
    originalWebkitSpeechRecognition = window.webkitSpeechRecognition
    ;(SpeechRecognitionService as any).recognition = null
  })

  afterEach(() => {
    window.SpeechRecognition = originalSpeechRecognition
    window.webkitSpeechRecognition = originalWebkitSpeechRecognition
    jest.clearAllMocks()
    jest.useRealTimers()
  })

  it('detects support based on browser APIs', () => {
    delete (window as any).SpeechRecognition
    delete (window as any).webkitSpeechRecognition
    expect(SpeechRecognitionService.isSupported()).toBe(false)

    window.SpeechRecognition = jest.fn() as any
    expect(SpeechRecognitionService.isSupported()).toBe(true)
  })

  it('throws an error when starting recognition without support', () => {
    delete (window as any).SpeechRecognition
    delete (window as any).webkitSpeechRecognition

    expect(() =>
      SpeechRecognitionService.startRecognition({
        onResult: jest.fn()
      })
    ).toThrow('Speech recognition not supported')
  })

  it('configures and starts recognition with provided options', () => {
    const mockRecognition = new MockSpeechRecognition()
    const constructor = jest.fn(() => mockRecognition)
    window.SpeechRecognition = constructor as any

    const onStart = jest.fn()
    const onEnd = jest.fn()
    const onResult = jest.fn()
    const onError = jest.fn()

    SpeechRecognitionService.startRecognition({
      language: 'fr-LU',
      interimResults: true,
      continuous: true,
      onStart,
      onEnd,
      onResult,
      onError
    })

    expect(constructor).toHaveBeenCalled()
    expect(mockRecognition.lang).toBe('fr-LU')
    expect(mockRecognition.interimResults).toBe(true)
    expect(mockRecognition.continuous).toBe(true)
    expect(mockRecognition.start).toHaveBeenCalled()

    mockRecognition.onstart?.()
    expect(onStart).toHaveBeenCalled()

    const event = {
      resultIndex: 0,
      results: [
        {
          0: { transcript: 'Moien', confidence: 1 },
          length: 1,
          isFinal: true
        }
      ],
      length: 1
    } as unknown as SpeechRecognitionEvent

    mockRecognition.onresult?.(event)
    expect(onResult).toHaveBeenCalledWith('Moien', event)

    const errorEvent = {
      error: 'no-speech'
    } as SpeechRecognitionErrorEvent

    mockRecognition.onerror?.(errorEvent)
    expect(onError).toHaveBeenCalledWith('no-speech', errorEvent)

    mockRecognition.onend?.()
    expect(onEnd).toHaveBeenCalled()
    expect((SpeechRecognitionService as any).recognition).toBeNull()
  })

  it('stops and aborts recognition correctly', () => {
    const mockRecognition = new MockSpeechRecognition()
    window.SpeechRecognition = jest.fn(() => mockRecognition) as any

    SpeechRecognitionService.startRecognition({ onResult: jest.fn() })

    SpeechRecognitionService.stopRecognition()
    expect(mockRecognition.stop).toHaveBeenCalled()
    expect((SpeechRecognitionService as any).recognition).toBeNull()

    SpeechRecognitionService.startRecognition({ onResult: jest.fn() })
    SpeechRecognitionService.abortRecognition()
    expect(mockRecognition.abort).toHaveBeenCalled()
    expect((SpeechRecognitionService as any).recognition).toBeNull()
  })

  it('extracts transcript from recognition event', () => {
    const event = {
      resultIndex: 0,
      results: [
        {
          0: { transcript: 'Moien', confidence: 0.9 },
          length: 1,
          isFinal: true
        },
        {
          0: { transcript: 'all', confidence: 0.8 },
          length: 1,
          isFinal: false
        }
      ],
      length: 2
    } as unknown as SpeechRecognitionEvent

    expect(SpeechRecognitionService.extractTranscript(event)).toBe('Moien all')
  })

  it('normalizes transcript text', () => {
    expect(SpeechRecognitionService.normalizeTranscript("Äddi, Wéi geet et?"))
      .toBe("addi wei geet et")
  })

  it('calculates similarity between transcripts', () => {
    expect(SpeechRecognitionService.calculateSimilarity('Moien', 'Moien')).toBe(1)
    expect(
      SpeechRecognitionService.calculateSimilarity('Moien alleguer', 'Moien')
    ).toBeLessThan(1)
  })

  it('scores transcript based on similarity threshold', () => {
    const good = SpeechRecognitionService.scoreTranscript('Moien', 'Moien')
    expect(good.isCorrect).toBe(true)

    const bad = SpeechRecognitionService.scoreTranscript('Moien', 'Salut')
    expect(bad.isCorrect).toBe(false)
  })

  it('simulates recognition results for practice mode', () => {
    jest.useFakeTimers()

    const callback = jest.fn()
    const mathRandomSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0.9)

    SpeechRecognitionService.simulateRecognition('Moien', callback)
    jest.advanceTimersByTime(1800)

    expect(callback).toHaveBeenCalledWith('Moien', 1)

    mathRandomSpy.mockReturnValue(0)

    SpeechRecognitionService.simulateRecognition('Moien alleguer', callback)
    jest.advanceTimersByTime(1800)

    const [transcript, similarity] = callback.mock.calls[1]
    expect(transcript).not.toBe('Moien alleguer')
    expect(similarity).toBeLessThan(1)

    mathRandomSpy.mockRestore()
  })
})
