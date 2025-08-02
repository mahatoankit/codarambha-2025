
import React from 'react';
import { motion } from 'motion/react';

const organizationInfo = {
  college: {
    name: "Sunway College Kathmandu",
    logo: "/sunway-logo.svg", // Using the actual Sunway College logo
    description: "Excellence in Engineering Education"
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
  supportingDepartments: [
    { name: "Computer Science & Engineering", abbreviation: "CSE", icon: "💻" },
    { name: "Information Technology", abbreviation: "IT", icon: "🔧" },
    { name: "Electronics & Communication", abbreviation: "ECE", icon: "📡" },
    { name: "Data Science & Analytics", abbreviation: "DSA", icon: "📊" }
  ],
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

        {/* Participating Departments */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Participating <span className="text-[#C12A37]">Departments</span>
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {organizationInfo.supportingDepartments.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-700/50 hover:border-[#C12A37]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl mb-3">{dept.icon}</div>
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#C12A37] to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{dept.abbreviation}</span>
                </div>
                <h4 className="text-sm font-semibold text-white leading-tight">{dept.name}</h4>
              </motion.div>
            ))}
          </div>
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
