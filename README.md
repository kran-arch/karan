# Karan Khokhar · Portfolio

A lightweight, responsive portfolio for my AI/ML studies, projects, and experiments.

**Live site:** [kran-arch.github.io/karan](https://kran-arch.github.io/karan/)

The visual direction takes inspiration from [Gazi Jarin’s portfolio](https://www.gazijarin.com/). The content and implementation are my own.

## What’s here

- A short introduction, profile, and contact links
- Experience entries selected from a tabbed panel
- A concise skills section
- Project cards with individual project pages and build notes
- A Lab with status tabs for work in progress, completed work, and ideas
- Responsive navigation, reduced-motion support, and a skip-to-content link

## Run locally

```bash
git clone https://github.com/kran-arch/karan.git
cd karan
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the static site into `dist/`. |
| `npm run preview` | Serves the production build locally. |

## Update the content

Most portfolio copy and records live in `src/data/`, separate from the page layout.

| File | Change |
| --- | --- |
| [`content.js`](src/data/content.js) | Intro, bio, contact details, and Lab category labels and empty states. |
| [`experience.js`](src/data/experience.js) | Experience tabs and the role, dates, and notes shown in each panel. |
| [`skills.js`](src/data/skills.js) | Skills and their descriptions. |
| [`projects.js`](src/data/projects.js) | Project cards, detail pages, links, screenshots, and status. |

To add a project, add an entry to `projects.js`. Set its `status` to one of the statuses listed in `content.js` under `lab.categories` to place it in the matching Lab tab. To add a new Lab tab, add a category there with its label, statuses, and empty-state message.

To add an Experience tab or Skill card, add an entry to its matching data file. The existing sections render those entries automatically.

## Build and hosting

The site uses HashRouter and Vite’s `/karan/` base path for GitHub Pages deployment. To build the static files:

```bash
npm run build
```

The generated site is in `dist/`. If the repository is renamed, update `base` in `vite.config.js` and the deployed URLs in `index.html` and project data.

## Built with

React · Vite · Material UI · React Router

---

Made by [Karan Khokhar](https://github.com/kran-arch).
