import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/site.js'
import { ease } from './ui.jsx'

export default function Navbar() {
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const on = () => setCompact(window.scrollY > 60)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  // Active-section indicator
  useEffect(() => {
    const els = site.nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => io.observe(el))
    const top = () => window.scrollY < 200 && setActive('')
    window.addEventListener('scroll', top, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', top) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 text-paper transition-all duration-500 ${compact ? 'bg-ink/90 py-3 backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <nav aria-label="Primary" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-12">
          <a href="#top" className="font-display text-2xl tracking-wider" aria-label="Shivam Bajpai — back to top">SB</a>
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {site.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                   className={`t-label link-u transition-opacity ${active === n.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>{n.label}</a>
              </li>
            ))}
            <li><a href="#contact" className="t-label border border-paper/70 px-4 py-2 transition-colors hover:bg-paper hover:text-ink">Let's talk →</a></li>
          </ul>
          <button onClick={() => setOpen(true)} className="t-label -mr-2 flex min-h-[44px] items-center px-2 lg:hidden" aria-label="Open menu" aria-expanded={open}>
            Menu <span className="ml-3 inline-block h-px w-6 bg-paper" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] flex flex-col bg-ink px-5 pb-8 pt-6 text-paper" role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}>
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl tracking-wider">SB</span>
              <button onClick={() => setOpen(false)} className="t-label -mr-2 flex min-h-[44px] items-center px-2" aria-label="Close menu">Close ✕</button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {site.nav.map((n, i) => (
                <li key={n.id} className="overflow-hidden">
                  <motion.a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-2 font-display text-[9vw] uppercase leading-none sm:text-5xl"
                    initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.06, duration: 0.7, ease }}>
                    <span className="t-meta w-6 text-paper/40">0{i + 1}</span>{n.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <a onClick={() => setOpen(false)} href="#contact" className="t-button border border-paper px-5 py-4 text-center">Let's talk →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
