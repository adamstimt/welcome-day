import React, { useEffect, useMemo, useRef, useState } from "react";
import bgImg from "/public/Group2.jpg";
import useRevealReplay from "../hooks/useRevealReplay";

export default function Time() {
  // ===== countdown =====
  const target = new Date("2025-11-09T00:00:00").getTime();
  const compute = () => {
    const diff = target - Date.now();
    return {
      ms: Math.max(0, diff),
      days: Math.max(0, Math.floor(diff / 86400000)),
      hours: Math.max(0, Math.floor((diff / 3600000) % 24)),
      minutes: Math.max(0, Math.floor((diff / 60000) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  };
  const [left, setLeft] = useState(compute());
  useEffect(() => {
    const id = setInterval(() => setLeft(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  const { ref: sectionRef, inView } = useRevealReplay();
  const root = useRef(null);

  // cursor spotlight (very cheap; only transforms a single div)
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width).toFixed(3));
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height).toFixed(3));
    };
    const leave = () => {
      el.style.setProperty("--mx", "0.5");
      el.style.setProperty("--my", "0.3");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    leave();
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const items = useMemo(
    () => [
      { label: "Days", value: pad(left.days) },
      { label: "Hours", value: pad(left.hours) },
      { label: "Minutes", value: pad(left.minutes) },
      { label: "Seconds", value: pad(left.seconds) },
    ],
    [left]
  );

  const isFinalDay = left.ms > 0 && left.ms <= 24 * 60 * 60 * 1000;

  return (
    <section
      ref={root}
      className={`relative min-h-screen py-28 md:py-40 flex flex-col items-center justify-center text-white px-6 overflow-hidden
                  ${isFinalDay ? "final-bg" : ""} [--mx:0.5] [--my:0.3]`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Welcome Day countdown"
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* ===== Final 24h lightweight effects ===== */}
      {isFinalDay && (
        <>
          {/* single siren bar (transform-only) */}
          <div aria-hidden className="siren-lite" />
          {/* 1 shockwave (with ::after for second pulse) */}
          <div aria-hidden className="shock-lite" />
          {/* static grain (cheap) */}
          <div aria-hidden className="grain-lite" />
          {/* spotlight follows cursor (transform-only) */}
          <div
            aria-hidden
            className="spot-lite"
            style={{
              left: "calc(var(--mx) * 100%)",
              top: "calc(var(--my) * 100%)",
            }}
          />
          {/* top ticker (no blur) */}
          <div className="ticker-lite" aria-hidden>
            <div className="track uppercase">
              PREPARE FOR WELCOME DAY - SAAD DAHLAB university PV 01{" "}
            </div>
          </div>
        </>
      )}

      {/* ===== content ===== */}
      <div
        ref={sectionRef}
        className={`relative z-10 text-center will-change-transform transition-all duration-600 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white ${
            isFinalDay ? "title-lite" : ""
          }`}
        >
          The Journey Begins Soon
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Mark your calendars — our Welcome Day is approaching. A new chapter of
          creativity, innovation, and collaboration is about to begin.
        </p>

        {/* tiles */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-10 mt-12 md:mt-16 will-change-transform transition-all duration-600
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`w-[140px] h-[150px] md:w-[170px] md:h-[180px] rounded-2xl bg-[#131313]/95
                          flex flex-col items-center justify-center border border-red-800/60
                          shadow-[0_18px_40px_-10px_rgba(255,0,0,0.6)]
                          will-change-transform transition-transform duration-600
                          ${isFinalDay ? "tile-lite" : ""}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span
                className={`text-4xl md:text-5xl font-extrabold tracking-tight text-white tabular-nums
                ${isFinalDay ? "num-lite" : ""}`}
              >
                {item.value}
              </span>
              <span className="text-sm md:text-lg mt-2 text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://itc-welcome-day-25-26.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 md:mt-16"
        >
          <button
            className={`relative inline-flex items-center justify-center rounded-3xl
                       px-8 md:px-12 py-3.5 md:py-4 text-lg md:text-2xl font-bold tracking-wide
                       bg-black/70 border border-red-700/60 text-white
                       shadow-[0_0_14px_rgba(255,0,0,0.22),0_0_28px_rgba(255,0,0,0.18)]
                       transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500/60
                       ${isFinalDay ? "btn-lite" : ""}`}
          >
            Join us
          </button>
        </a>
      </div>

      {/* ===== styles (performance tuned) ===== */}
      <style>{`
        /* Respect users who prefer less motion */
        @media (prefers-reduced-motion: reduce) {
          .siren-lite, .shock-lite, .track, .num-lite, .btn-lite { animation: none !important; }
        }

        /* background intensifier (no blur filters, uses a radial only) */
        .final-bg::before{
          content:"";
          position:absolute; inset:0; pointer-events:none; mix-blend-mode:screen;
          background: radial-gradient(110% 80% at 50% 18%, rgba(255,0,0,.22), transparent 60%);
        }

        /* single siren bar (transform-only) */
        .siren-lite{
          position:absolute; top:0; left:-25%; width:150%; height:6px;
          background: linear-gradient(90deg, transparent, rgba(255,0,0,.85), transparent);
          opacity:.8; will-change: transform; mix-blend-mode:screen;
          animation: siren 1.8s linear infinite;
        }
        @keyframes siren { 0%{ transform: translateX(-10%) } 100%{ transform: translateX(10%) } }

        /* one shockwave + a second via ::after (opacity/scale only) */
        .shock-lite{
          position:absolute; left:50%; top:62%; width:14px; height:14px; border-radius:9999px;
          background: radial-gradient(closest-side, rgba(255,0,0,.32), transparent 70%);
          transform: translate(-50%,-50%) scale(1); opacity:.32; mix-blend-mode:screen;
          will-change: transform, opacity;
          animation: shock 3.4s ease-out infinite;
        }
        .shock-lite::after{
          content:""; position:absolute; inset:0; border-radius:inherit;
          background: inherit; transform: scale(1); opacity:.32;
          animation: shock 3.4s ease-out infinite 1.7s;
        }
        @keyframes shock{
          0%{ transform: translate(-50%,-50%) scale(1); opacity:.32 }
          100%{ transform: translate(-50%,-50%) scale(5.5); opacity:0 }
        }

        /* cursor spotlight (transform-only, no blur) */
        .spot-lite{
          position:absolute; width:36rem; height:36rem; border-radius:9999px;
          transform: translate(-50%,-50%);
          background: radial-gradient(closest-side, rgba(255,0,0,.18), transparent 70%);
          opacity:.35; mix-blend-mode:screen; will-change: transform;
        }

        /* static grain (tiny data URI; no animation) */
        .grain-lite{
          position:absolute; inset:0; pointer-events:none; opacity:.05; mix-blend-mode:soft-light;
          background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>");
          background-size:140px 140px;
        }

        /* ticker (no blur/backdrop) */
        .ticker-lite{
          position:absolute; inset-inline:0; top:0; height:26px; overflow:hidden;
          background: linear-gradient(180deg, rgba(0,0,0,.7), rgba(0,0,0,.35));
          border-bottom:1px solid rgba(255,0,0,.25);
        }
        .ticker-lite .track{
          display:inline-block; white-space:nowrap; font-weight:800; letter-spacing:.05em;
          font-size:12px; padding-inline:18px; text-transform:uppercase;
          animation: ticker 14s linear infinite;
          background: linear-gradient(90deg, rgba(255,0,0,.85), rgba(255,90,90,.6), rgba(255,0,0,.85));
          -webkit-background-clip:text; background-clip:text; color:transparent;
          text-shadow: 0 0 10px rgba(255,0,0,.32);
        }
        @keyframes ticker { 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }

        /* title glow (cheap) */
        .title-lite{ text-shadow: 0 0 10px rgba(255,0,0,.28), 0 6px 28px rgba(255,0,0,.28); }

        /* tiles: reduce heavy shadow & use heartbeat scale only */
        .tile-lite{ animation: beat 1.6s ease-in-out infinite; }
        @keyframes beat { 0%,100%{ transform: scale(1) } 50%{ transform: scale(1.018) } }

        /* number jitter (transform-only) */
        .num-lite{ animation: jitter 1.1s steps(2,end) infinite; }
        @keyframes jitter{
          0%,100%{ transform: translate(0,0) }
          25%{ transform: translate(-0.5px,0.3px) }
          50%{ transform: translate(0.6px,-0.4px) }
          75%{ transform: translate(-0.4px,0.2px) }
        }

        /* button pulse (shadow only) */
        .btn-lite{ animation: bp 1.4s ease-in-out infinite; }
        @keyframes bp{
          0%,100%{ box-shadow: 0 0 14px rgba(255,0,0,.22), 0 0 28px rgba(255,0,0,.18) }
          50%{ box-shadow: 0 0 24px rgba(255,0,0,.42), 0 0 56px rgba(255,0,0,.3) }
        }

        /* auto "lite mode" on small screens */
        @media (max-width: 768px){
          .spot-lite{ display:none; }
          .siren-lite{ height:5px; }
        }
      `}</style>
    </section>
  );
}
