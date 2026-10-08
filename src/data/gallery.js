// Replace files in public/images/gallery and public/images/shivam (keep filenames, or update src/w/h here).
// `alt` is descriptive for accessibility — it is never shown as a caption.
// `span` controls the editorial grid footprint (desktop, 12 columns). Row 1 (6+4) leaves 2 columns of
// intentional editorial whitespace rather than stretching the tall portrait to 6/12 — at that width its
// natural 807:1017 ratio rendered ~847px tall, effectively filling a whole viewport on its own (v6 scale pass).
export const gallery = [
  { src: '/images/shivam/shivam-hero-01.webp',    w: 668, h: 557,  alt: 'Shivam Bajpai on set with script pages',              span: 'md:col-span-6', ratio: 'aspect-[668/557]' },
  { src: '/images/shivam/shivam-portrait-01.webp', w: 807, h: 1017, alt: 'Close portrait of Shivam Bajpai by a window',          span: 'md:col-span-4', ratio: 'aspect-[807/1017]' },
  { src: '/images/gallery/shivam-portrait-02.webp', w: 802, h: 914, alt: 'Shivam Bajpai standing in a garden at night',          span: 'md:col-span-5', ratio: 'aspect-[802/914]' },
  { src: '/images/shivam/shivam-portrait-04.webp', w: 781, h: 800,  alt: 'Shivam Bajpai laughing on a boat',                     span: 'md:col-span-7', ratio: 'aspect-[16/10]' },
  // Available but off by default (Instagram-style text overlays are baked into the image):
  // { src: '/images/gallery/shivam-portrait-03.webp', w: 836, h: 932, alt: 'Shivam Bajpai mid high-kick outdoors', span: 'md:col-span-4', ratio: 'aspect-[836/932]' },
]
