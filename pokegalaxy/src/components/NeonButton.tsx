import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

const NeonButton = ({ children }: PropsWithChildren<LinkProps>) => {
  return (
    <Link className="neon-button mt-20" href="/pokedex">
      {children}
    </Link>
  );
};

export { NeonButton };
