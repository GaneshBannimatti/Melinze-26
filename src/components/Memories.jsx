import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "./ThreeDScrollTriggerRow";

// ✅ Import images (recommended way)
import img1 from "../assets/memories/1.jpg";
import img2 from "../assets/memories/2.jpg";
import img3 from "../assets/memories/3.jpg";
import img4 from "../assets/memories/4.jpg";
import img5 from "../assets/memories/5.jpg";
import img6 from "../assets/memories/6.jpg";
import img7 from "../assets/memories/7.JPG";
import img8 from "../assets/memories/8.JPG";
import img9 from "../assets/memories/9.JPG";
import img10 from "../assets/memories/10.JPG";
import img11 from "../assets/memories/11.JPG";
import img12 from "../assets/memories/12.JPG";
import img13 from "../assets/memories/13.JPG";
import img14 from "../assets/memories/14.JPG";
import img15 from "../assets/memories/15.JPG";
import img16 from "../assets/memories/16.JPG";
import img17 from "../assets/memories/17.JPG";
import img18 from "../assets/memories/18.JPG";
import img19 from "../assets/memories/19.JPG";
import img20 from "../assets/memories/20.JPG";

export default function Memories() {
  const row1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
  const row2 = [img20, img19, img18, img17, img16, img15, img14, img13, img12, img11, img10, img9, img8, img7, img6, img5, img4, img3, img2, img1];

  return (
    <section
      id="memories"
      className="py-24 text-white overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Last Year <span className="text-cyan-400">Memories</span>
      </h2>

      <ThreeDScrollTriggerContainer>
        {/* 🔹 ROW 1 (Left → Right) */}
        <ThreeDScrollTriggerRow baseVelocity={4}>
          {row1.map((img, i) => (
            <div
              key={`row1-${i}`}
              className="mx-3 w-[180px] h-[120px] rounded-lg overflow-hidden shadow-lg bg-black/60"
            >
              <img
                src={img}
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </ThreeDScrollTriggerRow>

        {/* 🔹 ROW 2 (Right → Left) */}
        <div className="mt-8">
          <ThreeDScrollTriggerRow
            baseVelocity={4}
            direction={-1}
          >
            {row2.map((img, i) => (
              <div
                key={`row2-${i}`}
                className="mx-3 w-[180px] h-[120px] rounded-lg overflow-hidden shadow-lg bg-black/60"
              >
                <img
                  src={img}
                  alt={`Memory ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </ThreeDScrollTriggerRow>
        </div>
      </ThreeDScrollTriggerContainer>
    </section>
  );
}
