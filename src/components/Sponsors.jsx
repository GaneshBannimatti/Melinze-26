const sponsors = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
];

export default function Sponsors() {
  return (
    <section className="py-24 text-white overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Our <span className="text-cyan-400">Sponsors</span>
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-16 px-10">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px]"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
