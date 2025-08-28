import { capitalizeFirstLetter } from "@/helpers/helpers";
import { PokemonStat } from "@/types/types";

type PokemonStatsProps = {
  stats: PokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="border border-solid border-white p-10 rounded-md w-1/2">
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

const StatsBar = ({ statName, stateValue }: { statName: string; stateValue: string }) => {
  return (
    <div className="grid grid-cols-2 text-white mt-6">
      <p className="text-start">{statName}</p>
      <p className="text-end">{stateValue}</p>
      <div className="col-span-2 h-2 border border-solid border-amber-50" />
    </div>
  );
};

export { PokemonStats };
