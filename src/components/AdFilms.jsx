import { adFilms } from '../data/adFilms.js'
import { Lines, Chapter, ListRow } from './ui.jsx'

// Same editorial list as "Words first." (shared ListRow). Rows become links automatically
// as soon as an entry in adFilms.js gets a real, verified videoUrl.
export default function AdFilms() {
  return (
    <section id="ad-films" className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12 md:pb-24">
      <Chapter n="04" label="Ad Films" />
      <Lines lines={['Ad', 'films.']} className="t-h1 mt-6 md:mt-8" />
      <ol className="mt-10 border-t border-line">
        {adFilms.map((item, i) => (
          <ListRow key={item.title} n={i + 1} title={item.title} metaA={item.category}
            href={item.videoUrl || undefined} cursor="watch" delay={0.04 * i}
            ariaLabel={`Watch ${item.title}. Opens in a new tab.`} />
        ))}
      </ol>
    </section>
  )
}
