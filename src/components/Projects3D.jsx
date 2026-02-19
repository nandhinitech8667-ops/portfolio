import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  { id: 1, name: "Portfolio" },
  { id: 2, name: "Ecommerce" }
];

const Projects3D = () => {
  return (
    <section>
      {projects.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </section>
  );
};

export default Projects3D;
