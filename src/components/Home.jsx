import { Box } from '@mui/material'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import LabPreview from './LabPreview'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <Box>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <Box component="main" id="main-content">
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
  )
}
