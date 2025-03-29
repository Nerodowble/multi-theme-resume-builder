
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Language types
export type Language = 'en' | 'pt' | 'es';

// Context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Record<string, Record<Language, string>>;
  setTranslations: (newTranslations: Record<string, Record<Language, string>>) => void;
};

// Default translations object
const defaultTranslations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': {
    en: 'Home',
    pt: 'Início',
    es: 'Inicio'
  },
  'nav.about': {
    en: 'About',
    pt: 'Sobre',
    es: 'Sobre'
  },
  'nav.experience': {
    en: 'Experience',
    pt: 'Experiência',
    es: 'Experiencia'
  },
  'nav.skills': {
    en: 'Skills',
    pt: 'Habilidades',
    es: 'Habilidades'
  },
  'nav.education': {
    en: 'Education',
    pt: 'Formação',
    es: 'Educación'
  },
  'nav.contact': {
    en: 'Contact',
    pt: 'Contato',
    es: 'Contacto'
  },

  // Hero Section
  'hero.title': {
    en: 'Willian Vidal Lima',
    pt: 'Willian Vidal Lima',
    es: 'Willian Vidal Lima'
  },
  'hero.subtitle': {
    en: 'QA | Quality Analyst | Junior Full Stack Developer',
    pt: 'QA | Analista de Qualidade | Desenvolvedor Full Stack Júnior',
    es: 'QA | Analista de Calidad | Desarrollador Full Stack Junior'
  },

  // About Section
  'about.title': {
    en: 'About Me',
    pt: 'Sobre Mim',
    es: 'Sobre Mí'
  },
  'about.summary': {
    en: 'Quality Analyst (QA) at Legalbot, with experience in manual and automated software testing. Seeking transition to Junior Full Stack Developer, using my knowledge in Python, React, MongoDB and other technologies. Studying Systems Analysis and Development at São Judas Tadeu University (expected completion 06/2025) and Software Programming technician at ETEC Adolpho Berezin. Solid skills in agile methodologies and teamwork, with availability for remote work and continuous desire for learning and technical improvement.',
    pt: 'Analista de Qualidade (QA) na Legalbot, com experiência em testes manuais e automatizados de software. Busco transição para Desenvolvedor Full Stack Júnior, utilizando meus conhecimentos em Python, React, MongoDB e outras tecnologias. Em formação em Análise e Desenvolvimento de Sistemas pela Universidade São Judas Tadeu (conclusão prevista para 06/2025) e técnico em Programação de Softwares pela ETEC Adolpho Berezin. Habilidades sólidas em metodologias ágeis e trabalho em equipe, com disponibilidade para trabalho remoto e desejo contínuo de aprendizado e aprimoramento técnico.',
    es: 'Analista de Calidad (QA) en Legalbot, con experiencia en pruebas manuales y automatizadas de software. Busco la transición a Desarrollador Full Stack Junior, utilizando mis conocimientos en Python, React, MongoDB y otras tecnologías. Estudiando Análisis y Desarrollo de Sistemas en la Universidad São Judas Tadeu (finalización prevista para 06/2025) y técnico en Programación de Software en ETEC Adolpho Berezin. Habilidades sólidas en metodologías ágiles y trabajo en equipo, con disponibilidad para trabajo remoto y deseo continuo de aprendizaje y mejora técnica.'
  },
  'about.objective.title': {
    en: 'Objective',
    pt: 'Objetivo',
    es: 'Objetivo'
  },
  'about.objective.content': {
    en: 'To work as a Junior Full Stack Developer, applying and improving technical skills in a dynamic and innovative environment. I seek to actively contribute to the growth of the team and the success of projects, adding value through efficient and well-structured solutions.',
    pt: 'Atuar como Desenvolvedor Full Stack Júnior, aplicando e aprimorando habilidades técnicas em um ambiente dinâmico e inovador. Busco contribuir ativamente para o crescimento da equipe e o sucesso dos projetos, agregando valor por meio de soluções eficientes e bem estruturadas.',
    es: 'Trabajar como Desarrollador Full Stack Junior, aplicando y mejorando habilidades técnicas en un ambiente dinámico e innovador. Busco contribuir activamente al crecimiento del equipo y al éxito de los proyectos, agregando valor a través de soluciones eficientes y bien estructuradas.'
  },
  'about.location': {
    en: 'Location',
    pt: 'Localização',
    es: 'Ubicación'
  },
  'about.phone': {
    en: 'Phone',
    pt: 'Telefone',
    es: 'Teléfono'
  },
  'about.email': {
    en: 'Email',
    pt: 'E-mail',
    es: 'Correo'
  },

  // Education Section
  'education.title': {
    en: 'Education',
    pt: 'Formação Acadêmica',
    es: 'Educación'
  },
  'education.degree1.title': {
    en: 'Systems Analysis and Development',
    pt: 'Análise e Desenvolvimento de Sistemas',
    es: 'Análisis y Desarrollo de Sistemas'
  },
  'education.degree1.institution': {
    en: 'São Judas Tadeu University',
    pt: 'Universidade São Judas Tadeu',
    es: 'Universidad São Judas Tadeu'
  },
  'education.degree1.period': {
    en: 'Expected completion: June/2025',
    pt: 'Previsão de conclusão: Junho/2025',
    es: 'Conclusión prevista: Junio/2025'
  },
  'education.degree2.title': {
    en: 'Software Programming Technician',
    pt: 'Técnico em Programação de Softwares',
    es: 'Técnico en Programación de Software'
  },
  'education.degree2.institution': {
    en: 'ETEC Adolpho Berezin',
    pt: 'ETEC Adolpho Berezin',
    es: 'ETEC Adolpho Berezin'
  },
  'education.degree2.period': {
    en: 'Completed',
    pt: 'Concluído',
    es: 'Completado'
  },

  // Experience Section
  'experience.title': {
    en: 'Professional Experience',
    pt: 'Experiência Profissional',
    es: 'Experiencia Profesional'
  },
  'experience.job1.title': {
    en: 'Quality Analyst (QA)',
    pt: 'Analista de Qualidade (QA)',
    es: 'Analista de Calidad (QA)'
  },
  'experience.job1.company': {
    en: 'Legalbot',
    pt: 'Legalbot',
    es: 'Legalbot'
  },
  'experience.job1.period': {
    en: 'May/2023 - Present',
    pt: 'Maio/2023 - Presente',
    es: 'Mayo/2023 - Presente'
  },
  'experience.job1.responsibilities': {
    en: '• Execution of manual and automated tests to ensure software quality.\n• Identification, registration and monitoring of bug fixes with the development team.\n• Creation and maintenance of test plans to ensure complete coverage of functionalities.\n• Assistance in identifying bottlenecks and improvements in development processes, promoting team efficiency.\n• Experience with agile methodologies and tools such as Jira and Confluence.',
    pt: '• Execução de testes manuais e automatizados para garantir a qualidade do software.\n• Identificação, registro e acompanhamento da correção de bugs junto à equipe de desenvolvimento.\n• Criação e manutenção de planos de teste para assegurar a cobertura completa das funcionalidades.\n• Auxílio na identificação de gargalos e melhorias nos processos de desenvolvimento, promovendo eficiência na equipe.\n• Experiência em metodologias ágeis e uso de ferramentas como Jira e Confluence.',
    es: '• Ejecución de pruebas manuales y automatizadas para garantizar la calidad del software.\n• Identificación, registro y seguimiento de la corrección de errores con el equipo de desarrollo.\n• Creación y mantenimiento de planes de prueba para asegurar la cobertura completa de las funcionalidades.\n• Ayuda en la identificación de cuellos de botella y mejoras en los procesos de desarrollo, promoviendo la eficiencia del equipo.\n• Experiencia en metodologías ágiles y uso de herramientas como Jira y Confluence.'
  },

  // Skills Section
  'skills.title': {
    en: 'Technical Skills',
    pt: 'Habilidades Técnicas',
    es: 'Habilidades Técnicas'
  },
  'skills.programming': {
    en: 'Programming Languages',
    pt: 'Linguagens de Programação',
    es: 'Lenguajes de Programación'
  },
  'skills.frameworks': {
    en: 'Frameworks',
    pt: 'Frameworks',
    es: 'Frameworks'
  },
  'skills.databases': {
    en: 'Databases',
    pt: 'Bancos de Dados',
    es: 'Bases de Datos'
  },
  'skills.tools': {
    en: 'Tools and Technologies',
    pt: 'Ferramentas e Tecnologias',
    es: 'Herramientas y Tecnologías'
  },
  'skills.soft': {
    en: 'Soft Skills',
    pt: 'Habilidades Comportamentais',
    es: 'Habilidades Blandas'
  },
  'skills.soft.communication': {
    en: 'Communication',
    pt: 'Comunicação',
    es: 'Comunicación'
  },
  'skills.soft.teamwork': {
    en: 'Teamwork',
    pt: 'Trabalho em equipe',
    es: 'Trabajo en equipo'
  },
  'skills.soft.problemsolving': {
    en: 'Problem Solving',
    pt: 'Resolução de problemas',
    es: 'Resolución de problemas'
  },
  'skills.soft.proactivity': {
    en: 'Proactivity',
    pt: 'Proatividade',
    es: 'Proactividad'
  },
  'skills.soft.adaptability': {
    en: 'Adaptability',
    pt: 'Adaptabilidade',
    es: 'Adaptabilidad'
  },
  'skills.certifications': {
    en: 'Certifications',
    pt: 'Certificações',
    es: 'Certificaciones'
  },
  'skills.certifications.dataQuality': {
    en: 'Data Quality Analytics',
    pt: 'Data Quality Analytics',
    es: 'Data Quality Analytics'
  },
  'skills.languages': {
    en: 'Languages',
    pt: 'Idiomas',
    es: 'Idiomas'
  },
  'skills.languages.english': {
    en: 'English: Intermediate (Advanced technical reading)',
    pt: 'Inglês: Intermediário (Leitura técnica avançada)',
    es: 'Inglés: Intermedio (Lectura técnica avanzada)'
  },
  'skills.additional': {
    en: 'Additional Information',
    pt: 'Informações Adicionais',
    es: 'Información Adicional'
  },
  'skills.additional.remote': {
    en: 'Available for remote work.',
    pt: 'Disponibilidade para trabalho remoto.',
    es: 'Disponibilidad para trabajo remoto.'
  },
  'skills.additional.fullstack': {
    en: 'Interest and experience in full stack development.',
    pt: 'Interesse e experiência em desenvolvimento full stack.',
    es: 'Interés y experiencia en desarrollo full stack.'
  },
  'skills.additional.architecture': {
    en: 'Familiarity with software architecture and good programming practices.',
    pt: 'Familiaridade com arquitetura de software e boas práticas de programação.',
    es: 'Familiaridad con arquitectura de software y buenas prácticas de programación.'
  },

  // Contact Section
  'contact.title': {
    en: 'Contact Me',
    pt: 'Entre em Contato',
    es: 'Contáctame'
  },
  'contact.name': {
    en: 'Name',
    pt: 'Nome',
    es: 'Nombre'
  },
  'contact.email': {
    en: 'Email',
    pt: 'E-mail',
    es: 'Correo'
  },
  'contact.message': {
    en: 'Message',
    pt: 'Mensagem',
    es: 'Mensaje'
  },
  'contact.send': {
    en: 'Send Message',
    pt: 'Enviar Mensagem',
    es: 'Enviar Mensaje'
  },
  'contact.success': {
    en: 'Message sent successfully!',
    pt: 'Mensagem enviada com sucesso!',
    es: '¡Mensaje enviado con éxito!'
  },

  // Admin page
  'admin.title': {
    en: 'Admin Panel',
    pt: 'Painel de Administração',
    es: 'Panel de Administración'
  },
  'admin.login': {
    en: 'Login',
    pt: 'Entrar',
    es: 'Iniciar Sesión'
  },
  'admin.password': {
    en: 'Password',
    pt: 'Senha',
    es: 'Contraseña'
  },
  'admin.enter': {
    en: 'Enter',
    pt: 'Entrar',
    es: 'Entrar'
  },
  'admin.save': {
    en: 'Save Changes',
    pt: 'Salvar Alterações',
    es: 'Guardar Cambios'
  },
  'admin.addItem': {
    en: 'Add Item',
    pt: 'Adicionar Item',
    es: 'Añadir Elemento'
  },
  'admin.editTranslations': {
    en: 'Edit Translations',
    pt: 'Editar Traduções',
    es: 'Editar Traducciones'
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved',
    pt: 'Todos os direitos reservados',
    es: 'Todos los derechos reservados'
  },
  'footer.madeWith': {
    en: 'Made with',
    pt: 'Feito com',
    es: 'Hecho con'
  }
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
  translations: defaultTranslations,
  setTranslations: () => {}
});

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });
  
  const [translations, setTranslations] = useState<Record<string, Record<Language, string>>>(defaultTranslations);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key] || !translations[key][language]) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translations[key][language];
  };

  const value = {
    language,
    setLanguage,
    t,
    translations,
    setTranslations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
