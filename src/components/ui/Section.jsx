import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Divider, Stack } from "@mui/material";
import { colors } from "../../theme";
import FadeIn from "./FadeIn";

export default function Section({ id, title, eyebrow, children, animation = {} }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    // Recursive observer for section header & divider line
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header with crisp recursive expanding divider animation (no blur) */}
        <Stack
          ref={headerRef}
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            mb: 5,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Box>
            {eyebrow && (
              <Typography
                sx={{
                  color: colors.green,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: ".7rem",
                  mb: 0.5,
                  letterSpacing: "0.5px",
                }}
              >
                {eyebrow}
              </Typography>
            )}
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "1.6rem", md: "2rem" },
                color: colors.white,
                whiteSpace: "nowrap",
                fontWeight: 700,
              }}
            >
              <Box component="span" aria-hidden="true" sx={{ color: colors.green, fontWeight: 800, mr: 1.25 }}>
                /
              </Box>
              {title}
            </Typography>
          </Box>

          <Divider
            sx={{
              flexGrow: 1,
              borderColor: colors.lightestNavy,
              transformOrigin: "left",
              transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.08s",
            }}
          />
        </Stack>

        {/* Section Body Content */}
        <FadeIn {...animation}>{children}</FadeIn>
      </Container>
    </Box>
  );
}
