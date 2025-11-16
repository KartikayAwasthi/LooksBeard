import Link from "next/link";

export default function WorkSection() {
  const projects = [
    { id: 1, title: "Cinematic Project 1", thumb: "/images/work1.jpg" },
    { id: 2, title: "Cinematic Project 2", thumb: "/images/work2.jpg" },
    { id: 3, title: "Cinematic Project 3", thumb: "/images/work3.jpg" },
  ];

  return (
    <section className="py-24 px-6 fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center glow-text mb-12">
        Featured Work 🎬🔥
      </h2>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group h-60 rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/10 project-card animate-stagger"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

            {/* Title */}
            <p className="absolute bottom-4 left-4 text-white/90 text-sm tracking-wide">
              {project.title}
            </p>

            {/* Shine effect */}
            <div className="shine-effect"></div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <Link href="/work">
          <button className="bg-[#FAF0DB] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition">
            View Portfolio →
          </button>
        </Link>
      </div>
    </section>
  );
}
