import TeamCarousel from "./TeamCarousel";
import VantaDotsBackground from "./VantaDotsBackground";

export default function Team() {
  const members = [
    {
      id: "1",
      name: "Dr. Parashuram Baraki",
      role: "Principal & Mentor",
      email: "parashuram.baraki@gmail.com",
      phone: "+91 9686042385",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      name: "Dr. Girish G. Y",
      role: "Chief Organizer",
      email: "girish.math@agadiengcollege.com",
      phone: "+91 9844950991",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "3",
      name: "Dr. Subhash Meti",
      role: "Dean of Academic",
      email: "subhash.ece@agadiengcollege.com",
      phone: "+91 9845675725",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      id: "4",
      name: "Dr. Arunkumar Joshi",
      role: "Chief Coordinator",
      email: "arunj.cse@agadiengcollege.com",
      phone: "+91 9663579700",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      id: "5",
      name: "Mrs. Shridevi Ganiger",
      role: "Chief Coordinator",
      email: "shridevig.eee@agadiengcollege.com",
      phone: "+91 8105572501",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "6",
      name: "Mr. Amarappa Pagi",
      role: "Chief Coordinator",
      email: "amarappa.ece@agadiengcollege.com",
      phone: "+91 9448666880",
      image: "https://randomuser.me/api/portraits/men/70.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="
        relative
        py-20 sm:py-24 md:py-28
        px-4 sm:px-6 md:px-10 lg:px-16
        text-white
      "
    >

      {/* BACKGROUND */}
      <VantaDotsBackground />

      {/* HEADING */}
      <h2
        className="
          relative z-10
          text-center
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold
          mb-12 sm:mb-14
        "
      >
        Our <span className="text-cyan-400">Team</span>
      </h2>

      {/* CAROUSEL WRAPPER */}
      <div
        className="
          relative z-10
          w-full
          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
          mx-auto
        "
      >
        <TeamCarousel members={members} autoPlay={3000} />
      </div>

    </section>
  );
}