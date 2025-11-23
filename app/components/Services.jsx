"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* ---------------- PERFECT BLACK & WHITE SVG ICONS ---------------- */

function VideoIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="13" height="14" rx="2" />
      <path d="M16 9l5-3v12l-5-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
      <path d="M19 11l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
      <path d="M7 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}

function SoundIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M5 9v6h4l6 4V5l-6 4H5z" />
      <path d="M17 9a3 3 0 010 6" strokeLinecap="round" />
      <path d="M19 7a6 6 0 010 10" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path
        d="M12 3s4 4 4 8-2 8-4 8-4-4-4-8 4-8 4-8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function BrushIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M15 3l6 6-9 9H6v-6l9-9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h6" strokeLinecap="round" />
    </svg>
  );
}

function DesignIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <circle cx="8.5" cy="12" r="1.4" />
      <path d="M14 10l4 4" strokeLinecap="round" />
    </svg>
  );
}

function ColorIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v7l5 3" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19.4 15l.2 1.1-1.2 2.1-2.3-.5a8 8 0 01-1.7.9l-.4 2.3h-2.4l-.3-2.3a8 8 0 01-1.8-.9l-2.2.5-1.2-2.1.2-1.1 1.9-1.6v-2.8l-1.9-1.5-.2-1.1 1.2-2.1 2.2.5a8 8 0 011.8-.9l.3-2.3h2.4l.4 2.3a8 8 0 011.7.9l2.3-.5 1.2 2.1-.2 1.1-1.9 1.5v2.8l1.9 1.6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ---------------- MAIN SERVICES SECTION ---------------- */

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const floatIconRefs = useRef([]);

  const addCardRef = (el) => el && cardRefs.current.push(el);
  const addFloatRef = (el) => el && floatIconRefs.current.push(el);

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

  /* ---------------- GSAP Animations ---------------- */
  useEffect(() => {
    const heading = sectionRef.current.querySelector(".services-heading");

    gsap.fromTo(
      heading,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    /* Floating Icons */
    gsap.to(floatIconRefs.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.6,
      stagger: 0.18,
    });

    /* Service Cards Reveal */
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-28 px-6">
      {/* ---------- HEADING ---------- */}
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
            <div
              key={i}
              ref={addFloatRef}
              className="p-4 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md"
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- SERVICES GRID ---------- */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            ref={addCardRef}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition relative group backdrop-blur-xl"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#eaeaea]/15 to-transparent"></div>

            {/* Icon */}
            <div className={item.float ? "animate-bounce-slow mb-6" : "animate-pop-slow mb-6"}>
              <item.Icon className="w-16 h-16 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#eaeaea]">{item.title}</h3>
            <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ---------- CTA ---------- */}
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
