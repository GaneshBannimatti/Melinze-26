import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

import cse1 from "../assets/events/cse1.jpg";
import cse2 from "../assets/events/cse2.jpg";
import eee1 from "../assets/events/eee1.jpg";
import eee2 from "../assets/events/eee2.jpg";
import mech1 from "../assets/events/mech1.jpg";
import mech2 from "../assets/events/mech2.jpg";

export default function Themes() {
  const navigate = useNavigate();

  const events = [
    { id: "tech-byte", title: "Tech Byte", img: cse1 },
    { id: "lagori", title: "Logic Ladder", img: cse2 },
    { id: "electroeye", title: "Electro Eye", img: eee1 },
    { id: "triple-trio", title: "Triple Trio", img: eee2 },
    { id: "tech-puzzle", title: "Tech Puzzle", img: mech1 },
    { id: "mini-cricket", title: "Mini Cricket", img: mech2 },
  ];

  return (
    <section id="events" className="py-20 px-4">
      <h2 className="text-3xl text-center mb-10">Events</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            onRegister={() => navigate(`/event/${event.id}`)}
          />
        ))}
      </div>
    </section>
  );
}