import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ProcessDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Die äußere Optik unserer Terrarien
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600
              max-w-3xl mx-auto leading-relaxed
              [font-family:'Poppins',sans-serif]"
            >
              Hochwertige Materialien, exklusive Dekore und
              perfekte Verarbeitung für individuelle Premium-Terrarien.
            </p>
          </div>

          {/* ================= CONTENT + IMAGES ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ================= LEFT TEXT ================= */}
            <div
              className="p-8 md:p-12 rounded-[40px]
              bg-slate-50 border border-slate-200
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >
              <div
                className="space-y-10 text-slate-600
                text-lg leading-9
                [font-family:'Poppins',sans-serif]"
              >
                <div>
                  <h2
                    className="text-3xl font-semibold mb-5
                    text-slate-900
                    [font-family:'Playfair_Display',serif]"
                  >
                    Hochwertige Materialien
                  </h2>

                  <p>
                    Wir verwenden standardmäßig 19mm Spanplatten.
                    Diese sind mit Kunststoff-Furnieren beschichtet.
                    Wir verwenden weit über 200 Dekore für den
                    Terrarienmöbelbau. Die Platten sind durch die
                    Kunststoff-Furnierung besonders widerstandsfähig
                    gegen Feuchtigkeit, hohe Temperaturen und hohe
                    Luftfeuchtigkeit.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-3xl font-semibold mb-5
                    text-slate-900
                    [font-family:'Playfair_Display',serif]"
                  >
                    Individuelle Gestaltung
                  </h2>

                  <p>
                    Bei der Planung der Optik haben Sie die freie Auswahl.
                    So können Sie in unzähligen Holzdekoren von allen
                    namhaften Herstellern den zu Ihren Möbeln passenden
                    Ton wählen. Viele Dekore zählen zur
                    Standardpreiskategorie. Andere, sehr ausgefallene
                    Dekore haben längere Lieferzeiten, werden extra
                    angefertigt und haben dadurch einen Aufpreis.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-3xl font-semibold mb-5
                    text-slate-900
                    [font-family:'Playfair_Display',serif]"
                  >
                    Präzise Verarbeitung
                  </h2>

                  <p>
                    Die 2mm starken ABS-Umleimer besitzen abgerundete
                    Kanten und sorgen für eine besonders hochwertige
                    Verarbeitung. Beim Plattenzuschnitt achten wir
                    darauf, dass die Maserung beim Terrarium und
                    Unterschrank optisch durchläuft und ein harmonisches
                    Gesamtbild entsteht.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGES ================= */}
            <div className="space-y-8">

              {/* LONG IMAGE */}
              <div
                className="overflow-hidden rounded-[36px]
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              >
                <img
                  src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1778690503/9P_bmjmhp.jpg"
                  alt="Terrarium Optik"
                  className="w-full h-[500px] md:h-[380px]
                  object-cover"
                />
              </div>

              {/* SECOND IMAGE */}
              <div
                className="overflow-hidden rounded-[36px]
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              >
                <img
                  src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779569457/Alu-Glaseinfassung-pc1b9pkd73ftyxtr1degflgjhw4t1ha1s1hi4o654o_anulnw.jpg"
                  alt="Terrarium Details"
                  className="w-full h-[240px] md:h-[420px]
                  object-cover"
                />
              </div>

            </div>

          </div>

          {/* ================= CTA ================= */}
          <div className="text-center mt-20">
            <Link
              to="/Calculator"
              className="group inline-flex items-center gap-4
              px-10 py-5 rounded-2xl
              bg-[#00A86B] text-white
              font-semibold text-lg
              shadow-[0_15px_45px_rgba(0,168,107,0.25)]
              transition-all duration-500
              hover:scale-105 hover:bg-[#008f5a]"
            >
              Zum Terrarium Rechner

              <ArrowRight
                className="w-6 h-6
                transition-transform duration-300
                group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
