import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Divider,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { colors } from "../../theme";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        backgroundColor: colors.lightNavy,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        border: `1px solid ${colors.lightestNavy}`,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "rgba(100, 255, 218, 0.55)",
          boxShadow: "0 18px 40px -15px rgba(2, 12, 27, 0.85), 0 0 24px rgba(100, 255, 218, 0.1)",
          "& .folder-icon": {
            color: colors.green,
            transform: "translateY(-2px) scale(1.04)",
          },
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: { xs: 2.5, md: 3 },
        }}
      >
        {/* Card Header with Folder Icon and Quick Links */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Box
            className="folder-icon"
            sx={{
              color: colors.green,
              transition: "transform 0.25s ease, color 0.25s ease",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FolderOpenRoundedIcon sx={{ fontSize: 36 }} />
          </Box>

          <Stack direction="row" spacing={0.5} alignItems="center">
            {project.repo && (
              <IconButton
                component="a"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub Repository"
                size="small"
                sx={{
                  color: colors.slate,
                  transition: "color 0.2s, transform 0.2s",
                  "&:hover": { color: colors.green, transform: "translateY(-2px)" },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            )}
            {project.link && (
              <IconButton
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Live Demo"
                size="small"
                sx={{
                  color: colors.slate,
                  transition: "color 0.2s, transform 0.2s",
                  "&:hover": { color: colors.green, transform: "translateY(-2px)" },
                }}
              >
                <OpenInNewRoundedIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        </Stack>

        {/* Project ID, Role & Status */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1} sx={{ mb: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                color: colors.green,
                fontSize: ".75rem",
                fontWeight: 600,
              }}
            >
              {project.id}
            </Typography>
            {project.role && (
              <Typography
                sx={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  color: colors.slate,
                  fontSize: ".7rem",
                }}
              >
                · {project.role}
              </Typography>
            )}
          </Stack>

          <Chip
            label={project.status || "Building"}
            size="small"
            sx={{
              color: colors.green,
              border: `1px solid ${colors.lightestNavy}`,
              backgroundColor: "rgba(100, 255, 218, 0.05)",
              fontSize: ".7rem",
              height: 22,
            }}
          />
        </Stack>

        {/* Title */}
        <Typography
          component={Link}
          to={`/projects/${project.id}`}
          variant="h5"
          sx={{
            color: colors.white,
            fontWeight: 700,
            fontSize: "1.25rem",
            mb: 1.5,
            textDecoration: "none",
            transition: "color 0.2s ease",
            "&:hover": { color: colors.green },
          }}
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: colors.slate,
            fontSize: ".95rem",
            lineHeight: 1.65,
            mb: 2,
          }}
        >
          {project.description}
        </Typography>

        {/* Outcome Box */}
        {project.outcome && (
          <Box
            sx={{
              p: 1.8,
              borderRadius: 1.5,
              backgroundColor: "rgba(10, 25, 47, 0.6)",
              border: `1px solid ${colors.lightestNavy}`,
              mb: 2,
            }}
          >
            <Typography
              sx={{
                color: colors.lightestSlate,
                fontSize: ".85rem",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', marginRight: 6 }}>
                outcome:
              </strong>
              {project.outcome}
            </Typography>
          </Box>
        )}

        {/* Tech Stack Chips */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          sx={{ mt: "auto", pt: 1, mb: 2 }}
        >
          {project.tech.map((t) => (
            <Typography
              key={t}
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".74rem",
                color: colors.slate,
                backgroundColor: "rgba(2, 12, 27, 0.5)",
                px: 1.2,
                py: 0.35,
                borderRadius: 1,
                border: `1px solid ${colors.lightestNavy}`,
                transition: "border-color 0.2s, color 0.2s",
                "&:hover": {
                  borderColor: colors.green,
                  color: colors.lightestSlate,
                },
              }}
            >
              {t}
            </Typography>
          ))}
        </Stack>

        <Divider sx={{ borderColor: colors.lightestNavy, mb: 1.5 }} />

        {/* Action Link to Full Project Log */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            component={Link}
            to={`/projects/${project.id}`}
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
            sx={{
              color: colors.green,
              px: 0,
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: ".82rem",
              transition: "transform 0.2s, color 0.2s",
              "&:hover": {
                backgroundColor: "transparent",
                color: colors.white,
                transform: "translateX(2px)",
              },
            }}
          >
            Read project log
          </Button>

          <Typography
            sx={{
              color: colors.slate,
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: ".68rem",
            }}
          >
            {project.date}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
