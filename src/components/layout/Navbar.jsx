import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../../theme";
import content from "../../data/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const close = () => setOpen(false);

  useEffect(() => {
    const target = location.state?.scrollTarget;
    if (location.pathname !== "/" || !target) return;
    requestAnimationFrame(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      navigate("/", { replace: true, state: null });
    });
  }, [location.pathname, location.state, navigate]);

  const scrollToSection = (href) => {
    const scroll = () =>
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (document.querySelector(href)) {
      scroll();
    } else {
      navigate("/", { state: { scrollTarget: href } });
    }
    close();
  };

  const linkButtons = () =>
    links.map((link) => (
      <Button
        key={link.href || link.to}
        {...(link.to ? { component: Link, to: link.to } : {})}
        onClick={link.to ? close : () => scrollToSection(link.href)}
        sx={{
          color: colors.lightestSlate,
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.82rem",
          textTransform: "none",
          px: 1.4,
          position: "relative",
          transition: "color 0.2s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 4,
            left: "50%",
            width: "0%",
            height: "2px",
            backgroundColor: colors.green,
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: "translateX(-50%)",
          },
          "&:hover": { color: colors.green, backgroundColor: "transparent" },
          "&:hover::after": {
            width: "60%",
          },
        }}
      >
        {link.label}
      </Button>
    ));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(10, 25, 47, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.lightestNavy}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 66, md: 76 },
          }}
        >
          {/* Logo */}
          <Typography
            component="button"
            onClick={() => scrollToSection("#hero")}
            aria-label={`${content.name} home`}
            sx={{
              border: 0,
              background: "transparent",
              cursor: "pointer",
              fontFamily: '"IBM Plex Mono", monospace',
              color: colors.green,
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              "&:hover": {
                color: colors.white,
              },
            }}
          >
            <span style={{ color: colors.white }}>{content.shortName}</span>.
          </Typography>

          {/* Desktop Links (No slash in top bar) */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}
          >
            {linkButtons()}

            <Button
              href={content.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                ml: 2,
                color: colors.green,
                borderColor: colors.green,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.82rem",
                px: 2,
                py: 0.6,
                "&:hover": {
                  borderColor: colors.green,
                  backgroundColor: "rgba(100, 255, 218, 0.08)",
                },
              }}
            >
              Resume
            </Button>
          </Stack>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: colors.green,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        PaperProps={{
          sx: {
            width: "min(78vw, 300px)",
            backgroundColor: colors.lightNavy,
            borderLeft: `1px solid ${colors.lightestNavy}`,
            display: "grid",
            placeItems: "center",
          },
        }}
      >
        <Box component="nav" aria-label="Mobile navigation">
          <Stack spacing={2.5} alignItems="center">
            {linkButtons()}

            <Button
              href={content.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: colors.green,
                borderColor: colors.green,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.85rem",
                px: 3,
              }}
            >
              Resume
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
