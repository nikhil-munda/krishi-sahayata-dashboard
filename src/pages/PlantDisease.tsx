import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, Book, Phone, AlertTriangle } from 'lucide-react';

interface PlantDiseaseProps {
  language: 'en' | 'hi';
}

const mockDiseases = [
  {
    id: '1',
    name: 'Leaf Rust',
    nameHi: 'पत्ती का जंग',
    crop: 'Wheat',
    cropHi: 'गेहूं',
    severity: 'Medium',
    severityHi: 'मध्यम',
    description: 'Orange pustules on leaf surface',
    descriptionHi: 'पत्ती की सतह पर नारंगी दाने'
  },
  {
    id: '2',
    name: 'Blast Disease',
    nameHi: 'ब्लास्ट रोग',
    crop: 'Rice',
    cropHi: 'चावल',
    severity: 'High',
    severityHi: 'उच्च',
    description: 'Diamond-shaped lesions on leaves',
    descriptionHi: 'पत्तियों पर हीरे के आकार के धब्बे'
  }
];

export default function PlantDisease({ language }: PlantDiseaseProps) {
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const translations = {
    en: {
      title: 'Plant Disease Detection',
      subtitle: 'Identify and treat plant diseases using AI-powered image analysis',
      scanImage: 'Scan Plant Image',
      uploadImage: 'Upload from Gallery',
      takePhoto: 'Take Photo',
      diseaseLibrary: 'Disease Library',
      recentScans: 'Recent Scans',
      consultExpert: 'Consult Expert',
      treatment: 'View Treatment',
      confidence: 'Confidence',
      scanning: 'Analyzing image...',
      disease: 'Disease Detected',
      recommendation: 'Treatment Recommendation'
    },
    hi: {
      title: 'पौधों की बीमारी की पहचान',
      subtitle: 'AI-संचालित छवि विश्लेषण का उपयोग करके पौधों की बीमारियों की पहचान और उपचार करें',
      scanImage: 'पौधे की छवि स्कैन करें',
      uploadImage: 'गैलरी से अपलोड करें',
      takePhoto: 'फोटो लें',
      diseaseLibrary: 'रोग पुस्तकालय',
      recentScans: 'हाल के स्कैन',
      consultExpert: 'विशेषज्ञ से सलाह लें',
      treatment: 'उपचार देखें',
      confidence: 'विश्वसनीयता',
      scanning: 'छवि का विश्लेषण हो रहा है...',
      disease: 'रोग की पहचान',
      recommendation: 'उपचार की सिफारिश'
    }
  };

  const t = translations[language];

  const handleImageUpload = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResult({
        disease: 'Leaf Rust',
        diseaseHi: 'पत्ती का जंग',
        confidence: 87,
        treatment: 'Apply fungicide spray every 10 days',
        treatmentHi: 'हर 10 दिन में कवकनाशी स्प्रे करें'
      });
      setIsScanning(false);
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'status-danger';
      case 'Medium':
        return 'status-warning';
      case 'Low':
        return 'status-success';
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Image scanning */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image upload area */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.scanImage}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {isScanning ? (
                  <div className="space-y-4">
                    <div className="animate-spin mx-auto h-8 w-8 border-2 border-primary border-t-transparent rounded-full"></div>
                    <p className="text-muted-foreground">{t.scanning}</p>
                  </div>
                ) : scanResult ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-green-600" />
                        <h3 className="font-semibold text-green-800">
                          {t.disease}
                        </h3>
                      </div>
                      <p className="font-medium text-green-700">
                        {language === 'hi' ? scanResult.diseaseHi : scanResult.disease}
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        {t.confidence}: {scanResult.confidence}%
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        {t.recommendation}
                      </h4>
                      <p className="text-blue-700">
                        {language === 'hi' ? scanResult.treatmentHi : scanResult.treatment}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button onClick={() => setScanResult(null)} variant="outline">
                        Scan Another
                      </Button>
                      <Button>
                        <Phone className="h-4 w-4 mr-2" />
                        {t.consultExpert}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium text-foreground mb-2">
                        {language === 'hi' 
                          ? 'पौधे की पत्ती या तने की फोटो लें'
                          : 'Take a photo of plant leaves or stems'
                        }
                      </p>
                      <p className="text-muted-foreground">
                        {language === 'hi'
                          ? 'बेहतर परिणामों के लिए उज्ज्वल प्रकाश में स्पष्ट फोटो लें'
                          : 'Take a clear photo in good lighting for better results'
                        }
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={handleImageUpload}
                        className="flex-1 touch-button"
                      >
                        <Camera className="h-5 w-5 mr-2" />
                        {t.takePhoto}
                      </Button>
                      <Button 
                        onClick={handleImageUpload}
                        variant="outline" 
                        className="flex-1 touch-button"
                      >
                        <Upload className="h-5 w-5 mr-2" />
                        {t.uploadImage}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Disease library */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Book className="h-5 w-5" />
                {t.diseaseLibrary}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDiseases.map((disease) => (
                  <div key={disease.id} className="border border-border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">
                          {language === 'hi' ? disease.nameHi : disease.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'hi' ? disease.cropHi : disease.crop}
                        </p>
                      </div>
                      <Badge className={`status-chip ${getSeverityColor(disease.severity)}`}>
                        {language === 'hi' ? disease.severityHi : disease.severity}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'hi' ? disease.descriptionHi : disease.description}
                    </p>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      {t.treatment}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}