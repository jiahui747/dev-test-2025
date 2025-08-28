import { capitalizeFirstLetter } from "@/helpers/helpers";
import { PokemonStat } from "@/types/types";
import { StatsBar } from "./StatsBar";

type PokemonStatsProps = {
  stats: PokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="border border-solid border-white p-10 rounded-md w-1/2 white-glass-card">
      <p className="bold text-white text-2xl">Base stats</p>
      {stats?.map((stat) => (
        <StatsBar
          key={stat.stat.name}
          statName={capitalizeFirstLetter(stat.stat.name)}
          stateValue={String(stat.base_stat)}
        />
      )) ?? null}
    </div>
  );
};

export { PokemonStats };
