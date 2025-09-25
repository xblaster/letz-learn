const SILENCE = 0.0001

type OscillatorShape = OscillatorType | 'triangle' | 'sine' | 'square' | 'sawtooth'

interface ToneOptions {
  frequency: number
  startTime: number
  duration: number
  volume?: number
  type?: OscillatorShape
  attack?: number
  decay?: number
}

let sharedContext: AudioContext | null = null
let contextInitialization: Promise<AudioContext | null> | null = null

const getAudioContextConstructor = (): (new () => AudioContext) | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  const win = window as typeof window & { webkitAudioContext?: typeof AudioContext }
  return win.AudioContext ?? win.webkitAudioContext
}

const ensureAudioContext = async (): Promise<AudioContext | null> => {
  if (sharedContext && sharedContext.state !== 'closed') {
    if (sharedContext.state === 'suspended') {
      try {
        await sharedContext.resume()
      } catch (error) {
        console.warn('AudioContext resume failed:', error)
        return sharedContext
      }
    }
    return sharedContext
  }

  if (contextInitialization) {
    return contextInitialization
  }

  contextInitialization = (async () => {
    if (typeof window === 'undefined') {
      return null
    }

    const AudioContextConstructor = getAudioContextConstructor()
    if (!AudioContextConstructor) {
      console.warn('AudioContext not supported on this device')
      return null
    }

    const context = new AudioContextConstructor()
    sharedContext = context

    if (context.state === 'suspended') {
      try {
        await context.resume()
      } catch (error) {
        console.warn('AudioContext resume failed:', error)
      }
    }

    return context
  })()

  try {
    return await contextInitialization
  } finally {
    contextInitialization = null
  }
}

const scheduleTone = (context: AudioContext, options: ToneOptions) => {
  const { frequency, startTime, duration, volume = 0.08, type = 'sine', attack = 0.02, decay } = options

  const oscillator = context.createOscillator()
  const gainNode = context.createGain()

  oscillator.type = type as OscillatorType
  oscillator.frequency.setValueAtTime(frequency, startTime)

  const gain = Math.max(volume, SILENCE)
  gainNode.gain.setValueAtTime(SILENCE, startTime)
  gainNode.gain.linearRampToValueAtTime(gain, startTime + Math.min(attack, duration))

  const releaseTime = decay ?? Math.max(duration - attack, 0.05)
  gainNode.gain.linearRampToValueAtTime(SILENCE, startTime + releaseTime)

  oscillator.connect(gainNode)
  gainNode.connect(context.destination)

  oscillator.start(startTime)
  oscillator.stop(startTime + Math.max(duration, releaseTime) + 0.02)

  oscillator.onended = () => {
    oscillator.disconnect()
    gainNode.disconnect()
  }
}

const playNotes = async (
  pattern: Array<{
    frequency: number
    offset: number
    duration: number
    volume?: number
    type?: OscillatorShape
    attack?: number
    decay?: number
  }>
) => {
  const context = await ensureAudioContext()
  if (!context) {
    return
  }

  const baseTime = context.currentTime + 0.05

  for (const note of pattern) {
    scheduleTone(context, {
      frequency: note.frequency,
      startTime: baseTime + note.offset,
      duration: note.duration,
      volume: note.volume,
      type: note.type,
      attack: note.attack,
      decay: note.decay
    })
  }
}

export const primeAudioContext = async (): Promise<void> => {
  const context = await ensureAudioContext()
  if (!context) {
    return
  }

  if (context.state === 'suspended') {
    try {
      await context.resume()
    } catch (error) {
      console.warn('AudioContext resume failed during prime:', error)
      return
    }
  }

  try {
    const now = context.currentTime
    const oscillator = context.createOscillator()
    const gain = context.createGain()

    oscillator.frequency.setValueAtTime(440, now)
    oscillator.type = 'sine'

    gain.gain.setValueAtTime(SILENCE, now)
    gain.gain.linearRampToValueAtTime(SILENCE, now + 0.05)

    oscillator.connect(gain)
    gain.connect(context.destination)

    oscillator.start(now)
    oscillator.stop(now + 0.05)

    oscillator.onended = () => {
      oscillator.disconnect()
      gain.disconnect()
    }
  } catch (error) {
    console.warn('Prime audio failed:', error)
  }
}

export const playSuccessChime = async (): Promise<void> => {
  await playNotes([
    { frequency: 523.25, offset: 0, duration: 0.18, volume: 0.07, type: 'sine' },
    { frequency: 659.25, offset: 0.07, duration: 0.18, volume: 0.065, type: 'sine' },
    { frequency: 783.99, offset: 0.14, duration: 0.2, volume: 0.06, type: 'sine' }
  ])
}

export const playErrorTone = async (): Promise<void> => {
  const context = await ensureAudioContext()
  if (!context) {
    return
  }

  const now = context.currentTime + 0.03
  const oscillator = context.createOscillator()
  const gain = context.createGain()

  oscillator.type = 'sawtooth'
  oscillator.frequency.setValueAtTime(400, now)
  oscillator.frequency.linearRampToValueAtTime(200, now + 0.35)

  gain.gain.setValueAtTime(SILENCE, now)
  gain.gain.linearRampToValueAtTime(0.18, now + 0.05)
  gain.gain.linearRampToValueAtTime(SILENCE, now + 0.35)

  oscillator.connect(gain)
  gain.connect(context.destination)

  oscillator.start(now)
  oscillator.stop(now + 0.4)

  oscillator.onended = () => {
    oscillator.disconnect()
    gain.disconnect()
  }
}

export const playTransitionTone = async (): Promise<void> => {
  await playNotes([
    { frequency: 330, offset: 0, duration: 0.18, volume: 0.07, type: 'triangle', attack: 0.03 },
    { frequency: 440, offset: 0.12, duration: 0.18, volume: 0.06, type: 'triangle', attack: 0.02 }
  ])
}

export const playCompletionFanfare = async (): Promise<void> => {
  await playNotes([
    { frequency: 523.25, offset: 0, duration: 0.22, volume: 0.08, type: 'square', attack: 0.03 },
    { frequency: 659.25, offset: 0.18, duration: 0.22, volume: 0.07, type: 'square', attack: 0.03 },
    { frequency: 783.99, offset: 0.36, duration: 0.22, volume: 0.07, type: 'square', attack: 0.03 },
    { frequency: 1046.5, offset: 0.54, duration: 0.24, volume: 0.06, type: 'square', attack: 0.02 }
  ])
}

export const playDebugTone = async (): Promise<void> => {
  await playNotes([
    { frequency: 660, offset: 0, duration: 0.18, volume: 0.05, type: 'sine' }
  ])
}
