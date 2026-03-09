import React, { useState } from "react";
import { motion } from "framer-motion";

const MiniGame = () => {

  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Interactive Zone 🎮
      </motion.h2>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-xl text-center w-[300px]"
      >

        {!unlocked ? (
          <>
            <p className="text-gray-300 mb-4">
              Click to Unlock My Special Skills 🚀
            </p>

            <button
              onClick={() => setUnlocked(true)}
              className="neon-btn"
            >
              UNLOCK 🔓
            </button>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Skills Unlocked ✅
            </h3>

            <ul className="text-gray-300 space-y-2">
              <li>⚡ React Developer</li>
              <li>🔥 Frontend Engineer</li>
              <li>💻 Full Stack Learner</li>
              <li>📊 Data Analytics Intern</li>
            </ul>
          </>
        )}

      </motion.div>

    </section>
  );
};

export default MiniGame;
