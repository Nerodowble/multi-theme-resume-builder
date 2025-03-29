
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useToast } from '../components/ui/use-toast';
import { Label } from '../components/ui/label';

const Admin = () => {
  const { t, translations, setTranslations, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [editedTranslations, setEditedTranslations] = useState<Record<string, Record<Language, string>>>({});
  const [activeTab, setActiveTab] = useState('about');

  const ADMIN_PASSWORD = 'admin123'; // In a real app, this would be handled securely
  
  useEffect(() => {
    // Load translations into editable state when component mounts or language changes
    if (isLoggedIn) {
      setEditedTranslations({...translations});
    }
  }, [isLoggedIn, translations]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      toast({
        title: 'Login Successful',
        description: 'Welcome to the admin panel.',
      });
    } else {
      toast({
        title: 'Login Failed',
        description: 'Incorrect password.',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
  };

  const handleBackToSite = () => {
    navigate('/');
  };

  const handleSaveChanges = () => {
    setTranslations(editedTranslations);
    toast({
      title: 'Changes Saved',
      description: 'Your translations have been updated.',
    });
  };

  const updateTranslation = (key: string, lang: Language, value: string) => {
    setEditedTranslations(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [lang]: value
      }
    }));
  };

  const renderTranslationEditor = (section: string) => {
    const sectionKeys = Object.keys(translations).filter(key => key.startsWith(section));
    
    return (
      <div className="space-y-6">
        {sectionKeys.map(key => (
          <div key={key} className="p-4 border rounded-md">
            <Label className="block mb-2 font-medium">{key}</Label>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="block mb-1 text-sm">English</Label>
                <Textarea 
                  value={editedTranslations[key]?.en || ''}
                  onChange={(e) => updateTranslation(key, 'en', e.target.value)}
                  rows={3}
                />
              </div>
              
              <div>
                <Label className="block mb-1 text-sm">Português</Label>
                <Textarea 
                  value={editedTranslations[key]?.pt || ''}
                  onChange={(e) => updateTranslation(key, 'pt', e.target.value)}
                  rows={3}
                />
              </div>
              
              <div>
                <Label className="block mb-1 text-sm">Español</Label>
                <Textarea 
                  value={editedTranslations[key]?.es || ''}
                  onChange={(e) => updateTranslation(key, 'es', e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">{t('admin.login')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">{t('admin.password')}</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" type="button" onClick={handleBackToSite}>
                  Back to Site
                </Button>
                <Button type="submit">
                  {t('admin.enter')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t('admin.title')}</h1>
          
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleBackToSite}>
              Back to Site
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Edit Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Label>Preview Language:</Label>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                    <option value="es">Español</option>
                  </select>
                </div>
                
                <Button onClick={handleSaveChanges}>
                  {t('admin.save')}
                </Button>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
                  <TabsTrigger value="nav">Navigation</TabsTrigger>
                  <TabsTrigger value="hero">Hero</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                
                <TabsContent value="nav" className="mt-4">
                  {renderTranslationEditor('nav.')}
                </TabsContent>
                
                <TabsContent value="hero" className="mt-4">
                  {renderTranslationEditor('hero.')}
                </TabsContent>
                
                <TabsContent value="about" className="mt-4">
                  {renderTranslationEditor('about.')}
                </TabsContent>
                
                <TabsContent value="experience" className="mt-4">
                  {renderTranslationEditor('experience.')}
                </TabsContent>
                
                <TabsContent value="education" className="mt-4">
                  {renderTranslationEditor('education.')}
                </TabsContent>
                
                <TabsContent value="skills" className="mt-4">
                  {renderTranslationEditor('skills.')}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
