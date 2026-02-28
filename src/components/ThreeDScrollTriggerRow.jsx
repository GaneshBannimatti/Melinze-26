"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

/* -------------------------
   Utility
------------------------- */
const cn = (...classes) => classes.filter(Boolean).join(" ");

/* -------------------------
   Context (shared velocity)
------------------------- */
const ThreeDScrollTriggerContext = React.createContext(null);

/* -------------------------
   Container
------------------------- */
export function ThreeDScrollTriggerContainer({
  children,
  className,
  ...props
}) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ThreeDScrollTriggerContext.Provider value={velocityFactor}>
      <div className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    </ThreeDScrollTriggerContext.Provider>
  );
}

/* -------------------------
   Public Row
------------------------- */
export function ThreeDScrollTriggerRow(props) {
  const sharedVelocity = useContext(ThreeDScrollTriggerContext);

  return (
    <ThreeDScrollTriggerRowImpl
      {...props}
      velocityFactor={sharedVelocity}
    />
  );
}

/* -------------------------
   Internal Implementation
------------------------- */
function ThreeDScrollTriggerRowImpl({
  children,
  baseVelocity = 5,
  direction = 1,
  className,
  velocityFactor,
  ...props
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const prevTime = useRef(null);
  const unitWidth = useRef(0);
  const baseX = useRef(0);

  const [copies, setCopies] = useState(3);

  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  const Block = useMemo(
    () => (
      <div className="inline-flex shrink-0 threed-block">
        {childrenArray}
      </div>
    ),
    [childrenArray]
  );

  /* Measure width */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const block = container.querySelector(".threed-block");
    if (!block) return;

    const width = block.scrollWidth;
    if (!width) return;

    unitWidth.current = width;

    const needed =
      Math.ceil(container.offsetWidth / width) + 2;

    setCopies(Math.max(3, needed));
  }, [childrenArray]);

  /* Animation loop */
  useAnimationFrame((time) => {
    if (!velocityFactor || !unitWidth.current) return;

    if (prevTime.current == null) prevTime.current = time;
    const delta = (time - prevTime.current) / 1000;
    prevTime.current = time;

    const velocity = velocityFactor.get();
    const speed = Math.min(5, Math.abs(velocity));
    const dir = direction * (velocity >= 0 ? 1 : -1);

    const pxPerSecond =
      (unitWidth.current * baseVelocity) / 100;

    baseX.current +=
      dir * pxPerSecond * (1 + speed) * delta;

    /* wrap */
    if (baseX.current >= unitWidth.current)
      baseX.current %= unitWidth.current;
    if (baseX.current < 0)
      baseX.current += unitWidth.current;

    x.set(baseX.current);
  });

  const transform = useTransform(
    x,
    (v) => `translate3d(${-v}px, 0, 0)`
  );

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-hidden", className)}
      {...props}
    >
      <motion.div
        className="inline-flex will-change-transform"
        style={{ transform }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} className="inline-flex shrink-0">
            {Block}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ThreeDScrollTriggerRow;
