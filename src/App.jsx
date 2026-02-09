import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Cursor from './components/ui/Cursor'
import ScrollProgress from './components/ui/ScrollProgress'

export default function App() {
  const { scrollYProgress } = useScroll()
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['#f8fafc', '#f1f5f9', '#e2e8f0', '#f1f5f9', '#f8fafc']
  )

  return (
    <MotionConfig transition={{ type: 'spring', damping: 10 }}>
      <motion.div style={{ backgroundColor }} className="min-h-screen">
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Process />
        <Contact />
        <Footer />
      </motion.div>
    </MotionConfig>
  )
}