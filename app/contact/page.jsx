"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent ✔");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <main className="pt-40 pb-24 px-6">
      {/* PAGE HEADER */}
      <div className="text-center mb-20 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight glow-text">
          Let’s Create Something Amazing
        </h1>
        <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
          Share your ideas with us — we turn concepts into cinematic visuals with precision & creativity.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* LEFT — CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl transition hover:border-[#FAF0DB]/50 animate-slideUp"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>

          {/* INPUTS */}
          <div className="space-y-5">
            <div>
              <label className="block text-white/70 mb-1 text-sm">Your Name</label>
              <input
                type="text"
                required
                className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg text-white focus:border-[#FAF0DB] transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-1 text-sm">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg text-white focus:border-[#FAF0DB] transition"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-1 text-sm">Your Message</label>
              <textarea
                rows="5"
                required
                className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg text-white focus:border-[#FAF0DB] transition"
                placeholder="Write your message..."
              ></textarea>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-6 w-full bg-[#FAF0DB] text-black font-semibold py-3 rounded-lg hover:bg-white transition">
            Send Message
          </button>

          {/* SUCCESS MESSAGE */}
          {status && <p className="text-green-400 mt-3">{status}</p>}
        </form>

        {/* RIGHT — INFO PANEL */}
        <div className="flex flex-col justify-center animate-slideUp delay-200">
          <h2 className="text-3xl font-semibold mb-6">Let’s Work Together</h2>

          <p className="text-white/70 leading-relaxed text-lg mb-8">
            Whether it's cinematic video editing, motion graphics, or crisp sound design — 
            we bring your ideas to life with visual excellence.  
            <br /><br />
            Tell us what you need. We're ready to collaborate.
          </p>

          <div className="space-y-5 bg-[#111] p-8 rounded-2xl border border-white/10 shadow-xl">
            <div>
              <p className="text-white/50 text-sm">Email</p>
              <p className="text-lg font-medium">looksbeard@gmail.com</p>
            </div>

            <div>
              <p className="text-white/50 text-sm">Instagram</p>
              <a href="#" className="text-lg font-medium hover:text-[#FAF0DB]">
                @looksbeard.productions
              </a>
            </div>

            <div>
              <p className="text-white/50 text-sm">WhatsApp</p>
              <a href="#" className="text-lg font-medium hover:text-[#FAF0DB]">
                +91 00000 00000
              </a>
            </div>
          </div>

          {/* EXTRA CTA */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block border border-[#FAF0DB] text-[#FAF0DB] px-6 py-3 rounded-lg hover:bg-[#FAF0DB] hover:text-black transition"
            >
              View Our Work →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
