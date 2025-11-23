"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Film,
  Clapperboard,
  Sparkles,
  Flame,
  Video as VideoIcon,
  Play,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const projects = [
    { title: "1905 Render Comp", tag: "Video", emoji: "🎬", video: "/video/1905_rendercomp.mp4" },
    { title: "Acharya", tag: "Video", emoji: "🎬", video: "/video/Acharaya.mp4" },
    { title: "ArtAttack Test", tag: "Video", emoji: "🎬", video: "/video/ArtAttack_Test.mp4" },
    { title: "Anthnd", tag: "Video", emoji: "🎬", video: "/video/arthand.mp4" },
    { title: "Bagel", tag: "Video", emoji: "🎬", video: "/video/Bagel.mp4" },
    { title: "Bagels", tag: "Video", emoji: "🎬", video: "/video/Bagels.mp4" },
    { title: "Bagels Preparation", tag: "Video", emoji: "🎬", video: "/video/Bagelspreparatio.mp4" },
    { title: "Balloon Rendered 5 FullHD", tag: "Video", emoji: "🎬", video: "/video/balloon-rendered5_FullHD.mp4" },
    { title: "Building Comp", tag: "Video", emoji: "🎬", video: "/video/buildingcomp.mp4" },
    { title: "Car Scene 4", tag: "Video", emoji: "🎬", video: "/video/Car_Scene_4.mp4" },
    { title: "Choco", tag: "Video", emoji: "🎬", video: "/video/choc.mp4" },
    { title: "CM Final Comp", tag: "Video", emoji: "🎬", video: "/video/CM_Finalcomp.mp4" },
    { title: "Coffee Machine", tag: "Video", emoji: "🎬", video: "/video/coffeemachine.mp4" },
    { title: "Comp 1", tag: "Video", emoji: "🎬", video: "/video/Comp_1.mp4" },
    { title: "Comp", tag: "Video", emoji: "🎬", video: "/video/Comp.mp4" },
    { title: "Deco", tag: "Video", emoji: "🎬", video: "/video/Deco.mp4" },
    { title: "Dew Comp Feedback Comp", tag: "Video", emoji: "🎬", video: "/video/Dew_compfeedbackcomp.mp4" },
    { title: "Drift Comp", tag: "Video", emoji: "🎬", video: "/video/DriftComp.mp4" },
    { title: "Fish Logo Comp", tag: "Video", emoji: "🎬", video: "/video/fish_logocomp.mp4" },
    { title: "Flower", tag: "Video", emoji: "🎬", video: "/video/flower.mp4" },
    { title: "Glow", tag: "Video", emoji: "🎬", video: "/video/Glow.mp4" },
    { title: "Glowlime", tag: "Video", emoji: "🎬", video: "/video/Glowlime.mp4" },
    { title: "Gravity", tag: "Video", emoji: "🎬", video: "/video/GRAVITY.mp4" },
    { title: "Honey", tag: "Video", emoji: "🎬", video: "/video/honey.mp4" },

    { title: "JioMart Delivers 1", tag: "Video", emoji: "🎬", video: "/video/JioMart_Delivers.mp4" },
    { title: "JioMart Delivers 2", tag: "Video", emoji: "🎬", video: "/video/JioMart-Delivers.mp4" },
    { title: "JioMart", tag: "Video", emoji: "🎬", video: "/video/JioMart.mp4" },
    { title: "JioMart Deliveries", tag: "Video", emoji: "🎬", video: "/video/JioMartDelivers.mp4" },
    { title: "Jio Martgives", tag: "Video", emoji: "🎬", video: "/video/JioMartgives.mp4" },

    { title: "Logo Animation", tag: "Video", emoji: "🎬", video: "/video/logo-animation.MP4" },
    { title: "Maquipulus Landscape Comp", tag: "Video", emoji: "🎬", video: "/video/maquipulus_landscapecomp.mp4" },

    { title: "Miami", tag: "Video", emoji: "🎬", video: "/video/miami.mp4" },

    { title: "Moena Occasion", tag: "Video", emoji: "🎬", video: "/video/MoenaOccasion.mp4" },
    { title: "Moena Your", tag: "Video", emoji: "🎬", video: "/video/MoenaYour.mp4" },
    { title: "Monaco", tag: "Video", emoji: "🎬", video: "/video/monaco.mp4" },

    { title: "Nep 1", tag: "Video", emoji: "🎬", video: "/video/nep1.mp4" },
    { title: "Nep 2", tag: "Video", emoji: "🎬", video: "/video/nep2.mp4" },
    { title: "Nep 3", tag: "Video", emoji: "🎬", video: "/video/nep3.mp4" },
    { title: "Nep 4", tag: "Video", emoji: "🎬", video: "/video/nep4.mp4" },
    { title: "Nep 5", tag: "Video", emoji: "🎬", video: "/video/nep5.mp4" },

    { title: "Nipun", tag: "Video", emoji: "🎬", video: "/video/Nipunmp4" },
    { title: "Novo JoMart", tag: "Video", emoji: "🎬", video: "/video/NovoJiomart.mp4" },

    { title: "Prodigy", tag: "Video", emoji: "🎬", video: "/video/Prodigy.mp4" },
    { title: "Prodigy Bedroom", tag: "Video", emoji: "🎬", video: "/video/ProdigyBedroom.mp4" },

    { title: "Rocks", tag: "Video", emoji: "🎬", video: "/video/rocks.mp4" },
    { title: "Samosa", tag: "Video", emoji: "🎬", video: "/video/samosa.mp4" },

    { title: "Sky", tag: "Video", emoji: "🎬", video: "/video/Sky.mp4" },

    { title: "Solid Render Comp", tag: "Video", emoji: "🎬", video: "/video/solidrendercomp.mp4" },
    { title: "TheBooyah", tag: "Video", emoji: "🎬", video: "/video/TheBooyah.mp4" },
    { title: "Tokyo", tag: "Video", emoji: "🎬", video: "/video/tokyo.mp4" },

    { title: "TQH Media", tag: "Video", emoji: "🎬", video: "/video/TQHMedia.mp4" },
    { title: "Veet", tag: "Video", emoji: "🎬", video: "/video/Veet.mp4" },
    { title: "Vidya", tag: "Video", emoji: "🎬", video: "/video/Vidya.mp4" },
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
            start: "top 85%",
          },
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
          ease: "power4.out",
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
          <span className="inline-block glow-text">
            {/* replaced emoji with film icon */}
            <Film className="inline-block w-10 h-10 align-middle text-[#eaeaea]" />
          </span>
          <span className="ml-3 text-[#eaeaea] text-lg font-medium">Viral Reels Grid</span>
        </h1>

        <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto mt-4">
          A curated collection of edits, animations, and reel-ready video work — optimized for modern screens.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <div className="emoji-badge p-2 rounded-full bg-white/5">
            <Clapperboard className="w-5 h-5 text-[#eaeaea]" />
          </div>
          <div className="emoji-badge p-2 rounded-full bg-white/5">
            <Sparkles className="w-5 h-5 text-[#eaeaea]" />
          </div>
          <div className="emoji-badge p-2 rounded-full bg-white/5">
            <Flame className="w-5 h-5 text-[#eaeaea]" />
          </div>
          <div className="emoji-badge p-2 rounded-full bg-white/5">
            <VideoIcon className="w-5 h-5 text-[#eaeaea]" />
          </div>
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
                  <div className="flex items-center gap-2 text-[#eaeaea]">
                    <Film className="w-4 h-4 text-[#eaeaea]" />
                    <span className="text-sm uppercase tracking-wider">{item.tag}</span>
                  </div>
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
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#eaeaea] text-black font-semibold text-base shadow-2xl transform-gpu hover:scale-105 transition"
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
          className="inline-block px-10 py-3 rounded-full bg-[#eaeaea] text-black font-semibold text-base shadow-2xl hover:scale-105 transform transition"
        >
          Work With Us 
        </a>
      </div>

      {/* small style tweaks */}
      <style jsx>{`
        .glow-text {
          color: #eaeaea;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.03),
            0 6px 30px rgba(250,240,219,0.06),
            0 2px 8px rgba(250,240,219,0.08);
        }
        .emoji-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #eaeaea;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(6px);
        }
        .project-card:hover { box-shadow: 0 30px 60px rgba(0,0,0,0.6); }
      `}</style>
    </main>
  );
}

