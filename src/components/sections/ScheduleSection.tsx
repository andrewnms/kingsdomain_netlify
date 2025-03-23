export const ScheduleSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4 flex items-center">
      <div className="container mx-auto max-w-5xl py-12">
        <h2 className="cyber-heading">MISSION TIMELINE</h2>
        <h3 className="text-cyber-secondary text-xl mb-4">Sunday, April 06, 2025</h3>
        <h4 className="text-cyber-blue text-lg mb-8">Time: 08:00 - 14:00 • Expected Participants: 150</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            {
              time: "0800",
              title: "EVENT SETUP AND INGRESS",
              details: "Venue preparation and organization team setup"
            },
            {
              time: "0900",
              title: "STARTUP SCIENCE FAIR",
              details: "Showcase of ideas and networking opportunity"
            },
            {
              time: "1000",
              title: "EVENT LAYOUT SETUP CHANGE",
              details: "Transitioning venue for pitch competitions"
            },
            {
              time: "1015",
              title: "EVENT OPENING SPEECHES",
              details: "Welcome addresses from Professors & Maya representatives"
            },
            {
              time: "1030",
              title: "PITCHING COMPETITION ROUND 1",
              details: "90 seconds per startup × 30 startups"
            },
            {
              time: "1130",
              title: "PITCHING COMPETITION ROUND 2",
              details: "5 mins (~2 mins demo & ~3 mins Q&A) per startup × 10 startups"
            },
            {
              time: "1230",
              title: "AWARDING CEREMONY",
              details: "Recognition and prizes for winning teams"
            },
            {
              time: "1300",
              title: "LUNCH AND NETWORKING",
              details: "Refreshments and continued collaboration opportunities"
            },
            {
              time: "1400",
              title: "EVENT CLEANUP AND EGRESS",
              details: "Venue restoration and departure"
            }
          ].map((event, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 bg-cyber-black/50 p-3 border-l-4 border-cyber-green h-full hover:border-cyber-blue transition-colors duration-300 backdrop-blur-sm hover:bg-cyber-black/70"
            >
              <div className="text-cyber-green font-mono text-xl font-bold">{event.time}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                <p className="text-sm text-cyber-secondary">{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};