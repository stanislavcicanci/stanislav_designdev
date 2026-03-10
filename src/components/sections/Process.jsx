import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understanding your vision, goals, and requirements',
    icon: '🔍'
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Crafting the perfect technical and creative approach',
    icon: '🧠'
  },
  {
    id: 3,
    title: 'Design',
    description: 'Creating pixel-perfect UI with engaging interactions',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Development',
    description: 'Building robust, performant digital experiences',
    icon: '💻'
  },
  {
    id: 5,
    title: 'Refinement',
    description: 'Iterative testing and optimization',
    icon: '✨'
  }
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gradient"
        >
          The Process
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={container}
          className="mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className="flex items-start gap-4 mb-6 sm:mb-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-lg sm:text-xl shadow-md">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px bg-gray-200 h-6 sm:h-8 mt-2" />
                )}
              </div>

              <div className="pt-1 flex-1 min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-sm md:text-base text-gray-600 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </section >
  )
}