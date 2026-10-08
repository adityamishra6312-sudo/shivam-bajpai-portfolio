import { gallery } from '../data/gallery.js'
import { Reveal, Chapter, Lines, Media } from './ui.jsx'

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-24">
      <Chapter n="08" label="Off Camera" />
      <Lines lines={['Off', 'Camera']} className="t-h1 mt-8 md:mt-12" />
      <Reveal variant="fade" delay={0.15}>
        <p className="t-lede mt-8 max-w-xl text-warmgrey">A few frames from between the takes.</p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} variant="blur" delay={0.08 * i} className={g.span || 'md:col-span-6'}>
            <Media src={g.src} alt={g.alt} w={g.w} h={g.h} ratio={g.ratio} className="group" imgClass="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
