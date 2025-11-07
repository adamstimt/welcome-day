import { FaCheckSquare } from "react-icons/fa";

import itc1 from "/public/itc1.jpg";
import itc2 from "/public/itc2.jpg";
import itc3 from "/public/itc3.jpg";
import bgImg from "/public/Group2.jpg";
import useRevealReplay from "../hooks/useRevealReplay";

const About = () => {
  const { ref: sectionRef, inView } = useRevealReplay();

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
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={`relative z-10 w-full max-w-7xl flex flex-col items-center text-center
          will-change-transform transform-gpu transition-all duration-[900ms] ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12
            will-change-transform transform-gpu transition-all duration-[900ms] ease-out delay-100
            ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          About Us
        </h2>

        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full
            will-change-transform transform-gpu transition-all duration-[900ms] ease-out delay-150
            ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          {/* IMAGE COLUMN */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-24 sm:mb-28 md:mb-44 lg:mb-0 max-[646px]:mb-20">
            <div className="relative w-[85%] sm:w-[400px] md:w-[480px] lg:w-[520px]">
              {/* Main */}
              <img
                src={itc1}
                alt="ITC main"
                className={`rounded-2xl border-[3px] border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.5)] w-full object-cover
                  will-change-transform transform-gpu transition-all duration-700
                  ${inView ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
              />

              {/* Small bottom-right */}
              <img
                src={itc3}
                alt="ITC third"
                className={`absolute -bottom-14 -right-6 sm:-bottom-16 sm:-right-8 md:-bottom-10 md:-right-6 lg:-bottom-16 lg:-right-10 max-[646px]:-right-4
                  w-[55%] sm:w-[220px] md:w-[235px] lg:w-[250px] rounded-xl border-[2px] border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.4)]
                  will-change-transform transform-gpu transition-all duration-700 delay-200 max-[646px]:-bottom-2
                  ${
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2"
                  }`}
              />

              {/* Small lower-left */}
              <img
                src={itc2}
                alt="ITC secondary"
                className={`absolute top-[110%] -left-8 sm:top-[104%] sm:-left-10 md:top-[94%] md:-left-8 lg:top-[105%] lg:-left-12 max-[646px]:-left-4
                  w-[45%] sm:w-[180px] md:w-[190px] lg:w-[200px] max-[646px]:w-[200px] rounded-xl border-[2px] border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.4)]
                  will-change-transform transform-gpu transition-all duration-700 delay-150 max-[646px]:top-[94%]
                  ${
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
              />
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div
            className={`w-full lg:w-1/2 flex flex-col gap-6 text-left text-white
              will-change-transform transform-gpu transition-all duration-[900ms] ease-out delay-200 max-[646px]:mt-2
              ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
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
