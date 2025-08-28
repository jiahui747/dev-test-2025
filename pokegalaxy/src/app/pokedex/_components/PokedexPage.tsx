"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetPokedexEntries } from "@/hooks/useGetPokedexEntries";
import { PokedexEntries } from "./PokedexEntries";
import { useLayoutEffect } from "react";
import { useSearchPokemon } from "@/hooks/useSearchPokemon";
import { NeonTitle } from "@/components/NeonTitle";

const PokedexPage = () => {
  const { pokedexEntries, fetchNextPage, isLoading, isError } = useGetPokedexEntries();
  const {
    foundPokemon,
    searchPokemon,
    isError: isSearchErrored,
    isPending,
    reset: resetSearchState,
  } = useSearchPokemon();

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: "#loadMoreTrigger",
      start: "bottom top",
      onEnter: () => {
        ScrollTrigger.refresh();
        fetchNextPage();
      },
    });
  }, [fetchNextPage]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      const query = target.value.trim().toLowerCase();
      if (query) {
        searchPokemon({ pokemonName: query });
      }
    }
  };

  const entriesToShow = foundPokemon
    ? [{ name: foundPokemon.name, url: `https://pokeapi.co/api/v2/pokemon/${foundPokemon.id}/` }]
    : pokedexEntries;

  return (
    <div className="flex items-center min-h-screen md:p-20 p-10 flex-col">
      <div className="w-full max-w-2xl flex flex-col items-center gap-10">
        <NeonTitle>Pokédex</NeonTitle>
        <input
          name="search"
          type="text"
          placeholder="Search Pokémon..."
          className="mt-6 p-2 border border-gray-300 rounded w-full h-14 text-white"
          onKeyDown={handleSearch}
          onChange={() => resetSearchState()}
        />
      </div>
      {isSearchErrored && (
        <p className="text-red-500 mt-4">
          No Pokémon found. Please use the full name, partial match is not supported.
        </p>
      )}
      <PokedexEntries
        entries={entriesToShow}
        isLoading={isLoading || isPending}
        isError={isError}
      />
      <div id="loadMoreTrigger" className="h-1 w-1" />
    </div>
  );
};

export default PokedexPage;
