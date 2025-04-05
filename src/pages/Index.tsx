
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog'; // Add DialogDescription
import { Button } from '../components/ui/button';

const Index = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme(); // Use toggleTheme instead of setTheme
  const [isInitialSetupModalOpen, setIsInitialSetupModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');
    
    if (!savedLanguage || !savedTheme) {
      setIsInitialSetupModalOpen(true);
      // Pre-select based on current context state when modal opens
      setSelectedLanguage(language);
      setSelectedTheme(theme);
    } else {
       // If modal isn't needed, ensure context matches localStorage just in case.
       // Note: Context providers should ideally handle this synchronization internally.
       if (savedLanguage && savedLanguage !== language) setLanguage(savedLanguage as Language);
       // Check if theme needs toggling to match localStorage
       if (savedTheme && savedTheme !== theme) {
           // We only have toggleTheme, so call it if themes don't match.
           // This assumes the initial state from context provider might differ from localStorage briefly.
           toggleTheme();
       }
    }
  // Run only once on mount. Dependencies removed to prevent re-triggering.
  // Context providers should handle updates post-mount.
  }, []);

  const handleConfirmSelections = () => {
    // Set language if a selection was made
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
    }
    // Toggle theme only if the selected theme is different from the current theme
    if (selectedTheme && selectedTheme !== theme) {
      toggleTheme();
    }
    setIsInitialSetupModalOpen(false);
  };

  // Update temporary selections
  const handleSelectLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
  };
  const handleSelectTheme = (selected: 'light' | 'dark') => {
    setSelectedTheme(selected);
  };

  // Define the sections for the menu navigation (Removed duplicate below)

  // Define the sections for the menu navigation, removing 'contact' as it will be handled differently
  // Define the sections for the menu navigation
  const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header sections={sections} />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />

      {/* Initial Setup Modal (Language & Theme) */}
      <Dialog open={isInitialSetupModalOpen} onOpenChange={setIsInitialSetupModalOpen}>
        <DialogContent
          className="sm:max-w-md" // Adjusted width slightly
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>{t('languageModal.title')}</DialogTitle>
            <DialogDescription>
              {/* Optional: Add a small description if needed */}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
             {/* Language Selection */}
            <div className="flex justify-center space-x-2">
              {(['en', 'pt', 'es'] as Language[]).map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLanguage === lang ? 'default' : 'outline'}
                  onClick={() => handleSelectLanguage(lang)}
                  className="flex-1"
                >
                  {lang === 'en' ? 'English' : lang === 'pt' ? 'Português' : 'Español'}
                </Button>
              ))}
            </div>
          </div>

          {/* Theme Selection */}
           <div className="mt-4 grid gap-3">
             <h3 className="text-center font-medium">{t('themeModal.title')}</h3>
             <div className="flex justify-center space-x-2">
                <Button
                  variant={selectedTheme === 'light' ? 'default' : 'outline'}
                  onClick={() => handleSelectTheme('light')}
                  className="flex-1"
                >
                  {t('themeModal.light')}
                </Button>
                <Button
                  variant={selectedTheme === 'dark' ? 'default' : 'outline'}
                  onClick={() => handleSelectTheme('dark')}
                  className="flex-1"
                >
                  {t('themeModal.dark')}
                </Button>
             </div>
           </div>

          {/* Confirmation Button */}
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleConfirmSelections}
              disabled={!selectedLanguage || !selectedTheme} // Ensure both are selected
            >
              {t('modal.continue')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
