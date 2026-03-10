import { motion } from 'framer-motion'
import { useRef } from 'react'

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}

export default function AnimatedText({ text, className = "" }) {
  const words = text.split(' ')

  return (
    <div className={`flex flex-wrap items-center justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}