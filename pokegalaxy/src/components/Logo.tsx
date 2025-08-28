"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <Link className="fixed top-4 left-4 z-50" href="/">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
    </Link>
  );
};

export { Logo };
