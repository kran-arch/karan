import { useState } from "react";
import { Box, Container, Typography, Button, Stack, Tooltip } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { colors } from "../../theme";
import content from "../../data/content";
import FadeIn from "../ui/FadeIn";

export default function Contact() {
  const { contact } = content;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const buttonSx = {
    color: colors.green,
    borderColor: colors.lightestNavy,
    backgroundColor: "rgba(100, 255, 218, 0.03)",
    px: 3,
    py: 1.2,
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: "0.85rem",
    textTransform: "none",
    transition: "all 0.25s ease",
    "&:hover": {
      backgroundColor: "rgba(100,255,218,0.12)",
      borderColor: colors.green,
      transform: "translateY(-2px)",
    },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 }, textAlign: "center" }}>
      <Container maxWidth="sm">
        <FadeIn direction="scale" duration={0.6}>
          <Typography
            sx={{
              fontFamily: '"IBM Plex Mono", monospace',
              color: colors.green,
              fontSize: "0.82rem",
              mb: 1,
            }}
          >
            // what&apos;s next?
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: colors.white,
              mb: 2,
              fontWeight: 800,
            }}
          >
            <Box component="span" aria-hidden="true" sx={{ color: colors.green, fontWeight: 800, mr: 1.25 }}>/</Box>
            Get In Touch
          </Typography>
          <Typography sx={{ color: colors.slate, mb: 3.5, lineHeight: 1.75, fontSize: "1rem" }}>
            {contact.message}
          </Typography>

          {/* Quick email display with one-click copy feedback */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 4,
              px: 2,
              py: 0.8,
              borderRadius: 2,
              backgroundColor: colors.lightNavy,
              border: `1px solid ${colors.lightestNavy}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.85rem",
                color: colors.lightestSlate,
              }}
            >
              {contact.email}
            </Typography>
            <Tooltip title={copied ? "Copied!" : "Copy email address"} arrow>
              <Button
                size="small"
                onClick={handleCopyEmail}
                startIcon={copied ? <CheckRoundedIcon sx={{ fontSize: 16 }} /> : <ContentCopyRoundedIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: copied ? "#27c93f" : colors.green,
                  borderColor: copied ? "#27c93f" : "rgba(100, 255, 218, 0.3)",
                  fontSize: "0.75rem",
                  py: 0.2,
                  px: 1.2,
                  fontFamily: '"IBM Plex Mono", monospace',
                  textTransform: "none",
                  border: `1px solid ${copied ? "#27c93f" : "rgba(100, 255, 218, 0.3)"}`,
                  backgroundColor: copied ? "rgba(39, 201, 63, 0.1)" : "transparent",
                  "&:hover": {
                    borderColor: colors.green,
                    backgroundColor: "rgba(100, 255, 218, 0.08)",
                  },
                }}
              >
                {copied ? "copied" : "copy"}
              </Button>
            </Tooltip>
          </Box>

          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Button
              href={`mailto:${contact.email}`}
              variant="outlined"
              startIcon={<EmailRoundedIcon />}
              sx={{
                ...buttonSx,
                borderColor: colors.green,
                backgroundColor: "rgba(100, 255, 218, 0.08)",
              }}
            >
              Say Hello
            </Button>
            <Button
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<DescriptionRoundedIcon />}
              sx={buttonSx}
            >
              Resume
            </Button>
            <Button
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={buttonSx}
            >
              GitHub
            </Button>
            <Button
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<LinkedInIcon />}
              sx={buttonSx}
            >
              LinkedIn
            </Button>
          </Stack>
        </FadeIn>
      </Container>
    </Box>
  );
}
