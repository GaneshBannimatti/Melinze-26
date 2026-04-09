import { useEffect, useState } from "react";

export default function Countdown() {

  // ✅ FINAL DATE → 25 April 2026, 9:00 AM
  const eventDate = new Date("2026-04-25T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ ended: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.ended) {
    return (
      <p className="text-cyan-400 text-lg sm:text-xl mt-6">
        🚀 The Event Has Started!
      </p>
    );
  }

  return (
    <div className="mt-6 flex gap-3 sm:gap-6 justify-center text-white flex-wrap">

      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div
          key={unit}
          className="
            flex flex-col items-center
            bg-black/40 backdrop-blur-md
            px-4 sm:px-6 py-3 sm:py-4
            rounded-xl
            border border-cyan-400/30
            hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
            transition
            min-w-[70px] sm:min-w-[90px]
          "
        >
          <span className="text-xl sm:text-3xl font-bold text-cyan-400">
            {String(timeLeft[unit] || 0).padStart(2, "0")}
          </span>

          <span className="text-[10px] sm:text-sm uppercase tracking-widest text-gray-300">
            {unit}
          </span>
        </div>
      ))}

    </div>
  );
}