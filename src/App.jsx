import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Themes";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground"; // ✅ ADD

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {/* 🔥 PARTICLES ON TOP */}
      <ParticleBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Events />
        <Team />
      </main>

      <Footer />
    </>
  );
}