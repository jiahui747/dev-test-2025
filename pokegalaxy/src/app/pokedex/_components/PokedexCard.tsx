import { POKEMON_SPRIT_IMAGE_BASE_URL } from "@/constants/constants";
import Image from "next/image";

type PokedexCardProps = {
  name: string;
  id: string;
};

const PokedexCard = ({ name, id }: PokedexCardProps) => {
  return (
    <a href={`/pokedex/${id}`}>
      <div className="p-10 gap-5 max-w-sm rounded overflow-hidden border-1 border-soild border-white flex flex-col items-center">
        <Image
          src={`${POKEMON_SPRIT_IMAGE_BASE_URL}/${id}.png`}
          height={150}
          width={150}
          alt={name ?? "unknown"}
        />
        <p className="text-white text-base">{`#${id} ${name}`}</p>
      </div>
    </a>
  );
};

export { PokedexCard };
