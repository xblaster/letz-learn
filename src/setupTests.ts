import '@testing-library/jest-dom'

declare global {
  interface Window {
    webkitSpeechRecognition?: typeof SpeechRecognition
  }
}

if (typeof window !== 'undefined') {
  const matchMediaMock = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  })

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: matchMediaMock
  })

  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    configurable: true,
    value: matchMediaMock
  })
}

if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
  ;(window as any).speechSynthesis = {
    speak: () => {},
    cancel: () => {},
    getVoices: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    onvoiceschanged: null
  }
}

if (typeof window !== 'undefined' && typeof (window as any).SpeechSynthesisUtterance === 'undefined') {
  ;(window as any).SpeechSynthesisUtterance = function (this: any, text: string) {
    this.text = text
    this.lang = ''
    this.rate = 1
    this.pitch = 1
    this.volume = 1
    this.voice = null
    this.onend = null
    this.onerror = null
  }
}

export {}
