import { socials } from '../data/socials.js'
import { Reveal, Lines, Chapter } from './ui.jsx'
import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  const ig = socials.find((s) => s.name === 'INSTAGRAM')?.url
  const li = socials.find((s) => s.name === 'LINKEDIN')?.url
  return (
    <section id="contact" className="bg-ink px-5 py-16 text-paper md:px-12 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Chapter n="09" label="Contact" light />
        <Lines lines={["Let's make", 'something', 'worth watching.']} className="t-h1 mt-8 md:mt-12" />

        <Reveal variant="fade" delay={0.2}>
          <p className="t-label mt-10 text-paper/55">Writing · Direction · Acting · Creative collaborations</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={ig} target="_blank" rel="noopener noreferrer" data-cursor="view"
               className="t-button border border-paper px-8 py-4 text-center transition-colors hover:bg-paper hover:text-ink">
              Message on Instagram ↗
            </a>
            <a href={li} target="_blank" rel="noopener noreferrer" data-cursor="view"
               className="t-button border border-paper/40 px-8 py-4 text-center transition-colors hover:border-paper hover:bg-paper hover:text-ink">
              Connect on LinkedIn ↗
            </a>
          </div>
        </Reveal>

        <ul className="mt-16 border-t border-paper/15 md:mt-20">
          {socials.map((s, i) => (
            <Reveal key={s.name} variant="up" delay={0.06 * i}>
              <li className="border-b border-paper/15">
                <a href={s.url} target="_blank" rel="noopener noreferrer" data-cursor="view"
                   className="group flex items-center justify-between py-5 transition-colors hover:text-accent md:py-7">
                  <span className="font-display uppercase leading-none text-[clamp(1.75rem,2.6vw+1rem,2.75rem)]">{s.name}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-8 text-paper md:px-12">
      <div className="mx-auto max-w-[1440px] border-t border-paper/15 pt-8">
        <p className="t-h3 text-paper/90">See you in the next frame.</p>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wider">Shivam Bajpai</p>
            <p className="t-label mt-1 text-paper/55">Writer · Director · Actor</p>
          </div>
          <ul className="flex gap-6">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="t-label link-u text-paper/70 hover:text-paper">{s.name}</a>
              </li>
            ))}
          </ul>
          <p className="t-meta text-paper/45">© 2026 Shivam Bajpai</p>
        </div>
      </div>
    </footer>
  )
}
