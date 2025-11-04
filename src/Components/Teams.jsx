import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import roboticsImg from "/public/robotics.png";
import cyberImg from "/public/cyber.png";
import aiImg from "/public/ai.png";
import networkImg from "/public/network.png";
import webImg from "/public/web.png";
import videoImg from "/public/video.png";
import bgImg from "/public/Group2.png";
import mobile from "/public/mobile.png";
import design from "/public/design.png";
import game from "/public/game.png";
import dd from "/public/3d.png";
import markiting from "/public/marketing.png";
import trading from "/public/trading.png";

const Teams = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamsData = [
    { img: roboticsImg, title: "Robotics", description: "Building, programming, and maintaining autonomous machines to perform complex tasks." },
    { img: cyberImg, title: "Cyber Security", description: "Protecting digital systems, networks, and data from unauthorized access and threats." },
    { img: aiImg, title: "AI", description: "Developing intelligent systems that can learn, reason, perceive, and make decisions." },
    { img: networkImg, title: "Network", description: "Implementing and managing the reliable infrastructure that connects devices and systems." },
    { img: webImg, title: "Web Development", description: "Maintaining the structure, design, and functionality of websites and applications." },
    { img: mobile, title: "Mobile app", description: "Focused on bringing ideas to life through interactive and user friendly mobile applications." },
    { img: design, title: "Graphic Design", description: "They craft the visuals that define ITC’s identity from posters to digital content." },
    { img: game, title: "Game development", description: "Passionate about coding and creativity, they design and build immersive gaming experiences." },
    { img: dd, title: "3D", description: "Masters of depth and design, they create 3D models and visuals that bring imagination to life." },
    { img: markiting, title: "Markiting", description: "The storytellers of ITC. They manage social media and strategies to spread our message." },
    { img: trading, title: "Trading", description: "Exploring the basics of finance and markets they learn how trading works and develop smart analytical thinking." },
    { img: videoImg, title: "Video Editing", description: "Crafting raw footage into compelling, cohesive, and professional visual stories." },
  ];

  const cardsPerPage = 6;
  const totalPages = Math.ceil(teamsData.length / cardsPerPage);

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage;
    return teamsData.slice(start, start + cardsPerPage);
  };

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
          else setVisible(false);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="teams"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto z-10 transition-all duration-1000">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 text-white">Our Teams</h2>
          <p className="text-gray-300 max-w-4xl text-[19px] mx-auto">
            Discover the talented teams that bring ITC to life — each with its
            own mission, skills, and creative spirit. Join the one that matches
            your passion and start making an impact with us.
          </p>
        </div>

        {/* Navigation and Cards */}
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={prevPage}
            className="w-12 h-12 md:w-[80px] md:h-[200px] flex items-center justify-center"
          >
            <ChevronLeft size={75} strokeWidth={2.6} color="#fff" />
          </button>

          <div
            className={`flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {getCurrentCards().map((team, i) => (
              <div
                key={i}
                className="relative h-[320px] md:h-[280px] text-white rounded-3xl p-6 md:p-8 
              flex flex-col items-center text-center cursor-pointer 
              border border-red-700/60 bg-[#2f1b1b] transition-all duration-700 hover:scale-105"
              >
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none 
                  before:content-[''] before:absolute before:inset-0 
                  before:rounded-3xl before:shadow-[inset_0_0_12px_rgba(255,0,0,0.25)]"
                ></div>

                <img
                  src={team.img}
                  alt={team.title}
                  className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-black object-contain p-2 
                border-2 border-red-500 mb-4 shadow-[0_0_8px_rgba(255,0,0,0.4)]"
                />
                <h3 className="text-lg md:text-xl font-bold mb-3 z-10">
                  {team.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed z-10">
                  {team.description}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-12 h-12 md:w-[80px] md:h-[200px] flex items-center justify-center"
          >
            <ChevronRight size={75} strokeWidth={2.6} color="#fff" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === i
                  ? "bg-red-600 scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
