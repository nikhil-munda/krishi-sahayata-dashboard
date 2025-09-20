import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, AlertTriangle, Activity, RefreshCw } from 'lucide-react';
import { KpiCard } from '@/components/KpiCard';

interface AdminProps {
  language: 'en' | 'hi';
}

export default function Admin({ language }: AdminProps) {
  const translations = {
    en: {
      title: 'Admin Dashboard',
      subtitle: 'System overview and management',
      farmersOnboarded: 'Farmers Onboarded',
      modelsActive: 'ML Models Active',
      alertsTriggered: 'Alerts Triggered',
      systemUptime: 'System Uptime',
      modelManagement: 'Model Management',
      currentVersion: 'Current Version',
      lastRetrain: 'Last Retrained',
      accuracy: 'Model Accuracy',
      triggerRetrain: 'Trigger Retrain',
      systemStats: 'System Statistics',
      recentActivity: 'Recent System Activity'
    },
    hi: {
      title: 'प्रशासन डैशबोर्ड',
      subtitle: 'सिस्टम अवलोकन और प्रबंधन',
      farmersOnboarded: 'पंजीकृत किसान',
      modelsActive: 'सक्रिय ML मॉडल',
      alertsTriggered: 'भेजी गई अलर्ट',
      systemUptime: 'सिस्टम अपटाइम',
      modelManagement: 'मॉडल प्रबंधन',
      currentVersion: 'वर्तमान संस्करण',
      lastRetrain: 'अंतिम पुनः प्रशिक्षण',
      accuracy: 'मॉडल सटीकता',
      triggerRetrain: 'पुनः प्रशिक्षण शुरू करें',
      systemStats: 'सिस्टम आंकड़े',
      recentActivity: 'हाल की सिस्टम गतिविधि'
    }
  };

  const t = translations[language];

  const recentActivities = [
    {
      id: '1',
      action: 'Crop prediction model updated',
      actionHi: 'फसल पूर्वानुमान मॉडल अपडेट हुआ',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      id: '2',
      action: 'High irrigation alerts sent to 45 farmers',
      actionHi: '45 किसानों को सिंचाई अलर्ट भेजे गए',
      timestamp: '4 hours ago',
      status: 'info'
    },
    {
      id: '3',
      action: 'Disease detection accuracy improved to 94.2%',
      actionHi: 'रोग पहचान सटीकता 94.2% तक सुधारी गई',
      timestamp: '1 day ago',
      status: 'success'
    }
  ];

  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          {t.title}
        </h1>
        <p className="text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      {/* System KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title={t.farmersOnboarded}
          value="2,845"
          icon={Users}
          trend="up"
          trendValue="+12.5%"
        />
        
        <KpiCard
          title={t.modelsActive}
          value="5"
          subtitle="All running normally"
          icon={BarChart3}
        />
        
        <KpiCard
          title={t.alertsTriggered}
          value="128"
          subtitle="Today"
          icon={AlertTriangle}
          trend="up"
          trendValue="+8"
        />
        
        <KpiCard
          title={t.systemUptime}
          value="99.9%"
          subtitle="Last 30 days"
          icon={Activity}
          trend="up"
          trendValue="Excellent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Model Management */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              {t.modelManagement}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">{t.currentVersion}</p>
                <p className="font-semibold">v2.4.1</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.lastRetrain}</p>
                <p className="font-semibold">Oct 15, 2024</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.accuracy}</p>
                <p className="font-semibold text-green-600">94.2%</p>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <Button className="w-full touch-button">
                <RefreshCw className="h-4 w-4 mr-2" />
                {t.triggerRetrain}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'info' ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {language === 'hi' ? activity.actionHi : activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.systemStats}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">15,234</div>
              <p className="text-sm text-muted-foreground">
                {language === 'hi' ? 'कुल पूर्वानुमान' : 'Total Predictions'}
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">892</div>
              <p className="text-sm text-muted-foreground">
                {language === 'hi' ? 'रोग स्कैन' : 'Disease Scans'}
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">3,456</div>
              <p className="text-sm text-muted-foreground">
                {language === 'hi' ? 'भेजी गई सलाह' : 'Advisories Sent'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}