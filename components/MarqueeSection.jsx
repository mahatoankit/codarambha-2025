import React from 'react';
import ThreeDMarqueeDemo from './3d-marquee-demo.jsx';

const MarqueeSection = () => {
  return (
    <section id="showcase" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Innovation <span className="text-[#C12A37]">Showcase</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Discover the cutting-edge technologies and creative solutions that power modern innovation
        </p>
      </div>

      {/* 3D Marquee Animation */}
      <div className="relative z-0">
        <ThreeDMarqueeDemo />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#C12A37]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default MarqueeSection;
