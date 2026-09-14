import { Box, Container, Grid, Typography } from "@mui/material";
import { colors } from "../theme";
import FadeIn from "./FadeIn";
import content from "../data/content";

export default function Now() {
  const { now } = content;
  return (
    <Box id="now" sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <Box
            sx={{
              border: `1px solid ${colors.lightestNavy}`,
              background: "rgba(17,34,64,.55)",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                color: colors.green,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".78rem",
                mb: 1,
              }}
            >
              {now.eyebrow}
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: colors.white,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 3,
              }}
            >
              {now.title}
            </Typography>
            <Grid container spacing={3}>
              {now.entries.map((entry) => (
                <Grid item xs={12} md={4} key={entry.title}>
                  <Typography
                    sx={{
                      color: colors.green,
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: ".7rem",
                      mb: 0.8,
                    }}
                  >
                    {entry.date}
                  </Typography>
                  <Typography sx={{ color: colors.white, fontWeight: 700, mb: 1 }}>
                    {entry.title}
                  </Typography>
                  <Typography
                    sx={{ color: colors.lightSlate, lineHeight: 1.75 }}
                  >
                    {entry.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
