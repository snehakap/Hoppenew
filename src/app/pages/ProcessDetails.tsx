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
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574237/Ahorn-Mandal-natur-H3840-ST9_wlqlid.jpg",
    },
    {
      name: "Akazie Hell Lakeland",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574445/Akazie-hell-Lakeland-H1277-ST9_i8w3xo.jpg",
    },
    {
      name: "Berglärche Anthrazit",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574444/Bergla%CC%88rche-anthrazit-H3406-ST38_re0gld.jpg",
    },
    {
      name: "Coco Bolo Natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574442/Coco-Bolo-natur-H3012-ST22_piz0d7.jpg",
    },
    {
      name: "Berglärche Thermobraun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574443/Bergla%CC%88rche-thermobraun-H3408-ST38_ksnhma.jpg",
    },
    {
      name: "Eiche Bardolino natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574443/Bergla%CC%88rche-thermobraun-H3408-ST38_ksnhma.jpg",
    },{
      name: "Eiche Charleston dunkelbraun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574440/Eiche-Charleston-dunkelbraun-H3154-ST36_l8gv3t.jpg",
    },{
      name: "Eiche Corbridge natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574440/Eiche-Corbridge-natur-H3395-ST9_ncptx0.jpg",
    },{
      name: "Eiche Davos natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574438/Eiche-Davos-natur-H3131-ST12_lfqonf.jpg",
    },{
      name: "Eiche Denver trüffelbraun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574438/Eiche-Denver-tru%CC%88ffelbraun-H1399-ST10_lhiblk.jpg",
    },
    {
      name: "Eiche Gladstone sandbeige",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574982/Eiche-Gladstone-sandbeige-H3309-ST28_zahk2b.jpg",
    },
    {
      name: "Eiche Gladstone greige",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574983/Eiche-Gladstone-greige-H3326-ST28_aygvgd.jpg",
    },
    {
      name: "Eiche Gladstone weiss",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574982/Eiche-Gladstone-weiss-H3335-ST28_e5tvyr.jpg",
    },
    {
      name: "Eiche Gladstone tabak",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574981/Eiche-Gladstone-tabak-H3325-ST28_bylano.jpg",
    },
    {
      name: "Eiche Halifax natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574981/Eiche-Halifax-natur-H1180-ST37_wpzmeb.jpg",
    },
    {
      name: "Eiche Halifax tabak",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779621231/Eiche-Halifax-tabak-H1181-ST37_nwboh6.jpg",
    },
     {
      name: "Eiche Halifax weiß",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779621230/Eiche-Halifax-wei%C3%9F-H1176-ST37_k0pjku.jpg",
    },
     {
      name: "Eiche Halifax Zinn",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779621230/Eiche-Halifax-Zinn-H3176-ST37_rvwxlk.jpg",
    },
     {
      name: "Eiche Hamilton natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779621230/Eiche-Hamilton-natur-H3303-ST10_h5x3xm.jpg",
    },
     {
      name: "Eiche Hunton dunkel",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779621230/Eiche-Hunton-dunkel-H2033-ST10_yw3jhq.jpg",
    },
    {
      name: "Eiche Kaisersberg",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629050/Eiche-Kaisersberg-H3349-ST19_mnnwer.jpg",
    },{
      name: "Eiche Kendal geölt",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629050/Eiche-Kendal-geo%CC%88lt-H3171-ST9_yvnjmj.jpg",
    },
    {
      name: "Eiche Kendal cognac",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629050/Eiche-Kendal-cognac-H3398-ST9_gqfanx.jpg",
    },
    {
      name: "Eiche Kendal natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629049/Eiche-Kendal-natur-H3170-ST9_i7fphv.jpg",
    },
    {
      name: "Eiche Lorenzo beigegrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629048/Eiche-Lorenzo-beigegrau-H3146-ST19_qtfx3r.jpg",
    },
    {
      name: "Eiche Nebraska grau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629048/Eiche-Nebraska-grau-H3332-ST10_hewviw.jpg",
    },
    {
      name: "Eiche Nebraska natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629048/Eiche-Nebraska-natur-H3331-ST10_gz8o3h.jpg",
    },
    {
      name: "Eiche Orleans braun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629047/Eiche-Orleans-braun-H1379-ST36_zxo3wp.jpg",
    },
    {
      name: "Eiche Orleans sandbeige",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629047/Eiche-Orleans-sandbeige-H1377-ST36_hpw8mu.jpg",
    },
    {
      name: "Eiche Santa Fe vintage",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Eiche-Santa-Fe-vintage-H1330-ST10_k5y9kb.jpg",
    },
    {
      name: "Eiche Sherman anthrazit",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629045/Eiche-Sherman-anthrazit-H1346-ST32_j7f1oy.jpg",
    },
    {
      name: "Eiche Sherman cognacbraun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629045/Eiche-Sherman-cognacbraun-H1344-ST32_l6emib.jpg",
    },
    {
      name: "Eiche Vicenza",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629049/Eiche-Vicenza-H3157-ST9_rghowk.jpg",
    },
    {
      name: "Eiche Whiteriver graubraun",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629047/Eiche-Whiteriver-graubraun-H1313-ST10_qtyjqk.jpg",
    },
    {
      name: "Esche Navarra",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629047/Esche-Navarra-H1250-ST36_dqvnot.jpg",
    },
    {
      name: "Fichte Astfichte natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629047/Fichte-Astfichte-natur-H3470-ST22_gdv9uq.jpg",
    },
    {
      name: "Hickory natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629048/Hickory-natur-H3730-ST10_ecnucp.jpg",
    },
    {
      name: "Hard Maple champagne",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629048/Hard-Maple-champagne-H3860-ST9_rwqcfn.jpg",
    },
    {
      name: "Kentucky Chestnut sand",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629047/Kentucky-Chestnut-sand-H1710-ST10_palbzz.jpg",
    },
    {
      name: "Kirschbaum Locarno",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Kirschbaum-Locarno-H1636-ST9_gqjhhl.jpg",
    },
    {
      name: "Nussbaum Lincoln",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Nussbaum-Lincoln-H1714-ST10_blkhn1.jpg",
    },
    {
      name: "Nussbaum Dijon natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Nussbaum-Dijon-natur-H3734-ST9_ecfkmc.jpg",
    },
    {
      name: "Nussbaum Pacific natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Nussbaum-Pacific-natur-H3700-ST10_zzqzxp.jpg",
    },
    {
      name: "Nussbaum tabak Pacific",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Nussbaum-tabak-Pacific-H3702-ST10_zvolvc.jpg",
    },
    {
      name: "Pinie Cascina",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629046/Pinie-Cascina-H1401-ST22_binp9e.jpg",
    },
    {
      name: "Pinie polar Aland",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629045/Pinie-polar-Aland-H3433-ST22_o5xwnl.jpg",
    },
    {
      name: "Pinie weiss Aland",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629045/Pinie-weiss-Aland-H3430-ST22_aggune.jpg",
    },
    {
      name: "Wildeiche natur",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779629045/Wildeiche-natur-H1318-ST10_zzuja8.jpg",
    }
  ];

  const uniDecors = [
    {
      name: "Alabasterweiss",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622717/Alabasterweiss-U104-ST9_eh222h.jpg",
    },
    {
      name: "Hellgrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622717/Hellgrau-U708-ST9_lmccdb.jpg",
    },
    {
      name: "Kaschmirgrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779574444/Bergla%CC%88rche-anthrazit-H3406-ST38_re0gld.jpg",
    },
    {
      name: "Kieselgrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622717/Hellgrau-U708-ST9_lmccdb.jpg",
    },
    {
      name: "Steingrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622716/Steingrau-U727-ST9_higism.jpg",
    },
    {
  name: "Staubgrau",
  image:
    "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622716/Staubgrau-U732-ST9_nychzs.jpg",
}
    ,{
      name: "Taupe dunkel",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622715/Taupe-Dunkel-U740-ST9_iuaqun.jpg",
    },{
      name: "Onyxgrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622716/Onyxgrau-U960-ST9_oqcpbo.jpg",
    },{
      name: "Diamantgrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622716/Diamantgrau-U963-ST9_kafkhq.jpg",
    },{
      name: "Lavagrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622715/Lavagrau-U741-ST9_lcwoqu.jpg",
    },
    {
      name: "Softschwarz",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622717/Softschwarz-U899-ST9_kayxys.jpg",
    },
    {
      name: "Topweiß",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622334/Topweiss-AT-0112-FH-1_tz0dho.jpg",
    },
    {
      name: "Schwarz",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622334/Schwarz-AT-0080_HG_-2_bdy8lx.jpg",
    }
];

