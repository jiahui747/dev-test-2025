import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/Logo";

const orbitron = Orbitron({
  variable: "--font-orbitron",
});

const metadata: Metadata = {
  title: "Pokemon Galaxy",
  description: "Explore every Pokémon in a cosmic journey",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased`}>
        <Logo />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };
