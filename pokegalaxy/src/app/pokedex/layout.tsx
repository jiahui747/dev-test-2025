"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const PokedexLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient();
  gsap.registerPlugin(ScrollTrigger);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default PokedexLayout;
