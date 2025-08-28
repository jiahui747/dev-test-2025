"use client";

import { HIGHEST_STAT_VALUE } from "@/constants/constants";
import { motion } from "motion/react";

const StatsBar = ({ statName, stateValue }: { statName: string; stateValue: string }) => {
  const getStatColor = (statName: string) => {
    switch (statName.toLowerCase()) {
      case "hp":
        return "var(--clr-hp)";
      case "attack":
        return "var(--clr-attack)";
      case "defense":
        return "var(--clr-defense)";
      case "special-attack":
        return "var(--clr-special-attack)";
      case "special-defense":
        return "var(--clr-special-defense)";
      case "speed":
        return "var(--clr-speed)";
      default:
        return "var(--clr-white)";
    }
  };

  return (
    <div className="grid grid-cols-2 mt-6 relative">
      <p className="text-start">{statName}</p>
      <p className="text-end">{stateValue}</p>
      <div className="w-full h-0.5 absolute bottom-0.5 bg-blue-200 rounded-full" />
      <motion.div
        className="col-span-2 h-2 border border-solid border-amber-50 rounded-2xl z-10 white-neon-glow mt-2"
        animate={{
          width: `${(parseInt(stateValue) / HIGHEST_STAT_VALUE) * 100}%`,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ backgroundColor: getStatColor(statName) }}
      ></motion.div>
    </div>
  );
};

export { StatsBar };
