import { Box } from '@mui/material'
import Navbar from './Navbar'
import Hero from './Hero'
import Now from './Now'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import GitHubHighlights from './GitHubHighlights'
import Footer from './Footer'

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Now />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubHighlights />
      <Contact />
      <Footer />
    </Box>
  )
}