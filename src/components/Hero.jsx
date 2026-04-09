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
      { opacity: 0, y: 50 },
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
      className="
        relative
        min-h-screen
        pt-20 sm:pt-24 md:pt-28
        flex items-center justify-center
        overflow-hidden
        bg-black
      "
    >
      {/* 🔥 RIPPLE BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="scale-[0.5] sm:scale-[0.7] md:scale-[0.9] lg:scale-100">
          <RippleLoader size={500} duration={3} logoColor="#22d3ee" />
        </div>
      </div>

      {/* OPTIONAL DARK OVERLAY (for visibility) */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div
        ref={heroRef}
        className="
          relative z-10
          flex flex-col items-center
          text-center text-white
          px-4 sm:px-6
          max-w-6xl
        "
      >

        {/* TITLE */}
        <h1 className="hero-item font-extrabold tracking-wider leading-tight">
          <span
            className="
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
              bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]
            "
          >
            MELANZE 26
          </span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            hero-item
            mt-4 sm:mt-6
            max-w-xs sm:max-w-xl md:max-w-2xl
            text-gray-300
            text-xs sm:text-sm md:text-lg lg:text-xl
          "
        >
          A National Level Technical & Cultural Fest
        </p>

        {/* COUNTDOWN */}
        <div className="hero-item mt-6 sm:mt-8 scale-[0.85] sm:scale-95 md:scale-100">
          <Countdown />
        </div>

        {/* BUTTON */}
        <div className="hero-item mt-8 sm:mt-10">
          <button
            onClick={() => {
              const el = document.getElementById("events");
              if (!el) return;

              window.scrollTo({
                top: el.offsetTop - 80,
                behavior: "smooth",
              });
            }}
            className="
              px-6 sm:px-8
              py-2.5 sm:py-3
              rounded-full
              bg-cyan-400
              text-black
              font-semibold
              text-sm sm:text-base
              hover:bg-cyan-300
              hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]
              transition
            "
          >
            Register Events
          </button>
        </div>

      </div>
    </section>
  );
}