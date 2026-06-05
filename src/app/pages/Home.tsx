import { Link } from "react-router";
import ProductData from "./ProductsData.json";

export function Home() {
  // Show only first 4 products on homepage
  const featuredProducts = ProductData.slice(0, 4);

  return (
    <div className="relative">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[400px] overflow-hidden">

        <img
          src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg"
          alt="Hero"
          className="w-full h-full object-cover object-[center_10%]"
        />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="py-15 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-20">

            <h2
              className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Willkommen bei Hoppe Terrarienbau
            </h2>

            <p
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto
              [font-family:'Poppins',sans-serif]"
            >
              Jedes Terrarium vereint präzise Handwerkskunst mit natürlicher
              Schönheit.
            </p>

          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Premium Handwerkskunst",
                description:
                  "Exklusives Möbeldesign für ihr Terraium.",
                
              },
              {
                title: "Individuelles Design",
                description:
                  "Jedes Terrarium wird individuell an Ihre Wünsche, Ihren Raum und die Bedürfnisse Ihrer Tiere angepasst.",
                
              },
              {
                title: "Lieferung und Montage",
                description:
                  "Wir Liefern ihr Terrarium zu Ihnen und leisten die Endmontage Vorort.",
                
              },
            ].map((feature, index) => (

              <div
                key={index}
                className="group relative p-10 rounded-3xl text-center
                bg-gradient-to-br from-slate-100 via-white to-slate-200
                border border-slate-200
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                hover:-translate-y-2
                transition-all duration-500"
              >

                {/* Shine */}
                <div
                  className="absolute inset-0 rounded-3xl
                  bg-gradient-to-tr from-white/40 via-transparent to-transparent
                  opacity-30 pointer-events-none"
                />

              

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-slate-800 mb-3
                  [font-family:'Poppins',sans-serif]"
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-slate-600 leading-relaxed
                  [font-family:'Poppins',sans-serif]"
                >
                  {feature.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CALCULATOR BUTTON ================= */}
      <section className="py-5 bg-[#fafafa]">
        <div className="text-center">

          <Link
            to="/Calculator"
            className="group inline-flex items-center gap-3 px-10 py-5
            rounded-2xl font-semibold text-lg tracking-wide
            bg-[#00A86B]
            text-white
            border border-white/20
            shadow-[0_10px_30px_rgba(0,168,107,0.35)]
            transition-all duration-500
            hover:scale-105
            hover:bg-[#00c97f]
            hover:shadow-[0_15px_45px_rgba(0,255,170,0.45)]
            hover:border-white/40"
          >

            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Terrarium Rechner öffnen
            </span>

          </Link>

        </div>
      </section>

      {/* ================= OUR WORK SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">

            <h2
              className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Unsere Arbeiten
            </h2>

            <p
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto
              [font-family:'Poppins',sans-serif]"
            >
              Entdecken Sie einige unserer individuell gefertigten Premium-Terrarien.
            </p>

          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {featuredProducts.map((product) => (

              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group block"
              >

                <div
                  className="overflow-hidden rounded-[30px]
                  bg-white border border-slate-200
                  shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                  transition-all duration-500
                  hover:-translate-y-2"
                >

                  {/* Image */}
                  <div className="overflow-hidden">

                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-[420px] md:h-[500px]
                      object-cover transition duration-700 ease-out
                      group-hover:scale-105"
                    />

                  </div>

                  {/* Text */}
                  <div className="p-8">

                    <h2
                      className="text-2xl md:text-3xl
                      font-semibold text-slate-900
                      leading-snug mb-4
                      transition-colors duration-300
                      group-hover:text-[#00A86B]
                      [font-family:'Playfair_Display',serif]"
                    >
                      {product.title}
                    </h2>

                    <div className="space-y-2">

                      {product.technicalDetails?.terrarium && (
                        <p className="text-slate-600">
                          <span className="font-medium text-slate-800">
                            Terrarium:
                          </span>{" "}
                          {product.technicalDetails.terrarium}
                        </p>
                      )}

                      {product.technicalDetails?.reptilien && (
                        <p className="text-slate-600">
                          <span className="font-medium text-slate-800">
                            Reptilien:
                          </span>{" "}
                          {product.technicalDetails.reptilien}
                        </p>
                      )}

                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>

          {/* Button */}
          <div className="text-center mt-14">

            <Link
              to="/products"
              className="group inline-flex items-center gap-3 px-10 py-5
              rounded-2xl font-semibold text-lg tracking-wide
              bg-[#00A86B]
              text-white
              border border-white/20
              shadow-[0_10px_30px_rgba(0,168,107,0.35)]
              transition-all duration-500
              hover:scale-105
              hover:bg-[#00c97f]
              hover:shadow-[0_15px_45px_rgba(0,255,170,0.45)]
              hover:border-white/40"
            >
              Mehr ansehen
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}
