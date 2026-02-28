export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 md:px-10"
    >
      {/* Section Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-white">
        About <span className="text-cyan-400">Us</span>
      </h2>

      {/* Cards Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-purple-500/30 to-cyan-400/40 transition-all duration-500 hover:scale-[1.03]">
          <div className="rounded-2xl bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8 border border-white/10 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">

            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide">
              About SKSVMACET
            </h3>

            <p className="font-sans text-gray-300 leading-relaxed text-sm">
              Smt. Kamala & Sri Venkappa M. Agadi College of Engineering & Technology
              (SKSVMACET) is an engineering institute established in 2003
              Lakshmeshwar, Karnataka.
              <br /><br />
              The college offers quality education with modern infrastructure,
              industry collaboration, and research-focused learning.
            </p>

          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-cyan-400/30 to-purple-500/40 transition-all duration-500 hover:scale-[1.03]">
          <div className="rounded-2xl bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8 border border-white/10 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.25)]">

            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide">
              About Computer Science & Engineering Department
            </h3>

            <p className="font-sans text-gray-300 leading-relaxed text-sm">
              The CSE department focuses on strong foundations in Computer Science,
              professional ethics, and innovation.
              <br /><br />
              Students gain exposure to AI, ML, IoT, and Cybersecurity through
              NEP-2020 curriculum and industry-driven learning.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
