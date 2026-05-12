import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="top-header bg-[#1a1a1a] border-b border-[#333] sticky top-0 z-50 px-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[64px]">
        <div className="header-title text-[#111] text-[18px] font-bold uppercase tracking-tight">
          NextGen AI Nexus
        </div>
        
        <div className="relative group max-w-[220px] w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#202124] transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#F0F0F0] rounded-[20px] py-2 pl-10 pr-4 text-sm focus:bg-white focus:ring-1 focus:ring-gray-200 outline-none transition-all"
          />
        </div>
      </div>
    </header>
  );
}
