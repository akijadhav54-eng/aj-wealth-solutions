// BLOG PAGE — lists all articles as clickable cards.
import { Link } from 'react-router-dom'
import { CalendarDays, Clock, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { blogs } from '../data/blogs'

export default function Blog() {
  return (
    <>
      <SEO
        title="Investment Blog | SIP, Tax Saving & Money Tips — AJ Wealth Solutions"
        description="Simple, practical articles on SIP investing, tax saving, mutual funds and building wealth — from AMFI-registered distributor AJ Wealth Solutions, Pune."
        path="/blog"
      />

      <section className="pt-36 pb-10 px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">Insights</span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Money lessons, made <span className="text-gradient-gold">simple</span>
          </h1>
          <p className="text-white/65 mt-5 max-w-2xl mx-auto">
            Practical, jargon-free articles to help you invest with confidence and discipline.
          </p>
        </Reveal>
      </section>

      <section className="px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full rounded-2xl bg-navy-700/40 ring-1 ring-white/10 p-6 hover:ring-gold/40 hover:-translate-y-1 transition-all">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 ring-1 ring-white/5 flex items-center justify-center mb-5">
                    <span className="text-gold/40 font-display text-3xl">AJ</span>
                  </div>
                  <span className="eyebrow !mb-2">{post.category}</span>
                  <h2 className="font-display text-lg text-white leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-white/40 text-xs mt-5">
                    <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
                    Read article <ArrowRight size={15} />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
