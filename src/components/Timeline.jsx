import { useState } from "react";
import { motion } from "framer-motion";

const day1Events = [
  { time: "09:30 AM", title: "Reporting", icon: "📌" },
  { time: "10:00 AM", title: "Registration", icon: "📝" },
  { time: "10:30 AM", title: "Inauguration", icon: "🎉" },
  { time: "11:00 AM", title: "Coding Begins", icon: "🚀" },
  { time: "02:00 PM", title: "Lunch", icon: "🍽️" },
  { time: "04:30 PM", title: "Tea Break", icon: "☕" },
  { time: "06:00 PM", title: "1st Round Observation", icon: "🏆" },
  { time: "08:30 PM", title: "Dinner", icon: "🍛" },
  { time: "09:30 PM", title: "Fun Events", icon: "🎮" },
  { time: "11:00 PM", title: "2nd Round", icon: "🔁" },
];

const day2Events = [
  { time: "01:00 AM", title: "Fun Events", icon: "😄" },
  { time: "03:00 AM", title: "Midnight Tea", icon: "🌙" },
  { time: "04:00 AM", title: "Snacks", icon: "🍪" },
  { time: "06:00 AM", title: "Morning Tea", icon: "☀️" },
  { time: "08:00 AM", title: "Breakfast", icon: "🍳" },
  { time: "11:00 AM", title: "Final Round", icon: "🏅" },
  {
    time: "12:30 PM",
    title: "Winner Announcement & Valedictory & Prizes",
    icon: "🎊",
  },
];

export default function Timeline() {
  const [day, setDay] = useState(1);
  const events = day === 1 ? day1Events : day2Events;

  return (
    <section
      id="timeline"
      className="
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
        text-white
      "
    >
      {/* Heading */}
      <h2
        className="
          text-center
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          mb-8 sm:mb-10
        "
      >
        📅 Hackathon <span className="text-cyan-400">Timeline</span>
      </h2>

      {/* Day Switch */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <div
          className="
            flex
            gap-2
            p-1
            border border-cyan-400
            rounded-xl
            flex-wrap
            justify-center
          "
        >
          {["March 13th", "March 14th"].map((label, i) => (
            <button
              key={label}
              onClick={() => setDay(i + 1)}
              className={`
                px-3 sm:px-4
                py-1.5 sm:py-2
                text-xs sm:text-sm
                rounded-lg
                font-semibold
                transition
                ${
                  day === i + 1
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-2
          gap-4 sm:gap-5 md:gap-6
        "
      >
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            viewport={{ once: true }}
            className="
              bg-neutral-900/90
              border border-white/10
              rounded-xl
              px-4 sm:px-5
              py-3 sm:py-4
              hover:border-cyan-400
              hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]
              transition
            "
          >
            <p
              className="
                text-xs sm:text-sm
                text-cyan-400
                font-semibold
              "
            >
              {event.time}
            </p>

            <p
              className="
                mt-1
                flex
                items-center
                gap-2
                text-sm sm:text-base
              "
            >
              <span>{event.icon}</span>
              {event.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}