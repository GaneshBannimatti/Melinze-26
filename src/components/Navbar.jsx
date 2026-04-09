import { useEffect, useState } from "react";
import SparkleNavbar from "./SparkleNavbar";
import svmaLogo from "../assets/svma.jpeg";

export default function Navbar() {
  const items = ["Home", "About", "Events", "Venue", "Contact"];

  const [activeItem, setActiveItem] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ SCROLL FUNCTION
  const scrollToSection = (name) => {
    setMobileOpen(false);

    if (name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(name.toLowerCase());
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ ACTIVE SECTION HIGHLIGHT
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

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 bg-black/80 backdrop-blur-md shadow-lg">

        {/* LOGO */}
        <img
          src={svmaLogo}
          alt="College Logo"
          className="h-8 sm:h-10 md:h-12"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-1 justify-center">
          <SparkleNavbar
            items={items}
            color="#22d3ee"
            onItemClick={scrollToSection}
            activeItem={activeItem}
          />
        </div>

        {/* APPLY BUTTON (ALL SCREENS) */}
        <button
          onClick={() => scrollToSection("Events")}
          className="
            hidden sm:block
            bg-cyan-400 text-black
            px-4 sm:px-5 py-2
            rounded-xl font-semibold
            hover:bg-cyan-300
            transition
          "
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
        <div className="md:hidden bg-black text-white p-4">
          <ul className="flex flex-col gap-4 text-center text-lg">

            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="w-full hover:text-cyan-400 transition"
                >
                  {item}
                </button>
              </li>
            ))}

            {/* APPLY BUTTON MOBILE */}
            <button
              onClick={() => scrollToSection("Events")}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg mt-2"
            >
              Apply
            </button>

          </ul>
        </div>
      )}
    </header>
  );
}