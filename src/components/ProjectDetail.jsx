import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { colors } from "../theme";
import projects from "../data/projects";
import FadeIn from "./FadeIn";

function MetaItem({ label, children }) {
  return (
    <Box>
      <Typography
        sx={{
          color: colors.green,
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: ".72rem",
          mb: 0.6,
        }}
      >
        {label}
      </Typography>
      <Typography sx={{ color: colors.lightestSlate, fontSize: ".95rem" }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    if (!project) return;

    document.title = `${project.title} — Karan Khokhar`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", project.description);

    return () => {
      document.title = "Karan Khokhar — AI & ML Student";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Karan Khokhar — an AI and machine-learning student building useful things for the web.",
        );
    };
  }, [project]);

  if (!project)
    return (
      <Container sx={{ py: 12 }}>
        <Typography variant="h4" sx={{ color: colors.white, mb: 2 }}>
          Project not found.
        </Typography>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ color: colors.green }}
        >
          Back home
        </Button>
      </Container>
    );

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.navy,
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon fontSize="small" />}
          sx={{
            color: colors.green,
            fontFamily: '"IBM Plex Mono", monospace',
            px: 0,
            mb: { xs: 6, md: 9 },
            "&:hover": { background: "transparent", color: colors.white },
          }}
        >
          Back home
        </Button>
        <FadeIn>
          <Typography
            sx={{
              color: colors.green,
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: ".82rem",
              mb: 2,
            }}
          >
            {project.id} · PROJECT LOG
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: colors.white,
              fontSize: { xs: "2.7rem", md: "4.5rem" },
              lineHeight: 1.03,
              letterSpacing: "-.045em",
              mb: 2,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              color: colors.slate,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
              maxWidth: 660,
              mb: 5,
            }}
          >
            {project.description}
          </Typography>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Grid
            container
            spacing={{ xs: 3, sm: 5 }}
            sx={{
              py: 3.5,
              mb: { xs: 7, md: 10 },
              borderTop: `1px solid ${colors.lightestNavy}`,
              borderBottom: `1px solid ${colors.lightestNavy}`,
            }}
          >
            <Grid item xs={6} sm={3}>
              <MetaItem label="DATE">
                {project.date || project.timeframe}
              </MetaItem>
            </Grid>
            <Grid item xs={6} sm={3}>
              <MetaItem label="ROLE">{project.role}</MetaItem>
            </Grid>
            <Grid item xs={6} sm={3}>
              <MetaItem label="STATUS">{project.status || "Building"}</MetaItem>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".72rem",
                  mb: 0.8,
                }}
              >
                STACK
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.8}>
                {project.tech.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      color: colors.lightSlate,
                      borderColor: colors.lightestNavy,
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </FadeIn>

        <Grid container spacing={3} sx={{ mb: { xs: 7, md: 9 } }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                p: 3,
                background: colors.lightNavy,
                border: `1px solid ${colors.lightestNavy}`,
              }}
            >
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".72rem",
                  mb: 1,
                }}
              >
                THE CHALLENGE
              </Typography>
              <Typography sx={{ color: colors.slate, lineHeight: 1.8 }}>
                {project.problem}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                p: 3,
                background: colors.lightNavy,
                border: `1px solid ${colors.lightestNavy}`,
              }}
            >
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".72rem",
                  mb: 1,
                }}
              >
                THE APPROACH
              </Typography>
              <Typography sx={{ color: colors.slate, lineHeight: 1.8 }}>
                {project.approach}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <FadeIn>
          <Box
            sx={{
              p: { xs: 2.5, md: 3.5 },
              mb: { xs: 7, md: 9 },
              borderLeft: `3px solid ${colors.green}`,
              background: colors.lightNavy,
            }}
          >
            <Typography
              sx={{
                color: colors.green,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".72rem",
                mb: 1,
              }}
            >
              RESULT
            </Typography>
            <Typography sx={{ color: colors.lightestSlate, lineHeight: 1.8 }}>
              {project.outcome}
            </Typography>
          </Box>
        </FadeIn>

        <Stack spacing={{ xs: 6, md: 8 }}>
          {project.logs?.map((log, index) => (
            <FadeIn key={log.title} delay={Math.min(index * 0.06, 0.2)}>
              <Box
                component="article"
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "150px 1fr" },
                  gap: { xs: 1.2, sm: 4 },
                  position: "relative",
                  pl: { xs: 2.5, sm: 0 },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: { xs: 0, sm: "145px" },
                    top: { xs: 4, sm: 9 },
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: colors.green,
                  },
                  "&::after":
                    index < project.logs.length - 1
                      ? {
                          content: '""',
                          position: "absolute",
                          left: { xs: 3.5, sm: "148.5px" },
                          top: { xs: 16, sm: 22 },
                          bottom: { xs: -52, md: -68 },
                          width: "1px",
                          background: colors.lightestNavy,
                        }
                      : {},
                }}
              >
                <Typography
                  sx={{
                    color: colors.green,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: ".77rem",
                  }}
                >
                  ENTRY {String(index + 1).padStart(2, "0")}
                </Typography>
                <Box>
                  <Typography
                    component="h2"
                    sx={{
                      color: colors.lightestSlate,
                      fontSize: { xs: "1.4rem", md: "1.7rem" },
                      mb: 1.3,
                    }}
                  >
                    {log.title}
                  </Typography>
                  <Typography sx={{ color: colors.slate, lineHeight: 1.85 }}>
                    {log.text}
                  </Typography>
                </Box>
              </Box>
            </FadeIn>
          ))}
        </Stack>

        <Grid container spacing={3} sx={{ mt: { xs: 8, md: 10 } }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                p: 3,
                border: `1px solid ${colors.lightestNavy}`,
              }}
            >
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".72rem",
                  mb: 1,
                }}
              >
                WHAT I LEARNED
              </Typography>
              <Typography sx={{ color: colors.slate, lineHeight: 1.8 }}>
                {project.learned}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                p: 3,
                border: `1px solid ${colors.lightestNavy}`,
              }}
            >
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".72rem",
                  mb: 1,
                }}
              >
                WHAT I&apos;D IMPROVE NEXT
              </Typography>
              <Typography sx={{ color: colors.slate, lineHeight: 1.8 }}>
                {project.improve}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{ borderColor: colors.lightestNavy, my: { xs: 8, md: 11 } }}
        />
        <FadeIn>
          <Stack spacing={2} alignItems="flex-start">
            <Typography sx={{ color: colors.lightestSlate, fontWeight: 700 }}>
              Screenshots and links
            </Typography>
            {project.screenshots?.length > 0 ? (
              <Grid container spacing={2}>
                {project.screenshots.map((shot) => (
                  <Grid item xs={6} key={shot.src}>
                    <Box
                      component="img"
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        display: "block",
                        border: `1px solid ${colors.lightestNavy}`,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography sx={{ color: colors.slate, fontSize: ".9rem" }}>
                Screenshots can be added to this log through the{" "}
                <code>screenshots</code> array in{" "}
                <code>src/data/projects.js</code> once each project has a real
                UI or result to capture.
              </Typography>
            )}
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {project.repo && (
                <Button component="a" href={project.repo} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />} variant="outlined" sx={{ color: colors.green, borderColor: colors.green }}>
                  GitHub source
                </Button>
              )}
              {project.link && (
                <Button component="a" href={project.link} target="_blank" rel="noopener noreferrer" startIcon={<OpenInNewIcon />} variant="outlined" sx={{ color: colors.green, borderColor: colors.green }}>
                  Live demo
                </Button>
              )}
              {project.evidence?.filter((item) => item.url !== project.repo && item.url !== project.link).map((item) => (
                <Button key={item.url} component="a" href={item.url} target="_blank" rel="noopener noreferrer" variant="text" sx={{ color: colors.lightSlate }}>
                  {item.label} ↗
                </Button>
              ))}
            </Stack>
          </Stack>
        </FadeIn>

        {project.inspiration && (
          <FadeIn>
            <Box
              sx={{
                mt: 8,
                pt: 3,
                borderTop: `1px solid ${colors.lightestNavy}`,
              }}
            >
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".72rem",
                  mb: 1,
                }}
              >
                INSPIRATION CREDIT
              </Typography>
              <Typography sx={{ color: colors.slate, lineHeight: 1.8 }}>
                This project was inspired by the portfolio work of{" "}
                <Box
                  component="a"
                  href={project.inspiration.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: colors.green }}
                >
                  {project.inspiration.name}
                </Box>
                . Their work encouraged me to start building and documenting my
                own developer journey. This is an original implementation for my
                portfolio.{" "}
                <Box
                  component="a"
                  href={project.inspiration.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: colors.lightSlate }}
                >
                  View the inspiration repository ↗
                </Box>
              </Typography>
            </Box>
          </FadeIn>
        )}
      </Container>
    </Box>
  );
}
