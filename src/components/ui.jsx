import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ytThumb, ytThumbFallback, projectLink } from '../data/projects.js'

export const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, amount: 'some', margin: '0px 0px -8% 0px' } // 'some' = reliable even for tall blocks

const variants = {
  up:    { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
  fade:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
  blur:  { hidden: { opacity: 0, y: 22, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  clip:  { hidden: { clipPath: 'inset(0 0 100% 0)' }, show: { clipPath: 'inset(0 0 0% 0)' } },
  clipX: { hidden: { clipPath: 'inset(0 100% 0 0)' }, show: { clipPath: 'inset(0 0% 0 0)' } },
}

export function Reveal({ children, variant = 'up', delay = 0, duration = 0.9, className = '', style }) {
  const reduce = useReducedMotion()
  const v = variants[reduce ? 'fade' : variant]
  return (
    <motion.div className={className} style={style} variants={v} initial="hidden" whileInView="show" viewport={viewport}
      transition={{ duration: reduce ? 0.01 : duration, delay: reduce ? 0 : delay, ease }}>
      {children}
    </motion.div>
  )
}

// Masked line-by-line heading reveal
export function Lines({ lines, className = '', delay = 0, as: Tag = 'h2' }) {
  return (
    <Tag className={className} aria-label={lines.join(' ')}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]" aria-hidden="true">
          <motion.span className="block" initial={{ y: '108%' }} whileInView={{ y: 0 }} viewport={viewport}
            transition={{ duration: 1, delay: delay + i * 0.12, ease }}>{l}</motion.span>
        </span>
      ))}
    </Tag>
  )
}

// Chapter marker: number + label + drawn rule
export function Chapter({ n, label, light = false, className = '' }) {
  return (
    <div className={className}>
      <div className={`t-label flex items-center justify-between ${light ? 'text-paper/55' : 'text-warmgrey'}`}>
        <span>{n} / 09</span><span>{label}</span>
      </div>
      <motion.div className={`mt-3 h-px origin-left ${light ? 'bg-paper/20' : 'bg-ink/25'}`}
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewport} transition={{ duration: 1.2, ease }} />
    </div>
  )
}

