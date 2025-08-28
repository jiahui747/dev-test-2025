"use client";

import { PokedexCard } from "./PokedexCard";
import { PokedexEntry } from "@/types/types";
import { motion } from "motion/react";
import Image from "next/image";

type PokedexEntriesProps = {
  entries?: PokedexEntry[];
  isLoading?: boolean;
  isError?: boolean;
};

const PokedexEntries = ({ entries, isLoading, isError }: PokedexEntriesProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center mt-10 gap-4">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1, repeat: Infinity, ease: "circInOut" }}
        >
          <Image src="/loading-spinner.png" alt="loading" width={100} height={100} />
        </motion.div>
        <p className="text-white">Loading Pokémons...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-amber-300 mt-10 border border-solid p-3">
        !! Failed to load Pokémons. Please try again later.
      </p>
    );
  }

  const getIdFromUrl = (url: string) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 w-full">
      {entries &&
        entries.map((entry) => (
          <PokedexCard key={entry.name} name={entry.name} id={getIdFromUrl(entry.url)} />
        ))}
    </div>
  );
};

export { PokedexEntries };
