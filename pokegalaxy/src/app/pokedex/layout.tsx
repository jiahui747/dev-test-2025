import { Metadata } from "next";

const metadata: Metadata = {
  title: "pokedex - Pokemon Galaxy",
  description: "Discover and explore every Pokémon in our comprehensive Pokédex",
};

const PokedexLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default PokedexLayout;
export { metadata };
