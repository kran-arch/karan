import { Typography, Grid, Box, Stack, Chip } from "@mui/material";
import { colors } from "../theme";
import Section from "./Section";
import content from "../data/content";

export default function About() {
  const { about } = content;

  return (
    <Section
      id="about"
      title="About"
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
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
      </Grid>
    </Section>
  );
}
