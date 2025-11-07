import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import logo from "/public/itc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-[5vh] pb-[2vh] px-[10vw] relative overflow-hidden">
      {/* very thin neon line on the very top of the footer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px
                   bg-[radial-gradient(60%_220%_at_50%_0%,rgba(168,26,19,0.9),transparent_70%)]
                   blur-[2px]"
      />

      {/* aurora background (doesn't affect layout) */}
      <span aria-hidden className="fx-aurora fx-a1" />
      <span aria-hidden className="fx-aurora fx-a2" />
      <span aria-hidden className="fx-aurora fx-a3" />
      {/* center glow */}
      <span aria-hidden className="fx-center-glow" />

      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6vh] sm:gap-[4vh] text-center sm:text-left">
          {/* Logo + Description (unchanged) */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <img
                src={logo}
                loading="lazy"
                alt="ITC Logo"
                className="w-[70vw] sm:w-[22vw] md:w-[25vw] lg:w-[26vw] h-auto mb-[2vh] -ml-[30px] select-none"
              />
            </div>
            <h3 className="text-[1.6rem] font-bold mb-[1.5vh] tracking-tight">
              Join Our Community
            </h3>
            <p className="text-ink-2/90 text-[1.02rem] leading-relaxed max-w-[52ch]">
              ITC is more than a club, it's a space where creativity meets
              technology. We connect students from all domains to explore new
              ideas, develop digital skills, and bring innovative projects to
              life.
            </p>
          </div>

          {/* Explore (underline on hover) */}
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
                    className="fx-underline text-gray-300 text-[1rem] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others (underline on hover) */}
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
                    className="fx-underline text-gray-300 text-[1rem] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us (neon halo on hover) */}
          <div className="lg:mt-[17vh]">
            <h3 className="text-[1.6rem] font-bold mb-[2vh]">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-[2vw] flex-wrap">
              {[
                [
                  "https://www.facebook.com/itc.blida.1",
                  <Facebook size={24} key="f" />,
                ],
                [
                  "https://www.instagram.com/it_community/",
                  <Instagram size={24} key="i" />,
                ],
                [
                  "https://www.linkedin.com/company/it-community/posts/",
                  <Linkedin size={24} key="l" />,
                ],
                [
                  "https://www.youtube.com/@itcblida",
                  <Youtube size={24} key="y" />,
                ],
                [
                  "https://discord.com/channels/964583970618638356",
                  <FaDiscord size={24} key="d" />,
                ],
              ].map(([href, Icon], idx) => (
                <a
                  key={idx}
                  href={href}
                  className="fx-soc text-gray-300 hover:text-[#a81a13] transition-colors"
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with sweep highlight (line is yours, effect is extra) */}
        <div className="relative">
          <div className="border-t border-gray-800 mt-[6vh]" />
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 -top-[2px] h-[2px]
                       bg-[linear-gradient(90deg,transparent,rgba(168,26,19,0.9),transparent)]
                       motion-safe:animate-[sweep_4.5s_linear_infinite]"
          />
        </div>

        <div className="pt-[2vh] text-center text-gray-400 text-[0.9rem]">
          © 2025 All rights reserved
        </div>
      </div>

      {/* scoped styles for the effects */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          /* underline grow effect */
          .fx-underline{
            position:relative;
            display:inline-block;
          }
          .fx-underline::after{
            content:"";
            position:absolute;
            left:0; right:0; bottom:-2px;
            height:2px;
            background: #a81a13;
            border-radius: 9999px;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform .3s ease;
            opacity:.9;
          }
          .fx-underline:hover::after,
          .fx-underline:focus-visible::after{
            transform: scaleX(1);
          }

          /* social neon halo (no layout change) */
          .fx-soc{ position:relative; display:inline-grid; place-items:center; }
          .fx-soc::before{
            content:"";
            position:absolute; inset:-10px;
            background: radial-gradient(100% 100% at 50% 0%, rgba(168,26,19,.55), transparent 70%);
            border-radius: 12px;
            opacity:0;
            transition: opacity .25s ease, transform .25s ease;
            filter: blur(10px);
            pointer-events:none;
            transform: translateY(2px);
          }
          .fx-soc:hover::before,
          .fx-soc:focus-visible::before{
            opacity:1; transform: translateY(0);
          }

          /* aurora blobs */
          .fx-aurora{
            position:absolute; filter:blur(60px); mix-blend-mode:screen; pointer-events:none; opacity:.5; z-index:-1;
          }
          .fx-a1{ width:42rem; height:42rem; left:-20%; top:10%;
            background: radial-gradient(closest-side, rgba(168,26,19,.30), transparent 70%);
            animation: floatA 16s ease-in-out infinite; }
          .fx-a2{ width:30rem; height:30rem; right:-15%; top:20%;
            background: radial-gradient(closest-side, rgba(255,255,255,.10), transparent 70%);
            animation: floatB 18s ease-in-out infinite 1s; }
          .fx-a3{ width:34rem; height:34rem; left:15%; bottom:-10%;
            background: radial-gradient(closest-side, rgba(168,26,19,.22), transparent 70%);
            animation: floatC 20s ease-in-out infinite .5s; }

          /* center glow */
          .fx-center-glow{
            position:absolute; left:50%; top:36%; transform:translateX(-50%);
            width:42rem; height:42rem; border-radius:9999px; z-index:-1;
            background: radial-gradient(closest-side, rgba(168,26,19,.11), transparent 65%);
            filter: blur(48px);
          }

          @keyframes floatA { 0%,100%{transform:translateY(-8px)} 50%{transform:translateY(8px)} }
          @keyframes floatB { 0%,100%{transform:translateY(10px)} 50%{transform:translateY(-10px)} }
          @keyframes floatC { 0%,100%{transform:translateX(-8px)} 50%{transform:translateX(8px)} }

          @keyframes sweep {
            0% { transform: translateX(-50%) scaleX(.2); opacity: 0; }
            30% { opacity: .9; }
            100% { transform: translateX(150%) scaleX(.2); opacity: 0; }
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
