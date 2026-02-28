import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Prizes from "./components/Prizes";
import Themes from "./components/Themes";
import Timeline from "./components/Timeline";
import Team from "./components/Team";
import Memories from "./components/Memories";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Payment from "./components/Payment";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import ParticleBackground from "./components/ParticleBackground";

/* ============================= */
/* 🌐 MAIN WEBSITE LAYOUT */
/* ============================= */
function MainSite() {
  return (
    <>
      <ParticleBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Prizes />
        <Themes />
        <Timeline />
        <Team />
        <Memories />
        <Sponsors />
      </main>

      <Footer />
    </>
  );
}

/* ============================= */
/* 🔒 Protected Route */
/* ============================= */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
}

/* ============================= */
/* 🚀 APP COMPONENT */
/* ============================= */
export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
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
    <BrowserRouter>
      <Routes>

        {/* Main Landing Page */}
        <Route path="/" element={<MainSite />} />

        {/* Registration */}
        <Route path="/register" element={<RegistrationForm />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Dashboard (Protected) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
