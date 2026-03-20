import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en', label: 'ENG' },
    { code: 'ro', label: 'RO' },
    { code: 'ru', label: 'RU' }
  ]

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

    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
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
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.process'), id: 'process' },
    { name: t('nav.contact'), id: 'contact' }
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || isOpen
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
                    className={`transition-colors ${activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </span>

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-underline"
                      transition={{
                        type: 'tween',
                        ease: [0.16, 1, 0.3, 1],
                        duration: 0.6
                      }}
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                </motion.button>
              ))}

              {/* Language Switcher Desktop */}
              <div className="relative ml-4" ref={langRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-bold text-gray-700"
                >
                  <Globe size={16} className="text-blue-600" />
                  <span>{language.toUpperCase()}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 backdrop-blur-xl z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code)
                            setIsLangOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 flex items-center justify-between ${language === lang.code ? 'text-blue-600' : 'text-gray-700'
                            }`}
                        >
                          {lang.label}
                          {language === lang.code && (
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
                  className={`text-left text-3xl font-medium ${activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-900'
                    }`}
                >
                  {item.name}
                </motion.button>
              ))}

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Globe size={16} /> Language
                </p>
                <div className="flex gap-4">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`px-4 py-2 rounded-xl text-lg font-bold transition-all ${language === lang.code
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'bg-gray-100 text-gray-600'
                        }`}
                    >
                      {lang.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
