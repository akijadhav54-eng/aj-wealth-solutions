// "Our Promise" trust section (replaces placeholder testimonials).
// Honest, factual trust-building — no fabricated reviews. When you have
// real client reviews, tell Claude and we'll turn this back into a
// review slider using your genuine testimonials.
import { ShieldCheck, MessageCircle, Eye, HeartHandshake, Star } from 'lucide-react'
import Reveal from './Reveal'
import { site } from '../data/site'

const promises = [
  {
    icon: ShieldCheck,
    title: 'Honest, unbiased advice',
    text: 'Every recommendation is based on your goals and risk comfort — never on commissions. If something isn’t right for you, I’ll tell you.',
  },
  {
    icon: MessageCircle,
    title: 'Always reachable',
    text: 'You deal directly with me — a real person on call and WhatsApp — not a call centre or a chatbot. Your questions get answered.',
  },
  {
    icon: Eye,
    title: 'Complete transparency',
    text: 'Clear, jargon-free explanations of the risks, returns and any charges before you invest. No fine print, no surprises.',
  },
  {
    icon: HeartHandshake,
    title: 'A long-term partnership',
    text: 'I stay with you well beyond the first investment — reviewing and adjusting your plan as your life and goals evolve.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream">
      <div className="section">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Promise</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            What you can expect when you <span className="text-gradient-gold">invest with us</span>
          </h2>
          <p className="text-ink/65 mt-4">
            Trust is earned, not claimed. Here is exactly how I work with every client.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl bg-white ring-1 ring-ink/10 p-6 h-full hover:ring-gold/40 transition-all">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="text-ink/60 text-sm mt-1.5 leading-relaxed">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Invite real reviews (honest CTA) */}
        <Reveal delay={0.1}>
          <div className="mt-10 max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-gold/15 to-cream ring-1 ring-gold/30 p-7 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <h3 className="font-display text-xl text-ink">Already investing with me?</h3>
            <p className="text-ink/65 text-sm mt-2 max-w-xl mx-auto">
              Your experience helps other families invest with confidence. I’d be grateful if you shared a few words.
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Akash, I would like to share my experience with AJ Wealth Solutions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5"
            >
              <MessageCircle size={18} /> Share Your Experience
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
