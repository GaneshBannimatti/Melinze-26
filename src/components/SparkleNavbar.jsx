import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

const SparkleNavbar = ({
  items,
  color = "#22d3ee",
  onItemClick,
  activeItem, // 🔥 NEW
}) => {
  const navRef = useRef(null);
  const activeElementRef = useRef(null);
  const buttonRefs = useRef([]);

  const getOffsetLeft = (el) => {
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return elRect.left - navRect.left + (elRect.width - 36) / 2;
  };

  /* ✅ INITIAL POSITION */
  useLayoutEffect(() => {
    const index = items.indexOf(activeItem);
    const btn = buttonRefs.current[index >= 0 ? index : 0];
    if (!btn) return;

    gsap.set(activeElementRef.current, {
      x: getOffsetLeft(btn),
      opacity: 1,
    });
  }, []);

  /* 🔥 MOVE SPARKLE ON SCROLL (ACTIVE ITEM CHANGE) */
  useEffect(() => {
    const index = items.indexOf(activeItem);
    const btn = buttonRefs.current[index];
    if (!btn) return;

    gsap.to(activeElementRef.current, {
      x: getOffsetLeft(btn),
      duration: 0.5,
      ease: "power3.out",
    });
  }, [activeItem]);

  const handleClick = (index) => {
    onItemClick?.(items[index]);

    const btn = buttonRefs.current[index];
    if (!btn) return;

    gsap.to(activeElementRef.current, {
      x: getOffsetLeft(btn),
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <>
      <style>{`
        .spark-nav {
          position: relative;
        }
        .spark-nav ul {
          display: flex;
          gap: 32px;
        }
        .spark-nav button {
          background: none;
          border: none;
          color: #cbd5f5;
          font-size: 15px;
          cursor: pointer;
          transition: color .3s;
        }
        .spark-nav button:hover {
          color: white;
        }
        .spark-active {
          position: absolute;
          bottom: -6px;
          width: 36px;
          height: 3px;
          background: ${color};
          border-radius: 999px;
          box-shadow: 0 0 15px ${color};
        }
      `}</style>

      <nav ref={navRef} className="spark-nav">
        <ul>
          {items.map((item, i) => (
            <li key={item}>
              <button
                ref={(el) => (buttonRefs.current[i] = el)}
                onClick={() => handleClick(i)}
                className={
                  activeItem === item ? "text-white" : "text-gray-300"
                }
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div ref={activeElementRef} className="spark-active" />
      </nav>
    </>
  );
};

export default SparkleNavbar;
