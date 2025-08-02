
import React from 'react';
import { ShieldAlert, Route } from './icons/LucideIcons';

const Themes = () => {
  const themes = [
    {
      icon: <ShieldAlert className="w-12 h-12 text-[#C12A37] mb-4" />,
      title: "AI for Disaster Resilience",
      description: "Develop AI-powered solutions for early warning systems, real-time crisis mapping, and efficient resource allocation during emergencies."
    },
    {
      icon: <Route className="w-12 h-12 text-[#C12A37] mb-4" />,
      title: "AI for Urban Mobility",
      description: "Innovate with AI to optimize traffic flow, create smarter public transport networks, and enhance accessibility for all citizens in urban environments."
    }
  ];

  return (
    <section id="themes" className="py-20 sm:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Hackathon <span className="text-[#C12A37]">Themes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Focus your creativity on two critical areas where AI can make a profound impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {themes.map((theme, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-xl border border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-2">
              <div className="flex justify-start">
                 {theme.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-3">{theme.title}</h3>
              <p className="text-slate-400">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
