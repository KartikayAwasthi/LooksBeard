"use client";

import Link from "next/link";
import localFont from "next/font/local";

const funny = localFont({
  src: "../fonts/FunnyCute.ttf",
  variable: "--font-funny",
});

export default function Hero() {
  return (
    <section className={`${funny.variable} min-h-[80vh] flex items-center justify-center px-6 text-center fade-in`}>
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold glow-text leading-tight font-funny">
          Turning Imagination Into Motion
        </h1>

        <p className="text-white/70 mt-6 text-lg md:text-xl">
          We craft cinematic video edits, motion graphics, sound design, and
          high-end post-production that elevates your visual storytelling.
        </p>

        <Link href="/contact">
          <button className="mt-8 bg-[#eaeaea] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition">
            Start Your Project
          </button>
        </Link>
      </div>
    </section>
  );
}
