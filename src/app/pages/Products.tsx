import { useState } from "react";
import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";
import Fuse from "fuse.js";
import ProductData from "./ProductsData.json";

export function Products() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // ================= FILTER OPTIONS =================
  const terrariumFilters = [
    "Wüsten- / Steppenterrarien",
    "Halbfeucht- / Waldterrarien für Schlangen",
    "Felswand- / Trockenmauer-Terrarien",
    "Regenwaldterrarien",
    "Paludarien",
    "Aqua-Terrarien",
    "Orchideen-Vitrine",
    "Delta-Terrarien",
    "Panorama-Terrarien",
    "Raumteiler",
    "Mehrstöckige Terrarien",
    "Terrarien als Schrankwände",
    "Terrarien unter Schrägen",
    "Smartline",
    "Terrarien für Zoos und öffentliche Einrichtungen",
    "Terrarien für Landschildkröten",
    "Landschaften für den Selbsteinbau",
    "Landschaften für Vogelkäfige",
  ];

  // ================= FUZZY SEARCH =================
  const fuse = new Fuse(ProductData, {
    keys: [
      "title",
      "technicalDetails.terrarium",
      "technicalDetails.reptilien",
    ],
    threshold: 0.4,
  });

  // Search Results
  const searchedProducts =
    searchTerm.trim() === ""
      ? ProductData
      : fuse.search(searchTerm).map((result) => result.item);

  // ================= FILTER PRODUCTS =================
  const filteredProducts = searchedProducts.filter((product) => {

    // if no dropdown selected
    if (!selectedFilter) return true;

    // check Terrarientypen inside JSON
    return (
      product?.Terrarientypen === selectedFilter ||
      product?.technicalDetails?.Terrarientypen === selectedFilter
    );
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADING ================= */}
      <section className="pt-12 md:pt-24 pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center">

            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Unsere Terrarien
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600
              [font-family:'Poppins',sans-serif]"
            >
              Entdecken Sie unsere individuell gefertigten Premium-Terrarien.
            </p>

          </div>

          {/* ================= SEARCH + FILTER ================= */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

            {/* SEARCH */}
            <div className="relative w-full md:w-[420px]">

              <Search
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-slate-400 w-5 h-5"
              />

              <input
                type="text"
                placeholder="Suche nach Terrarium oder Reptil..."
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

            {/* FILTER DROPDOWN */}
            <div className="relative w-full md:w-[320px]">

              <ChevronDown
                className="absolute right-4 top-1/2
                -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none"
              />

              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full appearance-none px-5 py-4
                rounded-2xl border border-slate-200
                bg-white text-slate-700
                shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                focus:outline-none
                focus:ring-2 focus:ring-[#00A86B]
                focus:border-transparent
                transition-all duration-300"
              >
                <option value="">Terrarientypen</option>

                {terrariumFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}

              </select>

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
                Keine Produkte gefunden
              </h2>

              <p className="text-slate-500">
                Versuchen Sie einen anderen Suchbegriff oder Filter.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {filteredProducts.map((product) => (

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

                    {/* IMAGE */}
                    <div className="overflow-hidden">

                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-[420px] md:h-[500px]
                        object-cover transition duration-700 ease-out
                        group-hover:scale-105"
                      />

                    </div>

                    {/* TEXT */}
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

          )}

        </div>
      </section>

    </div>
  );
}
