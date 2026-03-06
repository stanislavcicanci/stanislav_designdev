import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FloatingShapes from '../ui/FloatingShapes'
import AnimatedText from '../ui/AnimatedText'
import GradientButton from '../ui/GradientButton'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section ref={ref} className="relative h-[150vh]" id="hero">
      <FloatingShapes count={12} />

      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#126fd9]/5 to-[#f73f17]/5 backdrop-blur-3xl" />

        <motion.div
          style={{ y: yText }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <div className="mb-6 inline-block">
            <span className="text-4xl sm:text-6xl md:text-8xl font-black text-gradient">
              STANISLAV
            </span>
            <span className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 ml-4">
              DesignDev
            </span>
          </div>

          <AnimatedText
            text="Digital Experience Architect"
            className="text-xl sm:text-3xl md:text-5xl font-light text-gray-600 mb-12"
          />

          <GradientButton
            text="Explore My Work"
            onClick={() => document.getElementById('projects').scrollIntoView()}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero