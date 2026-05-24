// Testimonials slider. Auto-rotates every 5s and supports manual
// next/prev + dots. Reviews come from data/testimonials.js.
import { useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const item = testimonials[index]

  return (
    <section id="testimonials" className="bg-cream">
      <div className="section">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Client Reviews</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Trusted by <span className="text-gradient-gold">investors like you</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative max-w-3xl mx-auto mt-12">
            <div className="rounded-3xl bg-white ring-1 ring-ink/10 p-8 sm:p-12 text-center">
              <Quote className="mx-auto text-gold/60" size={40} />
              <p className="font-display text-lg sm:text-2xl text-ink/90 leading-relaxed mt-6 italic">
                “{item.text}”
              </p>
              <div className="flex justify-center gap-1 mt-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold-dark" />
                ))}
              </div>
              <div className="mt-4">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="text-ink/50 text-sm"> · {item.location}</span>
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white ring-1 ring-ink/10 text-ink flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white ring-1 ring-ink/10 text-ink flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-7 bg-gold' : 'w-2 bg-ink/25'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
