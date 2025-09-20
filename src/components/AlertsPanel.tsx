import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Droplet, Bug, TrendingUp, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  type: 'warning' | 'danger' | 'info' | 'success';
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  timestamp: string;
  urgent?: boolean;
  action?: {
    label: string;
    labelHi: string;
    onClick: () => void;
  };
}

interface AlertsPanelProps {
  language: 'en' | 'hi';
  className?: string;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Irrigation Required',
    titleHi: 'सिंचाई आवश्यक',
    description: 'Field A needs watering - soil moisture at 25%',
    descriptionHi: 'खेत A में पानी की जरूरत - मिट्टी की नमी 25%',
    timestamp: '2 hours ago',
    urgent: true,
    action: {
      label: 'Schedule',
      labelHi: 'अनुसूची',
      onClick: () => console.log('Schedule irrigation')
    }
  },
  {
    id: '2',
    type: 'danger',
    title: 'Pest Alert',
    titleHi: 'कीट चेतावनी',
    description: 'High aphid activity detected in wheat fields',
    descriptionHi: 'गेहूं के खेतों में माहू की अधिक गतिविधि',
    timestamp: '1 day ago',
    urgent: true,
    action: {
      label: 'View Treatment',
      labelHi: 'उपचार देखें',
      onClick: () => console.log('View treatment')
    }
  },
  {
    id: '3',
    type: 'info',
    title: 'Weather Update',
    titleHi: 'मौसम अपडेट',
    description: 'Light rainfall expected in next 3 days',
    descriptionHi: 'अगले 3 दिनों में हल्की बारिश की संभावना',
    timestamp: '6 hours ago'
  },
  {
    id: '4',
    type: 'success',
    title: 'Harvest Ready',
    titleHi: 'फसल तैयार',
    description: 'Tomato crop in Field C ready for harvest',
    descriptionHi: 'खेत C में टमाटर की फसल कटाई के लिए तैयार',
    timestamp: '1 day ago',
    action: {
      label: 'Plan Harvest',
      labelHi: 'कटाई की योजना',
      onClick: () => console.log('Plan harvest')
    }
  }
];

const getAlertIcon = (type: Alert['type']) => {
  switch (type) {
    case 'warning':
      return AlertTriangle;
    case 'danger':
      return Bug;
    case 'info':
      return Droplet;
    case 'success':
      return TrendingUp;
    default:
      return AlertTriangle;
  }
};

const getAlertVariant = (type: Alert['type']) => {
  switch (type) {
    case 'warning':
      return 'warning';
    case 'danger':
      return 'danger';
    case 'info':
      return 'info';
    case 'success':
      return 'success';
    default:
      return 'info';
  }
};

export function AlertsPanel({ language, className }: AlertsPanelProps) {
  const translations = {
    en: {
      title: 'Recent Alerts & Notifications',
      viewAll: 'View All',
      noAlerts: 'No new alerts'
    },
    hi: {
      title: 'हाल की अलर्ट और सूचनाएं',
      viewAll: 'सभी देखें',
      noAlerts: 'कोई नई अलर्ट नहीं'
    }
  };

  const t = translations[language];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{t.title}</CardTitle>
          <Button variant="ghost" size="sm" className="text-primary">
            <Eye className="w-4 h-4 mr-1" />
            {t.viewAll}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockAlerts.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">
            {t.noAlerts}
          </p>
        ) : (
          mockAlerts.slice(0, 4).map((alert) => {
            const Icon = getAlertIcon(alert.type);
            const variant = getAlertVariant(alert.type);
            
            return (
              <div
                key={alert.id}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg border transition-colors hover:bg-muted/50",
                  alert.urgent && "border-l-4 border-l-status-warning"
                )}
              >
                <div className="flex-shrink-0">
                  <div className={cn(
                    "p-2 rounded-lg",
                    variant === 'warning' && "bg-yellow-100",
                    variant === 'danger' && "bg-red-100", 
                    variant === 'info' && "bg-blue-100",
                    variant === 'success' && "bg-green-100"
                  )}>
                    <Icon className={cn(
                      "h-4 w-4",
                      variant === 'warning' && "text-yellow-700",
                      variant === 'danger' && "text-red-700",
                      variant === 'info' && "text-blue-700", 
                      variant === 'success' && "text-green-700"
                    )} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {language === 'hi' ? alert.titleHi : alert.title}
                        {alert.urgent && (
                          <Badge variant="destructive" className="ml-2 text-xs">
                            Urgent
                          </Badge>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'hi' ? alert.descriptionHi : alert.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {alert.timestamp}
                      </p>
                    </div>
                  </div>
                  
                  {alert.action && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 h-8"
                      onClick={alert.action.onClick}
                    >
                      {language === 'hi' ? alert.action.labelHi : alert.action.label}
                    </Button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}