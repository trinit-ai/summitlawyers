import { Component } from 'react'
import { FIRM } from '../data/firm'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App error boundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="hero" style={{ minHeight: '100vh', padding: '120px 24px' }}>
          <div className="hero-bg"></div>
          <div className="hero-eyebrow">
            <span></span><em>Something went wrong</em><span></span>
          </div>
          <div className="hero-name" style={{ fontSize: 'clamp(32px, 4vw, 52px)', textAlign: 'center' }}>
            We're sorry — an error occurred.
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 520, textAlign: 'center', lineHeight: 1.8, marginTop: 24 }}>
            Please refresh the page, or contact us directly if the problem persists.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
            <a href="/" className="nav-cta">Return Home</a>
            <a href={FIRM.phoneHref} className="nav-cta">Call {FIRM.phone}</a>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}
