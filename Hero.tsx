import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="hero-section px-6">
      <div className="flex items-center justify-between gap-8 lg:gap-16 max-w-[1400px] mx-auto py-4 relative">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="nextgen-title"
          >
            NextGen AI
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className="nextgen-title"
          >
            Nexus
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="future-title"
          >
            FUTURISTIC
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-tagline"
          >
            Discover and deploy cutting-edge AI applications from the NextGen AI Nexus Futuristic
          </motion.p>
        </div>

        <div className="vertical-slider hidden lg:block absolute left-1/2 -translate-x-1/2 flex-shrink-0">
          <motion.div
            animate={{ y: ["0%", "-400%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex flex-col w-full h-[500%]"
          >
            <img src="https://images.unsplash.com/photo-1620712943543-bcc463867000?auto=format&fit=crop&q=80&w=800" alt="V1" className="w-full h-1/5 object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="V2" className="w-full h-1/5 object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" alt="V3" className="w-full h-1/5 object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="V4" className="w-full h-1/5 object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1620712943543-bcc463867000?auto=format&fit=crop&q=80&w=800" alt="Loop" className="w-full h-1/5 object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
