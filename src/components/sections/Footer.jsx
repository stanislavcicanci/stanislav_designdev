import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com'
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    url: 'https://twitter.com'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://linkedin.com'
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:contact@example.com'
  }
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl" />
      </motion.div>

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
            © {new Date().getFullYear()} Stanislav DesignDev. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}