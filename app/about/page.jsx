"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// export const metadata = {
//   title: "About Us — Looksbeard Productions",
//   description:
//     "A cinematic-first creative studio crafting immersive visuals, emotion-driven edits, and bold storytelling.",
// };

export default function AboutPage() {
  const heroRef = useRef(null);
  const fadeRefs = useRef([]);
  const slideRefs = useRef([]);
  const statRefs = useRef([]);
  const valueRefs = useRef([]);
  const imageParallaxRef = useRef(null);

  useEffect(() => {
    // HERO ZOOM OUT
    gsap.fromTo(
      heroRef.current,
      { scale: 1.3, opacity: 1 },
      {
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // FADE UP ELEMENTS
    fadeRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // SLIDE-IN LEFT / RIGHT
    slideRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: index % 2 === 0 ? -80 : 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });

    // STATS STAGGER
    gsap.fromTo(
      statRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statRefs.current[0],
          start: "top 85%",
        },
      }
    );

    // CORE VALUE CARDS
    gsap.fromTo(
      valueRefs.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: valueRefs.current[0],
          start: "top 85%",
        },
      }
    );

    // PARALLAX IMAGE
    gsap.fromTo(
      imageParallaxRef.current,
      { y: -40 },
      {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: imageParallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  // Helper push refs
  const addFade = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };
  const addSlide = (el) => {
    if (el && !slideRefs.current.includes(el)) slideRefs.current.push(el);
  };
  const addStat = (el) => {
    if (el && !statRefs.current.includes(el)) statRefs.current.push(el);
  };
  const addValue = (el) => {
    if (el && !valueRefs.current.includes(el)) valueRefs.current.push(el);
  };

  return (
    <main className="pt-40 pb-32 w-full overflow-hidden">

      {/* ============================================================================
        HERO — GSAP ZOOM + SCROLL PARALLAX
      ============================================================================ */}
      <section
        ref={heroRef}
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            We Create Cinematic
            <span className="text-[#FAF0DB] block">Digital Experiences</span>
          </h1>

          <p className="text-white/60 text-xl md:text-2xl mt-6">
            Blending storytelling, motion, design & sound into unforgettable visuals.
          </p>
        </div>
      </section>

      {/* SIGNATURE LINE */}
      <section ref={addFade} className="py-24 px-6">
        <p className="max-w-4xl mx-auto text-center text-3xl md:text-4xl text-white/80">
          We craft visuals that
          <span className="text-white font-semibold"> move people emotionally.</span>
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="grid md:grid-cols-2 mt-10">

        {/* LEFT */}
        <div ref={addSlide} className="p-16 bg-white/5 border-t border-white/10 backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>

          <p className="text-white/70 text-lg leading-relaxed">
            A team of editors, filmmakers, designers and sound artists crafting
            cinematic digital experiences.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              ["🎞️", "Cinematic Editing"],
              ["✨", "Motion Design"],
              ["🎚️", "Color & Finishing"],
              ["🎧", "Sound Design"],
            ].map(([icon, label], i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <span className="text-2xl">{icon}</span>
                <span className="ml-2 text-lg font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — PARALLAX IMAGE */}
        <div
          className="relative h-full border-t border-white/10 overflow-hidden"
        >
          <img
            ref={imageParallaxRef}
            src="/studio.jpg"
            className="h-full w-full object-cover scale-110"
            alt="Studio"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            ["⭐", "150+ Projects", "Executed with precision"],
            ["🌍", "7+ Countries", "Global clients"],
            ["⚡", "Fast Delivery", "Quality-first workflow"],
            ["🎧", "Sound First", "We cut to rhythm"],
          ].map(([icon, title, subtitle], i) => (
            <div
              key={i}
              ref={addStat}
              className="p-10 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="text-5xl mb-3">{icon}</div>
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="text-white/60 text-base mt-2">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="grid md:grid-cols-2">
        <div ref={addSlide} className="p-16 bg-white/5 border-t border-white/10">
          <h3 className="text-4xl font-semibold mb-4">Our Mission</h3>
          <p className="text-white/70 text-xl">
            Create cinematic-first content that inspires, elevates and transforms.
          </p>
        </div>

        <div ref={addSlide} className="p-16 bg-white/5 border-t border-white/10">
          <h3 className="text-4xl font-semibold mb-4">Our Vision</h3>
          <p className="text-white/70 text-xl">
            To become a globally recognized creative powerhouse.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 px-6">
        <h3 ref={addFade} className="text-5xl font-bold text-center mb-16">
          Core Values
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            ["🎨", "Creativity", "Original ideas crafted with intent"],
            ["🔍", "Precision", "Every frame refined"],
            ["⚡", "Efficiency", "Fast & reliable workflow"],
            ["🤝", "Collaboration", "Client-first mindset"],
            ["🛡️", "Integrity", "Honesty in communication"],
            ["🚀", "Innovation", "Pushing boundaries"],
          ].map(([icon, label, desc], i) => (
            <div
              key={i}
              ref={addValue}
              className="p-10 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="text-2xl font-semibold">{label}</h4>
              <p className="text-white/60 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={addFade} className="text-center py-20">
        <a
          href="/contact"
          className="inline-block px-14 py-5 bg-[#FAF0DB] text-black font-semibold text-lg rounded-full shadow-xl hover:scale-105 transition"
        >
          Let’s Create Something Remarkable ✨
        </a>
      </section>
    </main>
  );
}
