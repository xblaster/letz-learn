export interface StartRecognitionOptions {
  language?: string
  interimResults?: boolean
  continuous?: boolean
  onStart?: () => void
  onEnd?: () => void
  onResult: (transcript: string, event: SpeechRecognitionEvent) => void
  onError?: (error: string, event: SpeechRecognitionErrorEvent) => void
}

export class SpeechRecognitionService {
  private static recognition: SpeechRecognition | null = null

  static isSupported(): boolean {
    if (typeof window === 'undefined') {
      return false
    }

    return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition)
  }

  static startRecognition(options: StartRecognitionOptions): void {
    if (!this.isSupported()) {
      throw new Error('Speech recognition not supported')
    }

    if (this.recognition) {
      this.recognition.stop()
      this.recognition = null
    }

    const Constructor = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new Constructor()

    recognition.lang = options.language ?? 'de-DE'
    recognition.continuous = options.continuous ?? false
    recognition.interimResults = options.interimResults ?? false
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      options.onStart?.()
    }

    recognition.onend = () => {
      options.onEnd?.()
      this.recognition = null
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      options.onError?.(event.error, event)
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = this.extractTranscript(event)
      options.onResult(transcript, event)
    }

    recognition.start()
    this.recognition = recognition
  }

  static stopRecognition(): void {
    if (this.recognition) {
      this.recognition.stop()
      this.recognition = null
    }
  }

  static abortRecognition(): void {
    if (this.recognition) {
      this.recognition.abort()
      this.recognition = null
    }
  }

  static extractTranscript(event: SpeechRecognitionEvent): string {
    let transcript = ''

    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i]
      if (result[0]) {
        transcript += `${result[0].transcript} `
      }
    }

    return transcript.trim()
  }

  static normalizeTranscript(transcript: string): string {
    return transcript
      .toLowerCase()
      .normalize('NFD')
      .replace(/[^a-z\s']/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }

  static calculateSimilarity(reference: string, actual: string): number {
    const normalizedReference = this.normalizeTranscript(reference)
    const normalizedActual = this.normalizeTranscript(actual)

    if (!normalizedReference && !normalizedActual) {
      return 1
    }

    const longer = normalizedReference.length >= normalizedActual.length ? normalizedReference : normalizedActual
    const shorter = longer === normalizedReference ? normalizedActual : normalizedReference

    if (longer.length === 0) {
      return 1
    }

    const distance = this.levenshteinDistance(longer, shorter)
    return (longer.length - distance) / longer.length
  }

  static scoreTranscript(reference: string, actual: string): { similarity: number; isCorrect: boolean } {
    const similarity = this.calculateSimilarity(reference, actual)
    return {
      similarity,
      isCorrect: similarity >= 0.65
    }
  }

  static simulateRecognition(target: string, onComplete: (transcript: string, similarity: number) => void): void {
    const normalizedTarget = this.normalizeTranscript(target)

    setTimeout(() => {
      const simulatedSuccess = Math.random() > 0.35
      const simulatedTranscript = simulatedSuccess
        ? target
        : this.shuffleWords(normalizedTarget)

      const similarity = this.calculateSimilarity(target, simulatedTranscript)
      onComplete(simulatedTranscript, similarity)
    }, 1800)
  }

  private static shuffleWords(sentence: string): string {
    const words = sentence.split(' ').filter(Boolean)
    for (let i = words.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[words[i], words[j]] = [words[j], words[i]]
    }
    return words.join(' ')
  }

  private static levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = []

    for (let i = 0; i <= str2.length; i += 1) {
      matrix[i] = [i]
    }

    for (let j = 0; j <= str1.length; j += 1) {
      matrix[0][j] = j
    }

    for (let i = 1; i <= str2.length; i += 1) {
      for (let j = 1; j <= str1.length; j += 1) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }

    return matrix[str2.length][str1.length]
  }
}
