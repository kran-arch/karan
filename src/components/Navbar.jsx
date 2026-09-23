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
import { colors } from "../theme";
import content from "../data/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Selected work", href: "#projects" },
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
    const scroll = () => document
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
          "&:hover": { color: colors.green },
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
        backgroundColor: "rgba(10,25,47,.9)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${colors.lightestNavy}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 66, md: 78 },
          }}
        >
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
              fontSize: "1.4rem",
              fontWeight: 500,
            }}
          >
            {content.shortName}.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}
          >
            {linkButtons()}
          </Stack>
          <Button
            href={content.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              display: { xs: "none", lg: "inline-flex" },
              ml: 2,
              color: colors.green,
              borderColor: colors.green,
              "&:hover": {
                borderColor: colors.green,
                backgroundColor: "rgba(100,255,218,.08)",
              },
            }}
          >
            Resume
          </Button>
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
      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        PaperProps={{
          sx: {
            width: "min(78vw, 320px)",
            backgroundColor: colors.lightNavy,
            display: "grid",
            placeItems: "center",
          },
        }}
      >
        <Box component="nav" aria-label="Mobile navigation">
          <Stack spacing={3} alignItems="center">
            {linkButtons()}
            <Button
              href={content.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{ color: colors.green, borderColor: colors.green }}
            >
              Resume
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
