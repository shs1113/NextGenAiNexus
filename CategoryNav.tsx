import { motion } from "motion/react";

const categories = [
  "All", "Video", "Image", "Writing", "Education", "Social",
  "Design", "Tech", "Utility", "Kids", "+18"
];

const categoryColors = [
  "#e68a17", // All
  "#d92b2b", // Video
  "#e68a17", // Image
  "#e5c13a", // Writing
  "#2f8f3c", // Education
  "#3f7fd9", // Social
  "#7b2bb8", // Design
  "#c21871", // Tech
  "#1fa7c4", // Utility
  "#00796b", // Kids
  "#6a3dbb", // +18
];

const categoryTextColors = [
  "#fff", // All
  "#fff", // Video
  "#fff", // Image
  "#111", // Writing
  "#fff", // Education
  "#fff", // Social
  "#fff", // Design
  "#fff", // Tech
  "#fff", // Utility
  "#fff", // Kids
  "#fff", // +18
];

interface CategoryNavProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function CategoryNav({ activeCategory, setActiveCategory }: CategoryNavProps) {
  const line1 = categories.slice(1, 6);
  const line2 = categories.slice(6);

  const renderButton = (cat: string, isMain: boolean = false) => {
    const index = categories.indexOf(cat);
    const color = categoryColors[index] || "#636e72";
    const textColor = categoryTextColors[index] || "#fff";
    const isActive = activeCategory === cat;

    if (isMain) {
      return (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className="cursor-pointer transition-all border-none flex items-center justify-center shadow-lg"
          style={{
            width: '220px',
            height: '58px',
            borderRadius: '18px',
            backgroundColor: color,
            color: textColor,
            fontSize: '22px',
            fontWeight: 900,
            transform: isActive ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          {cat === "All" ? "ALL APPS" : cat}
        </button>
      );
    }

    return (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className="cursor-pointer transition-all border-none flex items-center justify-center px-4"
        style={{
          minWidth: '120px',
          height: '52px',
          borderRadius: '16px',
          backgroundColor: color,
          color: textColor,
          fontSize: '16px',
          fontWeight: 800,
          boxShadow: isActive ? `0 6px 18px ${color}60` : '0 2px 6px rgba(0,0,0,0.1)',
          transform: isActive ? 'scale(1.1)' : 'scale(1)',
          opacity: isActive ? 1 : 0.9,
          zIndex: isActive ? 10 : 1
        }}
      >
        {cat}
      </button>
    );
  };

  return (
    <div className="category-wrapper mt-[30px] mb-[50px] px-6 overflow-hidden xl:overflow-visible">
      <div className="horizontal-slider left-slider-pos hidden xl:block flex-shrink-0">
        <motion.div
          animate={{ x: ["0%", "-300%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex w-[400%] h-full"
        >
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" alt="Tech" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1620712943543-bcc463867000?auto=format&fit=crop&q=80&w=800" alt="AI" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="App Ad 1" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" alt="Loop" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      <div className="category-center gap-[14px]">
        <div className="flex justify-center gap-[12px] flex-wrap md:flex-nowrap">
          {renderButton("All", true)}
        </div>
        <div className="flex justify-center gap-[12px] flex-wrap md:flex-nowrap mt-[14px]">
          {line1.map(cat => renderButton(cat))}
        </div>
        <div className="flex justify-center gap-[12px] flex-wrap md:flex-nowrap mt-[14px]">
          {line2.map(cat => renderButton(cat))}
        </div>
      </div>

      <div className="horizontal-slider right-slider-pos hidden xl:block flex-shrink-0">
        <motion.div
          animate={{ x: ["-300%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex w-[400%] h-full"
        >
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Data" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="Nexus" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="App Ad 2" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Loop" className="w-1/4 h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>
    </div>
  );
}
