
import React from 'react';

const Hero: React.FC = () => {
  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 via-slate-900 to-rose-900/30 animate-gradient-xy"></div>
        <style>{`
          @keyframes gradient-xy {
              0%, 100% {
                  background-size: 400% 400%;
                  background-position: 10% 0%;
              }
              50% {
                  background-size: 200% 200%;
                  background-position: 91% 100%;
              }
          }
          .animate-gradient-xy {
              animation: gradient-xy 15s ease infinite;
          }
        `}</style>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4">
          Codarambha Hackfest <span className="text-[#C12A37]">2025</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8 font-light">
          Where Ideas Begin. Innovation Reshapes Tomorrow.
        </p>
        <p className="max-w-2xl mx-auto text-md md:text-lg text-slate-400 mb-12">
          Sunway College’s flagship hackathon, where brilliant minds tackle real-world challenges in disaster resilience and urban mobility through AI.
        </p>
        <a 
          href="#registration" 
          onClick={handleRegisterClick}
          className="bg-[#C12A37] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-900/50"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
