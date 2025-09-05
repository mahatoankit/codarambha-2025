import React from 'react';
import ThreeDMarqueeDemo from './3d-marquee-demo.jsx';

const Hero = () => {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 z-0 opacity-80 w-full h-full">
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <ThreeDMarqueeDemo />
      </div>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>

      {/* Animated accent elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#C12A37]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-slate-200 to-gray-300 bg-clip-text text-transparent">
                CODARAMBHA
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-[#C12A37] via-red-500 to-rose-600 bg-clip-text text-transparent font-extrabold">
                2025
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 font-light">
              Where Ideas Begin. Innovation Reshapes Tomorrow.
            </p>
            <p className="max-w-2xl mx-auto text-md md:text-lg text-slate-400">
              Sunway College's flagship hackathon, where brilliant minds tackle real-world challenges in disaster resilience and urban mobility through AI.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="https://forms.gle/11HMh3XUArN2qfwS9"
              className="inline-block bg-[#C12A37] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-900/50"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
