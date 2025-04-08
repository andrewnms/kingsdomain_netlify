export const WinnersSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="cyber-heading mb-8">VICTORIOUS CHAMPIONS</h2>
        
        {/* Hero Image */}
        <div className="mb-12 w-full h-96 bg-cyber-black/70 border-2 border-cyber-purple overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-cyber-purple opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cyber-black to-transparent">
            <h3 className="text-3xl font-bold text-cyber-pink">BIG3 STARTUP SHOWDOWN CHAMPIONS</h3>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="bg-cyber-black/50 p-8 border-l-4 border-cyber-purple backdrop-blur-sm mb-12">
          <p className="text-lg text-cyber-green mb-6">
            After intense competition and deliberation, three exceptional startups have emerged victorious from the 
            BIG3 STARTUP SHOWDOWN. These innovative ventures represent the pinnacle of Philippine startup talent, 
            showcasing groundbreaking solutions with tremendous market potential.
          </p>
        </div>
        
        {/* Winners List */}
        <div className="space-y-8 mb-16">
          {[
            {
              name: "Little Branch",
              website: "littlebranchph.com",
              url: "https://littlebranchph.com",
              description: "Revolutionizing how parents discover and book kid-friendly activities, connecting families with quality experiences to foster childhood development."
            },
            {
              name: "Venyu",
              website: "venyu.ph",
              url: "https://venyu.ph",
              description: "Streamlining sports venue discovery and booking, empowering athletes and organizers to find and secure perfect playing spaces instantly."
            },
            {
              name: "Quasar",
              website: "quasar.com.ph", 
              url: "https://quasar.com.ph",
              description: "Transforming loan processing through automation, dramatically reducing approval times and democratizing access to financial services."
=======
            }
          ].map((winner, index) => (
            <div 
              key={index}
              className="bg-cyber-black/50 p-6 border-2 border-cyber-purple hover:border-cyber-pink transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-32 h-32 bg-cyber-black/70 border-2 border-cyber-secondary flex items-center justify-center overflow-hidden shrink-0">
                  <a href={winner.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full flex items-center justify-center text-cyber-secondary hover:text-cyber-pink transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-cyber-purple text-2xl mb-2">{winner.name}</h3>
                  <a 
                    href={winner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyber-accent hover:text-cyber-pink transition-colors block mb-4"
                  >
                    {winner.website}
                  </a>
                  <p className="text-cyber-green">{winner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-cyber-black/50 p-8 border-r-4 border-cyber-accent backdrop-blur-sm mb-16">
          <h4 className="text-2xl text-cyber-accent mb-4">JOIN THE NEXT MISSION</h4>
          <p className="text-lg">
            The next BIG3 STARTUP SHOWDOWN is coming soon. Start building your team, refine your concept, 
            and prepare to take your place among the elite ranks of Philippine startup innovation.
          </p>
        </div>
      </div>
    </div>
  );
};