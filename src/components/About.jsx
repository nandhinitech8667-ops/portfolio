import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function About() {

  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <p className="about-tag">ABOUT ME</p>

          <h2 className="about-title">
            Passionate about <br />
            <span>web development</span>
          </h2>

          <p className="about-text">
            I'm a motivated Frontend and Full-Stack Developer with hands-on
            experience in building responsive and user-friendly web applications.
            Skilled in React, JavaScript, Python, and MySQL, I'm passionate about
            creating scalable solutions and continuously enhancing my technical expertise.
          </p>

          {/* EDUCATION */}
          <div className="edu-section">
            <h3>🎓 Education</h3>

            <motion.div
              className="edu-line"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4 variants={itemVariant}>
                B.E. – Computer Science Engineering
              </motion.h4>

              <motion.p variants={itemVariant}>
                Vivekanandha College of Engineering for Women
              </motion.p>

              <motion.span variants={itemVariant}>
                2021 – 2025
              </motion.span>
            </motion.div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="cert-section">
            <h3>🏅 Certifications</h3>

            <motion.ul
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Python Certification – HackerRank & SkillUp",
                "Web Development Training – TechnoHack",
                "Machine Learning Workshop – NoviTech"
              ].map((item, i) => (
                <motion.li key={i} variants={itemVariant}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <p className="about-tag">TECHNICAL SKILLS</p>
          <h3 className="skills-heading">What I work with</h3>

          <div className="skill-group">
            <p>LANGUAGES</p>
            <div className="skill-row">
              <span>Java</span>
              <span>Python</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-group">
            <p>FRONTEND</p>
            <div className="skill-row">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="skill-group">
            <p>DATABASE & TOOLS</p>
            <div className="skill-row">
              <span>MySQL</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>

          <div className="skill-group">
            <p>DATA SCIENCE</p>
            <div className="skill-row">
              <span>Data Analysis</span>
              <span>Data Visualization</span>
              <span>Pandas</span>
              <span>NumPy</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
