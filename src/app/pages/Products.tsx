import { useState } from "react";
import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";
import Fuse from "fuse.js";
import ProductData from "./ProductsData.json";

export function Products() {

  const [searchTerm, setSearchTerm] = useState("");
const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      "technicalDetails.Terrarium Typ",
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
  if (selectedFilters.length === 0) return true;

  const terrariumType =
    product?.Terrarientypen ||
    product?.technicalDetails?.Terrarientypen;

  return selectedFilters.includes(terrariumType);
});

  // ================= SAFE RENDER HELPERS =================
  const renderValue = (value) => {

    if (!value) return "";

    // Array
    if (Array.isArray(value)) {
      return value.join(", ");
    }

    // Object
    if (typeof value === "object") {
      return Object.values(value)
        .flat()
        .join(", ");
    }

    // String / Number
    return value;
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADING ================= */}
      <section className="pt-12 md:pt-24 pb-48 bg-white">

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
  <button
    type="button"
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className="w-full px-5 py-4
    rounded-2xl border border-slate-200
    bg-white text-slate-700
    shadow-[0_8px_25px_rgba(0,0,0,0.05)]
    focus:outline-none
    focus:ring-2 focus:ring-[#00A86B]
    focus:border-transparent
    transition-all duration-300
    flex items-center justify-between"
  >
    <span>
      {selectedFilters.length > 0
        ? `${selectedFilters.length} ausgewählt`
        : "Terrarientypen"}
    </span>

    <ChevronDown
      className={`w-5 h-5 transition-transform duration-300 ${
        isFilterOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {isFilterOpen && (
    <div
      className="absolute top-full left-0 mt-2 w-full z-50
      rounded-2xl border border-slate-200 bg-white
      shadow-[0_12px_40px_rgba(0,0,0,0.12)]
      max-h-80 overflow-y-auto"
    >
      {terrariumFilters.map((filter) => (
        <label
          key={filter}
          className="flex items-center gap-3 px-4 py-3
          hover:bg-slate-50 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedFilters.includes(filter)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedFilters((prev) => [...prev, filter]);
              } else {
                setSelectedFilters((prev) =>
                  prev.filter((item) => item !== filter)
                );
              }
            }}
            className="h-4 w-4 accent-[#00A86B]"
          />

          <span className="text-sm text-slate-700">
            {filter}
          </span>
        </label>
      ))}

      {selectedFilters.length > 0 && (
        <button
          type="button"
          onClick={() => setSelectedFilters([])}
          className="w-full border-t border-slate-100 py-3
          text-sm font-medium text-[#00A86B]
          hover:bg-slate-50"
        >
          Alle Filter entfernen
        </button>
      )}
    </div>
  )}
</div>

        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {filteredProducts.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                Kein Terrarium gefunden
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
                        src={product.images?.[0] || "/placeholder.jpg"}
                        alt={product.title}
                        className="w-full h-[420px] md:h-[500px]
object-contain bg-slate-100
transition duration-700 ease-out
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

                        {product.technicalDetails?.["Terrarium Typ"] && (
                          <p className="text-slate-600">
                            <span className="font-medium text-slate-800">
                              Terrarium:
                            </span>{" "}
                            {renderValue(
                              product.technicalDetails["Terrarium Typ"]
                            )}
                          </p>
                        )}

                        {product.technicalDetails?.reptilien && (
                          <p className="text-slate-600">
                            <span className="font-medium text-slate-800">
                              Reptilien:
                            </span>{" "}
                            {renderValue(
                              product.technicalDetails.reptilien
                            )}
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
