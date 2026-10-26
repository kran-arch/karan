import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import LabPreview from "../components/sections/LabPreview";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import SpotlightBackground from "../components/ui/SpotlightBackground";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <SpotlightBackground />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <Box component="main" id="main-content" sx={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <LabPreview />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
