import NeonCard from "./NeonCard";

export default function Prizes() {
  return (
    <section id="prizes" className="pt-20 pb-8 text-white px-4">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
        Prize Pool <span className="text-cyan-400">💰</span>
      </h2>

      {/* Responsive Square Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
          <NeonCard
            title="🏆 Prize Worth ₹1,00,000/-"
            description="Total prize pool of ₹1,00,000 including cash rewards, trophies, certificates and exciting goodies."
            accent="cyan"
          />
        </div>
      </div>

    </section>
  );
}
