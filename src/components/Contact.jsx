import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { colors } from "../theme";
import content from "../data/content";
import FadeIn from "./FadeIn";

export default function Contact() {
  const { contact } = content;
  const buttonSx = {
    color: colors.green,
    borderColor: colors.green,
    px: 4,
    py: 1.5,
    "&:hover": {
      backgroundColor: "rgba(100,255,218,0.1)",
      borderColor: colors.green,
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
              mb: 1,
            }}
          >
            What&apos;s Next?
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: colors.white,
              mb: 2,
            }}
          >
            <Box component="span" aria-hidden="true" sx={{ color: colors.green, fontWeight: 800, mr: 1.25 }}>/</Box>
            Get In Touch
          </Typography>
          <Typography sx={{ color: colors.slate, mb: 5 }}>
            {contact.message}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Button
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={buttonSx}
            >
              Resume
            </Button>
            <Button
              href={`mailto:${contact.email}`}
              variant="outlined"
              sx={buttonSx}
            >
              Say Hello
            </Button>
            <Button
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={buttonSx}
            >
              GitHub
            </Button>
            <Button
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
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
