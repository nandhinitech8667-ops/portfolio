import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2022",
    title: "Started Web Development",
    description: "Began learning HTML, CSS and JavaScript fundamentals.",
  },
  {
    year: "2023",
    title: "React Developer Journey",
    description: "Built multiple React projects and learned component-based architecture.",
  },
  {
    year: "2024",
    title: "Full Stack Projects",
    description: "Worked with APIs, authentication and database integration.",
  },
  {
    year: "2025",
    title: "Portfolio Launch",
    description: "Designed and launched my personal 3D animated portfolio.",
  },
];

const JourneyTimeline = () => {
  return (
    <section
      id="journey"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient">
          My Journey
        </h2>
        <p className="text-muted-foreground mt-2">
          Learning • Building • Growing
        </p>
      </motion.div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-border" />

      {/* Timeline Items */}
      <div className="relative max-w-5xl mx-auto px-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`mb-16 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="relative bg-card/80 backdrop-blur-lg border border-border p-6 rounded-xl w-full md:w-[45%] hover-lift card-shadow">

              {/* Dot */}
              <span className="absolute top-6 -left-9 md:-left-12 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent glow-effect" />

              {/* Content */}
              <span className="text-sm text-primary font-semibold">
                {item.year}
              </span>

              <h3 className="text-xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
