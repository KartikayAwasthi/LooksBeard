export const metadata = {
  title: "About Us — Looksbeard Productions",
  description:
    "Learn about Looksbeard Productions, our mission, vision, and the creative philosophy behind our cinematic edits.",
};

export default function AboutPage() {
  return (
    <main className="pt-40 pb-32 w-full">

      {/* ---- HERO SECTION ---- */}
      <section className="w-full text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold glow-text animate-fadeIn">
          About Looksbeard Productions 🎬✨
        </h1>

        <p className="text-white/70 text-xl mt-6 max-w-3xl mx-auto animate-slideUp">
          A creative powerhouse shaping visuals that move emotions, ignite creativity,
          and deliver unforgettable cinematic experiences.
        </p>

        {/* Floating Emojis */}
        <div className="flex justify-center gap-6 mt-10">
          <span className="emoji-badge animate-float">🎞️</span>
          <span className="emoji-badge animate-pop delay-150">✨</span>
          <span className="emoji-badge animate-float delay-300">🎧</span>
          <span className="emoji-badge animate-pop delay-450">🔥</span>
          <span className="emoji-badge animate-float delay-600">🖌️</span>
        </div>
      </section>

      {/* ---- SPLIT SHOWCASE SECTION ---- */}
      <section className="grid lg:grid-cols-2 w-full">

        {/* LEFT PANEL */}
        <div className="p-16 bg-gradient-to-br from-black/40 to-black/10 border-y border-white/10 animate-slideUp">
          <h2 className="text-4xl font-bold mb-4">
            Who We Are <span>🧑‍🎨</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Looksbeard Productions is a collective of passionate editors, storytellers,
            sound designers, and motion artists — driven by the pursuit of creativity,
            precision, and visual excellence.
            <br /><br />
            From cinematic commercials to fast-paced reels, our studio transforms raw
            footage into breathtaking visual experiences.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              ["🎞️", "Cinematic Editing"],
              ["✨", "Motion Graphics"],
              ["🔊", "Sound Design"],
              ["🖼️", "Visual Design"],
            ].map(([emoji, label], i) => (
              <div
                key={i}
                className="feature-card animate-stagger"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <span className="text-2xl">{emoji}</span>
                <span className="font-semibold text-lg">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-16 bg-[#111] border-y border-white/10 animate-slideUp delay-150">
          <h2 className="text-4xl font-bold mb-4">Quick Facts 📌</h2>
          <ul className="text-white/70 text-lg space-y-5">
            <li>⭐ Trusted by creators & global brands</li>
            <li>🎯 Performance-oriented visual design</li>
            <li>⏱️ High-quality, deadline-safe workflow</li>
            <li>🌍 Serving clients worldwide</li>
            <li>🎧 Obsessed with sound-first storytelling</li>
          </ul>

          <a
            href="/work"
            className="mt-8 inline-block px-8 py-3 border border-[#FAF0DB] text-[#FAF0DB] rounded-lg hover:bg-[#FAF0DB] hover:text-black transition"
          >
            Explore Our Work →
          </a>
        </div>
      </section>

      {/* ---- MISSION & VISION ---- */}
      <section className="grid md:grid-cols-2 w-full">

        <div className="p-16 border-b border-white/10 bg-black/20 animate-slideUp">
          <h3 className="text-4xl font-semibold mb-4">Our Mission 🚀</h3>
          <p className="text-white/80 text-xl leading-relaxed">
            To empower creators and brands with world-class cinematic storytelling
            that builds identity, sparks emotion, and demands attention.
          </p>
        </div>

        <div className="p-16 border-b border-white/10 bg-black/10 animate-slideUp delay-200">
          <h3 className="text-4xl font-semibold mb-4">Our Vision 🌍✨</h3>
          <p className="text-white/80 text-xl leading-relaxed">
            To become a globally recognized creative studio known for consistency,
            innovation, and emotion-driven content that elevates digital storytelling.
          </p>
        </div>
      </section>

      {/* ---- CORE VALUES ---- */}
      <section className="w-full py-24 px-6">
        <h3 className="text-5xl font-bold text-center mb-16 animate-fadeIn">
          Our Core Values 💡🔥
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["🎨", "Creativity First", "Every project gets a unique visual identity."],
            ["🔍", "Precision", "Every frame crafted with intention and care."],
            ["⏱️", "Timeliness", "We deliver fast without compromising quality."],
            ["🤝", "Collaboration", "Your vision + our creativity = magic."],
            ["🛡️", "Integrity", "Transparency & honesty in all communication."],
            ["🚀", "Growth", "Helping creators & brands elevate their presence."],
          ].map(([emoji, title, desc], index) => (
            <div
              key={index}
              className="value-card animate-stagger"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-3">{emoji}</div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-white/70 text-md">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <div className="w-full text-center py-16">
        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#FAF0DB] text-black font-semibold text-lg shadow-xl hover:scale-105 transition"
        >
          Let's Create Something Stunning ✨
        </a>
      </div>
    </main>
  );
}
