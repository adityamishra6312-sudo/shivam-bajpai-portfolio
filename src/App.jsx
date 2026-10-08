import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SelectedWork from './components/SelectedWork.jsx'
import { Writer, Director, Actor } from './components/Roles.jsx'
import Collaborations from './components/Collaborations.jsx'
import DaaruFeature from './components/DaaruFeature.jsx'
import AdFilms from './components/AdFilms.jsx'
import Gallery from './components/Gallery.jsx'
import { Contact, Footer } from './components/Contact.jsx'
import CustomCursor from './components/CustomCursor.jsx'

export default function App() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink">
        Skip to work
      </a>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        {/* 01 — Intro (Hero + About, no separate chapter number for About) */}
        <Hero />
        <About />

        {/* 02 — Selected Work */}
        <SelectedWork />

        {/* 03 Writer · 04 Ad Films · 05 Director · 06 Actor */}
        <Writer />
        <AdFilms />
        <Director />
        <Actor />

        {/* 07 — Collaborations, with the Daaru With Dad series as its signature feature */}
        <Collaborations />
        <DaaruFeature />

        {/* 08 — Off Camera (gallery) */}
        <Gallery />

        {/* 09 — Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
