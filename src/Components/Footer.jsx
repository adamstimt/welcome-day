import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import logo from "/public/itc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-elevated text-ink-1 py-[5vh] px-[3vw]">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6vh] sm:gap-[4vh] text-center sm:text-left">
          {/* Logo + Description */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <img
                src={logo}
                loading="lazy"
                alt="ITC Logo"
                className="w-[70vw] sm:w-[22vw] md:w-[25vw] lg:w-[26vw] h-auto mb-[2vh] -ml-[30px] select-none"
              />
            </div>
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">
              Join Our Community
            </h3>
            <p className="text-ink-2 text-[1rem] sm:text-[1.1rem] mb-[3vh] leading-relaxed font-medium">
              ITC is more than a club, it's a space where creativity meets
              digital. We connect students from all domains to explore new
              ideas, develop skills, and bring innovative projects to life.
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
                    className="text-ink-2 text-[1rem]
                               hover:text-brand-500 hover:drop-shadow-[0_0_0.5rem_rgb(var(--brand-500))]
                               transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:mt-[17vh]">
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">Resources</h3>
            <ul className="space-y-[1.5vh]">
              {[
                {
                  label: "Contact Us",
                  href: "mailto:itcclub.blida@gmail.com",
                  newTab: true,
                },
                { label: "Rules", href: "/itc20regg.pdf", newTab: true },
                {
                  label: "Privacy Policy",
                  href: "/itc20regg.pdf",
                  newTab: true,
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-ink-2 text-[1rem]
                               hover:text-brand-500 hover:drop-shadow-[0_0_0.5rem_rgb(var(--brand-500))]
                               transition-colors"
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
              {[
                [
                  "https://www.facebook.com/itc.blida.1",
                  <Facebook key="f" size={24} />,
                ],
                [
                  "https://www.instagram.com/itc.club.blida",
                  <Instagram key="i" size={24} />,
                ],
                [
                  "https://www.linkedin.com/company/itc-blida",
                  <Linkedin key="l" size={24} />,
                ],
                [
                  "https://www.youtube.com/@ITC-Club",
                  <Youtube key="y" size={24} />,
                ],
                [
                  "https://discord.com/channels/964583970618638356",
                  <FaDiscord key="d" size={24} />,
                ],
              ].map(([href, Icon], idx) => (
                <a
                  key={idx}
                  href={href}
                  className="text-ink-2 hover:text-brand-500 transition-all duration-300
                             hover:drop-shadow-[0_0_0.5rem_rgb(var(--brand-500))]"
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ink-3/30 mt-[6vh] pt-[2vh] text-center text-ink-3 text-[0.9rem]">
          © 2025 All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
