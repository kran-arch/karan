import { Grid } from "@mui/material";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";
import projects from "../data/projects";

export default function Projects() {
  return (
    // this controls the section heading only - each card's own stagger
    // timing is set separately below via delay={i * 0.1}
    <Section
      id="projects"
      title="/Projects"
      animation={{ duration: 0.6, distance: 24 }}
    >
      <Grid container spacing={3}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            {/* delay increases per card so they cascade in one after another */}
            <FadeIn delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
