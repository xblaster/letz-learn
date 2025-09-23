import { AudioService } from '../services/AudioService'

class MockOscillatorNode {
  frequency = {
    setValueAtTime: jest.fn(),
    linearRampToValueAtTime: jest.fn()
  }

  type: string = 'sine'

  connect = jest.fn()

  start = jest.fn()

  stop = jest.fn()
}

class MockGainNode {
  gain = {
    setValueAtTime: jest.fn(),
    linearRampToValueAtTime: jest.fn()
  }

  connect = jest.fn()
}

class MockAudioContext {
  currentTime = 0

  state: 'running' | 'suspended' = 'running'

  destination = {}

  createOscillator = jest.fn(() => new MockOscillatorNode())

  createGain = jest.fn(() => new MockGainNode())

  resume = jest.fn(async () => {
    this.state = 'running'
  })
}

const createVoice = (lang: string, name: string = lang): SpeechSynthesisVoice =>
  ({
    default: false,
    lang,
    localService: true,
    name,
    voiceURI: name
  } as SpeechSynthesisVoice)

class MockSpeechSynthesis {
  voices: SpeechSynthesisVoice[] = []

  utterances: SpeechSynthesisUtterance[] = []

  onvoiceschanged: (() => void) | null = null

  private listeners: Map<string, Set<() => void>> = new Map()

  speak = jest.fn((utterance: SpeechSynthesisUtterance) => {
    this.utterances.push(utterance)
    utterance.onend?.(new Event('end'))
  })

  cancel = jest.fn()

  getVoices = jest.fn(() => this.voices)

  addEventListener = jest.fn((event: string, handler: () => void) => {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(handler)
  })

  removeEventListener = jest.fn((event: string, handler: () => void) => {
    this.listeners.get(event)?.delete(handler)
  })

  dispatch(event: string) {
    this.listeners.get(event)?.forEach(listener => listener())
    if (event === 'voiceschanged' && this.onvoiceschanged) {
      this.onvoiceschanged.call(this as unknown as SpeechSynthesis)
    }
  }
}

