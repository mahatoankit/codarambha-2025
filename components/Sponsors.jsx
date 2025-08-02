
import React from 'react';
import { motion } from 'motion/react';

const organizationInfo = {
  college: {
    name: "Sunway College Kathmandu",
    logo: "/sunway-logo.svg", // Using the actual Sunway College logo
    description: "Creating AI Leaders"
  },
  organizer: {
    club: "AI Club (SSRC)",
    fullName: "AI Club - Sunway Students Representative Council",
    logo: "/ssrc-logo.svg", // Using the actual SSRC logo
    lead: {
      name: "Ankit Mahato",
      title: "Head of AI Club",
      role: "Event Lead Organizer"
    }
  },
  department: {
    name: "(Hons) Computer Science and AI",
    abbreviation: "CS&AI",
    icon: "🤖",
    description: "The premier department fostering innovation in Computer Science and Artificial Intelligence"
  },
  collaborators: [
    { 
      name: "SSRC", 
      description: "Student Representative Council - Event Coordination & Management",
      icon: "👥"
    },
    { 
      name: "Technical Department", 
      description: "Infrastructure Support & Technical Resources",
      icon: "⚙️"
    },
    { 
      name: "Innovation Lab", 
      description: "Workspace & Development Environment",
      icon: "🚀"
    }
  ]
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Organized <span className="text-[#C12A37]">By</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            An intra-college hackathon proudly presented by the AI Club, bringing together the brightest minds from Sunway College Kathmandu
          </motion.p>
        </div>

        {/* Main Organization Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* College Info */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg">
                <img
                  src={organizationInfo.college.logo}
                  alt={`${organizationInfo.college.name} logo`}
                  className="h-20 w-20 md:h-24 md:w-24 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {organizationInfo.college.name}
                </h3>
                <p className="text-[#C12A37] font-semibold text-lg mb-3">
                  {organizationInfo.college.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm">Host Institution</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Club & Organizer Info */}
          <motion.div 
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/30 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                <img
                  src={organizationInfo.organizer.logo}
                  alt="SSRC Logo"
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Fallback to emoji if logo fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-2xl" style={{ display: 'none' }}>🤖</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{organizationInfo.organizer.club}</h4>
              <p className="text-slate-400 text-sm mb-4">{organizationInfo.organizer.fullName}</p>
            </div>
            
            <div className="border-t border-slate-700/50 pt-6">
              <h5 className="text-lg font-semibold text-white mb-3 text-center">Event Lead</h5>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#C12A37] to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AM</span>
                </div>
                <h6 className="text-xl font-bold text-white">{organizationInfo.organizer.lead.name}</h6>
                <p className="text-[#C12A37] font-medium text-sm mb-1">{organizationInfo.organizer.lead.title}</p>
                <p className="text-slate-400 text-xs">{organizationInfo.organizer.lead.role}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Department Showcase */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#C12A37]">Department</span>
          </motion.h3>
          
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/30 rounded-3xl p-8 text-center hover:border-[#C12A37]/30 transition-all duration-500 group">
              {/* Department Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#C12A37] to-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{organizationInfo.department.icon}</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C12A37]/20 to-red-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Department Name */}
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#C12A37] transition-colors duration-300">
                {organizationInfo.department.name}
              </h4>
              
              {/* Department Abbreviation Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 rounded-full px-6 py-2 mb-4">
                <div className="w-2 h-2 bg-[#C12A37] rounded-full animate-pulse"></div>
                <span className="text-[#C12A37] font-bold text-lg">{organizationInfo.department.abbreviation}</span>
              </div>
              
              {/* Department Description */}
              <p className="text-slate-300 leading-relaxed max-w-lg mx-auto">
                {organizationInfo.department.description}
              </p>
              
              {/* Decorative Elements */}
              <div className="flex justify-center items-center gap-4 mt-6 opacity-60">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C12A37]"></div>
                <div className="w-2 h-2 bg-[#C12A37] rounded-full"></div>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C12A37]"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Support & Collaboration */}
        <div className="mb-12">
          <motion.h3 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C12A37]">Support</span> & Collaboration
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {organizationInfo.collaborators.map((collab, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/30 rounded-2xl p-6 text-center hover:border-[#C12A37]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-4xl mb-4">{collab.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{collab.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{collab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C12A37]/10 to-red-500/10 border border-[#C12A37]/30 rounded-full px-8 py-4 backdrop-blur-sm">
            <div className="w-3 h-3 bg-[#C12A37] rounded-full animate-pulse"></div>
            <span className="text-[#C12A37] font-semibold text-lg">Proudly Organized by AI Club (SSRC) - Sunway College Kathmandu</span>
            <div className="w-3 h-3 bg-[#C12A37] rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
