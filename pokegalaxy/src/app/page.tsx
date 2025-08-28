import Image from "next/image";
import { NeonButton } from "@/components/NeonButton";
import { NeonTitle } from "@/components/NeonTitle";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url('/galaxy.png')] bg-repeat-round">
      <main className="row-start-2 flex flex-col items-center gap-2">
        <Image src="/logo.png" alt="Pokegalaxy logo" width={180} height={38} priority />
        <NeonTitle>Pokémon Galaxy</NeonTitle>
        <p className="mt-6 text-center text-lg max-w-xl text-gray-300">
          Explore every Pokémon in a cosmic journey through the Pokédex
        </p>
        <NeonButton href="/pokedex">Explore Pokédex</NeonButton>
      </main>
    </div>
  );
};

export default Home;
