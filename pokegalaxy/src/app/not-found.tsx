"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { NeonButton } from "@/components/NeonButton";
import { BLURRED_PIKACHU } from "@/constants/placeholder";

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
          priority
          placeholder="blur"
          blurDataURL={BLURRED_PIKACHU}
        />
        <div className="absolute top-50 left-25">
          <GlowyCheek />
        </div>
        <div className="absolute top-50 right-38">
          <GlowyCheek />
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
      <NeonButton href="/pokedex">Back to Pokédex</NeonButton>
    </div>
  );
};

const GlowyCheek = () => {
  return (
    <motion.div
      className="w-15 h-15 bg-amber-200 rounded-full blur-lg"
      animate={{
        opacity: [0.1, 1, 0.7, 1, 0.1],
      }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
  );
};

export default CustomNotFoundPage;
