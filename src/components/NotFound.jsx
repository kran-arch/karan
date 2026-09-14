import { Box, Button, Container, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { colors } from "../theme";

export default function NotFound() {
  return (
    <Box component="main" sx={{ minHeight: "100vh", display: "grid", placeItems: "center", px: 3 }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', mb: 2 }}>404 · SIGNAL LOST</Typography>
        <Typography component="h1" sx={{ color: colors.white, fontSize: { xs: "2.8rem", md: "4.5rem" }, letterSpacing: "-.05em", mb: 2 }}>Lost in the graph.</Typography>
        <Typography sx={{ color: colors.slate, lineHeight: 1.8, mb: 4 }}>This route does not exist yet. Head home and explore something that does.</Typography>
        <Button component={Link} to="/" startIcon={<HomeIcon />} variant="outlined" sx={{ color: colors.green, borderColor: colors.green }}>Return home</Button>
      </Container>
    </Box>
  );
}
