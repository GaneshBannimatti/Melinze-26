import { useEffect, useRef } from "react";
import * as p5 from "p5";
import TRUNK from "vanta/dist/vanta.trunk.min";

export default function VantaTrunkBackground() {
  const vantaRef = useRef(null);
  const effect = useRef(null);

  useEffect(() => {
    if (!effect.current && vantaRef.current) {
      effect.current = TRUNK({
        el: vantaRef.current,
        p5: p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1,
        scaleMobile: 1,
        color: 0x4cdfe5,
        backgroundColor: 0x000000,
      });
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