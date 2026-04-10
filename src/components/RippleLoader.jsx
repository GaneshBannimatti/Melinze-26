import { motion } from "framer-motion";

export default function RippleLoader({ size = 400 }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-400 rounded-full"
          style={{
            width: size,
            height: size,
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}