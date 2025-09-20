import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe, 
  Smartphone, 
  Wifi, 
  HelpCircle,
  Download
} from 'lucide-react';

interface SettingsProps {
  language: 'en' | 'hi';
}

export default function Settings({ language }: SettingsProps) {
  const translations = {
    en: {
      title: 'Settings & Preferences',
      subtitle: 'Customize your agricultural portal experience',
      notifications: 'Notification Preferences',
      language: 'Language & Region',
      offline: 'Offline Sync',
      help: 'Help & Support',
      weatherAlerts: 'Weather Alerts',
      cropReminders: 'Crop Care Reminders',
      marketUpdates: 'Market Price Updates',
      systemAlerts: 'System Alerts',
      currentLanguage: 'Current Language',
      changeLanguage: 'Change Language',
      offlineMode: 'Enable Offline Mode',
      lastSync: 'Last Sync',
      syncNow: 'Sync Now',
      dataUsage: 'Data Usage',
      helpCenter: 'Help Center',
      tutorial: 'Tutorial',
      contactSupport: 'Contact Support',
      about: 'About',
      version: 'App Version',
      enabled: 'Enabled',
      disabled: 'Disabled'
    },
    hi: {
      title: 'सेटिंग्स और प्राथमिकताएं',
      subtitle: 'अपने कृषि पोर्टल अनुभव को अनुकूलित करें',
      notifications: 'सूचना प्राथमिकताएं',
      language: 'भाषा और क्षेत्र',
      offline: 'ऑफलाइन सिंक',
      help: 'सहायता और समर्थन',
      weatherAlerts: 'मौसम अलर्ट',
      cropReminders: 'फसल देखभाल रिमाइंडर',
      marketUpdates: 'बाज़ार मूल्य अपडेट',
      systemAlerts: 'सिस्टम अलर्ट',
      currentLanguage: 'वर्तमान भाषा',
      changeLanguage: 'भाषा बदलें',
      offlineMode: 'ऑफलाइन मोड सक्षम करें',
      lastSync: 'अंतिम सिंक',
      syncNow: 'अभी सिंक करें',
      dataUsage: 'डेटा उपयोग',
      helpCenter: 'सहायता केंद्र',
      tutorial: 'ट्यूटोरियल',
      contactSupport: 'समर्थन से संपर्क करें',
      about: 'के बारे में',
      version: 'ऐप संस्करण',
      enabled: 'सक्षम',
      disabled: 'निष्क्रिय'
    }
  };

  const t = translations[language];

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          {t.title}
        </h1>
        <p className="text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5" />
              {t.notifications}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.weatherAlerts}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? 'मौसम की चेतावनी और पूर्वानुमान प्राप्त करें'
                    : 'Receive weather warnings and forecasts'
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <Badge variant="secondary">{t.enabled}</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.cropReminders}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi'
                    ? 'सिंचाई और उर्वरक के रिमाइंडर'
                    : 'Irrigation and fertilizer reminders'
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <Badge variant="secondary">{t.enabled}</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.marketUpdates}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi'
                    ? 'दैनिक बाज़ार मूल्य और रुझान'
                    : 'Daily market prices and trends'
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch />
                <Badge variant="outline">{t.disabled}</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.systemAlerts}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi'
                    ? 'ऐप अपडेट और सिस्टम संदेश'
                    : 'App updates and system messages'
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <Badge variant="secondary">{t.enabled}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5" />
              {t.language}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.currentLanguage}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' ? 'हिंदी' : 'English'}
                </p>
              </div>
              <Button variant="outline" size="sm">
                {t.changeLanguage}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Offline Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Wifi className="h-5 w-5" />
              {t.offline}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.offlineMode}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi'
                    ? 'इंटरनेट के बिना मुख्य सुविधाओं का उपयोग करें'
                    : 'Use core features without internet connection'
                  }
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t">
              <div>
                <p className="text-sm text-muted-foreground">{t.lastSync}</p>
                <p className="font-semibold">2 hours ago</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.dataUsage}</p>
                <p className="font-semibold">45 MB</p>
              </div>
            </div>

            <Button variant="outline" className="w-full touch-button">
              <Download className="h-4 w-4 mr-2" />
              {t.syncNow}
            </Button>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              {t.help}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start touch-button">
              <HelpCircle className="h-4 w-4 mr-3" />
              {t.helpCenter}
            </Button>

            <Button variant="outline" className="w-full justify-start touch-button">
              <Smartphone className="h-4 w-4 mr-3" />
              {t.tutorial}
            </Button>

            <Button variant="outline" className="w-full justify-start touch-button">
              <Bell className="h-4 w-4 mr-3" />
              {t.contactSupport}
            </Button>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t.about}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t.version}</p>
                <p className="text-sm text-muted-foreground">1.2.4</p>
              </div>
              <Badge variant="secondary">Latest</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}