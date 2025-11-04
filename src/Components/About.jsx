import React, { useEffect, useRef, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";

import itc1 from "/public/itc1.jpg";
import itc2 from "/public/itc2.jpg";
import itc3 from "/public/itc3.jpg";
import bgImg from "/public/Group2.jpg";

const About = () => {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex flex-col items-center justify-center min-h-[120vh] py-20 md:py-32 px-4 sm:px-6 lg:px-16 text-gray-700 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-7xl flex flex-col items-center text-center transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 transition-all duration-[1200ms] ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Us
        </h2>

        {/* Main Content */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full transition-all duration-[1200ms] ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-[85%] sm:w-[400px] md:w-[450px]">
              {/* main image */}
              <img
                src={itc1}
                alt="ITC main"
                className={`rounded-2xl border-[3px] border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.5)] w-full object-cover transition-all duration-700 ${
                  isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              />

              {/* top-left overlapped image */}
              <img
                src={itc2}
                alt="ITC secondary"
                className={`absolute top-[110%] -left-8 sm:top-[105%] sm:-left-12 w-[45%] sm:w-[180px] md:w-[200px] rounded-xl border-[2px] border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
              />

              {/* bottom-right image */}
              <img
                src={itc3}
                alt="ITC third"
                className={`absolute -bottom-14 -right-6 sm:-bottom-16 sm:-right-10 w-[55%] sm:w-[220px] md:w-[250px] rounded-xl border-[2px] border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                }`}
              />
            </div>
          </div>

          {/* Text Side */}
         <div
  className={`w-full lg:w-1/2 flex flex-col gap-6 text-left text-white transition-all duration-[1200ms] ease-out delay-500 ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
  } mt-24 sm:mt-0`}  
>
  <p className="font-semibold leading-relaxed text-base sm:text-lg md:text-xl text-gray-200">
    ITC is a vibrant student-led club dedicated to exploring the world
    of technology and innovation. We bring together passionate
    learners from different fields to learn, create, and collaborate
    on projects that make an impact.
  </p>

  <div>
    <h3 className="text-lg md:text-xl font-bold mb-6 text-red-600">
      What We Do
    </h3>
    <ul className="space-y-4 text-[15px] sm:text-[16px] font-[400] text-gray-300">
      <li className="flex items-start gap-2">
        <FaCheckSquare
          className="text-red-600 mt-1 flex-shrink-0"
          size={18}
        />
        Encouraging problem solving through engaging tech challenges.
      </li>
      <li className="flex items-start gap-2">
        <FaCheckSquare
          className="text-red-600 mt-1 flex-shrink-0"
          size={18}
        />
        Building strong partnerships within and beyond our university.
      </li>
      <li className="flex items-start gap-2">
        <FaCheckSquare
          className="text-red-600 mt-1 flex-shrink-0"
          size={18}
        />
        Hosting workshops and sessions to develop practical skills.
      </li>
      <li className="flex items-start gap-2">
        <FaCheckSquare
          className="text-red-600 mt-1 flex-shrink-0"
          size={18}
        />
        Creating opportunities for growth among members.
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
