"use client";

import { useGetPokedexEntries } from "@/api/useGetPokedexEntries";
import { PokedexCard } from "./PokedexCard";

const PokedexEntries = () => {
  const { pokedexEntries } = useGetPokedexEntries();

  const getIdFromUrl = (url: string) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <>
      {pokedexEntries &&
        pokedexEntries.map((entry) => (
          <PokedexCard key={entry.name} name={entry.name} id={getIdFromUrl(entry.url)} />
        ))}
    </>
  );
};

export { PokedexEntries };
