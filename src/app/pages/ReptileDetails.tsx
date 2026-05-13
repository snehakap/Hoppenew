import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReptilesData from "./Reptiles.json";

export function ReptileDetails() {

  const { id } = useParams();

  const reptile = ReptilesData.find(
    (item) => item.id === id
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {

    if (!reptile?.images?.length || reptile.images.length <= 1)
      return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);

  }, [currentIndex, reptile]);

  /* ================= NEXT SLIDE ================= */
  const nextSlide = () => {

    if (!reptile || !scrollRef.current) return;

    const newIndex =
      currentIndex === reptile.images.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(newIndex);

    scrollRef.current.scrollTo({
      left: newIndex * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  /* ================= PREVIOUS SLIDE ================= */
  const prevSlide = () => {

    if (!reptile || !scrollRef.current) return;

    const newIndex =
      currentIndex === 0
        ? reptile.images.length - 1
        : currentIndex - 1;

    setCurrentIndex(newIndex);

    scrollRef.current.scrollTo({
      left: newIndex * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  /* ================= NOT FOUND ================= */
  if (!reptile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">

        <h1 className="text-3xl font-semibold text-slate-800">
          Reptil nicht gefunden
        </h1>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ================= IMAGE SECTION ================= */}
      <section className="pt-28 pb-14 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ================= IMAGE SLIDER ================= */}
          {reptile.images?.length > 0 && (

            <div className="relative">

              {/* LEFT BUTTON */}
              {reptile.images.length > 1 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2
                  -translate-y-1/2 z-20
                  w-14 h-14 rounded-full
                  bg-white/80 backdrop-blur-md
                  border border-white/40
                  shadow-xl
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-[#00A86B]
                  group"
                >

                  <ChevronLeft
                    className="w-7 h-7 text-slate-800
                    group-hover:text-white"
                  />

                </button>
              )}

              {/* RIGHT BUTTON */}
              {reptile.images.length > 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2
                  -translate-y-1/2 z-20
                  w-14 h-14 rounded-full
                  bg-white/80 backdrop-blur-md
                  border border-white/40
                  shadow-xl
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-[#00A86B]
                  group"
                >

                  <ChevronRight
                    className="w-7 h-7 text-slate-800
                    group-hover:text-white"
                  />

                </button>
              )}

              {/* IMAGES */}
              <div
                ref={scrollRef}
                className="flex overflow-hidden
                rounded-[32px]
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >

                {reptile.images.map((image, index) => (

                  <div
                    key={index}
                    className="min-w-full flex-shrink-0"
                  >

                    <img
                      src={image}
                      alt={`${reptile.title} ${index + 1}`}
                      className="w-full h-[450px] md:h-[700px]
                      object-cover"
                    />

                  </div>
                ))}

              </div>

              {/* ================= INDICATORS ================= */}
              {reptile.images.length > 1 && (

                <div className="flex justify-center gap-3 mt-6">

                  {reptile.images.map((_, index) => (

                    <button
                      key={index}
                      onClick={() => {

                        if (!scrollRef.current) return;

                        setCurrentIndex(index);

                        scrollRef.current.scrollTo({
                          left:
                            index *
                            scrollRef.current.offsetWidth,
                          behavior: "smooth",
                        });
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        currentIndex === index
                          ? "w-10 h-3 bg-[#00A86B]"
                          : "w-3 h-3 bg-slate-300"
                      }`}
                    />

                  ))}

                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* ================= TITLE ================= */}
      <section className="pb-10">

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-slate-500
            [font-family:'Playfair_Display',serif]"
          >
            {reptile.title}
          </h1>

        </div>

      </section>

      {/* ================= DETAILS TABLE ================= */}
      <section className="pb-14">

        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div
            className="overflow-hidden rounded-[32px]
            border border-slate-200
            shadow-[0_10px_35px_rgba(0,0,0,0.05)]"
          >

            <table className="w-full border-collapse">

              <tbody>

                <tr className="border-b border-slate-200">
                  <td
                    className="w-1/3 p-6 bg-slate-50
                    font-semibold text-slate-900"
                  >
                    English Name
                  </td>

                  <td className="p-6 text-slate-600">
                    {reptile.name_en}
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <td
                    className="p-6 bg-slate-50
                    font-semibold text-slate-900"
                  >
                    German Name
                  </td>

                  <td className="p-6 text-slate-600">
                    {reptile.name_de}
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <td
                    className="p-6 bg-slate-50
                    font-semibold text-slate-900"
                  >
                    Scientific Name
                  </td>

                  <td className="p-6 text-slate-600 italic">
                    {reptile.species_name_latin}
                  </td>
                </tr>

                <tr>
                  <td
                    className="p-6 bg-slate-50
                    font-semibold text-slate-900"
                  >
                    Category
                  </td>

                  <td className="p-6 text-slate-600 capitalize">
                    {reptile.umbrella_term}
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="pb-28">

        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div
            className="p-10 rounded-[32px]
            bg-slate-50 border border-slate-200
            shadow-[0_10px_35px_rgba(0,0,0,0.05)]"
          >

            <h2
              className="text-3xl md:text-4xl font-semibold mb-8
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Beschreibung
            </h2>

            <p
              className="text-lg leading-9 text-slate-600
              [font-family:'Poppins',sans-serif]"
            >
              {reptile.description}
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}