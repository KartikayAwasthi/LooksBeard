"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* ---------------- ICONS (Black & White SVG) ---------------- */
function VideoIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M3 6h12v12H3z" />
      <path d="M15 10l6-3v10l-6-3" />
    </svg>
  );
}
function FlameIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3C12 3 16 7 16 11C16 15 14 19 12 19C10 19 8 15 8 11C8 7 12 3 12 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function BrushIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      <path
        d="M15 3l6 6-9 9H6v-6l9-9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20h6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" />
    </svg>
  );
}
function SoundIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M5 9v6h4l5 4V5l-5 4H5z" />
      <path d="M16 9a3 3 0 010 6" />
      <path d="M18 7a6 6 0 010 10" />
    </svg>
  );
}
function DesignIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="12" r="1.5" />
      <path d="M14 10l4 4" />
    </svg>
  );
}
function ColorIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v7l5 3" />
    </svg>
  );
}
function GearIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M19.4 15a1 1 0 01.2 1.1l-1.2 2.1a1 1 0 01-1 .5l-2.3-.5a8 8 0 01-1.7.9l-.4 2.3a1 1 0 01-1 .8h-2.4a1 1 0 01-1-.8l-.3-2.3a8 8 0 01-1.8-.9l-2.2.5a1 1 0 01-1-.5l-1.2-2.1a1 1 0 01.2-1.1l1.9-1.6v-2.8L4 9.6a1 1 0 01-.2-1.1L5 6.4a1 1 0 011-.5l2.2.5a8 8 0 011.8-.9l.3-2.3a1 1 0 011-.8h2.4a1 1 0 011 .8l.4 2.3a8 8 0 011.7.9L17.4 6a1 1 0 011 .5l1.2 2.1a1 1 0 01-.2 1.1l-1.8 1.6v2.8l1.8 1.5z" />
    </svg>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const emojiRefs = useRef([]);

  const addCardRef = (el) => el && !cardRefs.current.includes(el) && cardRefs.current.push(el);
  const addEmojiRef = (el) => el && !emojiRefs.current.includes(el) && emojiRefs.current.push(el);

  const items = [
    {
      Icon: VideoIcon,
      title: "Cinematic Video Editing",
      desc: "Cuts, pacing, transitions, storytelling—everything crafted frame-by-frame.",
      float: true,
    },
    {
      Icon: SparklesIcon,
      title: "Motion Graphics",
      desc: "Logo animation, explainer videos, UI motion, kinetic typography.",
      float: false,
    },
    {
      Icon: SoundIcon,
      title: "Sound Design",
      desc: "SFX, Foley, mixing, mastering, atmosphere building & cleanups.",
      float: true,
    },
    {
      Icon: DesignIcon,
      title: "Thumbnail & Visual Design",
      desc: "High-conversion thumbnails & scroll-stopping social visuals.",
      float: false,
    },
    {
      Icon: ColorIcon,
      title: "Colour Grading",
      desc: "Tone, exposure, cinematic LUTs, mood & visual polish.",
      float: true,
    },
    {
      Icon: GearIcon,
      title: "Full Post-Production",
      desc: "Editing + graphics + audio + mastering—start to finish.",
      float: false,
    },
  ];

  useEffect(() => {
    // HEADING ANIMATION
    gsap.fromTo(
      sectionRef.current.querySelector(".services-heading"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // FLOATING ICONS IN HEADING
    gsap.to(emojiRefs.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
      stagger: 0.2,
    });

    // SERVICE CARD REVEAL
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, scale: 0.85, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Card 3D tilt hover
    cardRefs.current.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          rotateY: x * 0.05,
          rotateX: -y * 0.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 px-6">

      {/* ===========================
          HEADING
      ============================ */}
      <div className="text-center mb-20">
        <h2 className="services-heading text-5xl md:text-6xl font-extrabold text-[#eaeaea]">
          Our Services
        </h2>

        <p className="text-white/70 text-xl max-w-3xl mx-auto mt-6">
          Everything you need to bring your content alive with cinematic precision  
          and creative excellence.
        </p>

        {/* Floating Icons */}
        <div className="flex justify-center gap-6 mt-10">
          {[VideoIcon, SparklesIcon, SoundIcon, FlameIcon, BrushIcon].map((Icon, i) => (
            <span
              key={i}
              ref={addEmojiRef}
              className="px-5 py-3 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center"
            >
              <Icon className="w-8 h-8 text-white" />
            </span>
          ))}
        </div>
      </div>

      {/* ===========================
          SERVICES GRID
      ============================ */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            ref={addCardRef}
            className="rounded-3xl p-10 bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition relative group backdrop-blur-xl"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#eaeaea]/20 to-transparent rounded-3xl"></div>

            {/* ICON */}
            <div
              className={`mb-6 ${item.float ? "animate-bounce-slow" : "animate-pop-slow"}`}
            >
              <item.Icon className="w-16 h-16 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#eaeaea]">{item.title}</h3>

            <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <a
          href="/contact"
          className="inline-block px-14 py-4 bg-[#eaeaea] text-black rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition"
        >
          Start Your Project 
        </a>
      </div>
    </section>
  );
}
