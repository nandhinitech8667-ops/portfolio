import React from "react";
import TypingRoles from "./TypingRoles";

const Navigation = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="navbar-premium navbar-shadow">

      {/* BRAND */}
      <div className="nav-brand">
        <div className="brand-text">
          <TypingRoles />
        </div>
        <h2 className="brand-logo">NS</h2>
      </div>

      {/* MENU */}
      <ul className="nav-links">
        <li>
          <button onClick={() => scrollToSection("hero")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>

      {/* BUTTON */}
      <button
        className="nav-cta"
        onClick={() => scrollToSection("contact")}
      >
        Hire Me
      </button>

    </nav>
  );
};

export default Navigation;
