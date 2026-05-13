import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Ihr Terrarium", href: "/service" },
    { name: "Unsere Terrarien", href: "/products" },
    { name: "Terrarium Calculator", href: "/Calculator" },
    { name: "Reptilien", href: "/about" },
    { name: "Soziale Medien", href: "/videos" },
    { name: "Kontakt", href: "/contact" },
    { name: "Legal", href: "/legal" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#020617] via-[#020617] to-[#0b1220] text-slate-200">
       <ScrollToTop />

      {/* ================= HEADER ================= */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#00A86B] backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
  
  <div className="w-full px-0 py-3">

    {/* TOP BAR */}
    <div className="relative flex items-center justify-between">

      {/* LEFT LOGO */}
<Link to="/" className="flex items-center ml-0 pl-0">
  <img
    src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1778525994/image0_dsd2jh.png"
    alt="Hoppe Logo"
    className="w-[200px] h-auto object-contain"
  />
</Link>

      {/* CENTER LOGO */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1778662746/HOPPE-Terrarienbau-transparent-3D_kls9am.png"
          alt="Center Logo"
          className="w-[370px] h-auto object-contain"
        />
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-white/10 transition"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex justify-center items-center gap-8 mt-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`text-lg md:text-xl tracking-wide transition-all duration-300 pb-1 ${
            isActive(item.href)
              ? "text-white border-b border-white"
              : "text-white/80 hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  {/* Mobile Navigation */}
  {mobileMenuOpen && (
    <div className="lg:hidden bg-[#008f5a] border-t border-white/10">
      <div className="px-6 py-4 space-y-2 text-center">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-base transition ${
              isActive(item.href)
                ? "text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )}
</nav>
      {/* ================= PAGE CONTENT ================= */}
      <main className="pt-36 flex-grow">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
