import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";


function App() {
  return (
    <div className="bg-black min-h-screen">

      <ScrollProgress />
      <Navigation />

      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
