// Why Choose Us — trust-building feature grid.
import { BadgeCheck, Wallet, Headphones, LineChart, Lock, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'AMFI Registered',
    text: 'Officially registered and accountable — your investments are handled by a certified professional.',
  },
  {
    icon: Wallet,
    title: 'Zero Advisory Fees',
    text: 'My guidance costs you nothing. I’m paid by the fund houses, so my focus stays on your goals.',
  },
  {
    icon: LineChart,
    title: 'Goal-First Approach',
    text: 'Every rupee you invest is mapped to a real goal, not a random product pitch.',
  },
  {
    icon: Headphones,
    title: 'Always Available',
    text: 'A real person on WhatsApp and call — no chatbots, no call centres, just direct support.',
  },
  {
    icon: Lock,
    title: 'Honest & Transparent',
    text: 'Clear explanations of risk, returns and charges. No fine print, no surprises.',
  },
  {
    icon: Sparkles,
    title: 'Disciplined Process',
    text: 'A proven, repeatable process that keeps your investments on track through every market cycle.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-navy-900/60">
      <div className="section">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Built on <span className="text-gradient-gold">trust</span>, not transactions
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="flex gap-4 rounded-2xl bg-navy-700/40 ring-1 ring-white/10 p-6 h-full hover:ring-gold/40 transition-all">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{r.title}</h3>
                  <p className="text-white/60 text-sm mt-1.5 leading-relaxed">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
