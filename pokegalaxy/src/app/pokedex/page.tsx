"use client";

import { PokedexEntries } from "./_components/PokedexEntries";

const PokedexPage = () => {
  return (
    <div className="flex items-center min-h-screen p-20 flex-col">
      <div className="w-full max-w-2xl flex flex-col items-center gap-10">
        <p className="font-orbitron text-6xl font-bold neon-text-outline text-center">Pokédex</p>
        <input
          name="search"
          type="text"
          placeholder="Search Pokémon..."
          className="mt-6 p-2 border border-gray-300 rounded w-full h-14 text-white"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <PokedexEntries />
      </div>
    </div>
  );
};

export default PokedexPage;
