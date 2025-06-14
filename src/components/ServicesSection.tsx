
import React from "react";
import { Globe, Search, Zap, Cog, Shield, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  currentLang: "de" | "en";
}

const ServicesSection = ({ currentLang }: ServicesSectionProps) => {
  const content = {
    de: {
      h1: "Webdesign- & Digitalmarketing-Leistungen für Unternehmen",
      subtitle: "Alles aus einer Hand für Ihren digitalen Erfolg",
      praesenz: "Web-Präsenz",
      skalierung: "Business-Skalierung",
      servicesPraesenz: [
        {
          icon: Globe,
          title: "Moderne Webseiten",
          description: "Responsive Webseiten mit modernem Design, optimiert für alle Geräte und Suchmaschinen.",
        },
        {
          icon: Search,
          title: "SEO-Optimierung",
          description: "Verbesserte Sichtbarkeit in Google und anderen Suchmaschinen für mehr organischen Traffic.",
        },
        {
          icon: Zap,
          title: "Performance-Optimierung",
          description: "Blitzschnelle Ladezeiten und optimale mobile Darstellung für beste Nutzererfahrung.",
        },
      ],
      servicesSkalierung: [
        {
          icon: Cog,
          title: "Digitale Automatisierung",
          description: "Automatisierung von Geschäftsprozessen zur Effizienzsteigerung und Kostensenkung.",
        },
        {
          icon: Shield,
          title: "Wartung & Support",
          description: "Zuverlässige Betreuung, regelmäßige Updates und technischer Support rund um die Uhr.",
        },
        {
          icon: Palette,
          title: "Branding & Beratung",
          description: "Individuelle Markenentwicklung und strategische Beratung für Ihren digitalen Auftritt.",
        },
      ],
      cta1: "Kostenlose Beratung",
      cta2: "Portfolio ansehen",
      cta1en: "Free Consultation",
      cta2en: "View Portfolio",
    },
    en: {
      h1: "Web Design & Digital Marketing Services for Companies",
      subtitle: "Everything from one source for your digital success",
      praesenz: "Web Presence",
      skalierung: "Business Scaling",
      servicesPraesenz: [
        {
          icon: Globe,
          title: "Modern Websites",
          description: "Responsive websites with modern design, optimized for all devices and search engines.",
        },
        {
          icon: Search,
          title: "SEO Optimization",
          description: "Improved visibility on Google and other search engines for more organic traffic.",
        },
        {
          icon: Zap,
          title: "Performance Optimization",
          description: "Lightning-fast loading times and optimal mobile display for the best user experience.",
        },
      ],
      servicesSkalierung: [
        {
          icon: Cog,
          title: "Digital Automation",
          description: "Automation of business processes to increase efficiency and reduce costs.",
        },
        {
          icon: Shield,
          title: "Maintenance & Support",
          description: "Reliable care, regular updates and technical support around the clock.",
        },
        {
          icon: Palette,
          title: "Branding & Consulting",
          description: "Individual brand development and strategic consulting for your digital presence.",
        },
      ],
      cta1: "Free Consultation",
      cta2: "View Portfolio",
    },
  };

  const t = content[currentLang];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.h1}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Web Präsenz */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-6">
              {t.praesenz}
            </h3>
            <div className="space-y-8">
              {t.servicesPraesenz.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-7 w-7 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Business Skalierung */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-6">
              {t.skalierung}
            </h3>
            <div className="space-y-8">
              {t.servicesSkalierung.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-7 w-7 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium flex items-center text-lg"
                variant="default"
                size="lg"
              >
                {currentLang === "de" ? t.cta1 : t.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium flex items-center text-lg"
                variant="default"
                size="lg"
              >
                {currentLang === "de" ? t.cta2 : t.cta2}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
