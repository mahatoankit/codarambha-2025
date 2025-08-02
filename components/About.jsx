import React from 'react';
import { 
  FaBrain, 
  FaLightbulb, 
  FaRocket 
} from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaBrain className="w-10 h-10 text-[#C12A37]" />,
      title: "Ideation",
      description: "Sparking creative solutions for pressing real-world problems."
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-[#C12A37]" />,
      title: "Innovation",
      description: "Fostering a culture of technological creativity and forward-thinking."
    },
    {
      icon: <FaRocket className="w-10 h-10 text-[#C12A37]" />,
      title: "Implementation",
      description: "Bringing ideas to life through rapid prototyping and mentorship."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            The Legacy of <span className="text-[#C12A37]">Innovation</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Codarambha is more than just a hackathon; it's a launchpad for Sunway's brightest minds. We blend a competitive ideathon with an intensive 10-day mentored build sprint, culminating in a public demo that showcases true impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-[#C12A37] hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
