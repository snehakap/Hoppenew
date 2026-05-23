import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Contact() {
  return (
    <>
      {/* ================= HEADING ================= */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-slate-500
            [font-family:'Playfair_Display',serif]"
          >
            Kontakt
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto
            leading-relaxed
            [font-family:'Poppins',sans-serif]"
          >
            Kontaktieren Sie uns für individuelle Terrarien,
            exklusive Sonderanfertigungen und professionelle Beratung.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ADDRESS */}
            <div
              className="group p-10 rounded-[32px]
              bg-slate-50 border border-slate-200
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-2xl
                bg-[#00A86B]
                flex items-center justify-center
                shadow-lg mb-8"
              >
                <MapPin className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl font-semibold text-slate-900 mb-5
                [font-family:'Playfair_Display',serif]"
              >
                Adresse
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Gewerbering 11
                <br />
                47661 Issum
              </p>
            </div>

            {/* PHONE */}
            <div
              className="group p-10 rounded-[32px]
              bg-slate-50 border border-slate-200
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-2xl
                bg-[#00A86B]
                flex items-center justify-center
                shadow-lg mb-8"
              >
                <Phone className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl font-semibold text-slate-900 mb-5
                [font-family:'Playfair_Display',serif]"
              >
                Telefon
              </h2>

              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold">Tech and Support:</p>
                  <p>00 49 178 8585416</p>
                </div>

                <div>
                  <p className="font-semibold">Beratung und Verkauf:</p>
                  <p>00 49 177 8114125</p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div
              className="group p-10 rounded-[32px]
              bg-slate-50 border border-slate-200
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-2xl
                bg-[#00A86B]
                flex items-center justify-center
                shadow-lg mb-8"
              >
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl font-semibold text-slate-900 mb-5
                [font-family:'Playfair_Display',serif]"
              >
                E-Mail
              </h2>

              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold">Allgemeine Anfragen:</p>
                  <p>info@hoppe-terrarienbau.de</p>
                </div>

                <div>
                  <p className="font-semibold">Für Kaufinteressenten:</p>
                  <p>vertrieb@hoppe-terrarienbau.de</p>
                </div>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div
              className="group p-10 rounded-[32px]
              bg-slate-50 border border-slate-200
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-2xl
                bg-[#00A86B]
                flex items-center justify-center
                shadow-lg mb-8"
              >
                <Clock className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl font-semibold text-slate-900 mb-5
                [font-family:'Playfair_Display',serif]"
              >
                Öffnungszeiten
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Montag - Freitag
                <br />
                09:00 - 18:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALCULATOR CTA ================= */}
      <section className="pb-28" bg-white>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[40px]
            bg-gradient-to-br from-[#00A86B] to-[#008f5a]
            p-12 md:p-16 text-center
            shadow-[0_20px_80px_rgba(0,168,107,0.35)]"
          >
            {/* Background Glow */}
            <div
              className="absolute -top-20 -right-20
              w-[300px] h-[300px]
              bg-white/10 rounded-full blur-3xl"
            />

            <div
              className="absolute -bottom-20 -left-20
              w-[300px] h-[300px]
              bg-black/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <h2
                className="text-4xl md:text-5xl
                font-semibold text-white mb-6
                [font-family:'Playfair_Display',serif]"
              >
                Terrarium Rechner
              </h2>

              <p
                className="text-white/90 text-lg md:text-xl
                max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Berechnen Sie schnell und einfach die Kosten
                Ihres individuellen Premium-Terrariums.
              </p>

              <Link
                to="/Calculator"
                className="group inline-flex items-center gap-4
                px-10 py-5 rounded-2xl
                bg-white text-[#00A86B]
                font-semibold text-lg
                shadow-[0_15px_45px_rgba(0,0,0,0.2)]
                transition-all duration-500
                hover:scale-105 hover:bg-slate-100"
              >
                Zum Terrarium Rechner

                <ArrowRight
                  className="w-6 h-6 transition-transform duration-300
                  group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
