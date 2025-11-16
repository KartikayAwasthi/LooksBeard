export const metadata = {
  title: "Our Work — Looksbeard Productions",
  description:
    "A cinematic showcase of our best video editing, motion graphics, sound design, and creative production work.",
};

export default function WorkPage() {
  const projects = [
    {
      title: "Cinematic Travel Edit",
      tag: "Cinematic Edit",
      emoji: "🎞️",
      thumb: "/images/work/cinematic1.jpg",
    },
    {
      title: "Logo Animation Reveal",
      tag: "Motion Graphics",
      emoji: "✨",
      thumb: "/images/work/motion1.jpg",
    },
    {
      title: "Product Advertisement",
      tag: "Commercial Video",
      emoji: "📦",
      thumb: "/images/work/product1.jpg",
    },
    {
      title: "Music Visualizer",
      tag: "Audio Reactive",
      emoji: "🎧",
      thumb: "/images/work/music1.jpg",
    },
    {
      title: "Corporate Branding Edit",
      tag: "Corporate Edit",
      emoji: "🏢",
      thumb: "/images/work/corporate1.jpg",
    },
    {
      title: "Dynamic Reels Edit",
      tag: "Social Media",
      emoji: "🔥",
      thumb: "/images/work/reels1.jpg",
    },
  ];

  return (
    <main className="pt-40 pb-32 w-full">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold glow-text animate-fadeIn">
          Our Work 🎬🔥
        </h1>

        <p className="text-white/70 text-xl max-w-3xl mx-auto mt-5 animate-slideUp">
          A curated collection of the edits, animations, sound design, and production work
          we’ve crafted for creators and brands worldwide.
        </p>

        {/* Emoji Row */}
        <div className="flex justify-center gap-6 mt-10">
          <span className="emoji-badge animate-float delay-0">🎞️</span>
          <span className="emoji-badge animate-pop delay-150">✨</span>
          <span className="emoji-badge animate-float delay-300">🎧</span>
          <span className="emoji-badge animate-pop delay-450">🔥</span>
          <span className="emoji-badge animate-float delay-600">📽️</span>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="w-full px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((item, index) => (
            <div
              key={index}
              className="project-card animate-stagger"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Thumbnail */}
              <div className="project-thumb relative">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl"
                />

                {/* Hover Shine */}
                <div className="shine" />
              </div>

              {/* Text */}
              <div className="mt-4">
                <span className="text-[#FAF0DB] text-sm uppercase tracking-wide">
                  {item.tag} {item.emoji}
                </span>
                <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="w-full text-center mt-28">
        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#FAF0DB] text-black font-semibold text-lg shadow-xl hover:scale-105 transition"
        >
          Work With Us ✨
        </a>
      </div>
    </main>
  );
}
