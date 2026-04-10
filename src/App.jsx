import { useEffect } from "react";
import Lenis from "lenis";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Themes from "./components/Themes";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import EventDetails from "./components/EventDetails";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => lenis.destroy();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* BACKGROUND */}
      <ParticleBackground />

      <Navbar />

      <main className="flex-grow relative z-10 text-white pt-20">
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Themes />
                <Team />
              </>
            }
          />

          <Route path="/event/:id" element={<EventDetails />} />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}