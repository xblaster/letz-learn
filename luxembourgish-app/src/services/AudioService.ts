// Service Audio pour l'application Luxembourgish
// Génère des sons synthétiques comme Duolingo

export class AudioService {
  private static audioContext: AudioContext | null = null
  private static speechSynth: SpeechSynthesis | null = null

  // Initialisation du contexte audio
  private static getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return this.audioContext
  }

  // Sons de transition et feedback
  static playSuccessSound(): void {
    const ctx = this.getAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    // Son de succès: accord majeur ascendant
    const frequencies = [523.25, 659.25, 783.99] // Do, Mi, Sol
    const duration = 0.15

    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.1)
      gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.1)
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + index * 0.1 + 0.05)
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + index * 0.1 + duration)

      osc.start(ctx.currentTime + index * 0.1)
      osc.stop(ctx.currentTime + index * 0.1 + duration)
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
  static speakLuxembourgish(text: string, rate: number = 0.7): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject(new Error('Speech synthesis not supported'))
        return
      }

      const utterance = new SpeechSynthesisUtterance(text)

      // Configuration pour le luxembourgeois (utilise l'allemand comme approximation)
      utterance.lang = 'de-DE'
      utterance.rate = rate
      utterance.pitch = 1.0
      utterance.volume = 0.8

      utterance.onend = () => resolve()
      utterance.onerror = (event) => reject(event.error)

      speechSynthesis.speak(utterance)
    })
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
    const ctx = this.getAudioContext()
    if (ctx.state === 'suspended') {
      await ctx.resume()
    }
  }
}