import { POKEMON_SPRIT_IMAGE_BASE_URL } from "@/constants/constants";
import { capitalizeFirstLetter } from "@/helpers/helpers";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

type PokedexCardProps = {
  name: string;
  id: string;
};

const PokedexCard = ({ name, id }: PokedexCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <a href={`/pokedex/${id}`}>
      <motion.div
        className={`${
          isLoading ? "animate-pulse" : "animate-none"
        } p-10 gap-5 rounded overflow-hidden border-1 border-soild border-white flex flex-col items-center white-glass-card`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px white, 0 0 30px white,0 0 40px white",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src={`${POKEMON_SPRIT_IMAGE_BASE_URL}/${id}.png`}
          height={150}
          width={150}
          alt={name ?? "unknown"}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/sprite-placeholder.png"
          onLoadingComplete={() => setIsLoading(false)}
        />
        <p className="text-white text-base">{`#${id} ${capitalizeFirstLetter(name)}`}</p>
      </motion.div>
    </a>
  );
};

export { PokedexCard };
