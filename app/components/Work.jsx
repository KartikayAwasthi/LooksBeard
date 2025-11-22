// WorkPage.jsx
"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const projects = [
    { title: "1905 Render Cinematic", tag: "3D Render", emoji: "🎬", video: "/video/1905_rendercomp.mp4" },
    { title: "Acharya Promo Edit", tag: "Commercial Edit", emoji: "🎞️", video: "/video/Acharaya.mp4" },
    { title: "ArtAttack Test Shot", tag: "Test Edit", emoji: "🧪", video: "/video/ArtAttack_Test.mp4" },
    { title: "Art Hand Edit", tag: "Commercial Edit", emoji: "🎨", video: "/video/arthand.mp4" },
    { title: "Bagel Product Edit", tag: "Food Commercial", emoji: "🥯", video: "/video/Bagel.mp4" },
    { title: "Bagels Food Edit", tag: "Food Edit", emoji: "🍽️", video: "/video/Bagels.mp4" },
    { title: "Balloon Render VFX", tag: "3D VFX", emoji: "🎈", video: "/video/balloon-rendered5_FullHD.mp4" },
    { title: "Building Promo Edit", tag: "Commercial Edit", emoji: "🏢", video: "/video/buyildingcomp.mp4" },
    { title: "Car Scene Cinematic", tag: "Automobile Edit", emoji: "🚗", video: "/video/Car_Scene.mp4" },
    { title: "Chocolate Ad Edit", tag: "Food Branding", emoji: "🍫", video: "/video/choc.mp4" },
    { title: "CM Final Edit", tag: "Professional Edit", emoji: "🎞️", video: "/video/CM_Finalcomp.mp4" },
    { title: "Coffee Machine Ad", tag: "Product Ad", emoji: "☕", video: "/video/coffeemachine.mp4" },
    { title: "Composition Edit 1", tag: "Composition Edit", emoji: "🎛️", video: "/video/Comp_1.mp4" },
    { title: "Composition Edit 2", tag: "Edit Breakdown", emoji: "🧩", video: "/video/Comp.mp4" },
    { title: "Deco Product Edit", tag: "Commercial Edit", emoji: "🎨", video: "/video/Deco.mp4" },
    { title: "Decoy Product Edit", tag: "Commercial Edit", emoji: "🎨", video: "/video/Decoy.mp4" },
    { title: "Dew Feedback Edit", tag: "Commercial Edit", emoji: "💧", video: "/video/Dew_compfeedbackcomp.mp4" },
    { title: "Drift Car Edit", tag: "Automobile Edit", emoji: "🏎️", video: "/video/DriftComp.mp4" },
    { title: "Flash Logo Animation", tag: "Motion Graphics", emoji: "⚡", video: "/video/flash_logocomp.mp4" },
    { title: "Flower Cinematic Edit", tag: "Aesthetic Edit", emoji: "🌸", video: "/video/flower.mp4" },
    { title: "Glow Edit", tag: "Creative Edit", emoji: "✨", video: "/video/Glow.mp4" },
    { title: "Glowtime Energy Edit", tag: "High Energy Edit", emoji: "⚡", video: "/video/Glowtime.mp4" },
    { title: "Gravity Motion Edit", tag: "Dynamic Motion", emoji: "🌀", video: "/video/GRAVITY.mp4" },
    { title: "Honey Product Ad", tag: "Food Ad", emoji: "🍯", video: "/video/honey.mp4" },
    { title: "JioMart Creative Edit", tag: "Branding Edit", emoji: "🛒", video: "/video/JioMart.mp4" },
    { title: "Maquiplus Landscape Ad", tag: "Commercial Edit", emoji: "🌄", video: "/video/maquiplus_landscapecomp.mp4" },
    { title: "Miami Travel Edit", tag: "Travel Video", emoji: "🌴", video: "/video/miami.mp4" },
    { title: "Monaco Travel Edit", tag: "Travel Video", emoji: "🌊", video: "/video/monaco.mp4" },
    { title: "Rocks Nature Edit", tag: "Nature Video", emoji: "🪨", video: "/video/rocks.mp4" },
    { title: "Samosa Food Ad", tag: "Food Advertising", emoji: "🥟", video: "/video/samosa.mp4" },
    { title: "Solid Render 3D", tag: "3D Rendering", emoji: "📦", video: "/video/solidrendercomp.mp4" },
    { title: "The Booyah Gaming Edit", tag: "Gaming Edit", emoji: "🔥", video: "/video/TheBooyah.mp4" },
    { title: "Tokyo Street Edit", tag: "Travel Edit", emoji: "🗼", video: "/video/tokyo.mp4" },
    { title: "Veet Ad Film Edit", tag: "Commercial Video", emoji: "📽️", video: "/video/Veet.mp4" },
    { title: "Vidya Educational Edit", tag: "Educational Video", emoji: "📘", video: "/video/Vidya.mp4" }
  ];

  const containerRef = useRef(null);
  const gridItemsRef = useRef([]); // DOM refs for cards
  const videoRefs = useRef([]); // DOM refs for video elements
  const [userInteracted, setUserInteracted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // show only first 6 initially
  const [expanded, setExpanded] = useState(false);

  // Track user gesture for unmute
  useEffect(() => {
    const onInteract = () => setUserInteracted(true);
    window.addEventListener("click", onInteract);
    window.addEventListener("touchstart", onInteract);
    return () => {
      window.removeEventListener("click", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
  }, []);

  // GSAP: hero + initial reveal + scroll trigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-hero", { y: 28, opacity: 0, duration: 0.75, ease: "power3.out" });
      gsap.from(".emoji-badge", { scale: 0.6, opacity: 0, stagger: 0.06, duration: 0.45, ease: "back.out(1.4)" });

      // initial grid reveal (only visibleCount items will be in DOM visually)
      gsap.fromTo(
        ".project-card",
        { y: 16, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: { each: 0.06, from: "start" },
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // set refs arrays length
  gridItemsRef.current = [];
  videoRefs.current = [];

  // Lazy loader for videos (for items beyond first 6)
  useEffect(() => {
    if (typeof window === "undefined") return;
    let observer = null;
    // Only create observer if there are lazy videos (data-src)
    const lazyVideos = Array.from(document.querySelectorAll("video[data-src]"));
    if (lazyVideos.length === 0) return;

    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const v = entry.target;
            const src = v.getAttribute("data-src");
            if (src) {
              v.src = src;
              v.removeAttribute("data-src");
              // load metadata then play muted on mobile if needed
              v.preload = "metadata";
              // try to play if visible on mobile
              if (window.innerWidth <= 768) {
                v.muted = true;
                v.volume = 0;
                v.play().catch(() => {});
              }
            }
            obs.unobserve(v);
          }
        });
      },
      { root: null, rootMargin: "300px", threshold: 0.15 }
    );

    lazyVideos.forEach((v) => observer.observe(v));
    return () => observer && observer.disconnect();
  }, [expanded]); // run after expand toggles (so newly revealed videos get observed)

  // When clicking View More, reveal rest with a brutal pop animation and register observers
  const handleViewMore = () => {
    if (expanded) return;
    setExpanded(true);
    setVisibleCount(projects.length);

    // run pop animation on newly visible cards after next paint
    requestAnimationFrame(() => {
      const newly = gridItemsRef.current.slice(6); // elements beyond first 6
      gsap.fromTo(
        newly,
        { scale: 0.92, opacity: 0, y: 14 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: { each: 0.06 },
          duration: 0.36,
          ease: "power4.out"
        }
      );
      // also lazy-load any that are already in viewport by triggering the lazy loader effect via state change (expanded)
    });
  };

  return (
    <main className="pt-24 pb-28 w-full min-h-screen bg-black text-white" ref={containerRef}>
      {/* HERO */}
      <section className="text-center mb-14 px-6">
        <h1 className="work-hero text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="inline-block mr-3">Our Work</span>
          <span className="inline-block glow-text">🎬</span>
          <span className="ml-3 text-[#FAF0DB] text-lg font-medium">Viral Reels Grid</span>
        </h1>

        <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto mt-4">
          A curated collection of edits, animations, and reel-ready video work — optimized for modern screens.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <span className="emoji-badge px-3 py-1 rounded-full bg-white/5 text-2xl">🎞️</span>
          <span className="emoji-badge px-3 py-1 rounded-full bg-white/5 text-2xl">✨</span>
          <span className="emoji-badge px-3 py-1 rounded-full bg-white/5 text-2xl">🔥</span>
          <span className="emoji-badge px-3 py-1 rounded-full bg-white/5 text-2xl">📽️</span>
        </div>

        {!userInteracted && (
          <div className="mx-auto max-w-xl text-center text-sm text-white/60 bg-white/3 rounded-xl px-4 py-2 mt-6">
            Tip: Tap anywhere once to enable audio on hover (desktop) or to unmute videos.
          </div>
        )}
      </section>

      {/* PROJECTS GRID */}
      <section className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {projects.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              ref={(el) => (gridItemsRef.current[index] = el)}
              className="project-card rounded-2xl overflow-hidden bg-gradient-to-br from-white/4 to-white/2 shadow-2xl border border-white/5 transform-gpu will-change-transform"
              style={{ transition: "box-shadow 300ms" }}
            >
              <ProjectVideoCard
                item={item}
                index={index}
                userInteracted={userInteracted}
                videoRef={(el) => (videoRefs.current[index] = el)}
                isLazy={index >= 6} // first 6 are immediate; others are lazy
              />
              <div className="p-4 md:p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-wider text-[#FAF0DB]">
                    {item.tag} <span className="ml-2">{item.emoji}</span>
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mt-3 text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (only show if not expanded and more items exist) */}
        {!expanded && projects.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FAF0DB] text-black font-semibold text-base shadow-2xl transform-gpu hover:scale-105 transition"
              aria-expanded={expanded}
            >
              View More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l6 7-6 7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <div className="w-full text-center mt-12">
        <a
          href="/contact"
          className="inline-block px-10 py-3 rounded-full bg-[#FAF0DB] text-black font-semibold text-base shadow-2xl hover:scale-105 transform transition"
        >
          Work With Us ✨
        </a>
      </div>

      {/* small style tweaks */}
      <style jsx>{`
        .glow-text {
          color: #faf0db;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.03),
            0 6px 30px rgba(250,240,219,0.06),
            0 2px 8px rgba(250,240,219,0.08);
        }
        .emoji-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #faf0db;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(6px);
        }
        .project-card:hover { box-shadow: 0 30px 60px rgba(0,0,0,0.6); }
      `}</style>
    </main>
  );
}

