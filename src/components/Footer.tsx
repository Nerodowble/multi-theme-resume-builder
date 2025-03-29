
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-4">
          <a 
            href="https://linkedin.com/in/willian-vidal-lima" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:willianvidallima@outlook.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            willianvidallima@outlook.com
          </a>
          <a 
            href="tel:+5511973297563" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            (11) 97329-7563
          </a>
        </div>
        
        <div className="text-muted-foreground text-sm flex items-center justify-center">
          <span>&copy; {currentYear} Willian Vidal Lima. {t('footer.rights')}</span>
        </div>
        
        <div className="text-muted-foreground text-sm mt-2 flex items-center justify-center">
          <span>{t('footer.madeWith')}</span>
          <Heart className="h-3 w-3 mx-1 text-primary" fill="currentColor" />
          <span>React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
