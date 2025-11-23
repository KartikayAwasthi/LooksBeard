"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    setOpen(false); // close mobile menu

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? "shadow-lg bg-[#eaeaea]" : "bg-[#eaeaea]"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <button onClick={() => scrollToSection("home")}>
          <Image
            src="/logo/logo1.png"
            width={80}
            height={80}
            alt="Looksbeard Logo"
            className="object-contain transition-all duration-300 hover:scale-125"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-black font-bold">
          <button onClick={() => scrollToSection("home")} className="nav-btn">Home</button>
          <button onClick={() => scrollToSection("about")} className="nav-btn">About</button>
          <button onClick={() => scrollToSection("services")} className="nav-btn">Services</button>
          <button onClick={() => scrollToSection("work")} className="nav-btn">Work</button>
          <button onClick={() => scrollToSection("contact")} className="nav-btn">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#eaeaea] text-black py-6 px-6 space-y-5 text-lg font-bold shadow-md">
          <button onClick={() => scrollToSection("home")} className="mobile-btn">Home</button>
          <button onClick={() => scrollToSection("about")} className="mobile-btn">About</button>
          <button onClick={() => scrollToSection("services")} className="mobile-btn">Services</button>
          <button onClick={() => scrollToSection("work")} className="mobile-btn">Work</button>
          <button onClick={() => scrollToSection("contact")} className="mobile-btn">Contact</button>
        </div>
      )}
    </nav>
  );
}
