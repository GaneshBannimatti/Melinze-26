import { useEffect, useState } from "react";

export default function Countdown() {
  // 🔴 EVENT DATE → 12th March 2026, 9:00 AM
  const eventDate = new Date("2026-03-12T09:00:00").getTime();

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
      <p className="text-cyan-400 text-xl mt-10">
        🚀 The Event Has Started!
      </p>
    );
  }

  return (
    <div className="mt-12 flex gap-6 justify-center text-white">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div
          key={unit}
          className="flex flex-col items-center bg-black/40 backdrop-blur-md px-6 py-4 rounded-xl border border-cyan-400/30"
        >
          <span className="text-3xl font-bold text-cyan-400">
            {String(timeLeft[unit] || 0).padStart(2, "0")}
          </span>
          <span className="text-sm uppercase tracking-widest text-gray-300">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
