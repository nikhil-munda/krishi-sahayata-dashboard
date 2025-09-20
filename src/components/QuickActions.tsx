import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, TrendingUp, Camera, MapPin } from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  labelHi: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: 'default' | 'outline';
  onClick: () => void;
}

interface QuickActionsProps {
  language: 'en' | 'hi';
  className?: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'add-field',
    label: 'Add Field',
    labelHi: 'खेत जोड़ें',
    icon: Plus,
    variant: 'default',
    onClick: () => console.log('Add field')
  },
  {
    id: 'run-prediction',
    label: 'Run Prediction',
    labelHi: 'पूर्वानुमान चलाएं',
    icon: TrendingUp,
    variant: 'outline',
    onClick: () => console.log('Run prediction')
  },
  {
    id: 'scan-disease',
    label: 'Scan for Disease',
    labelHi: 'रोग स्कैन करें',
    icon: Camera,
    variant: 'outline',
    onClick: () => console.log('Scan disease')
  },
  {
    id: 'view-map',
    label: 'View Field Map',
    labelHi: 'खेत का नक्शा देखें',
    icon: MapPin,
    variant: 'outline',
    onClick: () => console.log('View map')
  }
];

export function QuickActions({ language, className }: QuickActionsProps) {
  const translations = {
    en: {
      title: 'Quick Actions'
    },
    hi: {
      title: 'त्वरित कार्य'
    }
  };

  const t = translations[language];

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">{t.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            
            return (
              <Button
                key={action.id}
                variant={action.variant}
                onClick={action.onClick}
                className="h-auto p-4 flex items-center gap-3 justify-start touch-button"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">
                  {language === 'hi' ? action.labelHi : action.label}
                </span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}