"use client";

import { useRef, useEffect } from "react";

export default function WorkPage() {
  const projects = [
  { title: "Acharya Promo Edit", tag: "Commercial Edit", emoji: "🎞️", video: "/video/Acharaya.mp4" },
  { title: "Glow Product Ad", tag: "Product Advertisement", emoji: "✨", video: "/video/Glow.mp4" },
  { title: "Glowtime Energy Edit", tag: "High Energy Edit", emoji: "⚡", video: "/video/Glowtime.mp4" },
  { title: "JioMart Creative Edit", tag: "Branding Edit", emoji: "🛒", video: "/video/JioMart.mp4" },
  { title: "The Booyah Gaming Edit", tag: "Gaming Edit", emoji: "🔥", video: "/video/TheBooyah.mp4" },
  { title: "Veet Ad Film Edit", tag: "Commercial Video", emoji: "📽️", video: "/video/Veet.mp4" },

  // Your previous additions
  { title: "The Art of Hand", tag: "Commercial Video", emoji: "🎨", video: "/video/arthand.mp4" },
  { title: "Deco Product Edit", tag: "Commercial Video", emoji: "🎨", video: "/video/Deco.mp4" },
  { title: "Decoy Product Edit", tag: "Commercial Video", emoji: "🎨", video: "/video/Decoy.mp4" },
  { title: "Vidya Educational Edit", tag: "Educational Video", emoji: "📘", video: "/video/Vidya.mp4" },

  // ------------ ALL OTHER VIDEOS ADDED BELOW ------------

  { title: "1905 Render Cinematic", tag: "3D Render", emoji: "🎬", video: "/video/1905_render comp.mp4" },
  { title: "ArtAttack Test Shot", tag: "Test Edit", emoji: "🧪", video: "/video/ArtAttack_Test.mp4" },
  { title: "Bagel Product Cinematic", tag: "Food Commercial", emoji: "🥯", video: "/video/Bagel.mp4" },
  { title: "Bagels Food Edit", tag: "Food Edit", emoji: "🍽️", video: "/video/Bagels.mp4" },
  { title: "Balloon Render VFX", tag: "3D VFX", emoji: "🎈", video: "/video/balloon-rendered5_FullHD.mp4" },
  { title: "Building Promo Edit", tag: "Commercial Edit", emoji: "🏢", video: "/video/buyilding comp.mp4" },
  { title: "Car Scene Cinematic", tag: "Automobile Edit", emoji: "🚗", video: "/video/Car_Scene.mp4" },
  { title: "Chocoad Brand Edit", tag: "Food Branding", emoji: "🍫", video: "/video/choc.mp4" },
  { title: "CM Final Edit", tag: "Professional Edit", emoji: "🎞️", video: "/video/CM_Final comp.mp4" },
  { title: "Coffee Machine Ad", tag: "Product Ad", emoji: "☕", video: "/video/coffeemachine.mp4" },
  { title: "Composition Breakdown", tag: "Composition Edit", emoji: "🎛️", video: "/video/Comp_1.mp4" },
  { title: "Comp Edit", tag: "Edit Breakdown", emoji: "🧩", video: "/video/Comp.mp4" },
  { title: "Dew Feedback Edit", tag: "Commercial Edit", emoji: "💧", video: "/video/Dew_compfeedback comp.mp4" },
  { title: "Drift Car Edit", tag: "Automobile Edit", emoji: "🏎️", video: "/video/Drift Comp.mp4" },
  { title: "Flash Logo Animation", tag: "Motion Graphics", emoji: "⚡", video: "/video/flash_logo comp.mp4" },
  { title: "Flower Cinematic Edit", tag: "Aesthetic Edit", emoji: "🌸", video: "/video/flower.mp4" },
  { title: "Gravity Motion Edit", tag: "Dynamic Motion", emoji: "🌀", video: "/video/GRAVITY.mp4" },
  { title: "Honey Product Edit", tag: "Food Ad", emoji: "🍯", video: "/video/honey.mp4" },
  { title: "Maquiplus Landscape", tag: "Commercial Edit", emoji: "🌄", video: "/video/maquiplus_landscape comp.mp4" },
  { title: "Miami Travel Edit", tag: "Travel Video", emoji: "🌴", video: "/video/miami.mp4" },
  { title: "Monaco Cinematic Travel", tag: "Travel Edit", emoji: "🌊", video: "/video/monaco.mp4" },
  { title: "Rocks Nature Edit", tag: "Nature Video", emoji: "🪨", video: "/video/rocks.mp4" },
  { title: "Solid Render 3D", tag: "3D Rendering", emoji: "📦", video: "/video/solidrender comp.mp4" },
  { title: "Samosa Food Ad", tag: "Food Advertising", emoji: "🥟", video: "/video/samosa.mp4" },
  { title: "Tokyo Street Edit", tag: "Travel Edit", emoji: "🗼", video: "/video/tokyo.mp4" }
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

        <div className="flex justify-center gap-6 mt-10">
          <span className="emoji-badge animate-float delay-0">🎞️</span>
          <span className="emoji-badge animate-pop delay-150">✨</span>
          <span className="emoji-badge animate-float delay-300">🎧</span>
          <span className="emoji-badge animate-pop delay-450">🔥</span>
          <span className="emoji-badge animate-float delay-600">📽️</span>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="w-full px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((item, index) => (
            <div
              key={index}
              className="project-card animate-stagger"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectVideoCard item={item} />

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

/* ---------------- VIDEO CARD COMPONENT ---------------- */

function ProjectVideoCard({ item }) {
  const videoRef = useRef(null);

  /* DESKTOP BEHAVIOR (HOVER AUDIO + RESTART) */
  const handleEnter = () => {
    if (videoRef.current && window.innerWidth > 768) {
      videoRef.current.currentTime = 0;   // restart
      videoRef.current.muted = false;     // unmute
      videoRef.current.volume = 1;        // full volume
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (videoRef.current && window.innerWidth > 768) {
      videoRef.current.muted = true;      // mute
      videoRef.current.volume = 0;        // no sound
    }
  };

  /* MOBILE SCROLL BEHAVIOR (AUTO AUDIO LIKE INSTAGRAM) */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting;

          if (window.innerWidth <= 768) {
            if (visible) {
              video.muted = false;         // audio ON
              video.volume = 1;
              video.play();
            } else {
              video.muted = true;          // audio OFF
              video.volume = 0;
            }
          }
        });
      },
      { threshold: 0.6 } // 60% visible = active
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="project-thumb relative cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={videoRef}
        src={item.video}
        className="w-full h-96 object-cover rounded-2xl shadow-xl"
        muted
        autoPlay
        loop
        playsInline
      />
    </div>
  );
}
