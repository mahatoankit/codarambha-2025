import React from 'react';
import { FaCrown, FaStar, FaUsers, FaMedal } from 'react-icons/fa';

// Executive Members - Second Tier
const executives = [
    {
        name: 'Quantum Coders',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'Git Force',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'ResQNova',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'BXS',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'CodStorm',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'Sherescend',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'TVTT',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    },
    {
        name: 'Synergy',
        tier: 'executive',
        imageUrl: 'https://as2.ftcdn.net/jpg/02/34/12/57/1000_F_234125712_uMDzvzfEW0PsdpPNqlH9i5v88nXRM107.jpg',
    }
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

                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#C12A37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ borderRadius: 'inherit' }}></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    style={{ borderRadius: 'inherit' }}></div> */}

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

const Top8Team = () => {
    return (
        <section id="team" className="py-20 sm:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Meet Our <span className="text-[#C12A37]">Top 8</span> Teams
                    </h2>
                </div>

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
            </div>
        </section>
    );
};

export default Top8Team;
