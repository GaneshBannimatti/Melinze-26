import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* simple class joiner */
const cn = (...c) => c.filter(Boolean).join(" ");

export default function TeamCarousel({ members = [], autoPlay = 0 }) {
  const [index, setIndex] = useState(0);
  const total = members.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, autoPlay);
    return () => clearInterval(id);
  }, [autoPlay, next]);

  if (!total) return null;

  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center justify-center text-white"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Our <span className="text-cyan-400">Team</span>
      </h2>

      {/* Card */}
      <div className="relative w-[320px] h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={members[index].id}
            initial={{ opacity: 0, scale: 0.85, x: 120 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: -120 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-2xl overflow-hidden
                       bg-black/60 border border-cyan-400/30
                       shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            <img
              src={members[index].image}
              alt={members[index].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-cyan-400">
          {members[index].name}
        </h3>
        <p className="text-gray-300">{members[index].role}</p>
      </div>

      {/* Controls */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={prev}
          className="px-5 py-2 rounded-full bg-black/60
                     border border-cyan-400/40
                     hover:bg-cyan-400/10 transition"
        >
          ◀ Prev
        </button>
        <button
          onClick={next}
          className="px-5 py-2 rounded-full bg-black/60
                     border border-cyan-400/40
                     hover:bg-cyan-400/10 transition"
        >
          Next ▶
        </button>
      </div>
    </section>
  );
}
