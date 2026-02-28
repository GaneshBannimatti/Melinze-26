import agiletech from "../assets/sponsors/agiletech.png";
import hubli from "../assets/sponsors/hubli.png";
import karnataka from "../assets/sponsors/karnataka.png";
import pera from "../assets/sponsors/pera.png";
import ultizemise from "../assets/sponsors/ultizemise.png";
import zeetacoding from "../assets/sponsors/zeetacoding.png";

const sponsors = [
  { name: "AgileTech", logo: agiletech },
  { name: "Hubli", logo: hubli },
  { name: "Karnataka", logo: karnataka },
  { name: "PERA", logo: pera },
  { name: "Ultizemise", logo: ultizemise },
  { name: "Zeeta Coding", logo: zeetacoding },
];

export default function Sponsors() {
  return (
    <section
      className="
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6 md:px-10 lg:px-16
        text-white
        overflow-hidden
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
          mb-10 sm:mb-14
        "
      >
        Our <span className="text-cyan-400">Sponsors</span>
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div
          className="
            flex
            w-max
            animate-scroll
            gap-8 sm:gap-12 md:gap-16
            px-4 sm:px-6 md:px-10
          "
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center
                min-w-[120px]
                sm:min-w-[160px]
                md:min-w-[200px]
              "
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="
                  h-10
                  sm:h-12
                  md:h-14
                  lg:h-16
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}