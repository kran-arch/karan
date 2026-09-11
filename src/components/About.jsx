import { Typography, Grid, Box, Stack, Chip } from "@mui/material";
import { colors } from "../theme";
import Section from "./Section";
import content from "../data/content";

export default function About() {
  const { about } = content;

  return (
    // animation prop here only affects About - change freely without
    // touching Experience, Skills, or Projects
    <Section
      id="about"
      title="/About Me"
      animation={{ direction: "left", duration: 0.6, distance: 32 }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          {about.bio.map((paragraph) => (
            <Typography
              key={paragraph}
              sx={{ color: colors.slate, mb: 2, lineHeight: 1.7 }}
            >
              {paragraph}
            </Typography>
          ))}
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
            {about.tools.map((tool) => (
              <Chip
                key={tool}
                label={tool}
                size="small"
                variant="outlined"
                sx={{
                  color: colors.green,
                  borderColor: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                }}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="figure"
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1",
              m: 0,
              cursor: "pointer",
              transition: "transform 220ms ease, filter 220ms ease",
              "&::after": {
                content: '""',
                position: "absolute",
                zIndex: -1,
                inset: "14px -14px -14px 14px",
                border: `2px solid ${colors.green}`,
                transition: "transform 220ms ease",
              },
              "&:hover": { transform: "translate(-6px, -6px) scale(1.025)" },
              "&:hover img": { filter: "grayscale(15%) contrast(1.05)" },
              "&:hover::after": { transform: "translate(5px, 5px)" },
            }}
          >
            <Box
              component="img"
              src={about.photo}
              alt={about.photoAlt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%) contrast(1.04)",
                transition: "filter 220ms ease",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
