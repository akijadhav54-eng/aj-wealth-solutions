// BLOG POST PAGE — shows one full article based on the URL slug.
// URL looks like /blog/why-start-sip-early
import { useParams, Link, Navigate } from 'react-router-dom'
import { CalendarDays, Clock, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import BlogContent from '../components/BlogContent'
import { blogs } from '../data/blogs'
import { site } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogs.find((b) => b.slug === slug)

  // If the article doesn't exist, send the visitor to the blog list
  if (!post) return <Navigate to="/blog" replace />

  // Suggest other articles to read next
  const others = blogs.filter((b) => b.slug !== slug).slice(0, 2)

  return (
    <>
      <SEO title={`${post.title} | AJ Wealth Solutions`} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="pt-36 pb-16 px-5 sm:px-8 lg:px-16 max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gold-dark text-sm hover:gap-3 transition-all">
          <ArrowLeft size={16} /> All articles
        </Link>

        <Reveal>
          <span className="eyebrow mt-6">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-ink/40 text-sm mt-4">
            <span className="flex items-center gap-1.5"><CalendarDays size={15} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readTime}</span>
          </div>

          <div className="aspect-[2/1] rounded-2xl bg-gradient-to-br from-gold/10 to-cream ring-1 ring-ink/5 flex items-center justify-center my-8">
            <span className="text-gold/40 font-display text-5xl">AJ</span>
          </div>

          {/* Article body */}
          <BlogContent content={post.content} />

          {/* CTA box */}
          <div className="rounded-2xl bg-gradient-to-br from-gold/15 to-cream ring-1 ring-gold/20 p-7 mt-10 text-center">
            <h3 className="font-display text-xl text-ink">Ready to start your journey?</h3>
            <p className="text-ink/65 text-sm mt-2">Book a free, no-pressure consultation with {site.owner}.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer" className="btn-outline"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </article>

      {/* Read next */}
      {others.length > 0 && (
        <section className="px-5 sm:px-8 lg:px-16 max-w-3xl mx-auto pb-24">
          <h3 className="font-display text-2xl text-ink mb-6">Read next</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {others.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block rounded-2xl bg-white ring-1 ring-ink/10 p-6 hover:ring-gold/40 transition-all">
                <span className="eyebrow !mb-2">{p.category}</span>
                <h4 className="font-display text-lg text-ink group-hover:text-gold-dark transition-colors leading-snug">{p.title}</h4>
                <span className="inline-flex items-center gap-1.5 text-gold-dark text-sm font-semibold mt-3 group-hover:gap-3 transition-all">
                  Read <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
