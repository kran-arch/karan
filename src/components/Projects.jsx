import { Grid } from "@mui/material";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="SELECTED WORK"
      title="Projects"
    >
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={index === 0 ? 8 : 4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
