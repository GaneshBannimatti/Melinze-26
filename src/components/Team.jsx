import TeamCarousel from "./TeamCarousel";

export default function Team() {
  const members = [
    {
      id: "1",
      name: "Mr. Gagan Angadi",
      role: "President",
      image: "/assets/team/gagan.jpg",
    },
    {
      id: "2",
      name: "Mrs. Priyanka",
      role: "Vice President",
      image: "/assets/team/priyanka.jpg",
    },
    {
      id: "3",
      name: "Mr. Sourabh Desai",
      role: "Student Coordinator",
      image: "/assets/team/sourabh.jpg",
    },
    {
      id: "4",
      name: "Mr. Ganesh Bannimatti",
      role: "Student Coordinator",
      image: "/assets/team/ganesh.jpg",
    },
    {
      id: "5",
      name: "Mrs. Rakshita Halagatti",
      role: "Student Coordinator",
      image: "/assets/team/rakshita.jpg",
    },
    {
      id: "6",
      name: "Mrs. Sneha Marabannavar",
      role: "Student Coordinator",
      image: "/assets/team/sneha.jpg",
    },
    {
      id: "7",
      name: "Dr. Arun Kumar Joshi",
      role: "Association Coordinator",
      image: "/assets/team/arun.jpg",
    },
    {
      id: "8",
      name: "Mrs. Rajeshwari G",
      role: "Faculty Coordinator",
      image: "/assets/team/rajeshwari.jpg",
    },
    {
      id: "9",
      name: "Mr. Nagaraj B",
      role: "Faculty Coordinator",
      image: "/assets/team/nagaraj.jpg",
    },
    {
      id: "10",
      name: "Mr. Shrikanth M",
      role: "Faculty Coordinator",
      image: "/assets/team/shrikanth.jpg",
    },
    {
      id: "11",
      name: "Mr. Jagadish K",
      role: "Faculty Coordinator",
      image: "/assets/team/jagadish.jpg",
    },
  ];

  return (
    <section id="team" className="pt-6 pb-16 sm:pb-20">
      <TeamCarousel
        members={members}
        title="OUR TEAM"

        /* MOBILE FRIENDLY */
        cardWidth={170}
        cardHeight={200}
        cardRadius={14}

        visibleCards={1}
        sideCardScale={0.82}
        sideCardOpacity={0.5}

        showDots
        showArrows
        autoPlay={3000}

        infoPosition="bottom"
        infoTextColor="#22d3ee"
      />
    </section>
  );
}