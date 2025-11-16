export default function ServicesSection() {
  const items = [
    {
      emoji: "🎞️",
      title: "Cinematic Video Editing",
      desc: "Cuts, pacing, transitions, storytelling—everything crafted frame-by-frame.",
      float: true,
    },
    {
      emoji: "✨",
      title: "Motion Graphics",
      desc: "Logo animation, explainer videos, UI motion, kinetic typography.",
      float: false,
    },
    {
      emoji: "🔊",
      title: "Sound Design",
      desc: "SFX, Foley, mixing, mastering, atmosphere building & cleanups.",
      float: true,
    },
    {
      emoji: "🖼️",
      title: "Thumbnail & Visual Design",
      desc: "High-conversion thumbnails & scroll-stopping social visuals.",
      float: false,
    },
    {
      emoji: "🎨",
      title: "Colour Grading",
      desc: "Tone, exposure, cinematic LUTs, mood & visual polish.",
      float: true,
    },
    {
      emoji: "⚙️",
      title: "Full Post-Production",
      desc: "Editing + graphics + audio + mastering—start to finish.",
      float: false,
    },
  ];

  return (
    <section className="w-full py-32 px-6">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold glow-text animate-fadeIn">
          Our Services ✨🔥
        </h2>

        <p className="text-white/70 text-xl max-w-3xl mx-auto mt-6 animate-slideUp">
          Everything you need to bring your content alive with cinematic precision  
          and creative excellence.
        </p>

        {/* Floating Emojis */}
        <div className="flex justify-center gap-6 mt-10">
          <span className="emoji-floating">🎬</span>
          <span className="emoji-pop">✨</span>
          <span className="emoji-floating delay-300">🔊</span>
          <span className="emoji-pop delay-150">🔥</span>
          <span className="emoji-floating delay-600">🖌️</span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="service-emoji-card animate-stagger"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div
              className={`text-6xl mb-6 ${
                item.float ? "emoji-floating" : "emoji-pop"
              }`}
            >
              {item.emoji}
            </div>

            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

            <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <a
          href="/contact"
          className="inline-block px-14 py-4 bg-[#FAF0DB] text-black rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition"
        >
          Start Your Project 🚀
        </a>
      </div>
    </section>
  );
}
