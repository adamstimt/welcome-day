import pixelTech from "/public/pixel_technology.png";
import siMoney from "/public/si_money-fill.png";
import fluentPeople from "/public/fluent_people-community-16-filled.png.png";
import bgImg from "/public/Group2.jpg";
import useRevealReplay from "../hooks/useRevealReplay";

export default function Domain() {
  const { ref: sectionRef, inView } = useRevealReplay();
  const appear =
    "will-change-transform transform-gpu transition-all duration-700 " +
    (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2");

  const cardBase =
    "bg-[rgba(124,115,108,0.25)] border border-red-500 rounded-2xl " +
    "p-5 sm:p-6 md:p-7 shadow-[0_0_12px_2px_rgba(255,0,0,0.45)] " +
    "flex flex-col items-start text-left overflow-visible " +
    "h-auto min-h-[220px] sm:min-h-[230px] " +
    "will-change-transform transform-gpu transition-all duration-700";

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="relative bg-[#0a0a0a] text-white py-16 sm:py-18 md:py-20 px-5 sm:px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative max-w-6xl mx-auto text-center">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6 ${appear}`}
        >
          Our Domains
        </h1>

        <p
          className={`text-gray-300 mx-auto max-w-4xl ${appear}
                      text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed md:leading-8 mb-8 sm:mb-10 md:mb-12`}
        >
          Dive into the world of our club and explore the Tech, Sponsoring, and
          Communication departments — the engines behind our success. Each one
          contributes to building, connecting, and inspiring our growing
          community.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {/* Tech */}
          <div className={`${cardBase} ${appear}`}>
            <img
              src={pixelTech}
              loading="lazy"
              alt="Tech Department"
              className="w-11 h-12 sm:w-[52px] sm:h-[58px] object-contain mb-3 sm:mb-4"
            />
            <h2 className="font-bold mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl break-words">
              Tech Department
            </h2>
            <p className="text-gray-300 break-words text-sm sm:text-[15px] md:text-base leading-relaxed">
              The core of innovation at ITC. Our tech team turns ideas into real
              solutions through coding, design, and cutting-edge technology.
            </p>
          </div>

          <div
            className={`${cardBase} ${appear}`}
            style={{ transitionDelay: inView ? "80ms" : "0ms" }}
          >
            <img
              src={siMoney}
              loading="lazy"
              alt="Sponsoring Department"
              className="w-11 h-12 sm:w-[52px] sm:h-[58px] object-contain mb-3 sm:mb-4"
            />
            <h2 className="font-bold mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl break-words">
              Sponsoring Department
            </h2>
            <p className="text-gray-300 break-words text-sm sm:text-[15px] md:text-base leading-relaxed">
              The bridge between ITC and its partners. They handle
              collaborations, funding, and partnerships to power our projects
              and events.
            </p>
          </div>

          <div
            className={`${cardBase} ${appear}`}
            style={{ transitionDelay: inView ? "160ms" : "0ms" }}
          >
            <img
              src={fluentPeople}
              loading="lazy"
              alt="Communication Department"
              className="w-11 h-12 sm:w-[52px] sm:h-[58px] object-contain mb-3 sm:mb-4"
            />
            <h2 className="font-bold mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl break-words">
              Communication Department
            </h2>
            <p className="text-gray-300 break-words text-sm sm:text-[15px] md:text-base leading-relaxed">
              The voice of ITC. They manage content, social media, and visuals
              to share our story and connect with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
