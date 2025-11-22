"use client";

import { useState, useRef, useEffect } from "react";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent Successfully ✔");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 pb-16">

      
      {/* ✨ SECTION HEADING */}
      <div className="relative z-20 text-center animate-slideUp px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#FAF0DB] drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
          Get In Touch
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Let’s collaborate to craft cinematic visuals, powerful stories, and unforgettable creative experiences.  
          Whether it’s edits, ads, reels, or high-end production —  
          <span className="text-white">we’d love to hear from you.</span>
        </p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="relative z-20 flex justify-center gap-8 mt-10 animate-floatSlow">
        <SocialIcon icon={<Instagram size={26} />} href="#" />
        <SocialIcon icon={<Youtube size={26} />} href="#" />
        <SocialIcon icon={<Mail size={26} />} href="mailto:contact@looksbeard.com" />
        <SocialIcon icon={<Phone size={26} />} href="tel:+919876543210" />
      </div>

      {/* MAIN CONTACT LAYOUT */}
      <div className="relative z-20 w-[90%] max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-20">

        {/* --------------------------------------------
            LEFT PANEL — CINEMATIC & LIVING MOVEMENT
        --------------------------------------------- */}
        <div className="text-white space-y-6 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide">
            Let's Create  
            <br />
            <span className="text-[#FAF0DB]">Something Unforgettable</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-md">
            Every frame, every beat, and every cut —  
            crafted with passion and precision.
          </p>

          {/* CONTACT INFO */}
          <div className="pt-6 space-y-4 text-white/70">
            <p className="flex items-center gap-3"><Mail size={18}/> contact@looksbeard.com</p>
            <p className="flex items-center gap-3"><Phone size={18}/> +91 9876543210</p>
            <p className="flex items-center gap-3"><MapPin size={18}/> India • Worldwide Projects</p>
          </div>

          {/* Floating light effect */}
          <div className="w-32 h-1 bg-[#FAF0DB] rounded-full mt-10 animate-pulse"></div>
        </div>

        {/* --------------------------------------------
            RIGHT PANEL — BEAUTIFUL FORM
        --------------------------------------------- */}
        <form
          onSubmit={handleSubmit}
          className="
            relative bg-white/5 backdrop-blur-2xl
            p-10 rounded-3xl border border-white/20
            shadow-[0_0_40px_rgba(0,0,0,0.6)]
            animate-scaleIn
          "
        >
          {/* Glow behind form */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent blur-2xl -z-10"></div>

          <h2 className="text-3xl font-bold mb-8 text-[#FAF0DB] tracking-wide">
            Send a Message ✨
          </h2>

          <div className="space-y-8">
            <FloatingInput label="Your Name" />
            <FloatingInput label="Email" type="email" />
            <FloatingTextarea label="Message" rows="5" />
          </div>

          <MagneticButton>
            <button
              className="
                w-full bg-[#FAF0DB] text-black font-semibold py-3 
                rounded-xl transition-all duration-300 mt-8
                hover:bg-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]
              "
            >
              Send Message
            </button>
          </MagneticButton>

          {status && (
            <p className="text-green-400 mt-4 text-center font-medium">
              {status}
            </p>
          )}
        </form>
      </div>

      {/* SPOTLIGHT EFFECT */}
      <SpotlightEffect />
    </section>
  );
}

/* ---------------------------------------------
   FLOATING INPUT
---------------------------------------------- */
function FloatingInput({ label, type = "text" }) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        className="
          w-full bg-transparent border-b border-white/40
          py-3 text-white peer outline-none
          focus:border-[#FAF0DB] transition-all duration-300
        "
      />
      <label
        className="
          absolute left-0 top-3 text-white/50 text-sm
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FAF0DB]
          peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#FAF0DB]
          transition-all duration-300
          pointer-events-none
        "
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------------------------------------
   FLOATING TEXTAREA
---------------------------------------------- */
function FloatingTextarea({ label, rows }) {
  return (
    <div className="relative">
      <textarea
        rows={rows}
        required
        className="
          w-full bg-transparent border-b border-white/40
          py-3 text-white peer outline-none resize-none
          focus:border-[#FAF0DB] transition-all duration-300
        "
      ></textarea>
      <label
        className="
          absolute left-0 top-3 text-white/50 text-sm
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FAF0DB]
          peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#FAF0DB]
          transition-all duration-300
          pointer-events-none
        "
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------------------------------------
   SOCIAL ICON COMPONENT
---------------------------------------------- */
function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        text-white/70 hover:text-[#FAF0DB]
        transition-all duration-300
        p-3 rounded-full border border-white/10
        hover:border-[#FAF0DB] hover:shadow-[0_0_20px_rgba(255,240,219,0.4)]
        backdrop-blur-lg
      "
    >
      {icon}
    </a>
  );
}

/* ---------------------------------------------
   MAGNETIC BUTTON
---------------------------------------------- */
function MagneticButton({ children }) {
  const ref = useRef(null);

  const move = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 8;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 8;

    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="transition-transform duration-300"
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------
   SPOTLIGHT CURSOR EFFECT
---------------------------------------------- */
function SpotlightEffect() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX - 150}px`;
      ref.current.style.top = `${e.clientY - 150}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed w-[300px] h-[300px] rounded-full 
                 bg-[#FAF0DB]/8 blur-3xl opacity-60 mix-blend-screen"
    />
  );
}
