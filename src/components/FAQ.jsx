// FAQ accordion. Click a question to expand its answer.
// Questions live in data/faqs.js.
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { faqs } from '../data/faqs'

export default function FAQ() {
  const [open, setOpen] = useState(0) // first item open by default

  return (
    <section id="faq" className="section">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">FAQ</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          Questions? <span className="text-gradient-gold">Answered.</span>
        </h2>
      </Reveal>

      <div className="max-w-3xl mx-auto mt-12 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="rounded-2xl bg-white ring-1 ring-ink/10 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-medium text-ink">{faq.q}</span>
                  <span className="shrink-0 text-gold-dark">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 sm:px-6 pb-6 text-ink/65 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
