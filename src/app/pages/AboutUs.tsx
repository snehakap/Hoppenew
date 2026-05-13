import { useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import ProductData from "./Reptiles.json";

export function AboutUs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = ProductData.filter((product) => {
  const search = searchTerm.toLowerCase();

  return (
    product.title?.toLowerCase().includes(search) ||
    product.name_en?.toLowerCase().includes(search) ||
    product.name_de?.toLowerCase().includes(search) ||
    product.umbrella_term?.toLowerCase().includes(search) ||
    product.species_name_latin?.toLowerCase().includes(search) 
    
  );
});

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADING ================= */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center">

            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Unsere Reptilien
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600
              [font-family:'Poppins',sans-serif]"
            >
              Entdecken Sie faszinierende Reptilien und exotische Tiere.
            </p>

          </div>

          {/* ================= SEARCH BAR ================= */}
          <div className="flex justify-end mt-10">

            <div className="relative w-full md:w-[420px]">

              <Search
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-slate-400 w-5 h-5"
              />

              <input
                type="text"
                placeholder="Suche nach Reptil..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4
                rounded-2xl border border-slate-200
                bg-white text-slate-700
                shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                focus:outline-none
                focus:ring-2 focus:ring-[#00A86B]
                focus:border-transparent
                transition-all duration-300"
              />

            </div>
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {filteredProducts.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                Keine Tiere gefunden
              </h2>

              <p className="text-slate-500">
                Versuchen Sie einen anderen Suchbegriff.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {filteredProducts.map((product, index) => (

                <Link
  key={product.id}
  to={`/reptiles/${product.id}`}
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

                    {/* ================= IMAGE ================= */}
                    <div className="overflow-hidden">

                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-[420px] md:h-[500px]
                        object-cover transition duration-700 ease-out
                        group-hover:scale-105"
                      />

                    </div>

                    {/* ================= TEXT BELOW IMAGE ================= */}
                    <div className="p-8">

                      {/* Title */}
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

                      

                    </div>

                  </div>

                </Link>
              ))}

            </div>

          )}

        </div>
      </section>

    </div>
  );
}
