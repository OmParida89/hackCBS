import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import GlimpsesSection from './components/GlimpsesSection';
import ThemesSection from './components/ThemesSection';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

function App() {
  useEffect(() => {
    // Initialize AOS after React components mount
    const timer = setTimeout(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
          mirror: true
        });
        window.AOS.refresh();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lgx-container">
      <Navbar />
      <main>
        <HeroBanner />
        <AboutSection />
        <StatsSection />
        <GlimpsesSection />
        <ThemesSection />
        <PrizesSection />
        <SponsorsSection />
        <TeamSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
