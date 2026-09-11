import { createTheme } from "@mui/material/styles";

// Centralized design tokens — every component pulls colors from here,
// so the whole site's palette can be changed in one place.
export const colors = {
  navy: "#0a192f",
  lightNavy: "#112240",
  lightestNavy: "#233554",
  slate: "#8892b0",
  lightSlate: "#a8b2d1",
  lightestSlate: "#ccd6f6",
  white: "#e6f1ff",
  green: "#64ffda",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.navy,
      paper: colors.lightNavy,
    },
    primary: {
      main: colors.green,
      contrastText: colors.navy,
    },
    text: {
      primary: colors.lightestSlate,
      secondary: colors.slate,
    },
  },
  typography: {
    fontFamily: '"Sora", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontFamily: '"IBM Plex Mono", monospace',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.8rem",
        },
      },
    },
  },
});

export default theme;
