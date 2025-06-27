
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
      headline: "Mehr Kunden durch moderne Webseiten. Sichtbar. Schnell. Persönlich.",
      subheadline: "Moderne Webseiten und digitale Lösungen für Unternehmen, die vorankommen wollen.",
      description: "Ad Astra entwickelt professionelle Online-Präsenzen mit modernster Technologie. Schnell, effizient und persönlich – von Absolventen der Universität Koblenz.",
      cta: "Kostenlose Beratung",
      ctaSecondary: "Mehr erfahren",
      features: [
        { icon: Zap, text: 'Besonders schnell' },
      ],
      kundenStellungnahme: "„Dank Ad Astra haben wir in wenigen Wochen 50 % mehr Kundenanfragen über unsere Webseite erhalten.""
    },
    en: {
      headline: "More customers with modern websites. Visible. Fast. Personal.",
      subheadline: "Modern websites and digital solutions for companies that want to move forward.",
      description: "Ad Astra develops professional online presences with cutting-edge technology. Fast, efficient and personal – by graduates of the University of Koblenz.",
      cta: "Free Consultation",
      ctaSecondary: "Learn More",
      features: [
        { icon: Zap, text: 'Exceptionally fast' },
      ],
      kundenStellungnahme: ""Thanks to Ad Astra we received 50% more customer inquiries via our website in a few weeks.""
    }
  };

  const t = content[currentLang];

  return (
    <section id="home" className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 leading-tight">
                {t.headline}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {t.subheadline}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-md text-white flex items-center border-0"
                variant="default"
              >
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-lg px-8 py-4 rounded-md flex items-center"
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
                  <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <feature.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Modern workspace"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-400">350+</div>
              <div className="text-gray-300">
                {currentLang === "de" ? "Zufriedene Kunden" : "Happy Clients"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
