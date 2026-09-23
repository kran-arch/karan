import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import SocialRail from './components/SocialRail'
const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const Lab = lazy(() => import('./components/Lab'))
const NotFound = lazy(() => import('./components/NotFound'))

function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (state?.scrollTarget) return
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <SocialRail />
    </>
  )
}
