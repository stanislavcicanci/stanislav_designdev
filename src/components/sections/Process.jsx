import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understanding your vision, goals, and requirements',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 8v8"/>
        <path d="M8 12h8"/>
        <path d="M21 12a9 9 0 0 1-9 9"/>
        <path d="M3 12a9 9 0 0 1 9-9"/>
        <path d="M16 16l4 4"/>
        <path d="M8 8L4 4"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Crafting the perfect technical and creative approach',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 22v-8"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Design',
    description: 'Creating pixel-perfect UI with engaging interactions',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/>
        <path d="M8 6h8"/>
        <path d="M7 18h10"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Development',
    description: 'Building robust, performant digital experiences',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 18L22 12L16 6"/>
        <path d="M8 6L2 12L8 18"/>
        <rect x="9" y="2" width="6" height="20" rx="1" ry="1"/>
        <line x1="12" y1="8" x2="12" y2="10"/>
        <line x1="12" y1="14" x2="12" y2="16"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Refinement',
    description: 'Iterative testing and optimization',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M16 12h-4"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
        <path d="M7 7l2 2"/>
        <path d="M17 7l-2 2"/>
      </svg>
    )
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
              className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#126fd9] to-[#f73f17] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 bg-gradient-to-b from-[#126fd9]/40 to-[#f73f17]/40 h-8 sm:h-10 mt-2 rounded-full" />
                )}
              </div>

              <div className="pt-2 flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 group-hover:text-[#126fd9] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}