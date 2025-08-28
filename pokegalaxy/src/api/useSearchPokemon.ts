import { POKEMON_API_BASE_URL } from "@/constants/constants";
import { PokemonSearchAPIResponse } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useSearchPokemon = () => {
  const { data, isPending, isError, mutateAsync, reset } = useMutation<
    PokemonSearchAPIResponse,
    Error,
    { pokemonName: string }
  >({
    mutationKey: ["pokemon/search"],
    mutationFn: async ({ pokemonName }) =>
      (await axios.get(`${POKEMON_API_BASE_URL}/${pokemonName}`)).data,
  });

  return {
    searchPokemon: mutateAsync,
    foundPokemon: data,
    isError,
    isPending,
    reset,
  };
};

export { useSearchPokemon };
