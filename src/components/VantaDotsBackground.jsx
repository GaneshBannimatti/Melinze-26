import { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

export default function VantaDotsBackground() {
  const ref = useRef(null);
  const effect = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Prevent double init
    if (!effect.current) {
      effect.current = DOTS({
        el: ref.current,
        THREE: THREE,
        color: 0x22d3ee,
        backgroundColor: 0x000000,
        mouseControls: true,
        touchControls: true,
      });
    }

    return () => {
      if (effect.current) {
        try {
          effect.current.destroy();
        } catch (e) {}
        effect.current = null;
      }
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 -z-10" />;
}