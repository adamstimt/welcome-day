import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa"; 
import logo from "/public/itc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 text-center sm:text-left">
          {/* Logo + Description */}
          <div className="lg:-ml-[50px]  ">
            <div className="flex justify-center sm:justify-start">
              <img
                src={logo}
                alt="ITC Logo"
                className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] lg:-ml-[70px] h-auto mb-4 select-none"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed font-medium">
              ITC is more than a club, it's a space where creativity meets
              technology. We connect students from all domains to explore new
              ideas, develop digital skills, and bring innovative projects to
              life.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:mt-[120px] lg:ml-[140px]">
            <h3 className="text-2xl font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Departments", href: "#domains" },
                { label: "Our Teams", href: "#teams" },
                { label: "Events", href: "#events" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 text-lg hover:text-[#a81a13] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
       <div className="lg:mt-[120px] lg:ml-[100px] ">
  <h3 className="text-2xl font-bold mb-4">Others</h3>
  <ul className="space-y-3">
    {[
      { 
        label: "Contact Us", 
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact.itc.blida@gmail.com&su=Inquiry" 
      },
      { 
        label: "Privacy Policy", 
        href: "/itc20regg.pdf",  
        newTab: true 
      },
    
    ].map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          target={item.newTab || item.label === "Contact Us" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-gray-300 text-lg hover:text-[#a81a13] transition-colors"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</div>




          {/* Follow Us */}
          <div className="lg:mt-[120px] lg:ml-[30px] ">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-5">
              <a
                href="https://www.facebook.com/itc.blida.1"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_8px_#a81a13]"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/it_community/"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_8px_#a81a13]"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/it-community/posts/"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_8px_#a81a13]"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@itcblida"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_8px_#a81a13]"
              >
                <Youtube size={24} />
              </a>
              {/* 👇 Discord icon from react-icons */}
              <a
                href="https://discord.com/channels/964583970618638356"
                className="text-gray-300 hover:text-[#a81a13] transition-all duration-300 hover:drop-shadow-[0_0_8px_#a81a13]"
              >
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2025 All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
