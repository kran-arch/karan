import { useState } from "react";
import { Box, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colors } from "../theme";
import Section from "./Section";
import experience from "../data/experience";

export default function Experience() {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const vertical = useMediaQuery(theme.breakpoints.up("sm"));
  const selected = experience[active];

  return (
    <Section
      id="experience"
      title="Experience"
      animation={{ duration: 0.7, distance: 14 }}
    >
      <Box sx={{ display: { sm: "flex" }, minHeight: 190 }}>
        <Tabs
          orientation={vertical ? "vertical" : "horizontal"}
          variant="scrollable"
          scrollButtons={false}
          value={active}
          onChange={(_, value) => setActive(value)}
          aria-label="Experience entries"
          sx={{
            flex: "0 0 auto",
            minWidth: { sm: 190 },
            borderRight: { sm: `1px solid ${colors.lightestNavy}` },
            borderBottom: { xs: `1px solid ${colors.lightestNavy}`, sm: 0 },
            "& .MuiTabs-indicator": {
              backgroundColor: colors.green,
              width: { sm: "2px" },
              height: { xs: "2px", sm: "auto" },
              left: { sm: 0 },
            },
          }}
        >
          {experience.map((item, index) => (
            <Tab
              key={item.tab}
              id={`experience-tab-${index}`}
              aria-controls={`experience-panel-${index}`}
              label={item.tab}
              sx={{
                alignItems: { sm: "flex-start" },
                minHeight: 48,
                px: 2,
                color: colors.slate,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: ".82rem",
                textTransform: "none",
                "&.Mui-selected": { color: colors.green },
              }}
            />
          ))}
        </Tabs>

        <Box
          role="tabpanel"
          id={`experience-panel-${active}`}
          aria-labelledby={`experience-tab-${active}`}
          key={active}
          sx={{ flex: 1, pt: { xs: 3, sm: 0 }, px: { sm: 4 }, animation: "experience-enter 220ms ease both" }}
        >
          <Typography component="h3" sx={{ color: colors.white, fontSize: "1.15rem", fontWeight: 700 }}>
            {selected.role}{" "}
            <Box component="span" sx={{ color: colors.green }}>@ {selected.org}</Box>
          </Typography>
          <Typography sx={{ color: colors.slate, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".78rem", mt: 0.8, mb: 2 }}>
            {selected.date}
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, my: 0, color: colors.slate, "& li": { mb: 1, pl: 0.5, lineHeight: 1.75 }, "& li::marker": { color: colors.green } }}>
            {selected.points.map((point) => <li key={point}>{point}</li>)}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
