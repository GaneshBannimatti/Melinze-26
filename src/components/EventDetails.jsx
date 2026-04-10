import { useParams } from "react-router-dom";

const eventData = {
  "tech-byte": {
    title: "Tech Byte",
    date: "April 25 & 26, 2026",
    fee: "₹100 / team",
    prize: "Exclusive Prizes + Certificates",
    rules: [
      "Team of 2 members",
      "Bring your own laptop & internet",
      "Only one team per participant",
      "Judge decision is final",
    ],
    coordinators: [
      "Malatesh Y – 8296256433",
      "Rakshita P – 6366184580",
      "Sneha D – 9008340636",
    ],
    link: "https://tinyurl.com/GAMEATHON-1-O",
  },

  "lagori": {
    title: "Lagori Logic Ladder",
    date: "April 25 & 26, 2026",
    fee: "₹100 / team",
    prize: "Exclusive Prizes + Certificates",
    rules: [
      "Team of 3 members",
      "3 chances to build stack",
      "Puzzle round if tie",
      "Umpire decision is final",
    ],
    coordinators: [
      "Akshay T – 9620584272",
      "Aditya S – 8073863536",
    ],
    link: "https://tinyurl.com/L3-Lagori-Logic-Ladder",
  },

  "electroeye": {
    title: "Electroeye Q",
    date: "April 24, 2026",
    fee: "₹150 / team",
    prize: "Exclusive Prizes + Certificates",
    rules: [
      "Max 3 members",
      "5 rounds (Quiz, Circuit, Treasure Hunt)",
      "Hints provided",
      "Final decision by committee",
    ],
    coordinators: [
      "Naveen A – 9380625868",
      "Aditya H – 9164092286",
    ],
    link: "https://forms.gle/vmGuoEzceMHgfQig9",
  },

  "triple-trio": {
    title: "Triple Trio Arena",
    date: "April 25, 2026",
    fee: "₹199 / team",
    prize: "Exclusive Prizes + Certificates",
    rules: [
      "Max 4 members",
      "3 rounds (Goal, Cricket, Sweet Attack)",
      "Highest score qualifies",
      "Time limited rounds",
    ],
    coordinators: [
      "Chetangouda – 7411411643",
      "Aakash – 8618341712",
    ],
    link: "https://forms.gle/XTRaPNSr9DqnS8z2A",
  },

  "tech-puzzle": {
    title: "Technical Puzzle",
    date: "April 2026",
    fee: "₹100 / team",
    prize: "Certificates + Prizes",
    rules: [
      "2 participants per team",
      "Identify machine parts",
      "No mobile allowed",
      "Judges decision final",
    ],
    coordinators: [
      "Yeshwanth D – 8088638569",
      "S Manoj – 9036671530",
    ],
  },

  "mini-cricket": {
    title: "Mini Boundary Cricket",
    date: "April 2026",
    fee: "₹360 / team",
    prize: "Exciting Prizes",
    rules: [
      "6 players per team",
      "5 overs match",
      "Underarm bowling only",
      "Super over if tie",
    ],
    coordinators: [
      "Gopalkrishna – 8618294189",
      "Rakesh G – 9019491292",
    ],
  },
};

export default function EventDetails() {
  const { id } = useParams();
  const event = eventData[id];

  if (!event) {
    return <h1 className="text-white text-center mt-20">Event Not Found</h1>;
  }

  return (
    <section className="min-h-screen px-4 py-20 text-white text-center">

      <h1 className="text-4xl sm:text-6xl font-bold text-cyan-400 mb-6">
        {event.title}
      </h1>

      <p className="text-gray-300 mb-6">{event.date}</p>

      {/* INFO */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl border border-cyan-400/20">

        <p className="mb-2"><strong>Registration Fee:</strong> {event.fee}</p>
        <p className="mb-4"><strong>Prize:</strong> {event.prize}</p>

        {/* RULES */}
        <h2 className="text-xl text-cyan-400 mb-3">Rules</h2>
        <ul className="text-gray-300 text-left list-disc pl-6">
          {event.rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>

        {/* COORDINATORS */}
        <h2 className="text-xl text-cyan-400 mt-6 mb-3">Coordinators</h2>
        <ul className="text-gray-300">
          {event.coordinators.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        {/* BUTTON */}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-cyan-400 text-black rounded-lg"
          >
            Register Now
          </a>
        )}

      </div>
    </section>
  );
}