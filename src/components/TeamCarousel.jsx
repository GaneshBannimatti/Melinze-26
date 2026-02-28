import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6 md:px-10 lg:px-16
        flex flex-col items-center
        text-white
      "
    >
      {/* Heading */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          mb-8 sm:mb-10
          text-center
        "
      >
        
      </h2>

      {/* Card */}
      <div
        className="
          relative
          w-[240px]
          sm:w-[280px]
          md:w-[320px]
          lg:w-[360px]
          xl:w-[420px]

          h-[320px]
          sm:h-[360px]
          md:h-[420px]
          lg:h-[460px]
          xl:h-[520px]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={members[index].id}
            initial={{ opacity: 0, scale: 0.85, x: 120 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: -120 }}
            transition={{ duration: 0.5 }}
            className="
              absolute inset-0
              rounded-2xl overflow-hidden
              bg-black/60
              border border-cyan-400/30
              shadow-[0_0_40px_rgba(34,211,238,0.25)]
            "
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
      <div className="mt-5 sm:mt-6 text-center">
        <h3
          className="
            text-lg
            sm:text-xl
            md:text-2xl
            font-semibold
            text-cyan-400
          "
        >
          {members[index].name}
        </h3>

        <p
          className="
            text-sm
            sm:text-base
            text-gray-300
          "
        >
          {members[index].role}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8">
        <button
          onClick={prev}
          className="
            px-4 sm:px-5
            py-2
            text-sm sm:text-base
            rounded-full
            bg-black/60
            border border-cyan-400/40
            hover:bg-cyan-400/10
            transition
          "
        >
          ◀ Prev
        </button>

        <button
          onClick={next}
          className="
            px-4 sm:px-5
            py-2
            text-sm sm:text-base
            rounded-full
            bg-black/60
            border border-cyan-400/40
            hover:bg-cyan-400/10
            transition
          "
        >
          Next ▶
        </button>
      </div>
    </section>
  );
}