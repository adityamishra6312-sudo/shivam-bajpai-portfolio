import { Reveal, Lines, Media } from './ui.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <Reveal variant="fade"><p className="t-label text-warmgrey">The person behind the frame</p></Reveal>
          <Lines lines={['Shivam Bajpai', 'Writer.', 'Director.', 'Actor.']} className="t-h1 mt-5" />
          <Reveal variant="blur" delay={0.25}>
            <p className="t-lede mt-8 max-w-2xl">
              His credited work spans online video and series content — written, directed and performed — with Harsh Beniwal and Purav Jha.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:pt-14">
          <Reveal variant="clip" duration={1.1}>
            <Media src={site.boat.src} alt={site.boat.alt} w={site.boat.w} h={site.boat.h} ratio="aspect-[4/5]" parallax />
          </Reveal>
          <Reveal variant="up" delay={0.15}>
            <p className="t-body mt-4 max-w-sm text-warmgrey">Every credit on this page links to its public source.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
