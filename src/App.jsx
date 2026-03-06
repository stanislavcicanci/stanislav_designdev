import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from 'lenis'
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

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