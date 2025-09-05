import React from 'react';
import { FaCrown, FaStar, FaUsers, FaMedal } from 'react-icons/fa';

// Head - Top Position
const head = [
  {
    name: 'Ankit Mahato',
    role: 'Head of AI Club',
    tier: 'head',
    imageUrl: '/images/team/ankit-mahato.jpg',
    description: 'Leading the AI Club and organizing Codarambha 2025'
  },
];

// Executive Members - Second Tier
const executives = [
];

// Core Organizing Committee - Third Tier
const coreCommittee = [
  {
    name: 'Rohan Koirala',
    role: 'Executive Member',
    tier: 'executive',
    imageUrl: 'https://src.rohan-koirala.com.np/portfolio/Picture/TheRohanKoirala.png?text=RK',
    description: 'Co-organizing and team coordination'
  },
  {
    name: 'Smriti Basnet',
    role: 'Executive Member',
    tier: 'executive',
    imageUrl: '/images/team/meoow - Smriti Basnet.jpg',
    description: 'Documentation and finance'
  },
  {
    name: 'Madan Pandey ',
    role: 'Event Head SSRC',
    tier: 'core',
    imageUrl: '/images/team/IMG-20240827-WA0001 - Madan Pandey.jpg',
    description: 'Logistics Support'
  },
  {
    name: 'Aarohishree Subedi',
    role: 'Executive Member CLub',
    tier: 'core',
    imageUrl: '/images/team/profile-pic - Aarohishree Subedi.png',
    description: 'Judge and Mentor Coordinator'
  },
  {
    name: 'Sanket Shrestha',
    role: 'Vice President SSRC',
    tier: 'core',
    imageUrl: '/images/team/frmal - Sanket Shrestha.jpeg',
    description: 'Tech Management'
  },
  {
    name: 'Prashanta Acharya',
    role: 'President - SSRC',
    tier: 'core',
    imageUrl: '/images/team/Prashanta Acharya - Prashanta Acharya.jpg',
    description: 'Communication and Outreach Coordinator'
  },
  {
    name: 'Krrishpana Karmacharya',
    role: 'Vice Sectary - SSRC',
    tier: 'core',
    imageUrl: '/images/team/krrishpana - KRRISHPANA KARMACHARYA.jpg',
    description: 'Documentation and finance'
  },
];

// Department Heads - Fourth Tier
const departmentHeads = [
  {
    name: 'Ayush Kaji Dangol',
    role: 'IoT Research Lead - Sunway Collage',
    tier: 'core',
    imageUrl: '/images/team/FB_IMG_1757000686068 - Ayush Dangol.jpg',
    description: 'Advisor'
  },
  {
    name: 'Jatin Bhushal',
    role: 'Innovation Lead - Sunway Collage',
    tier: 'core',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHXYH6qC1dXeg/profile-displayphoto-shrink_800_800/B4DZPF2vZyHMAc-/0/1734191282662?e=1759968000&v=beta&t=fTPEbzsXhxc6uFN-cSaZIaltGapiYku3aotERtPwPrs',
    description: 'Advisor'
  },
];

// Team Coordinators - Fifth Tier
const teamCoordinators = [
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
      <div className={`${classes.container} relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50`}>
        {/* Member Image - Full Background */}
        <img
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          className={`${classes.image} object-cover transition-transform duration-700 group-hover:scale-125 rounded-3xl`}
        />

        {/* Subtle Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C12A37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderRadius: 'inherit' }}></div>

        {/* Dark Overlay - Always Present but Subtle */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          style={{ borderRadius: 'inherit' }}></div>

        {/* Details Overlay - Slides in from Top to Bottom on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col justify-center overflow-hidden backdrop-blur-sm"
          style={{ borderRadius: 'inherit' }}>
          <div className={`text-white ${classes.overlay} transform translate-y-0`}>
            <h3 className={`${classes.title} font-bold mb-2 leading-tight text-white drop-shadow-lg`}>
              {member.name}
            </h3>
            <p className={`${classes.role} text-[#C12A37] font-semibold mb-3 drop-shadow-md`}>
              {member.role}
            </p>
            <p className={`${classes.desc} text-gray-200 leading-relaxed opacity-95 drop-shadow-sm`}>
              {member.description}
            </p>
          </div>
        </div>

        {/* Name Badge - Always Visible at Bottom with Enhanced Design */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transform group-hover:translate-y-full transition-transform duration-700 backdrop-blur-sm"
          style={{ borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
          <p className="text-white font-semibold text-center drop-shadow-lg">
            {member.name}
          </p>
          {/* Subtle accent line */}
          <div className="w-12 h-0.5 bg-[#C12A37] mx-auto mt-1 rounded-full opacity-80"></div>
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

        {/* Team Hierarchy */}

        {/* Head - Center Top */}
        <div className="flex justify-center mb-16">
          <div className="relative group-card">
            {/* Elegant Crown Badge */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-3 rounded-full shadow-2xl border-2 border-yellow-300">
                <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 p-1 rounded-full">
                  <FaCrown className="text-white text-2xl drop-shadow-lg" />
                </div>
              </div>
              {/* Elegant glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-30 blur-sm"></div>
            </div>
            <div className="group">
              {head.map((member, index) => (
                <MemberCard key={index} member={member} size="head" />
              ))}
            </div>
          </div>
        </div>

        {/* Executives - Second Row */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-8 flex-wrap justify-center">
            {executives.map((member, index) => (
              <div key={index} className="relative group">
                {/* Elegant Star Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-2.5 rounded-full shadow-2xl border-2 border-blue-400">
                    <div className="bg-gradient-to-t from-blue-700 to-blue-500 p-0.5 rounded-full">
                      <FaStar className="text-white text-lg drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Elegant glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-25 blur-sm"></div>
                </div>
                <MemberCard member={member} size="executive" />
              </div>
            ))}
          </div>
        </div>

        {/* Core Committee - Third Row */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-6 flex-wrap justify-center max-w-5xl">
            {coreCommittee.map((member, index) => (
              <div key={index} className="relative group">
                {/* Elegant Medal Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 p-2 rounded-full shadow-2xl border-2 border-green-400">
                    <div className="bg-gradient-to-t from-green-600 to-green-500 p-0.5 rounded-full">
                      <FaMedal className="text-white text-base drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Elegant glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-20 blur-sm"></div>
                </div>
                <MemberCard member={member} size="core" />
              </div>
            ))}
          </div>
        </div>

        {/* Department Heads - Fourth Row */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-4 flex-wrap justify-center max-w-6xl">
            {departmentHeads.map((member, index) => (
              <div key={index} className="relative group">
                {/* Elegant Team Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 via-violet-600 to-purple-600 p-1.5 rounded-full shadow-2xl border-2 border-purple-400">
                    <div className="bg-gradient-to-t from-purple-600 to-purple-500 p-0.5 rounded-full">
                      <FaUsers className="text-white text-sm drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Elegant glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full opacity-15 blur-sm"></div>
                </div>
                <MemberCard member={member} size="department" />
              </div>
            ))}
          </div>
        </div>

        {/* Team Coordinators - Fifth Row */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-4 flex-wrap justify-center max-w-4xl">
            {teamCoordinators.map((member, index) => (
              <div key={index} className="relative group">
                {/* Elegant Coordinator Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600 p-1.5 rounded-full shadow-2xl border-2 border-orange-400">
                    <div className="bg-gradient-to-t from-orange-600 to-orange-500 p-0.5 rounded-full">
                      <FaUsers className="text-white text-xs drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Elegant glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full opacity-15 blur-sm"></div>
                </div>
                <MemberCard member={member} size="default" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
