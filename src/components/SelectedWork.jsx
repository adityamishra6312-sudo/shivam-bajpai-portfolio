import { projects } from '../data/projects.js'
import { ProjectCard, Chapter, Lines, Reveal } from './ui.jsx'

const get = (id) => projects.find((p) => p.id === id)

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12 md:pb-24">
      <Chapter n="02" label="Selected Work" />
      <Lines lines={['Selected', 'Work']} className="t-h1 mt-6 md:mt-8" />

      {/* FEATURED — complete, source-linked credits shown at scale */}
      <Reveal variant="fade"><p className="t-label mt-10 text-warmgrey md:mt-12">Featured</p></Reveal>
      <div className="mt-6 grid gap-x-8 gap-y-10 md:grid-cols-12 md:gap-y-12">
        <ProjectCard project={get('battle-khan-sir')} n={1} big className="md:col-span-7" />
        <ProjectCard project={get('war-the-ladai')} n={2} ratio="aspect-video md:aspect-[4/3]" className="md:col-span-5 md:mt-12" />
        <ProjectCard project={get('veer-vs-heer')} n={3} className="md:col-span-5" />
        <ProjectCard project={get('who-killed-jessica')} n={4} big ratio="aspect-video md:aspect-[16/10]" variant="clipX" className="md:col-span-7 md:mt-6" />
      </div>

      {/* ADDITIONAL */}
      <Reveal variant="fade"><p className="t-label mt-14 text-warmgrey md:mt-16">Additional work</p></Reveal>
      <div className="mt-6 grid gap-x-8 gap-y-8 md:grid-cols-12">
        <ProjectCard project={get('man-vs-wild-2')} n={5} className="md:col-span-6" />
        <ProjectCard project={get('harsh-beniwal-tv')} n={6} className="md:col-span-6" />
      </div>
    </section>
  )
}
