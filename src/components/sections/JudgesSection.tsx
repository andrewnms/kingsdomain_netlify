export const JudgesSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h2 className="cyber-heading mb-12">COMMAND CENTER</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl text-cyber-secondary mb-8">JUDGES</h3>
            {[
              {
                name: "Mitch Padua",
                title: "Chief Product Officer, Maya",
                bio: "Digital product innovator with experience in fintech solutions"
              },
              {
                name: "Albert Padin",
                title: "Chief Innovation Officer, Mwell",
                subtitle: "Cofounder, Symph",
                bio: "Tech entrepreneur focused on healthtech and innovation"
              },
              {
                name: "Jay Fajardo",
                title: "Director, Launch Garage",
                subtitle: "CEO, Proudcloud",
                bio: "Startup ecosystem builder and tech venture specialist"
              }
            ].map((judge, index) => (
              <div 
                key={index}
                className="bg-cyber-black/50 p-6 border-2 border-cyber-blue hover:border-cyber-green transition-colors duration-300 backdrop-blur-sm"
              >
                <h3 className="text-cyber-blue text-xl mb-2">{judge.name}</h3>
                <p className="text-cyber-green mb-1">{judge.title}</p>
                {judge.subtitle && <p className="text-cyber-green mb-2">{judge.subtitle}</p>}
                <p>{judge.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl text-cyber-secondary mb-8">JUDGING CRITERIA</h3>
            <div className="bg-cyber-black/50 p-8 border-2 border-cyber-yellow hover:border-cyber-orange transition-colors duration-300 h-full flex flex-col justify-center backdrop-blur-sm">
              <h3 className="text-cyber-yellow text-2xl mb-8 font-bold">The 10-Year Question</h3>
              <p className="text-xl mb-4">
                If invested today, which three startups are most likely to deliver the highest returns in 10 years?
              </p>
              <div className="mt-8">
                <div className="w-full h-48 flex items-center justify-center">
                  <img src="/chart-growth.svg" alt="Growth Chart" className="max-h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};