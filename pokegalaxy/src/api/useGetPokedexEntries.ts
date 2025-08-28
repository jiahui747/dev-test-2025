import { POKEMON_API_BASE_URL } from "@/constants/constants";
import { PokemonAPIResponse } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetPokedexEntries = () => {
  const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery<PokemonAPIResponse>({
    queryKey: ["pokemon/pokedex/entries"],
    queryFn: async ({ pageParam }) =>
      (await axios.get(`${POKEMON_API_BASE_URL}?limit=100&offset=${(pageParam as number) * 100}`))
        .data,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.next ?? undefined;
    },
  });

  return {
    isLoading,
    isError,
    fetchNextPage,
    pokedexEntries: data?.pages[0].results,
  };
};

export { useGetPokedexEntries };
