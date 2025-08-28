import { twMerge } from "tailwind-merge";

const NeonTitle = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const baseClasses = "font-orbitron text-6xl font-bold neon-text-outline text-center";
  const mergedClasses = twMerge(baseClasses, className);

  return <p className={mergedClasses}>{children}</p>;
};

export { NeonTitle };
