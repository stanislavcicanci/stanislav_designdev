import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const BehanceIcon = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M8.2 5.8h-4.3v12.4h4.7c2.6 0 4.2-1.1 4.2-3.3 0-1.4-1-2.4-2.2-2.8 1-.4 1.8-1.3 1.8-2.6 0-2.1-1.6-3.7-4.2-3.7zm-1.8 4.7v-2.5h1.9c1 0 1.6.5 1.6 1.3 0 .8-.6 1.2-1.7 1.2h-1.8zm0 5.4v-3h2.1c1.3 0 2 .5 2 1.4 0 1-.7 1.6-2 1.6h-2.1zM18.8 8.9h-4v2.1h4v-2.1zm-2 2.6c-2.3 0-3.6 1.7-3.6 4.1s1.3 4.1 3.5 4.1c1.8 0 3-.9 3.3-2.3h-2.1c-.2.4-.6.6-1.2.6-1 0-1.4-.7-1.4-1.7h4.8c0-.2 0-.4 0-.6 0-2.5-1.4-4.2-3.3-4.2zm-1.4 2.8c.2-.9.8-1.2 1.4-1.2.7 0 1.1.4 1.2 1.2h-2.6z" />
  </svg>
)

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/stanislavcicanci'
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    url: 'https://x.com/CicanciS22905'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/cicanci-stanislav-9346a9344/'
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:stanislavacicanci@gmail.com'
  },
  {
    name: 'Behance',
    icon: <BehanceIcon size={20} />,
    url: 'https://www.behance.net/cicancistanisl'
  }
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Stanislav DesignDev
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8 z-40"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm z-100"
          >
            {t('footer.rights').replace('{year}', new Date().getFullYear())}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}