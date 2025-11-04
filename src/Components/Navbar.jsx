import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import miniitc from "/public/miniitc.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Events", href: "#events" },
    { name: "Domains", href: "#domains" },
    { name: "Teams", href: "#teams" },
    { name: "About us", href: "#about" },
  ];

  const handleScrollTo = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? "mt-0" : "mt-[1.5rem]" // 
      }`}
    >
      <div
        className={`flex items-center justify-between bg-black/80 backdrop-blur-md text-gray-300 px-[1.5rem] md:px-[3rem] py-[1.2rem] border border-gray-500/40 transition-all duration-500 ${
          isScrolled
            ? "w-full rounded-none shadow-lg shadow-black/70"
            : "w-[92%] md:w-[65%] max-w-[80rem] rounded-full"
        }`}
      >
        {/* ✅ Logo */}
        <img
          src={miniitc}
          loading="lazy"
          alt="ITC logo"
          className="w-[4.5rem] h-[2.5rem] object-cover select-none" 
        />

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex items-center gap-[2rem] text-[clamp(0.9rem,1.1vw,1.1rem)]">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className="hover:text-[#a81a13] transition-all cursor-pointer font-medium [text-shadow:_0_0_15px_#a81a13]"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`absolute top-[4.5rem] left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-700/30 flex flex-col items-center gap-6 py-6 text-lg text-gray-300 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleScrollTo(link.href)}
            className="hover:text-[#a81a13] transition-all cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
