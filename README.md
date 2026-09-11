# My Portfolio

Built with Vite, React 19, and Material UI v6, using the classic navy / slate / green
developer-portfolio palette.

## Setup

```
npm install
npm run dev
```

## Build for production

```
npm run build
```

## Where to edit things

Almost everything text-based lives in **`src/data/content.js`** — your name, hero
tagline, bio, email, and social links all live there. Edit that one file for most
personal-info updates; nothing else needs to change.

- `src/data/content.js` — name, hero text, About bio/tools/photo, contact info & links
- `src/data/projects.js` — your project list (each entry becomes a homepage card
  AND a full page at `/projects/<id>` — add `problem`/`approach`/`result` fields
  for the case-study section, `role`/`timeframe` for the sidebar)
- `src/data/skills.js` — your skills, grouped by category
- `src/data/experience.js` — your work/internship history
- `src/theme.js` — colors and fonts (change these and the whole site updates)

## Animations

Each section wraps its content in `FadeIn` (`src/components/FadeIn.jsx`), which
fades + slides content in every time it scrolls into view, and back out when it
leaves — so it replays on every pass, not just once.

Every section sets its own animation independently via a `animation={{ ... }}`
prop on `Section` (see `About.jsx`, `Experience.jsx`, `Skills.jsx`) or by using
`<FadeIn>` directly (see `Hero.jsx`, `Projects.jsx`, `ProjectDetail.jsx`).
Available options:

- `direction` — `'up'` | `'down'` | `'left'` | `'right'` | `'scale'`
- `distance` — how far it travels in px (ignored for `'scale'`)
- `duration` — how long the animation takes, in seconds
- `delay` — stagger start time, in seconds (used for cascading project cards)

Changing one section's animation never affects any other section.

## Deploying

Run `npm run build`, which outputs a `dist/` folder you can host anywhere
(GitHub Pages, Vercel, Netlify).
