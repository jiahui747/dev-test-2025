import Image from "next/image";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-2">
        <Image src="/logo.png" alt="Pokegalaxy logo" width={180} height={38} priority />
        <p className="font-orbitron text-6xl font-bold neon-text-outline">Pokémon Galaxy</p>
        <p className="mt-6 text-center text-lg max-w-xl text-gray-300">
          Explore every Pokémon in a cosmic journey through the Pokédex
        </p>
        <a className="neon-button mt-6" href="/pokedex">
          Explore Pokédex
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
