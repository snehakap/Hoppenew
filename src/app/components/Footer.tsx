import { Link } from "react-router";

export function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Ihr Terrarium", href: "/products" },
    { name: "Unsere Terrarien", href: "/service" },
    { name: "Reptilien", href: "/about" },
    { name: "Soziale Medien", href: "/videos" },
    { name: "Contact", href: "/contact" },
    { name: "Legal", href: "/legal" },
  ];

  return (
    <footer className="hidden md:block bg-[#00A86B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Left: Brand + Contact */}
          <div>
            <h2 className="text-2xl font-light tracking-wide text-white mb-4
            [font-family:'Playfair_Display',serif]">
              Hoppe Terrarienbau
            </h2>

            <ul className="space-y-2 text-sm text-white/90">
              <li>E-mail: info@hoppe-terrarienbau.de</li>
              <li>Telefon: 00 49 178 8585416</li>
              <li>Gewerbering 11,
                 47661 Issum</li>
            </ul>
          </div>

          {/* Right: Navigation */}
          <div className="md:text-right">
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Hoppe Terrarienbau. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/legal" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
