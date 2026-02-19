import { useEffect, useState } from "react";

export default function Navbar() {

  const roles = ["FRONTEND DEVELOPER", "FULLSTACK DEVELOPER"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setInterval(() => {
      if (charIndex < roles[index].length) {
        setText((prev) => prev + roles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [charIndex, index]);

  // 🔥 Scroll function for button
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar-premium">

      {/* LEFT BRAND */}
      <div className="nav-brand">
        <h2>NS</h2>
        <small className="typing-role">{text}</small>
      </div>

      {/* CENTER MENU */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* RIGHT BUTTON */}
      <button className="nav-cta" onClick={scrollToContact}>
        Hire Me
      </button>

    </nav>
  );
}
