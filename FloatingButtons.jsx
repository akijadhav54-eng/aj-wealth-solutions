// Floating action buttons (bottom-right):
//  • WhatsApp  • Call now  • Scroll to top (appears after scrolling)
import { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'
import { site } from '../data/site'

// WhatsApp brand glyph (lucide doesn't ship one)
function WhatsAppIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36l.55.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.29.74 1.22 1.59 1.97 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.26.09 1.66.78 1.95.93.29.14.48.21.55.33.07.12.07.68-.17 1.36z"/>
    </svg>
  )
}

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="h-11 w-11 rounded-full bg-navy-600 ring-1 ring-white/15 text-white flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy-900 transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <a
        href={`tel:${site.phone}`}
        aria-label="Call now"
        className="h-13 w-13 p-3.5 rounded-full bg-navy-600 ring-1 ring-gold/30 text-gold flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy-900 transition-colors"
      >
        <Phone size={24} />
      </a>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}
