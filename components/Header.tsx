"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F3E8]/95 backdrop-blur-sm border-b-2 border-black"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-black text-sm bg-[#B6FF00] border-2 border-black px-3 py-1.5 hover:shadow-[3px_3px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all font-mono tracking-widest"
        >
          JP
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-sm uppercase tracking-wider hover:text-[#111] underline-offset-4 hover:underline transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/jaypes7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sm border-2 border-black px-4 py-2 bg-black text-[#F7F3E8] hover:bg-[#B6FF00] hover:text-black hover:shadow-[3px_3px_0_#111] transition-all"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          className="md:hidden font-black text-base border-2 border-black w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F7F3E8] border-b-2 border-black px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex py-3 font-bold uppercase tracking-wider text-sm border-b border-black/10 last:border-0 hover:text-[#B6FF00] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/jaypes7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-3 mb-1 font-bold text-sm items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
}
