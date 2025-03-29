
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // This would be implemented with actual CV file
    alert('Download CV functionality would be here');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </h2>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button onClick={handleDownloadCV} className="w-full md:w-auto">
              Download CV
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto">
              {t('nav.contact')}
            </Button>
          </div>
          
          <div className="space-y-3 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-4 w-4 text-primary mr-2" />
              <span>Diadema, SP</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-4 w-4 text-primary mr-2" />
              <span>(11) 97329-7563</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-4 w-4 text-primary mr-2" />
              <span>willianvidallima@outlook.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Linkedin className="h-4 w-4 text-primary mr-2" />
              <a 
                href="https://linkedin.com/in/willian-vidal-lima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/willian-vidal-lima
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center">
            <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-background flex items-center justify-center text-3xl md:text-4xl font-bold text-primary">
              WVL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