/* ---------------- VIDEO CARD COMPONENT ---------------- */

function ProjectVideoCard({ item, index, userInteracted, videoRef, isLazy }) {
  const localVideoRef = useRef(null);

  // combine refs: store local and propagate to parent via callback
  useEffect(() => {
    if (typeof videoRef === "function") videoRef(localVideoRef.current);
  }, [videoRef]);

  // Desktop hover: play (muted first) then unmute only if userInteracted true
  const handleEnter = async () => {
    const video = localVideoRef.current;
    if (!video || window.innerWidth <= 768) return;

    video.currentTime = 0;
    video.muted = true;
    video.volume = 0;
    try {
      await video.play();
      if (userInteracted) {
        video.muted = false;
        video.volume = 1;
      } else {
        video.muted = true;
      }
    } catch (err) {
      // ignore play permission errors
      video.muted = true;
    }
  };

  const handleLeave = () => {
    const video = localVideoRef.current;
    if (!video || window.innerWidth <= 768) return;
    video.muted = true;
    video.volume = 0;
  };

  // Mobile intersection observer for autoplay/pause (muted)
  useEffect(() => {
    const video = localVideoRef.current;
    if (!video) return;

    if (window.innerWidth <= 768) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              // if video still has data-src (lazy), let the page-level lazy observer set src
              if (!video.src && video.dataset && video.dataset.src) {
                // do nothing; page-level observer will set src then play
              } else {
                video.muted = true;
                video.volume = 0;
                try {
                  await video.play();
                } catch (e) {}
              }
            } else {
              try {
                video.pause();
              } catch (e) {}
            }
          });
        },
        { threshold: 0.6 }
      );

      obs.observe(video);
      return () => obs.disconnect();
    } else {
      // Desktop: ensure paused initially
      try {
        video.pause();
      } catch (e) {}
    }
  }, []);

  // Render: first 6 have src; lazy ones get data-src
  const videoProps = isLazy
    ? { "data-src": item.video, preload: "none" }
    : { src: item.video, preload: "metadata", autoPlay: typeof window !== "undefined" && window.innerWidth <= 768 };

  return (
    <div
      className="project-thumb relative w-full h-64 md:h-72 lg:h-80 bg-black/30 cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
    >
      <video
        ref={localVideoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        {...videoProps}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-black/40 text-xs text-[#FAF0DB] backdrop-blur-sm">
        {item.emoji}
      </div>

      <div className="absolute right-3 bottom-3 px-2 py-1 rounded-md bg-black/40 text-xs text-white/80 hidden sm:inline-flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M5 3v18l15-9L5 3z" fill="#fff" />
        </svg>
        <span className="text-xs">Preview</span>
      </div>
    </div>
  );
}
