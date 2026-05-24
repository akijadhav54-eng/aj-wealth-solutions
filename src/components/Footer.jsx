// Footer: contact details, quick links, social icons, partner credit,
// and the all-important mutual fund market-risk disclaimer.
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  // Only render social icons that have a link set in site.js
  const socials = [
    { icon: Instagram, url: site.social.instagram },
    { icon: Facebook, url: site.social.facebook },
    { icon: Linkedin, url: site.social.linkedin },
    { icon: Youtube, url: site.social.youtube },
  ].filter((s) => s.url)

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="AJ Wealth Solutions" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
              <div>
                <div className="font-display text-lg text-white">{site.brand}</div>
                <div className="text-[11px] tracking-widest text-gold uppercase">AMFI Registered</div>
              </div>
            </div>
            <p className="text-white/55 text-sm mt-4 italic">“{site.tagline}”</p>
            {socials.length > 0 && (
              <div className="flex gap-3 mt-5">
                {socials.map(({ icon: Icon, url }, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                     className="h-9 w-9 rounded-full bg-navy-700 ring-1 ring-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:ring-gold/40 transition-colors">
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Book Consultation</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Start a SIP</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href={`tel:${site.phone}`} className="flex items-center gap-2.5 hover:text-gold"><Phone size={16} className="text-gold shrink-0" /> {site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-gold break-all"><Mail size={16} className="text-gold shrink-0" /> {site.email}</a></li>
              <li className="flex items-start gap-2.5"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /> {site.address}</li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h4 className="font-semibold text-white mb-4">Powered By</h4>
            <p className="text-sm text-white/60">Digital partner</p>
            <p className="font-display text-lg text-gold mt-1">{site.partner}</p>
            <p className="text-xs text-white/40 mt-4">ARN: {site.arn}</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Disclaimer:</strong> Mutual Fund investments are
            subject to market risks. Read all scheme related documents carefully before investing.
            Past performance is not indicative of future results. {site.brand} is an AMFI-registered
            Mutual Fund Distributor and does not provide investment advisory services for a fee.
            The information on this website is for general purposes only and does not constitute
            investment advice. Please consult before making any investment decision.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-6 text-xs text-white/40">
            <span>© {year} {site.brand}. All rights reserved.</span>
            <span>{site.owner} · {site.city}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
