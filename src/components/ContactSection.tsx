
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the WhatsApp message with line breaks and form data
    const whatsappText = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    );
    
    // Create the WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/5511973297563/?text=${whatsappText}`;
    
    // Show toast notification
    toast({
      title: t('contact.success'),
      description: `${name}, ${t('contact.messageSent')}`,
    });
    
    // Wait a moment to show the toast before redirecting
    setTimeout(() => {
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset the form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">{t('contact.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{t('nav.contact')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-3" />
              <span>Diadema, SP</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <span>(11) 97329-7563</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <span>willianvidallima@outlook.com</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 text-primary mr-3" />
              <a 
                href="https://linkedin.com/in/willian-vidal-lima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/willian-vidal-lima
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('contact.message')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.name')}</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.email')}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.message')}</Label>
                <Textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  rows={4} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
