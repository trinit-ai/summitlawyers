import { describe, it, expect } from 'vitest'
import { renderWithProviders } from './test-utils'
import ContactForm from '../components/ContactForm'

describe('ContactForm', () => {
  it('renders all required fields', () => {
    const { container } = renderWithProviders(<ContactForm />)
    expect(container.querySelector('input[name="firstName"]')).toBeInTheDocument()
    expect(container.querySelector('input[name="lastName"]')).toBeInTheDocument()
    expect(container.querySelector('input[name="email"]')).toBeInTheDocument()
    expect(container.querySelector('input[name="phone"]')).toBeInTheDocument()
    expect(container.querySelector('select[name="service"]')).toBeInTheDocument()
    expect(container.querySelector('textarea[name="message"]')).toBeInTheDocument()
    expect(container.querySelector('input[name="agree"]')).toBeInTheDocument()
  })

  it('renders honeypot field', () => {
    const { container } = renderWithProviders(<ContactForm />)
    expect(container.querySelector('input[name="company"]')).toBeInTheDocument()
  })

  it('hides service select when subject prop is given', () => {
    const { container } = renderWithProviders(<ContactForm subject="Personal Injury" />)
    expect(container.querySelector('select[name="service"]')).not.toBeInTheDocument()
  })

  it('renders disclaimer text', () => {
    const { container } = renderWithProviders(<ContactForm />)
    expect(container.textContent).toMatch(/not, nor is it intended to be, legal advice/i)
  })
})
