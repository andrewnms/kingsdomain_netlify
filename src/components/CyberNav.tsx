import { useState } from 'react';
import { Menu } from 'lucide-react';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'rules', label: 'RULES' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'judges', label: 'JUDGES' },
];

interface CyberNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const CyberNav = ({ activeSection, onSectionChange }: CyberNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 border-b-2 border-cyber-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-cyber-accent font-bold text-xl animate-neon">BIG3.STARTUP.SHOWDOWN</span>
          
          <button 
            className="md:hidden cyber-button !p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`cyber-button ${
                  activeSection === section.id ? 'bg-cyber-accent/20' : ''
                }`}
                onClick={() => onSectionChange(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`cyber-button ${
                    activeSection === section.id ? 'bg-cyber-accent/20' : ''
                  }`}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};