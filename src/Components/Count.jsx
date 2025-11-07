import React, { useEffect, useRef, useState } from "react";
import background from "/public/newbee.webp";
import membersImg from "/public/members.png";
import eventsImg from "/public/events.png";
import teamsImg from "/public/teams.png";

function useInViewReplay(
  ref,
  { threshold = 0.3, root = null, rootMargin = "0px" } = {}
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setInView(true);
          else setInView(false);
        }
      },
      { threshold, root, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, root, rootMargin]);

  return inView;
}

function useCountUp(when, to, { duration = 1200 } = {}) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // On leave: reset immediately so it'll replay next time
    if (!when) {
      setVal(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setVal(to);
      return;
    }

    let start;
    const step = (t) => {
      if (start == null) start = t;
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [when, to, duration]);

  return val;
}

const Count = () => {
  const sectionRef = useRef(null);
  const visible = useInViewReplay(sectionRef, { threshold: 0.3 });

  const members = useCountUp(visible, 300, { duration: 1100 });
  const events = useCountUp(visible, 10, { duration: 1100 });
  const teams = useCountUp(visible, 15, { duration: 1100 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-center bg-cover bg-no-repeat py-24 sm:py-32 text-white overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
      aria-label="ITC Counters"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div
        className={`relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-20 lg:gap-[370px] text-center px-6 transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex flex-col items-center gap-3">
          <img
            src={membersImg}
            loading="lazy"
            alt="Members Icon"
            className="w-[90px] sm:w-[100px] md:w-[115px] object-contain mb-2"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            +{members}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">
            Members
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img
            src={eventsImg}
            loading="lazy"
            alt="Events Icon"
            className="w-[90px] sm:w-[100px]  md:w-[115px] object-contain mb-2"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            +{events}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">
            Events / year
          </p>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={teamsImg}
            loading="lazy"
            alt="Teams Icon"
            className="w-[90px] sm:w-[100px] md:w-[115px] object-contain mb-2"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            +{teams}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">
            Teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default Count;
