import { projects } from '../data/projects.js'
import { Reveal, Lines, Thumb } from './ui.jsx'

const parts = projects.filter((p) => p.series)

export default function DaaruFeature() {
  return (
    <section id="daaru" className="overflow-hidden bg-ink py-14 text-paper md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <Reveal variant="fade"><p className="t-label text-paper/55">Collaborations · Harsh Beniwal — Signature series</p></Reveal>
        <Lines lines={['Daaru With Dad']} className="t-h1" />
        <Reveal variant="blur" delay={0.15}><p className="t-lede mt-3 max-w-xl text-paper/75">Four parts. Written by Shivam Bajpai.</p></Reveal>
      </div>

      <div className="no-scrollbar mt-8 flex snap-x snap-mandatory flex-col gap-8 px-5 md:flex-row md:gap-6 md:overflow-x-auto md:px-12 md:pb-4"
           role="region" aria-label="Daaru With Dad, parts one to four" tabIndex={0}>
        {parts.map((p, i) => (
          <Reveal key={p.id} variant="up" delay={i * 0.06} className={`md:w-[36vw] md:max-w-[600px] md:shrink-0 md:snap-start ${i % 2 ? 'md:mt-8' : ''}`}>
            <a href={p.youtubeUrl} target="_blank" rel="noopener noreferrer" data-cursor="watch" className="group block"
               aria-label={`${p.title} — Writer, with ${p.collaborators.join(' and ')}. Watch on YouTube, opens in a new tab.`}>
              <span className="outline-num block font-display text-3xl leading-none transition-colors duration-500 group-hover:text-accent md:text-4xl">{String(p.series).padStart(2, '0')}</span>
              <div className="relative mt-2 aspect-video overflow-hidden">
                <div className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.05]"><Thumb project={p} /></div>
              </div>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <h3 className="t-h3">{p.title}</h3>
                  <p className="t-meta mt-1.5 text-paper/60">Writer · w/ {p.collaborators.join(', ')}</p>
                </div>
                <span className="t-button link-u whitespace-nowrap">Watch ↗</span>
              </div>
            </a>
          </Reveal>
        ))}
        <div className="hidden shrink-0 self-center md:block md:w-[4vw]" aria-hidden="true" />
      </div>
      <p className="t-label mx-auto mt-4 hidden max-w-[1440px] px-12 text-paper/45 md:block">Scroll sideways → 04 parts</p>
    </section>
  )
}
