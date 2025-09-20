import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import pages
import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import Soil from "./pages/Soil";
import PlantDisease from "./pages/PlantDisease";
import CropPrediction from "./pages/CropPrediction";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// Import layout components
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Language } from "./components/LanguageToggle";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('agricultural-portal-language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('agricultural-portal-language', newLanguage);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <Header
              language={language}
              onLanguageChange={handleLanguageChange}
              isMobileMenuOpen={isMobileMenuOpen}
              onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isMobile={isMobile}
            />

            {/* Main layout */}
            <div className="flex flex-1 overflow-hidden">
              {/* Desktop sidebar navigation */}
              {!isMobile && (
                <Navigation language={language} />
              )}

              {/* Mobile navigation overlay */}
              {isMobile && isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                  <div className="fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-border">
                    <Navigation language={language} />
                  </div>
                </div>
              )}

              {/* Main content */}
              <main className="flex-1 overflow-auto">
                <div className={`${isMobile ? 'pb-20' : ''}`}>
                  <Routes>
                    <Route path="/" element={<Dashboard language={language} />} />
                    <Route path="/crops" element={<Crops language={language} />} />
                    <Route path="/soil" element={<Soil language={language} />} />
                    <Route path="/plant-disease" element={<PlantDisease language={language} />} />
                    <Route path="/crop-prediction" element={<CropPrediction language={language} />} />
                    <Route path="/admin" element={<Admin language={language} />} />
                    <Route path="/settings" element={<Settings language={language} />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
            </div>

            {/* Mobile bottom navigation */}
            {isMobile && (
              <Navigation language={language} isMobile={true} />
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
