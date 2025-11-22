"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Facebook,
  Twitter
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Close popup if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer
      className="
        bg-[#eaeaea]
        shadow-[0_0_25px_rgba(255,255,255,0.8)]
        text-black py-16 px-6 mt-32 relative
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* LOGO + DESCRIPTION */}
        <div>
          <Link href="/">
            <div className="flex items-center gap-3 mb-5 cursor-pointer transition-transform hover:scale-105">
              <Image
                src="/logo/logo1.png"
                width={140}
                height={140}
                alt="Looksbeard Logo"
                className="object-contain drop-shadow-lg"
              />
            </div>
          </Link>

          <p className="text-sm text-black/70 leading-relaxed">
            We create cinematic visuals, motion graphics, and world-class
            post-production that elevate your brand's story.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-black/70">

            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Our Work", href: "/work" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="
                    text-black/70 relative inline-block 
                    hover:text-black transition
                    group
                  "
                >
                  {item.name}

                  {/* UNDERLINE ANIMATION */}
                  <span
                    className="
                      absolute left-0 -bottom-1 w-0 h-[2px] 
                      bg-black transition-all duration-300 
                      group-hover:w-full
                    "
                  ></span>
                </Link>
              </li>
            ))}

          </ul>
        </div>

        {/* CONTACT + SOCIAL ICONS */}
        <div>
        <h3 className="text-lg font-semibold mb-4">Reach Us</h3>

{/* Email */}
<p className="text-black/70 text-sm mb-4 flex items-center gap-2">
  {/* Email Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.7}
    stroke="currentColor"
    className="w-4 h-4 text-black"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0L12 12 2.25 6.75"
    />
  </svg>

  <a href="mailto:looksbeard@gmail.com" className="hover:text-black">
    looksbeard98@gmail.com
  </a>
</p>

{/* Contact */}
<p className="text-black/70 text-sm mb-4 flex items-start gap-2">
  {/* Phone Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.7}
    stroke="currentColor"
    className="w-4 h-4 text-black mt-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-2.17a1.5 1.5 0 00-1.144-1.454l-3.494-.874a1.5 1.5 0 00-1.622.684l-.97 1.618a11.95 11.95 0 01-5.302-5.302l1.618-.97a1.5 1.5 0 00.684-1.622L8.624 3.64A1.5 1.5 0 007.17 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>

  <span className="flex flex-col">
    <a href="tel:+918299137922" className="hover:text-black">
      +91 8299137922
    </a>
    <a href="tel:+917007766858" className="hover:text-black">
      +91 7007766858
    </a>
  </span>
</p>





          <div className="flex items-center gap-5 mt-6">

            <Link href="https://www.instagram.com/looks_beard_productions?igsh=eTgyMXRhNnUwY3Qy&utm_source=qr" target="_blank">
              <Instagram className="icon-style" />
            </Link>

            <Link href="https://youtube.com" target="_blank">
              <Youtube className="icon-style" />
            </Link>

            <Link href="https://wa.me/918299137922" target="_blank">
              <MessageCircle className="icon-style" />
            </Link>

            

            <Link href="https://www.facebook.com/share/1D5au6UVHj/?mibextid=wwXIfr" target="_blank">
              <Facebook className="icon-style" />
            </Link>

            <Link href="https://x.com/looksbeard?s=21" target="_blank">
              <Twitter className="icon-style" />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="icon-style" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-14 pt-6 border-t border-black/10 relative">
        <p className="text-black/60 text-sm">
          © {new Date().getFullYear()} Looksbeard Productions. All rights reserved.
        </p>

        {/* Designed & Developed */}
        <p className="text-black/70 text-xs mt-2">
          Designed & Developed by{" "}
          <span
            className="font-semibold cursor-pointer hover:text-black"
            onClick={() => setShowPopup(!showPopup)}
          >
            ❤️ Kartikay Awasthi
          </span>
        </p>

        {/* POPUP SOCIAL LINKS */}
        {showPopup && (
          <div
            ref={popupRef}
            className="
              absolute left-1/2 -translate-x-1/2 mt-3
              bg-[#eaeaea] shadow-xl rounded-lg p-3 
              flex gap-4 
              border border-black/10 z-50 animate-fadeIn
            "
          >
            <Link href="https://www.instagram.com/kartikay_awasthi/" target="_blank">
              <Instagram className="popup-icon" />
            </Link>

            <Link href="https://www.facebook.com/ikartikayawasthi/" target="_blank">
              <Facebook className="popup-icon" />
            </Link>

            <Link href="https://x.com/ikartikawasthi" target="_blank">
              <Twitter className="popup-icon" />
            </Link>

            <Link href="https://www.linkedin.com/in/KartikayAwasthi/" target="_blank">
              <Linkedin className="popup-icon" />
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
