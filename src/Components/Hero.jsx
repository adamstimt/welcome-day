import React, { useEffect, useRef, useState } from "react";
import bghero from "/public/final.png";
import welcomeImg from "/public/EL-Welcome-Day4.png"; // ✅ Added import
import Navbar from "./Navbar";

export default function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [pVisible, setPVisible] = useState(false);
  const [pText, setPText] = useState("");

  // ❌ Removed h1Full (replaced by image)
  const pFull =
    "Join the Information Technology Community where creativity, innovation come together to build the future and teamwork.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === pRef.current && entry.isIntersecting) {
            setPVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (pRef.current) observer.observe(pRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pVisible) {
      let i = 0;
      const interval = setInterval(() => {
        setPText(pFull.slice(0, i));
        i++;
        if (i > pFull.length) clearInterval(interval);
      }, 25);
    }
  }, [pVisible]);

  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"
        style={{ backgroundImage: `url(${bghero})` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div
        className="
          relative z-10 flex flex-col items-center justify-center
          min-h-screen px-6 text-center
          gap-8 sm:gap-10 md:gap-12
          pt-32 sm:pt-40 md:pt-48
        "
      >
        {/* ✅ Replaced h1 text with image */}
        <img
          src={welcomeImg}
          alt="EL Welcome Day"
          ref={h1Ref}
          className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[45%] mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        />

        <p
          ref={pRef}
          className="
            text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl
            max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
            mx-auto whitespace-pre-wrap
          "
        >
          {pText}
        </p>

        <a
          href="https://itc-welcome-day-25-26.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="
              relative px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5
              mt-10 sm:mt-16 md:mt-8
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              font-bold text-white bg-black border-2 border-red-800 rounded-3xl
              shadow-[0_0_15px_rgba(255,0,0,0.35),0_0_30px_rgba(255,0,0,0.25)]
              hover:shadow-[0_0_25px_rgba(255,0,0,0.5),0_0_45px_rgba(255,0,0,0.4)]
              transition-all duration-300 ease-in-out
              animate-pop opacity-0 animation-delay-1000
            "
          >
            Join us
          </button>
        </a>
      </div>
    </div>
  );
}
