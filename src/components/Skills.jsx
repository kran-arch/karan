import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { colors } from "../theme";
import Section from "./Section";
import skills from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="/Skills"
      animation={{ direction: "scale", duration: 0.5 }}
    >
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: colors.lightNavy,
                border: `1px solid ${colors.lightestNavy}`,
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: colors.green,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: ".7rem",
                    mb: 0.8,
                  }}
                >
                  {skill.category}
                </Typography>
                <Typography variant="h6" sx={{ color: colors.white, mb: 1 }}>
                  {skill.name}
                </Typography>
                <Typography sx={{ color: colors.slate, lineHeight: 1.7 }}>
                  {skill.context}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
