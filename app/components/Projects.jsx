export default function Projects() {
  const items = [
    { title: "Cinematic Edit", emoji: "🎞️" },
    { title: "Motion Graphics", emoji: "✨" },
    { title: "Sound Design", emoji: "🔊" },
  ];

  return (
    <section className="w-full py-20">
      <h2 className="text-center text-4xl font-bold glow-text mb-12">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-black/20 border border-white/10 p-10 rounded-xl text-center text-white shadow-xl animate-stagger"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
