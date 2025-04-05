
import React from 'react';
import { jsPDF } from "jspdf"; // Import jsPDF
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    const doc = new jsPDF();
    const margin = 15;
    const lineHeight = 7;
    let currentY = margin;

    // Helper function to add text and move Y position
    const addText = (text: string, size: number, style: 'normal' | 'bold' = 'normal', indent = 0) => {
      doc.setFontSize(size);
      doc.setFont('helvetica', style); // Using helvetica as a standard font
      // Split text for wrapping (basic implementation)
      const splitText = doc.splitTextToSize(text, doc.internal.pageSize.width - margin * 2 - indent);
      doc.text(splitText, margin + indent, currentY);
      currentY += splitText.length * (size * 0.35); // Adjust Y based on lines and font size factor
      currentY += lineHeight / 2; // Add some spacing after text block
    };
    
    const addSeparator = () => {
        currentY += lineHeight / 2;
        doc.setDrawColor(200); // Light gray line
        doc.line(margin, currentY, doc.internal.pageSize.width - margin, currentY);
        currentY += lineHeight;
    }

    // --- Start Adding Content ---

    // Header
    addText('Willian Vidal Lima', 20, 'bold');
    currentY -= lineHeight / 3; // Reduce space slightly after main title
    addText('QA | Analista de Qualidade | Desenvolvedor Full Stack Júnior', 12);
    currentY += lineHeight / 2; // Extra space before contact info

    // Contact Info
    addText('Informações de Contato', 10, 'bold');
    currentY -= lineHeight / 2;
    addText('• Localização: Diadema, SP', 10, 'normal', 5);
    addText('• Telefone: (11) 97329-7563', 10, 'normal', 5);
    addText('• E-mail: willianvidallima@outlook.com', 10, 'normal', 5);
    addText('• LinkedIn: linkedin.com/in/willian-vidal-lima', 10, 'normal', 5); // Link won't be clickable in basic PDF

    addSeparator();

    // Summary
    addText('Resumo Profissional', 14, 'bold');
    addText('Analista de Qualidade (QA) na Legalbot, com experiência em testes manuais e automatizados de software. Busco transição para Desenvolvedor Full Stack Júnior, utilizando meus conhecimentos em Python, React, MongoDB e outras tecnologias. Em formação em Análise e Desenvolvimento de Sistemas pela Universidade São Judas Tadeu (conclusão prevista para 06/2025) e técnico em Programação de Softwares pela ETEC Adolpho Berezin. Habilidades sólidas em metodologias ágeis e trabalho em equipe, com disponibilidade para trabalho remoto e desejo contínuo de aprendizado e aprimoramento técnico.', 10);

    addSeparator();

    // Objective
    addText('Objetivo', 14, 'bold');
    addText('Atuar como Desenvolvedor Full Stack Júnior, aplicando e aprimorando habilidades técnicas em um ambiente dinâmico e inovador. Busco contribuir ativamente para o crescimento da equipe e o sucesso dos projetos, agregando valor por meio de soluções eficientes e bem estruturadas.', 10);

    addSeparator();

    // Education
    addText('Formação Acadêmica', 14, 'bold');
    addText('• Análise e Desenvolvimento de Sistemas – Universidade São Judas Tadeu (Previsão de conclusão: Junho/2025)', 10, 'normal', 5);
    addText('• Técnico em Programação de Softwares – ETEC Adolpho Berezin (Concluído)', 10, 'normal', 5);

    addSeparator();

    // Experience
    addText('Experiência Profissional', 14, 'bold');
    addText('Legalbot – Analista de Qualidade (QA) (Maio/2023 – Presente)', 11, 'bold');
    currentY -= lineHeight / 2;
    addText('• Execução de testes manuais e automatizados para garantir a qualidade do software.', 10, 'normal', 5);
    addText('• Identificação, registro e acompanhamento da correção de bugs junto à equipe de desenvolvimento.', 10, 'normal', 5);
    addText('• Criação e manutenção de planos de teste para assegurar a cobertura completa das funcionalidades.', 10, 'normal', 5);
    addText('• Auxílio na identificação de gargalos e melhorias nos processos de desenvolvimento, promovendo eficiência na equipe.', 10, 'normal', 5);
    addText('• Experiência em metodologias ágeis e uso de ferramentas como Jira e Confluence.', 10, 'normal', 5);

    addSeparator();

    // Technical Skills
    addText('Habilidades Técnicas', 14, 'bold');
    addText('Linguagens de Programação:', 11, 'bold');
    currentY -= lineHeight / 2;
    addText('• Python: Intermediário', 10, 'normal', 5);
    addText('• JavaScript: Intermediário', 10, 'normal', 5);
    addText('• PHP: Intermediário', 10, 'normal', 5);
    addText('• HTML & CSS: Intermediário', 10, 'normal', 5);
    currentY += lineHeight / 2;
    addText('Frameworks:', 11, 'bold');
    currentY -= lineHeight / 2;
    addText('• React: Intermediário', 10, 'normal', 5);
    currentY += lineHeight / 2;
    addText('Bancos de Dados:', 11, 'bold');
    currentY -= lineHeight / 2;
    addText('• MongoDB: Intermediário', 10, 'normal', 5);
    currentY += lineHeight / 2;
    addText('Ferramentas e Tecnologias:', 11, 'bold');
    currentY -= lineHeight / 2;
    addText('• Git, Jira, Confluence', 10, 'normal', 5);
    addText('• Testes Automatizados e Manuais', 10, 'normal', 5);
    addText('• Metodologias Ágeis (Scrum)', 10, 'normal', 5);

    addSeparator();

    // Soft Skills
    addText('Habilidades Comportamentais', 14, 'bold');
    addText('• Comunicação', 10, 'normal', 5);
    addText('• Trabalho em equipe', 10, 'normal', 5);
    addText('• Resolução de problemas', 10, 'normal', 5);
    addText('• Proatividade', 10, 'normal', 5);
    addText('• Adaptabilidade', 10, 'normal', 5);

    addSeparator();

    // Certifications
    addText('Certificações', 14, 'bold');
    addText('• Data Quality Analytics (Inserir instituição e data)', 10, 'normal', 5); // Placeholder

    addSeparator();

    // Languages
    addText('Idiomas', 14, 'bold');
    addText('• Inglês: Intermediário (Leitura técnica avançada)', 10, 'normal', 5);

    addSeparator();

    // Additional Info
    addText('Informações Adicionais', 14, 'bold');
    addText('• Disponibilidade para trabalho remoto.', 10, 'normal', 5);
    addText('• Interesse e experiência em desenvolvimento full stack.', 10, 'normal', 5);
    addText('• Familiaridade com arquitetura de software e boas práticas de programação.', 10, 'normal', 5);

    // --- End Adding Content ---

    doc.save('Willian_Vidal_Lima_CV.pdf');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511973297563', '_blank');
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
            {/* Button is now active again and generates PDF */}
            <Button onClick={handleDownloadCV} className="w-full md:w-auto">
              Download CV (PDF)
            </Button>
            <Button variant="outline" onClick={openWhatsApp} className="w-full md:w-auto">
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
