
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ContactSectionProps {
  currentLang: 'de' | 'en';
}

const ContactSection = ({ currentLang }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const content = {
    de: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Lassen Sie uns über Ihr Projekt sprechen',
      formTitle: 'Nachricht senden',
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen (optional)',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      schedule: 'Termin vereinbaren',
      contactInfo: 'Kontaktdaten',
      responseTime: 'Antwort innerhalb von 24h',
      freeConsultation: 'Kostenlose Erstberatung',
      directContact: 'Direkter Kontakt zu den Gründern'
    },
    en: {
      title: 'Get in touch',
      subtitle: 'Let\'s talk about your project',
      formTitle: 'Send message',
      name: 'Name',
      email: 'Email',
      company: 'Company (optional)',
      message: 'Your message',
      send: 'Send message',
      schedule: 'Schedule appointment',
      contactInfo: 'Contact information',
      responseTime: 'Response within 24h',
      freeConsultation: 'Free initial consultation',
      directContact: 'Direct contact to founders'
    }
  };

  const t = content[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: currentLang === 'de' ? 'Nachricht gesendet!' : 'Message sent!',
      description: currentLang === 'de' 
        ? 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.'
        : 'We will get back to you within 24 hours.',
    });
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.name} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email} *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.company}
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.message} *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-lg py-3">
                <Send className="mr-2 h-5 w-5" />
                {t.send}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contactInfo}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">E-Mail</p>
                    <p className="text-gray-600">info@web56.de</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-gray-600">+49 261 123 456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Standort</p>
                    <p className="text-gray-600">Koblenz, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">
                {t.schedule}
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {t.responseTime}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {t.freeConsultation}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {t.directContact}
                </li>
              </ul>
              <Button variant="secondary" className="w-full">
                {t.schedule}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
