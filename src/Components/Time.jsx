import React, { useEffect, useState } from "react";
import bgImg from "/public/Group2.jpg";

const Time = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-11-09T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
  className="relative min-h-screen py-40 flex flex-col items-center justify-center text-white px-6"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/40  " />

      <div className="relative z-10 text-center -mt-[70px]  ">
        <h2 className="text-4xl md:text-6xl font-black text-gray-300 mb-8 ">
          The Journey Begins Soon
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 max-w-6xl mx-auto mb-16 leading-relaxed">
          Mark Your Calendars Our Welcome Day Is Approaching   A New Chapter Of
          Creativity, Innovation, And Collaboration Is About To Begin.
        </p>

     <div className="flex flex-wrap justify-center gap-10 md:gap-14 mt-16">
  {[
    { label: "Days", value: timeLeft.days || "00" },
    { label: "Hours", value: timeLeft.hours || "00" },
    { label: "Minutes", value: timeLeft.minutes || "00" },
    { label: "Seconds", value: timeLeft.seconds || "00" },
  ].map((item, index) => (
    <div
      key={index}
      className="w-[170px] h-[180px] bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center
                 shadow-[0_25px_60px_-10px_rgba(255,0,0,0.85),10px_0_20px_-10px_rgba(255,0,0,0.25),-10px_0_20px_-10px_rgba(255,0,0,0.25)]"
    >
      <span className="text-5xl font-bold text-white">
        {String(item.value).padStart(2, "0")}
      </span>
      <span className="text-[22px]  mt-2">{item.label}</span>
    </div>
  ))}
</div>
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
    </section>
  );
};

export default Time;
