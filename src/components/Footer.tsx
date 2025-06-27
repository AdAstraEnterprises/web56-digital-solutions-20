import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, Flag, Smile } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  currentLang: "de" | "en";
}

const Footer = ({ currentLang }: FooterProps) => {
  const content = {
    de: {
      services: "Leistungen",
      company: "Unternehmen",
      legal: "Rechtliches",
      contact: "Kontakt",
      servicesList: [
        "Webdesign",
        "SEO-Optimierung",
        "Performance",
        "Automatisierung",
        "Wartung & Support",
      ],
      companyList: ["Über uns", "Team", "Karriere", "Blog", "Portfolio"],
      legalList: ["Impressum", "Datenschutz", "AGB", "Cookie-Richtlinie"],
      copyright: "© 2024 Ad Astra. Alle Rechte vorbehalten.",
      madeWith: "Entwickelt mit ❤️ in Koblenz",
      seals: [
        {
          icon: ShieldCheck,
          label: "DSGVO-konform",
        },
        {
          icon: Flag,
          label: "Made in Germany",
        },
        {
          icon: Smile,
          label: "100 % Zufriedenheitsgarantie",
        },
      ],
    },
    en: {
      services: "Services",
      company: "Company",
      legal: "Legal",
      contact: "Contact",
      servicesList: [
        "Web Design",
        "SEO Optimization",
        "Performance",
        "Automation",
        "Maintenance & Support",
      ],
      companyList: ["About Us", "Team", "Careers", "Blog", "Portfolio"],
      legalList: ["Imprint", "Privacy Policy", "Terms of Service", "Cookie Policy"],
      copyright: "© 2024 Ad Astra. All rights reserved.",
      madeWith: "Made with ❤️ in Koblenz",
      seals: [
        {
          icon: ShieldCheck,
          label: "GDPR compliant",
        },
        {
          icon: Flag,
          label: "Made in Germany",
        },
        {
          icon: Smile,
          label: "100% Satisfaction Guarantee",
        },
      ],
    },
  };

  const t = content[currentLang];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {currentLang === "de"
                ? "Ad Astra entwickelt moderne, effiziente Webseiten und digitale Lösungen. Von Absolventen der Universität Koblenz für Unternehmen, die vorankommen wollen."
                : "Ad Astra develops modern, efficient websites and digital solutions. By graduates of the University of Koblenz for companies that want to move forward."}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@adastra.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+49 261 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Koblenz, Deutschland</span>
              </div>
            </div>
            {/* TRUST/Siegel Elemente */}
            <div className="flex flex-wrap gap-3 mt-8">
              {t.seals.map((seal, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                  <seal.icon className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100 text-sm font-medium">{seal.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.services}</h3>
            <ul className="space-y-3">
              {t.servicesList.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.company}</h3>
            <ul className="space-y-3">
              {t.companyList.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.legal}</h3>
            <ul className="space-y-3">
              {t.legalList.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t.copyright}</p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">{t.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
