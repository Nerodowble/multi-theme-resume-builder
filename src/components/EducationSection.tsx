
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">{t('education.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-start space-x-4 pb-2">
            <div className="p-2 bg-primary/10 rounded-md">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">{t('education.degree1.title')}</CardTitle>
              <p className="text-muted-foreground">{t('education.degree1.institution')}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {t('education.degree1.period')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-start space-x-4 pb-2">
            <div className="p-2 bg-primary/10 rounded-md">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">{t('education.degree2.title')}</CardTitle>
              <p className="text-muted-foreground">{t('education.degree2.institution')}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {t('education.degree2.period')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
