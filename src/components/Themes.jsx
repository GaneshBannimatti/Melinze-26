export default function Themes() {
  const themes = [
    {
      title: "Web & Android Development",
      icon: "🌐📱",
      desc: "Build modern, scalable, and responsive web applications and innovative Android mobile apps using frontend, backend, APIs, and cloud technologies with strong UI/UX and performance focus.",
    },
    {
      title: "Artificial Intelligence",
      icon: "🤖",
      desc: "Develop intelligent systems using Machine Learning, Deep Learning, Computer Vision, NLP, and data-driven models to solve real-world problems and automate complex tasks.",
    },
  ];

  return (
    <section
      id="themes"
      className="pt-12 pb-20 text-white px-4 sm:px-6"
    >
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-14">
        Hackathon <span className="text-cyan-400">Themes</span>
      </h2>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="
              relative group
              rounded-2xl
              p-[1px]
              bg-gradient-to-br from-cyan-400/40 to-purple-500/40
              transition-all duration-500
              hover:scale-105
            "
          >
            {/* Inner Card */}
            <div
              className="
                h-full
                rounded-2xl
                bg-neutral-900/80
                backdrop-blur-xl
                p-6 sm:p-8
                border border-white/10
                transition-all duration-500
                group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
              "
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {theme.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                {theme.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {theme.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}