import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

const NeonButton = ({ children, href }: PropsWithChildren<LinkProps>) => {
  return (
    <Link className="neon-button mt-20" href={href}>
      {children}
    </Link>
  );
};

export { NeonButton };
