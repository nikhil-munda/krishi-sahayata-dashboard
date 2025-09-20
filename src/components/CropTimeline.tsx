import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Sprout, Flower, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CropStage {
  id: string;
  name: string;
  nameHi: string;
  status: 'completed' | 'current' | 'upcoming';
  date: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CropTimelineProps {
  language: 'en' | 'hi';
  cropName: string;
  cropNameHi: string;
  className?: string;
}

const stages: CropStage[] = [
  {
    id: 'planting',
    name: 'Planting',
    nameHi: 'बुवाई',
    status: 'completed',
    date: 'Oct 15',
    duration: '1-2 days',
    icon: Zap
  },
  {
    id: 'vegetative',
    name: 'Vegetative',
    nameHi: 'वानस्पतिक',
    status: 'current',
    date: 'Nov 1-Jan 15',
    duration: '75 days',
    icon: Sprout
  },
  {
    id: 'flowering',
    name: 'Flowering',
    nameHi: 'फूल आना',
    status: 'upcoming',
    date: 'Jan 16-Feb 15',
    duration: '30 days',
    icon: Flower
  },
  {
    id: 'harvest',
    name: 'Harvest',
    nameHi: 'कटाई',
    status: 'upcoming',
    date: 'Mar 1-15',
    duration: '15 days',
    icon: Trophy
  }
];

const getStatusColor = (status: CropStage['status']) => {
  switch (status) {
    case 'completed':
      return 'status-success';
    case 'current':
      return 'status-warning';
    case 'upcoming':
      return 'status-info';
    default:
      return 'status-info';
  }
};

const getStatusText = (status: CropStage['status'], language: 'en' | 'hi') => {
  const translations = {
    completed: { en: 'Completed', hi: 'पूर्ण' },
    current: { en: 'Current', hi: 'वर्तमान' },
    upcoming: { en: 'Upcoming', hi: 'आगामी' }
  };
  
  return translations[status][language];
};

export function CropTimeline({ 
  language, 
  cropName, 
  cropNameHi,
  className 
}: CropTimelineProps) {
  const translations = {
    en: {
      title: 'Crop Growth Timeline',
      subtitle: `${cropName} - Winter Season 2024`
    },
    hi: {
      title: 'फसल विकास समयरेखा',
      subtitle: `${cropNameHi} - शीतकालीन सत्र 2024`
    }
  };

  const t = translations[language];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">{t.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{t.subtitle}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === stages.length - 1;
            
            return (
              <div key={stage.id} className="relative">
                {/* Connector line */}
                {!isLast && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-border" />
                )}
                
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center",
                    stage.status === 'completed' && "bg-green-100 border-green-300",
                    stage.status === 'current' && "bg-yellow-100 border-yellow-300",
                    stage.status === 'upcoming' && "bg-gray-100 border-gray-300"
                  )}>
                    <Icon className={cn(
                      "h-5 w-5",
                      stage.status === 'completed' && "text-green-700",
                      stage.status === 'current' && "text-yellow-700",
                      stage.status === 'upcoming' && "text-gray-500"
                    )} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {language === 'hi' ? stage.nameHi : stage.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {stage.date} • {stage.duration}
                        </p>
                      </div>
                      
                      <Badge className={cn("status-chip", getStatusColor(stage.status))}>
                        {getStatusText(stage.status, language)}
                      </Badge>
                    </div>
                    
                    {stage.status === 'current' && (
                      <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-800">
                          {language === 'hi' 
                            ? 'सिंचाई और उर्वरक प्रबंधन पर ध्यान दें' 
                            : 'Focus on irrigation and fertilizer management'
                          }
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}