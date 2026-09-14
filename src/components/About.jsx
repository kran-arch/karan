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
      title="About"
      animation={{ direction: "left", duration: 0.35, distance: 16 }}
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
          <Box
            sx={{
              mt: 4,
              p: 2.5,
              borderLeft: `2px solid ${colors.green}`,
              backgroundColor: colors.lightNavy,
            }}
          >
            <Typography
              sx={{
                color: colors.green,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".72rem",
                mb: 0.8,
              }}
            >
              EDUCATION
            </Typography>
            <Typography sx={{ color: colors.white, fontWeight: 700, mb: 0.4 }}>
              {about.education.program}
            </Typography>
            <Typography sx={{ color: colors.lightSlate, fontSize: ".95rem" }}>
              {about.education.institution} · {about.education.status}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="figure"
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1",
              m: 0,
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
              loading="lazy"
              decoding="async"
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
