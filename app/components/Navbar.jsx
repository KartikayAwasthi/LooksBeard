"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "shadow-lg" : ""}
        bg-[#faf0db]
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
  src="/logo/logo1.png"
  width={80}
  height={80}
  alt="Looksbeard Logo"
  className="
    object-contain
    transition-all duration-300 ease-out
    hover:scale-125 hover:rotate-0
    hover:brightness-110
  "
  style={{
    transformOrigin: "center",
  }}
/>

          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-black font-bold">
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="relative group text-[16px]"
            >
              {item}

              {/* underline hover animation */}
              <span className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-black
                group-hover:w-full transition-all duration-300
              "></span>
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-black focus:outline-none text-3xl"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#FAF0DB] flex flex-col text-black py-6 px-6 space-y-5 text-lg shadow-md font-bold">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}
