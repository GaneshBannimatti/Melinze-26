export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-20 px-4 text-center"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-12">
        About <span className="text-cyan-400">Us</span>
      </h2>

      {/* ✅ TWO BOX LAYOUT */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* 🔥 BOX 1 - COLLEGE */}
        <div className="bg-white/10 backdrop-blur-md border border-cyan-400/20 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            About SKSVMACET
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            SKSVMACET is a prestigious engineering institution committed to 
            excellence in education, innovation, and research. The college 
            provides a dynamic environment for students to develop technical 
            skills, creativity, and leadership qualities to succeed in the 
            modern world.
          </p>

        </div>

        {/* 🔥 BOX 2 - FEST */}
        <div className="bg-white/10 backdrop-blur-md border border-purple-400/20 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            About Melanze
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Melanze is a national-level technical and cultural fest that brings 
            together innovation, creativity, and talent. It provides a platform 
            for students across the country to showcase their skills through 
            exciting events, competitions, and cultural performances.
          </p>

        </div>

      </div>
    </section>
  );
}