// Home-page services preview: shows the first 6 services as compact
// cards, with a button to the full Services page.
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function ServicesPreview() {
  return (
    <section id="services" className="section">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">What We Offer</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          Solutions for every <span className="text-gradient-gold">financial goal</span>
        </h2>
        <p className="text-white/65 mt-4">
          From your first SIP to a complete retirement plan — we’ve got a solution tailored to you.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.slice(0, 6).map((service, i) => (
          <Reveal key={service.title} delay={i * 0.08}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="btn-gold">
          View All Services <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
