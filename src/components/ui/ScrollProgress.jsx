import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#3b82f6', '#8b5cf6']
  )

  return (
    <motion.div
      style={{ width, backgroundColor }}
      className="fixed top-0 left-0 h-1 z-50"
    />
  )
}