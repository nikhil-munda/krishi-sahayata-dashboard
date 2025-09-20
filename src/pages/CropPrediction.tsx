import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Calendar, MapPin, Droplet, Sun } from 'lucide-react';

interface CropPredictionProps {
  language: 'en' | 'hi';
}

export default function CropPrediction({ language }: CropPredictionProps) {
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const translations = {
    en: {
      title: 'Crop Yield Prediction',
      subtitle: 'AI-powered yield forecasting and recommendations',
      inputPanel: 'Prediction Input',
      results: 'Prediction Results',
      selectField: 'Select Field',
      selectCrop: 'Select Crop',
      sowingDate: 'Sowing Date',
      lookAhead: 'Prediction Period',
      runPrediction: 'Run Prediction',
      predictedYield: 'Predicted Yield',
      confidence: 'Confidence Interval',
      explanation: 'Key Factors',
      recommendation: 'Recommendations',
      applyRecommendation: 'Apply Recommendation',
      loading: 'Generating prediction...'
    },
    hi: {
      title: 'फसल उत्पादन पूर्वानुमान',
      subtitle: 'AI-संचालित उपज पूर्वानुमान और सिफारिशें',
      inputPanel: 'पूर्वानुमान इनपुट',
      results: 'पूर्वानुमान परिणाम',
      selectField: 'खेत चुनें',
      selectCrop: 'फसल चुनें',
      sowingDate: 'बुवाई की तारीख',
      lookAhead: 'पूर्वानुमान अवधि',
      runPrediction: 'पूर्वानुमान चलाएं',
      predictedYield: 'अनुमानित उत्पादन',
      confidence: 'विश्वसनीयता अंतराल',
      explanation: 'मुख्य कारक',
      recommendation: 'सिफारिशें',
      applyRecommendation: 'सिफारिश लागू करें',
      loading: 'पूर्वानुमान तैयार हो रहा है...'
    }
  };

  const t = translations[language];

  const handleRunPrediction = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setPrediction({
        yield: '4.2',
        unit: 't/ha',
        confidence: '±0.3',
        factors: [
          {
            factor: 'Weather Pattern',
            factorHi: 'मौसम पैटर्न',
            impact: '+15%',
            description: 'Favorable rainfall expected',
            descriptionHi: 'अनुकूल वर्षा की उम्मीद'
          },
          {
            factor: 'Soil Moisture',
            factorHi: 'मिट्टी की नमी',
            impact: '-5%',
            description: 'Current moisture levels are low',
            descriptionHi: 'वर्तमान नमी का स्तर कम है'
          },
          {
            factor: 'Market Conditions',
            factorHi: 'बाज़ार की स्थिति',
            impact: '+8%',
            description: 'Strong demand forecast',
            descriptionHi: 'मजबूत मांग का पूर्वानुमान'
          }
        ],
        recommendations: [
          {
            action: 'Increase irrigation frequency',
            actionHi: 'सिंचाई की आवृत्ति बढ़ाएं',
            timing: 'Next 2 weeks',
            timingHi: 'अगले 2 सप्ताह'
          },
          {
            action: 'Apply nitrogen fertilizer',
            actionHi: 'नाइट्रोजन उर्वरक डालें',
            timing: 'Vegetative stage',
            timingHi: 'वानस्पतिक अवस्था'
          }
        ]
      });
      setIsLoading(false);
    }, 2000);
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Input panel */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.inputPanel}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.selectField}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Field A - 2.5 hectares" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="field-a">Field A - 2.5 hectares</SelectItem>
                    <SelectItem value="field-b">Field B - 1.8 hectares</SelectItem>
                    <SelectItem value="field-c">Field C - 3.1 hectares</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.selectCrop}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Wheat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.sowingDate}
                </label>
                <input
                  type="date"
                  defaultValue="2024-11-15"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.lookAhead}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="3 months" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">1 month</SelectItem>
                    <SelectItem value="3months">3 months</SelectItem>
                    <SelectItem value="6months">6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleRunPrediction}
                disabled={isLoading}
                className="w-full touch-button"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                {isLoading ? t.loading : t.runPrediction}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Results */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.results}</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center space-y-4">
                    <div className="animate-spin mx-auto h-8 w-8 border-2 border-primary border-t-transparent rounded-full"></div>
                    <p className="text-muted-foreground">{t.loading}</p>
                  </div>
                </div>
              ) : prediction ? (
                <div className="space-y-6">
                  {/* Prediction result */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm text-green-600 font-medium">
                              {t.predictedYield}
                            </p>
                            <p className="text-2xl font-bold text-green-800">
                              {prediction.yield} {prediction.unit}
                            </p>
                            <p className="text-sm text-green-600">
                              {t.confidence}: {prediction.confidence}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-800 mb-3">
                          {t.explanation}
                        </h4>
                        <div className="space-y-2">
                          {prediction.factors.map((factor: any, index: number) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-blue-700">
                                {language === 'hi' ? factor.factorHi : factor.factor}
                              </span>
                              <span className={`text-sm font-medium ${
                                factor.impact.startsWith('+') ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {factor.impact}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recommendations */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{t.recommendation}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {prediction.recommendations.map((rec: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <p className="font-medium text-foreground">
                                {language === 'hi' ? rec.actionHi : rec.action}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {language === 'hi' ? rec.timingHi : rec.timing}
                              </p>
                            </div>
                            <Button size="sm" variant="outline">
                              {t.applyRecommendation}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-12">
                  <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    {language === 'hi' 
                      ? 'फसल का पूर्वानुमान चलाएं'
                      : 'Run Crop Prediction'
                    }
                  </p>
                  <p className="text-muted-foreground">
                    {language === 'hi'
                      ? 'बाईं ओर के फॉर्म को भरें और पूर्वानुमान बटन दबाएं'
                      : 'Fill the form on the left and click run prediction'
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}