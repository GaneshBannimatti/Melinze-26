import EventCard from "./EventCard";
import VantaDotsBackground from "./VantaDotsBackground";

// ✅ IMPORT IMAGES
import cse1 from "../assets/events/cse1.jpg";
import cse2 from "../assets/events/cse2.jpg";
import ise1 from "../assets/events/ise1.jpg";
import ise2 from "../assets/events/ise2.jpg";
import ece1 from "../assets/events/ece1.jpg";
import ece2 from "../assets/events/ece2.jpg";
import eee1 from "../assets/events/eee1.jpg";
import eee2 from "../assets/events/eee2.jpg";
import civil1 from "../assets/events/civil1.jpg";
import civil2 from "../assets/events/civil2.jpg";
import mech1 from "../assets/events/mech1.jpg";
import mech2 from "../assets/events/mech2.jpg";
import cultural from "../assets/events/cultural.jpg";

export default function Themes() {
  const formLink = "https://forms.gle/whti4Cuq522zndsW9";

  const events = [
    { dept: "CSE", title: "Tech Byte - Escape the Room", img: cse1 },
    { dept: "CSE", title: "Lago Logic Ladder", img: cse2 },

    { dept: "ISE", title: "Blind Coding", img: ise1 },
    { dept: "ISE", title: "Scan & Seek", img: ise2 },

    { dept: "ECE", title: "Robo Race", img: ece1 },
    { dept: "ECE", title: "Festronics", img: ece2 },

    { dept: "EEE", title: "Electro Eye Q", img: eee1 },
    { dept: "EEE", title: "Triple Trio Arena", img: eee2 },

    { dept: "CIVIL", title: "Lineout Demonstration", img: civil1 },
    { dept: "CIVIL", title: "Super Minute Games", img: civil2 },

    { dept: "MECH", title: "Tech Puzzle", img: mech1 },
    { dept: "MECH", title: "Mini Boundary Cricket", img: mech2 },

    { dept: "CULTURAL", title: "Cultural Events", img: cultural },
  ];

  return (
    <section id="events" className="relative pt-20 pb-12 text-white px-6 md:px-16">
      <VantaDotsBackground />

      <h2 className="relative z-10 text-center text-3xl md:text-5xl font-bold mb-12">
        Our <span className="text-cyan-400">Events</span>
      </h2>

      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <EventCard
            key={index}
            {...event}
            date="25 April 2026"
            onRegister={() => window.open(formLink, "_blank")}
          />
        ))}
      </div>
    </section>
  );
}