
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Zap } from "lucide-react";
import CustomerSlider from '@/components/CustomerSlider';
import CustomerStatement from '@/components/CustomerStatement';

interface HeroSectionProps {
  currentLang: 'de' | 'en';
}

const HeroSection = ({ currentLang }: HeroSectionProps) => {
  const content = {
    de: {
      headline:
        "Mehr Kunden durch moderne Webseiten. Sichtbar. Schnell. Persönlich.",
      subheadline: "Moderne Webseiten und digitale Lösungen für Unternehmen, die vorankommen wollen.",
      description:
        "Web56 entwickelt professionelle Online-Präsenzen mit modernster Technologie. Schnell, effizient und persönlich – von Absolventen der Universität Koblenz.",
      cta: "Kostenlose Beratung",
      ctaSecondary: "Mehr erfahren",
      features: [
        { icon: Zap, text: 'Besonders schnell' },
        // Weitere Features können ergänzt werden, sobald weitere Icons verfügbar sind
      ],
      kundenStellungnahme: "„Dank Web56 haben wir in wenigen Wochen 50 % mehr Kundenanfragen über unsere Webseite erhalten.“"
    },
    en: {
      headline:
        "More customers with modern websites. Visible. Fast. Personal.",
      subheadline: "Modern websites and digital solutions for companies that want to move forward.",
      description:
        "Web56 develops professional online presences with cutting-edge technology. Fast, efficient and personal – by graduates of the University of Koblenz.",
      cta: "Free Consultation",
      ctaSecondary: "Learn More",
      features: [
        { icon: Zap, text: 'Exceptionally fast' },
        // More features can be added as more icons become available
      ],
      kundenStellungnahme: "“Thanks to Web56 we received 50% more customer inquiries via our website in a few weeks.”"
    }
  };

  const t = content[currentLang];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.subheadline}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-800 hover:bg-blue-900 text-lg px-8 py-4 rounded-md text-white flex items-center"
                variant="default"
              >
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-blue-800 hover:bg-blue-900 text-lg px-8 py-4 rounded-md text-white flex items-center"
              >
                {t.ctaSecondary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="w-full pt-4">
              <CustomerSlider />
              <CustomerStatement />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-5 w-5 text-blue-800" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-800">350+</div>
              <div className="text-gray-600">
                {currentLang === "de" ? "Zufriedene Kunden" : "Happy Clients"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
