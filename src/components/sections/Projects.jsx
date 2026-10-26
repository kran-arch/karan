import { Grid } from "@mui/material";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// SELECTED SOFTWARE & SYSTEMS"
      title="Projects"
    >
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
