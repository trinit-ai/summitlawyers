import '@testing-library/jest-dom/vitest'

// Mocks for browser APIs not present in jsdom
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

// Lenis pokes requestAnimationFrame; jsdom has it but make sure it's stable
if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = (cb) => setTimeout(cb, 16)
  global.cancelAnimationFrame = (id) => clearTimeout(id)
}

// Silence noisy React warnings during tests if needed
const origError = console.error
console.error = (...args) => {
  const msg = String(args[0] || '')
  if (msg.includes('not wrapped in act')) return
  origError(...args)
}
