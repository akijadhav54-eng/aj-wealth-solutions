// Home-page blog preview: shows the 3 latest real articles from
// data/blogs.js and links to the full blog. (Filename kept the same
// so Home.jsx doesn't need changing.)
import { Link } from 'react-router-dom'
import { CalendarDays, Clock, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { blogs } from '../data/blogs'

export default function BlogPlaceholder() {
  const posts = blogs.slice(0, 3)

  return (
    <section id="blog" className="section">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">Insights</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          From the <span className="text-gradient-gold">blog</span>
        </h2>
        <p className="text-white/65 mt-4">Simple, practical money lessons to help you invest with confidence.</p>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.1}>
            <Link to={`/blog/${post.slug}`} className="group block h-full">
              <article className="h-full rounded-2xl bg-navy-700/40 ring-1 ring-white/10 p-6 hover:ring-gold/40 hover:-translate-y-1 transition-all">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 ring-1 ring-white/5 flex items-center justify-center mb-5">
                  <span className="text-gold/40 font-display text-3xl">AJ</span>
                </div>
                <span className="eyebrow !mb-2">{post.category}</span>
                <h3 className="font-display text-lg text-white leading-snug group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-white/40 text-xs mt-4">
                  <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/blog" className="btn-outline">
          View All Articles <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
