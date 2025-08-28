import { POKEMON_API_BASE_URL } from "@/constants/constants";
import { PokemonBaseInfo } from "@/types/types";
import axios from "axios";
import { PokemonStats } from "./_components/PokemonStats";
import { capitalizeFirstLetter } from "@/helpers/helpers";
import { NeonButton } from "@/components/NeonButton";
import { NeonTitle } from "@/components/NeonTitle";
import { PokemonFullBody } from "./_components/PokemonFullBody";

type PageProps = {
  params: Promise<{ pokeId: string }>;
};

const PokemonPage = async ({ params }: PageProps) => {
  const { pokeId } = await params;
  const pokemonInfo = await getPokemonDetails(pokeId);
  const { name, stats = [] } = pokemonInfo || {};

  return (
    <div className="flex items-center flex-col gap-8 p-8">
      <NeonTitle className="text-4xl sm:text-6xl mb-20">
        {name ? capitalizeFirstLetter(name) : "Unknown Pokemon"}
      </NeonTitle>
      <div className="flex items-center justify-center gap-10 flex-col-reverse lg:flex-row">
        <PokemonStats stats={stats} />
        <PokemonFullBody name={name || ""} />
      </div>
      <NeonButton href="/pokedex">Back to Pokédex</NeonButton>
    </div>
  );
};

async function getPokemonDetails(id: string) {
  try {
    const { data } = await axios.get<PokemonBaseInfo>(`${POKEMON_API_BASE_URL}/${id}`);
    return data;
  } catch {
    return null;
  }
}

export default PokemonPage;