/* ---------------- VIDEO CARD COMPONENT (UPDATED WITH LOADER) ---------------- */

function ProjectVideoCard({ item, index, userInteracted, videoRef, isLazy }) {
  const localVideoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // expose ref to parent
  useEffect(() => {
    if (typeof videoRef === "function") videoRef(localVideoRef.current);
  }, [videoRef]);

  /* ---------------------- VIDEO LOADER ---------------------- */
  useEffect(() => {
    const video = localVideoRef.current;
    if (!video) return;

    const onLoaded = () => setLoading(false);
    const onStart = () => setLoading(false);

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("playing", onStart);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("playing", onStart);
    };
  }, []);

  /* ---------------------- DESKTOP HOVER PLAY ---------------------- */
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
      }
    } catch (e) {
      video.muted = true;
    }
  };

  const handleLeave = () => {
    const video = localVideoRef.current;
    if (!video || window.innerWidth <= 768) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;
    video.volume = 0;
  };

  /* ---------------------- MOBILE AUTOPLAY + PAUSE ---------------------- */
  useEffect(() => {
    const video = localVideoRef.current;
    if (!video) return;

    if (window.innerWidth <= 768) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              video.muted = true;
              try { await video.play(); } catch (e) {}
            } else {
              try { video.pause(); } catch (e) {}
            }
          });
        },
        { threshold: 0.55 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  const videoProps = isLazy
    ? { "data-src": item.video, preload: "none" }
    : { src: item.video, preload: "metadata" };

  return (
    <div
      className="project-thumb relative w-full h-64 md:h-72 lg:h-80 bg-black/30 cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
    >
      {/* LOADER */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
          <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={localVideoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        {...videoProps}
      />

      {/* OVERLAYS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-black/40 text-xs text-[#eaeaea] backdrop-blur-sm">
        {/* small icon badge (replaced emoji) */}
        <Clapperboard className="w-4 h-4 inline-block" />
      </div>

      <div className="absolute right-3 bottom-3 px-2 py-1 rounded-md bg-black/40 text-xs text-white/80 hidden sm:inline-flex items-center gap-2">
        <Play className="w-3 h-3" />
        <span className="text-xs">Preview</span>
      </div>
    </div>
  );
}
