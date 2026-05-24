// Reusable service card. Used on both the home preview and the
// full Services page. Icons are looked up by name from lucide-react,
// so adding a service in data/services.js just works.
import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Sparkles,
  TrendingUp, CalendarClock, Target, Umbrella,
  GraduationCap, Receipt, Gem, ClipboardCheck,
} from 'lucide-react'

// Icon lookup map. Only these icons are bundled (keeps the site fast).
// If you add a service with a NEW icon, import it above and add it here.
const iconMap = {
  TrendingUp, CalendarClock, Target, Umbrella,
  GraduationCap, Receipt, Gem, ClipboardCheck, Sparkles,
}

export default function ServiceCard({ service, detailed = false }) {
  // Pick the icon component by its name string from data/services.js
  const Icon = iconMap[service.icon] || Sparkles

  return (
    <div className="group relative h-full rounded-2xl bg-navy-700/40 ring-1 ring-white/10 p-7 transition-all duration-300 hover:ring-gold/50 hover:-translate-y-1 hover:shadow-card">
      {/* Icon */}
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-colors group-hover:bg-gold group-hover:text-navy-900">
        <Icon size={26} />
      </div>

      <h3 className="font-display text-xl text-white mt-5">{service.title}</h3>
      <p className="text-white/65 text-sm mt-3 leading-relaxed">{service.description}</p>

      {/* Detailed view: benefits + ideal investor + CTA */}
      {detailed && (
        <>
          <ul className="mt-5 space-y-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                <Check size={16} className="text-gold shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-lg bg-navy-900/50 px-4 py-3">
            <span className="text-[11px] uppercase tracking-wider text-gold">Ideal for</span>
            <p className="text-sm text-white/70 mt-1">{service.idealFor}</p>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-3 transition-all"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </>
      )}
    </div>
  )
}
