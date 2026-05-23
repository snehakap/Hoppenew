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
              Hochwertige Materialien, exklusive Dekore und perfekte
              Verarbeitung für individuelle Premium-Terrarien.
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
                  src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1778690503/9P_bmjmhp.jpg"
                  alt="Terrarium Möbelbau"
                  className="w-full h-[950px] object-cover"
                />
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex flex-col">
              {/* ================= TEXT ================= */}
              <div>
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
                    Bei der Planung der Optik haben Sie die freie
                    Auswahl. So können Sie in unzähligen Holzdekoren
                    von allen namhaften Herstellern den zu Ihren
                    Möbeln passenden Ton wählen. Viele Dekore zählen
                    zur Standardpreiskategorie. Andere, sehr
                    ausgefallene haben längere Lieferzeiten, werden
                    extra angefertigt und haben dadurch einen
                    Aufpreis.
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
                  src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779569457/Alu-Glaseinfassung-pc1b9pkd73ftyxtr1degflgjhw4t1ha1s1hi4o654o_anulnw.jpg"
                  alt="Terrarium Details"
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= HOLZ-DEKORE SECTION ================= */}
          <div className="mt-28">
            <div className="max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-semibold
                text-slate-800 mb-10
                [font-family:'Playfair_Display',serif]"
              >
                Holz-Dekore
              </h2>

              <div
                className="space-y-8 text-lg text-slate-600
                leading-9
                [font-family:'Poppins',sans-serif]"
              >
                <p>
                  Hier zeigen wir einige der meist gefragtesten
                  Dekore, um Ihnen schon mal einige Ideen für Ihre
                  eigene Planung zu bieten: Ahorn, Buche, Eiche,
                  Kirsche, Erle, Fichte, Birke, Nussbaum etc.
                </p>

                <p>
                  Einige Dekore besitzen eine besondere Haptik durch
                  eine strukturierte Oberfläche, die sich anfühlt wie
                  echtes Holz. Viele andere haben eine sichtbare und
                  auch fühlbare Maserung (Haptik).
                </p>

                <p>
                  Für spezielle Holzdekore, die genau zu Ihrem
                  Ambiente passen sollen, finden wir sicherlich unter
                  vielen hundert Möglichkeiten für Sie genau das
                  Richtige. Dies stimmen wir dann anhand von
                  Original-Holzmustern mit Ihnen ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
