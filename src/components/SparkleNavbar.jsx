import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";

const SparkleNavbar = ({
  items,
  color = "#22d3ee",
  onItemClick,
  activeItem,
}) => {
  const navRef = useRef(null);
  const activeElementRef = useRef(null);
  const buttonRefs = useRef([]);

  const getOffsetLeft = (el) => {
    if (!navRef.current || !el) return 0;

    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    return elRect.left - navRect.left + elRect.width / 2 - 18;
  };

  // ✅ INITIAL POSITION
  useLayoutEffect(() => {
    const index = items.indexOf(activeItem);
    const btn = buttonRefs.current[index >= 0 ? index : 0];

    if (!btn) return;

    gsap.set(activeElementRef.current, {
      x: getOffsetLeft(btn),
      opacity: 1,
    });
  }, [items, activeItem]);

  // ✅ UPDATE ON ACTIVE CHANGE
  useEffect(() => {
    const index = items.indexOf(activeItem);
    const btn = buttonRefs.current[index];

    if (!btn) return;

    gsap.to(activeElementRef.current, {
      x: getOffsetLeft(btn),
      duration: 0.4,
      ease: "power3.out",
    });
  }, [activeItem, items]);

  // ✅ CLICK HANDLER
  const handleClick = (index) => {
    onItemClick?.(items[index]);

    const btn = buttonRefs.current[index];
    if (!btn) return;

    gsap.to(activeElementRef.current, {
      x: getOffsetLeft(btn),
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <nav
      ref={navRef}
      className="relative flex items-center justify-center"
    >
      <ul className="flex gap-6 md:gap-10">
        {items.map((item, i) => (
          <li key={item}>
            <button
              ref={(el) => (buttonRefs.current[i] = el)}
              onClick={() => handleClick(i)}
              className={`text-sm md:text-base transition duration-300 ${
                activeItem === item
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* 🔥 ACTIVE LINE */}
      <div
        ref={activeElementRef}
        className="absolute bottom-[-6px] w-9 h-[3px] rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`,
        }}
      />
    </nav>
  );
};

export default SparkleNavbar;