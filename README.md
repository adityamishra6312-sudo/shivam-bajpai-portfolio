# Shivam Bajpai — Portfolio

React + Vite + Tailwind CSS + Framer Motion.

## Run

    npm install
    npm run dev        # local dev server
    npm run build       # production build → /dist
    npm run preview     # preview the production build locally

## Update content

- **Projects/credits** — `src/data/projects.js` (single source of truth; verified credits only, with a `collaborators` array for full accuracy alongside the primary `collaborator` used for grouping)
- **Socials** — `src/data/socials.js`
- **Gallery** — `src/data/gallery.js` + image files in `public/images/gallery/`
- **Hero / About / Actor photos** — `src/data/site.js` + image files in `public/images/shivam/`

## Images (current assets)

    public/images/shivam/shivam-hero-01.webp       — hero (also used in Off Camera gallery)
    public/images/shivam/shivam-portrait-01.webp   — Actor section portrait
    public/images/shivam/shivam-portrait-04.webp   — About section photo
    public/images/gallery/shivam-portrait-02.webp  — Off Camera gallery

Replace any file in place (keep the filename) for a quick swap, or add a new
file and update its path/width/height in `site.js` / `gallery.js`.

## Before deploying

- `index.html` has a placeholder comment for `og:image` — add an absolute URL
  once the site has a real domain.
- Confirm the LinkedIn and YouTube-channel links in `src/data/socials.js`
  belong to this Shivam Bajpai before publishing (flagged as unverified in
  the research phase).
