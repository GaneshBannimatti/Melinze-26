import VantaDotsBackground from "./VantaDotsBackground";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-20 sm:py-24 md:py-28
        px-4 sm:px-6 md:px-10 lg:px-16
        text-white
      "
    >

      {/* 🌌 BACKGROUND */}
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
        About <span className="text-cyan-400">Us</span>
      </h2>

      {/* CONTAINER */}
      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6 sm:gap-8 md:gap-10
        "
      >

        {/* CARD 1 */}
        <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 to-purple-500/40">
          <div className="h-full bg-neutral-900/80 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              About SKSVMACET
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Smt. Kamala and Sri Venkappa M. Agadi College of Engineering and Technologies committed to imparting Quality Education leading to Graduation in Engineering & Technology. Our aim is to become an institution of Excellence by continual improvements in our Academic Standards, Effectiveness by setting measurable objectives and complying with the applicable Statutory & Regulatory Requirements.
            </p>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 to-cyan-400/40">
          <div className="h-full bg-neutral-900/80 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              About Melinze 2K26
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Melanze — a celebration bold and bright, where tech and culture unite. A platform for innovation, creativity, and talent to shine.
            </p>

          </div>
        </div>

      </div>
      
    </section>
  );
}