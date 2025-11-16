"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent ✔");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/30 backdrop-blur-xl p-10 rounded-2xl border border-white/10 animate-slideUp"
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>

      <div className="space-y-5">
        <Input label="Your Name" />
        <Input label="Email" type="email" />
        <Textarea label="Message" rows="5" />
      </div>

      <button className="w-full bg-[#FAF0DB] text-black font-semibold py-3 rounded-lg hover:bg-white transition mt-6">
        Send Message
      </button>

      {status && <p className="text-green-400 mt-4">{status}</p>}
    </form>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="text-white/70 text-sm">{label}</label>
      <input
        type={type}
        required
        className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg text-white focus:border-[#FAF0DB] transition"
      />
    </div>
  );
}

function Textarea({ label, rows }) {
  return (
    <div>
      <label className="text-white/70 text-sm">{label}</label>
      <textarea
        rows={rows}
        required
        className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg text-white focus:border-[#FAF0DB] transition"
      ></textarea>
    </div>
  );
}
