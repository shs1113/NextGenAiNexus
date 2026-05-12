import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free Plan",
    price: "0",
    features: ["Basic AI Tools", "Standard Processing", "Community Support"],
    featured: false
  },
  {
    name: "Affordable Creators",
    price: "3",
    features: ["All Tools Unlocked", "Unlimited Credits", "Fastest Processing", "Early Access"],
    featured: true
  },
  {
    name: "Paid & Dedicated",
    price: "12",
    features: ["API Integration", "Dedicated Support", "Custom Fine-tuning", "Team Management"],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-display">Simple, Transparent Pricing</h2>
        <p className="text-gray-600">Choose the plan that fits your intelligence needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`bg-white rounded-3xl p-8 transition-all duration-500 relative ${
              plan.featured 
                ? 'ring-4 ring-mustard shadow-2xl scale-105 z-10' 
                : 'border border-gray-200 hover:border-mustard/30'
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mustard text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-gray-500 mb-2 uppercase tracking-widest">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold font-display">${plan.price}</span>
              <span className="text-gray-400">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-left">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3 text-gray-600 text-sm">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
              plan.featured 
                ? 'bg-mustard text-white hover:bg-mustard-dark shadow-lg shadow-mustard/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-mustard hover:text-white'
            }`}>
              GET STARTED
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
