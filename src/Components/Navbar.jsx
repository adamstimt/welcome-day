import React, { useState, useEffect, useMemo, useRef } from "react";
import { Menu, X } from "lucide-react";
import miniitc from "/public/miniitc.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("#hero");
  const [hidden, setHidden] = useState(false); // hide on scroll down

  const lastY = useRef(0);
  const idleTimer = useRef(null);

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

  /* Header shrink + hide/show on scroll direction */
  useEffect(() => {
    const TOL = 6; // ignore tiny scroll noise
    const SHOW_AT_TOP = 10; // always show near very top
    const HYST = 24; // hysteresis so it doesn't flicker

    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);

      // always show at the top
      if (y <= SHOW_AT_TOP) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      const dy = y - lastY.current;
      // Ignore tiny changes
      if (Math.abs(dy) < TOL) return;

      // Hide when scrolling down past hysteresis; show when scrolling up
      if (dy > 0 && y - (idleTimer.current?.__lastShowY ?? 0) > HYST) {
        setHidden(true);
      } else if (dy < 0) {
        setHidden(false);
        // remember where we last showed to avoid quick hide
        if (idleTimer.current) idleTimer.current.__lastShowY = y;
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Keep nav visible while the mobile menu is open */
  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  /* Scroll-spy */
  useEffect(() => {
    const ids = links.map((l) => l.href).filter(Boolean);
    const els = ids.map((id) => document.querySelector(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = `#${e.target.id}`;
            setActiveId(id);
            history.replaceState(null, "", id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [links]);

  /* smooth scroll */
  const handleScrollTo = (href) => {
    const section = document.querySelector(href);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
    setActiveId(href);
  };

  const baseNav =
    "flex items-center justify-between bg-[rgb(var(--bg-elevated)/0.6)] backdrop-blur-xl text-ink-1 px-5 py-3 border-b border-ink-3/40 transition-all duration-500";

  const linkBase =
    "group relative inline-flex items-center px-1 py-0.5 rounded-md font-medium transition-all";
  const linkHover = "hover:-translate-y-[1px]";
  const linkFocus =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center
                  transition-transform duration-300 will-change-transform
                  ${hidden ? "-translate-y-full" : "translate-y-0"}
                  ${isScrolled ? "mt-0" : "mt-[1.5rem]"}`}
      aria-label="Primary"
    >
      <div
        className={`${baseNav} ${
          isScrolled
            ? "w-full rounded-none shadow-2xl"
            : "w-[92%] md:w-[65%] max-w-[80rem] border rounded-full"
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
                aria-current={isActive ? "page" : undefined}
                className={`${linkBase} ${linkHover} ${linkFocus} ${
                  isActive ? "text-brand-500" : "hover:text-brand-500"
                }`}
              >
                <span className="relative">
                  {link.name}
                  {/* Centered underline: fixed for active, grows on hover */}
                  <span
                    aria-hidden
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] rounded-full
                                bg-[rgb(var(--brand-500))] transition-[width] duration-300
                                ${
                                  isActive
                                    ? "w-[70%]"
                                    : "w-0 group-hover:w-[70%]"
                                }`}
                  />
                </span>
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
                    border border-ink-3/40 rounded-2xl p-3
                    transition-all duration-300 origin-top
                    ${
                      menuOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
      >
        <ul className="divide-y divide-ink-3/30">
          {links.map((link, i) => {
            const isActive = activeId === link.href;
            return (
              <li key={link.name}>
                <button
                  onClick={() => handleScrollTo(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full text-left py-3 px-2 rounded-lg transition-all cursor-pointer
                              hover:bg-[rgb(var(--bg-card)/0.55)]
                              ${
                                isActive
                                  ? "text-brand-500"
                                  : "hover:text-brand-500"
                              }`}
                  style={{ transitionDelay: menuOpen ? `${i * 35}ms` : "0ms" }}
                >
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
