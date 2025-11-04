import React, { useEffect, useRef, useState } from "react";
import bghero from "/public/final.png";
import Navbar from "./Navbar";

export default function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [h1Visible, setH1Visible] = useState(false);
  const [pVisible, setPVisible] = useState(false);
  const [h1Text, setH1Text] = useState("");
  const [pText, setPText] = useState("");

  const h1Full = "Empowering Students\nThrough Technology.";
  const pFull =
    "Join the Information Technology Community where creativity, innovation come together to build the future and teamwork";

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === h1Ref.current && entry.isIntersecting) {
            setH1Visible(true);
          }
          if (entry.target === pRef.current && entry.isIntersecting) {
            setPVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (h1Ref.current) observer.observe(h1Ref.current);
    if (pRef.current) observer.observe(pRef.current);

    return () => observer.disconnect();
  }, []);

  // Typing effect for h1
  useEffect(() => {
    if (h1Visible) {
      let i = 0;
      const interval = setInterval(() => {
        setH1Text(h1Full.slice(0, i));
        i++;
        if (i > h1Full.length) clearInterval(interval);
      }, 50);
    }
  }, [h1Visible]);

  // Typing effect for p (after h1)
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
    <div
      id="hero" 
      className="relative h-[100vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"
        style={{ backgroundImage: `url(${bghero})` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex mt-[150px] flex-col items-center justify-center min-h-[calc(100vh-88px)] px-4 text-center">
        <h1
          ref={h1Ref}
          
          className="text-5xl md:text-7xl font-bold text-gray-300 mb-6 leading-tight whitespace-pre-wrap"
        >
          {h1Text}
          <span className="animate-blink"></span>
        </h1>

        <p
          ref={pRef}
          className="text-gray-400 text-lg md:text-2xl max-w-4xl mt-8 mb-12 whitespace-pre-wrap"
        >
          {pText}
        </p>

                <a 
            href="https://itc-welcome-day-25-26.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button
              className="relative px-16 py-5 mt-24 h-[80px] w-[250px] text-3xl font-bold text-white bg-black border-2 border-red-800 rounded-3xl 
              shadow-[0_0_15px_rgba(255,0,0,0.35),0_0_30px_rgba(255,0,0,0.25)] 
              hover:shadow-[0_0_25px_rgba(255,0,0,0.5),0_0_45px_rgba(255,0,0,0.4)] 
              transition-all duration-300 ease-in-out opacity-0 animate-pop animation-delay-1000"
            >
              Join us
            </button>
          </a>

      </div>
    </div>
  );
}
