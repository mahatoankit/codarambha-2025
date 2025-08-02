
import React from 'react';
import { FaCrown, FaStar, FaUsers, FaMedal } from 'react-icons/fa';

// Head - Top Position
const head = [
  { 
    name: 'You', 
    role: 'Head of AI Club', 
    tier: 'head',
    imageUrl: 'https://placehold.co/300x400/C12A37/white?text=HEAD',
    description: 'Leading the AI Club and organizing Codarambha 2025'
  },
];

// Executive Members - Second Tier
const executives = [
  { 
    name: 'Rohan Koirala', 
    role: 'Executive Member', 
    tier: 'executive',
    imageUrl: 'https://placehold.co/280x380/4f46e5/white?text=RK',
    description: 'Co-organizing and strategic planning'
  },
  { 
    name: 'Smriti Basnet', 
    role: 'Executive Member', 
    tier: 'executive',
    imageUrl: 'https://placehold.co/280x380/16a34a/white?text=SB',
    description: 'Operations and team coordination'
  },
];

// Core Organizing Committee - Third Tier
const coreCommittee = [
  { 
    name: 'Alice Johnson', 
    role: 'Event Director', 
    tier: 'core',
    imageUrl: 'https://placehold.co/260x360/0ea5e9/white?text=AJ',
    description: 'Overseeing event execution'
  },
  { 
    name: 'Bob Williams', 
    role: 'Technical Coordinator', 
    tier: 'core',
    imageUrl: 'https://placehold.co/260x360/db2777/white?text=BW',
    description: 'Managing hackathon infrastructure'
  },
  { 
    name: 'Charlie Brown', 
    role: 'Partnerships Lead', 
    tier: 'core',
    imageUrl: 'https://placehold.co/260x360/6d28d9/white?text=CB',
    description: 'Building industry connections'
  },
];

// Department Heads - Fourth Tier
const departmentHeads = [
  { 
    name: 'Diana Miller', 
    role: 'Marketing Head', 
    tier: 'department',
    imageUrl: 'https://placehold.co/240x340/f97316/white?text=DM',
    description: 'Social media & outreach'
  },
  { 
    name: 'Ethan Davis', 
    role: 'Logistics Head', 
    tier: 'department',
    imageUrl: 'https://placehold.co/240x340/10b981/white?text=ED',
    description: 'Venue & operations'
  },
  { 
    name: 'Fiona Garcia', 
    role: 'Sponsorship Head', 
    tier: 'department',
    imageUrl: 'https://placehold.co/240x340/8b5cf6/white?text=FG',
    description: 'Corporate partnerships'
  },
  { 
    name: 'George Smith', 
    role: 'Design Head', 
    tier: 'department',
    imageUrl: 'https://placehold.co/240x340/ef4444/white?text=GS',
    description: 'Visual identity & UX'
  },
];

// Team Coordinators - Fifth Tier
const teamCoordinators = [
  { 
    name: 'Hannah Wilson', 
    role: 'Volunteer Coordinator', 
    tier: 'coordinator',
    imageUrl: 'https://placehold.co/220x320/f59e0b/white?text=HW',
    description: 'Managing volunteer teams'
  },
  { 
    name: 'Ian Rodriguez', 
    role: 'Registration Coordinator', 
    tier: 'coordinator',
    imageUrl: 'https://placehold.co/220x320/3b82f6/white?text=IR',
    description: 'Participant management'
  },
  { 
    name: 'Julia Kim', 
    role: 'Content Coordinator', 
    tier: 'coordinator',
    imageUrl: 'https://placehold.co/220x320/ec4899/white?text=JK',
    description: 'Workshop & content planning'
  },
  { 
    name: 'Kevin Zhang', 
    role: 'Technology Coordinator', 
    tier: 'coordinator',
    imageUrl: 'https://placehold.co/220x320/84cc16/white?text=KZ',
    description: 'Platform & tools management'
  },
];

