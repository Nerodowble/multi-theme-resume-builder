
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Define the sections for the menu navigation, removing 'contact' as it will be handled differently
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
    </div>
  );
};

export default Index;
