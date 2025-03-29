
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">{t('about.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <p className="text-muted-foreground whitespace-pre-line mb-6">
              {t('about.summary')}
            </p>
            
            <h3 className="section-subtitle">{t('about.objective.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.objective.content')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-4 text-primary">{t('nav.contact')}</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t('about.location')}</p>
                <p>Diadema, SP</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t('about.phone')}</p>
                <p>(11) 97329-7563</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t('about.email')}</p>
                <p>willianvidallima@outlook.com</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/willian-vidal-lima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/willian-vidal-lima
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
