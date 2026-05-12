export interface AppData {
  id: number;
  name: string;
  description: string;
  tag: 'FREE' | 'PAID' | 'TRIAL';
  category: string;
  icon?: string;
  url?: string;
}

const balancedColors = [
  '#D32F2F', // Deep Red
  '#F57C00', // Vibrant Orange
  '#FBC02D', // Canary Yellow
  '#388E3C', // Kelly Green
  '#1976D2', // Cobalt Blue
  '#7B1FA2', // Royal Purple
  '#C2185B', // Bright Magenta
  '#0097A7', // Aqua Cyan
  '#00796B', // Forest Green
  '#512DA8', // Deep Indigo
];

export default function AppCard({ app }: { app: AppData }) {
  const colorIndex = app.id % 10;
  const bgColor = balancedColors[colorIndex];
  
  const tagColors = {
    FREE: '#7b1fa2',
    TRIAL: '#d81b60',
    PAID: '#14a3b8'
  };

  return (
    <div 
      className="w-[160px] flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:-translate-y-1 relative"
      onClick={() => app.url && window.open(app.url, '_blank')}
    >
      <div className="absolute -top-2 -right-2 z-10">
        <span 
          className="text-[10px] font-black px-2 py-0.5 rounded-full text-white shadow-md border border-white/20"
          style={{ backgroundColor: tagColors[app.tag] }}
        >
          {app.tag}
        </span>
      </div>
      <div 
        className="w-[160px] h-[160px] rounded-[32px] flex items-center justify-center mb-4 overflow-hidden border-none p-6"
        style={{ 
          backgroundColor: bgColor,
          boxShadow: '0 10px 20px rgba(0,0,0,0.15), inset 0 -4px 6px rgba(0,0,0,0.1), inset 0 4px 6px rgba(255,255,255,0.3)'
        }}
      >
        {app.icon ? (
          <img 
            src={app.icon} 
            alt={app.name} 
            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        ) : null}
      </div>
      <div 
        className="text-[16px] text-center line-clamp-2 leading-[1.4] h-[2.8em] font-medium w-full px-2 mt-1"
        style={{ color: bgColor }}
      >
        {app.name.replace('\n', ' ')}
      </div>
    </div>
  );
}

