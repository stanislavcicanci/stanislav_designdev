import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

import AnimatedText from '../ui/AnimatedText'
import GradientButton from '../ui/GradientButton'

function Hero() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section ref={ref} className="relative h-[150vh]" id="hero">


      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#126fd9]/5 via-white to-white backdrop-blur-3xl" />

        <motion.div
          style={{ y: yText }}
          className="container mx-auto px-6 flex flex-col items-center text-center relative z-10"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
              {t('hero.available')}
            </span>
          </motion.div>


          <div className="flex flex-col items-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl sm:text-8xl md:text-9xl font-black text-gradient leading-none"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mt-2 tracking-tight"
            >
              {t('hero.subtitle')}
            </motion.span>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <AnimatedText
              text={t('hero.description')}
              className="text-xl sm:text-2xl md:text-3xl font-light text-gray-500"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <GradientButton
              text={t('hero.button')}
              onClick={() => document.getElementById('projects').scrollIntoView()}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero