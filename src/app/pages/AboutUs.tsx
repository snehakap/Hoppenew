export function AboutUs() {
  const reptiles = [
    {
      name: "Snakes",
      description:
        "Custom-built enclosures designed to maintain precise temperature gradients and secure environments for all snake species.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777760202/snake_qdwmwa.jpg",
    },
    {
      name: "Lizards",
      description:
        "Spacious and well-ventilated habitats tailored for active lizards, ensuring optimal lighting and climbing structures.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777760201/lizard_qfqeho.jpg",
    },
    {
      name: "Geckos & Small Reptiles",
      description:
        "Compact yet highly functional terrariums designed for smaller species requiring controlled humidity and shelter.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777760201/lizard1_bc8gsr.jpg",
    },
    {
      name: "Arachnids",
      description:
        "Secure, minimalistic enclosures designed for spiders and similar species with a focus on safety and visibility.",
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777760201/spider_hpino8.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Heading */}
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight
          text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-slate-500
          [font-family:'Playfair_Display',serif]">
            Reptiles We Build For
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600
          [font-family:'Poppins',sans-serif]">
            Carefully designed terrariums tailored to the unique needs of each species.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reptiles.map((item, index) => (
              <div key={index} className="group">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[420px] md:h-[520px] object-cover
                    transition duration-700 ease-out
                    group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 
                  group-hover:opacity-100 transition duration-500" />
                </div>

                {/* Text */}
                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2
                  [font-family:'Poppins',sans-serif]">
                    {item.name}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}