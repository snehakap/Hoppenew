import { useEffect, useRef, useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router";

import {
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

import ProductData from "./ProductsData.json";

export function ProductDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  const product = ProductData.find(
    (item) => item.id === Number(id)
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= IMAGE MODAL =================
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (!product?.images?.length || product.images.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, product]);

  /* ================= NEXT SLIDE ================= */
  const nextSlide = () => {
    if (!product || !scrollRef.current) return;

    const newIndex =
      currentIndex === product.images.length - 1
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
    if (!product || !scrollRef.current) return;

    const newIndex =
      currentIndex === 0
        ? product.images.length - 1
        : currentIndex - 1;

    setCurrentIndex(newIndex);

    scrollRef.current.scrollTo({
      left: newIndex * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold text-slate-800">
          Produkt nicht gefunden
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="pt-12 md:pt-24 pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ================= BACK LINK ================= */}
          <div className="mb-8">

            <button
              onClick={() => navigate(-1)}
              className="
                group inline-flex items-center gap-2
                text-slate-500 hover:text-[#00A86B]
                transition-all duration-300
                [font-family:'Poppins',sans-serif]
              "
            >

              <ChevronLeft
                className="
                  w-5 h-5
                  transition-transform duration-300
                  group-hover:-translate-x-1
                "
              />

              <span
                className="
                  text-lg md:text-2xl tracking-wide font-medium
                "
              >
                Zurück
              </span>

            </button>

          </div>

          {/* ================= TITLE ================= */}
          <div className="text-center mb-14">

            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              {product.title}
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600
              max-w-4xl mx-auto leading-relaxed
              [font-family:'Poppins',sans-serif]"
            >
              {product.description}
            </p>

          </div>

          {/* ================= IMAGE SLIDER ================= */}
          <div className="relative">

            {/* LEFT BUTTON */}
            {product.images.length > 1 && (
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
            {product.images.length > 1 && (
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

              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0
                  flex items-center justify-center
                  bg-slate-50"
                >

                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                    className="w-full h-[450px] md:h-[700px]
                    object-contain bg-slate-100
                    cursor-zoom-in"
                  />

                </div>
              ))}

            </div>

            {/* ================= INDICATORS ================= */}
            {product.images.length > 1 && (
              <div
                className="flex justify-center gap-3 mt-6"
              >

                {product.images.map((_, index) => (
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

        </div>
      </section>

      {/* ================= TECHNICAL DETAILS ================= */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* SECTION TITLE */}
          <div className="text-center mb-16">

            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Technische Details
            </h2>

          </div>

          {/* DETAILS GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {Object.entries(product.technicalDetails).map(
              ([key, value], index) => (
                <div
                  key={index}
                  className="group p-8 rounded-[28px]
                  bg-slate-50 border border-slate-200
                  shadow-sm
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1
                  transition-all duration-300"
                >

                  <h3
                    className="text-2xl font-semibold text-slate-900 mb-6
                    capitalize group-hover:text-[#00A86B]
                    transition-colors duration-300
                    [font-family:'Playfair_Display',serif]"
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </h3>

                  {Array.isArray(value) ? (

                    <ul className="space-y-4">

                      {value.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4"
                        >

                          <div
                            className="w-2 h-2 rounded-full
                            bg-[#00A86B] mt-2"
                          />

                          <span
                            className="text-slate-600 leading-relaxed
                            [font-family:'Poppins',sans-serif]"
                          >
                            {item}
                          </span>

                        </li>
                      ))}

                    </ul>

                  ) : typeof value === "object" ? (

                    <div className="space-y-5">

                      {Object.entries(value).map(([k, v], i) => (
                        <div
                          key={i}
                          className="pb-4 border-b border-slate-200"
                        >

                          <p
                            className="font-semibold text-slate-800 mb-2 capitalize"
                          >
                            {k.replace(/([A-Z])/g, " $1")}
                          </p>

                          <p className="text-slate-600 leading-relaxed">
                            {Array.isArray(v)
                              ? v.join(", ")
                              : String(v)}
                          </p>

                        </div>
                      ))}

                    </div>

                  ) : (

                    <p
                      className="text-slate-600 leading-relaxed
                      [font-family:'Poppins',sans-serif]"
                    >
                      {value}
                    </p>

                  )}

                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* ================= FULLSCREEN IMAGE MODAL ================= */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[999]
          bg-black/90 backdrop-blur-sm
          flex items-center justify-center
          p-4"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6
            w-12 h-12 rounded-full
            bg-white/10 hover:bg-white/20
            border border-white/20
            flex items-center justify-center
            transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-full max-h-[90vh]
            object-contain rounded-2xl"
          />

        </div>

      )}

    </div>
  );
}
