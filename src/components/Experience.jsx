import React from "react";
import "./experience.css";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">

      {/* Animated Top Text */}
      <motion.p
        className="exp-top"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        EXPERIENCE
      </motion.p>

      {/* Animated Title */}
      <motion.h1
        className="exp-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional <br />
        <span>Journey</span>
      </motion.h1>

      {/* Animated Card */}
      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="icon-box">
          <Briefcase size={28} />
        </div>

        <div className="exp-content">
          <h2>Data Analytics Intern</h2>
          <h3>Gateway Software Solutions</h3>

          <div className="exp-date">
            <Calendar size={16} />
            <span>June 2024 – July 2024</span>
          </div>

          <ul>
            <li>Analyzed real-world datasets and generated reports.</li>
            <li>Created dashboards and data visualizations.</li>
            <li>Worked on data cleaning and reporting automation.</li>
          </ul>

          <div className="exp-skills">
            <span>Data Analysis</span>
            <span>Power BI</span>
            <span>Python</span>
            <span>SQL</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
