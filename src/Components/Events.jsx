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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
        className={`max-w-7xl mx-auto text-center -mt-[20px] mb-16 transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
          Our Events
        </h2>
        <p className="text-gray-300 text-2xl max-w-3xl mx-auto">
          Discover the moments that define our community <br />
          From workshops and talks to competitions and showcases
        </p>
      </div>

      {/* Infinite scroll container */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-[1200ms] ease-out delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="scroll-track flex space-x-8">
          {[...events, ...events].map((event, i) => (
            <div
              key={i}
              className="min-w-[260px] h-[320px] bg-[rgba(124,108,108,0.25)] backdrop-blur-sm
              border-2 border-red-700/80 rounded-2xl p-5
              shadow-[0_0_20px_rgba(255,0,0,0.5)]
              transition-all duration-300 cursor-pointer
              flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />
              <img
                src={event.img}
                loading="lazy"
                alt={event.name}
                className="relative z-10 max-w-[70%] max-h-[90%] object-contain filter brightness-95 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes + Responsive Speed */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scroll-track {
            animation: scroll 20s linear infinite;
          }

          /* Faster on tablets */
          @media (max-width: 1024px) {
            .scroll-track {
              animation-duration: 10s;
            }
          }

          /* Even faster on phones */
          @media (max-width: 640px) {
            .scroll-track {
              animation-duration: 10s;
            }
          }
        `}
      </style>
    </section>
  );
}
