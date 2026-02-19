import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";


const projects = [
  {
    category: "Frontend Development",
    title: "Restaurant Management Web App",
    description:
      "A modern, responsive restaurant application with dynamic menu display, cart functionality, and order summary features.",
    tech: ["React.js", "JavaScript", "CSS"],
    image: "/project1.png",
  // ✅ Correct way
  },
  {
    category: "Full-Stack Development",
    title: "Women Entrepreneurs Approval Platform",
    description:
      "A centralized digital platform automating approval processes with OCR-based verification and real-time tracking.",
    tech: ["Python", "MySQL", "AI/ML", "OCR"],
    image: "/project2.png", // make sure this exists in public folder
  },
  {
    category: "Machine Learning",
    title: "Textile Sales Forecasting System",
    description:
      "ML-powered system predicting textile sales trends to optimize inventory and reduce wastage.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    image: "/project3.png",
  },
];




export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* HEADER */}
      <div className="projects-header">

        <div className="projects-header-left">
          <p className="projects-small-text">MY PROJECTS</p>
          <h2 className="projects-title">
            Featured <br /> Work
          </h2>
        </div>

        <div className="projects-header-right">
          <p>
            A showcase of projects demonstrating my skills in frontend development,
            full-stack solutions, and machine learning.
          </p>
        </div>

      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a className="github-link">
                View on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
