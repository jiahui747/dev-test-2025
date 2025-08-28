import { POKEMON_API_BASE_URL } from "@/constants/constants";
import { PokemonBaseInfo, PokemonSearchAPIResponse } from "@/types/types";
import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import axios from "axios";

type SearchPokemonReturnType = {
  searchPokemon: UseMutateAsyncFunction<
    PokemonBaseInfo,
    Error,
    {
      pokemonName: string;
    },
    unknown
  >;
  foundPokemon: PokemonBaseInfo | undefined;
  isError: boolean;
  isPending: boolean;
  reset: () => void;
};

const useSearchPokemon = (): SearchPokemonReturnType => {
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
