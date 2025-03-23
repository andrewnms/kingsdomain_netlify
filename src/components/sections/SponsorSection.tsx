export const SponsorSection = () => {
  // Placeholder for actual sponsor logos
  const sponsors = [
    { id: 1, name: 'Sponsor 1' },
    { id: 2, name: 'Sponsor 2' },
    { id: 3, name: 'Sponsor 3' },
    { id: 4, name: 'Sponsor 4' },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="cyber-heading">SPONSORS</h1>
        
        <div className="cyber-grid">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="aspect-square bg-cyber-black/50 p-6 
                         border-2 border-cyber-blue hover:border-cyber-purple 
                         transition-colors duration-300 backdrop-blur-sm animate-glow
                         flex items-center justify-center"
            >
              <div className="text-cyber-blue hover:text-cyber-purple transition-colors">
                {/* Replace this with actual logo later */}
                <div className="w-32 h-32 border-2 border-dashed border-current 
                              flex items-center justify-center text-sm">
                  Logo Placeholder
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};