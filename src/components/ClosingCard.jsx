// Auto-linkifies phone numbers, extensions, and emails in a closing paragraph
// and wraps it in a styled gold-rule callout card.

const PHONE_RE = /(\d{3}[.\-]\d{3}[.\-]\d{4}(?:,?\s*ext\.?\s*\d+)?)/gi
const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g

function linkify(text) {
  // Combined splitter — capture both phones and emails in one pass
  const parts = []
  const combined = new RegExp(`${PHONE_RE.source}|${EMAIL_RE.source}`, 'gi')
  let last = 0
  let m
  while ((m = combined.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const match = m[0]
    if (match.includes('@')) {
      parts.push(<a key={m.index} href={`mailto:${match}`}>{match}</a>)
    } else {
      const digits = match.replace(/[^\d]/g, '').slice(0, 10)
      parts.push(<a key={m.index} href={`tel:${digits}`}>{match}</a>)
    }
    last = m.index + match.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function ClosingCard({ text, label = 'Get in touch' }) {
  return (
    <div className="closing-card">
      <div className="closing-card-rule">
        <span></span><i></i><span></span>
      </div>
      <div className="closing-card-label">{label}</div>
      <p className="closing-card-text">{linkify(text)}</p>
    </div>
  )
}
