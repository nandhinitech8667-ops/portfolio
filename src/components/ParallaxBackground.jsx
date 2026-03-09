import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]"
        style={{ y: y1, opacity }}
      />

      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]"
        style={{ y: y2, opacity }}
      />

      <motion.div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]"
        style={{ y: y3, opacity }}
      />
    </div>
  );
};

export default ParallaxBackground;
