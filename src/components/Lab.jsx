import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { colors } from "../theme";
import content from "../data/content";
import FadeIn from "./FadeIn";

export default function Lab() {
  const { lab, contact } = content;

  return (
    <Box component="main" sx={{ minHeight: "100vh", py: { xs: 5, md: 8 } }}>
      <Container maxWidth="md">
        <Button component={Link} to="/" startIcon={<ArrowBackIcon />} sx={{ color: colors.green, px: 0, mb: 8 }}>
          Back home
        </Button>
        <FadeIn>
          <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".8rem", mb: 2 }}>
            {lab.eyebrow}
          </Typography>
          <Typography component="h1" sx={{ color: colors.white, fontSize: { xs: "3rem", md: "5rem" }, letterSpacing: "-.05em", mb: 2 }}>
            {lab.title}
          </Typography>
          <Typography sx={{ color: colors.slate, fontSize: { xs: "1.05rem", md: "1.25rem" }, lineHeight: 1.8, maxWidth: 650 }}>
            {lab.description}
          </Typography>
        </FadeIn>
        <FadeIn delay={0.12}>
          <Box sx={{ mt: 7, p: { xs: 3, md: 5 }, border: `1px solid ${colors.lightestNavy}`, background: "linear-gradient(135deg, rgba(17,34,64,.9), rgba(10,25,47,.75))" }}>
            <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".72rem", mb: 2 }}>
              EXPERIMENT QUEUE · OPEN
            </Typography>
            <Typography component="h2" sx={{ color: colors.white, fontSize: { xs: "1.5rem", md: "2rem" }, mb: 1 }}>
              Small work, clearly documented.
            </Typography>
            <Typography sx={{ color: colors.slate, lineHeight: 1.8, mb: 3 }}>
              New experiments will appear here when they have a question, an approach, and something worth sharing—even if the result is unfinished.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="flex-start">
              <Button href={contact.github} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />} variant="outlined" sx={{ color: colors.green, borderColor: colors.green }}>
                Visit GitHub
              </Button>
              <Button component={Link} to="/" sx={{ color: colors.lightSlate }}>
                Explore project logs
              </Button>
            </Stack>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
