import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '../ui/AnimatedText'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      title: 'Design Philosophy',
      description:
        'Minimalism meets functionality with focus on micro-interactions',
      icon: '🎨'
    },
    {
      title: 'Tech Stack',
      description: 'React, Framer Motion, Tailwind, and modern tooling',
      icon: '💻'
    },
    {
      title: 'Approach',
      description: 'User-centered design with performance as priority',
      icon: '🔍'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={containerVariants}
          className="mx-auto"
        >
          <AnimatedText
            text="Crafting Digital Excellence"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 sm:mb-14 md:mb-16 text-gradient"
          />

          <motion.p
            variants={cardVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-10"
          >
            Every project begins with a vision. I transform that vision into
            reality through meticulous attention to detail, innovative design
            thinking, and cutting-edge development practices.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.995 }}
                className="bg-white/80 backdrop-blur-sm p-5 sm:p-7 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col group focus-within:ring-2 focus-within:ring-indigo-300"
                tabIndex={0}
                aria-labelledby={`skill-title-${index}`}
                role="article"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-none w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-50/80 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl"
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      id={`skill-title-${index}`}
                      className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 truncate"
                    >
                      {skill.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <span className="text-xs text-gray-400">Key area</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}