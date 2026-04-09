import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TeamCarousel({ members = [], autoPlay = 0 }) {
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
    <div className="text-center text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={members[index].id}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={members[index].image}
            alt={members[index].name}
            className="w-64 h-64 object-cover mx-auto"
          />
        </motion.div>
      </AnimatePresence>

      <h3 className="mt-4 text-xl font-semibold text-cyan-400">
        {members[index].name}
      </h3>
      <p className="text-gray-300">{members[index].role}</p>

      <p className="text-sm text-gray-400 mt-2">
        📧 {members[index].email}
      </p>
      <p className="text-sm text-gray-400">
        📞 {members[index].phone}
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}

export default TeamCarousel;