import '@testing-library/jest-dom'

declare global {
  interface Window {
    webkitSpeechRecognition?: typeof SpeechRecognition
  }
}

if (typeof window !== 'undefined' && !window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
}

if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
  ;(window as any).speechSynthesis = {
    speak: jest.fn(),
    cancel: jest.fn(),
    getVoices: jest.fn(() => []),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
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
