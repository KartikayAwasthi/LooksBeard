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
    }, 1300); // matches animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isAnimating && (
        <div className="page-transition flex flex-col items-center justify-center gap-4">
          
          {/* <Image
            src="/logo/logo1.png"
            alt="Looksbeard Logo"
            width={200}
            height={200}
            className="transition-zoom-logo"
          /> */}

          {/* GIF / Video Animation below logo */}
          <Image
            src="/logo/video.gif"
            alt="Logo Animation"
            width={1000}
            height={1000}
            className="transition-video"
            unoptimized
          />
        </div>
      )}
    </>
  );
}
