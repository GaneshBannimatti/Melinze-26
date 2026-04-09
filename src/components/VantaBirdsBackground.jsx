import { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function VantaBirdsBackground() {
  const vantaRef = useRef(null);
  const effect = useRef(null);

  useEffect(() => {
    if (!effect.current && vantaRef.current) {
      try {
        effect.current = BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1,
          scaleMobile: 1,
          color1: 0x22d3ee,
          color2: 0xa855f7,
          backgroundColor: 0x000000,
        });
      } catch (err) {
        console.error("Vanta Birds Error:", err);
      }
    }

    return () => {
      if (effect.current) {
        effect.current.destroy();
        effect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 z-0" />;
}