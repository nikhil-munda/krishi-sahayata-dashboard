import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mountain, Droplet, TestTube, Calendar } from 'lucide-react';

interface SoilProps {
  language: 'en' | 'hi';
}

const mockFields = [
  {
    id: '1',
    name: 'Field A',
    nameHi: 'खेत A',
    area: '2.5 hectares',
    areaHi: '2.5 हेक्टेयर',
    ph: '6.8',
    moisture: '35%',
    lastTest: '15 Oct 2024',
    status: 'Good',
    statusHi: 'अच्छा'
  },
  {
    id: '2',
    name: 'Field B', 
    nameHi: 'खेत B',
    area: '1.8 hectares',
    areaHi: '1.8 हेक्टेयर',
    ph: '7.2',
    moisture: '22%',
    lastTest: '20 Sep 2024',
    status: 'Needs Water',
    statusHi: 'पानी चाहिए'
  },
  {
    id: '3',
    name: 'Field C',
    nameHi: 'खेत C',
    area: '3.1 hectares', 
    areaHi: '3.1 हेक्टेयर',
    ph: '6.5',
    moisture: '45%',
    lastTest: '5 Oct 2024',
    status: 'Optimal',
    statusHi: 'आदर्श'
  }
];

export default function Soil({ language }: SoilProps) {
  const translations = {
    en: {
      title: 'Soil Management',
      subtitle: 'Monitor soil health and nutrients across your fields',
      overview: 'Soil Health Overview',
      fieldList: 'Field List',
      requestTest: 'Request Soil Test',
      viewDetails: 'View Details',
      ph: 'pH Level',
      moisture: 'Moisture',
      lastTest: 'Last Test',
      area: 'Area',
      avgPh: 'Average pH',
      avgMoisture: 'Average Moisture',
      totalFields: 'Total Fields'
    },
    hi: {
      title: 'मिट्टी प्रबंधन',
      subtitle: 'अपने खेतों में मिट्टी का स्वास्थ्य और पोषक तत्व देखें',
      overview: 'मिट्टी स्वास्थ्य अवलोकन',
      fieldList: 'खेतों की सूची',
      requestTest: 'मिट्टी परीक्षण का अनुरोध',
      viewDetails: 'विवरण देखें',
      ph: 'पीएच स्तर',
      moisture: 'नमी',
      lastTest: 'पिछला परीक्षण',
      area: 'क्षेत्रफल',
      avgPh: 'औसत पीएच',
      avgMoisture: 'औसत नमी',
      totalFields: 'कुल खेत'
    }
  };

  const t = translations[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good':
      case 'Optimal':
        return 'status-success';
      case 'Needs Water':
        return 'status-warning';
      default:
        return 'status-info';
    }
  };

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

      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card className="kpi-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mountain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.totalFields}</p>
                <p className="text-xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TestTube className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.avgPh}</p>
                <p className="text-xl font-bold">6.8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Droplet className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.avgMoisture}</p>
                <p className="text-xl font-bold">34%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fields list */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{t.fieldList}</CardTitle>
            <Button className="touch-button">
              <TestTube className="h-4 w-4 mr-2" />
              {t.requestTest}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockFields.map((field) => (
              <Card key={field.id} className="border-l-4 border-l-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-semibold text-foreground">
                          {language === 'hi' ? field.nameHi : field.name}
                        </h3>
                        <Badge className={`status-chip ${getStatusColor(field.status)}`}>
                          {language === 'hi' ? field.statusHi : field.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">{t.area}</p>
                          <p className="font-semibold">
                            {language === 'hi' ? field.areaHi : field.area}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{t.ph}</p>
                          <p className="font-semibold">{field.ph}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{t.moisture}</p>
                          <p className="font-semibold">{field.moisture}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{t.lastTest}</p>
                          <p className="font-semibold">{field.lastTest}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="ml-4">
                      {t.viewDetails}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}