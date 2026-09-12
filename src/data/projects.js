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

    title: "Python Learning Log",

    description:
      "An evolving collection of practical Python projects and exercises that documents my progress from fundamental concepts to more advanced implementations.",

    tech: ["Python", "Algorithms", "Git / GitHub"],

    link: "",

    repo: "https://github.com/kran-arch/python",

    role: "Solo project",

    timeframe: "2026",

    date: "2026 · ongoing",

    outcome:
      "A structured record of my Python learning journey, showcasing practical implementations, improvements, and the concepts learned through each project.",

    problem:
      "Learning programming can become fragmented when concepts are studied without a consistent place to apply, test, and revisit them.",

    approach:
      "I learn by building small projects, starting with simple implementations and gradually improving them with better structure, additional features, and cleaner code.",

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
    text: "Build a consistent, hands-on learning process for programming and AI instead of relying only on theory and tutorials.",
  },
  {
    title: "1. the process",
    text: "Start with a small problem, implement a solution, test it, and document what I learned from the process.",
  },
  {
    title: "2. current focus",
    text: "Strengthening Python fundamentals while exploring data structures, algorithms, and introductory machine-learning concepts.",
  },
  {
    title: "3. next milestone",
    text: "Publish selected projects with clear explanations, test results, useful measurements, and links to their source code.",
  },
],

learned:
  "I am learning to break complex programming and AI/ML concepts into smaller, manageable experiments that I can build, test, and understand independently.",

improve:
  "Next, I will add tests and performance measurements to my stronger projects and develop the most useful experiments into standalone repositories.",
}
];

export default projects;
