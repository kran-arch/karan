import { Box, Container, Typography, Divider, Stack } from "@mui/material";
import { colors } from "../theme";
import FadeIn from "./FadeIn";

export default function Section({ id, title, eyebrow, children, animation = {} }) {
  return (
    <Box id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <FadeIn {...animation}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 5 }}>
            <Box>
              {eyebrow && (
                <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', fontSize: ".7rem", mb: 0.5 }}>
                  {eyebrow}
                </Typography>
              )}
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, color: colors.white, whiteSpace: "nowrap" }}
              >
                {title}
              </Typography>
            </Box>
            <Divider sx={{ flexGrow: 1, borderColor: colors.lightestNavy }} />
          </Stack>
          {children}
        </FadeIn>
      </Container>
    </Box>
  );
}
