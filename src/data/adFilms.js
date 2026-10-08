// Client-provided commercial/branded work. Unlike projects.js (independently verified against
// YouTube/IMDb), this list is self-reported by the client and has not been independently confirmed
// by public source-checking — brand names only, no specific role, year, agency, or link claimed.
// Add `videoUrl` once a real, verified link exists for any entry; the card becomes clickable
// automatically (see AdFilms.jsx) with no further code changes needed.
//
// The section renders as the same text list as "Words first." (no thumbnails), so `image` is not
// used by the UI today. The generated title-card files are kept at these paths in case a hover
// preview is added later — they are NOT real campaign photography, and never a Shivam photo.
const img = (slug) => `/images/adfilms/${slug}.webp`

export const adFilms = [
  { title: 'Samsung', category: 'Commercial / Branded Work', image: img('samsung'), w: 1280, h: 720, videoUrl: null },
  { title: 'BGMI', category: 'Commercial / Branded Work', image: img('bgmi'), w: 1280, h: 720, videoUrl: null },
  { title: 'Realme', category: 'Commercial / Branded Work', image: img('realme'), w: 1280, h: 720, videoUrl: null },
  { title: 'Dr. Choice', category: 'Commercial / Branded Work', image: img('doctors-choice'), w: 1280, h: 720, videoUrl: null },
  { title: 'Wakefit', category: 'Commercial / Branded Work', image: img('wakefit'), w: 1280, h: 720, videoUrl: null },
  { title: 'PVR Cinemas', category: 'Commercial / Branded Work', image: img('pvr-cinemas'), w: 1280, h: 720, videoUrl: null },
]