// Image with intrinsic size, lazy loading and optional subtle parallax inside an aspect container
export function Media({ src, alt, w, h, ratio = '', className = '', imgClass = '', eager = false, parallax = false, position = 'object-center' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const move = parallax && !reduce
  return (
    <div ref={ref} className={`relative overflow-hidden bg-ink/10 ${ratio} ${className}`}>
      <motion.img src={src} alt={alt} width={w} height={h}
        loading={eager ? 'eager' : 'lazy'} fetchpriority={eager ? 'high' : undefined} decoding="async"
        style={move ? { y, scale: 1.12 } : undefined}
        className={`absolute inset-0 h-full w-full object-cover ${position} ${imgClass}`} />
    </div>
  )
}

// YouTube thumbnail (video IDs only). Falls back to hqdefault; typographic poster when no video exists.
export function Thumb({ project, className = '', compact = false }) {
  if (!project.youtubeId) {
    // No video thumbnail exists for this credit. If a project-specific generated poster exists
    // (title already baked into the image — see projects.js), show it as-is with no text overlay,
    // to avoid double-rendering the title. Otherwise fall back to a plain typographic card.
    // NEVER substitute a Shivam personal photo here.
    if (project.posterImage) {
      return (
        <img src={project.posterImage.src} alt={project.posterImage.alt || `${project.title} poster`}
             width={project.posterImage.w} height={project.posterImage.h} loading="lazy" decoding="async"
             className={`h-full w-full object-cover ${className}`} />
      )
    }
    return (
      <div className={`flex h-full w-full items-end bg-ink ${compact ? 'p-2' : 'p-6'} ${className}`} role="img" aria-label={`${project.title} poster`}>
        <span className={compact ? 'font-display text-[0.7rem] uppercase leading-tight text-paper/90' : 't-h2 text-paper/90'}>{project.title}</span>
      </div>
    )
  }
  return (
    <img src={ytThumb(project.youtubeId)} alt={`${project.title} thumbnail`} width="1280" height="720" loading="lazy" decoding="async"
      onError={(e) => { const fb = ytThumbFallback(project.youtubeId); if (e.currentTarget.src !== fb) e.currentTarget.src = fb }}
      className={`h-full w-full object-cover ${className}`} />
  )
}

export function CollabTag({ name, light = false }) {
  const hb = name === 'Harsh Beniwal'
  return (
    <span className={`t-meta inline-block border px-2 py-1 text-[0.62rem] ${hb ? (light ? 'border-paper bg-paper text-ink' : 'border-ink bg-ink text-paper') : 'border-accent text-accent'}`}>
      {name}
    </span>
  )
}

// Editorial project entry: numbered, captioned, tap-friendly. Cursor becomes WATCH/VIEW on desktop.
export function ProjectCard({ project, n, ratio = 'aspect-video', big = false, className = '', variant = 'clip' }) {
  const href = projectLink(project)
  const imdb = !project.youtubeUrl
  return (
    <Reveal variant="up" className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer" data-cursor={imdb ? 'view' : 'watch'} className="group block"
         aria-label={`${project.title} — ${project.role}${project.character ? `, ${project.character}` : ''}. ${imdb ? 'View on IMDb' : 'Watch on YouTube'}, opens in a new tab.`}>
        <Reveal variant={variant} duration={1.2}>
          <div className={`relative overflow-hidden bg-ink ${ratio}`}>
            <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"><Thumb project={project} /></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/30 transition-opacity duration-500 group-hover:opacity-70" />
            <span className="font-display absolute left-4 top-3 text-3xl leading-none text-paper md:left-5 md:top-4 md:text-4xl">{String(n).padStart(2, '0')}</span>
          </div>
        </Reveal>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className={`transition-transform duration-500 group-hover:translate-x-1.5 ${big ? 't-h2' : 't-h3'}`}>{project.title}</h3>
            <p className="t-meta mt-2 text-warmgrey">{project.role}{project.character ? ` · ${project.character}` : ''}</p>
            <div className="mt-3"><CollabTag name={project.collaborator} /></div>
          </div>
          <span className="t-button link-u mt-1 shrink-0 whitespace-nowrap">{imdb ? 'View' : 'Watch'} ↗</span>
        </div>
      </a>
    </Reveal>
  )
}

// Shared editorial list row — used by "Words first." and "Ad films." so both lists stay identical.
// Renders an <a> when `href` exists, otherwise a visually identical non-link row (never a fake URL).
export function ListRow({ n, title, metaA, metaB, href, cursor = 'watch', ariaLabel, delay = 0 }) {
  const Tag = href ? 'a' : 'div'
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer', 'data-cursor': cursor, 'aria-label': ariaLabel } : {}
  return (
    <Reveal variant="up" delay={delay}>
      <li>
        <Tag {...linkProps}
          className="group grid grid-cols-[2rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-line py-4 transition-colors hover:bg-ink/[0.03] md:grid-cols-[3rem_1fr_11rem_11rem_2rem] md:py-5">
          <span className="t-meta text-warmgrey">{String(n).padStart(2, '0')}</span>
          <span className="t-h3 leading-tight transition-transform duration-500 group-hover:translate-x-2">{title}</span>
          {metaB
            ? (<>
                <span className="t-meta col-start-2 text-warmgrey md:col-start-auto">{metaA}</span>
                <span className="t-meta col-start-2 text-warmgrey md:col-start-auto">{metaB}</span>
              </>)
            : <span className="t-meta col-start-2 text-warmgrey md:col-span-2 md:col-start-auto">{metaA}</span>}
          {href && <ArrowUpRight size={18} className="hidden opacity-0 transition-opacity group-hover:opacity-100 md:block" />}
        </Tag>
      </li>
    </Reveal>
  )
}
