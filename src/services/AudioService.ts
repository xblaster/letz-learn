// Service Audio pour l'application Luxembourgish
// Génère des sons synthétiques comme Duolingo

export class AudioService {
  private static audioContext: AudioContext | null = null
  private static speechSynth: SpeechSynthesis | null = null
  private static preferredVoice: SpeechSynthesisVoice | null = null
  private static voiceResolution: Promise<SpeechSynthesisVoice | null> | null = null

  private static readonly correctionRules: Array<
    [RegExp, string | ((substring: string, ...args: any[]) => string)]
  > = [
    [/['’‘`]/g, "'"],
    [
      /\b([dtns])'(?=\w)/gi,
      (_match: string, letter: string) => {
        const replacements: Record<string, string> = {
          d: 'de ',
          t: 'te ',
          n: 'en ',
          s: 'se '
        }
        const replacement = replacements[letter.toLowerCase()] ?? ''
        if (!replacement) {
          return replacement
        }
        return letter === letter.toUpperCase()
          ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
          : replacement
      }
    ],
    [/[äâáà]/gi, 'a'],
    [/[ëêéè]/gi, 'e'],
    [/[ïîíì]/gi, 'i'],
    [/[öôóò]/gi, 'o'],
    [/[üûúù]/gi, 'u'],
    [/ß/g, 'ss'],
    [/ç/g, 'c']
  ]

  // Initialisation du contexte audio
  private static getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return this.audioContext
  }

  private static getSpeechSynth(): SpeechSynthesis {
    if (!this.speechSynth) {
      this.speechSynth = window.speechSynthesis
    }
    return this.speechSynth
  }

  private static async getPreferredVoice(): Promise<SpeechSynthesisVoice | null> {
    if (this.preferredVoice) {
      return this.preferredVoice
    }

    if (this.voiceResolution) {
      return this.voiceResolution
    }

    this.voiceResolution = (async () => {
      const synth = this.getSpeechSynth()
      if (!synth || typeof synth.getVoices !== 'function') {
        return null
      }

      const voices = await this.waitForVoices(synth)
      const selected = this.selectPreferredVoice(voices)
      if (selected) {
        this.preferredVoice = selected
      }
      return selected
    })()

    try {
      return await this.voiceResolution
    } finally {
      this.voiceResolution = null
    }
  }

  private static async waitForVoices(
    synth: SpeechSynthesis
  ): Promise<SpeechSynthesisVoice[]> {
    const existingVoices = synth.getVoices()
    if (existingVoices.length > 0) {
      return existingVoices
    }

    return new Promise(resolve => {
      const synthAny = synth as unknown as {
        onvoiceschanged?: (() => void) | null
      }

      let resolved = false
      let timeoutId: ReturnType<typeof setTimeout> | undefined

      const cleanup = () => {
        if (typeof synth.removeEventListener === 'function') {
          synth.removeEventListener('voiceschanged', handleVoicesChanged)
        }
        if (synthAny && 'onvoiceschanged' in synthAny) {
          synthAny.onvoiceschanged = null
        }
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }

      const handleVoicesChanged = () => {
        if (resolved) {
          return
        }
        const availableVoices = synth.getVoices()
        if (availableVoices.length > 0) {
          resolved = true
          cleanup()
          resolve(availableVoices)
        }
      }

      if (typeof synth.addEventListener === 'function') {
        synth.addEventListener('voiceschanged', handleVoicesChanged)
      } else if (synthAny) {
        synthAny.onvoiceschanged = handleVoicesChanged
      }

      timeoutId = setTimeout(() => {
        if (!resolved) {
          resolved = true
          cleanup()
          resolve([])
        }
      }, 1000)
    })
  }

  private static selectPreferredVoice(
    voices: SpeechSynthesisVoice[]
  ): SpeechSynthesisVoice | null {
    if (!voices.length) {
      return null
    }

    const normalizeLang = (lang?: string) => lang?.toLowerCase() ?? ''
    const findByLang = (lang: string) =>
      voices.find(voice => normalizeLang(voice.lang) === lang) ?? null

    return (
      findByLang('lb-lu') ||
      findByLang('lb') ||
      findByLang('de-lu') ||
      findByLang('de-de') ||
      voices[0] ||
      null
    )
  }

  private static applyTextCorrections(text: string): string {
    let normalized = text

    for (const [pattern, replacement] of this.correctionRules) {
      if (typeof replacement === 'string') {
        normalized = normalized.replace(pattern, replacement)
      } else {
        normalized = normalized.replace(pattern, replacement as any)
      }
    }

    return normalized.replace(/\s{2,}/g, ' ').trim()
  }

  // Sons de transition et feedback
  static playSuccessSound(): void {
    const ctx = this.getAudioContext()

    // Son de succès doux: accord majeur harmonieux
    const frequencies = [523.25, 659.25, 783.99] // Do, Mi, Sol
    const duration = 0.12

    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.type = 'sine' // Forme d'onde plus douce
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.06) // Notes plus rapprochées
      gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.06)
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + index * 0.06 + 0.02) // Volume réduit
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + index * 0.06 + duration)

      osc.start(ctx.currentTime + index * 0.06)
      osc.stop(ctx.currentTime + index * 0.06 + duration)
    })
  }

  static playErrorSound(): void {
    const ctx = this.getAudioContext()

    // Son d'erreur: note descendante
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.frequency.setValueAtTime(400, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(200, ctx.currentTime + 0.3)

    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.3)
  }

  static playProgressSound(): void {
    const ctx = this.getAudioContext()

    // Son de progression: note montante douce
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = 'sine'
    osc.frequency.setValueAtTime(330, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(440, ctx.currentTime + 0.2)

    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.2)
  }

  static playCompletionSound(): void {
    const ctx = this.getAudioContext()

    // Son de completion d'unité: fanfare joyeuse
    const notes = [523.25, 659.25, 783.99, 1046.50] // Do, Mi, Sol, Do aigu

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.type = 'square'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.15)

      gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.15)
      gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + index * 0.15 + 0.05)
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + index * 0.15 + 0.25)

      osc.start(ctx.currentTime + index * 0.15)
      osc.stop(ctx.currentTime + index * 0.15 + 0.25)
    })
  }

  static playClickSound(): void {
    const ctx = this.getAudioContext()

    // Son de clic: petit "pop" doux
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = 'sine'
    osc.frequency.setValueAtTime(800, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(400, ctx.currentTime + 0.1)

    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.1)
  }

  // Prononciation des mots luxembourgeois
  static async speakLuxembourgish(
    content: string | Array<{ text: string; rate?: number; pitch?: number }>,
    defaultRate: number = 0.7,
    defaultPitch: number = 1.0
  ): Promise<void> {
    if (!('speechSynthesis' in window) || !window.speechSynthesis) {
      throw new Error('Speech synthesis not supported')
    }

    // Réactiver l'audio si nécessaire
    await this.enableAudio()

    const phrases = Array.isArray(content)
      ? content
      : [{ text: content, rate: defaultRate, pitch: defaultPitch }]

    const synth = this.getSpeechSynth()

    // Arrêter toute lecture en cours
    if (synth.speaking) {
      synth.cancel()
      // Attendre un peu pour que l'annulation prenne effet
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    const voice = await this.getPreferredVoice()

    for (const phrase of phrases) {
      const utterance = new SpeechSynthesisUtterance(
        this.applyTextCorrections(phrase.text)
      )

      utterance.lang = voice?.lang ?? 'de-DE'
      utterance.voice = voice ?? null
      utterance.rate = phrase.rate ?? defaultRate
      utterance.pitch = phrase.pitch ?? defaultPitch
      utterance.volume = 0.8

      await new Promise<void>((resolve, reject) => {
        let resolved = false

        const cleanup = () => {
          if (!resolved) {
            resolved = true
            clearTimeout(timeoutId)
          }
        }

        const timeoutId = setTimeout(() => {
          cleanup()
          reject(new Error('Speech synthesis timeout'))
        }, 10000) // Timeout de 10 secondes

        utterance.onend = () => {
          cleanup()
          resolve()
        }

        utterance.onerror = (event) => {
          cleanup()
          console.warn('Speech synthesis error:', event)
          // Ne pas rejeter, mais résoudre pour continuer
          resolve()
        }

        try {
          synth.speak(utterance)
        } catch (error) {
          cleanup()
          console.warn('Failed to speak:', error)
          resolve() // Continuer même en cas d'erreur
        }
      })
    }
  }

  // Prononciation avec bouton visuel
  static createPronunciationButton(
    text: string,
    onClick?: () => void
  ): HTMLButtonElement {
    const button = document.createElement('button')
    button.className = 'pronunciation-button'
    button.innerHTML = '🔊'
    button.title = `Écouter: ${text}`

    button.addEventListener('click', async (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Effet visuel du bouton
      button.classList.add('playing')
      this.playClickSound()

      try {
        await this.speakLuxembourgish(text)
        if (onClick) onClick()
      } catch (error) {
        console.warn('Pronunciation failed:', error)
      } finally {
        button.classList.remove('playing')
      }
    })

    return button
  }

  // Feedback audio selon le résultat
  static playFeedbackSound(isCorrect: boolean, score?: number): void {
    if (isCorrect) {
      if (score && score >= 90) {
        this.playCompletionSound() // Score parfait
      } else {
        this.playSuccessSound() // Bonne réponse
      }
    } else {
      this.playErrorSound() // Mauvaise réponse
    }
  }

  // Son de transition entre exercices
  static playTransitionSound(): void {
    this.playProgressSound()
  }

  // Validation de l'activation audio (requis par les navigateurs)
  static async enableAudio(): Promise<void> {
    try {
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        await ctx.resume()
      }

      // Vérifier aussi speechSynthesis
      const synth = this.getSpeechSynth()
      if (synth && synth.paused) {
        synth.resume()
      }

      // Réinitialiser le cache des voix si nécessaire
      if (synth && synth.getVoices().length === 0) {
        this.preferredVoice = null
      }
    } catch (error) {
      console.warn('Audio enable failed:', error)
      // Ne pas bloquer l'application
    }
  }
}