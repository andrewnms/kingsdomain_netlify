export const RulesSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h2 className="cyber-heading">OPERATION PROTOCOLS</h2>
        
        <div className="cyber-grid">
          {[
            {
              title: "TEAM COMPOSITION",
              content: "3-5 operatives per team suggested, but not a hard limit."
            },
            {
              title: "CLEARANCE",
              content: "Limited to enrolled agents from UPD, DLSU, and ATENEO"
            },
            {
              title: "AIM",
              content: "Propose the best startup idea for the Philippine market."
            },
            {
              title: "WINNING CRITERIA",
              content: "Judging will be based on addressable market size, likelihood of success, progress to date, pitch quality, and performance during Q&A."
            },
            {
              title: "FORMAT",
              content: "In Round 1, teams have 90 seconds to pitch their ideas, with the top 10 advancing to Round 2, where each team gets 5 minutes (about 2 minutes for demo and 3 minutes for Q&A)."
            },
            {
              title: "TIMELINE",
              content: "Projects may vary in duration, from a weekend hackathon to a term project, but should ideally be less than one year old."
            }
          ].map((rule, index) => (
            <div 
              key={index}
              className="bg-cyber-black/50 p-6 border-2 border-cyber-red hover:border-cyber-blue transition-colors duration-300"
            >
              <h3 className="text-cyber-red text-xl mb-4">{rule.title}</h3>
              <p>{rule.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};