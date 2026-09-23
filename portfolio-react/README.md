# Sreedersh Sudarsh — Portfolio (React + Tailwind)

Converted from the original single-file HTML portfolio into a React + Vite + Tailwind CSS project.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Structure

- `src/components/` — one component per section (Hero, About, Developer, Projects, Skills, Experience, Drummer, Mentalist, Contact, Footer, Navbar, Loader, FloatingWhatsApp)
- `src/data/socialLinks.js` — **edit this one file** to update WhatsApp, Instagram, GitHub, LinkedIn and email links across the whole site
- `src/hooks/useReveal.js` — scroll-reveal animation hook (IntersectionObserver)
- `tailwind.config.js` — custom green theme colors, fonts and keyframe animations matching the original design

## Notes

- GitHub, LinkedIn and email links are still placeholders (`YOUR_GITHUB_URL`, `YOUR_LINKEDIN_URL`, `YOUR_EMAIL`) — update them in `src/data/socialLinks.js`.
- All animations from the original (loader, nav blur-on-scroll, reveal-on-scroll, skill bar fill, drummer wave bars, mentalist cursor glow) are preserved as React behavior.
- Fonts (Syne + Inter) are loaded from Google Fonts in `index.html`.
