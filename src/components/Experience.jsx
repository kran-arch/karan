import { Box, Typography, Stack } from "@mui/material";
import { colors } from "../theme";
import Section from "./Section";
import experience from "../data/experience";

export default function Experience() {
  return (
    // slightly slower + slides in further than About - independent of it
    <Section
      id="experience"
      title="/Journey"
      animation={{ direction: "right", duration: 0.7, distance: 32 }}
    >
      <Stack spacing={4}>
        {experience.map((job) => (
          <Box
            key={job.role}
            sx={{
              borderLeft: `2px solid ${colors.lightestNavy}`,
              pl: 3,
            }}
          >
            <Typography sx={{ color: colors.white, fontWeight: 700 }}>
              {job.role}{" "}
              <span style={{ color: colors.green }}>@ {job.org}</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                color: colors.slate,
                fontSize: "0.85rem",
                mb: 1,
              }}
            >
              {job.date}
            </Typography>
            <Stack component="ul" sx={{ pl: 2, m: 0, color: colors.slate }}>
              {job.points.map((point) => (
                <Typography component="li" key={point} sx={{ mb: 0.5 }}>
                  {point}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Section>
  );
}
