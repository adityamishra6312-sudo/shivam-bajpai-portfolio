import { useEffect, useRef } from 'react'

// Fine-pointer desktops only (CSS hides it elsewhere). Small dot → larger on links → WATCH / VIEW label on projects.
// The native cursor is never hidden.
export default function CustomCursor() {
  const wrap = useRef(null)
  const inner = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = wrap.current, tip = inner.current
    const move = (e) => { el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)` }
    const over = (e) => {
      const t = e.target.closest('[data-cursor], a, button')
      const kind = t?.dataset?.cursor
      el.classList.toggle('watch', kind === 'watch' || kind === 'view')
      el.classList.toggle('hover', !!t && !(kind === 'watch' || kind === 'view'))
      tip.textContent = kind === 'watch' ? 'Watch ↗' : kind === 'view' ? 'View ↗' : ''
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [])
  return <div ref={wrap} className="cursor" aria-hidden="true"><div ref={inner} className="cursor-inner" /></div>
}
