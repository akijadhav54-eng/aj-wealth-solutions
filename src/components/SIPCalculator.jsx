// SIP Calculator — interactive. Users move sliders for monthly amount,
// duration and expected return; the future value updates live using the
// standard SIP future-value formula.
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

// Format a number as Indian Rupees (e.g. ₹12,34,567)
const inr = (n) =>
  '₹' + Math.round(n).toLocaleString('en-IN')

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)

  // SIP future value: FV = P * [((1+i)^n - 1) / i] * (1+i)
  const { invested, future, gains } = useMemo(() => {
    const n = years * 12
    const i = rate / 100 / 12
    const fv = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const totalInvested = monthly * n
    return { invested: totalInvested, future: fv, gains: fv - totalInvested }
  }, [monthly, years, rate])

  // % of bar that is invested vs gains (for the visual)
  const investedPct = (invested / future) * 100

  return (
    <section id="calculator" className="section">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">Plan Ahead</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          SIP <span className="text-gradient-gold">Calculator</span>
        </h2>
        <p className="text-white/65 mt-4">
          See how small, consistent investments can grow into something big.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 rounded-3xl bg-navy-700/40 ring-1 ring-white/10 p-7 sm:p-10">
          {/* Sliders */}
          <div className="space-y-8">
            <SliderRow
              label="Monthly Investment"
              value={inr(monthly)}
              min={500} max={100000} step={500}
              raw={monthly} onChange={setMonthly}
            />
            <SliderRow
              label="Investment Period"
              value={`${years} years`}
              min={1} max={40} step={1}
              raw={years} onChange={setYears}
            />
            <SliderRow
              label="Expected Return (p.a.)"
              value={`${rate}%`}
              min={1} max={30} step={0.5}
              raw={rate} onChange={setRate}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center rounded-2xl bg-navy-900/50 p-7">
            <div className="flex items-center gap-2 text-gold mb-6">
              <Calculator size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">Projected Value</span>
            </div>

            <div className="font-display text-4xl sm:text-5xl text-white">{inr(future)}</div>
            <p className="text-white/50 text-sm mt-1">Estimated maturity amount</p>

            {/* Split bar */}
            <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden flex">
              <div className="h-full bg-white/40" style={{ width: `${investedPct}%` }} />
              <div className="h-full bg-gold" style={{ width: `${100 - investedPct}%` }} />
            </div>
            <div className="flex justify-between text-sm mt-4">
              <div>
                <div className="flex items-center gap-2 text-white/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" /> Invested
                </div>
                <div className="text-white font-semibold mt-1">{inr(invested)}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-white/60 justify-end">
                  Est. Gains <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                </div>
                <div className="text-gold font-semibold mt-1">{inr(gains)}</div>
              </div>
            </div>

            <Link to="/contact" className="btn-gold w-full mt-7">
              Start This SIP <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-white/40 mt-4 max-w-2xl mx-auto">
          *For illustration only. Returns are assumed and not guaranteed. Mutual fund investments
          are subject to market risks.
        </p>
      </Reveal>
    </section>
  )
}

// Small reusable slider row
function SliderRow({ label, value, min, max, step, raw, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/70 text-sm">{label}</span>
        <span className="rounded-lg bg-gold/15 text-gold font-semibold px-3 py-1 text-sm">{value}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-gold cursor-pointer"
      />
    </div>
  )
}
