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

describe('AudioService', () => {
  let originalAudioContext: typeof AudioContext | undefined
  let originalSpeechSynthesis: SpeechSynthesis | undefined
  let originalSpeechSynthesisUtterance: typeof SpeechSynthesisUtterance | undefined
  let mockContext: MockAudioContext

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

    window.speechSynthesis = {
      speak: jest.fn(),
      cancel: jest.fn()
    } as unknown as SpeechSynthesis

    ;(window as any).SpeechSynthesisUtterance = jest.fn(function (this: any, text: string) {
      this.text = text
      this.lang = ''
      this.rate = 1
      this.pitch = 1
      this.volume = 1
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

  it('speaks luxembourgish text and resolves when finished', async () => {
    const speakMock = jest.fn((utterance: SpeechSynthesisUtterance) => {
      if (utterance.onend) {
        utterance.onend(new Event('end'))
      }
    })
    window.speechSynthesis = {
      speak: speakMock,
      cancel: jest.fn()
    } as unknown as SpeechSynthesis

    await expect(AudioService.speakLuxembourgish('Moien')).resolves.toBeUndefined()
    expect(speakMock).toHaveBeenCalled()
    const utterance = speakMock.mock.calls[0][0]
    expect(utterance.lang).toBe('de-DE')
    expect(utterance.rate).toBe(0.7)
  })

  it('rejects when speech synthesis is unavailable', async () => {
    delete (window as any).speechSynthesis

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
