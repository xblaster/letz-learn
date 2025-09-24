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

  // Initialisation du contexte audio avec support Android
  private static getAudioContext(): AudioContext {
    if (!this.audioContext) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (AudioContextClass) {
        this.audioContext = new AudioContextClass()
      } else {
        console.warn('AudioContext not supported on this device')
        throw new Error('AudioContext not supported')
      }
    }
    return this.audioContext
  }

  private static getSpeechSynth(): SpeechSynthesis {
    if (!this.speechSynth) {
      this.speechSynth = window.speechSynthesis
    }
    return this.speechSynth
  }

  // Détection Android
  private static isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent)
  }

  // Son silencieux pour débloquer l'audio sur Android
  private static async playUnlockSound(): Promise<void> {
    try {
      const ctx = this.getAudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      // Son très court et silencieux
      osc.frequency.setValueAtTime(440, ctx.currentTime)
      gain.gain.setValueAtTime(0.001, ctx.currentTime) // Quasi-silencieux

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.1)

      // Attendre la fin
      await new Promise(resolve => setTimeout(resolve, 200))
    } catch (error) {
      console.warn('Unlock sound failed:', error)
    }
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

  // Sons de transition et feedback avec protection Android
  static playSuccessSound(): void {
    try {
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        console.warn('AudioContext suspended, cannot play success sound')
        return
      }

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
    } catch (error) {
      console.warn('Success sound failed:', error)
    }
  }

  static playErrorSound(): void {
    try {
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        console.warn('AudioContext suspended, cannot play error sound')
        return
      }

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
    } catch (error) {
      console.warn('Error sound failed:', error)
    }
  }

  static playProgressSound(): void {
    try {
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        console.warn('AudioContext suspended, cannot play progress sound')
        return
      }

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
    } catch (error) {
      console.warn('Progress sound failed:', error)
    }
  }

  static playCompletionSound(): void {
    try {
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        console.warn('AudioContext suspended, cannot play completion sound')
        return
      }

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
    } catch (error) {
      console.warn('Completion sound failed:', error)
    }
  }

  static playClickSound(): void {
    try {
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        console.warn('AudioContext suspended, cannot play click sound')
        return
      }

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
    } catch (error) {
      console.warn('Click sound failed:', error)
    }
  }

  // Prononciation des mots luxembourgeois avec fixes Android
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

    // Fix Android: Délai pour éviter les conflits
    if (this.isAndroid()) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    // Arrêter toute lecture en cours de manière plus robuste
    if (synth.speaking || synth.pending) {
      synth.cancel()
      // Attendre que la synthèse soit vraiment arrêtée
      let attempts = 0
      while ((synth.speaking || synth.pending) && attempts < 10) {
        await new Promise(resolve => setTimeout(resolve, 50))
        attempts++
      }
      // Délai supplémentaire pour Android
      const delay = this.isAndroid() ? 200 : 100
      await new Promise(resolve => setTimeout(resolve, delay))
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

        // Timeout plus long sur Android
        const timeout = this.isAndroid() ? 15000 : 10000
        const timeoutId = setTimeout(() => {
          cleanup()
          console.warn('Speech synthesis timeout on Android')
          resolve() // Résoudre plutôt que rejeter sur Android
        }, timeout)

        utterance.onend = () => {
          cleanup()
          resolve()
        }

        utterance.onerror = (event) => {
          cleanup()
          console.warn('Speech synthesis error:', event)
          resolve() // Continuer même en cas d'erreur
        }

        // Fix Android: Gestion spéciale des événements
        if (this.isAndroid()) {
          utterance.onstart = () => {
            console.log('Speech started on Android')
          }

          utterance.onpause = () => {
            console.log('Speech paused on Android')
          }

          utterance.onresume = () => {
            console.log('Speech resumed on Android')
          }
        }

        try {
          synth.speak(utterance)

          // Fix Android: Vérifier si la synthèse a vraiment commencé
          if (this.isAndroid()) {
            setTimeout(() => {
              if (!synth.speaking && !resolved) {
                console.warn('Speech failed to start on Android, resolving anyway')
                cleanup()
                resolve()
              }
            }, 1000)
          }
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

  // Validation de l'activation audio avec fixes Android
  static async enableAudio(): Promise<void> {
    try {
      // 1. Activer le contexte audio
      const ctx = this.getAudioContext()
      if (ctx.state === 'suspended') {
        await ctx.resume()
      }

      // 2. Fix Android: Jouer un son silencieux pour débloquer l'audio
      if (this.isAndroid()) {
        await this.playUnlockSound()
      }

      // 3. Vérifier aussi speechSynthesis
      const synth = this.getSpeechSynth()
      if (synth) {
        if (synth.paused) {
          synth.resume()
        }

        // Fix Android: Forcer le rechargement des voix
        if (this.isAndroid() && synth.getVoices().length === 0) {
          this.preferredVoice = null
          // Attendre un peu pour que les voix se chargent
          await new Promise(resolve => setTimeout(resolve, 500))
        }
      }
    } catch (error) {
      console.warn('Audio enable failed:', error)
      // Ne pas bloquer l'application
    }
  }
}