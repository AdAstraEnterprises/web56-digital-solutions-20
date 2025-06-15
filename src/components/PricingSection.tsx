
import React from "react";
import { Check, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface PricingSectionProps {
  currentLang: "de" | "en";
}

const exampleProjects = {
  Starter: {
    de: "Z.B. Visitenkarten-Seite für kleine Praxis oder Freelancer.",
    en: "E.g. business card website for a small business or freelancer.",
  },
  Professional: {
    de: "Beispielprojekt: Moderne Unternehmensseite inkl. Blog und Kontakt.",
    en: "Example: Modern company site incl. blog and contact.",
  },
  "Business+": {
    de: "Komplexe Projekte: Online-Shop, KI-basierte Beratung, Spezialanwendungen.",
    en: "Complex projects: E-commerce, AI consulting, special solutions.",
  },
};

const featureExamples = {
  "Onepager Website": "Eine einfache Seite mit allen Infos für schnelle Übersicht.",
  "One-page website": "A single page with all company info for quick orientation.",
  "Mehrseitige Website": "Individuell gestaltete Unternehmenswebseite auf mehreren Seiten.",
  "Multi-page website": "Multi-page custom company website.",
  "E-Commerce Integration": "Anbindung eines Online-Shops, Zahlungsabwicklung, Produktverwaltung.",
  "E-commerce integration": "Integration of an online shop, payments and product management.",
};

const PricingSection = ({ currentLang }: PricingSectionProps) => {
  const content = {
    de: {
      title: "Transparente Preise",
      subtitle: "Faire Pakete für jeden Bedarf",
      monthly: "monatlich",
      popular: "Beliebt",
      getStarted: "Jetzt starten",
      contact: "Kontakt aufnehmen",
      packages: [
        {
          name: "Starter",
          price: "999",
          description: "Perfekt für kleine Unternehmen und Selbstständige",
          features: [
            "Onepager Website",
            "Mobiloptimiert",
            "SEO-Basics",
            "DSGVO-konform",
            "SSL-Zertifikat",
            "1 Monat Support",
          ],
          popular: false,
        },
        {
          name: "Professional",
          price: "1799",
          description: "Ideal für wachsende Unternehmen",
          features: [
            "Mehrseitige Website",
            "Erweiterte SEO",
            "Performance-Optimierung",
            "Kontaktformular",
            "Blog-System",
            "CMS-Schulung",
            "3 Monate Support",
          ],
          popular: true,
        },
        {
          name: "Business+",
          price: "7999",
          description: "Komplettlösung für anspruchsvolle Projekte",
          features: [
            "Alles aus Professional",
            "KI-gestützte Inhalte",
            "Automatisierung",
            "E-Commerce Integration",
            "Social Media Marketing",
            "Analytics Setup",
            "Individuelle Beratung",
            "6 Monate Wartung",
          ],
          popular: false,
        },
      ],
    },
    en: {
      title: "Transparent Pricing",
      subtitle: "Fair packages for every need",
      monthly: "monthly",
      popular: "Popular",
      getStarted: "Get Started",
      contact: "Contact Us",
      packages: [
        {
          name: "Starter",
          price: "999",
          description: "Perfect for small businesses and freelancers",
          features: [
            "One-page website",
            "Mobile optimized",
            "SEO basics",
            "GDPR compliant",
            "SSL certificate",
            "1 month support",
          ],
          popular: false,
        },
        {
          name: "Professional",
          price: "1799",
          description: "Ideal for growing businesses",
          features: [
            "Multi-page website",
            "Advanced SEO",
            "Performance optimization",
            "Contact forms",
            "Blog system",
            "CMS training",
            "3 months support",
          ],
          popular: true,
        },
        {
          name: "Business+",
          price: "7999",
          description: "Complete solution for demanding projects",
          features: [
            "Everything from Professional",
            "AI-powered content",
            "Automation",
            "E-commerce integration",
            "Social media marketing",
            "Analytics setup",
            "Individual consulting",
            "6 months maintenance",
          ],
          popular: false,
        },
      ],
    },
  };

  const t = content[currentLang];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                pkg.popular
                  ? "border-blue-800 shadow-xl scale-105"
                  : "border-gray-200 shadow-sm hover:shadow-lg"
              } transition-all`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {t.popular}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center gap-2 justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  {/* Tooltip für Beispielprojekte */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="ml-1 text-blue-700 hover:text-blue-900">
                        <Info className="w-5 h-5" aria-label="Mehr Infos" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="block mb-1 font-semibold">
                        {currentLang === "de" ? "Beispielprojekt" : "Example Project"}
                      </span>
                      <span className="text-sm">
                        {exampleProjects[pkg.name as keyof typeof exampleProjects]?.[currentLang] ?? ""}
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">€{pkg.price}</span>
                  <span className="text-gray-500 ml-2">{currentLang === "de" ? "ab" : "from"}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                    {/* Tooltip für manche Features */}
                    {(featureExamples[feature] || featureExamples[feature.replace("Integration", "integration")]) && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="ml-1 text-blue-600 hover:text-blue-800">
                            <Info className="w-4 h-4" aria-label="Feature Info" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <span className="text-sm">
                            {featureExamples[feature] ||
                              featureExamples[feature.replace("Integration", "integration")]}
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-md flex items-center justify-center gap-2 text-lg px-8 py-4"
                variant="default"
                size="lg"
              >
                {pkg.popular ? t.getStarted : t.contact}
                <Info className="ml-2 h-5 w-5 opacity-70" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            {currentLang === "de"
              ? "Alle Preise verstehen sich zzgl. MwSt. Individuelle Lösungen auf Anfrage."
              : "All prices exclude VAT. Individual solutions available on request."}
          </p>
          <p className="text-sm text-gray-500">
            {currentLang === "de"
              ? "Kostenlose Beratung und unverbindliches Angebot innerhalb von 24 Stunden."
              : "Free consultation and non-binding offer within 24 hours."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
