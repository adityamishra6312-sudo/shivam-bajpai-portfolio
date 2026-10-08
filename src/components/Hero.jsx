import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { site } from '../data/site.js'
import { ease } from './ui.jsx'

const rise = (d) => ({ initial: { y: '108%' }, animate: { y: 0 }, transition: { duration: 1.05, delay: d, ease } })
const fadeIn = (d) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } })

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const py = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 70])

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      {/* Photograph is part of the composition: bleeds off the right edge, fades into the page on the left */}
      <motion.div className="absolute inset-x-0 top-0 h-[72svh] md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[64%]"
        initial={{ clipPath: 'inset(0 0 0 100%)', filter: 'blur(12px)' }} animate={{ clipPath: 'inset(0 0 0 0%)', filter: 'blur(0px)' }}
        transition={{ duration: 1.3, ease }}>
        <motion.img src={site.hero.src} alt={site.hero.alt} width={site.hero.w} height={site.hero.h}
          loading="eager" fetchpriority="high" decoding="async" style={{ y: py, scale: 1.08 }}
          className="h-full w-full object-cover object-[50%_18%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/45 md:bg-gradient-to-r md:from-ink md:via-ink/25 md:to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-ink to-transparent md:block" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-24 md:px-12 md:pb-10 md:pt-28">
        <motion.div className="t-label flex items-center justify-between text-paper/70" {...fadeIn(1.15)}>
          <span>01 / Intro</span>
          <span className="hidden sm:block">Selected Work · Creative Portfolio</span>
        </motion.div>

        <div>
          <h1 className="t-display text-paper" aria-label="Shivam Bajpai">
            <span className="block overflow-hidden pb-[0.05em]" aria-hidden="true"><motion.span className="block" {...rise(0.45)}>Shivam</motion.span></span>
            <span className="block overflow-hidden pb-[0.05em]" aria-hidden="true"><motion.span className="block md:ml-[6vw]" {...rise(0.6)}>Bajpai</motion.span></span>
          </h1>

          <motion.p className="mt-6 font-display text-xl uppercase tracking-[0.14em] md:mt-8 md:text-3xl" {...fadeIn(1.0)}>
            Writer <span className="text-accent">·</span> Director <span className="text-accent">·</span> Actor
          </motion.p>

          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
            <motion.p className="max-w-sm font-serif text-lg italic leading-snug text-paper/80 md:text-xl" {...fadeIn(1.2)}>
              Stories written. Frames directed. Characters lived.
            </motion.p>
            <motion.a href="#about" className="t-label flex items-center gap-3 text-paper/70 hover:text-paper" {...fadeIn(1.5)} aria-label="Scroll to explore">
              <span>Scroll <br className="md:hidden" />Explore</span>
              <motion.span className="block h-10 w-px origin-top bg-paper/60" animate={{ scaleY: [0.2, 1, 0.2] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
