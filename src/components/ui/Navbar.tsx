import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      const windowHeight = window.innerHeight
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight
      const progress = (scrollY / documentHeight) * 100
      setScrollProgress(Math.min(progress, 100))

      const sections = ['hero', 'about', 'projects', 'process', 'contact']
      const scrollPosition = scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (!el) continue

        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  const menuItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' }
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: '0%' }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center cursor-pointer font-mono text-3xl
                ${isOpen
                  ? 'relative z-50 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-lg shadow-lg'
                  : ''
                }`}
            >
              <span className="text-gray-700 text-2xl">{'{'}</span>
              <span
                className="mx-1 text-4xl font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #126FD9 0%, #F73F17 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                S
              </span>
              <span className="text-gray-700 text-2xl">{'}'}</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-3 py-2 text-base font-medium"
                >
                  <span
                    className={`transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </span>

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100/60"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.85 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.12, ease: 'easeOut' }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.12, ease: 'easeOut' }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white/98 backdrop-blur-xl z-30 md:hidden shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col pt-32 px-8 space-y-8">
              {menuItems.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-left text-3xl font-medium ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-900'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
