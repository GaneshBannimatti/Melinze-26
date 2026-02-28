import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SparkleNavbar from "./SparkleNavbar";

import svmaLogo from "../assets/svma.jpeg";
import codefiestaLogo from "../assets/codefiesta.png";
import newlogo from "../assets/newlogo.png";

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

  const formLink = "https://forms.gle/whti4Cuq522zndsW9";

  const scrollToSection = (name) => {
    setMobileOpen(false);

    if (name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(name.toLowerCase());
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  useEffect(() => {
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
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-3 sm:px-6 py-3 bg-neutral-900/95 backdrop-blur-md shadow-lg">

        {/* LOGOS */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={svmaLogo}
            alt="SVMA"
            className="h-8 sm:h-10 md:h-12"
          />

          <img
            src={codefiestaLogo}
            alt="CodeFiesta"
            className="h-8 sm:h-12 md:h-14"
          />

          <img
            src={newlogo}
            alt="New Logo"
            className="h-8 sm:h-10 md:h-12"
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

        {/* APPLY BUTTON */}
        <button
          onClick={() => window.open(formLink, "_blank")}
          className="hidden md:block bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          Apply
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-900 text-white p-4">
          <ul className="flex flex-col gap-4 text-center">
            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="w-full"
                >
                  {item}
                </button>
              </li>
            ))}

            <button
              onClick={() => window.open(formLink, "_blank")}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
            >
              Apply
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}