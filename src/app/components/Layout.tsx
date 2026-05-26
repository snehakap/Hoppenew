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
    { name: "Terrarium Kalkulator", href: "/Calculator" },
    { name: "Unsere Terrarien", href: "/products" },
    { name: "Terrarienbewohner", href: "/about" },
    { name: "Soziale Medien", href: "/videos" },
    { name: "Kontakt", href: "/contact" },
    { name: "Rechtliches", href: "/legal" },
  ];

  const isActive = (href: string) => {
  if (href === "/") {
    return location.pathname === "/";
  }

  // Keep Reptilien active on reptile detail pages
  if (href === "/about") {
    return (
      location.pathname.startsWith("/about") ||
      location.pathname.startsWith("/reptiles")
    );
  }

  return location.pathname.startsWith(href);
};

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#020617] via-[#020617] to-[#0b1220] text-slate-200">
       <ScrollToTop />

      {/* ================= HEADER ================= */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#00A86B] shadow-md">
  
  <div className="w-full px-4 py-3 md:py-2">

    {/* TOP BAR */}
    <div className="relative flex items-center justify-between">

    {/* LEFT LOGO */}
<Link to="/" className="hidden md:flex items-center ml-4">
  <img
    src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779093748/Gecko-Hoppe-080425-RZ06-Chrome_3D_ohne-txt-800px_agc69g.png"
    alt="Hoppe Logo"
    className="w-[190px] h-auto object-contain"
  />
</Link>

{/* CENTER LOGO */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <img
    src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1779471607/HOPPE-Terrarienbau-transparent-3D_kls9am_d5ek6h.png"
    alt="Center Logo"
    className="w-[230px] md:w-[440px] h-auto object-contain"
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
      <main className="pt-16 lg:pt-36 flex-grow">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
