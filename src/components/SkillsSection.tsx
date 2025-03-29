
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const programmingSkills = [
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 70 },
    { name: 'PHP', level: 70 },
    { name: 'HTML & CSS', level: 70 }
  ];

  const frameworkSkills = [
    { name: 'React', level: 70 }
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: 70 }
  ];

  const toolsSkills = [
    { name: 'Git', level: 80 },
    { name: 'Jira', level: 85 },
    { name: 'Confluence', level: 75 },
    { name: 'Automated Testing', level: 90 }
  ];

  const softSkills = [
    t('skills.soft.communication'),
    t('skills.soft.teamwork'),
    t('skills.soft.problemsolving'),
    t('skills.soft.proactivity'),
    t('skills.soft.adaptability')
  ];

  return (
    <section id="skills" className="section-container bg-muted/50">
      <h2 className="section-title">{t('skills.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('skills.programming')}</h3>
              <div className="space-y-4">
                {programmingSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">Intermediário</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('skills.frameworks')}</h3>
              <div className="space-y-4">
                {frameworkSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">Intermediário</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('skills.databases')}</h3>
              <div className="space-y-4">
                {databaseSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">Intermediário</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('skills.tools')}</h3>
              <div className="space-y-4">
                {toolsSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('skills.soft')}</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary/30 text-sm py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('skills.certifications')}</h3>
              <p>{t('skills.certifications.dataQuality')}</p>
              
              <h3 className="text-xl font-semibold mb-4 mt-6">{t('skills.languages')}</h3>
              <p>{t('skills.languages.english')}</p>
              
              <h3 className="text-xl font-semibold mb-4 mt-6">{t('skills.additional')}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('skills.additional.remote')}</li>
                <li>{t('skills.additional.fullstack')}</li>
                <li>{t('skills.additional.architecture')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
