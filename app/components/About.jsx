// components/About.jsx

export default function About() {
  return (
    <section className="w-full">

      {/* ===========================
          HERO — ULTRA FAST LOADING
      ============================ */}
      <div className="relative h-[70vh] w-full bg-black flex items-center justify-center text-center px-6">

        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-black to-[#0a0a0a]"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FAF0DB] tracking-tight">
            We Create Cinematic Magic 🎬✨
          </h1>

          <p className="text-white/70 text-xl max-w-3xl mx-auto mt-6">
            Looksbeard Productions delivers high-end cinematic edits, emotional storytelling,
            and visually stunning motion design crafted with precision.
          </p>

          {/* Floating emojis — lightweight */}
          <div className="flex justify-center gap-4 mt-8">
            {["🎞️", "✨", "🎧", "🔥", "🖌️"].map((e, i) => (
              <span
                key={i}
                className="px-4 py-3 bg-white/10 text-2xl rounded-xl border border-white/10"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===========================
          SECTION 2 — CLEAN SPLIT
      ============================ */}
      <div className="grid lg:grid-cols-2 w-full">

        {/* LEFT */}
        <div className="p-16 bg-[#0c0c0c] border-y border-white/10">
          <h2 className="text-4xl md:text-5xl text-[#FAF0DB] font-bold mb-6">
            Who We Are 🧑‍🎨
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            A team of passionate editors, sound designers, storytellers, and artists dedicated 
            to producing visuals that connect emotionally and deliver impact.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["🎞️", "Cinematic Editing"],
              ["✨", "Motion Graphics"],
              ["🎧", "Sound Design"],
              ["🖼️", "Visual Identity"],
            ].map(([emoji, title], index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="text-2xl">{emoji}</span>
                <p className="font-semibold text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-16 bg-[#111] border-y border-white/10">
          <h2 className="text-4xl md:text-5xl text-[#FAF0DB] font-bold mb-6">
            Why Brands Trust Us 📌
          </h2>

          <ul className="text-white/70 text-lg space-y-5">
            <li>⭐ Accurate storytelling & emotional pacing</li>
            <li>🎯 Performance-driven editing style</li>
            <li>⏱️ Fast turnaround with top quality</li>
            <li>🌍 Trusted by creators across the world</li>
          </ul>
        </div>
      </div>

      {/* ===========================
          SECTION 3 — MISSION + VISION
      ============================ */}
      <div className="grid md:grid-cols-2 w-full">

        {/* Mission */}
        <div className="p-16 bg-black border-b border-white/10">
          <h3 className="text-4xl font-semibold text-[#FAF0DB] mb-4">Our Mission 🚀</h3>
          <p className="text-white/80 text-xl leading-relaxed">
            To empower brands and creators through cinematic visuals that inspire, engage,
            and captivate audiences globally.
          </p>
        </div>

        {/* Vision */}
        <div className="p-16 bg-[#0d0d0d] border-b border-white/10">
          <h3 className="text-4xl font-semibold text-[#FAF0DB] mb-4">Our Vision 🌍✨</h3>
          <p className="text-white/80 text-xl leading-relaxed">
            To be a globally renowned creative production studio known for innovation,
            emotional storytelling, and unforgettable visuals.
          </p>
        </div>
      </div>

      {/* ===========================
          SECTION 4 — CORE VALUES GRID
      ============================ */}
      <div className="w-full py-24 px-8">
        <h3 className="text-5xl font-bold text-center text-[#FAF0DB] mb-16">
          Core Values 💡🔥
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            ["🎨", "Creativity First", "Every project gets unique artistic treatment."],
            ["🔍", "Precision", "Every frame is crafted with intention."],
            ["⏱️", "Timeliness", "Quick delivery without quality drop."],
            ["🤝", "Collaboration", "Your ideas + our expertise = magic."],
            ["🚀", "Innovation", "Always evolving creative style."],
            ["📈", "Growth-Driven", "Edits designed to boost performance."],
          ].map(([emoji, title, desc], i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h4 className="text-2xl font-semibold text-[#FAF0DB] mb-2">
                {title}
              </h4>
              <p className="text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===========================
          CTA
      ============================ */}
      <div className="w-full text-center py-20 bg-black">
        <a
          href="/contact"
          className="px-12 py-4 rounded-full bg-[#FAF0DB] text-black font-semibold text-lg shadow-lg hover:scale-105 transition"
        >
          Work With Us ✨
        </a>
      </div>
    </section>
  );
}
