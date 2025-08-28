"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { gsap } from "gsap";
import PokedexPage from "./_components/PokedexPage";

const Pokedex = () => {
  const queryClient = new QueryClient();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <QueryClientProvider client={queryClient}>
      <PokedexPage />
    </QueryClientProvider>
  );
};

export default Pokedex;
