// Time.jsx — early-trigger reveal + improved Join button (no libs)

import React, { useEffect, useState, useRef } from "react";
import bgImg from "/public/Group2.jpg";

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

const Time = () => {
  /* ===== Countdown logic (same, with tiny polish) ===== */
  const target = new Date("2025-11-09T00:00:00").getTime();
  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calc());

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(t);
  }, []);

  /* ===== Reveal control for the whole section ===== */
  const { ref: sectionRef, visible } = useReveal();

  /* ===== Small helpers ===== */
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-28 md:py-40 flex flex-col items-center justify-center text-white px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Welcome Day countdown"
    >
      {/* Dark veil */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className={`relative z-10 text-center will-change-transform transform-gpu transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-5 md:mb-8">
          The Journey Begins Soon
        </h2>

        <p className="text-base md:text-xl text-gray-300 max-w-3xl md:max-w-5xl mx-auto leading-relaxed">
          Mark your calendars — our Welcome Day is approaching. A new chapter of
          creativity, innovation, and collaboration is about to begin.
        </p>

        {/* Countdown */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-10 mt-12 md:mt-16 will-change-transform transform-gpu transition-all duration-700
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          {[
            { label: "Days", value: pad(timeLeft.days) },
            { label: "Hours", value: pad(timeLeft.hours) },
            { label: "Minutes", value: pad(timeLeft.minutes) },
            { label: "Seconds", value: pad(timeLeft.seconds) },
          ].map((item, i) => (
            <div
              key={item.label}
              className="w-[140px] h-[150px] md:w-[170px] md:h-[180px] rounded-2xl bg-[#131313]/95 backdrop-blur-sm
                        flex flex-col items-center justify-center border border-red-800/60
                        shadow-[0_25px_60px_-10px_rgba(255,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.04)]
                        will-change-transform transform-gpu transition duration-700"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white tabular-nums">
                {item.value}
              </span>
              <span className="text-sm md:text-lg mt-2 text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA — improved neon/glass pill with shimmer */}
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
    </section>
  );
};

export default Time;
