import React, { useEffect, useRef, useState } from "react";
import bghero from "/public/final.png";
import welcomeImg from "/public/EL-Welcome-Day4.png";
import Navbar from "./Navbar";

/* ===== Early-trigger reveal (avoids blank gap on mobile) ===== */
function useReveal({
  threshold = 0.06,
  rootMargin = "0px 0px -25% 0px",
  mobile = { threshold: 0.02, rootMargin: "0px 0px -45% 0px" },
  once = true,
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
            break;
          }
        }
      },
      isMobile
        ? {
            threshold: mobile.threshold ?? 0.02,
            rootMargin: mobile.rootMargin ?? "0px 0px -45% 0px",
          }
        : { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, mobile.threshold, mobile.rootMargin, once]);

  return { ref, visible };
}

export default function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [pVisible, setPVisible] = useState(false);
  const [pText, setPText] = useState("");
  const { ref: sectionRef, visible } = useReveal(); // early reveal

  const pFull =
    "Join the Information Technology Community where creativity, innovation come together to build the future and teamwork.";

  // Start paragraph reveal when paragraph enters view (earlier & smoother)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setPVisible(true)),
      { threshold: 0.15, rootMargin: "0px 0px -20% 0px" }
    );
    pRef.current && io.observe(pRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!pVisible) return;
    let i = 0;
    const id = setInterval(() => {
      setPText(pFull.slice(0, i));
      i++;
      if (i > pFull.length) clearInterval(id);
    }, 18); // a bit faster & smoother
    return () => clearInterval(id);
  }, [pVisible]);

  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden ">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform transform-gpu"
        style={{
          backgroundImage: `url(${bghero})`,
          animation: "heroZoom 18s ease-in-out infinite alternate",
        }}
      />

      <Navbar />

      {/* Content */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center gap-8 sm:gap-6 md:gap-4 pt-28 sm:pt-36 md:pt-44"
      >
        {/* Welcome mark */}
        <img
          src={welcomeImg}
          alt="EL Welcome Day"
          ref={h1Ref}
          className={`w-[80%] sm:w-[70%] md:w-[52%] lg:w-[46%] mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.18)]
                      will-change-transform transform-gpu transition-all duration-700
                      ${
                        visible
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-[.97] translate-y-2"
                      }`}
          style={{
            animation: visible ? "heroFloat 8s ease-in-out infinite" : "none",
          }}
        />

        {/* Lead text (type-in, but with early trigger + small offset) */}
        <p
          ref={pRef}
          className={`text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-[70%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto whitespace-pre-wrap
                      will-change-transform transform-gpu transition-all duration-700
                      ${
                        visible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
        >
          {pText}
        </p>

        {/* CTA — neon/glass pill, floaty (no “hitting” effect) */}
        <a
          href="https://itc-welcome-day-25-26.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 md:mt-16"
        >
          <span className="relative inline-flex">
            {/* outer glow ring */}
            <span
              aria-hidden
              className="absolute -inset-[2px] rounded-3xl bg-[radial-gradient(120%_120%_at_50%_50%,rgba(255,0,0,0.45),rgba(255,0,0,0)_60%)] blur-[6px] opacity-80 transition-opacity group-hover:opacity-100"
            />
            <button
              className="group relative inline-flex items-center justify-center rounded-3xl
                         px-8 md:px-12 py-3.5 md:py-4
                         text-lg md:text-2xl font-bold tracking-wide
                         bg-black/70 border border-red-700/60 text-white
                         shadow-[0_0_15px_rgba(255,0,0,0.25),0_0_30px_rgba(255,0,0,0.2)]
                         hover:shadow-[0_0_25px_rgba(255,0,0,0.45),0_0_55px_rgba(255,0,0,0.35)]
                         transition-all duration-300 will-change-transform transform-gpu hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500/60"
            >
              {/* inner subtle gradient */}
              <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              {/* animated shimmer */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
              >
                <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                  <span className="block h-full w-full translate-x-[-120%] group-hover:translate-x-[400%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </span>
              </span>
              Join us
            </button>
          </span>
        </a>
      </div>

      {/* local keyframes */}
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
        @keyframes heroFloat {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
