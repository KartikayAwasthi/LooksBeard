"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const emojiRefs = useRef([]);

  const addCardRef = (el) => el && !cardRefs.current.includes(el) && cardRefs.current.push(el);
  const addEmojiRef = (el) => el && !emojiRefs.current.includes(el) && emojiRefs.current.push(el);

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

    // FLOATING EMOJIS IN HEADING
    gsap.to(emojiRefs.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
      stagger: 0.2,
    });

    // SERVICE CARDS STAGGER ANIMATION
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

    // Card 3D tilt hover effect
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
          Heading
      ============================ */}
      <div className="text-center mb-20">
        <h2 className="services-heading text-5xl md:text-6xl font-extrabold text-[#FAF0DB]">
          Our Services
        </h2>

        <p className="text-white/70 text-xl max-w-3xl mx-auto mt-6">
          Everything you need to bring your content alive with cinematic precision  
          and creative excellence.
        </p>

        {/* Floating Emojis */}
        <div className="flex justify-center gap-6 mt-10">
          {["🎬", "✨", "🔊", "🔥", "🖌️"].map((emoji, i) => (
            <span
              key={i}
              ref={addEmojiRef}
              className="px-5 py-3 text-3xl bg-white/10 rounded-2xl border border-white/10"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* ===========================
          Services Grid
      ============================ */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            ref={addCardRef}
            className="rounded-3xl p-10 bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition relative group backdrop-blur-xl"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#FAF0DB]/20 to-transparent rounded-3xl"></div>

            {/* Emoji */}
            <div
              className={`text-6xl mb-6 ${
                item.float ? "animate-bounce-slow" : "animate-pop-slow"
              }`}
            >
              {item.emoji}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#FAF0DB]">{item.title}</h3>

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
