import { Typography, Grid, Box, Stack, Chip } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { colors } from "../../theme";
import Section from "../ui/Section";
import content from "../../data/content";

export default function About() {
  const { about } = content;

  return (
    <Section id="about" title="About">
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          {about.bio.map((paragraph, idx) => (
            <Typography
              key={idx}
              sx={{
                color: colors.slate,
                mb: 2.2,
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1.02rem" },
              }}
            >
              {paragraph}
            </Typography>
          ))}

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                color: colors.lightestSlate,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.82rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1.5,
              }}
            >
              <CodeRoundedIcon sx={{ fontSize: 16, color: colors.green }} />
              Technologies & Tools I work with:
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {about.tools.map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  size="small"
                  variant="outlined"
                  sx={{
                    color: colors.green,
                    borderColor: colors.lightestNavy,
                    backgroundColor: "rgba(100, 255, 218, 0.04)",
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "0.78rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: colors.green,
                      backgroundColor: "rgba(100, 255, 218, 0.12)",
                      transform: "translateY(-1px)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              border: `1px solid ${colors.lightestNavy}`,
              borderLeft: `3px solid ${colors.green}`,
              backgroundColor: colors.lightNavy,
              transition: "transform 0.25s ease, border-color 0.25s ease",
              "&:hover": {
                borderColor: "rgba(100, 255, 218, 0.4)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 1.5 }}>
              <SchoolRoundedIcon sx={{ color: colors.green, fontSize: 20 }} />
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".75rem",
                  letterSpacing: "0.8px",
                  fontWeight: 600,
                }}
              >
                ACADEMIC PROFILE
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: colors.white,
                fontWeight: 700,
                fontSize: "1.05rem",
                mb: 0.6,
                lineHeight: 1.4,
              }}
            >
              {about.education.program}
            </Typography>

            <Typography
              sx={{
                color: colors.lightSlate,
                fontSize: ".9rem",
                lineHeight: 1.6,
                mb: 1.5,
              }}
            >
              {about.education.institution}
            </Typography>

            <Typography
              sx={{
                color: colors.slate,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".75rem",
                p: 1,
                borderRadius: 1,
                backgroundColor: "rgba(10, 25, 47, 0.6)",
                border: `1px solid ${colors.lightestNavy}`,
              }}
            >
              {about.education.status}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
