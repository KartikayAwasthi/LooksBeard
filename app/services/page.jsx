
export const metadata = {
  title: "Our Services — Looksbeard Productions",
  description:
    "Explore the cinematic editing, motion graphics, sound design, and creative post-production services we offer.",
};

export default function ServicesPage() {
  return (
    <main className="pt-40 pb-32 w-full">

      {/* HERO SECTION */}
      <section className="w-full text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold glow-text animate-fadeIn">
          Our Services 🎬✨
        </h1>

        <p className="text-white/70 text-xl mt-5 max-w-3xl mx-auto animate-slideUp">
          High-end post-production solutions crafted for creators, brands, and businesses.  
          We turn raw footage into unforgettable visual stories. 🎞️🔥
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full px-6">
        <div className="grid md:grid-cols-3 gap-10">

          {/* 1. VIDEO EDITING */}
          <div
            className="service-card animate-stagger"
            style={{ animationDelay: "0ms" }}
          >
            <div className="text-5xl mb-4">🎞️</div>
            <h3 className="text-2xl font-semibold mb-3">Video Editing</h3>
            <p className="text-white/70 text-lg mb-5 leading-relaxed">
              Cinematic storytelling with seamless transitions, rhythm, color, and emotional flow.
            </p>

            <ul className="space-y-2 text-white/60">
              <li>• Cinematic Edits</li>
              <li>• Promo Videos</li>
              <li>• Product Videos</li>
              <li>• Reels & Shorts</li>
              <li>• Corporate Videos</li>
            </ul>
          </div>

          {/* 2. MOTION GRAPHICS */}
          <div
            className="service-card animate-stagger"
            style={{ animationDelay: "150ms" }}
          >
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-semibold mb-3">Motion Graphics</h3>
            <p className="text-white/70 text-lg mb-5 leading-relaxed">
              Dynamic visuals that enhance brand identity and storytelling with fluid animation.
            </p>

            <ul className="space-y-2 text-white/60">
              <li>• Logo Animation</li>
              <li>• Explainer Videos</li>
              <li>• Title Animations</li>
              <li>• UI/UX Motion Graphics</li>
              <li>• Infographic Animations</li>
            </ul>
          </div>

          {/* 3. SOUND DESIGN */}
          <div
            className="service-card animate-stagger"
            style={{ animationDelay: "300ms" }}
          >
            <div className="text-5xl mb-4">🔊</div>
            <h3 className="text-2xl font-semibold mb-3">Sound Design</h3>
            <p className="text-white/70 text-lg mb-5 leading-relaxed">
              Audio that elevates visuals — immersive layers of emotion, clarity, and depth.
            </p>

            <ul className="space-y-2 text-white/60">
              <li>• Background Scoring</li>
              <li>• SFX & Foley</li>
              <li>• Audio Cleanup</li>
              <li>• Mixing & Mastering</li>
            </ul>
          </div>

          {/* 4. THUMBNAILS & VISUAL DESIGN */}
          <div
            className="service-card animate-stagger"
            style={{ animationDelay: "450ms" }}
          >
            <div className="text-5xl mb-4">🖼️</div>
            <h3 className="text-2xl font-semibold mb-3">Thumbnail & Visual Design</h3>
            <p className="text-white/70 text-lg mb-5 leading-relaxed">
              Scroll-stopping, high-conversion visuals tailored for YouTube & social media.
            </p>

            <ul className="space-y-2 text-white/60">
              <li>• High-impact Thumbnails</li>
              <li>• Social Cover Artwork</li>
              <li>• Branding Visuals</li>
            </ul>
          </div>

          {/* 5. COLOR GRADING */}
          <div
            className="service-card animate-stagger"
            style={{ animationDelay: "600ms" }}
          >
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-3">Colour Correction & Grading</h3>
            <p className="text-white/70 text-lg mb-5 leading-relaxed">
              Perfect tonal balance, cinematic color grading, and visual polish.
            </p>

            <ul className="space-y-2 text-white/60">
              <li>• Tone & Exposure Fix</li>
              <li>• Cinematic LUTs</li>
              <li>• Full Scene Grading</li>
            </ul>
          </div>

          {/* 6. FULL POST-PRODUCTION */}
          <div
            className="service-card animate-stagger"
            style={{ animationDelay: "750ms" }}
          >
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-3">Complete Post-Production</h3>
            <p className="text-white/70 text-lg mb-5 leading-relaxed">
              From raw footage to final master — everything handled with precision.
            </p>

            <ul className="space-y-2 text-white/60">
              <li>• Editing + Graphics + Audio</li>
              <li>• Repurposing Content</li>
              <li>• Final Master Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-28">
        <a
          href="/contact"
          className="inline-block px-14 py-4 rounded-full bg-[#eaeaea] text-black text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Your Project With Us ✨
        </a>
      </section>
    </main>
  );
}
