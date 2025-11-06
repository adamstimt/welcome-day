import React, { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import miniitc from "/public/miniitc.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("#hero"); // default active

  const links = useMemo(
    () => [
      { name: "Home", href: "#hero" },
      { name: "Domains", href: "#domains" },
      { name: "Teams", href: "#teams" },
      { name: "Events", href: "#events" },
      { name: "About us", href: "#about" },
    ],
    []
  );

  /* Header shrink on scroll */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll-spy: observe sections and mark active link */
  useEffect(() => {
    const ids = links.map((l) => l.href).filter(Boolean);
    const els = ids.map((id) => document.querySelector(id)).filter(Boolean);
    if (els.length === 0) return;

    // Trigger when the middle of a section is inside the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = `#${e.target.id}`;
            setActiveId(id);
            // Update URL hash without jump
            history.replaceState(null, "", id);
          }
        });
      },
      {
        // earlier trigger so it feels snappy and stable on mobile
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [links]);

  const handleScrollTo = (href) => {
    const section = document.querySelector(href);
    if (section) {
      // ensure sections don’t end up under the fixed nav
      // (prefer CSS: section { scroll-margin-top: Xpx }, but we add a tiny offset here)
      const y = section.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
    setActiveId(href);
  };

  const baseNav =
    "flex items-center justify-between bg-[rgb(var(--bg-elevated)/0.6)] backdrop-blur-xl text-ink-1 px-5 py-3 border border-ink-3/40 transition-all duration-500 ";

  const activeLink =
    "text-brand-500 drop-shadow-[0_0_16px_rgb(var(--brand-500)/0.75)]";

  const linkClass =
    "relative font-medium transition-all cursor-pointer rounded-md px-1 py-0.5 " +
    "hover:text-brand-500 hover:drop-shadow-[0_0_15px_rgb(var(--brand-500))] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60";

  const renderUnderline = (isActive) =>
    isActive ? (
      <span
        aria-hidden
        className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-7 rounded-full
                   bg-[rgb(var(--brand-500))] shadow-[0_0_8px_rgb(var(--brand-500))]"
      />
    ) : null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500  ${
        isScrolled ? "mt-0" : "mt-[1.5rem]"
      }`}
    >
      <div
        className={`${baseNav} ${
          isScrolled
            ? "w-full rounded-none shadow-2xl"
            : "w-[92%] md:w-[65%] max-w-[80rem] rounded-full"
        }`}
      >
        {/* Logo */}
        <img
          src={miniitc}
          loading="lazy"
          alt="ITC logo"
          className="w-[4.5rem] h-[2.5rem] object-cover select-none"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[2rem] text-[clamp(0.9rem,1.1vw,1.1rem)] mr-4">
          {links.map((link) => {
            const isActive = activeId === link.href;
            return (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className={`${linkClass} ${isActive ? activeLink : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                {renderUnderline(isActive)}
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
                     border border-ink-3/50 bg-[rgb(var(--bg-card)/0.6)] hover:bg-[rgb(var(--bg-card)/0.9)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[4.5rem] right-0 left-0 mx-auto
                    w-[92%] max-w-[80rem]
                    bg-[rgb(var(--bg-elevated)/0.9)] backdrop-blur-xl
                    border border-ink-3/40 rounded-2xl p-4
                    transition-all duration-300 ${
                      menuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
      >
        {links.map((link) => {
          const isActive = activeId === link.href;
          return (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className={`w-full text-left py-3 px-2 rounded-lg transition-all cursor-pointer
                         hover:bg-[rgb(var(--bg-card)/0.6)]
                         ${
                           isActive ? "text-brand-500" : "hover:text-brand-500"
                         }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
