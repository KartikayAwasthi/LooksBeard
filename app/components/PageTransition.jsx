"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageTransition() {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1300); // must match animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isAnimating && (
        <div className="page-transition flex items-center justify-center">
          <Image
            src="/logo/logo1.png"
            alt="Looksbeard Logo"
            width={200}
            height={200}
            className="transition-zoom-logo"
          />
        </div>
      )}
    </>
  );
}
