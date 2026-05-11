# SGF Sourcing — Fresh Coconut Landing Page

Static landing page for `sgfsourcing.com`. Deploy to Azdigi cPanel hosting by uploading the contents of this folder to `public_html/` (or whatever your web root is).

## What's in this folder

```
.
├── index.html           ← The main page (English + Vietnamese, language toggle)
├── robots.txt           ← Tells search engines what to crawl
├── sitemap.xml          ← Helps Google index the site
├── assets/
│   ├── css/style.css    ← All styling
│   ├── js/main.js       ← Language toggle, smooth scroll, form handler
│   └── img/
│       ├── sgf-logo.jpg ← Your logo
│       ├── hero-shapes.svg  ← Decorative hero background (placeholder)
│       └── story/       ← 4 placeholder story illustrations
└── README.md            ← This file
```

## Deploy to Azdigi (cPanel)

1. Log into Azdigi cPanel → File Manager
2. Navigate to `public_html/` (or your site's web root)
3. **Back up your current site first** — download or rename existing files
4. Upload the entire contents of this folder (drag-drop or zip+upload+extract)
5. Visit https://sgfsourcing.com/ to verify

## What needs to be replaced before/after launch

These are tagged in the code with `TODO: REPLACE` comments. Search the files for that string to find them all.

### Before launch — required for a complete site

1. **Formspree endpoint** (`assets/js/main.js`, line ~63)
   - Sign up at https://formspree.io (free tier is fine for now)
   - Create a new form, copy the endpoint URL
   - Paste into `FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx'`
   - Until this is set, the form falls back to opening the user's email client with a pre-filled message to `cris@sgfsourcing.com`

2. **Google Analytics 4** (`index.html`, near line ~80)
   - Create a GA4 property at https://analytics.google.com
   - Get the Measurement ID (`G-XXXXXXXXXX`)
   - Uncomment the GA4 script block and paste the ID in two places

### After 28 April — when photos arrive

3. **Story section illustrations** (`assets/img/story/01-river.svg` etc.)
   - Replace the four placeholder SVGs with real photos
   - Recommended naming: `fresh-coconut-sgf-sourcing-ben-tre-river.jpg`, `...farmers.jpg`, `...diamond-cut.jpg`, `...cat-lai-port.jpg`
   - Then update the `<img src=...>` paths in `index.html` story section

4. **Hero banner** (`assets/img/hero-shapes.svg`)
   - The current decorative SVG should be replaced with real flycam footage of Ben Tre groves
   - Either swap the SVG for a video (`<video autoplay muted loop>` with .mp4 source)
   - Or replace with a high-resolution photo

5. **OG cover image for social sharing** (`assets/img/og-cover.jpg`)
   - Create a 1200×630 px image (typically the hero photo with the logo overlaid)
   - Save as `assets/img/og-cover.jpg`

## What's already optimized

- **SEO**: Meta tags, structured data (Organization + Product schema), hreflang for EN/VI, sitemap, semantic HTML
- **Accessibility**: WCAG AA color contrast, keyboard-navigable, screen-reader landmarks, reduced-motion support
- **Performance**: Single CSS + JS file, fonts loaded with `font-display: swap`, images lazy-loaded, no frameworks
- **Mobile-responsive**: Tested down to 375px width
- **HubSpot-portable**: Form field names match HubSpot standard contact properties for easy migration when the agency builds the full B2B platform

## Editing content

- **Text**: Open `index.html`, find the section, edit the text inside the tags. For Vietnamese, edit the `window.SGF_I18N.vi` dictionary near the bottom of the file.
- **Colors**: Open `assets/css/style.css`, all colors are CSS variables at the top.
- **Adding sections**: Copy an existing `<section>` block and edit. Don't forget to add it to the nav links and sitemap if it's a major section.

## Browser support

Tested in Chrome, Safari, Firefox, Edge (latest two versions). Internet Explorer is not supported.

## Questions?

Search the codebase for `TODO:` to find every place that needs your input. Everything else is production-ready.
