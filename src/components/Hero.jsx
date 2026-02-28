import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Countdown from "./Countdown";
import RippleLoader from "./RippleLoader";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll(".hero-item"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-28 flex items-center justify-center overflow-hidden"
    >
      {/* 🔵 RIPPLE BACKGROUND (Responsive) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="scale-[0.6] sm:scale-[0.8] md:scale-100">
          <RippleLoader size={500} duration={3} logoColor="#22d3ee" />
        </div>
      </div>

      {/* 🔵 CONTENT */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-center text-center text-white px-4"
      >
        {/* 🌈 AURORA TITLE */}
        <h1 className="hero-item font-extrabold tracking-wider leading-tight">
          <span
            className="
              aurora-text
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
              drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]
            "
          >
            CODEFIESTA 6.0
          </span>
        </h1>

        {/* 📝 SUBTITLE */}
        <p className="hero-item mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-gray-300 text-xs sm:text-sm md:text-lg">
          A 24-Hour National Level Hackathon to build, innovate,
          and compete with the brightest minds.
        </p>

        {/* ⏳ COUNTDOWN */}
        <div className="hero-item mt-6 sm:mt-8 scale-[0.9] sm:scale-100">
          <Countdown />
        </div>

        {/* 📘 RULEBOOK BUTTON */}
        <div className="hero-item mt-8 sm:mt-10">
          <a
            href="/assets/updatedRuleBook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-6 sm:px-8 py-2.5 sm:py-3
              rounded-full
              border-2 border-cyan-400
              text-cyan-400 font-medium
              text-sm sm:text-base
              hover:bg-cyan-400
              hover:text-black
              hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]
              transition-all duration-300
            "
          >
            Rulebook
          </a>
        </div>
      </div>
    </section>
  );
}
