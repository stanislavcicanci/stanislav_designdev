import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Importă imaginile corect (înlocuiește calea cu cea reală din proiectul tău)
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
    description:
      "Eco-friendly e-commerce with sleek animations, smooth UX, and high-performance design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project1Img,
  },
  {
    id: 2,
    title: "Delicy",
    category: "Web Design & Development",
    description:
      "Modern online food ordering app with fast, responsive, and smooth user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project2Img,
  },
  {
    id: 3,
    title: "Cătălin Țurcanu",
    category: "Portfolio Website",
    description:
      "Sleek designer portfolio with smooth animations and dynamic, responsive navigation.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: project3Img,
  },
  {
    id: 4,
    title: "Ember Coffee",
    category: "Coffee Shop Platform",
    description:
      "Multi-location coffee shop website with interactive map and modern UI for 6 locations in Chișinău.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "MapLibre GL", "SEO"],
    image: emberCoffeeImg,
  },
  {
    id: 5,
    title: "Doner Kebab & Shawarma",
    category: "Food Delivery Website",
    description:
      "Modern food ordering platform for authentic doner and kebab with dynamic menu filtering.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: donerImg,
  },
  {
    id: 6,
    title: "FloWers 24/7",
    category: "Flower Delivery Service",
    description:
      "Premium 24/7 flower delivery service with elegant design and interactive catalog.",
    tags: ["Tailwind CSS", "JavaScript", "Google Maps API", "Mobile Design"],
    image: flowersImg,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section id="projects" className="min-h-screen py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Titlu animat */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-20 text-center text-gradient"
        >
          Featured Work
        </motion.h2>

        {/* Grid proiecte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}