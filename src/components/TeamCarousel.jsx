import { useState, useEffect } from "react";

export default function TeamCarousel({ members, autoPlay = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % members.length);
    }, autoPlay);

    return () => clearInterval(interval);
  }, [members.length, autoPlay]);

  const member = members[index];

  return (
    <div className="flex flex-col items-center text-center">

      {/* 🔥 IMAGE CARD */}
      <div className="relative group">

        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-2xl group-hover:blur-3xl transition duration-300"></div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-cyan-400/20"></div>

        {/* Card */}
        <div
          className="
            relative
            w-[280px] h-[360px]
            rounded-3xl
            overflow-hidden
            shadow-[0_0_40px_rgba(34,211,238,0.4)]
            transform transition duration-300
            group-hover:scale-105
          "
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* NAME */}
      <h3 className="mt-6 text-xl font-semibold text-cyan-400">
        {member.name}
      </h3>

      {/* ROLE */}
      <p className="text-gray-400 text-sm">
        {member.role}
      </p>

      {/* NAV BUTTONS */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + members.length) % members.length)
          }
          className="px-3 py-1 bg-cyan-500/20 rounded hover:bg-cyan-500/40"
        >
          ◀
        </button>

        <button
          onClick={() =>
            setIndex((prev) => (prev + 1) % members.length)
          }
          className="px-3 py-1 bg-cyan-500/20 rounded hover:bg-cyan-500/40"
        >
          ▶
        </button>
      </div>
    </div>
  );
}