describe('AudioService', () => {
  let originalAudioContext: typeof AudioContext | undefined
  let originalSpeechSynthesis: SpeechSynthesis | undefined
  let originalSpeechSynthesisUtterance: typeof SpeechSynthesisUtterance | undefined
  let mockContext: MockAudioContext
  let mockSpeechSynthesis: MockSpeechSynthesis

  const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

  beforeEach(() => {
    originalAudioContext = (window as any).AudioContext
    originalSpeechSynthesis = window.speechSynthesis
    originalSpeechSynthesisUtterance = (window as any).SpeechSynthesisUtterance

    mockContext = new MockAudioContext()
    const AudioContextMock = jest.fn(() => mockContext)
    ;(window as any).AudioContext = AudioContextMock
    ;(window as any).webkitAudioContext = undefined

    ;(AudioService as any).audioContext = null
    ;(AudioService as any).speechSynth = null
    ;(AudioService as any).preferredVoice = null
    ;(AudioService as any).voiceResolution = null

    mockSpeechSynthesis = new MockSpeechSynthesis()
    window.speechSynthesis = mockSpeechSynthesis as unknown as SpeechSynthesis

    ;(window as any).SpeechSynthesisUtterance = jest.fn(function (this: any, text: string) {
      this.text = text
      this.lang = ''
      this.rate = 1
      this.pitch = 1
      this.volume = 1
      this.voice = null
      this.onend = null
      this.onerror = null
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
    if (originalAudioContext) {
      ;(window as any).AudioContext = originalAudioContext
    }
    if (originalSpeechSynthesis) {
      window.speechSynthesis = originalSpeechSynthesis
    }
    if (originalSpeechSynthesisUtterance) {
      ;(window as any).SpeechSynthesisUtterance = originalSpeechSynthesisUtterance
    }
  })

  it('creates oscillators for success sound', () => {
    AudioService.playSuccessSound()
    expect(mockContext.createOscillator).toHaveBeenCalledTimes(3)
    expect(mockContext.createGain).toHaveBeenCalledTimes(3)
  })

  it('creates oscillator for error sound', () => {
    AudioService.playErrorSound()
    expect(mockContext.createOscillator).toHaveBeenCalledTimes(1)
    expect(mockContext.createGain).toHaveBeenCalledTimes(1)
  })

  it('resumes the audio context when suspended', async () => {
    await AudioService.enableAudio()
    const context = (AudioService as any).audioContext as MockAudioContext
    context.state = 'suspended'

    await AudioService.enableAudio()
    expect(context.resume).toHaveBeenCalled()
  })

  it('plays completion sound when feedback is perfect', () => {
    const completionSpy = jest.spyOn(AudioService, 'playCompletionSound').mockImplementation(() => undefined)
    const successSpy = jest.spyOn(AudioService, 'playSuccessSound').mockImplementation(() => undefined)

    AudioService.playFeedbackSound(true, 95)
    expect(completionSpy).toHaveBeenCalled()
    expect(successSpy).not.toHaveBeenCalled()
  })

  it('plays success sound when answer is correct but not perfect', () => {
    const completionSpy = jest.spyOn(AudioService, 'playCompletionSound').mockImplementation(() => undefined)
    const successSpy = jest.spyOn(AudioService, 'playSuccessSound').mockImplementation(() => undefined)

    AudioService.playFeedbackSound(true, 70)
    expect(successSpy).toHaveBeenCalled()
    expect(completionSpy).not.toHaveBeenCalled()
  })

  it('plays error sound when answer is incorrect', () => {
    const errorSpy = jest.spyOn(AudioService, 'playErrorSound').mockImplementation(() => undefined)

    AudioService.playFeedbackSound(false, 20)
    expect(errorSpy).toHaveBeenCalled()
  })

  it('plays transition sound via progress sound', () => {
    const progressSpy = jest.spyOn(AudioService, 'playProgressSound').mockImplementation(() => undefined)

    AudioService.playTransitionSound()
    expect(progressSpy).toHaveBeenCalled()
  })

  it('speaks luxembourgish text using selected voice and corrections', async () => {
    const luxVoice = createVoice('lb-LU', 'Lux Voice')
    mockSpeechSynthesis.voices = [luxVoice]

    await expect(
      AudioService.speakLuxembourgish("Moien D’Frënd", 0.6, 1.2)
    ).resolves.toBeUndefined()

    expect(mockSpeechSynthesis.speak).toHaveBeenCalledTimes(1)
    const utterance = (mockSpeechSynthesis.speak as jest.Mock).mock.calls[0][0] as SpeechSynthesisUtterance
    expect(utterance.voice).toBe(luxVoice)
    expect(utterance.lang).toBe('lb-LU')
    expect(utterance.text).toBe('Moien De Frend')
    expect(utterance.rate).toBe(0.6)
    expect(utterance.pitch).toBe(1.2)
    expect(utterance.volume).toBe(0.8)
  })

  it('waits for luxembourgish voices when they load asynchronously', async () => {
    mockSpeechSynthesis.voices = []

    const speakPromise = AudioService.speakLuxembourgish('Salut')
    await Promise.resolve()

    const germanVoice = createVoice('de-DE', 'German Voice')
    const luxVoice = createVoice('lb-LU', 'Lux Voice')
    mockSpeechSynthesis.voices = [germanVoice, luxVoice]
    mockSpeechSynthesis.dispatch('voiceschanged')

    await speakPromise

    const utterance = (mockSpeechSynthesis.speak as jest.Mock).mock.calls[0][0] as SpeechSynthesisUtterance
    expect(utterance.voice).toBe(luxVoice)
    expect(utterance.lang).toBe('lb-LU')
  })

  it('falls back to de-LU voice when luxembourgish is unavailable', async () => {
    const fallbackVoice = createVoice('de-LU', 'German Luxembourgish')
    mockSpeechSynthesis.voices = [fallbackVoice]

    await AudioService.speakLuxembourgish('Moien')

    const utterance = (mockSpeechSynthesis.speak as jest.Mock).mock.calls[0][0] as SpeechSynthesisUtterance
    expect(utterance.voice).toBe(fallbackVoice)
    expect(utterance.lang).toBe('de-LU')
  })

  it('falls back to de-DE voice when no localized voice is available', async () => {
    const germanVoice = createVoice('de-DE', 'German Voice')
    mockSpeechSynthesis.voices = [germanVoice]

    await AudioService.speakLuxembourgish('Moien')

    const utterance = (mockSpeechSynthesis.speak as jest.Mock).mock.calls[0][0] as SpeechSynthesisUtterance
    expect(utterance.voice).toBe(germanVoice)
    expect(utterance.lang).toBe('de-DE')
  })

  it('handles speech synthesis without voice support gracefully', async () => {
    const speakMock = jest.fn((utterance: SpeechSynthesisUtterance) => {
      utterance.onend?.(new Event('end'))
    })
    const fallbackSynthesis = {
      speak: speakMock,
      cancel: jest.fn()
    } as unknown as SpeechSynthesis

    const previousSynth = window.speechSynthesis
    window.speechSynthesis = fallbackSynthesis
    ;(AudioService as any).speechSynth = null
    ;(AudioService as any).preferredVoice = null
    ;(AudioService as any).voiceResolution = null

    try {
      await expect(AudioService.speakLuxembourgish('Moien')).resolves.toBeUndefined()
      const utterance = speakMock.mock.calls[0][0] as SpeechSynthesisUtterance
      expect(utterance.voice).toBeNull()
      expect(utterance.lang).toBe('de-DE')
    } finally {
      window.speechSynthesis = previousSynth
      ;(AudioService as any).speechSynth = null
      ;(AudioService as any).preferredVoice = null
      ;(AudioService as any).voiceResolution = null
    }
  })

  it('allows overriding rate and pitch per phrase', async () => {
    const germanVoice = createVoice('de-DE', 'German Voice')
    mockSpeechSynthesis.voices = [germanVoice]

    await AudioService.speakLuxembourgish(
      [
        { text: 'Moien', rate: 0.6 },
        { text: 'Wéi geet et?', pitch: 1.3 }
      ],
      0.8,
      1.1
    )

    expect(mockSpeechSynthesis.speak).toHaveBeenCalledTimes(2)
    const firstUtterance = (mockSpeechSynthesis.speak as jest.Mock).mock.calls[0][0] as SpeechSynthesisUtterance
    const secondUtterance = (mockSpeechSynthesis.speak as jest.Mock).mock.calls[1][0] as SpeechSynthesisUtterance

    expect(firstUtterance.voice).toBe(germanVoice)
    expect(firstUtterance.rate).toBe(0.6)
    expect(firstUtterance.pitch).toBe(1.1)
    expect(secondUtterance.rate).toBe(0.8)
    expect(secondUtterance.pitch).toBe(1.3)
  })

  it('rejects when speech synthesis is unavailable', async () => {
    delete (window as any).speechSynthesis
    ;(AudioService as any).speechSynth = null
    ;(AudioService as any).preferredVoice = null
    ;(AudioService as any).voiceResolution = null

    await expect(AudioService.speakLuxembourgish('Moien')).rejects.toThrow('Speech synthesis not supported')
  })

  it('creates pronunciation button that triggers playback', async () => {
    const clickSpy = jest.spyOn(AudioService, 'playClickSound').mockImplementation(() => undefined)
    const speakSpy = jest.spyOn(AudioService, 'speakLuxembourgish').mockResolvedValue(undefined)
    const onClick = jest.fn()

    const button = AudioService.createPronunciationButton('Moien', onClick)
    expect(button.classList.contains('pronunciation-button')).toBe(true)

    button.click()
    await flushPromises()

    expect(clickSpy).toHaveBeenCalled()
    expect(speakSpy).toHaveBeenCalledWith('Moien')
    expect(onClick).toHaveBeenCalled()
    expect(button.classList.contains('playing')).toBe(false)
  })
})
