// Investment Process Timeline — a 4-step vertical/alternating timeline
// showing how you work with clients.
import { MessageSquare, Target, FileCheck, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Free Consultation',
    text: 'We start with a relaxed conversation to understand your income, goals, and risk comfort — no jargon, no pressure.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Goal Mapping',
    text: 'Together we define clear goals with timelines and target amounts, from short-term needs to retirement dreams.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Personalised Plan',
    text: 'You get a tailored investment plan with the right funds and SIP amounts — explained simply, so you stay in control.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Invest & Review',
    text: 'We set up your investments and review them periodically, rebalancing as your life and the markets evolve.',
  },
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="section">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">How It Works</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          A simple, <span className="text-gradient-gold">disciplined</span> process
        </h2>
        <p className="text-ink/65 mt-4">Four clear steps from first hello to a growing portfolio.</p>
      </Reveal>

      <div className="relative mt-14">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <div className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto lg:mx-0 h-20 w-20 rounded-2xl bg-white ring-1 ring-gold/30 flex items-center justify-center text-gold-dark">
                  <s.icon size={30} />
                  <span className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-gold text-navy-900 text-sm font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink mt-5">{s.title}</h3>
                <p className="text-ink/60 text-sm mt-2 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
