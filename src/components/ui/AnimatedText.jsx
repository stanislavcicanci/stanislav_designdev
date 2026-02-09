import { motion } from 'framer-motion'
import { useRef } from 'react'

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: 'spring',
      stiffness: 100
    }
  })
}

export default function AnimatedText({ text, className }) {
  const words = text.split(' ')

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}