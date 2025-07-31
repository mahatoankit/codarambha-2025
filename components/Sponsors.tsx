
import React from 'react';

const sponsors = [
  { name: 'Innovate Corp', logoUrl: 'https://placehold.co/180x80/ffffff/000000?text=InnovateCorp' },
  { name: 'Tech Solutions', logoUrl: 'https://placehold.co/180x80/ffffff/000000?text=TechSolutions' },
  { name: 'CodeHub', logoUrl: 'https://placehold.co/180x80/ffffff/000000?text=CodeHub' },
  { name: 'Future AI', logoUrl: 'https://placehold.co/180x80/ffffff/000000?text=FutureAI' },
  { name: 'Data Dynamics', logoUrl: 'https://placehold.co/180x80/ffffff/000000?text=DataDynamics' },
  { name: 'CloudNet', logoUrl: 'https://placehold.co/180x80/ffffff/000000?text=CloudNet' },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 sm:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our <span className="text-[#C12A37]">Sponsors</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We are grateful for the support of our partners who help make this event possible.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={sponsor.logoUrl}
                alt={`${sponsor.name} logo`}
                className="h-16 md:h-20 filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
