// ============================================================
// EDIT THIS FILE to update your name, bio, links, Now section,
// GitHub highlights, and resume path.
// ============================================================

const content = {
  name: "Karan Khokhar",
  shortName: "KK",

  hero: {
    greeting: "Hi, my name is",
    tagline: "I’m learning to build intelligent experiences.",
    intro:
      "I’m a B.Tech student focused on Artificial Intelligence and Machine Learning. Right now, I’m strengthening my fundamentals through Python, algorithms, and thoughtful web projects.",
    ctaLabel: "See what I’m building",
    ctaHref: "#projects",
  },

  now: {
    eyebrow: "01. Now",
    title: "What I’m building right now",
    learning: "Python, algorithms, and machine-learning fundamentals",
    project:
      "Turning my learning into small, documented projects with measurable results",
    milestone:
      "Publish the next project with source code, preview, and a clear improvement plan",
  },

  about: {
    bio: [
      "I enjoy the moment an idea becomes something people can use. My current focus is understanding the foundations behind AI and machine learning while becoming a stronger software builder.",
      "I’m studying at CT Group of Institutions, Shahpur Campus, and I learn best by turning concepts into small, shippable experiments.",
      "I just build, break, and rebuild until I understand the problem and the solution. I’m always looking for ways to improve my skills and grow as an aspiring developer.",
    ],
    tools: [
      "Python",
      "JavaScript",
      "HTML & CSS",
      "Git & GitHub",
      "Algorithms",
      "ML fundamentals",
    ],
    photo: "${import.meta.env.BASE_URL}profile.jpg",
    photoAlt: "Portrait of Karan Khokhar",
  },

  github: {
    title: "Latest on GitHub",
    description: "Some cool projects I've been working on.",
    profile: "https://github.com/kran-arch",
    repos: [
      {
        name: "karankhokhar.com",
        description:
          "The source for this portfolio and its project-log system.",
        url: "https://github.com/kran-arch/karan/",
        tech: "React · Vite · Material UI",
      },
      {
        name: "AI / ML learning collection",
        description:
          "Algorithms, Python exercises, and introductory ML experiments as the collection grows.",
        url: "https://github.com/kran-arch",
        tech: "Python · Algorithms · AI / ML",
      },
    ],
  },

  contact: {
    email: "karankhokhar2021@gmail.com",
    github: "https://github.com/kran-arch",
    linkedin: "https://linkedin.com/in/karan-khokhar",
    resume: "/resume.pdf",
    message:
      "I'm open to internships, collaborations, and just talking about interesting problems. My inbox is always open.",
  },
};

export default content;
