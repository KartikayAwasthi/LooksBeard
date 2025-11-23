"use client";

import { motion } from "framer-motion";

/* ------------------ ANIMATION VARIANTS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

/* --------------------------------------------------------- */

export default function About() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white overflow-hidden px-6 md:px-10 lg:px-20">

      {/* ===================== HERO ===================== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="min-h-[70vh] flex flex-col items-center justify-center text-center"
      >
        <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#EDEDED]">
          We Create Cinematic Magic
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-white/70 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
        >
          High-end cinematic edits, emotional storytelling, and stunning motion
          design crafted with precision.
        </motion.p>

        {/* Floating synced icon row */}
        <div className="flex gap-6 mt-10">
          {[VideoIcon, SparklesIcon, HeadphoneIcon, FlameIcon, BrushIcon].map(
            (Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror" }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* ===================== WHO WE ARE ===================== */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-20"
      >
       <motion.h2
  variants={fadeUp}
  className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-6 text-center mx-auto"
>
  Who We Are
</motion.h2>

<motion.p
  variants={fadeUp}
  className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center mb-14"
>
  We are a passionate team of editors, sound designers, storytellers,
  and artists dedicated to crafting visuals that emotionally connect and leave impact.
</motion.p>


        <motion.div
          variants={staggerParent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            [VideoIcon, "Cinematic Editing"],
            [SparklesIcon, "Motion Graphics"],
            [HeadphoneIcon, "Sound Design"],
            [PhotoIcon, "Visual Identity"],
          ].map(([Icon, title], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex items-center gap-4"
            >
              <Icon className="w-8 h-8 text-white" />
              <p className="font-semibold text-white">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ===================== MISSION + VISION ===================== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 border-t border-white/10 py-20 gap-10">

        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#0B0B0B] p-10 md:p-16 rounded-2xl"
        >
          <h3 className="text-4xl font-semibold text-[#EDEDED] mb-4">Our Mission</h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            To empower brands with cinematic visuals that inspire, engage,
            and captivate audiences.
          </p>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#0E0E0E] p-10 md:p-16 rounded-2xl"
        >
          <h3 className="text-4xl font-semibold text-[#EDEDED] mb-4">Our Vision</h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            To be a globally renowned creative studio known for innovation,
            emotional storytelling, and unforgettable visuals.
          </p>
        </motion.div>

      </div>

      {/* ===================== CORE VALUES ===================== */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-24"
      >
        <motion.h3
          variants={fadeUp}
          className="text-5xl font-bold text-center text-[#EDEDED] mb-16"
        >
          Core Values
        </motion.h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            [BrushIcon, "Creativity First", "Every project gets a unique artistic approach."],
            [SearchIcon, "Precision", "Every frame crafted with intention."],
            [ClockIcon, "Timeliness", "Fast delivery without compromise."],
            [HandshakeIcon, "Collaboration", "Your ideas + our craft."],
            [SparklesIcon, "Innovation", "Always evolving and experimenting."],
            [TrendingIcon, "Growth Driven", "Edits designed to boost results."],
          ].map(([Icon, title, desc], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-sm"
            >
              <Icon className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-[#EDEDED] mb-2">{title}</h4>
              <p className="text-white/60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===================== CTA ===================== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="w-full text-center py-20 border-t border-white/10 max-w-7xl mx-auto"
      >
        <a
          href="/contact"
          className="px-12 py-4 rounded-full bg-[#EDEDED] text-black font-semibold text-lg shadow-xl hover:scale-105 transition-transform"
        >
          Work With Us 
        </a>
      </motion.div>

    </section>
  );
}

/* ---------------- ICONS (Black & White SVG) ---------------- */
function VideoIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M15 10.5l6-3v9l-6-3M3 6h12v12H3z" strokeLinecap="round" strokeLinejoin="round" />
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
function HeadphoneIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M4 13V9a8 8 0 0116 0v4" />
      <path d="M4 13a3 3 0 013 3v2a3 3 0 01-3 3" />
      <path d="M20 13a3 3 0 00-3 3v2a3 3 0 003 3" />
    </svg>
  );
}
function FlameIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M12 3s4 4 4 7-2 7-4 7-4-3-4-7 4-7 4-7z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function BrushIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M15 3l6 6-9 9H6v-6l9-9z" />
      <path d="M4 20h6" />
    </svg>
  );
}
function PhotoIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="9" cy="12" r="2" />
      <path d="M15 10l4 4" />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  );
}
function ClockIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function HandshakeIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M3 12l4-4 5 5 5-5 4 4-9 9z" />
    </svg>
  );
}
function TrendingIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M3 17l6-6 4 4 8-8" />
    </svg>
  );
}