const MemberCard = ({ member, size = 'default' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'head':
        return {
          container: 'w-80 h-96',
          image: 'w-full h-full',
          overlay: 'p-8',
          title: 'text-2xl',
          role: 'text-lg',
          desc: 'text-base'
        };
      case 'executive':
        return {
          container: 'w-72 h-80',
          image: 'w-full h-full',
          overlay: 'p-6',
          title: 'text-xl',
          role: 'text-base',
          desc: 'text-sm'
        };
      case 'core':
        return {
          container: 'w-64 h-72',
          image: 'w-full h-full',
          overlay: 'p-5',
          title: 'text-lg',
          role: 'text-sm',
          desc: 'text-xs'
        };
      case 'department':
        return {
          container: 'w-56 h-64',
          image: 'w-full h-full',
          overlay: 'p-4',
          title: 'text-base',
          role: 'text-sm',
          desc: 'text-xs'
        };
      default:
        return {
          container: 'w-48 h-56',
          image: 'w-full h-full',
          overlay: 'p-4',
          title: 'text-sm',
          role: 'text-xs',
          desc: 'text-xs'
        };
    }
  };

  const classes = getSizeClasses();

  return (
    <div className="group cursor-pointer">
      <div className={`${classes.container} relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
        {/* Member Image - Full Background */}
        <img
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          className={`${classes.image} object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl`}
        />
        
        {/* Dark Overlay - Always Present but Subtle */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
        
        {/* Details Overlay - Slides in from Top on Hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 
          transform -translate-y-full group-hover:translate-y-0 
          transition-transform duration-500 ease-out
          flex flex-col justify-end rounded-2xl overflow-hidden
        `}>
          <div className={`text-white ${classes.overlay}`}>
            <h3 className={`${classes.title} font-bold mb-2 leading-tight`}>
              {member.name}
            </h3>
            <p className={`${classes.role} text-[#C12A37] font-semibold mb-3`}>
              {member.role}
            </p>
            <p className={`${classes.desc} text-gray-300 leading-relaxed opacity-90`}>
              {member.description}
            </p>
          </div>
        </div>

        {/* Name Badge - Always Visible at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform group-hover:translate-y-full transition-transform duration-500 rounded-b-2xl">
          <p className="text-white font-semibold text-center">
            {member.name}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-[#C12A37]">Team</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Organized by the <span className="text-[#C12A37] font-semibold">AI Club</span> - passionate individuals working together to create an extraordinary hackathon experience
          </p>
        </div>

        {/* Head - Top Position */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-3">
              <FaCrown className="text-[#C12A37]" />
              Head of AI Club
            </h3>
          </div>
          <div className="flex justify-center">
            {head.map((member, index) => (
              <MemberCard key={index} member={member} size="head" />
            ))}
          </div>
        </div>

        {/* Executive Members */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-3">
              <FaStar className="text-blue-400" />
              Executive Members
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {executives.map((member, index) => (
              <MemberCard key={index} member={member} size="executive" />
            ))}
          </div>
        </div>

        {/* Core Organizing Committee */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white flex items-center justify-center gap-3">
              <FaMedal className="text-green-400" />
              Core Organizing Committee
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {coreCommittee.map((member, index) => (
              <MemberCard key={index} member={member} size="core" />
            ))}
          </div>
        </div>

        {/* Department Heads */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white flex items-center justify-center gap-3">
              <FaUsers className="text-purple-400" />
              Department Heads
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {departmentHeads.map((member, index) => (
              <MemberCard key={index} member={member} size="department" />
            ))}
          </div>
        </div>

        {/* Team Coordinators */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-base font-bold text-white">Team Coordinators</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {teamCoordinators.map((member, index) => (
              <MemberCard key={index} member={member} size="coordinator" />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Interested in being part of our organizing team? The AI Club is always looking for passionate individuals to help create amazing experiences!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
