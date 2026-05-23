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

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT IMAGE ================= */}
        <div>

          <div
            className="overflow-hidden rounded-[36px]
            shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          >

            <img
              src="/images/terrarium-1.jpg"
              alt="Terrarium Möbelbau"
              className="w-full h-[950px] object-cover"
            />

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-col">

          {/* ================= TEXT ================= */}
          <div>

            <h2
              className="text-4xl md:text-5xl
              font-semibold text-slate-900
              leading-tight mb-10
              [font-family:'Playfair_Display',serif]"
            >
              Die äußere Optik unserer Terrarien
            </h2>

            <div
              className="space-y-8 text-lg text-slate-600
              leading-9
              [font-family:'Poppins',sans-serif]"
            >

              <p>
                Wir verwenden standardmaßig 19mm Spanplatten.
                Diese sind mit Kunststoff-Furnieren beschichtet.
                Wir verwenden weit über 200 Dekore für den
                Terrarienmöbelbau. Die Platten sind durch die
                Kunststoff-Furnierung besonders widerstandsfähig
                gegen Feuchtigkeit, hohe Temperaturen und hohe
                Luftfeuchtigkeit.
              </p>

              <p>
                Bei der Planung der Optik haben Sie die freie Auswahl.
                So können Sie in unzähligen Holzdekoren von allen
                namhaften Herstellern den zu Ihren Möbeln passenden
                Ton wählen. Viele Dekore zählen zur
                Standardpreiskategorie. Andere, sehr ausgefallene
                haben längere Lieferzeiten, werden extra angefertigt
                und haben dadurch einen Aufpreis.
              </p>

              <p>
                Die 2mm starken ABS-Umleimer haben abgerundete
                Kanten.
              </p>

              <p>
                Beim Plattenzuschnitt achten wir darauf, dass die
                Maserung beim Terrarium und Unterschrank optisch
                durchläuft.
              </p>

            </div>

          </div>

          {/* ================= SECOND IMAGE ================= */}
          <div
            className="mt-10 overflow-hidden rounded-[36px]
            shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          >

            <img
              src="/images/terrarium-2.jpg"
              alt="Terrarium Details"
              className="w-full h-[320px] object-cover"
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
