// Edit this file to update personal details, copy, links, and site status.
const content = {
  name: "Karan Khokhar",
  shortName: "KK",
  siteUrl: "https://kran-arch.github.io/karan/",
  site: { version: "v1.5", refined: "September 2026" },
  hero: {
    greeting: "Hello, I’m",
    tagline: "An AI/ML student building practical software in public.",
    intro: "I’m pursuing a B.Tech focused on Artificial Intelligence and Machine Learning. I’m currently strengthening my foundations through Python, algorithms, and considered web projects.",
    availability: "Available for AI/ML and software internships.",
    ctaLabel: "View selected work",
    ctaHref: "#projects",
  },
  lab: {
    eyebrow: "// WORKBENCH",
    title: "The Lab",
    description: "A focused place for small experiments, notes, and work in progress. Ideas move from here into full project logs when they are ready.",
    // Add or rename a status here, then give projects that status in projects.js.
    categories: [
      { id: "progress", label: "In progress", statuses: ["building", "in-work"], empty: "Work in progress will show up here." },
      { id: "completed", label: "Completed", statuses: ["completed", "complete", "shipped"], empty: "Finished work will appear here as it is ready to share." },
      { id: "ideas", label: "Ideas", statuses: ["idea", "planned", "queued", "up next"], empty: "A place for experiments and ideas I want to explore next." },
    ],
  },
  about: {
    bio: [
      "I’m an AI/ML student at CT Group of Institutions, Shahpur Campus. I learn by turning ideas into small, useful projects.",
      "I’m building strong foundations in Python, algorithms, and machine learning, and looking for opportunities to contribute to real software work.",
    ],
    tools: ["Python", "JavaScript", "HTML & CSS", "Git & GitHub", "Algorithms", "ML fundamentals"],
    education: {
      program: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "CT Group of Institutions, Shahpur Campus",
      status: "Current student · learning through hands-on projects",
    },
    photo: `${import.meta.env.BASE_URL}profile.avif`,
    photoAlt: "Karan Khokhar",
  },
  contact: {
    email: "karankhokhar2021@gmail.com",
    github: "https://github.com/kran-arch",
    linkedin: "https://linkedin.com/in/karan-khokhar",
    resume: `${import.meta.env.BASE_URL}resume.pdf`,
    message: "I’m open to internships, collaborations, and conversations about interesting problems. Feel free to reach out.",
  },
};

export default content;
