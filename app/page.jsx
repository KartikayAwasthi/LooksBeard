import Image from "next/image";
import Link from "next/link";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <main className="mt-24">
      
      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 text-center fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold glow-text leading-tight">
            Turning Imagination Into Motion
          </h1>

          <p className="text-white/70 mt-6 text-lg md:text-xl">
            We craft cinematic video edits, motion graphics, sound design, and
            high-end post-production that elevates your visual storytelling.
          </p>

          <Link href="/contact">
            <button className="mt-8 bg-[#FAF0DB] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      

      <Services/>

      <Work/>

      

    </main>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-[#111] border border-white/10 rounded-xl p-8 hover:border-[#FAF0DB] transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
