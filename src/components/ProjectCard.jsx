import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { colors } from "../theme";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        backgroundColor: colors.lightNavy,
        height: "100%",
        transition: "transform 0.2s ease",
        border: `1px solid ${colors.lightestNavy}`,
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Typography
          sx={{
            fontFamily: '"IBM Plex Mono", monospace',
            color: colors.green,
            fontSize: ".85rem",
            mb: 2,
          }}
        >
          {project.id}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1} sx={{ mb: 1.5 }}>
          <Chip
            label={project.status || "Building"}
            size="small"
            sx={{
              color: colors.green,
              border: `1px solid ${colors.lightestNavy}`,
              backgroundColor: "rgba(100,255,218,.06)",
            }}
          />
          <Typography sx={{ color: colors.slate, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".68rem" }}>
            UPDATED {project.lastUpdated || project.date}
          </Typography>
        </Stack>
        <Link to={`/projects/${project.id}`}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: colors.white,
              mb: 1,
              "&:hover": { color: colors.green },
            }}
          >
            {project.title}
          </Typography>
        </Link>
        <Typography sx={{ color: colors.slate, mb: 2 }}>
          {project.description}
        </Typography>
        <BoxlessOutcome text={project.outcome} />
        {project.next && (
          <Typography sx={{ color: colors.slate, fontSize: ".8rem", lineHeight: 1.6, mt: 1.5 }}>
            <span style={{ color: colors.green }}>Next:</span> {project.next}
          </Typography>
        )}
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2, mb: 2 }}>
          {project.tech.map((t) => (
            <Typography
              key={t}
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".75rem",
                color: colors.slate,
              }}
            >
              {t}
            </Typography>
          ))}
        </Stack>
        <Divider sx={{ borderColor: colors.lightestNavy, mt: "auto", mb: 1 }} />
        <Stack direction="row" spacing={1}>
          <Button
            component={Link}
            to={`/projects/${project.id}`}
            sx={{ color: colors.green, px: 0 }}
          >
            Project log
          </Button>
          {project.repo && (
            <Button
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open source code"
              sx={{ minWidth: 38, color: colors.lightSlate }}
            >
              <GitHubIcon fontSize="small" />
            </Button>
          )}
          {project.link && (
            <Button
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open live demo"
              sx={{ minWidth: 38, color: colors.lightSlate }}
            >
              <OpenInNewIcon fontSize="small" />
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

function BoxlessOutcome({ text }) {
  return (
    <Typography
      sx={{ color: colors.lightSlate, fontSize: ".9rem", lineHeight: 1.7 }}
    >
      <strong style={{ color: colors.white }}>Outcome:</strong> {text}
    </Typography>
  );
}
