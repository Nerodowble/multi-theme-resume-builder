
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-container bg-muted/50">
      <h2 className="section-title">{t('experience.title')}</h2>
      
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <CardTitle className="text-xl md:text-2xl text-primary">
                {t('experience.job1.title')}
              </CardTitle>
              <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{t('experience.job1.period')}</span>
              </div>
            </div>
            <p className="text-lg font-medium">{t('experience.job1.company')}</p>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line text-muted-foreground">
              {t('experience.job1.responsibilities')}
            </p>
          </CardContent>
        </Card>
        
        {/* A visual element to encourage scrolling */}
        <div className="flex justify-center">
          <div className="w-2 h-16 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
