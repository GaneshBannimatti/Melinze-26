import { useEffect, useRef } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";

export default function VantaTrunkBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    const loadEffect = async () => {
      const p5 = (await import("p5")).default;

      if (vantaRef.current) {
        effect = TRUNK({
          el: vantaRef.current,
          p5: p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x4cdfe5,
          backgroundColor: 0x000000,
        });
      }
    };

    loadEffect();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
}