import { Link } from "react-router";
import ProcessData from "./ProcessData.json";

export function Service() {

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADING ================= */}
      <section className="pt-28 pb-16 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Der Aufbau unserer Terrarien
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600
              max-w-4xl mx-auto leading-relaxed
              [font-family:'Poppins',sans-serif]"
            >
              Entdecken Sie Schritt für Schritt,
              wie unsere individuellen Premium-Terrarien
              mit höchster Präzision und Liebe zum Detail
              gefertigt werden.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROCESS FLOW ================= */}
      <section className="pb-28 bg-white">

        <div
          className="max-w-7xl mx-auto
          px-6 lg:px-8"
        >

          <div className="space-y-28">

            {ProcessData.map((step, index) => {

              const isEven = index % 2 === 0;

              return (

                <div
                  key={step.id}
                  className={`
                    grid lg:grid-cols-2 gap-14 items-center
                    ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}
                  `}
                >

                  {/* ================= IMAGE ================= */}
                  <Link
                    to={`/prozess/${step.id}`}
                    className="group relative block"
                  >

                    <div
                      className="overflow-hidden rounded-[36px]
                      shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
                    >

                      <img
                        src={step.cover_image}
                        alt={step.title}
                        className="w-full h-[420px] md:h-[520px]
                        object-cover
                        transition duration-700
                        group-hover:scale-105"
                      />

                    </div>

                    {/* ================= STEP NUMBER ================= */}
                    <div
                      className="absolute -top-6 -left-6
                      w-20 h-20 rounded-full
                      bg-[#00A86B]
                      text-white text-2xl font-semibold
                      flex items-center justify-center
                      shadow-2xl"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </Link>

                  {/* ================= TEXT ================= */}
                  <div>


                    <h2
                      className="text-4xl md:text-5xl
                      font-semibold text-slate-900
                      leading-tight mb-8
                      [font-family:'Playfair_Display',serif]"
                    >
                      {step.title}
                    </h2>

                    <p
                      className="text-lg text-slate-600
                      leading-9 mb-10
                      [font-family:'Poppins',sans-serif]"
                    >
                      {step.preview_text}
                    </p>

                    {/* ================= BUTTON ================= */}
{step.title === "Dekore für den Terrarienmöbelbau" && (
  <Link
    to={`/prozess/${step.id}`}
    className="inline-flex items-center
    gap-3 px-8 py-4 rounded-2xl
    bg-[#00A86B]
    text-white font-medium
    shadow-lg
    hover:scale-105
    hover:shadow-[0_15px_40px_rgba(0,168,107,0.35)]
    transition-all duration-300"
  >
    Mehr erfahren

    <span className="text-xl">
      →
    </span>

  </Link>
)}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}
