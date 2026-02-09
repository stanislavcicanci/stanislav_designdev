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

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative h-[200vh]" id="hero">
      <FloatingShapes count={20} />
      
      <motion.div 
        style={{ y: yBg, rotate, scale }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-lg" />
        
        <motion.div 
          style={{ y: yText }}
          className="container mx-auto px-6 text-center relative z-10 preserve-3d"
        >
          <AnimatedText 
            text="STANISLAV DesignDev" 
           className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 text-gray-900"
          />
          
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
} export default Hero