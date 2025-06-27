
import React from 'react';
import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';
import { Button } from '@/components/ui/button';
import { Bot, Clock, Lightbulb, Zap, Globe, MessageCircle } from 'lucide-react';

interface AstroSectionProps {
  currentLang: 'de' | 'en';
}

const AstroSection = ({ currentLang }: AstroSectionProps) => {
  const content = {
    de: {
      title: "Lerne Astro kennen – deinen digitalen KI-Assistenten",
      subtitle: "Dein smarter Website-Assistent, der rund um die Uhr hilft und deine Kunden begeistert.",
      features: [
        {
          icon: Clock,
          title: "24/7 Kundenbetreuung",
          description: "Beantwortet automatisch Kundenfragen – auch nachts und am Wochenende"
        },
        {
          icon: Lightbulb,
          title: "Content-Generator",
          description: "Generiert Produkttexte, Blogideen und Marketing-Inhalte auf Knopfdruck"
        },
        {
          icon: Zap,
          title: "Automatisierung",
          description: "Automatisiert wiederkehrende Aufgaben wie E-Mails und Terminbuchungen"
        },
        {
          icon: Globe,
          title: "Einfache Integration",
          description: "Integrierbar auf jeder Webseite – kein technisches Wissen nötig"
        }
      ],
      example: {
        title: "Beispiel-Konversation:",
        customer: "Kunde: Welche Öffnungszeiten haben Sie?",
        astro: "Astro: Wir haben täglich von 9-18 Uhr geöffnet. Kann ich Ihnen bei etwas anderem helfen?"
      },
      cta: "Astro jetzt integrieren",
      ctaSecondary: "Demo anfordern"
    },
    en: {
      title: "Meet Astro – your digital AI assistant",
      subtitle: "Your smart website assistant that helps 24/7 and delights your customers.",
      features: [
        {
          icon: Clock,
          title: "24/7 Customer Support",
          description: "Automatically answers customer questions – even at night and on weekends"
        },
        {
          icon: Lightbulb,
          title: "Content Generator",
          description: "Generates product texts, blog ideas and marketing content at the push of a button"
        },
        {
          icon: Zap,
          title: "Automation",
          description: "Automates recurring tasks like emails and appointment bookings"
        },
        {
          icon: Globe,
          title: "Easy Integration",
          description: "Can be integrated on any website – no technical knowledge required"
        }
      ],
      example: {
        title: "Example conversation:",
        customer: "Customer: What are your opening hours?",
        astro: "Astro: We're open daily from 9am-6pm. Can I help you with anything else?"
      },
      cta: "Integrate Astro now",
      ctaSecondary: "Request Demo"
    }
  };

  const t = content[currentLang];

  return (
    <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-black/50 border-gray-800 backdrop-blur-lg relative overflow-hidden mb-12">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgb(59, 130, 246)"
          />
          
          <div className="flex flex-col lg:flex-row h-full min-h-[600px]">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Conversation */}
              <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50 mb-8">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                  {t.example.title}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">👤</div>
                    <p className="text-gray-300 text-sm">{t.example.customer}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-blue-300 text-sm">{t.example.astro}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                >
                  {t.cta}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {t.ctaSecondary}
                </Button>
              </div>
            </div>

            {/* Right content - 3D Animation */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-[600px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              {/* Fallback gradient overlay for visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 pointer-events-none" />
            </div>
          </div>
        </Card>

        {/* Stats or additional info */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">{currentLang === 'de' ? 'Verfügbarkeit' : 'Availability'}</div>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-gray-300">{currentLang === 'de' ? 'Genauigkeit' : 'Accuracy'}</div>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2min</div>
            <div className="text-gray-300">{currentLang === 'de' ? 'Setup-Zeit' : 'Setup Time'}</div>
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

export default AstroSection;
