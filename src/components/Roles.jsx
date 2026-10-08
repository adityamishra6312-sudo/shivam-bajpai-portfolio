import { projects, projectLink } from '../data/projects.js'
import { Reveal, Lines, Chapter, Thumb, CollabTag, Media, ListRow } from './ui.jsx'
import { site } from '../data/site.js'
import { ArrowUpRight } from 'lucide-react'

const writing = projects.filter((p) => p.categories.includes('writing'))
const directing = projects.filter((p) => p.categories.includes('directing'))
const acting = projects.filter((p) => p.categories.includes('acting'))
const writerRole = (p) => (p.role === 'Co-writer' ? 'CO-WRITER' : 'WRITER')

export function Writer() {
  return (
    <section id="roles" className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-24">
      <Chapter n="03" label="Writer" />
      <Lines lines={['Words', 'first.']} className="t-h1 mt-6 md:mt-8" />
      <ol className="mt-10 border-t border-line">
        {writing.map((p, i) => {
          const imdb = !p.youtubeUrl
          return (
            <ListRow key={p.id} n={i + 1} title={p.title} href={projectLink(p)} cursor={imdb ? 'view' : 'watch'} delay={0.04 * i}
              metaA={`Credit: ${writerRole(p)}`} metaB={`w/ ${p.collaborators.join(', ')}`}
              ariaLabel={`${p.title} — ${writerRole(p)}, with ${p.collaborators.join(' and ')}. ${imdb ? 'View on IMDb' : 'Watch on YouTube'}, opens in a new tab.`} />
          )
        })}
      </ol>
    </section>
  )
}

export function Director() {
  return (
    <section className="bg-ink py-16 text-paper md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <Chapter n="05" label="Director" light />
        <Lines lines={['Behind', 'the frame.']} className="t-h1 mt-6 md:mt-8" />
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
          {directing.map((p, i) => (
            <Reveal key={p.id} variant="clip" delay={0.1 * i} duration={1.1}>
              <a href={projectLink(p)} target="_blank" rel="noopener noreferrer" data-cursor="watch" className="group block"
                 aria-label={`${p.title} — directed by Shivam Bajpai. Watch on YouTube, opens in a new tab.`}>
                <div className="crop relative overflow-hidden bg-black py-[5%]"><i /></div>
                <div className="relative -mt-[calc(5%+2px)] overflow-hidden">
                  <div className="aspect-[2.39/1] transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"><Thumb project={p} /></div>
                </div>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="t-meta text-paper/50">Directed by Shivam Bajpai</p>
                    <h3 className="t-h3 mt-2">{p.title}</h3>
                    <p className="t-meta mt-2 text-paper/60">{p.role} · with {p.collaborators.join(', ')}</p>
                  </div>
                  <ArrowUpRight size={22} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Actor() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal variant="clip" duration={1.2}>
            <Media src={site.portrait.src} alt={site.portrait.alt} w={site.portrait.w} h={site.portrait.h}
                   ratio="aspect-[4/5]" className="md:sticky md:top-28" />
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Chapter n="06" label="Actor" />
          <Lines lines={['On', 'camera.']} className="t-h1 mt-6 md:mt-8" />
          <div className="mt-8 border-t border-ink">
            {acting.map((p, i) => (
              <Reveal key={p.id} variant="up" delay={0.08 * i}>
                <a href={projectLink(p)} target="_blank" rel="noopener noreferrer" data-cursor={p.youtubeUrl ? 'watch' : 'view'}
                   className="group block border-b border-line py-6">
                  <p className="t-meta text-warmgrey">{p.character ? 'Character' : 'Credit'}</p>
                  <p className="mt-1 font-serif text-3xl italic md:text-4xl">{p.character || 'Actor'}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="t-h3 tracking-wide transition-transform duration-300 group-hover:translate-x-1">{p.title}</span>
                    <CollabTag name={p.collaborator} />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
