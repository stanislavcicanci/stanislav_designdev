import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import GradientButton from '../ui/GradientButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-gradient"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Let's Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-base sm:text-lg text-gray-600 text-center mb-8"
          >
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors text-sm sm:text-base"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors resize-none text-sm sm:text-base"
            />

            <div className="flex items-center gap-4">
              <div className="min-w-[170px]">
                <GradientButton
                  text={isSubmitting ? 'Sending...' : 'Send Message'}
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    className="text-green-500 font-medium text-base"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}