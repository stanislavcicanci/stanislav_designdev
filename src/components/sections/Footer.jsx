import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

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
  }
]

export default function Footer() {
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
            © {new Date().getFullYear()} Stanislav DesignDev. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}