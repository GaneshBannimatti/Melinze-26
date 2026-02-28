import codefiestaLogo from "../assets/codefiesta.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* 6 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 text-xs">

          {/* 1️⃣ LOGO */}
          <div className="space-y-4">
            <img
              src={codefiestaLogo}
              alt="CodeFiesta 6.0"
              className="w-20"
            />
            <p>
              Empowering developers through{" "}
              <span className="text-cyan-400 font-medium">
                CODEFIESTA 6.0
              </span>
            </p>
          </div>

          {/* {/* 2️⃣ MAP */}
<div className="space-y-2">
  <div className="h-40 rounded-md overflow-hidden border border-white/10">
    <iframe
      title="location"
      src="https://www.google.com/maps?q=SVMA%20College%20Ilkal&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
    />
  </div>

  {/* Clickable Google Maps Link */}
  <a
    href="https://maps.app.goo.gl/96u3yE5NpZVoZcmS7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 hover:underline text-xs"
  >
    View on Google Maps
  </a>
</div>

          {/* 3️⃣ CONTACT */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Contact</h4>
            <a
              href="mailto:codefiesta6@agadiengcollege.com"
              className="block hover:text-cyan-400 transition"
            >
              📧 codefiesta6@agadiengcollege.com
            </a>
            <p>
              📍 Lakshmeshwar, SH 6, Gadag,<br />
              Karnataka – 582116
            </p>
          </div>

          {/* 4️⃣ STUDENT COORDINATORS */}
          <div>
            <h4 className="text-sky-400 font-semibold mb-3">
              Student Coordinators
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between whitespace-nowrap">
                <span>Sourabh Desai</span>
                <a href="tel:+919449732759" className="text-gray-500 hover:text-cyan-400">
                  +91 94497 32759
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Ganesh Bannimatti</span>
                <a href="tel:+918088125908" className="text-gray-500 hover:text-cyan-400">
                  +91 80881 25908
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Rakshita Halagatti</span>
                <a href="tel:+919742876149" className="text-gray-500 hover:text-cyan-400">
                  +91 9742876149
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Sneha Marabannavar</span>
                <a href="tel:+918618599972" className="text-gray-500 hover:text-cyan-400">
                  +91 86185 99972
                </a>
              </li>
            </ul>
          </div>

          {/* 5️⃣ FACULTY COORDINATORS */}
          <div>
            <h4 className="text-green-400 font-semibold mb-3">
              Faculty Coordinators
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between whitespace-nowrap">
                <span>Mrs. Rajeshwari G</span>
                <a href="tel:+919591316573" className="text-gray-500 hover:text-cyan-400">
                  +91 9591316573
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Mr. Nagaraj B</span>
                <a href="tel:+919632769295" className="text-gray-500 hover:text-cyan-400">
                  +91 9632769295
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Mr. Shrikanth M</span>
                <a href="tel:+919035528726" className="text-gray-500 hover:text-cyan-400">
                  +91 90355 28726
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Mr. Jagadish K</span>
                <a href="tel:+919916865653" className="text-gray-500 hover:text-cyan-400">
                  +91 99168 65653
                </a>
              </li>
            </ul>
          </div>

          {/* 6️⃣ ACCOMMODATION COORDINATORS */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-3">
              Accommodation Coordinators
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between whitespace-nowrap">
                <span>Arun H Lamani</span>
                <a href="tel:+916363598291" className="text-gray-500 hover:text-cyan-400">
                  +91 6363598291
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Rahul Byahatti</span>
                <a href="tel:+917483942625" className="text-gray-500 hover:text-cyan-400">
                  +91 7483942625
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Kavya M Angadi</span>
                <a href="tel:+919535948252" className="text-gray-500 hover:text-cyan-400">
                  +91 9535948252
                </a>
              </li>
              <li className="flex justify-between whitespace-nowrap">
                <span>Ranjita Topannavar</span>
                <a href="tel:+918904841488" className="text-gray-500 hover:text-cyan-400">
                 +91 8904841488
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 text-center border-t border-white/10 pt-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white/20">
            CODEFIESTA 6.0
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            © 2026 Team CODEFIESTA. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ by Ganesh M B
          </p>
        </div>

      </div>
    </footer>
  );
}