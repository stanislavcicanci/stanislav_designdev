import { motion } from 'framer-motion'

const shapes = ['circle', 'triangle', 'square', 'shape-blob']

export default function FloatingShapes({ count = 15 }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 100 + 50
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 5
        const x = Math.random() * 100
        const y = Math.random() * 100
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [x, x + (Math.random() - 0.5) * 100],
              y: [y, y + (Math.random() - 0.5) * 100],
              rotate: [0, 360]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear'
            }}
            className={`absolute ${shapes[Math.floor(Math.random() * shapes.length)]}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              background: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, 0.1)`,
              filter: 'blur(20px)'
            }}
          />
        )
      })}
    </div>
  )
}