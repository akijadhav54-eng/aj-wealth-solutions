// About Us section.
import { ShieldCheck, HandCoins, Users } from 'lucide-react'
import Reveal from './Reveal'
import { site } from '../data/site'

const stats = [
  { icon: ShieldCheck, value: 'AMFI', label: 'Registered Distributor' },
  { icon: HandCoins, value: '₹0', label: 'Advisory Fees' },
  { icon: Users, value: '100%', label: 'Personalised Plans' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left image / card */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/20 to-transparent blur-xl" />
            <div className="relative rounded-3xl bg-navy-700/50 ring-1 ring-white/10 p-8 sm:p-10">
              <img src="/logo.jpg" alt="AJ Wealth Solutions" className="h-20 w-20 rounded-full object-cover ring-2 ring-gold/40 mb-6" />
              <h3 className="font-display text-2xl text-white">{site.owner}</h3>
              <p className="text-gold text-sm mt-1">{site.role}</p>
              <p className="text-white/65 mt-5 leading-relaxed">
                A finance enthusiast on a mission to make disciplined investing accessible
                to every Indian family — one goal, one SIP at a time.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="mx-auto text-gold mb-2" size={22} />
                    <div className="font-display text-lg text-white">{s.value}</div>
                    <div className="text-[11px] text-white/50 leading-tight mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right copy */}
        <Reveal delay={0.15}>
          <span className="eyebrow">About AJ Wealth Solutions</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Your partner in building <span className="text-gradient-gold">lasting wealth</span>
          </h2>
          <p className="text-white/70 mt-5 leading-relaxed">
            At AJ Wealth Solutions, we believe wealth isn’t built by luck or timing the market —
            it’s built through discipline, patience and a clear plan. As an AMFI-registered mutual
            fund distributor, our role is simple: understand your dreams, then design an investment
            journey that turns them into reality.
          </p>
          <p className="text-white/70 mt-4 leading-relaxed">
            Whether you’re starting your first SIP, planning your child’s education, or preparing
            for retirement, we offer honest, jargon-free guidance — completely free of advisory fees.
            Your goals come first, always.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
