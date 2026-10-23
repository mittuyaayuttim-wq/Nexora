import React from 'react';
import { AppProvider } from './context/AppContext';
import { FuturisticBackground } from './components/background/FuturisticBackground';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { IdeasExplorer } from './components/ideas/IdeasExplorer';
import { StorageStatusBanner } from './components/status/StorageStatusBanner';
import { AboutSection } from './components/about/AboutSection';
import { Footer } from './components/layout/Footer';
import { IdeaDetailModal } from './components/modals/IdeaDetailModal';
import { CreateIdeaModal } from './components/modals/CreateIdeaModal';
import { AuthModal } from './components/modals/AuthModal';
import { ProfileDrawer } from './components/modals/ProfileDrawer';
import { ShareModal } from './components/modals/ShareModal';
import { ToastContainer } from './components/ui/Toast';

const MainContent: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#00FF9D]/20 selection:text-[#00FF9D]">
      {/* Interactive Futuristic Animated Canvas & Ambient Background */}
      <FuturisticBackground />

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with Interactive 3D Nexora Core */}
        <main>
          <HeroSection />

          {/* Storage & Cloud Sync Status (Transparency) */}
          <StorageStatusBanner />

          {/* Ideas Explorer (Search, Categories, Tabs, Asymmetric Bento Grid) */}
          <IdeasExplorer />

          {/* About & Community Section */}
          <AboutSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals, Drawers & Feedback Overlays */}
      <IdeaDetailModal />
      <CreateIdeaModal />
      <AuthModal />
      <ProfileDrawer />
      <ShareModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
