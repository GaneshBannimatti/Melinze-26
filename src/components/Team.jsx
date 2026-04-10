import TeamCarousel from "./TeamCarousel";
import FoldSection from "./FoldSection";

export default function Team() {
  const members = [
    { id: "1", name: "Dr. Parashuram Baraki", role: "Principal & Mentor", image: "/team/parashuram.jpg" },
    { id: "2", name: "Dr. Girish G. Y", role: "Chief Organizer", image: "/team/girish.jpg" },
    { id: "3", name: "Dr. Subhash Meti", role: "Dean of Academic", image: "/team/subhash.jpg" },
  ];

  return (
    <FoldSection>
      <section
        id="team"
        className="relative py-16 sm:py-24 text-white z-10 px-4"
      >
        <h2 className="text-3xl sm:text-5xl text-center font-bold mb-12 sm:mb-16">
          Our <span className="text-cyan-400">Team</span>
        </h2>

        <div className="max-w-xl mx-auto">
          <TeamCarousel members={members} />
        </div>
      </section>
    </FoldSection>
  );
}