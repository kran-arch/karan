import { useState } from "react";
import { Box, Button, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { colors } from "../theme";
import content from "../data/content";
import Navbar from "./Navbar";
import projects from "../data/projects";

function belongsToCategory(project, category) {
  const status = project.status?.trim().toLowerCase();
  return category.statuses.some((categoryStatus) => categoryStatus.toLowerCase() === status);
}

export default function Lab() {
  const { lab, contact } = content;
  const [active, setActive] = useState(0);
  const selectedCategory = lab.categories[active];
  const selectedProjects = projects.filter((project) => belongsToCategory(project, selectedCategory));

  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".8rem", mb: 2 }}>
            {lab.eyebrow}
          </Typography>
          <Typography component="h1" sx={{ color: colors.white, fontSize: { xs: "3rem", md: "5rem" }, letterSpacing: "-.05em", mb: 2 }}>
            <Box component="span" aria-hidden="true" sx={{ color: colors.green, fontWeight: 800, mr: 1.25 }}>/</Box>
            {lab.title}
          </Typography>
          <Typography sx={{ color: colors.slate, fontSize: { xs: "1.05rem", md: "1.25rem" }, lineHeight: 1.8, maxWidth: 650 }}>
            {lab.description}
          </Typography>

          <Box sx={{ mt: 7 }}>
            <Tabs
              variant="fullWidth"
              value={active}
              onChange={(_, value) => setActive(value)}
              aria-label="Lab project categories"
              sx={{
                borderBottom: `1px solid ${colors.lightestNavy}`,
                "& .MuiTabs-indicator": {
                  backgroundColor: colors.green,
                  height: "2px",
                },
              }}
            >
              {lab.categories.map((category, index) => {
                const count = projects.filter((project) => belongsToCategory(project, category)).length;
                return (
                  <Tab
                    key={category.id}
                    id={`lab-tab-${category.id}`}
                    aria-controls={`lab-panel-${category.id}`}
                    label={`${category.label} · ${count}`}
                    sx={{
                      minWidth: 0,
                      minHeight: 54,
                      px: { xs: 0.5, sm: 2 },
                      color: colors.slate,
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: { xs: ".68rem", sm: ".82rem" },
                      textTransform: "none",
                      "&.Mui-selected": { color: colors.green },
                    }}
                  />
                );
              })}
            </Tabs>

            <Box
              role="tabpanel"
              id={`lab-panel-${selectedCategory.id}`}
              aria-labelledby={`lab-tab-${selectedCategory.id}`}
              key={active}
              sx={{ pt: 3, minHeight: 190, animation: "experience-enter 220ms ease both" }}
            >
              {selectedProjects.length ? (
                <Stack spacing={2}>
                  {selectedProjects.map((project) => (
                    <Box key={project.id} sx={{ py: 2.5, borderBottom: `1px solid ${colors.lightestNavy}` }}>
                      <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".72rem", mb: 1 }}>
                        {project.id} · {project.status || "Building"}
                      </Typography>
                      <Typography component={Link} to={`/projects/${project.id}`} sx={{ color: colors.white, fontSize: "1.2rem", fontWeight: 700, "&:hover": { color: colors.green } }}>
                        {project.title} ↗
                      </Typography>
                      <Typography sx={{ color: colors.slate, lineHeight: 1.7, mt: 0.8 }}>{project.description}</Typography>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Typography sx={{ color: colors.slate, py: 2, lineHeight: 1.7 }}>{selectedCategory.empty}</Typography>
              )}
            </Box>
          </Box>

          <Button href={contact.github} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />} sx={{ color: colors.green, mt: 3, px: 0 }}>
            More work on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
