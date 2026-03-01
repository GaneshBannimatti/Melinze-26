export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-16 sm:py-20 md:py-24
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
          text-white
        "
      >
        About <span className="text-cyan-400">Us</span>
      </h2>

      {/* Container */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          items-stretch
        "
      >

        {/* Card 1 */}
        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-purple-500/30 to-cyan-400/40 transition-all duration-500 hover:scale-[1.02]">
          
          <div className="h-full flex flex-col rounded-2xl bg-neutral-900/80 backdrop-blur-xl p-6 md:p-8 border border-white/10 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">

            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white tracking-wide">
              About SKSVMACET
            </h3>

            <p className="font-sans text-gray-300 leading-relaxed text-base flex-grow">
              Smt. Kamala and Sri Venkappa M. Agadi College of Engineering and Technologies is committed to imparting quality education in Engineering & Technology.
              <br /><br />
              The institution strives for excellence through continual improvement in academic standards, effective teaching-learning processes, and compliance with statutory and regulatory requirements.
              <br /><br />
              Our focus remains on professional management, innovation, and strong career development support for students.
            </p>

          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-cyan-400/30 to-purple-500/40 transition-all duration-500 hover:scale-[1.02]">

          <div className="h-full flex flex-col rounded-2xl bg-neutral-900/80 backdrop-blur-xl p-6 md:p-8 border border-white/10 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.25)]">

            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white tracking-wide">
              About Computer Science & Engineering Department
            </h3>

            <p className="font-sans text-gray-300 leading-relaxed text-base flex-grow">
              The Department of Computer Science & Engineering focuses on building strong technical foundations along with professional ethics and human values.
              <br /><br />
              Through NEP-2020 curriculum implementation, students gain exposure to emerging technologies such as AI, Machine Learning, IoT, Data Science, and Cyber Security.
              <br /><br />
              With experienced faculty, industry collaborations, practical-oriented learning, and the FORTUNE student association, the department consistently achieves excellent academic results and strong placements in core IT companies.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}