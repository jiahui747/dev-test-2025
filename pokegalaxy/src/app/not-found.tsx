"use client";

import Image from "next/image";
import { motion } from "motion/react";

const CustomNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-white">
      <div className="relative">
        <Image
          src="/pikachu-crying.png"
          alt="Pikachu Crying"
          width={400}
          height={400}
          className="mx-auto mt-20"
        />
        <div className="absolute top-52 left-25">
          <motion.div
            className="w-10 h-10 bg-amber-200 rounded-full blur-lg"
            animate={{
              opacity: [0.1, 1, 0.7, 1, 0.1],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
        <div className="absolute top-50 right-38">
          <motion.div
            className="w-15 h-15 bg-amber-200 rounded-full blur-lg"
            animate={{
              opacity: [0.1, 1, 0.7, 1, 0.1],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </div>
      <motion.p
        className="text-5xl font-bold text-center faulty-electric-text"
        animate={{
          opacity: [0.1, 1, 0.1, 1, 0.7, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        404 - Not found
      </motion.p>
      <a className="neon-button mt-20" href="/pokedex">
        Back to Pokédex
      </a>
    </div>
  );
};

export default CustomNotFoundPage;
