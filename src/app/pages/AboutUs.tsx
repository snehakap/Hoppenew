import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";
import Fuse from "fuse.js";
import ProductData from "./Reptiles.json";

export function AboutUs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const reptileFilters = [
    "Agamen (Agamidae)",
    "Chamäleons (Chamaeleonidae)",
    "Eidechsen (Lacertidae)",
    "Geckos (Gekkonidae)",
    "Leguane (Iguanidae)",
    "Lurche (Amphibia)",
    "Rüsselspringer (Macroscelidea)",
    "Schildkröten (Chelonia)",
    "Nattern (Colubridae)",
    "Pythons (Pythonoidea)",
    "Riesenschlangen (Boidae)",
    "Grubenottern (Crotalinae)",
    "Shinisauridae",
    "Skinke (Scincidae)",
    "Stabschrecken (Phasmatidae)",
    "Warane (Varanidae)",
  ];

  const fuse = new Fuse(ProductData, {
    keys: [
      "title",
      "name_en",
      "name_de",
      "umbrella_term",
      "species_name_latin",
    ],
    threshold: 0.4,
  });

  const searchedProducts =
    searchTerm.trim() === ""
      ? ProductData
      : fuse.search(searchTerm).map((result) => result.item);

  const filteredProducts = searchedProducts.filter((product) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.includes(product.ReptilienTyp);
  });

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };


  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADING ================= */}
      <section className="pt-12 md:pt-24 pb-24 bg-white overflow-visible">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center">

            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Terrarienbewohner
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600
              [font-family:'Poppins',sans-serif]"
            >
              Entdecken Sie faszinierende Reptilien und exotische Tiere.
            </p>

          </div>

          {/* ================= SEARCH + FILTER ================= */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

            {/* SEARCH BAR */}
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

            {/* MULTISELECT FILTER */}
<div
  ref={filterRef}
  className="relative w-full md:w-[340px] z-20"
>

  <button
    type="button"
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className="w-full flex items-center justify-between
    px-5 py-4 rounded-2xl border border-slate-200
    bg-white text-slate-700
    shadow-[0_8px_25px_rgba(0,0,0,0.05)]
    focus:outline-none"
  >
    <span className="truncate text-left">

      {selectedFilters.length === 0
  ? "Reptilien"
  : selectedFilters.length <= 2
    ? selectedFilters.join(", ")
    : `${selectedFilters.slice(0, 2).join(", ")} +${selectedFilters.length - 2}`}

    </span>

    <ChevronDown
      className={`w-5 h-5 transition-transform duration-300 ${
        isFilterOpen ? "rotate-180" : ""
      }`}
    />

  </button>

  {isFilterOpen && (
    <div
  className="absolute top-full mt-2 left-0 w-full
  z-20
  bg-white border border-slate-200 rounded-2xl
  shadow-xl max-h-80 overflow-y-auto"
>

      {reptileFilters.map((filter) => (

        <label
          key={filter}
          className="flex items-center gap-3 px-4 py-3
          cursor-pointer hover:bg-slate-50"
        >

          <input
            type="checkbox"
            checked={selectedFilters.includes(filter)}
            onChange={() => toggleFilter(filter)}
            className="w-4 h-4 accent-[#00A86B]"
          />

          <span className="text-sm text-slate-700">
            {filter}
          </span>

        </label>

      ))}

    </div>

  )}

</div> {/* MULTISELECT FILTER */}

</div> {/* SEARCH + FILTER */}

</div> {/* max-w-7xl */}

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
                Versuchen Sie einen anderen Suchbegriff oder Filter.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {filteredProducts.map((product) => (

                <Link
                  key={product.id}
                  to={`/reptiles/${product.id}`}
                  className="group block h-full"
                >

                  <div
                    className="h-full flex flex-col
                    overflow-hidden rounded-[30px]
                    bg-white border border-slate-200
                    shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    transition-all duration-500
                    hover:-translate-y-2"
                  >

                    {/* ================= IMAGE ================= */}
                    <div className="overflow-hidden h-[420px] md:h-[500px]">

                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-full
                        object-cover transition duration-700 ease-out
                        group-hover:scale-105"
                      />

                    </div>

                    {/* ================= TEXT BELOW IMAGE ================= */}
                    <div className="p-8 flex-1 flex items-start">

                      {/* Title */}
                      <h2
                        className="text-2xl md:text-3xl
                        font-semibold text-slate-900
                        leading-snug
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
