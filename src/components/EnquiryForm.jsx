// Lead-generation enquiry form.
// - Client-side validation for every field
// - Submits to Formspree (free) — set your endpoint in data/site.js
// - Shows an animated success popup on submit
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Phone, Mail, MapPin, Target, IndianRupee, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react'
import { site } from '../data/site'

const goals = [
  'Wealth Creation',
  'Retirement Planning',
  'Child Education',
  'Tax Saving',
  'Buy a Home / Car',
  'Just Getting Started',
]

const budgets = ['₹500 – ₹2,000', '₹2,000 – ₹5,000', '₹5,000 – ₹10,000', '₹10,000 – ₹25,000', '₹25,000+']

const initial = { name: '', mobile: '', email: '', city: '', goal: '', budget: '', message: '' }

export default function EnquiryForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success
  const [showPopup, setShowPopup] = useState(false)

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    setErrors({ ...errors, [field]: '' }) // clear error as user types
  }

  // ---- Validation rules ----
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim()))
      e.mobile = 'Enter a valid 10-digit mobile number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Enter a valid email address'
    if (!form.city.trim()) e.city = 'Please enter your city'
    if (!form.goal) e.goal = 'Please select a goal'
    if (!form.budget) e.budget = 'Please select a budget'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setShowPopup(true)
        setForm(initial)
      } else {
        setStatus('idle')
        alert('Something went wrong. Please try WhatsApp or call instead.')
      }
    } catch {
      setStatus('idle')
      alert('Network error. Please try WhatsApp or call instead.')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field icon={User} label="Full Name" error={errors.name}>
            <input className="field-input" value={form.name} onChange={update('name')} placeholder="Your full name" />
          </Field>
          <Field icon={Phone} label="Mobile Number" error={errors.mobile}>
            <input className="field-input" value={form.mobile} onChange={update('mobile')} placeholder="10-digit mobile" inputMode="numeric" maxLength={10} />
          </Field>
          <Field icon={Mail} label="Email" error={errors.email}>
            <input className="field-input" value={form.email} onChange={update('email')} placeholder="you@email.com" type="email" />
          </Field>
          <Field icon={MapPin} label="City" error={errors.city}>
            <input className="field-input" value={form.city} onChange={update('city')} placeholder="e.g. Pune" />
          </Field>
          <Field icon={Target} label="Investment Goal" error={errors.goal}>
            <select className="field-input" value={form.goal} onChange={update('goal')}>
              <option value="">Select a goal</option>
              {goals.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </Field>
          <Field icon={IndianRupee} label="Monthly SIP Budget" error={errors.budget}>
            <select className="field-input" value={form.budget} onChange={update('budget')}>
              <option value="">Select a budget</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>
        </div>

        <Field icon={MessageSquare} label="Message (optional)">
          <textarea className="field-input min-h-[110px] resize-none" value={form.message} onChange={update('message')} placeholder="Anything you'd like me to know?" />
        </Field>

        <button type="submit" disabled={status === 'sending'} className="btn-gold w-full disabled:opacity-70">
          {status === 'sending' ? (
            <><Loader2 size={18} className="animate-spin" /> Sending…</>
          ) : (
            'Get My Free Consultation'
          )}
        </button>
        <p className="text-center text-xs text-white/40">
          Your details are private and used only to contact you about your investment goals.
        </p>
      </form>

      {/* Success popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="bg-navy-700 ring-1 ring-gold/30 rounded-3xl p-8 sm:p-10 max-w-md text-center"
              initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CheckCircle2 className="mx-auto text-gold" size={64} />
              <h3 className="font-display text-2xl text-white mt-5">Thank you!</h3>
              <p className="text-white/70 mt-3">
                Your enquiry has been received. {site.owner} will reach out to you shortly to
                plan your investment journey.
              </p>
              <button onClick={() => setShowPopup(false)} className="btn-gold mt-7">Done</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Reusable labelled field with icon + inline error
function Field({ icon: Icon, label, error, children }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm text-white/70 mb-2">
        <Icon size={15} className="text-gold" /> {label}
      </span>
      {children}
      {error && <span className="block text-red-400 text-xs mt-1.5">{error}</span>}
    </label>
  )
}
