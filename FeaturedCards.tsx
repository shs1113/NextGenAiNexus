export default function FeaturedCards() {
  const featured = [
    {
      label: "NextGen AI Nexus",
      title: "NextGen Play Group Pro",
      desc: "Fun learning activities for kids"
    },
    {
      label: "NextGen AI Nexus",
      title: "AI Smart Studio",
      desc: "Premium creative AI toolkit"
    },
    {
      label: "NextGen AI Nexus",
      title: "Video Editor",
      desc: "Edit videos with one free trial"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 px-6 mb-12 max-w-7xl mx-auto">
      {featured.map((card, i) => (
        <div 
          key={i}
          className="border-2 border-mustard rounded-[20px] p-8 w-[280px] text-center flex flex-col justify-center transition-transform hover:scale-[1.02] duration-300"
        >
          <h4 className="text-mustard text-sm font-bold mb-1 uppercase tracking-wider">{card.label}</h4>
          <h2 className="text-[20px] font-bold text-[#111] leading-tight mb-2">{card.title}</h2>
          <p className="text-[#777777] text-xs leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
