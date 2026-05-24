// Hero section (LIGHT THEME) — the first thing visitors see.
// Light cream background, deep-navy text, gold accents, and a
// decorative animated "orbit" that echoes the cycle motif in your logo.
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, MessageCircle } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Background atmosphere: soft gold glows + subtle grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-light/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#10133a 1px, transparent 1px), linear-gradient(90deg, #10133a 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: copy */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {site.role}
          </motion.span>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-ink"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Turning Dreams Into{' '}
            <span className="text-gradient-gold italic">Disciplined Investments</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg text-ink/70 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Personalised mutual fund and SIP planning to help you reach your financial
            goals with confidence. Honest advice, zero advisory fees, and a partner who
            stays with you for the long run.
          </motion.p>

          {/* Three CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-gold">
              Start Your SIP <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline">
              <CalendarCheck size={18} /> Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={18} /> Contact Us
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span>✓ AMFI Registered</span>
            <span>✓ SEBI Aware</span>
            <span>✓ 100% Free Guidance</span>
          </motion.div>
        </div>

        {/* Right: animated orbit with logo */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            {/* rotating gold ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-gold/25" />
            {/* center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-white ring-1 ring-gold/30 shadow-gold flex items-center justify-center overflow-hidden">
                <img src="/logo.jpg" alt="AJ Wealth Solutions" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
