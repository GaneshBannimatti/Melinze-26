import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SparkleNavbar from "./SparkleNavbar";

import svmaLogo from "../assets/svma.jpeg";
import codefiestaLogo from "../assets/codefiesta.png";
import newlogo from "../assets/newlogo.png"; // 👈 Import new logo as React component


export default function Navbar() {
  const navigate = useNavigate();

  const items = [
    "Home",
    "About",
    "Prizes",
    "Themes",
    "Timeline",
    "Team",
    "Contact",
  ];

  const [activeItem, setActiveItem] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (name) => {
    setMobileOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(name);
      }, 300);
      return;
    }

    if (name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(name.toLowerCase());
    if (!el) return;

    const offset = 90;
    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const sections = items
      .map((i) => document.getElementById(i.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveItem(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="relative flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl bg-neutral-900/90 backdrop-blur-md shadow-xl">

        {/* LOGOS */}
        <div className="flex items-center gap-5 shrink-0">
          <img
            src={svmaLogo}
            alt="SVMA College"
            className="h-10 md:h-12 object-contain"
          />

          <img
            src={codefiestaLogo}
            alt="CodeFiesta 6.0"
            className="h-10 md:h-14 object-contain"
          />

          <img
            src={newlogo}   // 👈 Replace with your new logo path
            alt="New Logo"
            className="h-10 md:h-12 object-contain"
          />
        </div>
        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center">
          <SparkleNavbar
            items={items}
            color="#22d3ee"
            onItemClick={scrollToSection}
            activeItem={activeItem}
          />
        </div>

        {/* DESKTOP APPLY */}
        <button
          onClick={() => navigate("/register")}
          className="hidden md:block bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition shrink-0"
        >
          Apply
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="absolute top-full left-0 mt-3 w-full rounded-2xl bg-neutral-900/95 backdrop-blur-md shadow-xl p-5 md:hidden">
            <ul className="flex flex-col gap-4 text-center">
              {items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition ${activeItem === item
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/register");
                  }}
                  className="block mt-4 bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
