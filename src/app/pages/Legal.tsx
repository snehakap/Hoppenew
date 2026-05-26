import { useState } from "react";
import {
  ChevronDown,
  Scale,
  Shield,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { legalData } from "./legaldata";

export function Legal() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const legalSections = [
    {
      icon: Scale,
      title: "AGB",
      content: legalData.agb,
    },
    {
      icon: Shield,
      title: "Datenschutz-Verordnung",
      content: legalData.datenschutz,
    },
    {
      icon: FileText,
      title: "Impressum",
      content: legalData.impressum,
    },
    {
      icon: AlertTriangle,
      title: "Versand- und Zahlungsbedingungen",
      content: legalData.versand,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-16 md:pt-24 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-20">
            <h1
              className="
                text-4xl md:text-5xl
                font-semibold tracking-tight
                text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-slate-500
                [font-family:'Playfair_Display',serif]
              "
            >
              Rechtliches
            </h1>

            <p
              className="
                mt-6 text-lg md:text-xl text-slate-600
                max-w-3xl mx-auto leading-relaxed
                [font-family:'Poppins',sans-serif]
              "
            >
              Allgemeine Geschäftsbedingungen,
              Datenschutzinformationen und rechtliche Hinweise
              rund um Hoppe Terrarienbau.
            </p>
          </div>

          {/* ================= ACCORDION ================= */}
          <div className="space-y-6">
            {legalSections.map((section, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border border-slate-200
                  rounded-[32px]
                  overflow-hidden
                  shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                "
              >
                {/* ================= BUTTON ================= */}
                <button
                  onClick={() => toggleSection(index)}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-6
                    p-6 md:p-8
                    text-left
                    transition-all duration-300
                    hover:bg-slate-50
                  "
                >
                  <div className="flex items-center gap-5">
                    {/* ICON */}
                    <div
                      className="
                        w-14 h-14
                        rounded-2xl
                        bg-gradient-to-br
                        from-green-50 to-green-100
                        flex items-center justify-center
                        flex-shrink-0
                      "
                    >
                      <section.icon
                        className="
                          w-7 h-7
                          text-[#00A86B]
                        "
                      />
                    </div>

                    {/* TITLE */}
                    <div>
                      <h2
                        className="
                          text-xl md:text-2xl
                          text-slate-800
                          font-semibold
                          [font-family:'Playfair_Display',serif]
                        "
                      >
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* ARROW */}
                  <ChevronDown
                    className={`
                      w-6 h-6 text-slate-500
                      transition-transform duration-300
                      ${
                        openSection === index
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* ================= CONTENT ================= */}
                {openSection === index && (
                  <div className="px-6 md:px-8 pb-8">
                    <div
                      className="
                        bg-slate-50
                        rounded-[28px]
                        p-6 md:p-8
                        max-h-[700px]
                        overflow-y-auto
                      "
                    >
                      <div
                        className="
                          text-slate-600
                          leading-8
                          space-y-4
                          text-[15px] md:text-[16px]
                          [font-family:'Poppins',sans-serif]
                        "
                      >
                        {section.content
                          .split("\n")
                          .map((line, i) => {
                            // Section headings
                            if (
                              line.trim().startsWith("§")
                            ) {
                              return (
                                <h3
                                  key={i}
                                  className="
                                    font-semibold
                                    text-slate-800
                                    text-lg
                                    mt-8 mb-2
                                  "
                                >
                                  {line}
                                </h3>
                              );
                            }

                            // Empty lines
                            if (
                              line.trim() === ""
                            ) {
                              return (
                                <div
                                  key={i}
                                  className="h-2"
                                />
                              );
                            }

                            return (
                              <p key={i}>
                                {line}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
