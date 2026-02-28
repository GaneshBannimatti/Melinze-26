import NeonCard from "./NeonCard";

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="
        pt-16 sm:pt-20 md:pt-24
        pb-10 sm:pb-14 md:pb-16
        text-white
        px-4 sm:px-6 md:px-10 lg:px-16
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
        Prize Pool <span className="text-cyan-400">💰</span>
      </h2>

      {/* Card Container */}
      <div className="flex justify-center">

        <div
          className="
            w-full
            max-w-[240px]
            sm:max-w-xs
            md:max-w-sm
            lg:max-w-md
            xl:max-w-lg
            aspect-square
          "
        >
          <NeonCard
            title="🏆 Prize Worth ₹1,00,000/-"
            description="
              Total prize pool of ₹1,00,000 including cash rewards,
              trophies, certificates and exciting goodies.
            "
            accent="cyan"
          />
        </div>

      </div>

    </section>
  );
}