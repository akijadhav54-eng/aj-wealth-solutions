// CONTACT PAGE — enquiry form + contact details side by side.
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import { site } from '../data/site'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact & Free Consultation | AJ Wealth Solutions"
        description="Book a free investment consultation with AJ Wealth Solutions. Start your SIP, plan your goals, or get a portfolio review. Call, WhatsApp or fill the enquiry form."
        path="/contact"
      />

      <section className="pt-36 pb-10 px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">Let’s Talk</span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Start your <span className="text-gradient-gold">investment journey</span>
          </h1>
          <p className="text-ink/65 mt-5 max-w-2xl mx-auto">
            Fill the form and {site.owner} will get back to you personally — usually within a few hours.
          </p>
        </Reveal>
      </section>

      <section className="px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl bg-white ring-1 ring-ink/10 p-7 sm:p-9">
              <h2 className="font-display text-2xl text-ink mb-6">Enquiry Form</h2>
              <EnquiryForm />
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-4">
              <ContactCard icon={Phone} title="Call" value={site.phoneDisplay} href={`tel:${site.phone}`} />
              <ContactCard
                icon={MessageCircle}
                title="WhatsApp"
                value="Chat instantly"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              />
              <ContactCard icon={Mail} title="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactCard icon={MapPin} title="Office" value={site.address} />
              <div className="rounded-2xl bg-gold/10 ring-1 ring-gold/30 p-6 flex items-start gap-3">
                <Clock size={20} className="text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">Available</div>
                  <p className="text-ink/65 text-sm mt-1">Mon – Sat, 9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactCard({ icon: Icon, title, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-ink/10 p-5 hover:ring-gold/40 transition-all">
      <div className="h-12 w-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0">
        <Icon size={22} />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-gold-dark">{title}</div>
        <div className="text-ink/85 text-sm mt-0.5 break-words">{value}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a>
  ) : (
    inner
  )
}
