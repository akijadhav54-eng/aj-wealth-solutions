// SERVICES PAGE — full detailed grid of every service.
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | Mutual Funds, SIP, Retirement & Tax Planning — AJ Wealth Solutions"
        description="Explore our wealth services: Mutual Funds, SIP Planning, Goal-Based Investing, Retirement Planning, Child Education, Tax Saving and Portfolio Review."
        path="/services"
      />

      {/* Page header */}
      <section className="pt-36 pb-10 px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">Our Services</span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Everything you need to <span className="text-gradient-gold">grow your wealth</span>
          </h1>
          <p className="text-ink/65 mt-5 max-w-2xl mx-auto">
            Whatever your goal, there’s a tailored solution waiting. Each plan is built around
            your life — not a one-size-fits-all product.
          </p>
        </Reveal>
      </section>

      {/* Detailed cards */}
      <section className="px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto pb-24">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-gold/15 to-cream ring-1 ring-gold/20 p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold relative">
              Not sure where to <span className="text-gradient-gold">start?</span>
            </h2>
            <p className="text-ink/70 mt-4 max-w-xl mx-auto relative">
              Book a free, no-obligation consultation. We’ll figure out the right first step together.
            </p>
            <Link to="/contact" className="btn-gold mt-8 relative">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
