// Each project object becomes one card on the homepage AND one full detail page.
const projects = [
  {
    id: "P-01",
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio built to practice semantic structure, polished layout, and accessible interactions.",
    tech: ["React", "Vite", "Material UI"],
    link: "#",
    repo: "https://github.com/kran-arch",
    role: "Designer & developer",
    timeframe: "2026",
    date: "2026 · ongoing",
    outcome: "Built a reusable React portfolio for professional career",
    problem:
      "I needed one intentional home for my projects and growth as an AI/ML student—not a generic resume template.",
    approach:
      "I built reusable React components, kept personal content in data files, and designed a dark, project-focused interface that stays readable on every screen size.",
    result:
      "The site is both a public portfolio and a hands-on project for learning responsive design, routing, accessibility, and maintainable component architecture.",
    evidence: [
      { label: "GitHub source", url: "https://github.com/kran-arch" },
      { label: "Live demo", url: "#" },
    ],
    screenshots: [
      { src: `${import.meta.env.BASE_URL}screenshots/portfolio1.jpg` },
      { src: `${import.meta.env.BASE_URL}screenshots/portfolio2.jpg` },
      { src: `${import.meta.env.BASE_URL}screenshots/portfolio3.jpg` },
    ],
    logs: [
      {
        title: "0. the brief",
        text: "Create one focused place to document my work, skills, and progress as an AI/ML student—without relying on a portfolio template.",
      },
      {
        title: "1. the system",
        text: "I structured the site as reusable React components and kept the personal content in data files. That lets me update a project or bio without touching the layout code.",
      },
      {
        title: "2. the details",
        text: "The site uses responsive layouts, accessible buttons and labels, smooth section navigation, and motion that respects visitors who prefer reduced animation.",
      },
      {
        title: "3. what changed",
        text: "The project log now exposes source code, a live demo, measurable outcomes, and reflection fields so the portfolio shows evidence rather than only claims.",
      },
    ],
    learned:
      "I learned how much stronger a portfolio becomes when content, evidence, and implementation details are structured separately and easy to update.",
    improve:
      "Next I want to add real project screenshots and replace any placeholder repository entries with finished work as I publish it.",
    inspiration: {
      name: "Gazi Jarin",
      site: "https://www.gazijarin.com",
      repository: "https://github.com/gazijarin/Gazi-V2",
    },
  },
  {
    id: "P-02",
    title: "Python ML & Algorithm Foundations",
    description:
      "A growing collection of data-structure, algorithm, and machine-learning exercises that makes my learning visible and repeatable.",
    tech: ["Python", "Algorithms", "AI / ML"],
    link: "",
    repo: "https://github.com/kran-arch",
    role: "Solo project",
    timeframe: "2026",
    date: "2026 · ongoing",
    outcome:
      "A project that really pushed me out of my comfort zone and made me focus on building a stronger understanding of algorithms and machine learning. Still working on em.",
    problem:
      "Early learning can feel scattered without a concrete place to apply and revisit core concepts.",
    approach:
      "I am collecting small implementations and experiments, then documenting what each one teaches me about problem-solving and machine learning.",
    result:
      "An evolving learning log that will grow with real implementations, benchmarks, and write-ups.",
    evidence: [
      { label: "GitHub profile", url: "https://github.com/kran-arch" },
    ],
    screenshots: [],
    logs: [
      {
        title: "0. the goal",
        text: "Turn early AI and programming study into a repeatable hands-on practice instead of only reading about concepts.",
      },
      {
        title: "1. the process",
        text: "Each exercise begins with a small problem, then moves through an implementation, tests, and notes about what the result taught me.",
      },
      {
        title: "2. current focus",
        text: "Python fundamentals, data structures, algorithms, and introductory machine-learning workflows.",
      },
      {
        title: "3. next milestone",
        text: "Publish selected implementations with clean explanations, measurements, and links to their source code.",
      },
    ],
    learned:
      "I am learning to break larger AI/ML topics into smaller experiments that can be implemented, tested, and explained independently.",
    improve:
      "Next I will publish benchmark numbers, add tests to the strongest exercises, and turn the best experiments into standalone repositories.",
  },
];

export default projects;
