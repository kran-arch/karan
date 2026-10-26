<div align="center">

# Karan Khokhar · Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-kran--arch.github.io%2Fkaran-64ffda?style=for-the-badge&logo=githubpages&logoColor=0a192f)](https://kran-arch.github.io/karan/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite%206-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/MUI%20v6-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-0a192f?style=for-the-badge&labelColor=112240&color=64ffda)](LICENSE)

<p align="center">
  <b>A minimalist, high-performance developer portfolio and experimental workbench.</b><br />
  Designed with dark-mode software aesthetics, evidence-based project logs, and zero bloat.
</p>

[**Explore Live Portfolio ↗**](https://kran-arch.github.io/karan/) · [**View Resume ↗**](https://kran-arch.github.io/karan/resume.pdf) · [**Report Issue ↗**](https://github.com/kran-arch/karan/issues)

</div>

---

## ⚡ Overview

This repository hosts my personal developer portfolio, designed as a focused digital garden for my work in **Artificial Intelligence & Machine Learning**, algorithmic systems, and web technologies.

Inspired by the dark-mode aesthetic of [Gazi Jarin](https://www.gazijarin.com/), the site prioritizes:
- **High-agency readability**: High-contrast typography (`#ccd6f6` on `#0a192f`) paired with clean monospace accents (`IBM Plex Mono`).
- **Evidence over claims**: Deep-dive project logs detailing technical briefs, architecture decisions, outcomes, and lessons learned.
- **Fast, crisp motion**: Hardware-accelerated 350ms reveals with zero blur filters, maintaining razor-sharp text antialiasing.
- **Data-driven architecture**: 100% of bio content, experiences, skills, and projects reside in modular data files in `src/data/`.

---

## 🧭 Key Features

| Feature | Description |
|---|---|
| **Typewriter Greeting** | Dynamic typing headline in the Hero section (`hi, karan here. ▎`) with an active exploration status beacon. |
| **The Lab Workbench** | A dedicated staging ground for experiments, categorized into *In progress*, *Completed*, and *Ideas*, with seamless back-navigation. |
| **Tabbed Experience** | Vertical interactive tab interface highlighting academic milestones and independent systems engineering. |
| **Structured Project Logs** | Case-study style breakdowns with briefs, architecture decisions, screenshots, and direct GitHub links. |
| **Clickable 1-Page Resume** | Clean, ATS-ready PDF with verified hyperlink annotations embedded directly into the public assets. |
| **Tactile Contact Hub** | One-click copy email button with instant tactile confirmation (`copied ✓`) alongside LinkedIn and GitHub links. |
| **Spotlight Background** | Subtle mouse-tracking radial gradient glow rendered safely beneath interactive elements. |

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/) + [React DOM 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/) with lightning-fast Hot Module Replacement (HMR)
- **Component Library**: [Material UI (MUI v6)](https://mui.com/) & [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Routing**: [React Router v7](https://reactrouter.com/) (Hash-based routing for GitHub Pages stability)
- **Styling**: Emotion styled components, CSS custom properties, and custom responsive breakpoints
- **Typography**: `Calibre` / `Inter` system sans paired with `IBM Plex Mono`

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg         # SVG vector tab icon
│   ├── profile.avif        # Framed hero profile photograph (optimized 30KB)
│   ├── resume.pdf          # 1-page ATS resume with clickable links
│   ├── robots.txt          # Search engine crawler configuration
│   ├── sitemap.xml         # XML sitemap
│   ├── site.webmanifest    # Progressive web manifest
│   └── screenshots/        # Project preview screenshots
├── src/
│   ├── pages/              # Primary route views
│   │   ├── Home.jsx        # Landing page view
│   │   ├── Lab.jsx         # Lab workbench with status tabs
│   │   ├── ProjectDetail.jsx # Deep-dive project logs
│   │   └── NotFound.jsx    # 404 signal lost view
│   ├── components/
│   │   ├── layout/         # Shell and navigation components
│   │   │   ├── Navbar.jsx  # Glassmorphic top bar & mobile drawer
│   │   │   ├── Footer.jsx  # Bottom credits & social handles
│   │   │   └── SocialRail.jsx # Fixed desktop side social rail
│   │   ├── sections/       # In-page modular sections
│   │   │   ├── Hero.jsx    # Typewriter headline & status beacon
│   │   │   ├── About.jsx   # Bio & academic profile
│   │   │   ├── Experience.jsx # Tabbed experience timeline
│   │   │   ├── Skills.jsx  # Core competencies matrix
│   │   │   ├── Projects.jsx # Selected software grid
│   │   │   ├── LabPreview.jsx # Homepage lab preview callout
│   │   │   └── Contact.jsx # Tactile contact hub with copy-email
│   │   └── ui/             # Reusable UI primitives & effects
│   │       ├── FadeIn.jsx  # Crisp recursive scroll reveal
│   │       ├── Section.jsx # Section wrapper & animated dividers
│   │       ├── ProjectCard.jsx # Elevated project card
│   │       ├── Typewriter.jsx # Terminal-style typewriter effect
│   │       └── SpotlightBackground.jsx # Hardware-accelerated cursor glow
│   ├── data/
│   │   ├── content.js      # Global copy, links, and status config
│   │   ├── experience.js   # Education and career milestones
│   │   ├── projects.js     # Project entries, logs, and evidence
│   │   └── skills.js       # Core languages, tools, and ML concepts
│   ├── App.jsx             # HashRouter and root routing shell
│   ├── index.css           # Global resets, dark palette, and custom scrollbar
│   ├── main.jsx            # React root mount point
│   └── theme.js            # MUI design tokens (Navy, Teal, Slate)
├── index.html              # HTML shell & font preloading
├── package.json            # Scripts & dependencies
└── vite.config.js          # Base path configuration (/karan/)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kran-arch/karan.git
   cd karan
   ```

2. Install dependencies using **npm**:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/karan/` in your browser.

---

## 💻 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts Vite local development server with instant HMR. |
| `npm run build` | Compiles and bundles production-ready assets into `dist/`. |
| `npm run preview` | Locally serves the production build from `dist/` to verify bundling. |

---

## ⚙️ Customization & Content Management

All copy, project case studies, and personal credentials are decoupled from the UI logic. To personalize the portfolio, edit the files in `src/data/`:

- **[`src/data/content.js`](src/data/content.js)**:
  Update your name, bio paragraphs, email, social URLs, and Lab categories.
- **[`src/data/projects.js`](src/data/projects.js)**:
  Add new projects with tech tags, GitHub links, screenshots, and structured logs (`the brief`, `the system`, `outcomes`).
- **[`src/data/experience.js`](src/data/experience.js)**:
  Manage experience tabs, organizations, roles, and bullet points.
- **[`src/data/skills.js`](src/data/skills.js)**:
  Update categories (Languages, AI/ML Concepts, Developer Tools, Core CS).

---

## 🌐 Deployment to GitHub Pages

The project is pre-configured with a custom base path (`/karan/`) in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/karan/',
})
```

To build for production:
```bash
npm run build
```
Deploy the generated `dist/` directory to GitHub Pages via your preferred GitHub Action or the `gh-pages` branch.

---

## 🤝 Acknowledgments & Inspiration

- Visual aesthetic inspired by [Gazi Jarin's portfolio](https://www.gazijarin.com/) & repository.
- Fonts: `IBM Plex Mono` via Google Fonts.
- Built and maintained with ☕ by [Karan Khokhar](https://github.com/kran-arch).
