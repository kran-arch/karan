import { Box, Container, Grid, Typography } from "@mui/material";
import { colors } from "../theme";
import FadeIn from "./FadeIn";
import content from "../data/content";

const items = [
  ["LEARNING", content.now.learning],
  ["CURRENT PROJECT", content.now.project],
  ["NEXT MILESTONE", content.now.milestone],
];

export default function Now() {
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
              {content.now.eyebrow}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.white,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 3,
              }}
            >
              {content.now.title}
            </Typography>
            <Grid container spacing={3}>
              {items.map(([label, text]) => (
                <Grid item xs={12} md={4} key={label}>
                  <Typography
                    sx={{
                      color: colors.green,
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: ".7rem",
                      mb: 0.8,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{ color: colors.lightSlate, lineHeight: 1.75 }}
                  >
                    {text}
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
