import React, { useEffect, useRef, useState } from "react";

import hackathon from "/public/Hackathon.webp";
import horizon from "/public/Horizon.webp";
import talks from "/public/Itctalks.webp";
import content from "/public/Itccc.webp";
import itcfam from "/public/Itctour.webp";
import itc from "/public/newlogo.png";
import exportImg from "/public/Export.webp";
import competitive from "/public/Itcp.webp";
import sprints from "/public/Itcsprint.webp";
import bg from "/public/Group2085662829.png";

export default function Events() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Replay every time the section enters/leaves view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    );
    sectionRef.current && io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Smooth, readable speed: compute duration from pixels/second
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // ↓ smaller = slower (smoother/readable). Try 40 if you want even slower.
    const PX_PER_SEC = 45;

    const setDuration = () => {
      const total = el.scrollWidth; // track = [row][row]
      const rowWidth = total / 2; // we animate exactly one row width
      const secs = Math.max(10, rowWidth / PX_PER_SEC); // gentle minimum
      el.style.setProperty("--marquee-duration", `${secs}s`);
    };

    setDuration();

    const ro = new ResizeObserver(setDuration);
    ro.observe(el);
    window.addEventListener("load", setDuration);
    window.addEventListener("resize", setDuration);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", setDuration);
      window.removeEventListener("resize", setDuration);
    };
  }, []);

  const events = [
    { id: 1, img: hackathon, name: "Hackathon" },
    { id: 2, img: horizon, name: "Horizon" },
    { id: 3, img: talks, name: "ITC Talks" },
    { id: 4, img: content, name: "Content Creation" },
    { id: 5, img: itcfam, name: "ITC Fam" },
    { id: 6, img: itc, name: "ITC" },
    { id: 7, img: exportImg, name: "Export It" },
    { id: 8, img: competitive, name: "Competitive" },
    { id: 9, img: sprints, name: "ITC Sprints" },
  ];

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative min-h-screen w-full py-20 px-4 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      {/* Header */}
      <div
        className={`text-center mb-12 will-change-transform transform-gpu transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Our Events
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Discover the moments that define our community <br />
          From workshops and talks to competitions and showcases
        </p>
      </div>

      {/* Infinite scroll container — visuals unchanged; perf tuned */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-[1200ms] ease-out delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          ref={trackRef}
          className="scroll-track flex space-x-8"
          style={{
            animationPlayState: isVisible ? "running" : "paused",
            contain: "layout paint", // isolate painting/layout
            backfaceVisibility: "hidden", // avoid composite artifacts
            transform: "translateZ(0)", // force GPU layer
            willChange: "transform",
          }}
        >
          {[...events, ...events].map((event, i) => (
            <div
              key={i}
              className="w-[260px] h-[320px] flex-none bg-[rgba(124,108,108,0.25)] backdrop-blur-sm
              border-2 border-red-700/80 rounded-2xl p-5
              shadow-[0_0_20px_rgba(255,0,0,0.5)]
              transition-all duration-300 cursor-pointer
              flex items-center justify-center relative"
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />
              <img
                src={event.img}
                loading="lazy"
                decoding="async"
                alt={event.name}
                className="relative z-10 max-w-[70%] max-h-[90%] object-contain filter brightness-95 transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Seamless: two identical rows; translate exactly one row (-50%) */
        @keyframes scroll-seamless {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .scroll-track {
          width: max-content;
          animation: scroll-seamless var(--marquee-duration, 24s) linear infinite;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .scroll-track { animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
