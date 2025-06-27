
import React from 'react';
import { MapPin, GraduationCap, Users, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  currentLang: 'de' | 'en';
}

const AboutSection = ({ currentLang }: AboutSectionProps) => {
  const content = {
    de: {
      title: 'Über Ad Astra',
      subtitle: 'Universität Koblenz trifft Praxis',
      description: 'Ad Astra wurde von Absolventen der Universität Koblenz gegründet. Wir kombinieren wirtschaftliches Denken mit technischer Kompetenz und entwickeln individuelle digitale Lösungen – effizient, schnell und persönlich.',
      vision: 'Unsere Vision ist es, Unternehmen jeder Größe dabei zu helfen, ihre digitale Präsenz zu optimieren und nachhaltiges Wachstum zu erzielen.',
      features: [
        {
          icon: MapPin,
          title: 'Standort Koblenz',
          description: 'Verwurzelt in der Region, digital global vernetzt'
        },
        {
          icon: GraduationCap,
          title: 'Universitäre Exzellenz',
          description: 'Fundierte Ausbildung trifft auf praktische Erfahrung'
        },
        {
          icon: Users,
          title: 'Persönlicher Kontakt',
          description: 'Direkter Draht zu den Entwicklern und Gründern'
        },
        {
          icon: TrendingUp,
          title: 'Kontinuierliche Weiterentwicklung',
          description: 'Immer auf dem neuesten Stand der Technik'
        }
      ]
    },
    en: {
      title: 'About Ad Astra',
      subtitle: 'University of Koblenz meets practice',
      description: 'Ad Astra was founded by graduates of the University of Koblenz. We combine economic thinking with technical competence and develop individual digital solutions – efficiently, quickly and personally.',
      vision: 'Our vision is to help companies of all sizes optimize their digital presence and achieve sustainable growth.',
      features: [
        {
          icon: MapPin,
          title: 'Based in Koblenz',
          description: 'Rooted in the region, digitally connected globally'
        },
        {
          icon: GraduationCap,
          title: 'University Excellence',
          description: 'Solid education meets practical experience'
        },
        {
          icon: Users,
          title: 'Personal Contact',
          description: 'Direct line to developers and founders'
        },
        {
          icon: TrendingUp,
          title: 'Continuous Development',
          description: 'Always up to date with the latest technology'
        }
      ]
    }
  };

  const t = content[currentLang];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-blue-400 font-medium mb-8">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.description}
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.vision}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-500/10 border border-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/50 border border-gray-700 rounded-2xl p-8 lg:p-12 backdrop-blur-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {currentLang === 'de' ? 'Warum Ad Astra?' : 'Why Ad Astra?'}
              </h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {currentLang === 'de' ? 'Besonders schnelle Umsetzung' : 'Exceptionally fast implementation'}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {currentLang === 'de' ? 'KI-gestützte Effizienz' : 'AI-supported efficiency'}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {currentLang === 'de' ? 'Modernste Technologie' : 'Latest technology'}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {currentLang === 'de' ? 'Faire und transparente Preise' : 'Fair and transparent pricing'}
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] bg-gray-700 border border-gray-600 rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=450&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover opacity-80"
              />
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

export default AboutSection;
