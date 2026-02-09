import { motion } from 'framer-motion'

export default function GradientButton({ text, onClick, type = 'button', disabled = false }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className={`px-8 py-4 rounded-full text-white font-medium relative overflow-hidden ${
        disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
      }`}
      style={{
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
      }}
    >
      <motion.span
        initial={{ scale: 0 }}
        whileHover={{ scale: 20, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-white/20 rounded-full"
      />
      {text}
    </motion.button>
  )
}