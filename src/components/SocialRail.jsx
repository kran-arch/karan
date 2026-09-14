import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { colors } from "../theme";
import content from "../data/content";

export default function SocialRail() {
  const links = [
    { label: "GitHub", href: content.contact.github, icon: <GitHubIcon fontSize="small" /> },
    { label: "LinkedIn", href: content.contact.linkedin, icon: <LinkedInIcon fontSize="small" /> },
    { label: "Email Karan", href: `mailto:${content.contact.email}`, icon: <EmailIcon fontSize="small" /> },
  ];

  return (
    <Box component="aside" aria-label="Social links" sx={{ position: "fixed", left: 28, bottom: 0, zIndex: 10, display: { xs: "none", xl: "block" } }}>
      <Stack alignItems="center" spacing={1}>
        {links.map((link) => (
          <Tooltip title={link.label} placement="right" key={link.label}>
            <IconButton component="a" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={link.label} sx={{ color: colors.slate, "&:hover": { color: colors.green, transform: "translateY(-3px)" } }}>
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
        <Box sx={{ width: "1px", height: 86, background: colors.lightestNavy, mt: 1 }} />
      </Stack>
    </Box>
  );
}
