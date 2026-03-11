import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ExternalLink } from "lucide-react";

import project1Img from "../images/project1.jpg";
import project2Img from "../images/project2.jpg";
import project3Img from "../images/project3.jpg";
import emberCoffeeImg from "../images/project4.jpg";
import donerImg from "../images/project5.jpg";
import flowersImg from "../images/project6.jpg";

const projects = [
  {
    id: 1,
    title: "Purely Ecological",
    category: "Web Design & Development",
    description: "Eco-friendly e-commerce with sleek animations, smooth UX, and high-performance design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project1Img,
    url: "https://pur.md/",
  },
  {
    id: 2,
    title: "Delicy",
    category: "Web Design & Development",
    description: "Modern online food ordering app with fast, responsive, and smooth user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project2Img,
    url: "https://delicy.vercel.app/Acasa.html",
  },
  {
    id: 3,
    title: "Cătălin Țurcanu",
    category: "Portfolio Website",
    description: "Sleek designer portfolio with smooth animations and dynamic, responsive navigation.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: project3Img,
    url: "https://project-portfolio-neon.vercel.app/",
  },
  {
    id: 4,
    title: "Ember Coffee",
    category: "Coffee Shop Platform",
    description: "Multi-location coffee shop website with interactive map and modern UI for 6 locations in Chișinău.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "MapLibre GL"],
    image: emberCoffeeImg,
    url: "https://coffee-shop-pi-six.vercel.app/",
  },
  {
    id: 5,
    title: "Doner Kebab & Shawarma",
    category: "Food Delivery Website",
    description: "Modern food ordering platform for authentic doner and kebab with dynamic menu filtering.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: donerImg,
    url: "https://doner-sepia.vercel.app/",
  },
  {
    id: 6,
    title: "FloWers 24/7",
    category: "Flower Delivery Service",
    description: "Premium 24/7 flower delivery service with elegant design and interactive catalog.",
    tags: ["Tailwind CSS", "JavaScript", "Google Maps API"],
    image: flowersImg,
    url: "https://street-flowers.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={controls}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Featured Work
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate={controls}
            className="text-lg text-gray-600"
          >
            A curated selection of digital experiences built with precision, performance, and modern aesthetics.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 p-4 rounded-full bg-white text-gray-900 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 active:scale-95"
                  aria-label={`Visit ${project.title} website`}
                >
                  <ExternalLink size={24} />
                </a>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#126fd9]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#126fd9] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-[#126fd9] transition-all duration-300 transform hover:translate-x-1"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
