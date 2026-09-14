import { Box, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { colors } from "../theme";
import content from "../data/content";

export default function Footer() {
  const { contact, site } = content;

  const iconSx = {
    color: colors.slate,
    transition: "color 0.2s ease, transform 0.2s ease",
    "&:hover": {
      color: colors.green,
      transform: "translateY(-3px)",
    },
  };

  return (
    <Box component="footer" sx={{ py: 4, textAlign: "center" }}>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        sx={{ mb: 1 }}
      >
        <IconButton
          component="a"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={iconSx}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={iconSx}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>

      <Typography
        sx={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.8rem",
          color: colors.slate,
        }}
      >
         Karan Khokhar @{new Date().getFullYear()}
        
      </Typography>
      <Typography
        sx={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.8rem",
          color: colors.slate,
        }}
      > 
        Built with hands. All rights reserved ©{" "} 
      </Typography>
      <Typography
        sx={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.72rem",
          color: colors.slate,
          mt: 1,
        }}
      >
        Visual inspiration: {" "}
        <Box
          component="a"
          href="https://www.gazijarin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: colors.green }}
        >
          Gazi Jarin
        </Box>
        {" "}· original implementation by Karan Khokhar
      </Typography>
      <Typography
        sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: ".68rem", color: colors.slate, mt: 1.5 }}
      >
        {site.version} · last updated {site.refined}
      </Typography>

    </Box>
  );
}
