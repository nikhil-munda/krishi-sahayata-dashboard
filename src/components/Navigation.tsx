import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Wheat, 
  Mountain, 
  Camera, 
  TrendingUp,
  Settings,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavItem {
  id: string;
  label: string;
  labelHi: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    labelHi: 'डैशबोर्ड',
    icon: Home,
    href: '/'
  },
  {
    id: 'crops',
    label: 'Crops',
    labelHi: 'फसलें',
    icon: Wheat,
    href: '/crops'
  },
  {
    id: 'soil',
    label: 'Soil',
    labelHi: 'मिट्टी',
    icon: Mountain,
    href: '/soil'
  },
  {
    id: 'disease',
    label: 'Plant Disease',
    labelHi: 'पौधे की बीमारी',
    icon: Camera,
    href: '/plant-disease'
  },
  {
    id: 'prediction',
    label: 'Crop Prediction',
    labelHi: 'फसल पूर्वानुमान',
    icon: TrendingUp,
    href: '/crop-prediction'
  },
  {
    id: 'admin',
    label: 'Admin',
    labelHi: 'प्रशासन',
    icon: BarChart3,
    href: '/admin'
  }
];

interface NavigationProps {
  language: 'en' | 'hi';
  isMobile?: boolean;
}

export function Navigation({ language, isMobile = false }: NavigationProps) {
  const location = useLocation();
  
  if (isMobile) {
    // Mobile bottom navigation
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.slice(0, 5).map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <NavLink
                key={item.id}
                to={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors touch-button",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">
                  {language === 'hi' ? item.labelHi : item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    );
  }

  // Desktop sidebar navigation
  return (
    <nav className="w-64 bg-background border-r border-border h-full overflow-y-auto">
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <NavLink
                key={item.id}
                to={item.href}
                className={cn(
                  "nav-button w-full justify-start",
                  isActive && "active"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">
                  {language === 'hi' ? item.labelHi : item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}