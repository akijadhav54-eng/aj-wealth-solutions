// Sticky navigation bar. Transparent over the hero, gains a navy
// background once you scroll. Collapses into a hamburger menu on mobile.
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '../data/site'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/#process' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Add background once the user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle links that point to an anchor on the home page (e.g. /#about)
  const handleNav = (e, to) => {
    setOpen(false)
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.replace('/#', '')
      if (location.pathname !== '/') {
        navigate('/')
        // wait for home to render, then scroll to the section
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo + brand */}
        <Link to="/" className="flex items-center gap-3" onClick={(e) => handleNav(e, '/')}>
          <img src="/logo.jpg" alt="AJ Wealth Solutions logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight">
            <span className="block font-display text-lg font-semibold text-white">{site.brand}</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase">AMFI Registered</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={(e) => handleNav(e, link.to)}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-gold !px-6 !py-2.5 text-sm">
              <Phone size={16} /> Book Consultation
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={(e) => handleNav(e, link.to)}
                  className="block py-3 text-white/85 hover:text-gold border-b border-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link to="/contact" className="btn-gold w-full" onClick={() => setOpen(false)}>
                <Phone size={16} /> Book Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
