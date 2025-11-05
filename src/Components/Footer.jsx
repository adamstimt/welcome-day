import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import logo from "/public/itc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-[5vh] px-[3vw]">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6vh] sm:gap-[4vh] text-center sm:text-left">
          {/* Logo + Description */}
          <div>
            <div className="flex justify-center sm:justify-start  ">
              <img
                src={logo}
                loading="lazy"
                alt="ITC Logo"
                className="w-[70vw] sm:w-[22vw] md:w-[25vw] lg:w-[26vw] h-auto mb-[2vh] -ml-[30px] select-none"
              />
            </div>
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">Join Our Community</h3>
            <p className="text-gray-300 text-[1rem] sm:text-[1.1rem] mb-[3vh] leading-relaxed font-medium">
              ITC is more than a club, it's a space where creativity meets
              technology. We connect students from all domains to explore new
              ideas, develop digital skills, and bring innovative projects to
              life.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:mt-[17vh] lg:ml-[20vh]">
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">Explore</h3>
            <ul className="space-y-[1.5vh]">
              {[
                 { label: "Departments", href: "#domains" },
                 { label: "Our Teams", href: "#teams" },
                 { label: "Events", href: "#events" },
                { label: "About Us", href: "#about" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 text-[1rem] hover:text-[#a81a13] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className="lg:mt-[17vh] lg:ml-[10vh]">
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">Others</h3>
            <ul className="space-y-[1.5vh]">
              {[
                {
                  label: "Contact Us",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact.itc.blida@gmail.com&su=Inquiry",
                },
                {
                  label: "Privacy Policy",
                  href: "/itc20regg.pdf",
                  newTab: true,
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={
                      item.newTab || item.label === "Contact Us"
                        ? "_blank"
                        : "_self"
                    }
                    rel="noopener noreferrer"
                    className="text-gray-300 text-[1rem] hover:text-[#a81a13] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:mt-[17vh]">
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-[2vw] flex-wrap">
              <a
                href="https://www.facebook.com/itc.blida.1"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_0.5rem_#a81a13]"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/it_community/"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_0.5rem_#a81a13]"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/it-community/posts/"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_0.5rem_#a81a13]"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@itcblida"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_0.5rem_#a81a13]"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://discord.com/channels/964583970618638356"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_0.5rem_#a81a13]"
              >
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-[6vh] pt-[2vh] text-center text-gray-400 text-[0.9rem]">
          © 2025 All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
