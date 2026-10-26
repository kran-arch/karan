import { Typography, Grid, Card, CardContent } from "@mui/material";
import { colors } from "../../theme";
import Section from "../ui/Section";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Grid container spacing={2.5}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: colors.lightNavy,
                border: `1px solid ${colors.lightestNavy}`,
                borderRadius: 2,
                transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(100, 255, 218, 0.4)",
                  boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                },
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    color: colors.green,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: ".72rem",
                    mb: 0.8,
                    letterSpacing: "0.5px",
                  }}
                >
                  // {skill.category.toLowerCase()}
                </Typography>
                <Typography variant="h6" sx={{ color: colors.white, mb: 1, fontWeight: 700 }}>
                  {skill.name}
                </Typography>
                <Typography sx={{ color: colors.slate, lineHeight: 1.65, fontSize: ".9rem" }}>
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
