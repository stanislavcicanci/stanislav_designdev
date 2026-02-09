import { motion } from 'framer-motion'

export default function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -20,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="group relative overflow-hidden rounded-3xl shadow-2xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
      />
      
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      
      <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
        {/* Project image would go here */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-lg">Project Image</span>
        </div>
      </div>
      
      <div className="p-8">
        <motion.h3
          className="text-2xl font-semibold text-gray-900 mb-2"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-gray-500 mb-3">{project.category}</p>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-700 border border-gray-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}