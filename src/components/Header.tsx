import React from 'react';
import { Bell, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LanguageToggle, Language } from './LanguageToggle';
import { cn } from '@/lib/utils';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  isMobile?: boolean;
}

export function Header({ 
  language, 
  onLanguageChange, 
  isMobileMenuOpen = false,
  onMobileMenuToggle,
  isMobile = false 
}: HeaderProps) {
  const translations = {
    en: {
      title: 'Agricultural Portal',
      subtitle: 'Government of India',
      notifications: 'Notifications',
      profile: 'Farmer Profile',
      farmerName: 'Rahul Kumar',
      location: 'Village Rampur, Uttar Pradesh'
    },
    hi: {
      title: 'कृषि पोर्टल',
      subtitle: 'भारत सरकार',
      notifications: 'सूचनाएं',
      profile: 'किसान प्रोफाइल',
      farmerName: 'राहुल कुमार',
      location: 'गांव रामपुर, उत्तर प्रदेश'
    }
  };

  const t = translations[language];

  return (
    <header className="portal-header sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-16">
        {/* Left section - Logo and title */}
        <div className="flex items-center gap-4">
          {isMobile && onMobileMenuToggle && (
            <Button
              variant="ghost"
              size="sm"
              className="touch-button"
              onClick={onMobileMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          )}
          
          <div className="flex items-center gap-3">
            {/* Government logo placeholder */}
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🌾</span>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground">
                {t.title}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right section - Controls and profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language toggle */}
          <LanguageToggle 
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
          />

          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="touch-button relative"
            aria-label={t.notifications}
          >
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>

          {/* Farmer profile */}
          <Button
            variant="ghost"
            size="sm"
            className="touch-button flex items-center gap-2"
            aria-label={t.profile}
          >
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-foreground">
                {t.farmerName}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.location}
              </p>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}