import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useRevealReplay from "../hooks/useRevealReplay";

const Teams = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { ref: sectionRef, inView } = useRevealReplay(); // <-- use improved reveal

  const teamsData = [
    {
      img: "/robotics.png",
      title: "Robotics",
      description:
        "Building, programming, and maintaining autonomous machines to perform complex tasks.",
    },
    {
      img: "/cyber.png",
      title: "Cyber Security",
      description:
        "Protecting digital systems, networks, and data from unauthorized access and threats.",
    },
    {
      img: "/ai.png",
      title: "AI",
      description:
        "Developing intelligent systems that can learn, reason, perceive, and make decisions.",
    },
    {
      img: "/network.png",
      title: "Network",
      description:
        "Implementing and managing the reliable infrastructure that connects devices and systems.",
    },
    {
      img: "/web.png",
      title: "Web Development",
      description:
        "Maintaining the structure, design, and functionality of websites and applications.",
    },
    {
      img: "/mobile.png",
      title: "Mobile App",
      description:
        "Bringing ideas to life through interactive and user friendly mobile applications.",
    },
    {
      img: "/design.png",
      title: "Graphic Design",
      description:
        "They craft the visuals that define ITC’s identity from posters to digital content.",
    },
    {
      img: "/game.png",
      title: "Game Development",
      description:
        "Passionate about coding and creativity, they design and build immersive gaming experiences.",
    },
    {
      img: "/3d.png",
      title: "3D",
      description:
        "Masters of depth and design, they create 3D models and visuals that bring imagination to life.",
    },
    {
      img: "/marketing.png",
      title: "Marketing",
      description:
        "The storytellers of ITC. They manage social media and strategies to spread our message.",
    },
    {
      img: "/trading.png",
      title: "Trading",
      description:
        "Exploring the basics of finance and markets they learn how trading works and develop smart analytical thinking.",
    },
    {
      img: "/video.png",
      title: "Video Editing",
      description:
        "Crafting raw footage into compelling, cohesive, and professional visual stories.",
    },
  ];

  const cardsPerPage = 6;
  const totalPages = Math.ceil(teamsData.length / cardsPerPage);

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage;
    return teamsData.slice(start, start + cardsPerPage);
  };

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <div
      ref={sectionRef}
      id="teams"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundImage: "url('/Group2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header — smaller initial offset & GPU transform to avoid visible gap */}
        <div
          className={`text-center mb-12 will-change-transform transform-gpu transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Teams
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Discover the talented teams that bring ITC to life — each with its
            own mission, skills, and creative spirit. Join the one that matches
            your passion and start making an impact with us.
          </p>
        </div>

        {/* Navigation and Cards */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={prevPage}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={40} strokeWidth={2.5} color="#fff" />
          </button>

          <div
            className={`flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 will-change-transform transform-gpu transition-opacity duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            {getCurrentCards().map((team, i) => (
              <div key={i} className="overflow-hidden rounded-3xl">
                <div
                  className={`relative h-[280px] sm:h-[260px] md:h-[300px] text-white rounded-3xl p-6 
                  flex flex-col items-center text-center cursor-pointer 
                  border border-red-700/60 bg-[#2f1b1b] transition-transform duration-700 
                  hover:scale-105 shadow-[0_0_12px_rgba(255,0,0,0.25)] transform-gpu
                  ${
                    inView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }} // subtle stagger
                >
                  <img
                    src={team.img}
                    loading="lazy"
                    alt={team.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black object-contain p-2 
                    border-2 border-red-500 mb-4 shadow-[0_0_8px_rgba(255,0,0,0.4)]"
                  />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 z-10">
                    {team.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed z-10">
                    {team.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={40} strokeWidth={2.5} color="#fff" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentPage === i
                  ? "bg-red-600 scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
