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
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      {/* Ripple Circles */}
      {rippleBoxes.map((box, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-t backdrop-blur-[5px]"
          style={{
            inset: box.inset,
            zIndex: box.zIndex,
            borderColor: `rgba(100,100,100,${box.opacity})`,
            background:
              "linear-gradient(0deg, rgba(50,50,50,0.2), rgba(100,100,100,0.2))",
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "rgba(0,0,0,0.3) 0px 10px 10px",
              "rgba(0,0,0,0.3) 0px 30px 20px",
              "rgba(0,0,0,0.3) 0px 10px 10px",
            ],
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
