// SOURCE OF TRUTH — verified credits only. Do not add projects without verification.
// categories: writing | directing | acting | collaboration
// `collaborator`  : primary collaborator — used to bucket a project into the Harsh Beniwal / Purav Jha
//                   collaboration block, and to color the CollabTag badge.
// `collaborators` : full verified credit list (may include more than one name) — used anywhere
//                   the text needs to say exactly who a project was made with.

const yt = (id) => `https://www.youtube.com/watch?v=${id}`
export const ytThumb = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
export const ytThumbFallback = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`

export const projects = [
  {
    id: 'daaru-1',
    title: 'Daaru With Dad',
    role: 'Writer',
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal'],
    categories: ['writing', 'collaboration'],
    youtubeId: 'o6QbyunET80',
    youtubeUrl: yt('o6QbyunET80'),
    series: 1,
  },
  {
    id: 'daaru-2',
    title: 'Daaru With Dad 2',
    role: 'Writer',
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal', 'Purav Jha'],
    categories: ['writing', 'collaboration'],
    youtubeId: '-s27CI1L9E8',
    youtubeUrl: yt('-s27CI1L9E8'),
    series: 2,
  },
  {
    id: 'daaru-3',
    title: 'Daaru With Dad 3',
    role: 'Writer',
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal', 'Purav Jha'],
    categories: ['writing', 'collaboration'],
    youtubeId: '220TpHgDfvs',
    youtubeUrl: yt('220TpHgDfvs'),
    series: 3,
  },
  {
    id: 'daaru-4',
    title: 'Daaru With Dad 4',
    role: 'Writer',
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal'],
    categories: ['writing', 'collaboration'],
    youtubeId: 'nWed2eTY7_Q',
    youtubeUrl: yt('nWed2eTY7_Q'),
    series: 4,
  },
  {
    id: 'veer-vs-heer',
    title: 'Veer Vs Heer Return Pt. 2',
    role: 'Writer + Actor',
    character: 'Mukesh',
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal', 'Purav Jha'],
    categories: ['writing', 'acting', 'collaboration'],
    youtubeId: 'bLsJ8HkIjwU',
    youtubeUrl: yt('bLsJ8HkIjwU'),
  },
  {
    id: 'who-killed-jessica',
    title: 'Who Killed Jessica?',
    role: 'Writer + Actor',
    character: "Landlord's Son",
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal', 'Purav Jha'],
    categories: ['writing', 'acting', 'collaboration'],
    // Verified Ep.01 YouTube URL (client-supplied, independently confirmed via 3 sources: Harsh Beniwal's
    // own X/Twitter announcement, a reaction-video credit list, and the video's own description — all
    // agree on this ID, upload date Jun 19 2021, and list Shivam Bajpai in the cast).
    youtubeId: 'mp83Hr6KaOA',
    youtubeUrl: yt('mp83Hr6KaOA'),
    imdbUrl: 'https://www.imdb.com/title/tt14887068/', // series page — kept as a secondary reference
  },
  {
    id: 'harsh-beniwal-tv',
    title: 'Harsh Beniwal — TV Series (2021)',
    role: 'Writer + Actor',
    collaborator: 'Harsh Beniwal',
    collaborators: ['Harsh Beniwal'],
    categories: ['writing', 'acting', 'collaboration'],
    youtubeId: null,
    youtubeUrl: null,
    imdbUrl: 'https://www.imdb.com/title/tt14859678/', // corrected from brief's tt13456789
    linkLabel: 'VIEW ON IMDB',
    // No verified video exists for this title. posterImage is a generated editorial title card
    // (same treatment as the Ad Films placeholders) — NEVER a Shivam personal photo.
    posterImage: { src: '/images/harsh-beniwal-tv-series.webp', w: 1280, h: 720, alt: 'Harsh Beniwal — TV Series, 2021' },
    // No character name or episode list — not verified.
  },
  {
    id: 'battle-khan-sir',
    title: 'Battle: Khan Sir v/s Media',
    role: 'Writer + Director',
    collaborator: 'Purav Jha',
    collaborators: ['Purav Jha'],
    categories: ['writing', 'directing', 'collaboration'],
    youtubeId: 'VPz9NGNmUcw',
    youtubeUrl: yt('VPz9NGNmUcw'),
  },
  {
    id: 'war-the-ladai',
    title: 'WAR: The Ladai',
    role: 'Writer + Director',
    collaborator: 'Purav Jha',
    collaborators: ['Purav Jha'],
    categories: ['writing', 'directing', 'collaboration'],
    youtubeId: 'aLc6eYD69cE',
    youtubeUrl: yt('aLc6eYD69cE'),
  },
  {
    id: 'man-vs-wild-2',
    title: 'Man vs Wild Ep.02 — Yeti Ka Aatank',
    role: 'Co-writer',
    collaborator: 'Purav Jha',
    collaborators: ['Purav Jha'],
    categories: ['writing', 'collaboration'],
    youtubeId: 'vZ2zK_Ph4ko',
    youtubeUrl: yt('vZ2zK_Ph4ko'),
  },
]

export const projectLink = (p) => p.youtubeUrl || p.imdbUrl
