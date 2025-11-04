import React, { useEffect, useRef, useState } from "react";
import background from "../assets/newbee.webp";
import membersImg from "../assets/members.png";
import eventsImg from "../assets/events.png";
import teamsImg from "../assets/teams.png";

const Count = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
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
      className="relative w-full bg-center bg-cover bg-no-repeat py-24 sm:py-32 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-20 lg:gap-[370px] text-center px-6 transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* CARD 1 */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={membersImg}
            alt="Members Icon"
            className="w-[90px] sm:w-[100px] md:w-[115px] object-contain mb-2"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">+300</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">
            Members
          </p>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={eventsImg}
            alt="Events Icon"
            className="w-[90px] sm:w-[100px]  md:w-[115px] object-contain mb-2"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">+10</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">
            Events / year
          </p>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={teamsImg}
            alt="Teams Icon"
            className="w-[90px] sm:w-[100px] md:w-[115px] object-contain mb-2"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">+15</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">
            Teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default Count;
