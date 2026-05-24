// Blog section placeholder. Swap these dummy cards for real posts later
// (or link them to a Medium/LinkedIn article). Kept simple on purpose.
import { CalendarDays, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const posts = [
  {
    tag: 'SIP Basics',
    title: 'Why starting your SIP early matters more than the amount',
    date: 'Coming soon',
  },
  {
    tag: 'Tax Planning',
    title: 'ELSS vs PPF: which 80C option is right for you?',
    date: 'Coming soon',
  },
  {
    tag: 'Mindset',
    title: '5 habits of disciplined investors who actually build wealth',
    date: 'Coming soon',
  },
]

export default function BlogPlaceholder() {
  return (
    <section id="blog" className="section">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">Insights</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          From the <span className="text-gradient-gold">blog</span>
        </h2>
        <p className="text-white/65 mt-4">Simple, practical money lessons — fresh articles coming soon.</p>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group h-full rounded-2xl bg-navy-700/40 ring-1 ring-white/10 p-6 hover:ring-gold/40 transition-all">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 ring-1 ring-white/5 flex items-center justify-center mb-5">
                <span className="text-gold/40 font-display text-3xl">AJ</span>
              </div>
              <span className="eyebrow !mb-2">{p.tag}</span>
              <h3 className="font-display text-lg text-white leading-snug group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <div className="flex items-center gap-2 text-white/40 text-xs mt-4">
                <CalendarDays size={14} /> {p.date}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
