import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

function Cursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const baseSize = 16
  const hoverSize = 36
  const activeSize = 24

  const targetSize = useMotionValue(baseSize)

  // Size = slower & heavier → smooth scaling
  const size = useSpring(targetSize, {
    stiffness: 180,
    damping: 30,
    mass: 0.8
  })

  // Position = very soft follow
  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.4
  })

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.4
  })

  const opacity = useTransform(size, [baseSize, hoverSize], [0.6, 0.9])
  const trailScale = useTransform(size, s => s * 1.6 / baseSize)

  useEffect(() => {
    const move = e => {
      mouseX.set(e.clientX - size.get() / 2)
      mouseY.set(e.clientY - size.get() / 2)
    }

    const elements = document.querySelectorAll(
      'a, button, [data-cursor-hover]'
    )

    elements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        setIsHovering(true)
        targetSize.set(
          el.dataset.cursorSize
            ? parseInt(el.dataset.cursorSize)
            : hoverSize
        )
      })

      el.addEventListener('mouseleave', () => {
        setIsHovering(false)
        targetSize.set(baseSize)
      })

      el.addEventListener('mousedown', () => {
        setIsActive(true)
        targetSize.set(activeSize)
      })

      el.addEventListener('mouseup', () => {
        setIsActive(false)
        targetSize.set(hoverSize)
      })
    })

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none rounded-full z-50"
        style={{
          translateX: x,
          translateY: y,
          width: size,
          height: size,
          opacity,
          scale: isActive ? 0.9 : 1,
          backgroundColor: '#ef4444',
          boxShadow: `
            0 0 12px rgba(239,68,68,0.6),
            0 0 32px rgba(239,68,68,0.35)
          `
        }}
      />

      {/* Glow Trail */}
      <motion.div
        className="fixed pointer-events-none rounded-full z-40"
        style={{
          translateX: x,
          translateY: y,
          width: size,
          height: size,
          scale: trailScale,
          opacity: 0.25,
          backgroundColor: '#f87171',
          filter: 'blur(6px)'
        }}
      />
    </>
  )
}

export default Cursor