import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { colors } from "../theme";
import FadeIn from "./FadeIn";
import content from "../data/content";
import projects from "../data/projects";

export default function GitHubHighlights() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${content.github.username}/repos?sort=updated&direction=desc&per_page=10`,
      {
        signal: controller.signal,
        headers: { Accept: "application/vnd.github+json" },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }

        return response.json();
      })
      .then((data) => {
        const filteredRepos = data
          .filter((repo) => !repo.fork && !repo.archived)
          .slice(0, 4);

        setRepos(filteredRepos);
      })
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          console.error("GitHub repositories could not be loaded:", requestError);
          setError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const displayedRepos =
    repos.length > 0
      ? repos
      : projects.map((project) => ({
          id: project.id,
          name: project.title,
          description: project.description,
          language: project.tech[0],
          topics: project.tech.slice(1, 3),
          html_url: project.repo || content.github.profile,
        }));

  return (
    <Box id="github" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <Typography
            component="h2"
            sx={{
              color: colors.green,
              fontFamily: '"IBM Plex Mono", monospace',
              mb: 1,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {content.github.title}
          </Typography>

          <Typography sx={{ color: colors.slate, mb: 4, maxWidth: 650 }}>
            {content.github.description}
          </Typography>
        </FadeIn>

        {loading ? (
          <Typography
            role="status"
            aria-live="polite"
            sx={{
              color: colors.slate,
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: ".85rem",
            }}
          >
            Loading repositories...
          </Typography>
        ) : (
          <>
            {error && (
              <Typography
                role="status"
                aria-live="polite"
                sx={{ color: colors.slate, mb: 3, lineHeight: 1.7 }}
              >
                Live GitHub updates are unavailable, so these are featured
                projects from this portfolio.
              </Typography>
            )}
            <Grid container spacing={3}>
              {displayedRepos.map((repo, index) => (
                <Grid item xs={12} md={6} key={repo.id}>
                  <FadeIn delay={index * 0.1}>
                    <Card
                      sx={{
                        height: "100%",
                        background: colors.lightNavy,
                        border: `1px solid ${colors.lightestNavy}`,
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          gap={2}
                        >
                          <Box>
                            <Typography
                              variant="h6"
                              component="h3"
                              sx={{ color: colors.white, mb: 1 }}
                            >
                              {repo.name}
                            </Typography>

                            <Typography
                              sx={{
                                color: colors.slate,
                                lineHeight: 1.7,
                                mb: 2,
                              }}
                            >
                              {repo.description || "No description provided."}
                            </Typography>

                            <Typography
                              sx={{
                                color: colors.green,
                                fontFamily: '"IBM Plex Mono", monospace',
                                fontSize: ".72rem",
                              }}
                            >
                              {repo.language || "GitHub"}
                              {repo.topics?.length > 0 &&
                                ` · ${repo.topics.slice(0, 2).join(" · ")}`}
                            </Typography>
                          </Box>

                          <Button
                            aria-label={`Open ${repo.name} on GitHub`}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              minWidth: 44,
                              alignSelf: "flex-start",
                              color: colors.green,
                            }}
                          >
                            <OpenInNewIcon fontSize="small" />
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </Grid>
              ))}
            </Grid>
          </>
        )}

        <Button
          href={content.github.profile}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{ color: colors.green, mt: 3, px: 0 }}
        >
          View GitHub profile ↗
        </Button>
      </Container>
    </Box>
  );
}
