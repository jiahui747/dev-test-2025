import { capitalizeFirstLetter } from "@/helpers/helpers";
import { PokemonStat } from "@/types/types";
import { StatsBar } from "./StatsBar";

type PokemonStatsProps = {
  stats: PokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="border border-solid border-white p-10 rounded-md white-glass-card min-w-[300px]">
      <p className="bold text-2xl">Base stats</p>
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
