
import React from 'react';
import { Globe, Search, Zap, Cog, Shield, Palette } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: 'de' | 'en';
}

const ServicesSection = ({ currentLang }: ServicesSectionProps) => {
  const content = {
    de: {
      title: 'Unsere Leistungen',
      subtitle: 'Alles aus einer Hand für Ihren digitalen Erfolg',
      services: [
        {
          icon: Globe,
          title: 'Moderne Webseiten',
          description: 'Responsive Webseiten mit modernem Design, optimiert für alle Geräte und Suchmaschinen.'
        },
        {
          icon: Search,
          title: 'SEO-Optimierung',
          description: 'Verbesserte Sichtbarkeit in Google und anderen Suchmaschinen für mehr organischen Traffic.'
        },
        {
          icon: Zap,
          title: 'Performance-Optimierung',
          description: 'Blitzschnelle Ladezeiten und optimale mobile Darstellung für beste Nutzererfahrung.'
        },
        {
          icon: Cog,
          title: 'Digitale Automatisierung',
          description: 'Automatisierung von Geschäftsprozessen zur Effizienzsteigerung und Kostensenkung.'
        },
        {
          icon: Shield,
          title: 'Wartung & Support',
          description: 'Zuverlässige Betreuung, regelmäßige Updates und technischer Support rund um die Uhr.'
        },
        {
          icon: Palette,
          title: 'Branding & Beratung',
          description: 'Individuelle Markenentwicklung und strategische Beratung für Ihren digitalen Auftritt.'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Everything from one source for your digital success',
      services: [
        {
          icon: Globe,
          title: 'Modern Websites',
          description: 'Responsive websites with modern design, optimized for all devices and search engines.'
        },
        {
          icon: Search,
          title: 'SEO Optimization',
          description: 'Improved visibility on Google and other search engines for more organic traffic.'
        },
        {
          icon: Zap,
          title: 'Performance Optimization',
          description: 'Lightning-fast loading times and optimal mobile display for the best user experience.'
        },
        {
          icon: Cog,
          title: 'Digital Automation',
          description: 'Automation of business processes to increase efficiency and reduce costs.'
        },
        {
          icon: Shield,
          title: 'Maintenance & Support',
          description: 'Reliable care, regular updates and technical support around the clock.'
        },
        {
          icon: Palette,
          title: 'Branding & Consulting',
          description: 'Individual brand development and strategic consulting for your digital presence.'
        }
      ]
    }
  };

  const t = content[currentLang];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
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

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {currentLang === 'de' ? 'Bereit für Ihr Projekt?' : 'Ready for your project?'}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {currentLang === 'de' 
                ? 'Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. Kontaktieren Sie uns für eine kostenlose Erstberatung.'
                : 'Let us realize your digital vision together. Contact us for a free initial consultation.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                {currentLang === 'de' ? 'Kostenlose Beratung' : 'Free Consultation'}
              </button>
              <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
                {currentLang === 'de' ? 'Portfolio ansehen' : 'View Portfolio'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
