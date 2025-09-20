import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wheat, Search, Filter, TrendingUp } from 'lucide-react';

interface CropsProps {
  language: 'en' | 'hi';
}

const mockCrops = [
  {
    id: '1',
    name: 'Wheat',
    nameHi: 'गेहूं',
    season: 'Winter (Rabi)',
    seasonHi: 'शीतकालीन (रबी)',
    yield: '4.2 t/ha',
    sowingWindow: 'Nov-Dec',
    status: 'In Season',
    statusHi: 'सत्र में'
  },
  {
    id: '2', 
    name: 'Rice',
    nameHi: 'चावल',
    season: 'Summer (Kharif)',
    seasonHi: 'ग्रीष्मकालीन (खरीफ)',
    yield: '6.5 t/ha',
    sowingWindow: 'Jun-Jul',
    status: 'Off Season',
    statusHi: 'सत्र समाप्त'
  },
  {
    id: '3',
    name: 'Maize',
    nameHi: 'मक्का',
    season: 'Both Seasons',
    seasonHi: 'दोनों सत्र',
    yield: '5.1 t/ha',
    sowingWindow: 'Apr-May, Nov-Dec',
    status: 'Available',
    statusHi: 'उपलब्ध'
  }
];

export default function Crops({ language }: CropsProps) {
  const translations = {
    en: {
      title: 'Crop Management',
      subtitle: 'Browse crop varieties and seasonal information',
      search: 'Search crops...',
      filter: 'Filter by Season',
      simulate: 'Simulate Prediction',
      viewDetails: 'View Details',
      typicalYield: 'Typical Yield',
      sowingWindow: 'Sowing Window'
    },
    hi: {
      title: 'फसल प्रबंधन',
      subtitle: 'फसल की किस्में और मौसमी जानकारी देखें',
      search: 'फसल खोजें...',
      filter: 'सत्र के अनुसार छांटें',
      simulate: 'पूर्वानुमान करें',
      viewDetails: 'विवरण देखें',
      typicalYield: 'सामान्य उत्पादन',
      sowingWindow: 'बुवाई का समय'
    }
  };

  const t = translations[language];

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

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder={t.search}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="touch-button">
          <Filter className="h-4 w-4 mr-2" />
          {t.filter}
        </Button>
      </div>

      {/* Crops grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCrops.map((crop) => (
          <Card key={crop.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wheat className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {language === 'hi' ? crop.nameHi : crop.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {language === 'hi' ? crop.seasonHi : crop.season}
                    </p>
                  </div>
                </div>
                <Badge variant={crop.status === 'In Season' ? 'default' : 'secondary'}>
                  {language === 'hi' ? crop.statusHi : crop.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t.typicalYield}</p>
                  <p className="font-semibold">{crop.yield}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.sowingWindow}</p>
                  <p className="font-semibold">{crop.sowingWindow}</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  {t.viewDetails}
                </Button>
                <Button size="sm" className="flex-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {t.simulate}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}