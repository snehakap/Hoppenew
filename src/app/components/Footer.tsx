export function Footer() {
  return (
    <footer className="hidden md:block bg-[#00A86B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex justify-end">
        <div className="text-right">
          <h2
            className="text-2xl font-light tracking-wide text-white mb-4
            [font-family:'Playfair_Display',serif]"
          >
            Hoppe Terrarienbau GmbH & Co. KG
          </h2>

          <ul className="space-y-2 text-sm text-white/90">
            <li>E-mail: info@hoppe-terrarienbau.de</li>
            <li>Telefon: +49 178 8585416</li>
            <li>
              Gewerbering 11
              <br />
              47661 Issum
              <br />
              Deutschland
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
