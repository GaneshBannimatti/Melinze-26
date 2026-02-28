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
          gap-6 sm:gap-8 md:gap-10
        "
      >

        {/* Card 1 */}
        <div
          className="
            group
            relative
            rounded-2xl
            p-[1px]
            bg-gradient-to-br
            from-cyan-400/40
            via-purple-500/30
            to-cyan-400/40
            transition-all
            duration-500
            hover:scale-[1.02]
          "
        >
          <div
            className="
              rounded-2xl
              bg-neutral-900/80
              backdrop-blur-xl
              p-5 sm:p-6 md:p-8
              border border-white/10
              transition-all
              duration-500
              group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
            "
          >

            <h3
              className="
                font-serif
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                font-semibold
                mb-4
                text-white
                tracking-wide
              "
            >
              About SKSVMACET
            </h3>

            <p
              className="
                font-sans
                text-gray-300
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              Smt. Kamala & Sri Venkappa M. Agadi College of Engineering &
              Technology (SKSVMACET) is an engineering institute established in
              2003, Lakshmeshwar, Karnataka.
              <br /><br />
              The college offers quality education with modern infrastructure,
              industry collaboration, and research-focused learning.
            </p>

          </div>
        </div>


        {/* Card 2 */}
        <div
          className="
            group
            relative
            rounded-2xl
            p-[1px]
            bg-gradient-to-br
            from-purple-500/40
            via-cyan-400/30
            to-purple-500/40
            transition-all
            duration-500
            hover:scale-[1.02]
          "
        >
          <div
            className="
              rounded-2xl
              bg-neutral-900/80
              backdrop-blur-xl
              p-5 sm:p-6 md:p-8
              border border-white/10
              transition-all
              duration-500
              group-hover:shadow-[0_0_40px_rgba(147,51,234,0.25)]
            "
          >

            <h3
              className="
                font-serif
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                font-semibold
                mb-4
                text-white
                tracking-wide
              "
            >
              About Computer Science & Engineering Department
            </h3>

            <p
              className="
                font-sans
                text-gray-300
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              The CSE department focuses on strong foundations in Computer
              Science, professional ethics, and innovation.
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