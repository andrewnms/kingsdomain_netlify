import { useState } from 'react';
import { CyberNav } from '../components/CyberNav';
import { HomeSection } from '../components/sections/HomeSection';
import { RulesSection } from '../components/sections/RulesSection';
import { ScheduleSection } from '../components/sections/ScheduleSection';
import { JudgesSection } from '../components/sections/JudgesSection';
import { SponsorSection } from '../components/sections/SponsorSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-cyber-black">
      <CyberNav 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className={`section-container ${activeSection === 'home' ? 'active' : ''}`}>
        <HomeSection />
      </div>
      
      <div className={`section-container ${activeSection === 'rules' ? 'active' : ''}`}>
        <RulesSection />
      </div>
      
      <div className={`section-container ${activeSection === 'schedule' ? 'active' : ''}`}>
        <ScheduleSection />
      </div>
      
      <div className={`section-container ${activeSection === 'judges' ? 'active' : ''}`}>
        <JudgesSection />
      </div>

      <div className={`section-container ${activeSection === 'sponsors' ? 'active' : ''}`}>
        <SponsorSection />
      </div>
    </div>
  );
};

export default Index;