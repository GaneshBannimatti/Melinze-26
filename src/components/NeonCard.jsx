export default function NeonCard({ title, description, accent = "cyan" }) {
  const glowClass = accent === "purple" ? "glow-purple" : "glow-cyan";
  const borderClass =
    accent === "purple" ? "border-purple-500/60" : "border-cyan-400/60";
  const textClass =
    accent === "purple" ? "text-purple-400" : "text-cyan-400";

  return (
    <div
      className={`
        relative rounded-2xl border ${borderClass}
        bg-black/50 backdrop-blur-md
        p-6 transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        hover:${glowClass}
      `}
    >
      <h3 className={`text-2xl font-bold mb-3 ${textClass}`}>
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
