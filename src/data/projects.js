// Each project object becomes one card on the homepage AND one full detail page.
const projects = [
  {
    id: "P-01",
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio created to practice semantic markup, refined layout, and accessible interaction.",
    tech: ["React", "Vite", "Material UI"],
    link: "https://kran-arch.github.io/karan/",
    repo: "https://github.com/kran-arch/karan",
    role: "Designer & developer",
    status: "Shipped",
    lastUpdated: "2026",
    next: "Keep the project logs up to date as new work is released.",
    timeframe: "2026",
    date: "2026 · ongoing",
    outcome:
      "A GitHub Pages portfolio with two structured project logs, source links, and reusable components driven by content data.",
    problem:
      "I needed a purposeful home for my projects and growth as an AI/ML student instead of a generic résumé template.",
    approach:
      "I created reusable React components, placed personal copy in data files, and designed a dark, project-led interface that remains readable on every screen size.",
    evidence: [
      { label: "GitHub profile", url: "https://github.com/kran-arch" },
      { label: "Live portfolio", url: "https://kran-arch.github.io/karan/" },
    ],
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}screenshots/portfolio1.jpg`,
        alt: "Portfolio homepage hero and navigation",
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/portfolio2.jpg`,
        alt: "Portfolio project cards and skills section",
      },
      {
        src: `${import.meta.env.BASE_URL}screenshots/portfolio3.jpg`,
        alt: "Portfolio project log detail page",
      },
    ],
    logs: [
      {
        title: "0. the brief",
        text: "Create one focused place to record my work, skills, and development as an AI/ML student without relying on a portfolio template.",
      },
      {
        title: "1. the system",
        text: "I organised the site with reusable React components and stored personal copy in data files. This lets me update a project or bio without changing layout code.",
      },
      {
        title: "2. the details",
        text: "The site uses responsive layouts, accessible controls and labels, smooth section navigation, and motion that accommodates visitors who prefer less animation.",
      },
      {
        title: "3. what changed",
        text: "The project log now presents source code, deployed work, structured outcomes, and reflection fields so the portfolio provides evidence rather than only claims.",
      },
    ],
    learned:
      "I learned that a portfolio becomes stronger when its content, evidence, and implementation details are separated and simple to update.",
    improve:
      "Next, I plan to add genuine project screenshots and replace placeholder repository entries with completed work as I publish it.",
    inspiration: {
      name: "Gazi Jarin",
      site: "https://www.gazijarin.com",
      repository: "https://github.com/gazijarin/Gazi-V2",
    },
  },
  {
    id: "P-02",

    title: "Python Learning Log",

    description:
      "A growing collection of practical Python projects and exercises that records my progress from core concepts to more advanced implementations.",

    tech: ["Python", "Algorithms", "Git / GitHub"],

    link: "",

    repo: "https://github.com/kran-arch/python",

    role: "Solo project",
    status: "Building",
    lastUpdated: "2026",
    next: "Develop the strongest exercises into independent, tested repositories.",

    timeframe: "2026",

    date: "2026 · ongoing",

    outcome:
      "An organised record of my Python learning journey, showing practical implementations, refinements, and the concepts learned through each project.",

    problem:
      "Programming study can become fragmented when concepts are learned without a consistent place to apply, test, and revisit them.",

    approach:
      "I learn by building small projects, beginning with simple implementations and improving them over time through stronger structure, added features, and cleaner code.",

    evidence: [
      {
        label: "GitHub repository",
        url: "https://github.com/kran-arch/python",
      },
    ],

    screenshots: [],
   logs: [
  {
    title: "0. the goal",
    text: "Create a consistent, practical learning process for programming and AI rather than relying only on theory and tutorials.",
  },
  {
    title: "1. the process",
    text: "Begin with a small problem, build a solution, test it, and record what I learn during the process.",
  },
  {
    title: "2. current focus",
    text: "Strengthening Python fundamentals while exploring data structures, algorithms, and introductory machine-learning ideas.",
  },
  {
    title: "3. next milestone",
    text: "Publish selected projects with clear explanations, test results, useful measurements, and source-code links.",
  },
],

learned:
  "I am learning to break complex programming and AI/ML concepts into smaller, manageable experiments that I can build, test, and understand on my own.",

improve:
  "Next, I will add tests and performance measurements to my stronger projects and turn the most useful experiments into standalone repositories.",
}
];

export default projects;
