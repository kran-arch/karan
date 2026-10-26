import { Box, Container, Typography, Button, Stack } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { colors } from "../../theme";
import FadeIn from "../ui/FadeIn";
import Typewriter from "../ui/Typewriter";
import content from "../../data/content";

export default function Hero() {
  const { name, hero, about, contact } = content;

  const scrollToProjects = () =>
    document
      .querySelector(hero.ctaHref)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  const photo = (
    <Box
      component="img"
      src={about.photo}
      alt={about.photoAlt}
      fetchPriority="high"
      decoding="async"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 1,
        filter: "grayscale(100%) contrast(1.05)",
        transition: "filter 0.25s ease, transform 0.25s ease",
        "&:hover": {
          filter: "grayscale(0%)",
          transform: "translate(-3px, -3px)",
        },
      }}
    />
  );

  const frame = (
    <Box
      className="hero-teal-frame"
      sx={{
        position: "absolute",
        zIndex: -1,
        inset: "12px -12px -12px 12px",
        borderRadius: 1,
        border: `2px solid ${colors.green}`,
        transition: "transform 0.25s ease",
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
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Text intro block */}
          <Box sx={{ maxWidth: { xs: "100%", md: 680 } }}>
            <FadeIn>
              <Typography
                sx={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  color: colors.green,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  mb: 1.5,
                  letterSpacing: "0.5px",
                }}
              >
                hi,{" "}
                <span style={{ color: colors.white, fontWeight: 700 }}>
                  <Typewriter words={[content.name.split(" ")[0].toLowerCase(), "karan"]} />
                </span>{" "}
                here.
              </Typography>
            </FadeIn>

            <FadeIn delay={0.05}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.2rem" },
                  fontWeight: 800,
                  color: colors.white,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {name}.
              </Typography>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.45rem", sm: "2.1rem", md: "2.6rem" },
                  fontWeight: 700,
                  color: colors.slate,
                  lineHeight: 1.25,
                  mt: 1.5,
                }}
              >
                {hero.tagline}
              </Typography>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Box sx={{ maxWidth: 580, mt: 2.5 }}>
                <Typography sx={{ color: colors.slate, fontSize: { xs: "0.98rem", md: "1.06rem" }, lineHeight: 1.75 }}>
                  {hero.intro}
                </Typography>

                {/* Status and Now indicators */}
                <Stack direction="column" spacing={1.2} sx={{ mt: 2.5 }}>
                  <Typography
                    sx={{
                      color: colors.green,
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: ".8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: colors.green,
                        display: "inline-block",
                        boxShadow: `0 0 8px ${colors.green}`,
                        flexShrink: 0,
                      }}
                    />
                    {hero.availability}
                  </Typography>

                  {hero.exploring && (
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        p: "6px 12px",
                        borderRadius: 1,
                        backgroundColor: "rgba(100, 255, 218, 0.04)",
                        border: `1px solid ${colors.lightestNavy}`,
                        width: "fit-content",
                        maxWidth: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: colors.lightSlate,
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: ".75rem",
                          lineHeight: 1.4,
                        }}
                      >
                        <span style={{ color: colors.green }}>now:</span> {hero.exploring}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Box>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mt: 4 }}>
                <Button
                  href={`mailto:${contact.email}`}
                  variant="outlined"
                  className="shimmer-btn"
                  startIcon={<EmailRoundedIcon />}
                  sx={{
                    color: colors.green,
                    borderColor: colors.green,
                    px: 3,
                    py: 1.2,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "0.85rem",
                    "&:hover": {
                      backgroundColor: "rgba(100,255,218,.1)",
                      borderColor: colors.green,
                    },
                  }}
                >
                  Say hi!
                </Button>

                <Button
                  onClick={scrollToProjects}
                  variant="outlined"
                  sx={{
                    color: colors.lightestSlate,
                    borderColor: colors.lightestNavy,
                    px: 3,
                    py: 1.2,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "0.85rem",
                    "&:hover": {
                      borderColor: colors.green,
                      color: colors.green,
                      backgroundColor: "rgba(100,255,218,.06)",
                    },
                  }}
                >
                  {hero.ctaLabel} <span aria-hidden="true" style={{ marginLeft: 6 }}>↘</span>
                </Button>
              </Stack>
            </FadeIn>
          </Box>

          {/* Original Profile Picture with teal frame */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 170, sm: 200, md: 230 },
              height: { xs: 170, sm: 200, md: 230 },
              flexShrink: 0,
              my: { xs: 2, md: 0 },
              alignSelf: { xs: "flex-start", md: "center" },
            }}
          >
            <FadeIn delay={0.1}>
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                {photo}
                {frame}
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
