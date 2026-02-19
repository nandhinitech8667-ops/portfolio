import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingIcons from "@/components/FloatingIcons";
import ParallaxBackground from "@/components/ParallaxBackground";
import JourneyTimeline from "@/components/JourneyTimeline";

const Index = () => {
  return (
    <div className="bg-background">

      {/* Optional Effects */}
      <ScrollProgress />
      <ParallaxBackground />
      <FloatingIcons />

      {/* Navbar */}
      <Navigation />

      {/* MAIN CONTENT */}
      <main className="relative z-10">

        {/* HOME */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Layout>
            <Hero />
          </Layout>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32">
          <Layout>
            <About />
          </Layout>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32">
          <Layout>
            <Projects />
          </Layout>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-32">
          <Layout>
            <Experience />
          </Layout>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="py-32 hidden lg:block">
          <Layout>
            <JourneyTimeline />
          </Layout>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32">
          <Layout>
            <Contact />
          </Layout>
        </section>

      </main>

      <Footer />

    </div>
  );
};

export default Index;