const metallicDecors = [
    {
      name: "Ferro bronze",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622336/Ferro-bronze-F302-ST87-2_zwtoon.jpg",
    },
    {
      name: "Fineline metallic anthrazit",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622337/Fineline-Metallic-anthrazit-H3190-ST19-2_lf7qyz.jpg",
    },
    {
      name: "Golden patina",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622336/Golden-Patina-F411-ST20-2_krj6as.jpg",
    },
    {
      name: "Inox metallic",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622336/Inox-metallic-F500-ST20-2_kihbov.jpg",
    },
    {
      name: "Metal Fabric anthrazit",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622338/Metal-Fabric-anthrazit-F461-ST10-2_il4ah7.jpg",
    },
    {
      name: "Metallic indigoblau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622336/Metallic-indigoblau-F462-ST20-2_dsiixv.jpg",
    },{
      name: "Metallic platingrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622335/Metallic-platingrau-F463-ST20-2_ikcejn.jpg",
    },{
      name: "Steeelcut titangrau",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622335/Steelcut-titangrau-F313-ST10-2_djzpeo.jpg",
    }
];

const steinoptikDecors = [
    {
      name: "Marmor Levanto weiss",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622216/Marmor-Levanto-weiss-F812-ST9_euqxfh.jpg",
    },
    {
      name: "Pietra Grigia schwarz",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779622217/Pietra-Grigia-schwarz-F206-ST9_f2iw2h.jpg",
    }
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
                  className="w-full h-[600px] md:h-[950px] object-cover"
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
                  className="w-full h-[300px] md:h-[520px] object-cover"
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
        
      {/* ================= Uni-Dekore SECTION ================= */}
          <div className="mt-28">
            <div className="max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-semibold
                text-slate-800 mb-10
                [font-family:'Playfair_Display',serif]"
              >
                Uni-Dekore
              </h2>

              <div
                className="space-y-8 text-lg text-slate-600
                leading-9
                [font-family:'Poppins',sans-serif]"
              >
                <p>
                  Neben den Holzdekoren bieten wir selbstverständlich auch eine große Auswahl an Uni-Dekoren in verschiedenen Farben wie Gelb, Rot, Grün oder Blau sowie zahlreiche Grauabstufungen – ergänzt durch klassisches Schwarz und Weiß.

Viele Dekore sind zudem mit unterschiedlichen Oberflächen erhältlich: von supermatten Ausführungen über edlen Seidenglanz bis hin zu fühlbaren Maserungen oder feinen Miniperlstrukturen.
                </p>

              </div>

              {/* ================= UNI DECORS GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
                {uniDecors.map((decor, index) => (
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

      {/* ================= metallic-Dekore SECTION ================= */}
          <div className="mt-28">
            <div className="max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-semibold
                text-slate-800 mb-10
                [font-family:'Playfair_Display',serif]"
              >
                Metallic-Dekore
              </h2>

              <div
                className="space-y-8 text-lg text-slate-600
                leading-9
                [font-family:'Poppins',sans-serif]"
              >
                <p>
                  Daneben gibt es mit einem Aufpreis auch Dekore in Metallic-Optik
                </p>

              </div>

              {/* ================= UNI DECORS GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
                {metallicDecors.map((decor, index) => (
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
    

    {/* ================= Steinoptik-Dekore SECTION ================= */}
          <div className="mt-28">
            <div className="max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-semibold
                text-slate-800 mb-10
                [font-family:'Playfair_Display',serif]"
              >
                Steinoptik-Dekore
              </h2>

              <div
                className="space-y-8 text-lg text-slate-600
                leading-9
                [font-family:'Poppins',sans-serif]"
              >
                <p>
                 Daneben gibt es mit einem Aufpreis auch Dekore in Stein-Optik.

Neben den hier gezeigten gibt es viele weitere Dekore, die aber nicht als fertige Platten zu erhalten sind, sondern extra mit Schichtstoff angefertigt werden müssen.
                </p>

              </div>

              {/* ================= UNI DECORS GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
                {steinoptikDecors.map((decor, index) => (
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
          {/* ================= SPECIAL FINISHES SECTION ================= */}
          <div className="mt-32">
            <div className="max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-semibold
                text-slate-800 mb-10
                [font-family:'Playfair_Display',serif]"
              >
                Hochglanz-Acryl, Echtholzfurnier,
                Spritzlackierung …
              </h2>

              <div
                className="space-y-8 text-lg text-slate-600
                leading-9
                [font-family:'Poppins',sans-serif]"
              >
                <p>
                  Wenn Sie ein spezielles Dekor suchen, fragen Sie
                  uns einfach und wir schicken Ihnen eine Auswahl.
                </p>

                <p>
                  Wenn es mal etwas ganz Besonderes sein soll: Es
                  sind auch Ausführungen in Echtholzfurnier möglich
                  oder Lösungen in Acryl-Hochglanz – eine Optik wie
                  Klavierlack.
                </p>

                <p>
                  Ebenso können wir das fertige Möbelstück auch in
                  jedem Farbton spritzlackieren.
                </p>
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
          p-3 md:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex flex-col items-center
            w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ================= CLOSE BUTTON ================= */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-2 right-2 md:top-6 md:right-4 z-20
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-black/70 backdrop-blur-md
                flex items-center justify-center
                text-white
                transition-all duration-300
                hover:bg-black md:hover:scale-110
              "
            >
              <span className="text-4xl md:text-5xl leading-none -mt-1">
                ×
              </span>
            </button>

            {/* ================= IMAGE CONTAINER ================= */}
            <div
              className="
                bg-white
                rounded-2xl md:rounded-sm
                overflow-hidden
                shadow-[0_35px_120px_rgba(0,0,0,0.45)]
                max-w-full
              "
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="
                  h-[70vh] md:h-[92vh]
                  w-auto
                  max-w-full
                  object-contain
                  block
                "
              />
            </div>

            {/* ================= TITLE ================= */}
            <p
              className="
                text-white
                text-sm md:text-lg
                mt-4 md:mt-6
                text-center
                tracking-wide
                px-4
                [font-family:'Poppins',sans-serif]
              "
            >
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
