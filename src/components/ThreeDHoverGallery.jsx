import { useRef, useEffect, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function ThreeDHoverGallery({
  images = [],
  autoPlay = false,
  autoPlayDelay = 3000,
  className,
}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  // 🔁 Auto-play
  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, autoPlayDelay);

    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, autoPlayDelay, images.length]);

  return (
    <div
      className={cn(
        "w-full flex justify-center items-center overflow-hidden",
        className
      )}
      style={{ perspective: "1200px" }}
    >
      <div
        ref={containerRef}
        className="flex gap-6 items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {images.map((img, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="rounded-xl shadow-xl transition-all duration-700"
              style={{
                width: "260px",
                height: "180px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#111",
                transform: isActive
                  ? "translateZ(120px) scale(1.05)"
                  : "translateZ(0px) scale(0.9)",
                filter: isActive ? "none" : "grayscale(1) brightness(0.5)",
                opacity: isActive ? 1 : 0.7,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
