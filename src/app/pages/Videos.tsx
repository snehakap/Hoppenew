import {
  Instagram,
  Youtube,
  Facebook,
  Play,
  ExternalLink,
} from "lucide-react";

export function Videos() {
  const socialPosts = [
    {
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777754262/hero2_syfkgq.jpg",
      title: "Custom Rainforest Build",
      subtitle: "Latest Instagram Post",
      link: "https://www.instagram.com/hoppe_terrarienbau/",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777754262/hero3_rpydqf.jpg",
      title: "Full Terrarium Showcase",
      subtitle: "Watch on YouTube",
      link: "https://www.youtube.com/channel/UCwuUnRbtF3nZnZz47vyrR2A",
      video: true,
    },
    {
      platform: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg",
      title: "Customer Installation",
      subtitle: "Community Update",
      link: "https://www.facebook.com/Hoppe.Terrarienbau.Exclusiv/",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      image:
        "https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777671427/hero_dpygut.jpg",
      title: "Luxury Jungle Setup",
      subtitle: "Behind The Scenes",
      link: "https://www.instagram.com/hoppe_terrarienbau/",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-slate-500
            [font-family:'Playfair_Display',serif]"
          >
            Soziale Medien
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-slate-600
            leading-relaxed
            [font-family:'Poppins',sans-serif]"
          >
            Entdecken Sie unsere neuesten Terrarien, exklusive Projekte,
            Aufbauvideos und tägliche Einblicke direkt aus unseren
            Social-Media-Kanälen.
          </p>

        </div>
      </section>

      {/* ================= SOCIAL MEDIA CARDS ================= */}
      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hoppe_terrarienbau/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[32px]
              h-[300px]
              bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
              p-[1px]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="h-full rounded-[32px]
                bg-white p-8 flex flex-col justify-between"
              >

                <div
                  className="w-16 h-16 rounded-2xl
                  bg-gradient-to-br from-pink-500 to-orange-400
                  flex items-center justify-center text-white"
                >
                  <Instagram className="w-8 h-8" />
                </div>

                <div>
                  <h2
                    className="text-3xl font-semibold text-slate-900 mb-3
                    [font-family:'Playfair_Display',serif]"
                  >
                    Instagram
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Daily builds, premium reptile habitats and behind-the-scenes content.
                  </p>

                  <div
                    className="inline-flex items-center gap-2
                    text-[#00A86B] font-medium"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCwuUnRbtF3nZnZz47vyrR2A"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[32px]
              h-[300px]
              bg-gradient-to-br from-red-500 to-red-700
              p-[1px]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="h-full rounded-[32px]
                bg-white p-8 flex flex-col justify-between"
              >

                <div
                  className="w-16 h-16 rounded-2xl
                  bg-red-600
                  flex items-center justify-center text-white"
                >
                  <Youtube className="w-8 h-8" />
                </div>

                <div>
                  <h2
                    className="text-3xl font-semibold text-slate-900 mb-3
                    [font-family:'Playfair_Display',serif]"
                  >
                    YouTube
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Watch cinematic terrarium showcases, tutorials and custom setups.
                  </p>

                  <div
                    className="inline-flex items-center gap-2
                    text-[#00A86B] font-medium"
                  >
                    Watch Videos
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Hoppe.Terrarienbau.Exclusiv/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[32px]
              h-[300px]
              bg-gradient-to-br from-blue-500 to-blue-700
              p-[1px]
              transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="h-full rounded-[32px]
                bg-white p-8 flex flex-col justify-between"
              >

                <div
                  className="w-16 h-16 rounded-2xl
                  bg-blue-600
                  flex items-center justify-center text-white"
                >
                  <Facebook className="w-8 h-8" />
                </div>

                <div>
                  <h2
                    className="text-3xl font-semibold text-slate-900 mb-3
                    [font-family:'Playfair_Display',serif]"
                  >
                    Facebook
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Customer showcases, updates and premium terrarium inspiration.
                  </p>

                  <div
                    className="inline-flex items-center gap-2
                    text-[#00A86B] font-medium"
                  >
                    Open Facebook
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </a>

          </div>

        </div>

      </section>

      {/* ================= SOCIAL FEED ================= */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center justify-between mb-10">

            <h2
              className="text-3xl md:text-4xl font-semibold
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-slate-500
              [font-family:'Playfair_Display',serif]"
            >
              Aktuellste Projekte
            </h2>

          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">

            {socialPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-[30px]
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_70px_rgba(0,0,0,0.18)]
                transition-all duration-500 hover:-translate-y-2
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >

                {/* IMAGE */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover
                  transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />

                {/* VIDEO PLAY */}
                {post.video && (
                  <div
                    className="absolute top-5 right-5
                    w-14 h-14 rounded-full
                    bg-white/90 backdrop-blur-md
                    flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-black fill-black" />
                  </div>
                )}

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6">

                  <div
                    className="inline-flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-white/20 backdrop-blur-md
                    text-white text-sm mb-4"
                  >
                    {post.icon}
                    {post.platform}
                  </div>

                  <h3
                    className="text-2xl font-semibold text-white mb-2
                    [font-family:'Playfair_Display',serif]"
                  >
                    {post.title}
                  </h3>

                  <p className="text-white/80">
                    {post.subtitle}
                  </p>

                </div>

              </a>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}
