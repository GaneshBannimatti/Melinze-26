import RippleLoader from "./RippleLoader";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >

      {/* 🔥 RIPPLE BACKGROUND (BEHIND TEXT) */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-40">
        <RippleLoader size={500} />
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* ✅ BIG GLOW TEXT */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-wide">
          <span className="glow-text">MELANZE 26</span>
        </h1>

        <p className="mt-4 text-gray-300 text-lg sm:text-xl">
          A National Level Technical & Cultural Fest
        </p>

        {/* ✅ COUNTDOWN */}
        <Countdown />

        {/* BUTTON */}
        <button
          onClick={() =>
            document.getElementById("events")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="mt-10 px-8 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg"
        >
          Register Events
        </button>

      </div>

    </section>
  );
}