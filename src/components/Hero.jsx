import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-wrapper">

        <div className="hero-left">
          <p className="hero-role-text">FRONTEND DEVELOPER</p>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span>Nandhini</span> <br />
            Sakthivel
          </h1>

          <p className="hero-desc">
            Building responsive, user-friendly web applications with React,
            JavaScript & Python. Passionate about creating scalable solutions
            that make a difference.
          </p>

          {/* SOCIAL ICONS */}
<div className="hero-social-buttons">

  <a
    href="https://www.linkedin.com/in/nandhini-sakthi-49b7183a9/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    <Linkedin size={20} />
  </a>

  <a
        href="https://github.com/nandhinitech8667-ops"

    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    <Github size={20} />
  </a>

   <a
    href="mailto:nandhinisakthi417@gmail.com"
    className="social-btn"
  >
    <Mail size={20} />
  </a>

</div>


          {/* BUTTONS */}
          <div className="hero-buttons">
            <button className="primary-btn">View My Work ↓</button>
            <button className="secondary-btn">Get In Touch</button>
          </div>
        </div>

      </div>
    </section>
  );
}
