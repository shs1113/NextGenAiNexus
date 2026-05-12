export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold font-display tracking-tight text-white">NEXTGEN AI NEXUS</div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            World's leading marketplace for artificial intelligence. Connecting developers and creators with cutting-edge tools.
          </p>
        </div>

        <div>
          <h4 className="text-mustard font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-mustard font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-mustard font-bold mb-6 text-sm uppercase tracking-widest">Subscribe</h4>
          <p className="text-gray-400 text-sm mb-4">Stay updated with latest AI trends.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/10 border-none rounded-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-mustard transition-all"
            />
            <button className="bg-mustard text-[#111] font-bold px-4 py-2 rounded-lg text-sm hover:bg-mustard-dark transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© 2026 NextGen AI Nexus. All rights reserved.</p>
        <div className="flex gap-6 text-gray-500 text-xs">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
