import { FULL_POKEMON_IMAGE_BASE_URL, POKEMON_API_BASE_URL } from "@/constants/constants";
import { PokemonBaseInfo } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import { PokemonStats } from "./_components/PokemonStats";
import { capitalizeFirstLetter } from "@/helpers/helpers";

type PageProps = {
  params: Promise<{ pokeId: string }>;
};

const PokemonPage = async ({ params }: PageProps) => {
  const { pokeId } = await params;
  const pokemonInfo = await getPokemonDetails(pokeId);
  const { name, stats = [] } = pokemonInfo || {};

  return (
    <div className="flex items-center flex-col gap-8 p-8">
      <p className="font-orbitron text-4xl sm:text-6xl font-bold neon-text-outline mb-20">
        {name ? capitalizeFirstLetter(name) : "Unknown Pokemon"}
      </p>
      <div className="flex items-center justify-center gap-10 flex-col-reverse md:flex-row">
        <PokemonStats stats={stats} />
        <Image
          src={name ? `${FULL_POKEMON_IMAGE_BASE_URL}/${name}.jpg` : "/unknown-pokemon.png"}
          alt={name ?? "unknown"}
          width={400}
          height={400}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/pokemon-substitute.png"
        />
      </div>
      <a className="neon-button mt-10" href="/pokedex">
        Back to Pokédex
      </a>
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
