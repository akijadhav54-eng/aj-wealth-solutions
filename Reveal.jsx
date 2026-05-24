// Reusable scroll-reveal wrapper.
// Wrap any element in <Reveal>...</Reveal> to make it fade + slide up
// the first time it scrolls into view. Pass `delay` to stagger items.
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
