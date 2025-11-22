"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const fadeRefs = useRef([]);
  const slideRefs = useRef([]);
  const emojiRefs = useRef([]);
  const parallaxImageRef = useRef(null);

  // Push ref helper
  const addToFade = (el) => el && !fadeRefs.current.includes(el) && fadeRefs.current.push(el);
  const addToSlide = (el) => el && !slideRefs.current.includes(el) && slideRefs.current.push(el);
  const addToEmoji = (el) => el && !emojiRefs.current.includes(el) && emojiRefs.current.push(el);

  useEffect(() => {
    // HERO EMOJI FLOAT ANIMATION
    gsap.to(emojiRefs.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    // FADE UP ELEMENTS
    fadeRefs.current.forEach((box) => {
      gsap.fromTo(
        box,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
          },
        }
      );
    });

    // SLIDE-IN ELEMENTS LEFT/RIGHT ALTERNATING
    slideRefs.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
          },
        }
      );
    });

    // PARALLAX STUDIO IMAGE
    gsap.fromTo(
      parallaxImageRef.current,
      { scale: 1.2, y: -40 },
      {
        scale: 1,
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full">

      {/* ===========================
          HERO — WITH EMOJI FLOAT & FADE
      ============================ */}
      <div
        ref={addToFade}
        className="relative h-[70vh] w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-black to-[#0a0a0a]" />

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#eaeaea] tracking-tight">
            We Create Cinematic Magic 🎬
          </h1>

          <p className="text-white/70 text-xl max-w-3xl mx-auto mt-6">
            Looksbeard Productions delivers high-end cinematic edits, emotional storytelling,
            and visually stunning motion design crafted with precision.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            {["🎞️", "✨", "🎧", "🔥", "🖌️"].map((emoji, i) => (
              <span
                key={i}
                ref={addToEmoji}
                className="px-4 py-3 bg-white/10 text-2xl rounded-xl border border-white/10"
              >
                {emoji}
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
        <div ref={addToSlide} className="p-16 bg-[#0c0c0c] border-y border-white/10">
          <h2 className="text-4xl md:text-5xl text-[#eaeaea] font-bold mb-6">
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

        {/* RIGHT — PARALLAX STUDIO IMAGE */}
        <div
          ref={addToSlide}
          className="relative h-full overflow-hidden border-y border-white/10 bg-[#111]"
        >
          <img
            ref={parallaxImageRef}
            src="/studio.jpg"
            className="w-full h-full object-cover scale-110"
            alt="Studio Image"
          />
        </div>
      </div>

      {/* ===========================
          SECTION 3 — MISSION + VISION
      ============================ */}
      <div className="grid md:grid-cols-2 w-full">

        <div ref={addToSlide} className="p-16 bg-black border-b border-white/10">
          <h3 className="text-4xl font-semibold text-[#eaeaea] mb-4">Our Mission 🚀</h3>
          <p className="text-white/80 text-xl leading-relaxed">
            To empower brands and creators through cinematic visuals that inspire, engage,
            and captivate audiences globally.
          </p>
        </div>

        <div ref={addToSlide} className="p-16 bg-[#0d0d0d] border-b border-white/10">
          <h3 className="text-4xl font-semibold text-[#eaeaea] mb-4">Our Vision 🌍✨</h3>
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
        <h3 ref={addToFade} className="text-5xl font-bold text-center text-[#eaeaea] mb-16">
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
              ref={addToFade}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h4 className="text-2xl font-semibold text-[#eaeaea] mb-2">
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
      <div ref={addToFade} className="w-full text-center py-20 bg-black">
        <a
          href="/contact"
          className="px-12 py-4 rounded-full bg-[#eaeaea] text-black font-semibold text-lg shadow-lg hover:scale-105 transition"
        >
          Work With Us ✨
        </a>
      </div>
    </section>
  );
}
