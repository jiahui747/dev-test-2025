type PokedexEntry = {
  name: string;
  url: string;
};

type PokemonAPIResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokedexEntry[];
};

type PokemonSpeciesLink = {
  name: string;
  url: string;
};

type PokemonSpriteLink = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonBaseInfo = {
  base_experience: number;
  height: number;
  weight: number;
  id: number;
  name: string;
  species: PokemonSpeciesLink | null;
  sprites: PokemonSpriteLink;
  stats: PokemonStat[];
  types: PokemonType[];
};

type PokemonSearchAPIResponse = PokemonBaseInfo;

export type {
  PokedexEntry,
  PokemonAPIResponse,
  PokemonBaseInfo,
  PokemonStat,
  PokemonSearchAPIResponse,
};
