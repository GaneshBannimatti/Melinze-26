export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-black
        text-gray-400
        pt-14 sm:pt-16 md:pt-20
        pb-8 sm:pb-10
        border-t border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          text-center
        "
      >

        {/* TITLE */}
        <h2
          className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            font-bold
            text-white
            mb-4
            tracking-wide
          "
        >
          MELANZE <span className="text-cyan-400">26</span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-400
            mb-6
            text-xs sm:text-sm md:text-base
            max-w-xs sm:max-w-md md:max-w-xl
            mx-auto
          "
        >
          A National Level Technical & Cultural Fest at SKSVMACET
        </p>

        {/* CONTACT */}
        <p
          className="
            text-gray-500
            text-xs sm:text-sm md:text-base
            leading-relaxed
          "
        >
          📍 Lakshmeshwar, Karnataka <br />
          📧 melanze@sksvmacet.in
        </p>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 my-6 sm:my-8" />

        {/* COPYRIGHT */}
        <div
          className="
            text-[10px] sm:text-xs md:text-sm
            text-gray-600
          "
        >
          © 2026 Team MELINZE 2K26. All Rights Reserved.

Made with ❤️ by Ganesh M B
        </div>

      </div>
    </footer>
  );
}