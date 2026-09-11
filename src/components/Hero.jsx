import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { colors } from "../theme";
import FadeIn from "./FadeIn";
import content from "../data/content";

export default function Hero() {
  const { name, hero, about } = content;
  const scrollToProjects = () =>
    document
      .querySelector(hero.ctaHref)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  const photo = (
    <Box
      component="img"
      src={about.photo}
      alt={about.photoAlt}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "grayscale(100%) contrast(1.04)",
        transition: "filter .25s, transform .25s",
        "&:hover": {
          filter: "grayscale(20%)",
          transform: "translate(-5px,-5px)",
        },
      }}
    />
  );
  const frame = (
    <Box
      sx={{
        position: "absolute",
        zIndex: -1,
        inset: "14px -14px -14px 14px",
        border: `2px solid ${colors.green}`,
      }}
    />
  );
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "calc(100vh - 78px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: "relative", py: { xs: 12, md: 0 } }}
      >
        <FadeIn>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "relative",
              width: 150,
              height: 150,
              mb: 7,
              ml: 1.5,
            }}
          >
            {photo}
            {frame}
          </Box>
        </FadeIn>
        <Box
          sx={{
            position: "absolute",
            display: { xs: "none", md: "block" },
            width: 205,
            height: 205,
            right: "7%",
            bottom: "-10%",
            zIndex: 1,
          }}
        >
          {photo}
          {frame}
        </Box>
        <FadeIn>
          <Typography
            sx={{
              fontFamily: '"IBM Plex Mono", monospace',
              color: colors.green,
              mb: 2,
            }}
          >
            {hero.greeting}
          </Typography>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "4.7rem" },
              color: colors.white,
            }}
          >
            {name}.
          </Typography>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Typography
            variant="h2"
            sx={{
              maxWidth: 820,
              fontSize: { xs: "2rem", md: "3.7rem" },
              color: colors.slate,
              mt: 1,
            }}
          >
            {hero.tagline}
          </Typography>
        </FadeIn>
        <FadeIn delay={0.6}>
          <Typography
            sx={{
              maxWidth: 540,
              color: colors.slate,
              mt: 3,
              fontSize: "1.1rem",
            }}
          >
            {hero.intro}
          </Typography>
        </FadeIn>
        <FadeIn delay={0.9}>
          <Stack direction="row" sx={{ mt: 5 }}>
            <Button
              onClick={scrollToProjects}
              variant="outlined"
              sx={{
                color: colors.green,
                borderColor: colors.green,
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(100,255,218,.1)",
                  borderColor: colors.green,
                },
              }}
            >
              {hero.ctaLabel} <span aria-hidden="true">↘</span>
            </Button>
          </Stack>
        </FadeIn>
      </Container>
    </Box>
  );
}
