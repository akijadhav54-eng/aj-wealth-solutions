// Renders a blog article's plain-text `content` into styled HTML.
// Rules (see data/blogs.js):
//   "## " -> heading   |   "- " -> bullet   |   "> " -> tip box
//   "*..*" line -> small italic note   |   blank line -> new paragraph
export default function BlogContent({ content }) {
  const lines = content.trim().split('\n')
  const blocks = []
  let listBuffer = []

  // Flush any collected bullet points into a single list block
  const flushList = () => {
    if (listBuffer.length) {
      blocks.push({ type: 'ul', items: [...listBuffer] })
      listBuffer = []
    }
  }

  lines.forEach((raw) => {
    const line = raw.trim()
    if (!line) {
      flushList()
      return
    }
    if (line.startsWith('## ')) {
      flushList()
      blocks.push({ type: 'h2', text: line.slice(3) })
    } else if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2))
    } else if (line.startsWith('> ')) {
      flushList()
      blocks.push({ type: 'tip', text: line.slice(2) })
    } else if (line.startsWith('*') && line.endsWith('*')) {
      flushList()
      blocks.push({ type: 'note', text: line.slice(1, -1) })
    } else {
      flushList()
      blocks.push({ type: 'p', text: line })
    }
  })
  flushList()

  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === 'h2')
          return <h2 key={i} className="font-display text-2xl text-ink pt-4">{b.text}</h2>
        if (b.type === 'ul')
          return (
            <ul key={i} className="space-y-2 pl-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-ink/75 leading-relaxed">
                  <span className="text-gold-dark mt-1.5 shrink-0">•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )
        if (b.type === 'tip')
          return (
            <div key={i} className="rounded-xl bg-gold/10 ring-1 ring-gold/30 px-5 py-4 text-ink/85 italic">
              {b.text}
            </div>
          )
        if (b.type === 'note')
          return <p key={i} className="text-xs text-ink/40 italic pt-4 border-t border-ink/10">{b.text}</p>
        return <p key={i} className="text-ink/75 leading-relaxed">{b.text}</p>
      })}
    </div>
  )
}
