import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import logo from "/public/itc-logo.png";

/**
 * Footer v2 — neon + aurora + playful interactions
 * - Featherweight: pure Tailwind + a few keyframes
 * - Motion-safe: reduced when prefers-reduced-motion
 * - Works on dark surfaces; pulls from your CSS vars (brand/ink)
 */
export default function Footer() {
  const linksExplore = [
    { label: "Departments", href: "#domains" },
    { label: "Our Teams", href: "#teams" },
    { label: "Events", href: "#events" },
    { label: "About Us", href: "#about" },
  ];

  const linksResources = [
    {
      label: "Contact Us",
      href: "mailto:itcclub.blida@gmail.com",
      newTab: true,
    },
    { label: "Rules", href: "/itc20regg.pdf", newTab: true },
    { label: "Privacy Policy", href: "/itc20regg.pdf", newTab: true },
  ];

  const socials = [
    ["https://www.facebook.com/itc.blida.1", <Facebook key="f" size={22} />],
    [
      "https://www.instagram.com/itc.club.blida",
      <Instagram key="i" size={22} />,
    ],
    [
      "https://www.linkedin.com/company/itc-blida",
      <Linkedin key="l" size={22} />,
    ],
    ["https://www.youtube.com/@ITC-Club", <Youtube key="y" size={22} />],
    [
      "https://discord.com/channels/964583970618638356",
      <FaDiscord key="d" size={22} />,
    ],
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        bg-surface-elevated text-ink-1
        pt-[6vh] pb-[2.5vh] px-[4vw]
      "
    >
      {/* Neon top accent (very subtle) */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 -top-px h-px
          before:absolute before:inset-0 before:blur-[2px]
          before:bg-[radial-gradient(60%_220%_at_50%_0%,rgba(var(--brand-500),0.9),transparent_70%)]
        "
      />

      {/* Aurora blobs (lightweight CSS keyframes) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.28] motion-safe:animate-none"
      >
        <div className="aurora blob-1" />
        <div className="aurora blob-2" />
        <div className="aurora blob-3" />
      </div>

      {/* Glow ring behind center content */}
      <div
        aria-hidden
        className="
          absolute left-1/2 top-[36%] -translate-x-1/2
          h-[42rem] w-[42rem] max-w-[120vw] rounded-full
          bg-[radial-gradient(closest-side,rgba(255,0,0,0.08),transparent_65%)]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-y-[6vh] sm:gap-y-[5vh] gap-x-[4vw]
            text-center sm:text-left
          "
        >
          {/* Brand + pitch */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}
              loading="lazy"
              alt="ITC Logo"
              className="w-[66vw] sm:w-[22vw] md:w-[21vw] lg:w-[18vw] h-auto mb-[2vh] select-none"
            />
            <h3 className="text-[1.6rem] font-bold mb-[1.5vh] tracking-tight">
              Join Our Community
            </h3>
            <p className="text-ink-2/90 text-[1.02rem] leading-relaxed max-w-[52ch]">
              ITC is more than a club, it’s a space where creativity meets
              digital. We connect students from all domains to explore ideas,
              develop skills, and bring innovative projects to life.
            </p>
          </div>

          {/* Explore */}
          <FooterList title="Explore">
            {linksExplore.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterList>

          {/* Resources */}
          <FooterList title="Resources">
            {linksResources.map((item) => (
              <FooterLink
                key={item.label}
                href={item.href}
                newTab={item.newTab}
              >
                {item.label}
              </FooterLink>
            ))}
          </FooterList>

          {/* Socials */}
          <div className="lg:mt-[10vh]">
            <h3 className="text-[1.6rem] font-bold mb-[2vh] tracking-tight">
              Follow Us
            </h3>
            <div className="flex justify-center sm:justify-start gap-[1.2rem] flex-wrap">
              {socials.map(([href, Icon], i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="social"
                  className="
                    group relative grid h-11 w-11 place-items-center
                    rounded-xl border border-ink-3/25 bg-black/10
                    transition-all duration-300
                    hover:-translate-y-[2px] hover:shadow-[0_0_24px_rgba(var(--brand-500),0.35)]
                    hover:border-transparent
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-500))]
                  "
                >
                  {/* orbit halo */}
                  <span
                    aria-hidden
                    className="
                      pointer-events-none absolute inset-0 rounded-xl
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-[radial-gradient(100%_100%_at_50%_0%,rgba(var(--brand-500),0.55),transparent_70%)]
                    "
                  />
                  <span
                    className="
                      relative z-[1] text-ink-2 group-hover:text-ink-1
                      transition-colors duration-300
                    "
                  >
                    {Icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider w/ neon sweep */}
        <div className="relative mt-[6vh]">
          <div className="h-px w-full bg-ink-3/25" />
          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-x-0 -top-1 h-[2px]
              bg-[linear-gradient(90deg,transparent,rgba(var(--brand-500),0.8),transparent)]
              motion-safe:animate-sweep
            "
          />
        </div>

        {/* Copyright */}
        <div className="pt-[2.2vh] text-center text-ink-3 text-[0.95rem]">
          © 2025 All rights reserved
        </div>
      </div>

      {/* Inline keyframes (kept tiny & safe) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .aurora {
            position: absolute;
            filter: blur(60px);
            mix-blend-mode: screen;
            pointer-events: none;
            opacity: .55;
          }
          .blob-1 { 
            width: 42rem; height: 42rem; left: -20%; top: 10%;
            background: radial-gradient(closest-side, rgba(var(--brand-500), .30), transparent 70%);
            animation: floatA 16s ease-in-out infinite;
          }
          .blob-2 { 
            width: 30rem; height: 30rem; right: -15%; top: 20%;
            background: radial-gradient(closest-side, rgba(255,255,255,.12), transparent 70%);
            animation: floatB 18s ease-in-out infinite 1s;
          }
          .blob-3 { 
            width: 34rem; height: 34rem; left: 15%; bottom: -10%;
            background: radial-gradient(closest-side, rgba(255,0,0,.22), transparent 70%);
            animation: floatC 20s ease-in-out infinite .5s;
          }
          @keyframes floatA { 0%,100%{transform:translateY(-8px)} 50%{transform:translateY(8px)} }
          @keyframes floatB { 0%,100%{transform:translateY(10px)} 50%{transform:translateY(-10px)} }
          @keyframes floatC { 0%,100%{transform:translateX(-8px)} 50%{transform:translateX(8px)} }
          @keyframes sweep {
            0% { transform: translateX(-50%) scaleX(.2); opacity: 0; }
            30% { opacity: .9; }
            100% { transform: translateX(150%) scaleX(.2); opacity: 0; }
          }
          .animate-sweep {
            animation: sweep 4.5s linear infinite;
          }
        }
      `}</style>
    </footer>
  );
}

/* ---------- Small pieces ---------- */

function FooterList({ title, children }) {
  return (
    <div className="lg:mt-[10vh]">
      <h3 className="text-[1.6rem] font-bold mb-[2vh] tracking-tight">
        {title}
      </h3>
      <ul className="space-y-[1.1rem] text-[1.02rem]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, newTab }) {
  return (
    <li>
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="
          group inline-flex items-center gap-2 text-ink-2/90 transition-all
          hover:text-ink-1
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-500))]
        "
      >
        <span
          className="
            relative after:block after:h-[2px] after:w-0 after:rounded
            after:bg-[rgb(var(--brand-500))] after:transition-all after:duration-300
            group-hover:after:w-full group-focus-visible:after:w-full
          "
        >
          {children}
        </span>
        <span
          aria-hidden
          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        >
          →
        </span>
      </a>
    </li>
  );
}
