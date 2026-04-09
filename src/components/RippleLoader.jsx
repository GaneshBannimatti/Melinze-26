"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RippleLoader({
  icon,
  size = 250,
  duration = 2,
  logoColor = "grey",
}) {
  const baseInset = 40;

  const rippleBoxes = Array.from({ length: 5 }, (_, i) => ({
    inset: `${baseInset - i * 10}%`,
    zIndex: 99 - i,
    delay: i * 0.2,
    opacity: 1 - i * 0.2,
  }));

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Ripple Circles */}
      {rippleBoxes.map((box, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border backdrop-blur-[5px]" // ✅ fixed
          style={{
            inset: box.inset,
            zIndex: box.zIndex,
            borderWidth: "2px",
            borderColor: `rgba(150,150,150,${box.opacity})`, // brighter
            background: "transparent",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration,
            delay: box.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center Icon */}
      <div className="absolute inset-0 grid place-content-center p-[30%]">
        <motion.div
          className="w-full h-full"
          animate={{ color: [logoColor, "#ffffff", logoColor] }}
          transition={{
            repeat: Infinity,
            duration,
            ease: "easeInOut",
          }}
          style={{ color: logoColor }}
        >
          {icon && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}