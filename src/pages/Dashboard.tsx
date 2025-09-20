import React from 'react';
import { TrendingUp, Droplet, DollarSign, Activity } from 'lucide-react';
import { KpiCard } from '@/components/KpiCard';
import { CropTimeline } from '@/components/CropTimeline';
import { AlertsPanel } from '@/components/AlertsPanel';
import { QuickActions } from '@/components/QuickActions';

interface DashboardProps {
  language: 'en' | 'hi';
}

export default function Dashboard({ language }: DashboardProps) {
  const translations = {
    en: {
      title: 'Dashboard Overview',
      kpis: {
        yield: 'Predicted Yield',
        action: 'Next Action',
        water: 'Soil Moisture',
        price: 'Market Price'
      },
      values: {
        yield: '4.2',
        yieldUnit: 't/ha',
        yieldSubtitle: 'Wheat - Field A',
        action: 'Irrigate Field B',
        actionSubtitle: 'Recommended today',
        water: '35%',
        waterSubtitle: 'Average across fields',
        price: '₹22,500',
        priceUnit: '/tonne',
        priceSubtitle: 'Wheat (APMCs avg)'
      }
    },
    hi: {
      title: 'डैशबोर्ड अवलोकन',
      kpis: {
        yield: 'अनुमानित उत्पादन',
        action: 'अगली कार्य',
        water: 'मिट्टी की नमी',
        price: 'बाज़ार मूल्य'
      },
      values: {
        yield: '4.2',
        yieldUnit: 'टन/हेक्टेयर',
        yieldSubtitle: 'गेहूं - खेत A',
        action: 'खेत B की सिंचाई',
        actionSubtitle: 'आज सुझाव',
        water: '35%',
        waterSubtitle: 'सभी खेतों का औसत',
        price: '₹22,500',
        priceUnit: '/टन',
        priceSubtitle: 'गेहूं (APMC औसत)'
      }
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
          {language === 'hi' 
            ? 'आपकी कृषि गतिविधियों का सारांश'
            : 'Overview of your agricultural activities'
          }
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title={t.kpis.yield}
          value={t.values.yield}
          unit={t.values.yieldUnit}
          subtitle={t.values.yieldSubtitle}
          icon={TrendingUp}
          trend="up"
          trendValue="+8.5%"
        />
        
        <KpiCard
          title={t.kpis.action}
          value={t.values.action}
          subtitle={t.values.actionSubtitle}
          icon={Activity}
        />
        
        <KpiCard
          title={t.kpis.water}
          value={t.values.water}
          subtitle={t.values.waterSubtitle}
          icon={Droplet}
          trend="down"
          trendValue="-5%"
        />
        
        <KpiCard
          title={t.kpis.price}
          value={t.values.price}
          unit={t.values.priceUnit}
          subtitle={t.values.priceSubtitle}
          icon={DollarSign}
          trend="up"
          trendValue="+2.1%"
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Crop timeline and quick actions */}
        <div className="lg:col-span-2 space-y-6">
          <CropTimeline
            language={language}
            cropName="Wheat"
            cropNameHi="गेहूं"
          />
          
          <QuickActions language={language} />
        </div>

        {/* Right column - Alerts */}
        <div className="lg:col-span-1">
          <AlertsPanel language={language} />
        </div>
      </div>
    </div>
  );
}