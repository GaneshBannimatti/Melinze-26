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
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-10"
    >
      {/* 🌌 Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

      {/* 🔥 Ripple Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <RippleLoader size={500} duration={3} logoColor="#22d3ee" />
      </div>

      {/* CONTENT */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-center text-center text-white px-4 max-w-6xl"
      >
        {/* TITLE */}
        <h1 className="hero-item font-extrabold tracking-wider leading-tight">
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]">
            MELANZE 26
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="hero-item mt-6 max-w-xl text-gray-300 text-sm sm:text-lg">
          A National Level Technical & Cultural Fest
        </p>

        {/* COUNTDOWN */}
        <div className="hero-item mt-8">
          <Countdown />
        </div>

        {/* BUTTON */}
        <div className="hero-item mt-10">
          <button
            className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition"
          >
            Register Events
          </button>
        </div>
      </div>
    </section>
  );
}