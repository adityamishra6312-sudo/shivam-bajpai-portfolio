import { projects, projectLink } from '../data/projects.js'
import { Reveal, Lines, Chapter } from './ui.jsx'

function Block({ name, who, dark, delay }) {
  const items = projects.filter((p) => p.collaborator === who)
  return (
    <div className={`px-5 py-14 md:px-12 md:py-20 ${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
      <Reveal variant="up" delay={delay}>
        <p className="t-h2">{name}</p>
        <p className="my-0.5 font-serif text-xl italic text-accent md:text-2xl">×</p>
        <p className="t-h2">Shivam Bajpai</p>
      </Reveal>
      <ul className={`mt-12 border-t ${dark ? 'divide-y divide-paper/15 border-paper/15' : 'divide-y divide-line border-line'}`}>
        {items.map((p, i) => {
          const imdb = !p.youtubeUrl
          return (
            <Reveal key={p.id} variant="fade" delay={delay + 0.06 * i}>
              <li>
                <a href={projectLink(p)} target="_blank" rel="noopener noreferrer" data-cursor={imdb ? 'view' : 'watch'}
                   className="group flex flex-col justify-between gap-1 py-4 transition-opacity hover:opacity-60 md:flex-row md:items-baseline">
                  <span className="font-display text-xl uppercase transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">{p.title}</span>
                  <span className={`t-meta ${dark ? 'text-paper/60' : 'text-warmgrey'}`}>
                    {p.role}{p.character ? ` · ${p.character}` : ''}
                  </span>
                </a>
              </li>
            </Reveal>
          )
        })}
      </ul>
    </div>
  )
}

export default function Collaborations() {
  return (
    <section id="collaborations">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-12 md:pb-12 md:pt-24">
        <Chapter n="07" label="Collaborations" />
        <Lines lines={['Collaborations']} className="t-h1 mt-6 md:mt-8" />
      </div>
      <div className="grid md:grid-cols-2">
        <Block name="Harsh Beniwal" who="Harsh Beniwal" dark delay={0} />
        <Block name="Purav Jha" who="Purav Jha" delay={0.1} />
      </div>
    </section>
  )
}
