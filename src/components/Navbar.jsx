import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  { label: "Selected work", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const close = () => setOpen(false);
  const scrollToSection = (href) => {
    const scroll = () => document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (document.querySelector(href)) {
      scroll();
    } else {
      navigate("/");
      window.setTimeout(scroll, 0);
    }
    close();
  };
  const linkButtons = () =>
    links.map((link, index) => (
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
        <span className="section-number">
          {String(index + 1).padStart(2, "0")}.
        </span>
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
          <Button
            href={`mailto:${content.contact.email}`}
            sx={{
              display: { xs: "none", lg: "inline-flex" },
              ml: 1.5,
              color: colors.lightSlate,
            }}
          >
            Say hello
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
            <Button
              href={`mailto:${content.contact.email}`}
              sx={{ color: colors.lightSlate }}
            >
              Say hello
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
