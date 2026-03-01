import TeamCarousel from "./TeamCarousel";

import arun from "../assets/team/arun.jpg";
import rajeshwari from "../assets/team/rajeshwari.jpg";
import nagaraj from "../assets/team/nagaraj.jpg";
import shrikanth from "../assets/team/shrikanth.jpg";
import jagadish from "../assets/team/jagadish.jpg";

import gagan from "../assets/team/gagan.jpg";
import priyanka from "../assets/team/priyanka.jpg";
import sourabh from "../assets/team/sourabh.jpg";
import ganesh from "../assets/team/ganesh.jpg";
import rakshita from "../assets/team/Rakshita.jpg";
import sneha from "../assets/team/Sneha.jpg";

export default function Team() {
  const members = [
    {
      id: "1",
      name: "Dr. Arun Kumar Joshi",
      role: "Association Coordinator",
      image: arun,
    },
    {
      id: "2",
      name: "Mrs. Rajeshwari G",
      role: "Faculty Coordinator",
      image: rajeshwari,
    },
    {
      id: "3",
      name: "Mr. Nagaraj B",
      role: "Faculty Coordinator",
      image: nagaraj,
    },
    {
      id: "4",
      name: "Mr. Shrikanth",
      role: "Faculty Coordinator",
      image: shrikanth,
    },
    {
      id: "5",
      name: "Mr. Jagadish K",
      role: "Faculty Coordinator",
      image: jagadish,
    },
    {
      id: "6",
      name: "Mr. Gagan Angadi",
      role: "President",
      image: gagan,
    },
    {
      id: "7",
      name: "Ms. Priyanka",
      role: "Vice President",
      image: priyanka,
    },
    {
      id: "8",
      name: "Mr. Sourabh Desai",
      role: "Student Coordinator",
      image: sourabh,
    },
    {
      id: "9",
      name: "Mr. Ganesh Bannimatti",
      role: "Student Coordinator",
      image: ganesh,
    },
    {
      id: "10",
      name: "Ms. Rakshita Halagatti",
      role: "Student Coordinator",
      image: rakshita,
    },
    {
      id: "11",
      name: "Ms. Sneha Marabannavar",
      role: "Student Coordinator",
      image: sneha,
    },
  ];

  return (
    <section
      id="team"
      className="
        py-16 sm:py-20 md:py-24 lg:py-28
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
        Our <span className="text-cyan-400">Team</span>
      </h2>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto flex justify-center">
        <TeamCarousel members={members} autoPlay={3000} />
      </div>
    </section>
  );
}