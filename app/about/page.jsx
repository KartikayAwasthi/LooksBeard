export const metadata = {
  title: "About Us — Looksbeard Productions",
  description:
    "Learn about Looksbeard Productions, our mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <main className="pt-40 pb-32 w-full">

      {/* ---- HERO SECTION (Full Width) ---- */}
      <section className="w-full text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold glow-text animate-fadeIn">
          About Looksbeard Productions 🎬✨
        </h1>

        <p className="text-white/70 text-xl mt-6 max-w-3xl mx-auto animate-slideUp">
          A creative powerhouse crafting cinematic edits, motion graphics, immersive sound design,
          and high-impact visuals for creators & brands worldwide.
        </p>

        {/* Floating Emojis */}
        <div className="flex justify-center gap-6 mt-10">
          <span className="emoji-badge animate-float delay-0">🎞️</span>
          <span className="emoji-badge animate-pop delay-150">✨</span>
          <span className="emoji-badge animate-float delay-300">🎧</span>
          <span className="emoji-badge animate-pop delay-450">🔥</span>
          <span className="emoji-badge animate-float delay-600">🖌️</span>
        </div>
      </section>

      {/* ---- FULL SCREEN SPLIT SECTION ---- */}
      <section className="grid lg:grid-cols-2 w-full">
        
        {/* LEFT PANEL */}
        <div className="p-16 bg-gradient-to-br from-black/40 to-black/10 border-y border-white/10 animate-slideUp">
          <h2 className="text-4xl font-bold mb-4">
            Who We Are <span>🧑‍🎨</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We are storytellers, designers, editors, and motion artists…  
            united by passion, precision, and creativity.  
            <br /><br />
            From cinematic visuals to smart motion design, our team transforms raw ideas into breathtaking experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              ["🎞️", "Cinematic Editing"],
              ["✨", "Motion Graphics"],
              ["🔊", "Sound Design"],
              ["🖼️", "Thumbnail & Visuals"],
            ].map(([emoji, label], i) => (
              <div key={i} className="feature-card animate-stagger" style={{ animationDelay: `${i * 150}ms` }}>
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
            <li>🎯 Focused on performance-driven visuals</li>
            <li>⏱️ Deadline-respecting, quality-first workflow</li>
            <li>🌍 Creative studio with worldwide clients</li>
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
            To empower creators, businesses, and brands with world-class visual storytelling
            that elevates identity and captivates audiences.
          </p>
        </div>

        <div className="p-16 border-b border-white/10 bg-black/10 animate-slideUp delay-200">
          <h3 className="text-4xl font-semibold mb-4">Our Vision 🌍✨</h3>
          <p className="text-white/80 text-xl leading-relaxed">
            To become a globally trusted creative production studio known for innovation,
            emotion-driven storytelling, and jaw-dropping visuals.
          </p>
        </div>
      </section>

      {/* ---- CORE VALUES (FULL WIDTH GRID) ---- */}
      <section className="w-full py-24 px-6">
        <h3 className="text-5xl font-bold text-center mb-16 animate-fadeIn">
          Our Core Values 💡🔥
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["🎨 Creativity First", "Every idea deserves a unique style."],
            ["🔍 Precision", "Every frame is crafted with intention."],
            ["⏱️ Timeliness", "Punctual delivery without compromise."],
            ["🤝 Collaboration", "Your vision + our craft = magic."],
            ["🛡️ Honesty", "Transparent communication always."],
            ["📈 Growth Driven", "Designs that elevate performance."],
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
