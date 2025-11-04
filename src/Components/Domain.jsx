import React, { useEffect, useRef, useState } from "react";
import pixelTech from "/public/pixel_technology.png";
import siMoney from "/public/si_money-fill.png";
import fluentPeople from "/public/fluent_people-community-16-filled.png.png";
import bgImg from "/public/Group2.png";

const Domain = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="relative bg-[#0a0a0a] text-white py-20 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-6xl mx-auto text-center transition-all duration-1000">
        <h1
          className={`text-3xl md:text-5xl mb-8 font-black transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Domains
        </h1>
        <p
          className={`text-gray-300 mb-12 max-w-6xl text-[19px] mx-auto transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Dive into the world of our club and explore the Tech, Sponsoring, and
          Communication departments — the engines behind our success. Each one
          contributes to building, connecting, and inspiring our growing
          community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {/* Tech Department */}
          <div
            className={`bg-[rgba(124,115,108,0.25)]
              border border-red-500 rounded-2xl p-8 
              transition-all duration-1000 flex flex-col items-center text-left 
              shadow-[0_0_12px_2px_rgba(255,0,0,0.45)]
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src={pixelTech}
              alt="Tech Department"
              className="w-[55px] h-[63px] mr-[220px] object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-2 mr-[90px] w-[200px]">
              Tech Department
            </h2>
            <p className="text-gray-400 text-[18px] mr-[55px] leading-relaxed">
              The core of innovation at ITC. <br /> Our tech team turns ideas
              <br /> into real solutions through <br /> coding, design, and
              cutting <br /> edge technology.
            </p>
          </div>

          {/* Sponsoring Department */}
          <div
            className={`bg-[rgba(124,108,108,0.25)]
              border border-red-500 rounded-2xl p-8 
              transition-all duration-1000 flex flex-col items-center text-left 
              shadow-[0_0_12px_2px_rgba(255,0,0,0.45)] delay-200
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src={siMoney}
              alt="Sponsoring Department"
              className="w-[55px] h-[63px] mr-[220px] object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-2 ml-[110px] w-[400px]">
              Sponsoring Department
            </h2>
            <p className="text-gray-400 text-[18px] mr-[55px] leading-relaxed">
              The bridge between ITC and its partners. They handle collaborations,
              funding, and partnerships to power our projects and events.
            </p>
          </div>

          {/* Communication Department */}
          <div
            className={`bg-[rgba(124,108,108,0.25)]
              border border-red-500 rounded-2xl p-8 
              transition-all duration-1000 flex flex-col items-center text-left 
              shadow-[0_0_12px_2px_rgba(255,0,0,0.45)] delay-400
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src={fluentPeople}
              alt="Communication Department"
              className="w-[55px] h-[63px] mr-[220px] object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-2 ml-[198px] w-[500px]">
              Communication Department
            </h2>
            <p className="text-gray-400 text-[18px] mr-[55px] leading-relaxed">
              The voice of ITC. They manage content, social media, and visuals
              to share our story and connect with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;
