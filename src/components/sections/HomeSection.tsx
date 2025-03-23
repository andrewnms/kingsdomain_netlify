export const HomeSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl cyber-heading">
          <span className="block sm:inline">BIG3.STARTUP.</span>
          <span className="block sm:inline">SHOWDOWN</span>
        </h1>
        
        <div className="space-y-8">
          <div className="bg-cyber-black/50 p-8 border-l-4 border-cyber-purple backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-cyber-pink">MISSION BRIEFING</h2>
            <p className="text-lg text-cyber-green">
              Three elite institutions. One ultimate challenge. Your mission: 
              Create something amazing. The future begins here.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 md:px-8">
            <div className="flex-1 max-w-md bg-cyber-black/50 p-8 border-2 border-cyber-blue hover:border-cyber-purple transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-cyber-blue text-xl mb-4">PRIZE POOL</h3>
              <ul className="space-y-2">
                <li>💰 $2,000 in Google Cloud credits</li>
                <li>🚀 Google Manila HQ Tour</li>
                <li>🌊 GOAB Pitch Opportunity</li>
                <li>✨ [Maya prizes to be added here]</li>
              </ul>
            </div>

            <div className="flex-1 max-w-md bg-cyber-black/50 p-8 border-2 border-cyber-green hover:border-cyber-pink transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-cyber-green text-xl mb-4">DATE & LOCATION</h3>
              <p>🗓️ Sunday, April 6, 2025 • 8:00 AM - 2:00 PM</p>
              <p>📍 Location: <a href="https://maps.app.goo.gl/tYB8PwvDEUpK2p5h6" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-cyber-pink transition-colors">Maya (Launchpad Building, Sheridan, Mandaluyong)</a></p>
            </div>
          </div>

          <div className="mt-16 mb-16">
            <h3 className="text-xl text-cyber-secondary mb-8">BATTALIONS</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 p-4 bg-white/5 border-2 border-cyber-tertiary hover:border-cyber-secondary transition-all duration-300 rounded-lg flex items-center justify-center">
                  <img src="/lovable-uploads/c218cced-590c-4b4a-bfe1-cc3a954e30ae.png" alt="Ateneo" className="w-full h-auto object-contain p-4" />
                </div>
                <span className="text-cyber-tertiary">Ateneo</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 p-4 bg-white/5 border-2 border-cyber-tertiary hover:border-cyber-secondary transition-all duration-300 rounded-lg flex items-center justify-center">
                  <img src="/lovable-uploads/0b03b29b-b572-45ca-8efb-7bece6105fa0.png" alt="La Salle" className="w-full h-auto object-contain p-4" />
                </div>
                <span className="text-cyber-tertiary">La Salle</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 p-4 bg-white/5 border-2 border-cyber-tertiary hover:border-cyber-secondary transition-all duration-300 rounded-lg flex items-center justify-center">
                  <img src="/lovable-uploads/a6694190-1ad9-4b9a-86f1-f7d57675c295.png" alt="UP Diliman" className="w-full h-auto object-contain p-4" />
                </div>
                <span className="text-cyber-tertiary">UP Diliman</span>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-32 min-h-[50vh] flex flex-col justify-center">
            <h3 className="text-xl text-cyber-secondary mb-8">POWERED BY</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 p-4 bg-white/5 border-2 border-cyber-tertiary hover:border-cyber-secondary transition-all duration-300 rounded-lg flex items-center justify-center">
                  <img src="/google.png" alt="Google" className="w-full h-auto object-contain" />
                </div>
                <span className="text-cyber-tertiary">Google</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 p-4 bg-white/5 border-2 border-cyber-tertiary hover:border-cyber-secondary transition-all duration-300 rounded-lg flex items-center justify-center">
                  <img src="/GOAB.png" alt="Geeks On A Beach" className="w-full h-auto object-contain" />
                </div>
                <span className="text-cyber-tertiary">Geeks On A Beach</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-48 h-48 p-4 bg-white/5 border-2 border-cyber-tertiary hover:border-cyber-secondary transition-all duration-300 rounded-lg flex items-center justify-center">
                  <img src="/MAYA.png" alt="Maya" className="w-full h-auto object-contain" />
                </div>
                <span className="text-cyber-tertiary">Maya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};