import React, { useState, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HeaderProps {
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle language selection
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (top < windowHeight / 2 && bottom > windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo/Name */}
        <div className="font-bold text-xl">
          <a href="#home" className="text-primary">WVL</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
            >
              {t(`nav.${section}`)}
            </button>
          ))}
          
          {/* Language Selector */}
          <div className="ml-4 flex items-center space-x-1 border border-border rounded-md p-0.5">
            {(['en', 'pt', 'es'] as Language[]).map((lang) => (
              <Button
                key={lang}
                variant={language === lang ? 'secondary' : 'ghost'}
                size="sm"
                className="px-2 h-7 text-xs" // Ajuste de padding e altura
                onClick={() => handleLanguageChange(lang)}
              >
                {lang.toUpperCase()}
              </Button>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground mr-2"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 animate-slide-in-right">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left py-3 px-4 text-lg border-b border-border hover:bg-secondary/50 ${
                  activeSection === section ? 'text-primary font-medium' : ''
                }`}
              >
                {t(`nav.${section}`)}
              </button>
            ))}
            
            <div className="flex justify-start space-x-2 py-4">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                onClick={() => handleLanguageChange('en')}
                className="flex-1"
              >
                English
              </Button>
              <Button
                variant={language === 'pt' ? 'default' : 'outline'}
                onClick={() => handleLanguageChange('pt')}
                className="flex-1"
              >
                Português
              </Button>
              <Button
                variant={language === 'es' ? 'default' : 'outline'}
                onClick={() => handleLanguageChange('es')}
                className="flex-1"
              >
                Español
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
