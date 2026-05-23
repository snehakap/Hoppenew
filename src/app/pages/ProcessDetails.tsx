import { useState } from "react";

export function ProcessDetails() {
  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    name: string;
  }>(null);

  const woodDecors = [
    {
      name: "Ahorn Mandal Natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779572702/Ahorn-Mandal-natur-H3840-ST9-150x150_cedtny.jpg",
    },
    {
      name: "Akazie Hell Lakeland",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779572718/Akazie-hell-Lakeland-H1277-ST9_ahlkg5.jpg",
    },
    {
      name: "Berglärche Anthrazit",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779572750/Bergla%CC%88rche-anthrazit-H3406-ST38-150x150_qdfr3y.jpg",
    },
    {
      name: "Coco Bolo Natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779572767/Coco-Bolo-natur-H3012-ST22-150x150_jlm8d2.jpg",
    },
    {
      name: "Berglärche Thermobraun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779572757/Bergla%CC%88rche-thermobraun-H3408-ST38-150x150_rtuwxd.jpg",
    },
  ];

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

              {/* ================= WOOD DECORS GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
                {woodDecors.map((decor, index) => (
                  <div key={index} className="group text-center">
                    <button
                      onClick={() => setSelectedImage(decor)}
                      className="w-full"
                    >
                      <div
                        className="overflow-hidden rounded-2xl
                        shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
                      >
                        <img
                          src={decor.image}
                          alt={decor.name}
                          className="w-full aspect-square object-cover
                          transition-transform duration-500
                          group-hover:scale-105 cursor-pointer"
                        />
                      </div>
                    </button>

                    <p
                      className="mt-4 text-sm md:text-base text-slate-700
                      leading-relaxed
                      [font-family:'Poppins',sans-serif]"
                    >
                      {decor.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50
          bg-black/80 backdrop-blur-sm
          flex items-center justify-center
          p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ================= CLOSE BUTTON ================= */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0
              text-white text-5xl font-light
              hover:opacity-70 transition-opacity"
            >
              ×
            </button>

            {/* ================= LARGE IMAGE ================= */}
<div
  className="flex items-center justify-center
  bg-white rounded-3xl p-8"
>
  <img
    src={selectedImage.image}
    alt={selectedImage.name}
    className="
      h-[900px]
      w-auto
      object-contain
      rounded-2xl
      shadow-[0_25px_80px_rgba(0,0,0,0.25)]
    "
    style={{
      imageRendering: "auto",
    }}
  />
</div>

            {/* ================= IMAGE TITLE ================= */}
            <p
              className="text-center text-white mt-6
              text-lg [font-family:'Poppins',sans-serif]"
            >
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
