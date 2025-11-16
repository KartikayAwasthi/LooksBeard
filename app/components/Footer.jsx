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
        bg-[#FAF0DB]
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

          <p className="text-black/70 text-sm mb-4">
            Email:{" "}
            <a href="mailto:looksbeard@gmail.com" className="hover:text-black">
              looksbeard@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-5 mt-6">

            <Link href="https://instagram.com" target="_blank">
              <Instagram className="icon-style" />
            </Link>

            <Link href="https://youtube.com" target="_blank">
              <Youtube className="icon-style" />
            </Link>

            <Link href="https://wa.me/910000000000" target="_blank">
              <MessageCircle className="icon-style" />
            </Link>

            <Link href="https://facebook.com" target="_blank">
              <Facebook className="icon-style" />
            </Link>

            <Link href="https://twitter.com" target="_blank">
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
              bg-white shadow-xl rounded-lg p-3 
              flex gap-4 
              border border-black/10 z-50 animate-fadeIn
            "
          >
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="popup-icon" />
            </Link>

            <Link href="https://facebook.com" target="_blank">
              <Facebook className="popup-icon" />
            </Link>

            <Link href="https://twitter.com" target="_blank">
              <Twitter className="popup-icon" />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="popup-icon" />
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
